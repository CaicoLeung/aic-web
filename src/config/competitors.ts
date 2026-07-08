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
 * Sources verified 2026-07-08:
 *   aic       — https://github.com/CaicoLeung/aic (main README)
 *   aicommits — https://github.com/Nutlope/aicommits (v3.x README)
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

/** One side of a comparison row. */
export interface FeatureCell {
  /** Short display text, e.g. "Yes", "6 first-class", "Node.js v22+". */
  readonly text: string;
  /** Renders a ✓ when true, ✗ when false, plain text when undefined. */
  readonly supported?: boolean;
}

/** A single row in the feature matrix: aic vs one rival. */
export interface ComparisonAxis {
  /** Row label, e.g. "Auto-batch unstaged work". */
  readonly feature: string;
  readonly aic: FeatureCell;
  readonly rival: FeatureCell;
  /** Honest verdict — `rival` means the competitor wins this row. */
  readonly winner: 'aic' | 'rival' | 'tie';
  /** Editorial justification / nuance. */
  readonly note: string;
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
    'The entrenched default — huge install base, first-mover by @Nutlope, and the broadest provider reach via OpenRouter.',
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
      feature: 'Auto-batch unstaged work into multiple commits',
      aic: { text: 'Yes — splits unstaged changes into logical atomic commits', supported: true },
      rival: { text: 'No — one message per staged diff', supported: false },
      winner: 'aic',
      note: 'aic’s signature feature. aicommits’ `--generate N` produces N candidate messages for ONE commit, not N commits.',
    },
    {
      feature: 'First-class Anthropic · Gemini · DeepSeek',
      aic: { text: 'Yes — native providers', supported: true },
      rival: { text: 'Only via OpenRouter / custom endpoint', supported: false },
      winner: 'aic',
      note: 'aicommits reaches them indirectly; aic ships them as first-class with sensible default models.',
    },
    {
      feature: 'Runtime & dependencies',
      aic: { text: 'Rust binary — no Node.js' },
      rival: { text: 'Node.js v22+ — npm' },
      winner: 'tie',
      note: 'aic needs nothing but the binary; aicommits is natural if you already live in a JS toolchain.',
    },
    {
      feature: 'Provider reach',
      aic: { text: '6 first-class providers' },
      rival: { text: '8 + OpenRouter/custom (any model)' },
      winner: 'rival',
      note: 'aicommits covers xAI, TogetherAI, LM Studio and any OpenAI-compatible endpoint out of the box.',
    },
    {
      feature: 'Commit message formats',
      aic: { text: 'Conventional Commits' },
      rival: { text: 'plain · conventional · gitmoji' },
      winner: 'rival',
      note: 'aic is conventional-only by design; aicommits lets you pick, including a plain unstructured mode.',
    },
    {
      feature: 'Git hook integration',
      aic: { text: 'No', supported: false },
      rival: { text: 'Yes — prepare-commit-msg hook', supported: true },
      winner: 'rival',
      note: 'aicommits wires into your normal `git commit` flow via a hook; aic is run explicitly.',
    },
    {
      feature: 'Multiple message candidates',
      aic: { text: 'No', supported: false },
      rival: { text: 'Yes — `--generate N`', supported: true },
      winner: 'rival',
      note: 'aicommits can offer several messages to pick from before committing.',
    },
    {
      feature: 'Prompt & locale control',
      aic: { text: 'System prompt via env' },
      rival: { text: '`--prompt`, locale, max-length', supported: true },
      winner: 'rival',
      note: 'aicommits exposes richer knobs. aic supports an `AIC_SYSTEM_PROMPT` override but fewer surface options.',
    },
    {
      feature: 'Popularity & ecosystem',
      aic: { text: 'New, small' },
      rival: { text: 'Entrenched first-mover' },
      winner: 'rival',
      note: 'aicommits is the known quantity with the larger community. If momentum matters most, stay with it.',
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
   Sources verified 2026-07-08 (each tool's README). Re-check on ship.
   ────────────────────────────────────────────────────────────────── */
export interface RoundupEntry {
  readonly id: string;
  readonly name: string;
  readonly repo: string;
  readonly runtime: string;
  /** Fair, verified one-liner — the tool's genuine distinct strength. */
  readonly strength: string;
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
    strength:
      'The only tool here that auto-batches unstaged work into separate logical commits — and ships as a dependency-free Rust binary with first-class Anthropic, Gemini, and DeepSeek.',
  },
  {
    id: 'aicommits',
    name: 'aicommits',
    repo: 'https://github.com/Nutlope/aicommits',
    runtime: 'Node.js · npm',
    vsPath: 'vs/aicommits/',
    strength:
      'The entrenched default — broadest reach via OpenRouter, a prepare-commit-msg hook, gitmoji support, and the largest community.',
  },
  {
    id: 'ai-commit',
    name: 'ai-commit',
    repo: 'https://github.com/lifedever/ai-commit',
    runtime: 'Node.js · brew / npm',
    strength:
      'Stands out with a Claude Code provider that reads your source files for richer context — a natural fit if you already use Claude Code.',
  },
  {
    id: 'git-ai',
    name: 'git-ai',
    repo: 'https://github.com/DaleSeo/git-ai',
    runtime: 'Node.js · npm / npx',
    strength:
      'Defaults to local Ollama (free, offline) and also drafts PR descriptions, not just commit messages.',
  },
  {
    id: 'llmc',
    name: 'llmc',
    repo: 'https://github.com/marclove/llmc',
    runtime: 'Node.js · npx / npm',
    strength:
      'The broadest provider list (13) with a polished terminal UI, TOML config, custom prompts, and auto-commit.',
  },
];
