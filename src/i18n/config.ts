/**
 * Single source of truth for the locale set (ADR-0010).
 *
 * `en` is the default + canonical locale (CONTEXT.md → Canonical locale (EN)):
 *   - served at `/` with no path prefix (ADR-0010)
 *   - the `x-default` hreflang target
 *   - the narrative source every Localized copy is derived from
 *
 * zh/ja/ko are prefixed (`/zh/`, `/ja/`, `/ko/`) Localized copies
 * (CONTEXT.md → Localized copy): machine-drafted, human-review-pending.
 * Keys still equal to the EN source are intentional invariants (brands,
 * literal commands, tool names) — soft parity (ADR-0010 / Q7=B) covers
 * the rest at runtime.
 */
import { baseHref } from '@/lib/href';

export const DEFAULT_LOCALE = 'en';

export const LOCALES = ['en', 'zh', 'ja', 'ko'] as const;
export type Locale = (typeof LOCALES)[number];

/** Locales that carry a path prefix (every locale except the default). */
export type LocalePrefix = Exclude<Locale, typeof DEFAULT_LOCALE>;

export const LOCALE_PREFIXES: readonly LocalePrefix[] = LOCALES.filter(
  (l): l is LocalePrefix => l !== DEFAULT_LOCALE,
);

/** Native-language labels for the Switcher (ADR-0010 / Q8). */
export const LOCALE_LABELS: Readonly<Record<Locale, string>> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
};

/** Compact trigger glyphs for the Switcher — each in its own writing
 *  system so a locale reads natively on the closed button (ADR-0010 / Q8):
 *  English in Latin, Chinese/Japanese in Han, Korean in Hangul. */
export const LOCALE_SHORT: Readonly<Record<Locale, string>> = {
  en: 'EN',
  zh: '中',
  ja: '日',
  ko: '한',
};

/** BCP-47 tags for hreflang + `<html lang>`. */
export const LOCALE_HREFLANG: Readonly<Record<Locale, string>> = {
  en: 'en',
  zh: 'zh-CN',
  ja: 'ja-JP',
  ko: 'ko-KR',
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Guard for `/[locale]` dynamic routes: only prefixed locales are valid
 *  route params — unknown segments 404 instead of rendering a fake locale
 *  (ADR-0010). Shared so all five `[locale]` pages use the same check. */
export function isLocalePrefix(value: string | undefined): value is LocalePrefix {
  return value !== undefined && (LOCALE_PREFIXES as readonly string[]).includes(value);
}

/**
 * Resolve the locale for the current request from the URL pathname.
 * The default locale (`en`) has no prefix, so any path whose first segment
 * after `base` is not a known locale resolves to `en`.
 *
 * `baseUrl` defaults to Astro's `BASE_URL` (`/aic-web/`); injectable for tests.
 */
export function localeFromUrl(
  pathname: string,
  baseUrl: string = import.meta.env.BASE_URL,
): Locale {
  const base = baseHref(baseUrl);
  let rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  const first = rest.split('/').filter(Boolean)[0] ?? '';
  return isLocale(first) ? first : DEFAULT_LOCALE;
}

/**
 * Build a base-path- and locale-aware internal href from a locale-invariant
 * slug — the inverse of `sharedSlug` (hreflang.ts). The default locale (`en`)
 * carries no prefix; every other locale is prefixed (`/aic-web/zh/...`), so
 * in-page chrome links keep visitors in their own locale instead of escaping
 * to the English pages.
 *
 * `slug` is the locale-invariant tail; leading/trailing slashes are normalized.
 * `''` resolves to the locale's home.
 *   localizedHref('en', 'changelog')  → '/aic-web/changelog/'
 *   localizedHref('zh', 'changelog')  → '/aic-web/zh/changelog/'
 *   localizedHref('zh', '')           → '/aic-web/zh/'
 */
export function localizedHref(
  locale: Locale,
  slug: string,
  baseUrl: string = import.meta.env.BASE_URL,
): string {
  const base = baseHref(baseUrl);
  const prefix = locale === DEFAULT_LOCALE ? '' : `${locale}/`;
  const tail = slug.replace(/^\/+|\/+$/g, '');
  return `${base}${prefix}${tail}${tail ? '/' : ''}`;
}
