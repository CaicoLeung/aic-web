# ADR-0005: Hand-rolled PWA for web app installability

- **Status:** Accepted
- **Date:** 2026-07-05
- **Decision owner:** Caico Leung
- **Spec:** `docs/superpowers/specs/2026-07-05-pwa-web-app-install-design.md`

## Context

The marketing site is a single page deployed to GitHub Pages at
`/aic-web`. We want users to be able to **install** it (Chrome/Edge/Android
install prompt + iOS Safari "Add to Home Screen") and to have it **load
offline** once installed. The cacheable surface is tiny and knowable — one
HTML shell, one CSS bundle, one JS bundle, one font, the favicon, and the
rasterized icons — with no images or dynamic data.

The project deliberately runs lean (runtime deps: `astro`, `gsap`,
`@fontsource/jetbrains-mono`).

## Decision

Ship a **hand-rolled PWA** — manifest, service worker, and icons — with no
new runtime dependencies:

- **Manifest + service worker are Astro endpoints** that read
  `import.meta.env.BASE_URL` (normalized to guarantee a trailing slash, since
  Astro exposes the configured base verbatim as `/aic-web`), so a future
  domain swap only touches `astro.config.mjs`.
- **Icons are rasterized at build time** from the existing `favicon.svg`
  (and a new derived `maskable.svg`) via `sharp`, which is already in
  pnpm's `onlyBuiltDependencies` allowlist. PNGs are build artifacts in
  `dist/`, never committed; the SVG stays the single source of truth.
- **The service worker** (~40 lines) precaches the HTML shell on install,
  network-firsts navigations (fresh when online, shell offline), and
  stale-while-revalidates other same-origin GETs. Updates auto-apply via
  `skipWaiting()` + `clients.claim()` — appropriate for a stateless page.
- **Cache invalidation** is manual: bump the `CACHE` version constant in
  `src/pages/sw.js.ts` to retire old caches.

## Consequences

- **Pro:** Zero runtime deps added; one new devDep for icons (`sharp`) and
  one for running the TS test (`tsx`). The SW stays readable and easy to
  reason about.
- **Pro:** Icons regenerate from the SVG on every build — the logo can
  change without re-exporting PNGs by hand.
- **Con:** The SW lifecycle, cache versioning, and update flow are
  maintained by hand. Mitigated by the tiny surface and the `CACHE` escape
  hatch.
- **Con:** First-ever offline visit (before assets are runtime-cached)
  will not work; only the precached shell is guaranteed offline. Acceptable
  for a marketing site — assets are cached as the user browses, well before
  they install and launch standalone.

## Alternatives considered

- **`@vite-pwa/astro` (Workbox)** — battle-tested, handles SW edge cases
  and dev HMR. Rejected: adds Workbox + the integration as deps, far
  heavier than this single-page site needs, with config surface we would
  not touch.
- **Install-only (manifest + apple meta, no service worker)** — would cover
  iOS "Add to Home Screen" but not Chrome/Android's install prompt (which
  requires a SW with a fetch handler). Rejected: leaves the most common
  install path broken for ~no savings.
- **Pre-committed PNGs** — generate icons once out-of-band and commit.
  Rejected: binary artifacts in git, easy to forget regenerating when the
  logo changes, and a non-reproducible build step.
