# ADR-0022: v0.5.8 on the site — #07 Full-control section + trust-copy folds

- **Status:** Accepted
- **Date:** 2026-10-16
- **Decision owner:** Caico Leung
- **Extends:** ADR-0017 (spine expansions remain ADR-grade).

## Context

aic v0.5.8 (2026-10-15) shipped a control loop around the run: `--hint` run
directives (#154), `aic undo` (#154), opt-in Batch Review (#162), and a
secrets redaction gate before LLM send (#160/#161, also on `aic resolve`).
The site's narrative described the v0.5.5-era product; the changelog page
picks the release up automatically (ADR-0003/0008), but the marketing copy
did not. CONTEXT.md (**Section**) holds that spine additions are ADR-grade
since ADR-0017.

## Decision

**One new compact spine section — #07 Full control** — between Providers
(#06) and Install (renumbered 07→08 across all four locales).
`src/components/control/ControlSection.astro`; copy keyed `control.*` in the
message modules. It stages the loop as a single promise with three beats —
steer (`--hint`) · review (Batch Review) · undo (`aic undo`) — as
locale-invariant terminal-mock cards plus a ship-badge into
`/changelog/#0.5.8`.

**The redaction gate does NOT get a section.** It is a trust/safety fact,
not a workflow verb: it is folded into existing trust surfaces — a
`providers.redactionAside` line in the Providers section (key icon) and a
"Secrets blocked before send" item in the Install trust strip — reinforcing
the existing "key never leaves your machine" claim instead of adding an
eighth promise.

**The five /vs/{id} matrices gain two aic-win axes** — `undo` and
`redaction` (after `resolve`) — in `competitors.ts` + all four locales,
landing both features on the site's main conversion surface.

**No Topbar anchor for #control.** It is scroll-adjacent to Install and the
CTA; ADR-0017 already flagged 768–950px nav crowding at six anchors.

## Why one section for three verbs (vs ADR-0017's symmetric promotion)

ADR-0017 promoted two _co-equal verbs_ (resolve, agent backend) that each
owned a different workflow and a capability page. Hint/review/undo are not
co-equal verbs — they are one meta-capability: **the run is negotiable
end-to-end**. Three sections would over-weight it; one section with three
beats keeps the single-promise-per-section rhythm (the same reason ADR-0017
refused to fold resolve+agents into Batching, applied in reverse).

## Consequences

- **Pro:** The homepage now stages the full v0.5.8 story; control-intent
  and safety-intent visitors both find their proof scroll-reachable.
- **Cost:** Spine grows 9→10; `control.*` keys + install renumbering are
  maintained in 4 locales; 2 new matrix rows × 5 rivals × 4 locales.
- **Cost:** The section has no animated mockup (cards are static
  terminal-mocks) — acceptable for a compact teaser; upgrade if it becomes
  a wedge.
- **Risk:** Spine-creep precedent. The guard stands: additions remain
  ADR-grade (this ADR exists because of that rule, not despite it).

## Alternatives considered

- **Fold all four features into Batching.** Rejected — dilutes the #03
  wedge; only Batch Review belongs there (it is a batching-plan gate), and
  it got a second ship-badge in that section.
- **Transient Topbar chip (ADR-0015 Feature-highlight).** Rejected — decays
  by design; ADR-0017 retired chips as credibility-aging surfaces. Undo is
  a permanent capability, not a release highlight.
- **A `/undo/` or `/safety/` capability page first.** Rejected — no
  tool-finder search demand has been evidenced (ADR-0015's bar); the
  changelog page auto-covers the release notes.
