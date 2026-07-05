# ADR-0002: Hybrid visual direction — dark product aesthetic + sketchnote content

- **Status:** Accepted
- **Date:** 2026-07-05
- **Decision owner:** Caico Leung

## Context

Two distinct visual directions existed in the source repo:

| Artifact                         | Aesthetic                                                | Content                                                                                             |
| -------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `aic-intro.png/html`             | Dark, polished product UI (navy + amber + mono terminal) | Hero, brand, commands list, terminal mockup, providers row. **No install or how-it-works content.** |
| `aic-sketch.png` + `-mobile.png` | Light, hand-drawn sketchnote (paper + ink + rough.js)    | 6-step "how to use aic" flow, auto-batching callout, providers note, install narrative.             |

Three directions were possible: pure dark product (A), pure sketchnote
(B), or hybrid (C) — dark product visual system with the sketchnote's
information architecture re-rendered in the dark style.

## Decision

**Hybrid (C).** Adopt `aic-intro.png`'s dark/amber/mono aesthetic as
the **design language** for the whole site, and `aic-sketch.png`'s
**information architecture** (6-step flow, auto-batching section,
providers section) rendered in the dark style.

## Consequences

- **Pro:** Faithful to the stated source ("follow `aic-intro.png`")
  without losing the content narrative from the sketches.
- **Pro:** Dark mono aesthetic is right for a developer CLI — code,
  terminal output, and copy-paste snippets render cleanly; matches the
  audience's eye.
- **Pro:** "Your key · your model · no middleman" positioning copy from
  the sketch survives into the dark version verbatim.
- **Con:** Re-rendering the 6-step flow in the dark style is design work
  that didn't exist in either source. Acceptable cost — the step labels
  and narrative are reused.
- **Con:** Future additions must follow the dark product system or risk
  visual drift. Documented in `src/styles/global.css` tokens.

## Alternatives considered

- **Pure dark product** — rejected; loses the how-it-works narrative.
- **Pure sketchnote** — rejected; the paper/hand-drawn aesthetic is a
  poor fit for code blocks and copy-paste install snippets, and visually
  fights with what the audience expects from a developer CLI.
