# ADR-0011: Changelog stays English in all locales

- **Status:** Accepted
- **Date:** 2026-07-31
- **Decision owner:** Caico Leung
- **Supplements:** ADR-0008 (changelog carve-out), in light of ADR-0010

## Context

ADR-0010 publishes `/zh/`, `/ja/`, `/ko/` variants of every page, each
emitting a full `hreflang` alternate block. ADR-0008 already carved the
`/changelog/` page out of ADR-0003's "never breaks a deploy" rule: the
changelog body is **fetched at build time** from the source repo's
`CHANGELOG.md` and the GitHub Releases API, and the build fails if both
sources are unreachable.

That fetched body is English markdown authored in the aic source repo.
i18n now forces a question ADR-0008 didn't have to answer: what does
`/zh/changelog/` render? Three options:

- **(A) English body in every locale + one localized note.** Every locale
  has a `/changelog/` route; the body renders the fetched English markdown
  unchanged, preceded by a single localized line explaining that release
  notes are kept in English.
- **(B) Drop `/changelog/` from non-English locales.** Only `/changelog/`
  exists; `/zh/changelog/` 404s.
- **(C) Hand-translate changelog entries per locale.** Every release's
  notes are translated into zh/ja/ko and maintained by hand.

## Decision

**(A) English body in every locale, plus one localized explanatory line.**

Every locale path includes a `/changelog/` route so the `hreflang`
alternate set is complete. The body is the fetched English markdown —
the same bytes ADR-0008 already governs — rendered unchanged. A single
localized sentence above the body tells the visitor, in their locale,
that release notes are kept in English.

## Consequences

- **Pro:** `hreflang`/sitemap completeness is preserved — no locale is
  missing a page, so the locale alternate set is intact and Google has
  a URL to index per locale.
- **Pro:** Honest about a constraint that cannot be lifted without
  forking the source repo. The localized note sets expectations rather
  than implying the body was translated.
- **Pro:** Reference content stays reference content. The changelog is
  README-owned technical reference under the ADR-0003/0006 ownership
  split, not site narrative. Translating it would create exactly the
  high-drift duplication ADR-0003 was designed to eliminate.
- **Con:** A zh/ja/ko visitor wanting native release notes does not get
  them. Acceptable: release notes are technical reference, the audience
  for a CLI changelog reads English fluently, and the cost of (C) is
  unsupportable.

## Alternatives considered

- **(B) Drop `/changelog/` from non-English locales.** Rejected —
  breaks `hreflang` completeness for that page (a locale alternate set
  with a hole is worse than one honest English-body entry) and forgoes
  the SEO presence of the page in locale paths.
- **(C) Hand-translate changelog entries per locale.** Rejected — the
  body is fetched at build time from a source repo this site does not
  own. Translating it means hand-maintaining ×4 locales of markdown
  whose source changes every release, on a cadence set by someone else's
  release schedule. This is the exact drift suicide ADR-0003 exists to
  prevent, amplified fourfold.
