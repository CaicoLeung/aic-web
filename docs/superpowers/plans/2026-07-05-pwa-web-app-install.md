# PWA Web App Install Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the `aic-web` marketing site installable as a Web App — manifest + service worker + rasterized icons, with real offline support and zero new runtime dependencies.

**Architecture:** Hand-rolled PWA. A web app manifest, a service worker, and five PNG icons are produced by Astro endpoints (so they can read `import.meta.env.BASE_URL` and stay portable). Icons are rasterized at build time from the existing `favicon.svg` (and a new derived `maskable.svg`) via `sharp`. The service worker (~40 lines) precaches the HTML shell, network-firsts navigations, and stale-while-revalidates other same-origin GETs. Updates auto-apply via `skipWaiting()`/`clients.claim()`.

**Tech Stack:** Astro 5, TypeScript (strict), `sharp` (build-time rasterization, new devDep), `tsx` (runs the TS unit test under `node:test`, new devDep), `node:test` (built-in — no test framework added).

**Spec:** [`docs/superpowers/specs/2026-07-05-pwa-web-app-install-design.md`](../specs/2026-07-05-pwa-web-app-install-design.md)

> **Correction discovered during Task 5 (2026-07-05):** `import.meta.env.BASE_URL`
> resolves to `/aic-web` (no trailing slash) in this Astro setup, not `/aic-web/`
> as the spec assumed. Every `${BASE}...` concatenation broke and `scope` was
> malformed. Tasks 5, 6, and 7 normalize BASE to guarantee a trailing slash
> (`const BASE = RAW_BASE.endsWith('/') ? RAW_BASE : RAW_BASE + '/'`). Task 5
> also folded in `@types/node`, which the icon endpoint needs under strict mode.
> The unit-test/devDep additions are otherwise unchanged.

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `package.json` | Modify | Add `sharp` + `tsx` devDeps; add `test` script |
| `src/lib/icon.ts` | Create | `rasterizeIcon(svg, size, options?)` — thin `sharp` wrapper |
| `tests/icon.test.ts` | Create | Unit test for `rasterizeIcon` via `node:test` |
| `public/maskable.svg` | Create | Derived source SVG for maskable icons (full-bleed bg, 80% logo) |
| `src/pages/icons/[icon].png.ts` | Create | Endpoint emitting 5 PNG variants via `getStaticPaths` |
| `src/pages/manifest.webmanifest.ts` | Create | Manifest endpoint |
| `src/pages/sw.js.ts` | Create | Service worker endpoint |
| `src/layouts/Base.astro` | Modify | Add manifest link, apple meta tags, apple-touch-icon, SW registration script |
| `docs/adr/0005-pwa-web-app-install.md` | Create | Records the decision in the project's ADR format |

---

## Task 1: Add tooling (sharp, tsx, test script)

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Add devDeps and test script**

Edit `package.json`. In `devDependencies`, add `sharp` and `tsx` (sorted to match the existing alphabetical-ish order). In `scripts`, add a `test` entry. The result:

```json
{
  "name": "aic-web",
  "version": "0.1.0",
  "type": "module",
  "private": true,
  "description": "Marketing site for aic — AI-powered git commits. Built with Astro + Tailwind v4 + GSAP.",
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "check": "astro check",
    "test": "node --import tsx --test tests/*.test.ts",
    "format": "prettier --write .",
    "lint": "eslint . --ext .ts,.astro",
    "axe": "axe-preview"
  },
  "dependencies": {
    "@fontsource/jetbrains-mono": "^5.2.8",
    "astro": "^5.0.0",
    "gsap": "^3.12.5"
  },
  "devDependencies": {
    "@astrojs/check": "^0.9.0",
    "@tailwindcss/vite": "^4.0.0",
    "axe-core": "^4.10.0",
    "prettier": "^3.3.0",
    "prettier-plugin-astro": "^0.14.0",
    "prettier-plugin-tailwindcss": "^0.6.0",
    "sharp": "^0.33.0",
    "tailwindcss": "^4.0.0",
    "tsx": "^4.19.0",
    "typescript": "^5.6.0"
  }
}
```

