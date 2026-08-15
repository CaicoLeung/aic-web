/**
 * Unit tests for the Article-shell derivations (src/lib/article.ts).
 *
 * The helpers assemble every content page's crumb chain and JSON-LD array;
 * a silent break would only surface in Google's validators. Run in CI via
 * `pnpm test` alongside schema.test.ts, whose builders these compose.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { assembleArticleSchema, buildCrumbs } from '../src/lib/article.ts';

const SITE = 'https://caicoleung.github.io/aic-web/';
const CANONICAL = 'https://caicoleung.github.io/aic-web/vs/aicommits/';

describe('buildCrumbs', () => {
  it('absolutizes parent crumb paths against the site', () => {
    const crumbs = buildCrumbs(
      'en',
      [
        { name: 'Home', path: '' },
        { name: 'Roundup', path: 'best-ai-commit-tools' },
        { name: 'aic vs aicommits', path: '' },
      ],
      CANONICAL,
      SITE,
      '/aic-web/',
    );
    assert.deepEqual(crumbs, [
      { name: 'Home', url: 'https://caicoleung.github.io/aic-web/' },
      {
        name: 'Roundup',
        url: 'https://caicoleung.github.io/aic-web/best-ai-commit-tools/',
      },
      { name: 'aic vs aicommits', url: CANONICAL },
    ]);
  });

  it('localizes parent paths for non-en locales', () => {
    const crumbs = buildCrumbs(
      'zh',
      [
        { name: '首页', path: '' },
        { name: '当前页', path: '' },
      ],
      'https://caicoleung.github.io/aic-web/zh/resolve/',
      SITE,
      '/aic-web/',
    );
    assert.equal(crumbs[0].url, 'https://caicoleung.github.io/aic-web/zh/');
    assert.equal(crumbs[1].url, 'https://caicoleung.github.io/aic-web/zh/resolve/');
  });

  it('ignores the last crumb path in favor of the canonical URL', () => {
    const crumbs = buildCrumbs(
      'en',
      [
        { name: 'Home', path: '' },
        { name: 'Current', path: 'some-stale-path' },
      ],
      CANONICAL,
      SITE,
    );
    assert.equal(crumbs[1].url, CANONICAL);
  });
});

describe('assembleArticleSchema', () => {
  it('emits the Article node alone when no faq/crumbs are given', () => {
    const nodes = assembleArticleSchema({
      title: 'Best AI commit tools',
      description: 'A survey.',
      datePublished: '2026-07-08',
      url: 'https://caicoleung.github.io/aic-web/best-ai-commit-tools/',
      site: SITE,
    });
    assert.equal(nodes.length, 1);
    assert.equal(nodes[0]['@type'], 'Article');
    assert.equal(nodes[0].headline, 'Best AI commit tools');
  });

  it('appends FAQPage and BreadcrumbList in order when supplied', () => {
    const nodes = assembleArticleSchema({
      title: 'aic vs aicommits',
      description: 'Head to head.',
      datePublished: '2026-08-01',
      about: ['aic', 'aicommits'],
      faq: [{ q: 'Is aic free?', a: 'Yes.' }],
      crumbs: [{ name: 'aic vs aicommits', url: CANONICAL }],
      url: CANONICAL,
      site: SITE,
    });
    assert.deepEqual(
      nodes.map((n) => n['@type']),
      ['Article', 'FAQPage', 'BreadcrumbList'],
    );
    const article = nodes[0] as Record<string, unknown>;
    assert.equal(article.dateModified, '2026-08-01');
    assert.deepEqual(article.about, ['aic', 'aicommits']);
  });
});
