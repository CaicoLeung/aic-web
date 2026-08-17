/**
 * Build-time fetch primitive (ADR-0003).
 *
 * Every build-time fact fetch funnels through here: a hard timeout, and
 * `null` on any failure (non-ok status, network error, abort) so each
 * caller degrades to its own `FALLBACK_*` constant. Returns the live
 * `Response` (not pre-buffered text) so callers can read `.text()`,
 * `.json()`, or `.headers` as needed. Build-time only — never runs at
 * request time.
 */
import { FETCH_TIMEOUT_MS } from '@/config/site';

export async function fetchBuildTime(
  url: string,
  init?: RequestInit,
): Promise<Response | null> {
  try {
    const headers = new Headers(init?.headers);
    // Actions runners share egress IPs, so anonymous raw/API fetches get
    // rate-limited (429 / anonymous 60 req/hr). The built-in GITHUB_TOKEN
    // (any workflow, permissions: contents: read) fixes both — no secret.
    if (process.env.GITHUB_TOKEN) {
      headers.set('Authorization', `Bearer ${process.env.GITHUB_TOKEN}`);
    }
    const res = await fetch(url, {
      ...init,
      headers,
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    return res.ok ? res : null;
  } catch {
    return null;
  }
}
