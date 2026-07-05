# PWA Web App Install — Design Spec

- **Date:** 2026-07-05
- **Status:** Approved (brainstorming complete; ready for implementation plan)
- **Decision owner:** Caico Leung

## Goal

Make the `aic-web` marketing site installable as a Web App (PWA): browsers
that support it (Chrome, Edge, Android, desktop Chromium) show an "Install
app" prompt, the installed app launches standalone, and the site loads
offline. iOS Safari "Add to Home Screen" is covered as a side effect of the
same manifest + apple meta tags.

## Non-goals

- No push notifications, no background sync, no periodic sync.
- No full e2e (Playwright) PWA test harness in this scope (deferred).
- No app-shell / routing refactor — the site stays a single page.

## Context

- Deployed to GitHub Pages at base path `/aic-web` (`https://caicoleung.github.io/aic-web/`).
  HTTPS is provided by GitHub Pages, satisfying PWA install eligibility.
- Runtime deps today: `astro`, `gsap`, `@fontsource/jetbrains-mono`. The
  project deliberately runs lean; adding Workbox for a single-page
  marketing site would contradict that discipline.
- `sharp` is already in pnpm's `onlyBuiltDependencies` allowlist (recent
  commits), so the install friction for a `sharp` devDep is already paid.
- The site has **no raster images** today (`CONTEXT.md`); the canonical
  logo is `public/favicon.svg`. Icons will be rasterized from that SVG so
  the SVG stays the single source of truth.
- Dark theme color `#0e0f14` is already set on `<meta name="theme-color">`
  in `Base.astro` and will be reused for the manifest.
- Existing ADR cadence (`docs/adr/0001`–`0004`) — a PWA addition warrants
  ADR-0005.

## Decisions

1. **Full PWA** — manifest + service worker + icons, with real offline
   support (not just install-only).
2. **Hand-rolled, no new runtime deps.** No `@vite-pwa/astro`, no Workbox.
   The service worker stays readable (~40 lines) because the cacheable
   surface is tiny and knowable.
3. **Build-time icon generation via `sharp`.** PNGs are build artifacts in
   `dist/`, never committed to git. The SVG remains the single source of
   truth. A derived `public/maskable.svg` provides the maskable source.

## Architecture

### File map

```
src/
├── layouts/Base.astro                 ← modified (manifest link, SW registration script, apple meta)
├── pages/
│   ├── manifest.webmanifest.ts        ← new — manifest endpoint
│   ├── sw.js.ts                       ← new — service worker endpoint
│   └── icons/[icon].png.ts            ← new — generates 5 icon variants via sharp
└── lib/
    └── icon.ts                        ← new — sharp rasterize helper
public/
└── maskable.svg                       ← new — derived source SVG for maskable icons
docs/adr/
└── 0005-pwa-web-app-install.md        ← new — records the decision
tests/
└── icon.test.ts                       ← new — unit test for the icon helper
```

### Why endpoints (not static files) for manifest + SW

Astro's `import.meta.env.BASE_URL` resolves to `/aic-web/` at build time.
The manifest and service worker endpoints read it to compute `start_url`,
`scope`, icon paths, and the SW's fetch-filter prefix. If the site later
moves to a custom domain (flagged in `astro.config.mjs`), only
`astro.config.mjs` changes — the PWA code does not.

## Web App Manifest — `src/pages/manifest.webmanifest.ts`

Endpoint returns JSON with `Content-Type: application/manifest+json`.

| Field | Value |
|-------|-------|
| `name` | `"aic — AI-powered git commits"` |
| `short_name` | `"aic"` |
| `description` | Reuse `Base.astro`'s default description |
| `start_url` | `import.meta.env.BASE_URL` → `/aic-web/` |
| `scope` | `import.meta.env.BASE_URL` → `/aic-web/` |
| `display` | `"standalone"` |
| `background_color` | `#0e0f14` |
| `theme_color` | `#0e0f14` |
| `icons` | 4 entries (see below) |

Icon entries (absolute paths under the base):

- `{ src: "${BASE}icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" }`
- `{ src: "${BASE}icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" }`
- `{ src: "${BASE}icons/maskable-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" }`
- `{ src: "${BASE}icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }`

## Service Worker — `src/pages/sw.js.ts`

Endpoint returns the SW source with `Content-Type: application/javascript`.
Served from `/aic-web/sw.js` → scope `/aic-web/` (correct by construction).

### Constants

- `CACHE = "aic-web-v<VERSION>"` — manual version constant in the file.
  Bump on each deploy that should invalidate caches.
- `BASE` — injected at build from `import.meta.env.BASE_URL` → `/aic-web/`.
- `START_URL` — `BASE` (the HTML shell).

### Lifecycle

- **`install`** — precache `START_URL` (HTML shell) so an offline launch
  always has a page to render. Call `self.skipWaiting()`.
- **`activate`** — delete every cache whose name ≠ `CACHE`. Call
  `self.clients.claim()`.

### Fetch handler

Only handles: `request.method === "GET"` **and** same-origin **and**
`url.pathname.startsWith(BASE)`. Everything else bypasses the SW.

