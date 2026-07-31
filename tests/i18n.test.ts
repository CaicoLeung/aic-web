import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_LOCALE, isLocalePrefix, localeFromUrl } from '../src/i18n/config.ts';
import { buildHreflangAlternates, sharedSlug } from '../src/i18n/hreflang.ts';

const ORIGIN = 'https://caicoleung.github.io';
const BASE = '/aic-web/';

describe('localeFromUrl', () => {
  it('defaults to en when no locale prefix is present', () => {
    assert.equal(localeFromUrl('/aic-web/', BASE), DEFAULT_LOCALE);
    assert.equal(localeFromUrl('/aic-web', BASE), DEFAULT_LOCALE);
    assert.equal(localeFromUrl('/aic-web/vs/aicommits/', BASE), DEFAULT_LOCALE);
  });

  it('reads the first path segment as the locale', () => {
    assert.equal(localeFromUrl('/aic-web/zh/', BASE), 'zh');
    assert.equal(localeFromUrl('/aic-web/ja/vs/aicommits/', BASE), 'ja');
    assert.equal(localeFromUrl('/aic-web/ko/best-ai-commit-tools/', BASE), 'ko');
  });

  it('treats an unknown first segment as en', () => {
    assert.equal(localeFromUrl('/aic-web/xx/', BASE), DEFAULT_LOCALE);
  });

  it('works without a base path', () => {
    assert.equal(localeFromUrl('/zh/resolve/', '/'), 'zh');
  });
});

describe('isLocalePrefix', () => {
  it('accepts prefixed locales only — the 404 guard for [locale] routes', () => {
    assert.equal(isLocalePrefix('zh'), true);
    assert.equal(isLocalePrefix('ja'), true);
    assert.equal(isLocalePrefix('ko'), true);
    assert.equal(isLocalePrefix('en'), false);
    assert.equal(isLocalePrefix('fr'), false);
    assert.equal(isLocalePrefix(undefined), false);
  });
});

describe('sharedSlug', () => {
  it('strips base + locale prefix, keeping the slug locale-invariant', () => {
    assert.equal(sharedSlug('/aic-web/', BASE), '');
    assert.equal(sharedSlug('/aic-web', BASE), '');
    assert.equal(sharedSlug('/aic-web/zh/', BASE), '');
    assert.equal(sharedSlug('/aic-web/zh/resolve/', BASE), 'resolve');
    assert.equal(sharedSlug('/aic-web/ja/vs/aicommits/', BASE), 'vs/aicommits');
  });
});

describe('buildHreflangAlternates', () => {
  it('emits one alternate per locale plus x-default', () => {
    const alts = buildHreflangAlternates('/aic-web/', ORIGIN, BASE);
    assert.equal(alts.length, 5);
    assert.deepEqual(
      alts.map((a) => a.hreflang),
      ['en', 'zh-CN', 'ja-JP', 'ko-KR', 'x-default'],
    );
  });

  it('points x-default at the English root', () => {
    const alts = buildHreflangAlternates('/aic-web/', ORIGIN, BASE);
    assert.equal(alts.at(-1)?.hreflang, 'x-default');
    assert.equal(alts.at(-1)?.href, `${ORIGIN}${BASE}`);
  });

  it('prefixes each locale URL, keeping the slug invariant', () => {
    const alts = buildHreflangAlternates('/aic-web/zh/resolve/', ORIGIN, BASE);
    const byCode = Object.fromEntries(alts.map((a) => [a.hreflang, a.href]));
    assert.equal(byCode['en'], `${ORIGIN}${BASE}resolve/`);
    assert.equal(byCode['zh-CN'], `${ORIGIN}${BASE}zh/resolve/`);
    assert.equal(byCode['ja-JP'], `${ORIGIN}${BASE}ja/resolve/`);
    assert.equal(byCode['ko-KR'], `${ORIGIN}${BASE}ko/resolve/`);
  });
});
