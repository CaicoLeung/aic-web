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

export const AI_COMMIT: CompetitorMeta = {
  id: 'ai-commit',
  name: 'ai-commit',
  repo: 'https://github.com/lifedever/ai-commit',
  runtime: 'Node.js ≥ 22.19 · Homebrew / curl',
  install: 'brew tap lifedever/tap && brew install ai-commit',
  strength:
    'The Claude-Code-native pick — reads your source files for richer context, writes Chinese or English messages on demand, and reaches any OpenAI-compatible endpoint.',
};

/**
 * aic vs ai-commit. Fair by design: aic wins where atomic history matters
 * (auto-batching, per-hunk splitting, resolve, no-Node, Windows) and
 * concedes ai-commit's real niches (Claude Code context, `-l zh`, emoji).
 * Both are young (~8★); neither offers multiple candidates.
 * Sources verified 2026-08-01 (READMEs + repo data; see competitor-profiles/).
 */
export const AI_COMMIT_COMPARISON: CompetitorComparison = {
  rival: AI_COMMIT,
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
      id: 'claude-context',
      aic: { supported: false },
      rival: { supported: true },
      winner: 'rival',
    },
    {
      id: 'provider-reach',
      aic: {},
      rival: {},
      winner: 'aic',
    },
    {
      id: 'runtime',
      aic: {},
      rival: {},
      winner: 'aic',
    },
    {
      id: 'windows',
      aic: { supported: true },
      rival: { supported: false },
      winner: 'aic',
    },
    {
      id: 'language',
      aic: {},
      rival: { supported: true },
      winner: 'rival',
    },
    {
      id: 'emoji',
      aic: { supported: false },
      rival: { supported: true },
      winner: 'rival',
    },
    {
      id: 'candidates',
      aic: {},
      rival: {},
      winner: 'tie',
    },
    {
      id: 'popularity',
      aic: {},
      rival: {},
      winner: 'tie',
    },
  ],
};

export const LLMC: CompetitorMeta = {
  id: 'llmc',
  name: 'llmc',
  repo: 'https://github.com/marclove/llmc',
  runtime: 'Node.js · npx / npm',
  install: 'npx llmc',
  strength:
    'The max-provider pick — 13 LLM backends, TOML custom prompts, and a polished terminal UI.',
};

/**
 * aic vs llmc. Fair by design: aic concedes provider count (12 vs 13),
 * TUI polish, and custom-prompt richness; wins on batching, resolve,
 * runtime, setup wizard, and project activity (llmc quiet since 2025-10).
 * Sources verified 2026-08-01 (READMEs + repo data; see competitor-profiles/).
 */
export const LLMC_COMPARISON: CompetitorComparison = {
  rival: LLMC,
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
      id: 'provider-count',
      aic: {},
      rival: {},
      winner: 'rival',
    },
    {
      id: 'tui',
      aic: {},
      rival: {},
      winner: 'rival',
    },
    {
      id: 'runtime',
      aic: {},
      rival: {},
      winner: 'aic',
    },
    {
      id: 'setup',
      aic: {},
      rival: {},
      winner: 'aic',
    },
    {
      id: 'custom-prompt',
      aic: {},
      rival: {},
      winner: 'rival',
    },
    {
      id: 'activity',
      aic: {},
      rival: {},
      winner: 'aic',
    },
    {
      id: 'candidates',
      aic: {},
      rival: {},
      winner: 'tie',
    },
    {
      id: 'formats',
      aic: {},
      rival: {},
      winner: 'tie',
    },
  ],
};

export const GIT_AI: CompetitorMeta = {
  id: 'git-ai',
  name: 'git-ai',
  repo: 'https://github.com/DaleSeo/git-ai',
  runtime: 'Node.js ≥ 22 · npm / npx',
  install: 'npm install -g @daleseo/git-ai',
  strength:
    'The local-first Git assistant — commit messages, PR descriptions, and zero-config Ollama (free, offline) by default. Early and quiet since early 2026, but the PR-description angle is real.',
};

/**
 * aic vs git-ai. Fair by design: aic concedes git-ai's PR-description
 * workflow, local-first default, and gitmoji format option; wins on
 * batching, resolve, providers, setup, and activity (git-ai dormant
 * since 2026-02). Sources verified 2026-08-01 (README + repo data;
 * see competitor-profiles/).
 */
export const GIT_AI_COMPARISON: CompetitorComparison = {
  rival: GIT_AI,
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
      id: 'pr-description',
      aic: { supported: false },
      rival: { supported: true },
      winner: 'rival',
    },
    {
      id: 'local-default',
      aic: {},
      rival: {},
      winner: 'rival',
    },
    {
      id: 'runtime',
      aic: {},
      rival: {},
      winner: 'aic',
    },
    {
      id: 'setup',
      aic: {},
      rival: {},
      winner: 'aic',
    },
    {
      id: 'providers',
      aic: {},
      rival: {},
      winner: 'aic',
    },
    {
      id: 'activity',
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
      id: 'candidates',
      aic: {},
      rival: {},
      winner: 'tie',
    },
  ],
};

