# ADR-0010: i18n routing — subdirectories, `/` stays English, ASCII slugs

- **Status:** Accepted
- **Date:** 2026-07-31
- **Decision owner:** Caico Leung

## Context

The site is going multilingual — `en`, `zh`, `ja`, `ko` — as an SEO play
(ADR-0006 premise: own narrative content pages that rank for descriptive
long-tail queries). Every architectural choice before this ADR is
English-only: one domain (`caicoleung.github.io/aic-web`), `base: /aic-web/`,
fixed page-set (`/`, `/vs/aicommits`, `/best-ai-commit-tools`, `/changelog`,
`/resolve`). Adding four locales forces three routing decisions that are
expensive to reverse later, because they set every URL the site will ever
publish and every `hreflang`/sitemap entry:

1. **Topology** — subdirectories vs subdomains vs query params.
2. **Default-locale prefix** — does `/` carry the default locale, or does
   every locale (incl. English) live under a prefix with `/` redirecting?
3. **Slug localization** — does `/vs/aicommits` become `/zh/对比/aicommits`
   in Chinese, or stay ASCII everywhere?

## Decision

**Subdirectories, `/` stays English, ASCII slugs across all locales.**

Concretely:

- Locales live under the existing `base` as path prefixes: `/zh/`, `/ja/`,
  `/ko/`. English is the default locale and stays at `/` with **no prefix**.
  A localized page nests under its prefix: `/aic-web/zh/vs/aicommits`,
  `/aic-web/ko/best-ai-commit-tools`.
- **ASCII slugs everywhere.** Translate `<title>`, `<h1>`, body, and meta —
  never the URL path segment. `/zh/vs/aicommits`, not `/zh/对比/aicommits`.
- **`x-default` hreflang → `/` (English).** No locale-picker page; the
  site is small enough that the switcher + soft-redirect (see below) cover
  discovery.
- Every locale path emits the full set of `hreflang` alternates and a
  **self-canonical** URL (each locale canonicals to itself, not to English
  — a common mistake that collapses locale indexing).
- Returning visitors: a client-side pre-paint script reads a `localStorage`
  locale preference and, if it is a non-en locale and the visitor is on `/`,
  `location.replace`s to the equivalent localized path before first paint.
  Crawlers receive the English HTML unchanged (no server redirect).

## Amendment (2026-08-01)

The `localStorage` locale-preference + pre-paint soft-redirect (the last
Decision bullet and its Consequence below) is **reversed**. Locale now
follows the URL exclusively: nothing is persisted and no redirect is
forced. The switcher still navigates to the localized equivalent of the
current path, and all navigation chrome uses locale-aware hrefs
(`localizedHref`), so visitors stay in their locale across page
transitions. Rationale: the soft-redirect was misfiring (e.g. an English
visit with a stale `zh` preference redirected to a malformed localized
URL), and a static multilingual site is better served by honoring the
URL the visitor actually requested.

## Consequences

- **Pro:** Existing English URLs are untouched. `/vs/aicommits`,
  `/best-ai-commit-tools`, `/resolve`, `/changelog` stay exactly where
  Google already indexed them — no 301 reset, no ranking dip.
- **Pro:** One route shape across all locales. Internal links are
  locale-agnostic (swap the prefix, keep the slug), and `hreflang`
  alternates are trivially correct because the slug is invariant.
- **Pro:** Subdirectory keeps the site on the single GitHub Pages project
  domain — consolidated authority, one deploy, one sitemap index. This
  matters precisely because ADR-0001 already accepted the `/aic-web/`
  base path trade-off.
- **Pro:** Share-ability. ASCII URLs render cleanly in address bars and
  chat clients; localized slugs would percent-encode into ugly
  `/%E5%AF%B9%E6%AF%94/...` strings, especially painful for ja/ko.
- **Con:** Subdirectory locales inherit the `/aic-web/` base-path
  depth (`/aic-web/zh/vs/aicommits`). Already accepted by ADR-0001 for
  English; locales inherit the same trade-off uniformly.
- **Con (resolved by 2026-08-01 amendment):** The soft-redirect added ~10
  lines of inline head JS, acting only when a saved non-en preference
  existed. Removed — see Amendment above.

## Alternatives considered

- **Subdomains (`zh.caicoleung.github.io`, …).** Rejected — GitHub Pages
  project sites serve one domain; per-subdomain Pages configs are painful
  or impossible on the free tier, and a subdomain split fragments domain
  authority that a small site needs consolidated.
- **All locales prefixed, including `/en/`, with `/` redirecting to `/en/`.**
  Rejected — moves every already-indexed English URL (`/vs/aicommits` →
  `/en/vs/aicommits`), forcing a 301 redirect chain and resetting
  whatever ranking those pages have. Symmetry is not worth the reset.
- **`Accept-Language` / server-side redirect at `/`.** Rejected — Googlebot
  gets bounced to a locale it didn't request, confusing hreflang; and
  GitHub Pages is static, so there is no server logic to do this anyway.
- **Localized slugs.** Rejected — Google weights page content, `<title>`,
  and `<h1>` far above URL slug keywords. Localized slugs buy a marginal
  keyword signal at the cost of 4× slug variants per page, percent-encoded
  URLs, and routing bookkeeping. Not worth it on a solo-maintained static
  site.
