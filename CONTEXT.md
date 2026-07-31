# aic-web

Marketing site for **aic** (AI-powered git commits) — a developer CLI.
A marketing home page plus keyword-targeted content pages. Built with Astro + Tailwind

- GSAP; facts (version, providers) fetched at build time from the source
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

**Section**:
A permanent anchored block of the homepage spine (the fixed seven: Topbar ·
Hero · How it works · Auto-batching · Providers · Install · Footer). A
co-equal pillar of the product story that survives version churn. Adding an
eighth is a deliberate, ADR-grade break of the fixed-spine decision.
_Avoid_: block, panel (generic — say section when naming a spine unit).

**Feature highlight**:
A version-scoped, point-in-time callout tied to a single release — the
`/changelog/` emphasis or a transient Topbar chip. Decays as the release
ages; distinct from a Section, which is permanent.
_Avoid_: banner, promo.

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

**Capability page**:
A content page that owns the narrative for one aic capability (e.g.
_resolve_), targeting tool-finder intent ("AI merge conflict resolver").
Hand-maintained prose (ADR-0006); distinct from a roundup (survey intent)
or a vs page (migration intent). `/resolve/` is the first.
_Avoid_: feature page (generic — say capability).

**Editorial comparison**:
A human judgment about a competitor (e.g. "aicommits has no auto-batching"),
not a machine-readable fact. Hand-maintained because it cannot be fetched —
it is an assessment, not data. Distinct from a fetched fact (ADR-0003) and a
low-drift constant (`src/config/site.ts`).

### Localization

**Canonical locale (EN)**:
The single source of truth for the site's narrative — the one locale whose
prose every other locale is derived from. English, matching the build-time
fact sources (ADR-0003/0008). The site's narrative is authored here first and
once; other locales are renderings of it.
_Avoid_: source language, default language (those will name the URL/default
behavior — a separate concern).

**Localized copy**:
A human-gated, independently-maintained rendering of the Canonical locale in
another language (ZH/JA/KO). First draft is machine-produced, then a human
reviews before it ships; once committed it is a hand-maintained asset, not a
live derivation. Distinct from the Canonical locale, which authors intent;
the copy renders it.
_Avoid_: translation (too thin — implies a mechanical word-swap, not a
human-owned narrative that can diverge).

**Translation drift**:
The expected gap between a Localized copy and the Canonical locale that opens
whenever EN changes and widens until the copy is re-synced. A steady-state
property of the EN-canonical model, not a defect to eliminate.
_Avoid_: staleness (implies decay toward uselessness; drift is bounded and
intentional).

**Locale**:
A published language variant the site emits — `en`, `zh`, `ja`, `ko`. The
unit `hreflang` alternates and sitemap entries are produced per. One
Canonical locale (EN) and several Localized copies; a copy in progress may
carry Stubbed messages until it reaches parity.
_Avoid_: language (too generic), translation (an activity, not the variant).

**Default locale**:
`en`, for URL and crawl behavior — served at `/` with no path prefix, and the
`x-default` hreflang target (ADR-0010). Distinct from the Canonical locale,
which names narrative authorship; Default locale names URL/default behavior
only.
_Avoid_: base language, fallback locale (fallback is runtime behavior, not
this concept).

**Stubbed message**:
A translatable string whose key exists in a locale module (so the type is
satisfied) but whose value is still the EN source — the pre-copy placeholder
state of a Localized copy in progress. Distinct from missing (the key is
absent, a type error) and from a committed Localized copy (which has diverged
into human-owned prose). The steady-state gap named by Translation drift is
measured in Stubbed messages.
_Avoid_: untranslated (ambiguous — say stubbed when naming the acknowledged
placeholder state).

**Switcher**:
(`English · 中文 · 日本語 · 한국어`). Selecting a locale navigates to the
localized equivalent of the current path; it does not persist a
preference — each page honors its own URL (ADR-0010).
_Avoid_: language picker, dropdown (generic — say switcher when naming this
element).
