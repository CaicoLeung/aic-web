# ADR-0016: Commit-type palette swatch strip — deliberate break of the amber-only discipline

- **Status:** Accepted
- **Date:** 2026-08-10
- **Decision owner:** Caico Leung
- **Amends:** ADR-0013's "single accent (amber), one ink, one mono" visual
  discipline, scoped to the batching section (#03) swatch strip only.

## Context

ADR-0013 established a strict minimalism discipline for the site: _"single
accent (amber), one ink, one mono."_ Every section — Hero, How it works,
Batching, Providers, Install — uses one amber accent on a dark ink field.
Deliberate, consistent, and load-bearing for the "calmer than templated
AI-marketing" positioning.

v0.5.0's `#116` ("WCAG-safe output colors for light & dark terminals") colorizes
**17 Conventional Commit types** in the CLI's terminal output — each a distinct
hue (feat=green, fix=orange, refactor=cyan, docs=blue, …), all clearing WCAG AA
Large (3:1) on both light and dark backgrounds (CONTEXT.md → **Commit-type
palette**). The site's existing `HUNK_TYPE_ACCENT` shows only 3 types in the
site's own amber-family tokens — it was never aligned with the CLI's palette.

The grilling session resolved that the website should _reflect_ this coloring.
The chosen surface is a **swatch strip** — a compact legend showing the 17
type→color pairs — placed inside the batching section (#03), alongside (but not
coupled to) the frozen `HUNK_SPLITTING` decomposition illustration. Introducing
17 non-amber hues into a single-amber-accent site is a direct, visible break of
ADR-0013.

## Decision

**Keep the swatch strip, and scope the amber-only exception.** The batching
section (#03) now carries two color treatments with different jobs:

1. **The decomposition illustration** (`HUNK_SPLITTING` + `HUNK_TYPE_ACCENT`) —
   unchanged, still 3 types in amber-family tokens. Its job is the per-hunk
   _decomposition_ concept, not color fidelity.
2. **The commit-type palette swatch strip** — 17 types in the CLI's actual
   WCAG-safe hues. Its job is to _demonstrate the coloring feature_: "17 commit
   types, each a distinct, readable color."

The break is justified because **multi-color rendering is the feature**, not
decoration. The swatch strip shows exactly what the CLI produces; suppressing it
to amber would misrepresent the product. ADR-0013's amber discipline still
governs every other section and every non-palette element within #03.

## Consequences

- **Pro:** The site honestly demonstrates the v0.5.0 coloring feature — visitors
  see the real palette, not a monochrome abstraction.
- **Pro:** The decomposition illustration stays a clean concept demo, uncoupled
  from source-code churn (the swatch strip owns color fidelity; the illustration
  owns the decomposition concept).
- **Con:** One section now carries two color systems. Mitigated by visual
  separation: the swatch strip is a labeled, self-contained legend beneath the
  decomposition, not interspersed with it.
- **Risk — why this ADR exists:** a future maintainer sees 17 colors in #03,
  reads ADR-0013's "single accent amber," and "fixes" the swatch strip back to
  amber — silently misrepresenting the feature. This ADR exists to stop that.

## Alternatives considered

- **Recolor the 3 decomposition types to match the CLI.** Rejected alone — only
  shows 3 of 17 types, silently changes a frozen illustration keyed to
  `shippedIn: '0.3.5'`, and still doesn't demonstrate the palette breadth.
- **Expand the decomposition to show more types.** Rejected — couples editorial
  copy to source-code type-set churn, and clutters the decomposition concept.
- **Suppress the palette entirely (CLI-only).** Rejected by the grilling
  decision (Q4=b): the website should reflect the coloring.