- [ ] **Step 2: Install**

Run: `pnpm install`
Expected: installs cleanly. `sharp`'s native build is already allowlisted in `pnpm-workspace.yaml` (`onlyBuiltDependencies`), so no prompt.

- [ ] **Step 3: Verify both binaries resolve**

Run: `node -e "import('sharp').then(()=>console.log('sharp ok'))" && node --import tsx -e "console.log('tsx ok')"`
Expected: prints `sharp ok` then `tsx ok`.

- [ ] **Step 4: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore(deps): add sharp and tsx for PWA icon rasterization and tests"
```

---

## Task 2: Icon rasterize helper (TDD)

**Files:**
- Test: `tests/icon.test.ts`
- Create: `src/lib/icon.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/icon.test.ts`:

```ts
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { rasterizeIcon } from '../src/lib/icon.ts';

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47]);

// PNG IHDR: width and height are big-endian uint32 at byte offsets 16 and 20.
// Color type is byte 25 (2 = truecolor RGB / no alpha, 6 = RGBA).
function readPngHeader(buf: Buffer): {
  readonly width: number;
  readonly height: number;
  readonly colorType: number;
} {
  return {
    width: buf.readUInt32BE(16),
    height: buf.readUInt32BE(20),
    colorType: buf.readUInt8(25),
  };
}

const OPAQUE_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#0e0f14"/></svg>';

const ROUNDED_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="8" y="8" width="48" height="48" rx="12" fill="#f3b340"/></svg>';

