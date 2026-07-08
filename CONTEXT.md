# aic-web

Marketing site for **aic** (AI-powered git commits) — a developer CLI.
A marketing home page plus keyword-targeted content pages. Built with Astro + Tailwind
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

**Page** (indexable):
A URL with its own content that a search engine can rank — the unit of SEO.
Distinct from a **route**, the Astro source file that renders it.
_Avoid_: "page" when you mean the source file — say route.

**Roundup page**:
A content page that surveys aic alongside competitor tools, targeting "best
AI commit tools" / comparison intent. aic is positioned within a fair survey
of the field, not declared the winner in a vacuum.
_Avoid_: listicle (informal — say roundup).

**vs page**:
A head-to-head comparison of aic against one named competitor, targeting
"{competitor} alternative" migration intent.

**Editorial comparison**:
A human judgment about a competitor (e.g. "aicommits has no auto-batching"),
not a machine-readable fact. Hand-maintained because it cannot be fetched —
it is an assessment, not data. Distinct from a fetched fact (ADR-0003) and a
low-drift constant (`src/config/site.ts`).
