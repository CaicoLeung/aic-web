# ADR-0020: CSS ownership — component chrome repatriated, html.v2 dissolved

- status: accepted
- date: 2026-08-15
- supersedes: none (extends the locality principle of ADR-0002/0013)

## Context

`src/styles/global.css` had accreted ~260 lines that styled the seven
homepage section components (`#how #batching #resolve #agents #compare
#install #providers`) from outside their files, plus a `html.v2` prefix
on every selector from the V2 design era. Two failures followed:

1. **Split ownership.** Each section's look lived half in its
   component, half in a distant slab. Changing a section meant editing
   two files with no signal connecting them.
2. **Specificity as scaffolding.** `html.v2 .x` (0,2,1) out-specifies
   Astro-scoped `.x[data-astro-cid]` (0,2,0), so the global layer
   silently beat the components' own rules. This was load-bearing and
   invisible: authored component values (section paddings, footer
   padding, section-head gap, ScrollDemo's 720px cap, and — before the
   Article shell work — every content page's 820/880px article width)
   were dead in production for months. Nobody could tell authored
   intent from rendered truth by reading the code.

## Decision

1. **Ownership follows markup.** A component's chrome (background,
   padding, layout grid, accent colors, hover states, motion depth)
   lives in that component's scoped `<style>`, carrying the value that
   actually rendered. The losing scoped defaults were replaced, not
   retained alongside the winners.
2. **global.css keeps only what is genuinely cross-page:** design
   tokens, font faces, the base layer, shared primitives
   (`.container`, `.section`, `.eyebrow`, inline-code chip), the
   scroll-reveal motion system (keyed to generic structure, spans
   homepage and article blocks), and the fluid type/container scaling.
3. **`html.v2` is dissolved.** V1 has no pages; the prefix's only real
   function was to beat scoped styles, which repatriation made
   unnecessary. Selectors apply unconditionally; `class="v2"` is
   removed from `<html>` in Base.
4. **Dead authored values are deleted, not resurrected.** Where a
   scoped rule had never rendered because a global rule out-specified
   it, the rendered value is the design of record (e.g. ScrollDemo
   `.demo-inner` keeps `.container`'s 1280px measure, not its dead
   720px cap).

## Consequences

- Specificity fights between global and scoped layers are gone by
  construction: global rules no longer target any component's
  namespace. A future global-vs-scoped conflict is a smell that the
  rule belongs in a component.
- The two changes shipped as separate commits (repatriation first,
  prefix dissolution second) because the prefix was load-bearing until
  every conflict it decided was resolved; each commit was verified
  rendering-neutral by before/after DOM audit (rect + computed styles).
- New sections should not acquire ids for styling; their scoped
  classes are sufficient inside their own component.
