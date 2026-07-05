/**
 * Build-time fact fetcher (ADR-0003).
 *
 * Astro frontmatter runs this at build time, so the served HTML is
 * static and the source repo is never hit at request time. Every fact
 * has a graceful fallback so a parse failure or network blip never
 * breaks the deploy.
 *
 * Drift window is closed by the nightly cron rebuild in
 * `.github/workflows/deploy.yml`.
 */

import {
  FALLBACK_PROVIDERS,
  FALLBACK_VERSION,
  GITHUB_RAW_BASE,
  type ProviderInfo,
} from '@/config/site';

export interface AicFacts {
  /** Semver version string, e.g. "0.1.6". No leading "v". */
  readonly version: string;
  /** Provider list, in source-repo declaration order. */
  readonly providers: readonly ProviderInfo[];
}

/** Fetch with hard timeout + graceful fallback. Build-time only. */
async function fetchSource(path: string): Promise<string | null> {
  try {
    const res = await fetch(`${GITHUB_RAW_BASE}/${path}`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

async function loadVersion(): Promise<string> {
  const toml = await fetchSource('Cargo.toml');
  if (!toml) return FALLBACK_VERSION;
  // First `version = "..."` after [package] is the crate version.
  const match = toml.match(/^version\s*=\s*"([^"]+)"/m);
  return match?.[1] ?? FALLBACK_VERSION;
}

/**
 * Parse the `Provider` enum from src/llm.rs.
 * Looks for `pub enum Provider { Variant1, Variant2, ... }` and returns
 * each variant humanized (`OpenAI` → display, `openai` → id).
 */
async function loadProviders(): Promise<readonly ProviderInfo[]> {
  const src = await fetchSource('src/llm.rs');
  if (!src) return FALLBACK_PROVIDERS;

  const enumMatch = src.match(/pub\s+enum\s+Provider\s*\{([^}]*)\}/);
  if (!enumMatch) return FALLBACK_PROVIDERS;

  // Variant identifiers start uppercase; ignore attributes / discriminants.
  const variants = Array.from(enumMatch[1].matchAll(/\b([A-Z][A-Za-z0-9_]*)\b/g)).map(
    (m) => m[1],
  );
  const unique = [...new Set(variants)];

  // Sanity: expect at least a handful of providers.
  if (unique.length < 3) return FALLBACK_PROVIDERS;

  return unique.map((variant) => ({
    id: variant.toLowerCase(),
    name: variant,
  }));
}

let cached: AicFacts | null = null;

export async function loadAicFacts(): Promise<AicFacts> {
  if (cached) return cached;

  const [version, providers] = await Promise.all([loadVersion(), loadProviders()]);
  cached = { version, providers };
  return cached;
}
