# ADR-0017: V2 re-spine — promote resolve + agent backend to homepage sections

- **Status:** Accepted
- **Date:** 2026-08-11
- **Decision owner:** Caico Leung
- **Supersedes:** the "(B) new spine section" rejection in ADR-0015; retires the
  ADR-0015 Topbar Feature-highlight chip.

## Context

The homepage spine was fixed at seven sections (CONTEXT.md → **Section**; ADR-0013).
Two of aic's co-equal verbs — `aic resolve` (merge conflicts) and the CLI-agent
backend (ADR-0009 / ADR-0015) — lived only on their own capability pages
(`/resolve/`, `/agents/`) and were surfaced on the homepage only as a lede
mention and a transient Topbar chip. A V2 marketing audit found both
underweighted relative to their product weight: the hero promises three
differentiators (hunk-level batching, resolve, agent backend) but the spine
only staged one (batching).

ADR-0015 had explicitly rejected a spine section for the agent backend, on the
grounds that it would "over-weight a single new capability relative to
`aic resolve`, which is also a co-equal verb but lives on its own capability
page." That objection is asymmetry-based: it assumed resolve would stay a
capability page while agents alone got promoted.

## Decision

**Promote both verbs to the spine symmetrically**, as compact teaser sections
that link to their capability pages for the full narrative. The spine grows
from seven to nine sections:

```
Topbar · Hero · How it works · Auto-batching · Resolve · Bring your agent
       · Providers · Install · Footer
```

- **#04 Resolve** — `src/components/resolve/ResolveSection.astro`. Compact
  eyebrow + h2 (reuses `resolve.h1.main`) + lede + the existing animated
  `ResolveTerminal` mockup + a link to `/resolve/`.
- **#05 Bring your agent** — `src/components/agents/AgentsSection.astro`. Same
  shape; h2 reuses `agents.h1`; links to `/agents/`.

Both reuse their capability page's headline (single source for the headline)
and the existing terminal mockups (no new visual asset). The Topbar nav gains
`resolve` + `agents` anchors; the Providers and Install eyebrows renumber
04→06 and 05→07 across all four locales.

**Retire the ADR-0015 Feature-highlight chip.** The Topbar "New — bring your
agent" chip was transient by design (ADR-0015 → **Feature highlight** lifecycle:
"decays as the release ages"). A permanent spine section contradicts that
lifecycle, so the chip, its i18n keys (`topbar.featureChip.*`), and its CSS are
removed for a clean cutover. Agents is now reached via the `#agents` nav anchor

- the section, and the deep page via the section link.

## Why symmetric promotion dissolves ADR-0015's objection

ADR-0015's reason for rejecting a spine section was _not_ that the spine is
immutable — it was that promoting agents _alone_ would over-weight one verb.
Promoting **both** verbs together restores the symmetry ADR-0015 was defending:
resolve and the agent backend are co-equal (both are `BackendKind`-adjacent
verbs in the source), and the spine now stages all three hero promises
(batching · resolve · agent backend), not just one.

## Consequences

- **Pro:** The homepage now stages every differentiator the hero promises.
  The bounce risk for resolve-intent and agent-intent visitors (who previously
  had to find `/resolve/` or `/agents/` via a footer link or a transient chip)
  drops — both are now scroll-reachable, anchor-linked, and visually proven
  with their terminal mockups.
- **Pro:** The asymmetry ADR-0015 defended is preserved _by construction_ —
  both verbs got the same treatment.
- **Pro:** Retiring the transient chip removes a credibility-aging surface (a
  "New" label that gets stale) and one build-time concern from the Topbar.
- **Cost:** Two more sections to maintain across 4 locales (eyebrow + lede +
  link each). The h2 and visuals are reused, so the maintenance surface is
  copy-only.
- **Cost:** The Topbar nav grows from 4 to 6 anchors; the existing responsive
  system (nav hidden <768px, gap tightens <950px) absorbs this without layout
  work, but watch for crowding on 768–950px tablets.
- **Risk:** A future maintainer sees the spine as nine, not seven, and treats
  section count as freely variable. It is not — this is a deliberate,
  audit-led V2 expansion; the spine is still a constrained surface and further
  additions remain ADR-grade.

## Alternatives considered

- **(B from ADR-0015) Promote agents alone.** Rejected — recreates the exact
  asymmetry ADR-0015 rejected; resolve would remain buried on its capability
  page while agents gets the spotlight.
- **Keep the chip, add only nav anchors.** Rejected — a permanent section
  marked "New" is a UI lie; clean cutover removes the chip rather than leaving
  contradictory transient chrome on a permanent section.
- **Fold both into the Batching section as sub-blocks.** Rejected — batching is
  the wedge (#03); resolve and agents are different verbs with different
  workflows and their own terminal mockups. Stuffing three verbs into one
  section dilutes the wedge and fights the single-promise-per-section rhythm.
- **Full-page depth on the homepage (workflow steps, presets).** Rejected — the
  capability pages already own that depth; the homepage section is a teaser
  that proves and links, not a duplicate.
