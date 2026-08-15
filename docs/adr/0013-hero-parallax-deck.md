# ADR-0013: Hero section — 3D parallax deck redesign

- **Status:** Superseded — the parallax-deck implementation (Hero.astro +
  Dag.astro) was replaced by the V2 "Diff Lab" hero (HeroV2.astro, PR #38)
  and its source deleted. The decision below remains valid history: the
  spine-structure vs internal-treatment split it established still governs
  section redesigns (see ADR-0017).
- **Date:** 2026-08-01
- **Decision owner:** Caico Leung
- **Amends:** `docs/site-architecture.md` §2 ("homepage spine — unchanged") and
  the homepage-spine constraint referenced there. This ADR exists to make the
  hero rebuild an explicit, reviewed decision rather than scope creep that
  slipped in under the CRO banner.

## Context

The site-architecture spec (`docs/site-architecture.md`) pins the homepage to a
**fixed 7-section spine** (Topbar · Hero · How it works · Auto-batching ·
Providers · Install · Footer) and states the spine is "unchanged." The CRO
work in this batch legitimately touches the Hero _contents_ — build-time
GitHub stars, a ★ Star button, an "Install aic — one command" CTA label, a
trust line, platform microcopy — all authorized by the PR description's "CRO &
copy" clause and grounded in the customer research (`docs/research/`).

During implementation the Hero went further: the **section's visual treatment
was rebuilt** as a perspective-scene "deck" — the terminal floats inside a
`perspective` container, tilts gently with the pointer, leans back on
scroll-out, with dim monospace glyphs drifting as parallax dust and the H1
revealing line-by-line through a clip mask. Copy, i18n, and the composables
(`CommandsTable`, `Terminal`, `CopyButton`) were carried over unchanged; only
the chrome and motion layer were rebuilt. That visual rebuild is **not**
covered by "CRO & copy" and contradicts the spec's literal "spine — unchanged"
line if left undocumented.

## Decision

**Keep the rebuilt Hero, and split the spine constraint into two layers:**

1. **Spine _structure_ is preserved** — the count, identity, and order of the
   seven anchored sections are unchanged (Topbar · Hero · How · Batching ·
   Providers · Install · Footer). No eighth section was added; no section was
   reordered or merged. ADR-0002's "fixed seven" intent stands.

2. **A section's _internal treatment_ may be redesigned per its own ADR.** The
   Hero section's chrome and motion were rebuilt (this ADR). The other six
   sections are untouched. Future section-level redesigns get their own ADR —
   the spine constraint now governs structure, not frozen visuals.

The rebuild keeps every existing guarantee: GSAP motion stays gated behind
`(prefers-reduced-motion: no-preference)` via `gsap.matchMedia()` in
`src/lib/motion.ts`; pointer + scroll parallax only construct under
`whenMotionOk`, so reduced-motion / no-JS visitors see the deck assembled in
its final state at zero rAF cost. Single accent (amber), one ink, one mono —
the minimalism discipline the brief asked for first.

## Consequences

- **Pro:** Depth from motion (not graphics) differentiates the hero from
  templated AI-marketing aesthetics and reinforces the "atomic history" product
  story without a heavy asset payload (no raster images — ADR-0006's "no `<img>`"
  invariant holds).
- **Pro:** The CRO trust signals (stars, CTA, trust line) land inside a calmer,
  higher-dwell surface.
- **Con:** More motion surface to maintain. Mitigated by the reduced-motion
  gating already in place and by keeping the motion layer isolated from copy.
- **Risk:** A future maintainer reading only the spec's "spine — unchanged"
  line (now amended) could treat the hero chrome as accidental and revert it.
  This ADR exists to stop that — the same pattern ADR-0006 uses to protect the
  content pages.

## Alternatives considered

- **Revert the visual rebuild, keep only the CRO content changes.** Rejected —
  the rebuild is built, motion-safe, and carries real differentiation value;
  reverting working, verified work to satisfy a literal reading of "unchanged"
  is worse than amending the spec to match the decision.
- **Split into a separate PR.** Reasonable in hindsight, but the rebuild
  already shipped in this branch and is verified (build + 83 tests green).
  Documenting it here is cheaper than a revert-and-redo cycle and keeps the
  CRO content + visual work coherent.
- **Freeze all seven sections' visuals forever.** Rejected — couples the
  spine-structure decision (which exists to stabilize anchored navigation and
  the product story) to visual stasis it was never meant to enforce.