describe('rasterizeIcon', () => {
  it('emits PNG bytes at the requested square size', async () => {
    const buf = await rasterizeIcon(OPAQUE_SVG, 192);
    assert.ok(buf.subarray(0, 4).equals(PNG_MAGIC), 'should start with PNG magic bytes');
    const { width, height } = readPngHeader(buf);
    assert.equal(width, 192);
    assert.equal(height, 192);
  });

  it('preserves alpha when no background is requested', async () => {
    const buf = await rasterizeIcon(ROUNDED_SVG, 192);
    const { colorType } = readPngHeader(buf);
    assert.equal(colorType, 6, 'PNG with transparency should be color type 6 (RGBA)');
  });

  it('flattens onto an opaque background when one is provided', async () => {
    const buf = await rasterizeIcon(ROUNDED_SVG, 180, { background: '#0e0f14' });
    const { width, height, colorType } = readPngHeader(buf);
    assert.equal(width, 180);
    assert.equal(height, 180);
    assert.equal(colorType, 2, 'flattened PNG should be color type 2 (RGB, no alpha)');
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `pnpm test`
Expected: FAIL — `Cannot find module '../src/lib/icon.ts'` (file does not exist yet).

- [ ] **Step 3: Write the minimal implementation**

Create `src/lib/icon.ts`:

```ts
import sharp from 'sharp';

export interface RasterizeOptions {
  /** Solid hex color (e.g. '#0e0f14') composited under any alpha. Omittable. */
  readonly background?: string;
}

/**
 * Rasterize an SVG string to PNG bytes at a fixed square size.
 *
 * Used by the PWA icon endpoint to produce installable PNG icons from SVG
 * sources. Pass `background` to flatten transparency onto an opaque color
 * (required for apple-touch-icon, which iOS rejects if it has alpha).
 */
export async function rasterizeIcon(
  svg: string,
  size: number,
  options?: RasterizeOptions,
): Promise<Buffer> {
  const pipeline = sharp(Buffer.from(svg)).resize(size, size);
  const flattened = options?.background
    ? pipeline.flatten({ background: options.background })
    : pipeline;
  return flattened.png().toBuffer();
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `pnpm test`
Expected: PASS — 3 tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/lib/icon.ts tests/icon.test.ts
git commit -m "feat(icon): add sharp-based SVG→PNG rasterize helper"
```

---

## Task 3: Maskable source SVG

**Files:**
- Create: `public/maskable.svg`

This is a static asset — no unit test. Correctness is verified visually in Task 9 (Android safe-zone check via Lighthouse maskable validation).

- [ ] **Step 1: Create the maskable SVG**

The maskable variant needs a full-bleed gradient background (no rounded corners — Android crops to platform shape) and the logo scaled to ~80% so it sits inside the safe zone. Derived from `public/favicon.svg`.

Create `public/maskable.svg`:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512" role="img" aria-label="aic logo (maskable)">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f3b340" />
      <stop offset="1" stop-color="#e88a4f" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="64" height="64" fill="url(#g)" />
  <g transform="translate(6.4 6.4) scale(0.8)" fill="#1a1408">
    <path d="M28,15 Q28,34 47,34 Q28,34 28,53 Q28,34 9,34 Q28,34 28,15 Z" />
    <path d="M48,8 Q48,16 56,16 Q48,16 48,24 Q48,16 40,16 Q48,16 48,8 Z" />
  </g>
</svg>
```

The `translate(6.4 6.4) scale(0.8)` transform centers an 80%-scaled copy of the logo (offset = `(1 − 0.8) × 64 / 2 = 6.4`).

- [ ] **Step 2: Sanity-check the SVG parses**

Run: `node -e "import('sharp').then(async ({default: sharp}) => { const svg = await import('node:fs/promises').then(f => f.readFile('public/maskable.svg')); const { width, height } = await sharp(svg).metadata(); console.log(width, height); })"`
Expected: prints `512 512`.

- [ ] **Step 3: Commit**

```bash
git add public/maskable.svg
git commit -m "feat(assets): add maskable logo SVG for PWA adaptive icons"
```

---

## Task 4: Icon PNG endpoint

**Files:**
- Create: `src/pages/icons/[icon].png.ts`

- [ ] **Step 1: Create the endpoint**

The endpoint emits five PNG variants. `getStaticPaths` declares which icons exist; `GET` rasterizes each from its source SVG at build time.

Create `src/pages/icons/[icon].png.ts`:

```ts
import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { rasterizeIcon } from '@/lib/icon';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public/', import.meta.url));

interface IconVariant {
  readonly size: number;
  readonly source: 'favicon.svg' | 'maskable.svg';
  readonly background?: string;
}

const VARIANTS: Record<string, IconVariant> = {
  'icon-192': { size: 192, source: 'favicon.svg' },
  'icon-512': { size: 512, source: 'favicon.svg' },
  'maskable-192': { size: 192, source: 'maskable.svg' },
  'maskable-512': { size: 512, source: 'maskable.svg' },
  'apple-touch-icon': {
    size: 180,
    source: 'favicon.svg',
    background: '#0e0f14',
  },
};

export const getStaticPaths = (() =>
  Object.keys(VARIANTS).map((icon) => ({ params: { icon } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const key = params.icon;
  if (key === undefined || !(key in VARIANTS)) {
    return new Response('Not found', { status: 404 });
  }
  const variant = VARIANTS[key];
  const svg = await readFile(`${PUBLIC_DIR}${variant.source}`, 'utf-8');
  const png = await rasterizeIcon(
    svg,
    variant.size,
    variant.background ? { background: variant.background } : undefined,
  );
  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};
```

- [ ] **Step 2: Build to generate the PNGs**

Run: `pnpm build`
Expected: `astro check` passes (no type errors); `astro build` succeeds. `dist/icons/` contains `icon-192.png`, `icon-512.png`, `maskable-192.png`, `maskable-512.png`, `apple-touch-icon.png`.

- [ ] **Step 3: Verify each PNG's dimensions**

Run: `node -e "import('sharp').then(async ({default: sharp}) => { for (const n of ['icon-192','icon-512','maskable-192','maskable-512','apple-touch-icon']) { const m = await sharp('dist/icons/'+n+'.png').metadata(); console.log(n, m.width+'x'+m.height, m.hasAlpha ? 'alpha' : 'opaque'); } })"`
Expected:
```
icon-192 192x192 alpha
icon-512 512x512 alpha
maskable-192 192x192 alpha
maskable-512 512x512 alpha
apple-touch-icon 180x180 opaque
```
`apple-touch-icon` must report `opaque` (flattened); the others report `alpha` (rounded corners on the favicon leave transparency).

- [ ] **Step 4: Commit**

```bash
git add src/pages/icons/[icon].png.ts
git commit -m "feat(icons): add PNG icon endpoint rasterizing 5 variants via sharp"
```

---

## Task 5: Web App Manifest endpoint

**Files:**
- Create: `src/pages/manifest.webmanifest.ts`

- [ ] **Step 1: Create the manifest endpoint**

Create `src/pages/manifest.webmanifest.ts`:

```ts
import type { APIRoute } from 'astro';

const BASE = import.meta.env.BASE_URL;
const THEME_COLOR = '#0e0f14';

export const GET: APIRoute = () => {
  const manifest = {
    name: 'aic — AI-powered git commits',
    short_name: 'aic',
    description:
      'aic reads your diff, drafts a conventional commit, and commits it — one command. Nothing staged? It groups your work into logical commits for you.',
    start_url: BASE,
    scope: BASE,
    display: 'standalone',
    background_color: THEME_COLOR,
    theme_color: THEME_COLOR,
    icons: [
      { src: `${BASE}icons/icon-192.png`, sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: `${BASE}icons/icon-512.png`, sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: `${BASE}icons/maskable-192.png`, sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: `${BASE}icons/maskable-512.png`, sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
  return new Response(JSON.stringify(manifest), {
    headers: { 'Content-Type': 'application/manifest+json' },
  });
};
```

- [ ] **Step 2: Build and inspect the output**

Run: `pnpm build`
Expected: build succeeds. `dist/manifest.webmanifest` exists.

Run: `cat dist/manifest.webmanifest`
Expected: JSON with `"start_url":"/aic-web/"`, `"scope":"/aic-web/"`, `"display":"standalone"`, `"theme_color":"#0e0f14"`, and the four icon entries pointing at `/aic-web/icons/*.png`.

- [ ] **Step 3: Commit**

```bash
git add src/pages/manifest.webmanifest.ts
git commit -m "feat(pwa): add web app manifest endpoint"
```

---

## Task 6: Service worker endpoint

**Files:**
- Create: `src/pages/sw.js.ts`

- [ ] **Step 1: Create the service worker endpoint**

The SW is emitted as JS with `BASE` and `CACHE` injected at build time. Strategy: precache the HTML shell on install, network-first navigations, stale-while-revalidate other same-origin GETs, auto-update via `skipWaiting()`/`clients.claim()`.

Create `src/pages/sw.js.ts`:

```ts
import type { APIRoute } from 'astro';

const BASE = import.meta.env.BASE_URL;
const CACHE = 'aic-web-v1';

export const GET: APIRoute = () => {
  const sw = `
const CACHE = ${JSON.stringify(CACHE)};
const BASE = ${JSON.stringify(BASE)};
const START_URL = BASE;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.add(START_URL)).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith(BASE)) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(START_URL, copy));
          return res;
        })
        .catch(() => caches.match(START_URL)),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(request, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    }),
  );
});
`;
  return new Response(sw, {
    headers: { 'Content-Type': 'application/javascript' },
  });
};
```

- [ ] **Step 2: Build and inspect the output**

Run: `pnpm build`
Expected: build succeeds. `dist/sw.js` exists.

Run: `head -5 dist/sw.js`
Expected: the file begins with a blank line then `const CACHE = "aic-web-v1";` and `const BASE = "/aic-web/";` (the injected constants).

- [ ] **Step 3: Commit**

```bash
git add src/pages/sw.js.ts
git commit -m "feat(pwa): add service worker with shell precache and SWR caching"
```

---

## Task 7: Wire manifest, apple meta, and SW registration into Base.astro

**Files:**
- Modify: `src/layouts/Base.astro` (the `<head>` block, currently lines 36–58)

- [ ] **Step 1: Add PWA `<head>` entries**

In `src/layouts/Base.astro`, locate the icons comment block (currently):

```astro
    <!-- icons -->
    <link rel="icon" href="/aic-web/favicon.svg" type="image/svg+xml" />
```

Replace it with:

```astro
    <!-- icons -->
    <link rel="icon" href="/aic-web/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href={`${import.meta.env.BASE_URL}icons/apple-touch-icon.png`} />
    <link rel="manifest" href={`${import.meta.env.BASE_URL}manifest.webmanifest`} />

    <!-- apple web app -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="aic" />
```

> The pre-existing `favicon.svg` and font links hardcode `/aic-web/`. They are out of scope for this change; new PWA links use `import.meta.env.BASE_URL` so a future domain swap only touches `astro.config.mjs`.

- [ ] **Step 2: Add the SW registration script**

In the same file, immediately before the closing `</head>` (currently the `<meta name="generator" ... />` line at line 80), insert a bundled `<script>`. **Do not** use `is:inline` — Astro would then ship `import.meta.env.BASE_URL` unreplaced, and `import.meta` is illegal in a classic (non-module) script, so the registration would throw. A plain `<script>` is treated as a module, bundled by Astro/Vite, and `import.meta.env.BASE_URL` is replaced at build:

```astro
    <!-- PWA: register service worker (progressive enhancement — fails silently) -->
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker
            .register(`${import.meta.env.BASE_URL}sw.js`)
            .catch(() => {});
        });
      }
    </script>
```

- [ ] **Step 3: Build**

Run: `pnpm build`
Expected: build succeeds with no type or template errors. Astro emits the bundled registration script as a hashed module under `dist/_astro/`.

- [ ] **Step 4: Verify the built HTML has manifest, apple meta, and a bundled registration script**

Run: `grep -E 'manifest|apple-touch-icon|apple-mobile-web-app' dist/index.html`
Expected output (paths shown after Vite replaces `import.meta.env.BASE_URL`):
```
<link rel="apple-touch-icon" href="/aic-web/icons/apple-touch-icon.png" />
<link rel="manifest" href="/aic-web/manifest.webmanifest" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="aic" />
```

Then confirm the registration script has `BASE_URL` resolved to the real base path (it lives in the hashed bundle, not inline):
Run: `grep -rE 'register\(' dist/_astro/ | head -3`
Expected: at least one hit containing `` register(`/aic-web/sw.js`) `` — confirming `import.meta.env.BASE_URL` was replaced with `/aic-web/` at build time.

- [ ] **Step 5: Run lint and unit tests together**

Run: `pnpm lint && pnpm test`
Expected: no lint errors; 3 icon tests still pass.

- [ ] **Step 6: Commit**

```bash
git add src/layouts/Base.astro
git commit -m "feat(pwa): wire manifest, apple meta, and SW registration into Base layout"
```

---

## Task 8: ADR-0005

**Files:**
- Create: `docs/adr/0005-pwa-web-app-install.md`

- [ ] **Step 1: Write the ADR**

Follows the format of `docs/adr/0004-*.md`.

Create `docs/adr/0005-pwa-web-app-install.md`:

```markdown
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
  `import.meta.env.BASE_URL`, so a future domain swap only touches
  `astro.config.mjs`.
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
```

- [ ] **Step 2: Commit**

```bash
git add docs/adr/0005-pwa-web-app-install.md
git commit -m "docs(adr): record ADR-0005 hand-rolled PWA decision"
```

---

## Task 9: End-to-end verification (manual)

**Files:** none modified.

This task validates the whole stack as a system. There is no commit unless a step surfaces a defect — in which case fix and commit the fix with a `fix:` message.

- [ ] **Step 1: Clean full build**

Run: `pnpm build`
Expected: `astro check` passes; `astro build` reports all routes including `/aic-web/manifest.webmanifest`, `/aic-web/sw.js`, and the five `/aic-web/icons/*.png`.

- [ ] **Step 2: Full test + lint sweep**

Run: `pnpm test && pnpm lint`
Expected: 3 tests pass; no lint errors.

- [ ] **Step 3: Preview the production build**

Run: `pnpm preview`
Expected: serves at `http://localhost:4321/aic-web/`. Leave it running for the browser checks.

- [ ] **Step 4: DevTools — Application tab**

Open `http://localhost:4321/aic-web/` in Chrome. Open DevTools → Application:
- **Manifest:** parses without warnings; shows `aic` name, `standalone` display, theme color `#0e0f14`, and all four icons resolved (no broken-image thumbnails).
- **Service Workers:** shows `sw.js` activated and running; check "Update on reload" off, then reload — status should be **activated and is running**.
- **Cache Storage:** an `aic-web-v1` entry exists containing at least the start URL. After browsing around and reloading, CSS/JS/font/icon entries appear.

- [ ] **Step 5: Offline launch**

In DevTools → Network, set **Offline**. Reload the page.
Expected: the page still renders (network-first navigation falls back to the cached shell; assets come from cache).

- [ ] **Step 6: Lighthouse PWA audit**

In Chrome DevTools → Lighthouse, run a **PWA** audit against the preview URL (use Chrome's "audits" → Application → "Installability" errors block as a quick alternative).
Expected: **Installable** — no installability errors. (Common failures to watch for: missing 192 or 512 icon, `start_url` not in scope, SW has no fetch handler — all should be satisfied here.)

- [ ] **Step 7: Real install (Chrome)**

Click the install icon in the address bar (or ⋮ → **Install aic**).
Expected: a standalone window launches showing the site.

- [ ] **Step 8: Real install (iOS Safari, if a device is available)**

Open the preview URL on iOS Safari (same Wi‑Fi, machine IP). Tap **Share → Add to Home Screen**.
Expected: the icon that appears on the home screen is the `apple-touch-icon` (not a screenshot of the page); launching it opens standalone with the status bar style set.

- [ ] **Step 9: Update flow**

In `src/pages/sw.js.ts`, change `CACHE = 'aic-web-v1'` to `CACHE = 'aic-web-v2'`. Run `pnpm build && pnpm preview`. Hard-reload in Chrome.
Expected: DevTools → Application → Service Workers shows the new SW taking over (activate fires, old `aic-web-v1` cache is deleted from Cache Storage, `aic-web-v2` appears).

If all steps pass, revert the `v2` bump (it was just for the test) — OR leave it bumped and amend the layout commit if you prefer the deployed cache version to reflect the verified state. Either is fine; pick one and don't leave the working tree dirty.

- [ ] **Step 10: Final commit (only if cleanup edits were made)**

```bash
git status   # confirm whether sw.js.ts was reverted or left bumped
# If you reverted to v1, there is nothing to commit — the tree is clean.
# If you kept v2, commit it:
# git add src/pages/sw.js.ts && git commit -m "chore(pwa): bump service worker cache to v2"
```

---

## Done criteria

- [ ] `pnpm build`, `pnpm test`, and `pnpm lint` all pass clean.
- [ ] `dist/` contains `manifest.webmanifest`, `sw.js`, and five PNG icons at the right sizes (apple-touch opaque, the rest with alpha).
- [ ] Chrome DevTools Application tab: manifest valid, SW active, precache populated.
- [ ] Offline reload renders the shell.
- [ ] Lighthouse PWA audit reports installable.
- [ ] ADR-0005 merged.
```
