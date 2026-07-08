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
