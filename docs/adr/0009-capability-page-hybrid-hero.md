# ADR-0009: Two content-page templates — article for comparison, Hybrid Hero for capability

- **Status:** Accepted
- **Date:** 2026-07-29
- **Decision owner:** Caico Leung

## Context

ADR-0006 split content by type and set the v1 page-set. Both existing content
pages — `/vs/aicommits` and `/best-ai-commit-tools` — are **text articles**:
`ContentHeader`, single-column prose-width (`max-width: 820px`), no mockup. The
Terminal mockup lived only on the homepage Hero. That template serves
_comparison_ intent well: the persuasion is an argument, carried by prose and a
feature matrix.

v0.3.0 ships `aic resolve` — a second co-equal verb (CONTEXT.md → **Capability
page**). The `/resolve/` page sells a **visual workflow** — conflict markers →
proposed resolution → review diff → per-file `y/n` → finalize — whose
differentiator, _review before apply_, is shown rather than told. A text-article
treatment would bury the one asset that proves the safety gate.

## Decision

Content pages use one of **two templates**, chosen by page type:

- **Article template** — comparison pages (roundup, vs): `ContentHeader` +
  single-column prose + matrix, no mockup. Argument-led.
- **Hybrid Hero template** — capability pages (`/resolve/`, and future
  product-capability pages): a two-column Hero (copy + an animated
  Terminal-style mockup, as on the homepage) on top of the article body.
  Demo-led.

`/resolve/` is the first capability page and the first content page to carry a
mockup.

## Consequences

- **Pro:** the resolve workflow's review-gate safety gets visual proof; the page
  reads as product, not docs.
- **Named module (commit `0ab6709`):** the Hybrid Hero template is
  `src/components/content/HybridHero.astro` — copy + CTA in via props/slots,
  terminal out via the `terminal` slot. Demo-less capability-adjacent pages
  (`/deepseek/`, a provider guide) use the article template; the split keys on
  leading with a mockup, per the Argument-led / Demo-led line above.
- **Cost:** two content-page templates instead of one. New comparison pages
  inherit the article template; new capability pages inherit the Hybrid Hero
  template. The split tracks page type (CONTEXT.md), not whim.
- **Risk — why this ADR exists:** a future maintainer sees `/resolve/` carrying a
  Terminal while `/vs/aicommits` doesn't, and "fixes" the inconsistency by
  stripping the mockup. The divergence is deliberate: it follows the
  article/capability type split, not an accident.

## Alternatives considered

- **Article template for `/resolve/` (Terminal as inline illustration only).**
  Rejected — buries the review-gate demo, the page's trust hook.
- **Homepage-style full page for every content page.** Rejected — comparison
  pages are arguments, not demos; the article template serves them better.
