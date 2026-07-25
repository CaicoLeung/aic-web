/**
 * Build-time changelog loader (ADR-0003 pattern; ADR-0008 carve-out).
 *
 * Two sources, one shared category parser:
 *
 *   1. Primary — `CHANGELOG.md` from the aic source repo, parsed as
 *      Keep-a-Changelog (`## [x.y.z] - YYYY-MM-DD` blocks).
 *   2. Fallback — GitHub Releases API. Each release body's
 *      `## Release Notes` section is sliced out (install/download
 *      boilerplate stripped), prereleases are hidden, and the same
 *      `### Category` + bullet grammar is parsed.
 *
 * On double-failure this throws, failing the whole `astro build`.
 * ADR-0003's "never breaks a deploy" promise is intentionally carved
 * out for the changelog page (ADR-0008): a stale changelog misleads
 * visitors, so failing loud — and letting the nightly cron surface
 * the outage — is preferable to shipping incorrect release notes.
 */

import { GITHUB_OWNER, GITHUB_RAW_BASE, GITHUB_REPO, GITHUB_URL } from '@/config/site';

export interface ChangelogSection {
  /** Category name verbatim from source — `Features`, `Bug Fixes`, etc. */
  readonly kind: string;
  readonly items: readonly string[];
}

export interface ChangelogEntry {
  /** Semver, no leading `v` — e.g. `0.2.0`. */
  readonly version: string;
  /** ISO calendar date — `YYYY-MM-DD`. */
  readonly date: string;
  /** Canonical link to the GitHub release page. */
  readonly url: string;
  /** Categorized change list. May be empty if a release shipped no notes. */
  readonly sections: readonly ChangelogSection[];
}

const RAW_CHANGELOG_URL = `${GITHUB_RAW_BASE}/CHANGELOG.md`;
const RELEASES_API_URL = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases`;
const FETCH_TIMEOUT_MS = 8000;

/**
 * Walk `### Kind` subheads and the `- item` bullets under each. Source
 * order preserved. Empty sections are dropped. Used by both adapters so
 * the rendered shape is identical regardless of which source was live.
 */
export function parseSections(block: string): ChangelogSection[] {
  const sections: ChangelogSection[] = [];
  let current: { kind: string; items: string[] } | null = null;

  for (const raw of block.split('\n')) {
    const line = raw.replace(/\s+$/, '');
    const heading = line.match(/^###\s+(.+?)\s*$/);
    if (heading) {
      if (current && current.items.length > 0) sections.push(current);
      current = { kind: heading[1]!.trim(), items: [] };
      continue;
    }
    const bullet = line.match(/^\s*[-*]\s+(.+?)\s*$/);
    if (bullet && current) current.items.push(bullet[1]!.trim());
  }
  if (current && current.items.length > 0) sections.push(current);
  return sections;
}

/**
 * Parse a full Keep-a-Changelog document. Each `## [x.y.z] - YYYY-MM-DD`
 * header opens a release block that runs until the next such header.
 */
export function parseChangelogMarkdown(md: string): ChangelogEntry[] {
  const headerRe = /^##\s+\[([^\]]+)\]\s*-\s*(\d{4}-\d{2}-\d{2})\s*$/gm;
  const matches = Array.from(md.matchAll(headerRe));
  const entries: ChangelogEntry[] = [];

  for (let i = 0; i < matches.length; i++) {
    const m = matches[i]!;
    const version = m[1]!.trim();
    const date = m[2]!;
    const start = m.index! + m[0].length;
    const end = i + 1 < matches.length ? matches[i + 1]!.index : md.length;
    const body = md.slice(start, end);
    entries.push({
      version,
      date,
      url: `${GITHUB_URL}/releases/tag/v${version}`,
      sections: parseSections(body),
    });
  }
  return entries;
}

/**
 * Slice the `## Release Notes` section out of a GitHub release body,
 * stopping at the next `## ` heading (typically `## Install aic X.Y.Z`).
 * Returns empty string if the body has no Release Notes section.
 */
export function sliceReleaseNotes(body: string): string {
  const startIdx = body.indexOf('## Release Notes');
  if (startIdx < 0) return '';
  const tail = body.slice(startIdx);
  // Search for the next h2 *after* the Release Notes header itself.
  const nextH2 = tail.slice(1).search(/^##\s+/m);
  return nextH2 < 0 ? tail : tail.slice(0, nextH2 + 1);
}

interface GithubRelease {
  readonly tag_name: string;
  readonly published_at: string | null;
  readonly prerelease: boolean;
  readonly html_url: string;
  readonly body: string | null;
}

async function fetchChangelogMarkdown(): Promise<string | null> {
  try {
    const res = await fetch(RAW_CHANGELOG_URL, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

async function fetchReleasesEntries(): Promise<ChangelogEntry[] | null> {
  try {
    const res = await fetch(RELEASES_API_URL, {
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'aic-web' },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as readonly GithubRelease[];
    const entries: ChangelogEntry[] = [];
    for (const r of data) {
      if (r.prerelease) continue; // hide prereleases (design decision)
      const version = r.tag_name.replace(/^v/, '').trim();
      const date = (r.published_at ?? '').slice(0, 10);
      if (!version || !date) continue;
      const notes = sliceReleaseNotes(r.body ?? '');
      entries.push({
        version,
        date,
        url: r.html_url,
        sections: parseSections(notes),
      });
    }
    return entries;
  } catch {
    return null;
  }
}

let cached: readonly ChangelogEntry[] | null = null;

/**
 * Load the changelog at build time. Throws if both sources fail — see
 * file header + ADR-0008.
 */
export async function loadChangelog(): Promise<readonly ChangelogEntry[]> {
  if (cached) return cached;

  const md = await fetchChangelogMarkdown();
  if (md) {
    const entries = parseChangelogMarkdown(md);
    if (entries.length > 0) {
      cached = entries;
      return entries;
    }
  }

  const fromReleases = await fetchReleasesEntries();
  if (fromReleases && fromReleases.length > 0) {
    cached = fromReleases;
    return fromReleases;
  }

  throw new Error(
    'loadChangelog: both CHANGELOG.md and the GitHub Releases API failed at build time. ' +
      'Failing the build is intentional — see ADR-0008.',
  );
}
