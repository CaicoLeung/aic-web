# aic-web — Site Architecture

**Generated**: 2026-08-01 · **Scope**: marketing site for aic (AI git commit CLI)
**Site type**: Hybrid SaaS-marketing + SEO content (single-page product home + content pages)
**Locale model**: ADR-0010 — `en` canonical at root, `zh`/`ja`/`ko` prefixed (`/{locale}/`)
**Constraint**: homepage spine is a fixed 7 sections (CONTEXT.md) — content pages are the growth surface

---

## 1. Page Hierarchy (current)

```
Homepage (/)                                    L0
├── [homepage spine, anchored sections]         L1  (fixed 7: Topbar · Hero · How it works · Auto-batching · Providers · Install · Footer)
├── Resolve (/resolve)                          L1  capability page (ADR-0006)
├── Roundup (/best-ai-commit-tools)             L1  SEO survey hub
│   ├── vs aicommits (/vs/aicommits)            L2  comparison
│   ├── vs ai-commit (/vs/ai-commit)            L2  comparison
│   └── vs llmc (/vs/llmc)                      L2  comparison
└── Changelog (/changelog)                      L1  release notes

Every node above × 4 locales (en root + /zh /ja /ko prefixes).
Non-indexable: /manifest.webmanifest, /sw.js, /icons/*, /og.png
```

## 2. Proposed Page Hierarchy

```
Homepage (/)                                       L0
├── [homepage spine — unchanged]                   L1
├── Resolve (/resolve)                             L1
├── Roundup hub (/best-ai-commit-tools)            L1   ← hub of the comparison cluster
│   ├── vs aicommits (/vs/aicommits)               L2
│   ├── vs ai-commit (/vs/ai-commit)               L2
│   ├── vs llmc (/vs/llmc)                         L2
│   ├── vs opencommit (/vs/opencommit)  [P1]       L2   ← completes roundup cluster
│   └── vs git-ai (/vs/git-ai)          [P1]       L2
├── Alternatives hub (/alternatives)    [P2]       L1   ← migration-intent pages
│   ├── aicommits alternative (/alternatives/aicommits)   [P2]
│   ├── ai-commit alternative (/alternatives/ai-commit)   [P2]
│   └── llmc alternative (/alternatives/llmc)             [P2]
├── Changelog (/changelog)                         L1
└── Docs (/docs)                        [P2]       L1   (currently README-linked; optional)
```

## 3. Visual Sitemap (Mermaid)

```mermaid
graph TD
    subgraph Header
        HOME[Homepage /]
    end
    subgraph ContentHeader (proposed)
        RES[Resolve /resolve]
        RND[Roundup /best-ai-commit-tools]
        CMP[Compare /vs/aicommits]
        CLG[Changelog /changelog]
    end
    subgraph Comparison cluster
        VS1[vs aicommits]
        VS2[vs ai-commit]
        VS3[vs llmc]
        VS4[vs opencommit P1]
        VS5[vs git-ai P1]
    end
    HOME --> RES
    HOME --> RND
    HOME --> CLG
    RND --> VS1
    RND --> VS2
    RND --> VS3
    RND -.-> VS4
    RND -.-> VS5
    VS1 <--> VS2
    VS1 <--> VS3
    VS2 <--> VS3
    RES --> RND
```

## 4. URL Map

| Page                    | URL (en)                | Parent  | Nav location                                     | Priority |
| ----------------------- | ----------------------- | ------- | ------------------------------------------------ | -------- |
| Homepage                | `/`                     | —       | Header (anchors)                                 | High     |
| Resolve                 | `/resolve`              | Home    | Hero link, Footer                                | High     |
| Roundup                 | `/best-ai-commit-tools` | Home    | Footer, Batching section                         | High     |
| vs aicommits            | `/vs/aicommits`         | Roundup | Footer "compare", Roundup card, More-comparisons | High     |
| vs ai-commit            | `/vs/ai-commit`         | Roundup | Roundup card, More-comparisons                   | Medium   |
| vs llmc                 | `/vs/llmc`              | Roundup | Roundup card, More-comparisons                   | Medium   |
| Changelog               | `/changelog`            | Home    | Topbar/Header version chip, Footer               | Medium   |
| vs opencommit _(P1)_    | `/vs/opencommit`        | Roundup | Roundup card, More-comparisons                   | Low      |
| vs git-ai _(P1)_        | `/vs/git-ai`            | Roundup | Roundup card, More-comparisons                   | Low      |
| Alternatives hub _(P2)_ | `/alternatives`         | Home    | Footer                                           | Low      |
| Docs _(P2)_             | `/docs`                 | Home    | Footer                                           | Low      |

URL conventions already compliant: lowercase, hyphens, trailing slash, no dates/IDs, hierarchy-mirroring (`/vs/{name}`).

## 5. Navigation Spec

**Current:**

