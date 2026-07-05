# ADR-0004: Body set in system-sans; JetBrains Mono reserved for the code register

- **Status:** Accepted
- **Date:** 2026-07-05
- **Decision owner:** Caico Leung
- **Refines:** ADR-0002 (which set the whole site, including body, in the mono aesthetic)

## Context

ADR-0002 adopted `aic-intro.png`'s dark/amber/mono aesthetic as the design
language for the whole site, and body copy was set in JetBrains Mono at
14px to evoke a terminal feel. On mobile this taxed readability: mono is
~12% wider than proportional type (fewer characters per line), and
persuasive ledes read as "code" rather than copy — which also blurred the
signal that the *actual* code (terminal, commands, hashes) is meant to
carry.

## Decision

Body copy uses the **system-sans stack** already used for headings
(`--font-display`), producing a two-register type system:

- **Prose register → sans** — `.lede`, `.aside`, `.step-detail`, `.note`,
  `.postinstall`, `.brand-tag`, `.cta-hint` surrounding text, footer meta.
- **Code/chrome register → mono** — Terminal, `.commands .cmd-name`, all
  `<code>` spans, `.hash`, `.cmd-line`, `.version`, `.eyebrow`, `.tab`,
  `.provider-chip`, `.github`.

No new web font is loaded. The change is **site-wide, not mobile-only**:
a face that swaps across breakpoints would make the same lede inconsistent
phone-to-desktop, which is worse than the original problem.

## Consequences

- **Pro:** Largest readability win at zero font cost; the system-sans stack
  is already loaded for headings.
- **Pro:** Sharper code/prose distinction — mono now reads as *intentionally*
  mono instead of "everything is mono."
- **Con:** Softens the terminal aesthetic slightly. Acceptable: the terminal
  mockup, command tables, and hashes still carry it.
- **Con:** Future body copy must opt *into* sans by default; only
  identifiers/commands/labels opt into mono. Documented in `CONTEXT.md`.

## Alternatives considered

- **Keep mono, bump to ~16px** — preserved the brand voice but left the
  width/readability tax and the muddled code/prose signal.
- **Add a humanist sans (Inter / Geist) for body** — more polish, but a new
  ~30–50kb web-font dependency for no measurable gain over the system stack
  on a site whose headings are already system-sans.
