/**
 * Article-shell derivations (CONTEXT.md → "Article shell").
 *
 * The pure half of `ArticleShell.astro`: everything a content page needs
 * that isn't markup lives here so it is unit-testable — `.astro`
 * frontmatter isn't type-checked (ADR-0007), so derivations that live
 * only in a component are unguarded. The shell's frontmatter is thin
 * glue over these functions.
 */
import { localizedHref, type Locale } from '@/i18n/config';
import {
  articleSchema,
  breadcrumbSchema,
  canonicalUrl,
  faqSchema,
  type Crumb,
  type FaqItem,
} from '@/lib/schema';

/**
 * A crumb authored by a page: `path` is the base-relative slug a visible
 * link points at (`''` = home, `'best-ai-commit-tools'` = that route).
 * The LAST crumb of a chain is the current page — its `path` is ignored
 * and the canonical URL is used.
 */
export interface CrumbInput {
  readonly name: string;
  readonly path: string;
}

export interface ArticleSchemaInput {
  readonly title: string;
  readonly description: string;
  readonly datePublished: string;
  readonly dateModified?: string;
  readonly about?: readonly string[];
  readonly faq?: readonly FaqItem[];
  /** Absolutized crumb chain (`buildCrumbs` output). */
  readonly crumbs?: readonly Crumb[];
  /** Canonical URL of the page. */
  readonly url: string;
  readonly site: URL | string;
}

/** Absolutize a page's crumb chain for the BreadcrumbList node. */
export function buildCrumbs(
  locale: Locale,
  inputs: readonly CrumbInput[],
  canonical: string,
  site: URL | string,
  baseUrl: string = import.meta.env?.BASE_URL ?? '/',
): readonly Crumb[] {
  return inputs.map((input, i) =>
    i === inputs.length - 1
      ? { name: input.name, url: canonical }
      : {
          name: input.name,
          url: canonicalUrl(localizedHref(locale, input.path, baseUrl), site),
        },
  );
}

/**
 * Assemble a content page's JSON-LD: the Article node plus the FAQPage
 * and BreadcrumbList nodes when the page supplies them. Always an array —
 * Base accepts object-or-array, and one shape keeps the pages uniform.
 */
export function assembleArticleSchema(
  i: ArticleSchemaInput,
): readonly Record<string, unknown>[] {
  return [
    articleSchema({
      headline: i.title,
      description: i.description,
      datePublished: i.datePublished,
      dateModified: i.dateModified,
      about: i.about,
      url: i.url,
      site: i.site,
    }),
    ...(i.faq ? [faqSchema(i.faq)] : []),
    ...(i.crumbs ? [breadcrumbSchema(i.crumbs)] : []),
  ];
}
