/**
 * hreflang alternate builder (ADR-0010).
 *
 * Given the current pathname, emits one `<link rel="alternate">` target per
 * locale plus `x-default` → the default locale (English at `/`). Slugs are
 * ASCII and locale-invariant (ADR-0010 / Q9=A), so the same slug is reused
 * for every locale — only the prefix changes (en = no prefix, others prefixed).
 */
import { baseHref } from '@/lib/href';
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_HREFLANG,
  isLocale,
  type Locale,
} from '@/i18n/config';

export interface HreflangAlternate {
  readonly hreflang: string;
  readonly href: string;
}

/**
 * Strip the base path + any leading locale prefix, returning the shared slug
 * (locale-invariant per ADR-0010 / Q9=A). Exported so the Switcher and the
 * soft-redirect derive the same localized path from the same slug.
 *
 * Astro emits the root route's pathname WITHOUT a trailing slash
 * (`/aic-web` vs `/aic-web/zh/`), so we normalize before stripping the base.
 */
export function sharedSlug(pathname: string, baseUrl: string): string {
  const base = baseHref(baseUrl);
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const withoutBase = normalized.startsWith(base)
    ? normalized.slice(base.length)
    : normalized.replace(/^\//, '');
  const segments = withoutBase.split('/').filter(Boolean);
  const first = segments[0];
  if (first === DEFAULT_LOCALE || (first !== undefined && isLocale(first))) {
    segments.shift();
  }
  return segments.join('/');
}

/**
 * Build the hreflang set for `<head>`. `siteOrigin` should be the canonical
 * origin (Astro.site) without a trailing slash.
 */
export function buildHreflangAlternates(
  pathname: string,
  siteOrigin: string,
  baseUrl: string = import.meta.env.BASE_URL,
): readonly HreflangAlternate[] {
  const base = baseHref(baseUrl);
  const slug = sharedSlug(pathname, baseUrl);
  const origin = siteOrigin.replace(/\/$/, '');
  const tail = slug ? `${slug}/` : '';

  const urlFor = (locale: Locale): string => {
    const prefix = locale === DEFAULT_LOCALE ? base : `${base}${locale}/`;
    return `${origin}${prefix}${tail}`;
  };

  const alternates: HreflangAlternate[] = LOCALES.map((locale) => ({
    hreflang: LOCALE_HREFLANG[locale],
    href: urlFor(locale),
  }));
  alternates.push({ hreflang: 'x-default', href: urlFor(DEFAULT_LOCALE) });
  return alternates;
}
