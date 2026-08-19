# ADR-0021: Edge-cached delivery and zero-white-flash first paint

- **Status:** Accepted
- **Date:** 2026-08-19
- **Decision owner:** Caico Leung

## Context

Cold first visits showed a ~3s white screen for Asian visitors (origin is
US cPanel shared hosting; measured HTML TTFB ~0.8s from the US, ~3s
end-to-end from the user's location). Two distinct problems:

1. **White color**: `body` background `#0e0f14` lives only in the external
   CSS bundle, so the browser paints default white until both render-
   blocking stylesheets arrive.
2. **Blank duration**: HTML TTFB dominates, plus one extra RTT for the CSS
   chain, with no asset caching headers at all (only `last-modified`).

Budget adopted: FCP ≤ 1.5s on Lighthouse slow-4G, zero white frames —
first paint is dark or nothing.

## Decision

Three legs, one budget:

1. **Inline all CSS** — `build.inlineStylesheets: 'always'` in
   `astro.config.mjs`. Total CSS (~34KB raw / ~6KB br) is far below the
   threshold where a separate request pays for itself; first paint
   becomes HTML arrival. Rejects critical-CSS extraction (tooling +
   FOUC risk for a tiny stylesheet) and the one-line
   `html{background}` stopgap (leaves the extra RTT).
2. **Cloudflare (free) in front of the origin**, with a Cache Rule
   "Cache Everything" on `/aic/*` HTML, Edge TTL ~30min, **manual purge
   after deploy** (dashboard button — this site ships rarely; no purge
   API automation until it annoys us). `_astro/*` served
   `Cache-Control: immutable, max-age=1y` via `.htaccess` (filenames are
   content-hashed). Accepts up to 30min HTML staleness at the edge in
   exchange for ~50–200ms edge TTFB for Asian visitors vs ~3s origin.
   Mainland-China direct access remains hit-or-miss on the free tier
   (no China PoP without Enterprise + ICP) — accepted; audience skews
   HK/TW/JP/KO + global.
3. **Service worker navigations switch to stale-while-revalidate** —
   see the amendment on ADR-0005. Repeat visits paint from cache
   instantly instead of re-paying origin TTFB.

## Consequences

- **Pro:** First paint = HTML arrival, always dark; cold Asian visits
  hit the edge; repeat visits are instant.
- **Con:** HTML can be up to one edge-TTL (30min) or one page view (SWR)
  stale. Harmless for a marketing site: version numbers self-heal on the
  next view or purge.
- **Con:** Deploy propagation now has a purge step. Forget to purge →
  stale for ≤30min, never broken (hashed assets are immutable).
- **Con:** Cloudflare sits in the DNS path — a lock-in decision, made
  deliberately for the free global edge.

## Alternatives considered

- **Promote the GitHub Pages mirror to primary** — Fastly edge is fast,
  but `github.io` is intermittently blocked in mainland China and the
  domain/DNS story is a bigger change. Rejected; mirror stays a mirror.
- **No CDN** — inlining alone fixes the white color but leaves ~3s
  TTFB for the primary Asian audience. Rejected as leaving most of the
  win on the table.
- **Bypass HTML at the edge, cache only `_astro/*`** — zero staleness
  but HTML still pays origin TTFB per view. Rejected for the same reason.
