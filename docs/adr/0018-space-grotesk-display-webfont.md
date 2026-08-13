# ADR-0018: Self-host Space Grotesk for display type (amends ADR-0004)

- **Status:** Accepted
- **Date:** 2026-08-14
- **Decision owner:** Caico Leung
- **Amends:** ADR-0004 ("No new web font is loaded") — for display/headings only.
  ADR-0004's body-copy decision (system-sans, zero webfont) remains in force.

## Context

ADR-0004 chose the system-sans stack for body copy and, as a categorical
side-effect, ruled out loading _any_ web font site-wide. That call was right
for body prose: system faces are legible, free, and instant. But the V2
redesign (ADR-0017 respine + the "Diff Lab" hero) is typographically led —
the headings _are_ the product surface — and no system face carries the
geometric, slightly-technical character the V2 brief asks for. The body is
unchanged; only the display register needs a face.

JetBrains Mono is already self-hosted under the same pattern (ADR-0004's mono
register), so the precedent for a self-hosted, latin-subset, `font-display:
swap` webfont exists and works.

## Decision

Self-host **Space Grotesk** as a variable woff2 (latin subset only,
`font-display: swap`) and scope it to `--font-display`, which drives only
`h1`–`h3`. Body copy keeps the system-sans stack from ADR-0004 untouched. CJK
locales fall through to the locale-specific system CJK stack (ADR-0014), so
the webfont never carries Han/Kana/Hangul and stays latin-subset.

## Consequences

- **Cost:** one ~22 KB variable woff2, requested non-blockingly (`swap`),
  latin-range only. No flash of invisible text for headings; the system-sans
  fallback paints instantly and Space Grotesk hot-swaps.
- **Scope:** display headings only. ADR-0004's body decision is intact —
  anyone re-reading "No new web font" in 0004 must read it amended by this ADR
  for the display register.
- **Maintenance:** one more self-hosted binary in `src/fonts/`, same lifecycle
  as JetBrains Mono.

## Alternatives considered

- **Keep system-sans for display** — zero cost but the headings read as
  generic OS chrome; the V2 hero loses its load-bearing typographic identity.
  Rejected for this reason.
- **Load Space Grotesk from a CDN (Google Fonts)** — avoids shipping the
  binary but adds a third-party dependency, a privacy surface, and a render
  path outside our control. ADR-0004 already chose self-hosting for mono;
  consistency wins.
