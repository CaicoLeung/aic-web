import type { APIRoute } from 'astro';

// Astro exposes the configured `base` verbatim — '/aic-web' with no trailing
// slash here. The SW needs the slash (scope prefix + start URL), so normalize.
const RAW_BASE = import.meta.env.BASE_URL;
const BASE = RAW_BASE.endsWith('/') ? RAW_BASE : `${RAW_BASE}/`;
const CACHE = 'aic-web-v2';

export const GET: APIRoute = () => {
  const sw = `
const CACHE = ${JSON.stringify(CACHE)};
const BASE = ${JSON.stringify(BASE)};
const START_URL = BASE;

self.addEventListener('install', (event) => {
  // No install precache — the network-first navigation handler caches
  // START_URL on every real visit (Q8-C). Precaching here fetched the home
  // HTML a second time on first load, competing with first paint for no
  // benefit (offline fallback is populated by the first real navigation).
  event.waitUntil(self.skipWaiting());
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
    // Stale-while-revalidate (ADR-0021 amendment): paint from cache
    // instantly, refresh in the background. Accepts one-page-view-stale
    // HTML on repeat visits — fine for a marketing site.
    event.respondWith(
      caches.match(START_URL).then((cached) => {
        const network = fetch(request)
          .then((res) => {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(START_URL, copy));
            return res;
          })
          .catch(() => cached);
        return cached || network;
      }),
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