- **Navigations** (`request.mode === "navigate"`): **network-first**.
  Try the network; on success cache a copy under `START_URL` and return
  it. On failure, fall back to the cached shell. Result: fresh content
  when online, the shell renders offline.
- **Other same-origin GET** (CSS, JS, fonts, icons): **stale-while-revalidate**.
  Return the cached response immediately if present; in the background,
  fetch, cache the fresh copy, and let the next request use it. First
  miss falls through to the network and caches the result.

### Update flow

`skipWaiting()` + `clients.claim()` → the next navigation picks up the
new SW automatically. No "update available" prompt — correct for a
stateless marketing page with no in-flight user state to lose.

## Icons — `src/lib/icon.ts` + `src/pages/icons/[icon].png.ts`

### Helper (`lib/icon.ts`)

```ts
import sharp from 'sharp';

export async function rasterizeIcon(svg: string, size: number): Promise<Buffer> {
  return sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
}
```

### Endpoint (`pages/icons/[icon].png.ts`)

Uses `getStaticPaths` to emit five icon variants, each returning PNG
bytes with `Content-Type: image/png`:

| Param (`icon`) | Size | Source SVG | Notes |
|----------------|------|------------|-------|
| `icon-192` | 192 | `public/favicon.svg` | `purpose: any` |
| `icon-512` | 512 | `public/favicon.svg` | `purpose: any` |
| `maskable-192` | 192 | `public/maskable.svg` | `purpose: maskable` |
| `maskable-512` | 512 | `public/maskable.svg` | `purpose: maskable` |
| `apple-touch-icon` | 180 | `public/favicon.svg` | flattened onto opaque `#0e0f14` background (no transparency — iOS rejects alpha here) |

### Maskable source — `public/maskable.svg`

A derived SVG: same gradient as `favicon.svg`, **full-bleed** background
(no rounded corners — maskable icons get cropped to platform shape), and
the logo mark scaled to ~80% of the canvas to sit inside Android's safe
zone. This is the only hand-authored new visual asset; everything else
is rasterized from existing SVGs.

## `Base.astro` `<head>` changes

Add to the existing `<head>`:

- `<link rel="manifest" href={`${import.meta.env.BASE_URL}manifest.webmanifest`} />`
- `<link rel="apple-touch-icon" href={`${import.meta.env.BASE_URL}icons/apple-touch-icon.png`} />`
- `<meta name="apple-mobile-web-app-capable" content="yes" />`
- `<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />`
- `<meta name="apple-mobile-web-app-title" content="aic" />`
- Inline `<script>` (~5 lines), processed/bundled by Astro:
  ```ts
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register(`${import.meta.env.BASE_URL}sw.js`)
        .catch(() => { /* swallow: SW is a progressive enhancement */ });
    });
  }
  ```

## ADR-0005 — `docs/adr/0005-pwa-web-app-install.md`

Follows the existing ADR format (see `0004`). Records: the context (want
installability + offline for the marketing site), the decision (hand-rolled
PWA, build-time sharp icons, no Workbox), consequences (one new devDep, a
~40-line SW to maintain, manual cache-version bumps), and the alternatives
considered (`@vite-pwa/astro`, install-only without SW).

## Testing

The project runs `astro check` + `eslint` + `axe` but has **no test runner**.

### In scope

- **Unit test the icon helper** using Node's built-in `node:test` (zero
  new deps) — assert that `rasterizeIcon` returns PNG bytes (magic bytes
  `89 50 4E 47`) of the requested dimensions for each variant, including
  the maskable and apple-touch paths.
- **Manual PWA verification** (documented in the implementation plan as
  verification steps, not automated):
  - `astro check` passes (types).
  - `pnpm build` succeeds; `dist/` contains `manifest.webmanifest`,
    `sw.js`, and the five icon PNGs at correct sizes.
  - Lighthouse PWA audit (Chrome devtools) reports installable.
  - Application tab: manifest parses, SW registers + activates, precache
    populated, stale-while-revalidate observed on reload.
  - Real install: Chrome install prompt succeeds; iOS Safari "Add to
    Home Screen" succeeds; airplane-mode launch renders the shell.

### Deferred

- Full e2e (Playwright) PWA install-flow tests — larger lift, separate
  scope.

## Build / dependency changes

- `devDependencies`: add `sharp`.
- `pnpm-workspace.yaml`'s `onlyBuiltDependencies` already lists `sharp`,
  so pnpm will build its native addon without additional config.

## Risks & mitigations

- **SW stuck on bad code:** The `CACHE` version constant is the escape
  hatch — bump it and the old cache + SW are retired on next visit.
- **Maskable cropping:** Mitigated by the dedicated `maskable.svg` with
  an 80% logo and full-bleed background inside Android's safe zone.
- **Base path drift:** Mitigated by deriving every path from
  `import.meta.env.BASE_URL`; only `astro.config.mjs` needs to change
  if the deployment URL changes.
- **`apple-touch-icon` alpha rejection:** Flattened onto an opaque
  `#0e0f14` background in the endpoint.