- Homepage Topbar (anchors): `how · batching · providers · install` + version chip + GitHub + language switcher — fixed spine, leave as-is.
- Content pages use `ContentHeader`: brand · home · changelog · GitHub + version chip.
- Footer: Resolve · Roundup · Compare (vs/aicommits) · Changelog + Star CTA.

**Proposed (P0, low-risk):**

1. Extend `ContentHeader` nav to `Home · Resolve · Roundup · Compare · Changelog` — gives every content page a route to the comparison cluster (today only via footer). Keep homepage Topbar untouched (spine constraint).
2. Add breadcrumbs on vs pages: `Home › Roundup › aic vs {competitor}` — mirrors URL (`/` → `/best-ai-commit-tools/` → `/vs/{name}/`), free internal links + FAQ-adjacent clarity.

**P1:** rename ContentHeader "Compare" target to a comparison hub if one is built; add "Alternatives" footer column when P2 ships.

## 6. Internal Linking Plan

**Hub-and-spoke (comparison cluster):**

- Hub: `/best-ai-commit-tools` (roundup) — links to all vs pages ✓ (done).
- Spokes: each vs page links back to roundup? **Partial** — aicommits page has `cmpLink`-style footer but the generic vs pages do not link back to the roundup in content. Add a "See aic among the best AI commit tools →" link in the verdict/more section (reuses `roundup.field.vsAicommitsLink` pattern). [P0]
- Spoke↔spoke: ✓ done (More comparisons).

**Orphan audit (current):** none — every page has ≥1 inbound link (footer minimum). ✓

**Recommended additions:**

- vs pages → roundup (missing, add) [P0]
- resolve page → roundup (currently only via footer; add a content link in the verdict) [P1]
- roundup → resolve (only via footer/batching; a roundup "need merge conflicts resolved → aic" bullet already points to aic, add direct resolve link) [P1]
- Changelog → roundup / vs pages (optional cross-section, e.g., changelog "see also") [P2]

## 7. Findings & Priorities

| #   | Finding                                                                                               | Priority |
| --- | ----------------------------------------------------------------------------------------------------- | -------- |
| 1   | Content pages can't reach the comparison cluster from the header (footer-only)                        | P0       |
| 2   | vs pages don't link back to the roundup hub (in-content)                                              | P0       |
| 3   | No breadcrumbs on vs pages                                                                            | P0/P1    |
| 4   | Comparison cluster incomplete: opencommit + git-ai lack vs pages (both in roundup)                    | P1       |
| 5   | No migration-intent `/alternatives/` pages (FAQ keyword coverage exists, pages don't)                 | P2       |
| 6   | No `/docs/` — README is the docs source of truth by design (ADR-0006); document only if content grows | P2       |
| 7   | zh-optimized landing pages (Chinese dev niche, ai-commit's `-l zh` signal) — separate strategy        | P2       |
| 8   | 3-click rule: all key pages reachable in ≤3 clicks today ✓                                            | —        |

## Implementation Status

- ✅ **P0-1 ContentHeader nav** — `Home · Resolve · Roundup · Compare · Changelog` added to content pages (4 locales), locale-aware, wraps on small screens. (2026-08-01)
- ✅ **P0-2 vs → roundup back-link** — "See aic among the best AI commit tools →" in the More-comparisons section of all vs pages (4 locales). (2026-08-01)
- ✅ **P0-3 Breadcrumbs** — `Home › Roundup › aic vs {competitor}` on all vs pages, `aria-current="page"`, locale-aware (4 locales). (2026-08-01)
- ✅ **P1 vs opencommit + vs git-ai pages** — comparison cluster complete (5 vs pages × 4 locales); OpenCommit added to the roundup (6 tools, note + choose + strength updated). (2026-08-01)
- ✅ **P1 resolve ↔ roundup cross-links** — resolve verdict links to roundup; roundup verdict links to resolve. (2026-08-01)
- ✅ **P2 /alternatives/ hub + 5 singular pages** — `/alternatives/` (hub) + `/alternatives/{aicommits,opencommit,ai-commit,llmc,git-ai}` × 4 locales; Format-1 migration intent (why switch → matrix → switch/stay → how to switch); footer nav link added. (2026-08-01)
- ⏸️ **P2 /docs/** — intentionally deferred: ADR-0006 keeps the source README as docs source of truth; revisit only if content grows.
- ✅ **P2 DeepSeek capability page** — `/deepseek/` ("aic + DeepSeek"): DeepSeek provider guide — setup wizard walkthrough, env config, default model, FAQ + FAQPage schema; footer nav link added. Published as a **locale-symmetric** page across all 4 locales (identical structure/schema per locale; no zh-primary hreflang or zh-only URL signal). DeepSeek matters most to the Chinese-dev ICP (zh default LLM), but a dedicated zh-optimized landing (§7 #7) remains a separate, deferred strategy — this page does not claim to be it. (2026-08-01)
