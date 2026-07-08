# ADR-0006: The site owns narrative content pages

- **Status:** Accepted
- **Date:** 2026-07-08
- **Decision owner:** Caico Leung
- **Supersedes the "link out, don't duplicate" stance** implied by the
  README and the original single-page design.

## Context

The site was built as a **single marketing page** whose stated principle
was: *"The README of the source repo stays the docs source of truth; this
site links to it rather than duplicating"* (README; section comments in
`index.astro`). That kept content drift-free but left the site with
nothing indexable for **descriptive** search queries — only the branded
term "aic" ranks, and even that collides with the popular `aicommits`
tool.

The SEO goal (ADR-0006's premise) is to rank for descriptive long-tail
queries like *"AI commit message generator"* and *"aicommits
alternative"*. Search engines rank **pages with content on the ranking
domain**, not pages that point elsewhere. Every fact delegated to the
GitHub README is a fact Google cannot reward this site for.

## Decision

Expand the site to **multiple content pages**, and split content
ownership by **type**, not by "duplicates or not":

- The **GitHub README remains the source of truth for the technical
  reference** — CLI flags, install commands, config. This stays
  ADR-0003 territory; duplicating it rots fast.
- The **site owns narrative content that does not belong in a README**:
  comparisons, "why," use cases, guides. This is **prose the README does
  not carry** (per `CONTEXT.md`, the *prose register*), so there is no
  duplication — it is a different register entirely.

The v1 page-set: a home hub (`/`), a head-to-head `/vs/aicommits`, and a
roundup `/best-ai-commit-tools`. Comparison facts are **editorial
comparisons** (hand-maintained judgments), not fetched facts — see
`CONTEXT.md`.

## Consequences

- **Pro:** Indexable, keyword-targeted pages make descriptive long-tail
  ranking achievable.
- **Pro:** No drift on the technical reference — the duplication-prone
  facts still live in one place (the README / build-time fetch).
- **Con:** More pages to maintain. Mitigated by the fair-comparison
  standard (each editorial claim is verified against competitor docs)
  and the one-cluster-per-page cannibalization rule.
- **Risk:** A future maintainer reading the old "link out, don't
  duplicate" comments may treat the content pages as accidental
  duplication and delete them. **This ADR exists to stop that.**

## Alternatives considered

- **Stay single-page** — rejected; descriptive ranking is unreachable
  from one thin marketing page that links outward.
- **Duplicate the full README onto the site** — rejected; high drift,
  and the README is reference content, not the narrative content that
  ranks.
