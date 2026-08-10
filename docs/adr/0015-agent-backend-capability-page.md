# ADR-0015: Agent backend — capability page, not a spine section or a Providers fold-in

- **Status:** Accepted
- **Date:** 2026-08-10
- **Decision owner:** Caico Leung

## Context

v0.5.0 ships a **CLI-agent backend** (`#118`): aic can delegate to a local
coding-agent CLI — Claude Code, Codex, OpenCode, or Pi — in headless/print mode,
reusing that agent's own auth. No API key, no default model, no middleman. The
source repo models this as a co-equal `BackendKind::{Api, Cli}` (CONTEXT.md →
**Backend** / **Agent backend**) — not a Provider subtype.

The site needed to surface this. Three placements were on the table:

- **(A) Fold into the Providers section (#04)** — the agent names would sit
  beneath the provider chips and the default-model table.
- **(B) A new homepage spine section** — a permanent eighth section, requiring
  an ADR-grade break of the fixed-seven spine (CONTEXT.md / ADR-0013).
- **(C) A capability page** using the Hybrid Hero template (ADR-0009), with a
  transient Feature highlight chip on the homepage linking to it.

(A) is structurally wrong: a CLI agent has neither an API key nor a default
model, so it cannot populate the Providers section's default-model table and
collides with its "your key · your model · no middleman" positioning (the agent
backend is "no key, no model"). (B) over-weights a single new capability
relative to `aic resolve`, which is also a co-equal verb but lives on its own
capability page (`/resolve/`), not as a spine section.

## Decision

**Adopt (C): a `/agents/` capability page** using the Hybrid Hero template
(ADR-0009 — two-column copy + animated terminal mockup, on top of an article
body), plus a **transient Feature highlight chip** in the Topbar that links to
it. The chip decays as the release ages, by the Feature highlight lifecycle
(CONTEXT.md → **Feature highlight**).

The Providers section (#04) stays pure API — its "your key · your model"
positioning is unchanged. The agent backend gets its own narrative surface,
parallel to `/resolve/`.

The four agent names are **illustrative narrative copy** in prose and the
terminal mockup — not a build-time-fetched data table. CLI agents have no
`defaultModel`, so no model table applies. This follows ADR-0006 (capability
pages own hand-maintained narrative) and needs no ADR-0003 fetch extension:
adding a 5th agent would be a narrative update (new copy + mockup variant), not
a data refresh.

## Consequences

- **Pro:** The agent backend's distinct value prop ("bring your agent, not your
  key") gets room to breathe without distorting the Providers section or
  breaking the spine.
- **Pro:** Reuses the established capability-page template (`/resolve/`,
  `/deepseek/`) — no new page archetype.
- **Cost:** One more content page to maintain across 4 locales (en canonical +
  zh/ja/ko localized copy).
- **Risk — why this ADR exists:** a future maintainer sees `/agents/` as a
  capability page while Providers (#04) still says "your key · your model," and
  "fixes" the perceived inconsistency by folding agents back into Providers.
  The separation is deliberate: it tracks the `BackendKind::{Api, Cli}` split in
  the source, not an oversight.

## Alternatives considered

- **(A) Fold into Providers (#04).** Rejected — an agent backend has no key and
  no model; forcing it into a key-and-model table is a category error, and it
  undercuts the section's privacy/middleman positioning.
- **(B) New spine section.** Rejected — breaks the fixed-seven spine
  (CONTEXT.md) for a single capability that the existing capability-page pattern
  already serves; `aic resolve` set the precedent of capability-page, not spine.
- **Chip-only (no page).** Rejected — a co-equal backend buried in a transient
  chip undersells it; the chip surfaces, the page owns the narrative.