export const OPENCOMMIT: CompetitorMeta = {
  id: 'opencommit',
  name: 'OpenCommit',
  repo: 'https://github.com/di-sukharev/opencommit',
  runtime: 'Node.js · npm',
  install: 'npm install -g opencommit',
  strength:
    'The GitHub 2023 hackathon winner and most feature-rich GPT wrapper for git — GitMoji, configurable descriptions, local Ollama/llama.cpp, and a large community (7.5k★, ~12k npm downloads/mo).',
};

/**
 * aic vs OpenCommit. Fair by design: aic concedes GitMoji and community;
 * wins on hunk-level batching, conflict resolution, no-Node runtime, and
 * the setup wizard. Both are active and multi-provider.
 * Sources verified 2026-08-01 (README + repo data; see competitor-profiles/).
 */
export const OPENCOMMIT_COMPARISON: CompetitorComparison = {
  rival: OPENCOMMIT,
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
      id: 'runtime',
      aic: {},
      rival: {},
      winner: 'aic',
    },
    {
      id: 'setup',
      aic: {},
      rival: {},
      winner: 'aic',
    },
    {
      id: 'provider-count',
      aic: {},
      rival: {},
      winner: 'tie',
    },
    {
      id: 'emoji',
      aic: { supported: false },
      rival: { supported: true },
      winner: 'rival',
    },
    {
      id: 'community',
      aic: {},
      rival: {},
      winner: 'rival',
    },
    {
      id: 'activity',
      aic: {},
      rival: {},
      winner: 'tie',
    },
    {
      id: 'candidates',
      aic: {},
      rival: {},
      winner: 'tie',
    },
  ],
};

/**
 * Lookup by rival id. The single source of truth for which competitors have
 * a comparison: the `/vs/[id]` route, the `/alternatives/[id]` route, and
 * the "More comparisons" link list all enumerate this, so adding a rival is
 * a one-place data change (plus its i18n blocks) rather than a route sweep.
 */
export const COMPARISONS: Readonly<Record<string, CompetitorComparison>> = {
  [AICOMMITS.id]: AICOMMITS_COMPARISON,
  [AI_COMMIT.id]: AI_COMMIT_COMPARISON,
  [GIT_AI.id]: GIT_AI_COMPARISON,
  [OPENCOMMIT.id]: OPENCOMMIT_COMPARISON,
  [LLMC.id]: LLMC_COMPARISON,
};

/**
 * Rival ids that own a dedicated `/vs/{id}` page, in display order. Drives
 * the "More comparisons" cross-links. Kept as an explicit order (not
 * `Object.keys(COMPARISONS)`) so the link list reads in a curated sequence
 * independent of storage order.
 */
export const COMPARISON_RIVALS: readonly string[] = [
  AICOMMITS.id,
  AI_COMMIT.id,
  LLMC.id,
  GIT_AI.id,
  OPENCOMMIT.id,
];

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
  /**
   * Terse runtime label for the roundup card — a compact rendering of
   * `CompetitorMeta.runtime` (which keeps the detailed version for the
   * vs page). Roundup-specific by design, so it stays here rather than on
   * the comparison rival.
   */
  readonly runtime: string;
  /** True for aic (disclosed). */
  readonly homeTeam?: boolean;
  /** Relative path to a dedicated /vs/{id} page, when one exists. */
  readonly vsPath?: string;
}

/**
 * Roundup overrides. Identity (`name`/`repo`) is sourced from
 * `COMPARISONS[id].rival` so it cannot drift from the vs page; only the
 * terse `runtime` and `homeTeam` flag are roundup-specific. The home team
 * (aic) has no comparison entry, so it is identified by `homeTeam`.
 */
interface RoundupOverride {
  readonly id: string;
  readonly runtime: string;
  readonly homeTeam?: boolean;
}

const ROUNDUP_OVERRIDES: readonly RoundupOverride[] = [
  { id: 'aic', runtime: 'Rust · brew / installer', homeTeam: true },
  { id: 'aicommits', runtime: 'Node.js · npm' },
  { id: 'opencommit', runtime: 'Node.js · npm' },
  { id: 'ai-commit', runtime: 'Node.js · brew / npm' },
  { id: 'git-ai', runtime: 'Node.js · npm / npx' },
  { id: 'llmc', runtime: 'Node.js · npx / npm' },
];

function buildRoundupEntry(o: RoundupOverride): RoundupEntry {
  if (o.homeTeam) {
    return {
      id: o.id,
      name: o.id,
      repo: GITHUB_URL,
      runtime: o.runtime,
      homeTeam: true,
    };
  }
  const rival = COMPARISONS[o.id].rival;
  return {
    id: rival.id,
    name: rival.name,
    repo: rival.repo,
    runtime: o.runtime,
    vsPath: `vs/${rival.id}/`,
  };
}

export const ROUNDUP: readonly RoundupEntry[] = ROUNDUP_OVERRIDES.map(buildRoundupEntry);
