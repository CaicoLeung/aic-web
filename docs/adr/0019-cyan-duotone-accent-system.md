# ADR-0019: Adopt an amber + cyan duotone accent system

- **Status:** Accepted
- **Date:** 2026-08-14
- **Decision owner:** Caico Leung
- **Amends:** ADR-0013's "single accent (amber), one ink, one mono" minimalism
  discipline.
- **Relaxes the scope of:** ADR-0016, which fenced the _only_ color exception
  to "the batching section (#03) swatch strip only." A second accent is now
  site-wide, not strip-scoped.

## Context

ADR-0013 enforced a strict one-accent palette — amber — as a minimalism guard.
ADR-0016 then let the batching swatch strip break it, narrowly, because the
commit-type palette is genuine product data. The V2 redesign builds the whole
narrative around the commit/diff metaphor (HeroV2 "Diff Lab", scroll-driven
before→after): there is now a second, semantically load-bearing color — cyan —
that means "uncommitted / before / pending," paired against amber's
"committed / after / done." One accent can no longer carry that binary; a
duotone system can, and it does so with a fixed semantic so the meaning stays
stable across sections.

## Decision

Adopt a two-accent duotone system, site-wide, under V2:

- **Amber** (`--color-amber`) — committed / after / done / success.
- **Cyan** (`--color-cyan`) — uncommitted / before / pending / in-flight.

The mapping is enforced by _where_ each is applied, documented inline in
`global.css` (e.g. batching source cards, "before" eyebrows, flow arrows, and
active-but-not-run install tabs take cyan; diff results and committed states
take amber). Both tokens live in the `@theme` design-token block as the single
source.

ADR-0016's swatch strip is unaffected: it still carries the full 17-type CLI
palette, which is product data, orthogonal to the amber/cyan semantic pair.

## Consequences

- **Discipline moves from "one color" to "one semantic."** Drift now means
  applying cyan to a committed state or amber to a pending one — reviewers
  should check the _meaning_, not the hue count.
- **Contrast:** both accents are tuned for the dark ink field; new uses must
  keep the existing soft/glow variants for backgrounds.
- **ADR-0013 re-read:** its "single accent" line is amended by this ADR; the
  "one ink, one mono" parts stand.

## Alternatives considered

- **Stay amber-only** — preserves 0013 literally but collapses the
  before/after metaphor the V2 hero is built on; the redesign loses its core
  visual argument.
- **Free second accent, no semantic** — two colors with no rule drifts
  immediately. Rejected: the semantic mapping is the whole point.
