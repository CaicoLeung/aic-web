import type { APIRoute } from 'astro';

// Astro exposes the configured `base` verbatim — '/aic-web' with no trailing
// slash here. PWA scope and icon paths both need the slash, so normalize once.
const RAW_BASE = import.meta.env.BASE_URL;
const BASE = RAW_BASE.endsWith('/') ? RAW_BASE : `${RAW_BASE}/`;
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
