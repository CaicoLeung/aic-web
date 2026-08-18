import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  parseChangelogMarkdown,
  parseSections,
  sliceReleaseNotes,
  sortNewestFirst,
  type ChangelogEntry,
} from '../src/data/changelog.ts';

// ── Keep-a-Changelog fixture modeled on the live aic CHANGELOG.md ──
const CHANGELOG_MD = `# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] - 2026-07-09

### Features

- Expand to 12 providers, refresh default models, add base URL

## [0.1.7] - 2026-07-08

### Documentation

- Add Homebrew installation instructions
- Add website link

### Styling

- Apply cargo fmt to unblock 0.1.6 release

### Miscellaneous

- Remove banner display
`;

// ── GitHub release body fixture modeled on the live aic releases ──
const RELEASE_BODY = `## Release Notes

### Features

- Expand to 12 providers, refresh default models, add base URL

## Install aic 0.2.0

### Install prebuilt binaries via shell script

\`\`\`sh
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/CaicoLeung/aic/releases/download/v0.2.0/aic-installer.sh | sh
\`\`\`

### Install prebuilt binaries via Homebrew

\`\`\`sh
brew install CaicoLeung/aic/aic
\`\`\`

## Download aic 0.2.0

|  File  | Platform |
| --- | --- |
| aic-aarch64.tar.gz | macOS Apple |
`;

describe('parseChangelogMarkdown', () => {
  it('extracts versions in source order with dates and synthesized URLs', () => {
    const entries = parseChangelogMarkdown(CHANGELOG_MD);
    assert.equal(entries.length, 2);
    assert.equal(entries[0]!.version, '0.2.0');
    assert.equal(entries[0]!.date, '2026-07-09');
    assert.equal(
      entries[0]!.url,
      'https://github.com/CaicoLeung/aic/releases/tag/v0.2.0',
    );
    assert.equal(entries[1]!.version, '0.1.7');
    assert.equal(entries[1]!.date, '2026-07-08');
  });

  it('parses single-category and multi-category releases verbatim', () => {
    const entries = parseChangelogMarkdown(CHANGELOG_MD);
    // 0.2.0 — one section.
    const first = entries[0]!.sections;
    assert.deepEqual(
      first.map((s) => s.kind),
      ['Features'],
    );
    assert.equal(first[0]!.items.length, 1);
    assert.equal(
      first[0]!.items[0],
      'Expand to 12 providers, refresh default models, add base URL',
    );

    // 0.1.7 — three sections, source order preserved.
    const second = entries[1]!.sections;
    assert.deepEqual(
      second.map((s) => s.kind),
      ['Documentation', 'Styling', 'Miscellaneous'],
    );
    assert.equal(second[0]!.items.length, 2);
    assert.equal(second[1]!.items.length, 1);
  });

  it('returns an empty array for a document with no release headers', () => {
    assert.deepEqual(parseChangelogMarkdown('# Changelog\n\nNo releases yet.'), []);
  });
});

describe('parseSections', () => {
  it('drops empty sections and preserves source order', () => {
    const sections = parseSections(`### Features

- one

### Bug Fixes

### Documentation

- two
`);
    // Bug Fixes has no bullets — should be absent.
    assert.deepEqual(
      sections.map((s) => s.kind),
      ['Features', 'Documentation'],
    );
    assert.equal(sections[0]!.items[0], 'one');
    assert.equal(sections[1]!.items[0], 'two');
  });

  it('accepts both - and * bullets', () => {
    const sections = parseSections(`### Mixed

- dash item
* star item
`);
    assert.equal(sections[0]!.items.length, 2);
  });
});

describe('sliceReleaseNotes', () => {
  it('keeps only the Release Notes section, stripping install/download boilerplate', () => {
    const sliced = sliceReleaseNotes(RELEASE_BODY);
    assert.ok(sliced.startsWith('## Release Notes'));
    assert.ok(!sliced.includes('Install aic'));
    assert.ok(!sliced.includes('brew install'));
    assert.ok(sliced.includes('Expand to 12 providers'));

    // Only the Features section survives — install commands are gone.
    const sections = parseSections(sliced);
    assert.deepEqual(
      sections.map((s) => s.kind),
      ['Features'],
    );
  });

  it('returns empty string when the body has no Release Notes section', () => {
    assert.equal(sliceReleaseNotes('# Some other format\n\nbody'), '');
  });

  it('returns the whole Release Notes block when no install section follows', () => {
    const body = `## Release Notes

### Features

- only note
`;
    const sliced = sliceReleaseNotes(body);
    assert.ok(sliced.includes('only note'));
  });
});

describe('sortNewestFirst', () => {
  // Deliberately out of date order — proves the sort, not the source, decides "latest".
  const fixture: readonly ChangelogEntry[] = [
    { version: '0.1.7', date: '2026-07-08', url: 'https://example/0.1.7', sections: [] },
    { version: '0.2.0', date: '2026-07-09', url: 'https://example/0.2.0', sections: [] },
    { version: '0.1.6', date: '2026-07-01', url: 'https://example/0.1.6', sections: [] },
  ];

  it('orders entries newest-first regardless of input order', () => {
    const sorted = sortNewestFirst(fixture);
    assert.deepEqual(
      sorted.map((e) => e.version),
      ['0.2.0', '0.1.7', '0.1.6'],
    );
  });

  it('does not mutate the input', () => {
    sortNewestFirst(fixture);
    assert.equal(fixture[0]!.version, '0.1.7', 'input order preserved');
  });
});
