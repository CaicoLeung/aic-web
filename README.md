# aic-web

Marketing site for [aic](https://github.com/CaicoLeung/aic) — the AI-powered
git commit CLI. Live at **<https://caicoleung.github.io/aic-web/>**.

Built with Astro 5 + Tailwind v4 + TypeScript + GSAP.

## Architecture

Single-page marketing site with anchored sections (`#how`, `#batching`,
`#providers`, `#install`). The README of the source repo stays the docs
source of truth; this site links to it rather than duplicating.

Three architectural decisions are documented as ADRs in [`docs/adr/`](./docs/adr):

- **ADR-0001** — separate `aic-web` repo (vs. subpath of personal Pages).
- **ADR-0002** — hybrid visual direction: dark product aesthetic from
  `aic-intro.png` + content blueprint from `aic-sketch.png`.
- **ADR-0003** — build-time fact fetch from the aic source repo.

## Content sync

Version and provider list are **fetched at build time** from
`raw.githubusercontent.com/CaicoLeung/aic/main/{Cargo.toml,src/llm.rs}`
(see `src/data/aic.ts`). A nightly cron rebuild in
`.github/workflows/deploy.yml` keeps the live site within ~24h of an aic
release. Every fact has a `FALLBACK_*` constant in `src/config/site.ts`
so a parse failure never breaks a deploy.

Install methods, GitHub URL, and the 6-step "how it works" copy are
low-drift and live as constants in `src/config/site.ts`.

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # type-check + production build to dist/
pnpm preview      # serve dist/ locally
```

Requires Node 20+ and pnpm 10+.

## Project structure

```
src/
├── components/    # one folder per section (topbar/, hero/, how-it-works/, …)
├── config/site.ts # PROVIDERS, INSTALL_METHODS, FALLBACK_*, COMMANDS, etc.
├── data/aic.ts    # loadAicFacts() — build-time fetch + parse
├── lib/motion.ts  # GSAP matchMedia / reduced-motion gate
├── layouts/Base.astro
├── pages/index.astro
└── styles/global.css  # design tokens (@theme) + shared primitives
```

Design source-of-truth files (the original `aic-intro.*` and
`aic-sketch.*` sketches) live under [`design/source/`](./design/source)
as historical reference.

## Motion

GSAP Tier 1 (hero entrance stagger, typed terminal, copy-button
feedback) and Tier 2 (section scroll-reveal, sticky-nav blur). Every
motion is gated behind `(prefers-reduced-motion: no-preference)` via
`gsap.matchMedia()` in `src/lib/motion.ts`. Reduced-motion users see
the final state immediately with no rAF overhead.

## License

MIT — same as the aic source repo.
