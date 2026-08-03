# ADR-0014: Switch CJK rendering to system fonts (supersedes ADR-0012)

- **Status:** Accepted
- **Date:** 2026-08-03
- **Decision owner:** Caico Leung
- **Supersedes:** ADR-0012 (Bundle a CJK webfont despite the perf cost)

## Context

ADR-0012 chose to bundle a per-locale Noto Sans CJK webfont, deliberately
trading Core Web Vitals for cross-device glyph consistency. Its own
"Risk — why this ADR exists" section predicted this reversal: that a future
maintainer would "fix" the webfonts by deleting them. That prediction is now
correct, and the reversal is deliberate, not accidental.

Two things changed since ADR-0012:

1. **The site is now CWV-gated.** A web-performance pass (2026-08-03)
   established a Lighthouse-CI regression gate anchored on the `/zh/` home as
   the worst-case canary. Measured against the built output, every `zh`/`ja`/`ko`
   page ships a **~24–43 KB gzip render-blocking fontsource CSS** (`zh` 43 KB,
   `ja` 31 KB, `ko` 24 KB) — the `@font-face` + `unicode-range` declarations
   themselves, before any subset downloads. This is the single largest
   performance lever on localized pages and it spans home + every content page
   × 3 locales.
2. **The audience is developers.** `aic` is a developer CLI; its CJK readers
   are engineers, who — as ADR-0012 itself conceded — are well-served by the
   zero-cost system CJK default that "most CJK sites correctly choose."

ADR-0012's premise (consistency above CWV for the CJK reading experience) no
longer holds against a CWV-gated, dev-audience site. The cost it knowingly
paid is no longer worth paying.

## Decision

**Drop the Noto Sans CJK webfont entirely. Render all CJK text from
locale-aware SYSTEM font stacks.**

- Delete the three `CjkFonts{Zh,Ja,Ko}.astro` components and their fontsource
  `?url` CSS imports.
- Remove the `@fontsource-variable/noto-sans-{sc,jp,kr}` devDependencies.
- `Base.astro` no longer links any CJK CSS. It still sets `--font-cjk`, but to
  a **locale-specific system-family stack** (not a webfont):
  - `zh`: `'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei'`
  - `ja`: `'Hiragino Sans', 'Yu Gothic', 'Noto Sans CJK JP'`
  - `ko`: `'Apple SD Gothic Neo', 'Malgun Gothic', 'Nanum Gothic'`
  - `en`: undefined → the stacks' built-in fallback covers rare CJK glyphs.
- `global.css` keeps the `var(--font-cjk, <fallback>)` indirection as the one
  source of truth; only what populates `--font-cjk` changed (webfont → system).

The locale-aware stacks matter: a single zh-leaning fallback would render
Japanese and Korean poorly. Per-locale system stacks keep each language on its
native OS families with zero bytes shipped.

## Consequences

- **Pro (the reason):** localized pages shed the ~24–43 KB gzip blocking CSS
  **and** all on-demand subset fetches — the largest CWV win on the table, and
  the widest in scope (every `zh`/`ja`/`ko` page). No FOUT, no CLS from font
  swap, no font infrastructure to maintain.
- **Cost (the accepted trade-off):** CJK text now renders in each visitor's
  device system font — PingFang on Apple, Microsoft YaHei on Windows,
  Android/Malgun/Nanum on mobile. Brand CJK typography is **no longer
  pixel-identical across devices**. For a dev-CLI marketing site this is
  acceptable; for a brand where CJK typographic consistency is a core value it
  would not be.
- **Reversibility:** ADR-0012's mitigations (per-locale subset, unicode-range
  split, `font-display: swap`, preload critical subset) remain the documented
  playbook if a future decision re-introduces a CJK webfont. The fontsource
  packages are restored from git history; nothing is lost.

## Why not the middle paths

- **Async-load the blocking CJK CSS (Q9 option A):** eliminated the blocking
  but kept the FOUT/CLS risk on the H1 (the LCP element) and retained all the
  font infrastructure. Rejected because the consistency it preserved was the
  very value being abandoned, and the CLS risk landed on the worst element.
- **Critical-glyph subset inline + async the rest (Q9 option C):** LCP- and
  CLS-optimal but the heaviest — build-time glyph extraction and conditional
  emit. Premature when the consistency goal itself was being dropped.
- **Hybrid (system above-fold, Noto body):** two-font mix on one page; strictly
  worse than either extreme.

Superseding ADR-0012 to option (A) of its own "alternatives considered" — the
zero-cost system default it acknowledged as correct for most CJK sites — is the
coherent end state.
