# ADR-0012: Bundle a CJK webfont despite the perf cost

- **Status:** Accepted
- **Date:** 2026-07-31
- **Decision owner:** Caico Leung

## Context

Prose is set in the system-sans stack (`--font-display`); the code register
is JetBrains Mono (`--font-mono`, via `@fontsource/jetbrains-mono`). Neither
carries CJK glyphs. ADR-0010 adds `zh`, `ja`, `ko` locales, and several
code-register bits **do** translate per the scope decision (command
*descriptions*, the prose `detail` rows of "How it works"): the Terminal
mockup itself stays English by a separate decision, but the mono-styled
descriptions around it now need to render CJK inside a `--font-mono`
context.

Three strategies were on the table:

- **(A) System CJK font stack only.** Extend `--font-display` and
  `--font-mono` fallbacks with CJK system families (`"PingFang SC"`,
  `"Hiragino Sans"`, `"Microsoft YaHei"`, `"Noto Sans SC|JP|KR"`, …).
  Zero bytes shipped; relies on the device having a CJK font (all modern
  OS do). Glyph metrics vary by OS, so the same heading renders with
  subtly different weight/width across devices.
- **(B) Bundle Noto Sans CJK / Source Han as a webfont.** Pixel-consistent
  rendering everywhere. Noto Sans CJK is large (full ≈ 15 MB+ per weight
  per locale; even subsetted WOFF2 runs into the hundreds of KB / low MB
  per locale), so naive bundling is a Core Web Vitals catastrophe.
- **(C) Hybrid.** System stack as default; bundle a subset only for display
  headings, where cross-device drift is most visible.

## Decision

**(B) Bundle Noto Sans CJK per locale**, with mandatory mitigations that
bound — but do not eliminate — the perf cost:

1. **Per-locale subset only.** The zh subset loads on `/zh/` pages, ja on
   `/ja/`, ko on `/ko/`. **English `/` loads zero CJK font.** Never bundle
   all three on every page.
2. **`unicode-range` split** (latin + punctuation + common-1000 + rare).
   The browser fetches only the ranges a page actually uses; rare-glyph
   chunks never download if unused.
3. **`font-display: swap` + WOFF2 + variable font.** One file covers all
   weights instead of ×weights; text renders immediately via the system
   CJK fallback and swaps in when the webfont is ready (FOUT, not FOIT).
4. **Preload only the critical subset** (latin + the common-1000 range)
   for first paint; the rest is lazy.

## Consequences

- **Pro:** Pixel-consistent rendering of CJK across every device and OS —
  the decision owner's priority. Headings and mono-context CJK look
  identical in a screenshot taken on macOS, Windows, iOS, or Android.
- **Cost:** A real Core Web Vitals hit on locale pages. Even with all four
  mitigations, a zh page ships hundreds of KB to low MB of font. This is
  the accepted trade-off: visual consistency bought at the price of bytes,
  on a site whose SEO goal (ADR-0006) otherwise rewards CWV. The
  mitigations keep the cost survivable; they do not remove it.
- **Risk — why this ADR exists:** a future maintainer will look at
  multi-MB Noto fonts on a TypeScript-7-go-native, perf-minded site
  (ADR-0007) and "fix" it by deleting the webfonts. That would silently
  revert the project to cross-device glyph inconsistency. The divergence
  from the obvious perf-first path is deliberate: the decision owner
  weighed consistency above CWV for the CJK reading experience.
- **Risk — addition:** a future maintainer adding a locale or a weight
  **must** follow the per-locale subset rule. Naively adding `Noto Sans
  JP` to the global stack, or adding a new weight, re-introduces the
  multi-MB catastrophe this ADR's mitigations exist to prevent.

## Alternatives considered

- **(A) System CJK stack only.** Rejected — the cross-device glyph
  inconsistency was unacceptable to the decision owner. Acknowledged as
  the zero-cost default that most CJK sites correctly choose; this project
  knowingly pays the cost instead.
- **(C) Hybrid (system default + subset for display only).** Deferred —
   start with full per-locale subsetting (B); if profiling later proves a
   specific weight or locale is unused or unimpactful, lift just that
   piece to the system stack. B does not preclude C later; C-for-everything
   is premature before we have CWV data from the locale pages in production.
