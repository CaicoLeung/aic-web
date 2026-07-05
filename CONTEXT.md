# aic-web

Marketing site for **aic** (AI-powered git commits) — a developer CLI.
Single page composing seven sections: Topbar · Hero · How it works ·
Auto-batching · Providers · Install · Footer. Built with Astro + Tailwind
+ GSAP; facts (version, providers) fetched at build time from the source
repo (ADR-0003).

## Language

**Prose register**:
Sentences a human reads as persuasion or explanation — hero lede, section
ledes, asides, step details, install notes, post-install hints. Set in the
system-sans stack (`--font-display`).
_Avoid_: body text, copy (too generic — say "prose" when naming the register).

**Code register**:
Identifiers, commands, paths, hashes, version strings, and technical
labels (eyebrows, install tabs, provider chips, the Terminal mockup). Set
in JetBrains Mono (`--font-mono`).
_Avoid_: monospace text (describe by purpose, not glyph width).

**Visual mockup**:
A decorative in-page graphic that reinforces copy — the animated
`Terminal` and the batching `.pill` stack. The site has **no** raster
`<img>`s, so the word "image" in briefs maps to one of these.
_Avoid_: screenshot, picture, photo (there are none).
