/**
 * Structured-data builders (JSON-LD).
 *
 * Centralizes the Article / FAQPage / BreadcrumbList nodes so every content
 * page emits the same field set — including the absolute `url`, lead
 * `image`, and publisher `logo` that Google's Article rich-result validator
 * looks for, plus the `BreadcrumbList` that mirrors the visible breadcrumb
 * nav. Pages pass canonical + site; the image/logo defaults live here so a
 * page never hand-builds a schema node (ADR-0006).
 */
import { baseHref } from '@/lib/href';

/** Absolute canonical URL for a page — mirrors Base's `<link rel=canonical>`. */
export function canonicalUrl(pathname: string, site: URL | string): string {
  return new URL(pathname, site).toString();
}

/**
 * Absolute URL to a base-path-relative asset (e.g. `'og.png'`,
 * `'icons/icon-512.png'`). Resolved against the build `BASE_URL` so it stays
 * correct if the base path ever changes. The base defaults to
 * `import.meta.env.BASE_URL` (Astro injects it at build); when that is absent
 * (e.g. under a test harness) it falls back to `'/'` rather than throwing.
 */
export function assetUrl(
  slug: string,
  site: URL | string,
  baseUrl: string = import.meta.env?.BASE_URL ?? '/',
): string {
  const base = baseHref(baseUrl);
  return new URL(`${base}${slug.replace(/^\/+/, '')}`, site).toString();
}

export interface Crumb {
  readonly name: string;
  /** Absolute URL. */
  readonly url: string;
}

/**
 * BreadcrumbList node — one `ListItem` per visible crumb, positions 1-based.
 * The last item should be the current page (`aria-current="page"` in the
 * visible nav); pass the same chain here so the schema matches the markup.
 */
export function breadcrumbSchema(crumbs: readonly Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export interface FaqItem {
  readonly q: string;
  readonly a: string;
}

/** FAQPage node from the `{q,a}[]` blocks authored in the message modules. */
export function faqSchema(items: readonly FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export interface ArticleInput {
  readonly headline: string;
  readonly description: string;
  readonly datePublished: string;
  /** Defaults to `datePublished` when omitted. */
  readonly dateModified?: string;
  /** Free-form `about` keywords (passed through when provided). */
  readonly about?: readonly string[];
  /** Absolute canonical URL of the page. */
  readonly url: string;
  /**
   * Build origin (`Astro.site`) — used to resolve the default lead image and
   * publisher logo, so callers don't thread two extra absolute URLs each.
   */
  readonly site: URL | string;
}

/**
 * Article node with the full set Google's validator wants: absolute `url`,
 * lead `image` (the shared OG card), `mainEntityOfPage`, and a publisher
 * `logo`. `image`/`logo` default to the site-wide OG card + icon so every
 * content page is consistent without per-page asset threading.
 */
export function articleSchema(i: ArticleInput) {
  const image = assetUrl('og.png', i.site);
  const logo = assetUrl('icons/icon-512.png', i.site);
  const dateModified = i.dateModified ?? i.datePublished;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: i.headline,
    description: i.description,
    datePublished: i.datePublished,
    dateModified,
    url: i.url,
    image,
    mainEntityOfPage: { '@type': 'WebPage', '@id': i.url },
    author: { '@type': 'Organization', name: 'aic' },
    publisher: {
      '@type': 'Organization',
      name: 'aic',
      logo: { '@type': 'ImageObject', url: logo },
    },
    ...(i.about ? { about: i.about } : {}),
  };
}
