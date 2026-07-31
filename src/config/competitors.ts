/**
 * Editorial competitor comparisons (ADR-0006).
 *
 * These are hand-maintained **judgments**, not fetched facts — assessments
 * like "does aicommits auto-batch?", which no machine-readable source
 * exposes. See CONTEXT.md → "Editorial comparison". Distinct from the
 * fetched facts (ADR-0003) and the low-drift constants in `site.ts`.
 *
 * Every claim below was verified against the rival's current README before
 * publishing. Re-check when a rival ships a relevant feature.
 *
 * Sources verified 2026-07-29:
 *   aic       — https://github.com/CaicoLeung/aic (main README); provider count
 *               per ADR-0003 registry expansion (11 first-class + OpenAI-compatible
 *               escape hatch); `aic resolve` (v0.3.0) per the resolve capability page.
 *   aicommits — https://github.com/Nutlope/aicommits (v3.x README) — commit-message
 *               generation (+ `pr` descriptions) only; no merge-conflict resolution.
 */

import { GITHUB_URL } from '@/config/site';

/** Metadata for a rival tool. Reused by the roundup page (wave 2). */
export interface CompetitorMeta {
  /** URL-safe id, matches the `/vs/{id}` route. */
  readonly id: string;
  /** Display name. */
  readonly name: string;
  /** Source repository. */
  readonly repo: string;
  /** Runtime / install substrate, e.g. "Node.js v22+ · npm". */
  readonly runtime: string;
  /** Install command. */
  readonly install: string;
  /** Fair one-liner: where this rival genuinely wins (the concession). */
  readonly strength: string;
}

/** One side of a comparison row. `supported` drives the ✓/✗ glyph; the
 *  text is localized in `messages.vs.aicommits.axes[id]` (ADR-0010). */
export interface FeatureCell {
  readonly supported?: boolean;
}

/** A single row in the feature matrix: aic vs one rival. `id` keys the
 *  localized feature/aic/rival/note in `messages.vs.aicommits.axes` (ADR-0010). */
export interface ComparisonAxis {
  readonly id: string;
  readonly aic: FeatureCell;
  readonly rival: FeatureCell;
  /** Honest verdict — `rival` means the competitor wins this row. */
  readonly winner: 'aic' | 'rival' | 'tie';
}

/** A full comparison of aic against one named rival. */
export interface CompetitorComparison {
  readonly rival: CompetitorMeta;
  readonly axes: readonly ComparisonAxis[];
}

export const AICOMMITS: CompetitorMeta = {
  id: 'aicommits',
  name: 'aicommits',
  repo: 'https://github.com/Nutlope/aicommits',
  runtime: 'Node.js v22+ · npm',
  install: 'npm install -g aicommits',
  strength:
    'The entrenched default — huge install base, first-mover by @Nutlope, a `git commit` hook, and the largest community.',
};

/**
 * aic vs aicommits. Fair by design: aic wins on its sharp differentiators
 * (auto-batching, first-class Anthropic/Gemini/DeepSeek, no Node dep) and
 * concedes the rest. The `aic` alias note is not a jab — aicommits' own
 * README suggests aliasing to `aic`.
 */
export const AICOMMITS_COMPARISON: CompetitorComparison = {
  rival: AICOMMITS,
  axes: [
    {
      id: 'auto-batch',
      aic: { supported: true },
      rival: { supported: false },
      winner: 'aic',
    },
    {
      id: 'per-hunk',
      aic: { supported: true },
      rival: { supported: false },
      winner: 'aic',
    },
    {
      id: 'resolve',
      aic: { supported: true },
      rival: { supported: false },
      winner: 'aic',
    },
    {
      id: 'anthropic',
      aic: { supported: true },
      rival: { supported: false },
      winner: 'aic',
    },
    {
      id: 'runtime',
      aic: {},
      rival: {},
      winner: 'aic',
    },
    {
      id: 'reach',
      aic: {},
      rival: {},
      winner: 'aic',
    },
    {
      id: 'formats',
      aic: {},
      rival: {},
      winner: 'rival',
    },
    {
      id: 'hook',
      aic: { supported: false },
      rival: { supported: true },
      winner: 'rival',
    },
    {
      id: 'candidates',
      aic: { supported: false },
      rival: { supported: true },
      winner: 'rival',
    },
    {
      id: 'prompt',
      aic: {},
      rival: { supported: true },
      winner: 'rival',
    },
    {
      id: 'popularity',
      aic: {},
      rival: {},
      winner: 'rival',
    },
  ],
};

/** Lookup by rival id — used by the roundup page and future `/vs/[id]` route. */
export const COMPARISONS: Readonly<Record<string, CompetitorComparison>> = {
  [AICOMMITS.id]: AICOMMITS_COMPARISON,
};

/* ──────────────────────────────────────────────────────────────────
   Roundup — the "best AI commit tools" survey.
   One fair, verified one-liner per tool. aic is disclosed as home team.
   Sources verified 2026-07-29 (each tool's README; none resolve merge
   conflicts — commit messages / PR descriptions only). Re-check on ship.
   ────────────────────────────────────────────────────────────────── */
export interface RoundupEntry {
  readonly id: string;
  readonly name: string;
  readonly repo: string;
  readonly runtime: string;
  /** True for aic (disclosed). */
  readonly homeTeam?: boolean;
  /** Relative path to a dedicated /vs/{id} page, when one exists. */
  readonly vsPath?: string;
}

export const ROUNDUP: readonly RoundupEntry[] = [
  {
    id: 'aic',
    name: 'aic',
    repo: GITHUB_URL,
    runtime: 'Rust · brew / installer',
    homeTeam: true,
  },
  {
    id: 'aicommits',
    name: 'aicommits',
    repo: 'https://github.com/Nutlope/aicommits',
    runtime: 'Node.js · npm',
    vsPath: 'vs/aicommits/',
  },
  {
    id: 'ai-commit',
    name: 'ai-commit',
    repo: 'https://github.com/lifedever/ai-commit',
    runtime: 'Node.js · brew / npm',
  },
  {
    id: 'git-ai',
    name: 'git-ai',
    repo: 'https://github.com/DaleSeo/git-ai',
    runtime: 'Node.js · npm / npx',
  },
  {
    id: 'llmc',
    name: 'llmc',
    repo: 'https://github.com/marclove/llmc',
    runtime: 'Node.js · npx / npm',
  },
];
