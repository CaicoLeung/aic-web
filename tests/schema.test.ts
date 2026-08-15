/**
 * Unit tests for the JSON-LD structured-data builders (src/lib/schema.ts).
 *
 * These run in CI (`pnpm test`) so a regression in canonical/asset URL
 * resolution or the Article/FAQ/Breadcrumb field set is caught without a
 * full build. The schema helpers back every content page's structured data,
 * so a silent field drop would otherwise only surface in Google's validator.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  articleSchema,
  assetUrl,
  breadcrumbSchema,
  canonicalUrl,
  faqSchema,
  softwareApplicationSchema,
} from '../src/lib/schema.ts';

const ORIGIN = 'https://caicoleung.github.io';

describe('canonicalUrl', () => {
  it('resolves a base-relative pathname against the site origin', () => {
    assert.equal(
      canonicalUrl('/aic-web/vs/aicommits/', ORIGIN),
      'https://caicoleung.github.io/aic-web/vs/aicommits/',
    );
  });

  it('accepts a URL object as the site base', () => {
    assert.equal(
      canonicalUrl('/aic-web/deepseek/', new URL(ORIGIN)),
      'https://caicoleung.github.io/aic-web/deepseek/',
    );
  });
});

describe('assetUrl', () => {
  it('prefixes the asset slug with the injected base path', () => {
    assert.equal(
      assetUrl('og.png', ORIGIN, '/aic-web/'),
      'https://caicoleung.github.io/aic-web/og.png',
    );
  });

  it('strips leading slashes on the slug so it always nests under base', () => {
    assert.equal(
      assetUrl('/icons/icon-512.png', ORIGIN, '/aic-web/'),
      'https://caicoleung.github.io/aic-web/icons/icon-512.png',
    );
  });

  it("falls back to '/' when no base is passed (test-harness / no BASE_URL)", () => {
    assert.equal(assetUrl('og.png', ORIGIN), 'https://caicoleung.github.io/og.png');
  });
});

describe('breadcrumbSchema', () => {
  const node = breadcrumbSchema([
    { name: 'Home', url: `${ORIGIN}/aic-web/` },
    { name: 'Roundup', url: `${ORIGIN}/aic-web/best-ai-commit-tools/` },
    { name: 'aic vs aicommits', url: `${ORIGIN}/aic-web/vs/aicommits/` },
  ]);

  it('is a BreadcrumbList with ordered, 1-based positions', () => {
    assert.equal(node['@context'], 'https://schema.org');
    assert.equal(node['@type'], 'BreadcrumbList');
    assert.equal(node.itemListElement.length, 3);
    const positions = node.itemListElement.map((e: { position: number }) => e.position);
    assert.deepEqual(positions, [1, 2, 3]);
  });

  it('preserves name + url per crumb in order', () => {
    const [a, b, c] = node.itemListElement as Array<{
      name: string;
      item: string;
    }>;
    assert.equal(a.name, 'Home');
    assert.equal(a.item, `${ORIGIN}/aic-web/`);
    assert.equal(b.name, 'Roundup');
    assert.equal(c.name, 'aic vs aicommits');
    assert.equal(c.item, `${ORIGIN}/aic-web/vs/aicommits/`);
  });
});

describe('faqSchema', () => {
  it('wraps each {q,a} item as a Question with an acceptedAnswer', () => {
    const node = faqSchema([
      { q: 'Is aic free?', a: 'Yes — MIT licensed.' },
      { q: 'Does it need Node?', a: 'No.' },
    ]);
    assert.equal(node['@type'], 'FAQPage');
    assert.equal(node.mainEntity.length, 2);
    assert.equal(node.mainEntity[0]['@type'], 'Question');
    assert.equal(node.mainEntity[0].name, 'Is aic free?');
    assert.equal(node.mainEntity[0].acceptedAnswer.text, 'Yes — MIT licensed.');
  });
});

describe('articleSchema', () => {
  it('emits absolute url/image/logo and defaults dateModified to datePublished', () => {
    // Under the test harness BASE_URL is undefined → assetUrl falls back to '/',
    // so the default lead image is `${ORIGIN}/og.png` (no /aic-web/ prefix).
    const node = articleSchema({
      headline: 'aic vs aicommits',
      description: 'A fair comparison.',
      datePublished: '2026-08-01',
      url: `${ORIGIN}/aic-web/vs/aicommits/`,
      site: ORIGIN,
    });
    assert.equal(node['@type'], 'Article');
    assert.equal(node.headline, 'aic vs aicommits');
    assert.equal(node.url, `${ORIGIN}/aic-web/vs/aicommits/`);
    assert.equal(node.datePublished, '2026-08-01');
    assert.equal(node.dateModified, '2026-08-01');
    assert.equal(node.image, `${ORIGIN}/og.png`);
    assert.equal(node.publisher.logo.url, `${ORIGIN}/icons/icon-512.png`);
    assert.deepEqual(node.mainEntityOfPage, {
      '@type': 'WebPage',
      '@id': `${ORIGIN}/aic-web/vs/aicommits/`,
    });
  });

  it('honours an explicit dateModified and passes `about` through', () => {
    const node = articleSchema({
      headline: 'DeepSeek + aic',
      description: 'd',
      datePublished: '2026-08-01',
      dateModified: '2026-08-05',
      about: ['aic', 'DeepSeek'],
      url: `${ORIGIN}/aic-web/deepseek/`,
      site: ORIGIN,
    });
    assert.equal(node.dateModified, '2026-08-05');
    assert.deepEqual(node.about, ['aic', 'DeepSeek']);
  });
});

describe('softwareApplicationSchema', () => {
  it('emits the home page node with the version prefixed and free offer', () => {
    const node = softwareApplicationSchema({
      version: '0.3.1',
      description: 'AI-powered git commit messages',
    });
    assert.deepEqual(node, {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'aic',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'macOS, Linux, Windows',
      softwareVersion: 'v0.3.1',
      description: 'AI-powered git commit messages',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    });
  });
});
