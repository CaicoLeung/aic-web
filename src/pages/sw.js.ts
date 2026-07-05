import type { APIRoute } from 'astro';

// Astro exposes the configured `base` verbatim — '/aic-web' with no trailing
// slash here. The SW needs the slash (scope prefix + start URL), so normalize.
const RAW_BASE = import.meta.env.BASE_URL;
const BASE = RAW_BASE.endsWith('/') ? RAW_BASE : `${RAW_BASE}/`;
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
