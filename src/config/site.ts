/**
 * Site-wide constants for aic-web.
 *
 * These are the **fallback** values used when build-time fetch from the
 * source repo (see `src/data/aic.ts`) fails or is unreachable. They are
 * also the canonical source for the install methods (which change rarely
 * and are stable across releases) and the GitHub coordinates.
 *
 * Per ADR-0003: high-drift facts (version, providers) are fetched at
 * build time; low-drift facts (install methods, GitHub URL) live here.
 */

/** Deployed origin (matches `site` in astro.config). Used as the `Astro.site`
 *  fallback in content pages when building canonical/schema URLs.
 *  Env-driven for dual-target builds (primary cPanel / mirror Pages). */
export const SITE_ORIGIN = process.env.SITE_ORIGIN ?? 'https://www.lookupapp.net';

export const GITHUB_OWNER = 'CaicoLeung';
export const GITHUB_REPO = 'aic';
export const GITHUB_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;
export const GITHUB_RAW_BASE = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main`;

/** Build-time HTTP fetch timeout (ADR-0003). Window before degrading to `FALLBACK_*`. */
export const FETCH_TIMEOUT_MS = 8000;

/** Visible across the site; overwritten by loadAicFacts() when reachable. */
export const FALLBACK_VERSION = '0.3.0';

/** GitHub API base for repo facts (stars). Fallback shown when unreachable (ADR-0003). */
export const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`;

/** Stars as of 2026-08-01 — used by the hero trust line until the live fetch lands. */
export const FALLBACK_STARS = 8;

export interface ProviderInfo {
  /** Lowercase id as used in config/env (`openai`, `anthropic`, …). */
  readonly id: string;
  /** Human-facing display name (`OpenAI`, `Anthropic`, …). */
  readonly name: string;
  /**
   * Default model id used when the user sets none. Omitted for providers
   * that have no default (OpenRouter, OpenAI-compatible).
   */
  readonly defaultModel?: string;
}

/**
 * Brand-casing overrides the live-fetch parser cannot derive from an enum
 * variant name (`xAI`, `OpenAI-compatible`). Lookup is by provider id; an
 * absent id falls back to the raw variant string.
 */
export const PROVIDER_DISPLAY_NAMES: Readonly<Record<string, string>> = {
  xai: 'xAI',
  // Live-fetch derives the id from the enum variant `OpenAiCompatible`
  // (Rust idents can't hold a hyphen), so override that derived id. The
  // FALLBACK_PROVIDERS entry below already carries the correct display name.
  openaicompatible: 'OpenAI-compatible',
};

/**
 * Fallback provider list (presentation order). Reflects the upcoming aic
 * expansion to 12 providers plus a refreshed default-model table. Used only
 * when the build-time fetch from the source repo fails (ADR-0003).
 */
export const FALLBACK_PROVIDERS: readonly ProviderInfo[] = [
  { id: 'openai', name: 'OpenAI', defaultModel: 'gpt-5-mini' },
  { id: 'anthropic', name: 'Anthropic', defaultModel: 'claude-haiku-4-5' },
  { id: 'gemini', name: 'Gemini', defaultModel: 'gemini-2.5-flash' },
  { id: 'deepseek', name: 'DeepSeek', defaultModel: 'deepseek-v4-flash' },
  { id: 'groq', name: 'Groq', defaultModel: 'llama-3.3-70b-versatile' },
  { id: 'ollama', name: 'Ollama', defaultModel: 'llama3.3' },
  { id: 'xai', name: 'xAI', defaultModel: 'grok-4.3' },
  { id: 'mistral', name: 'Mistral', defaultModel: 'mistral-small-latest' },
  // OpenRouter routes to many vendors — there is no single default model.
  { id: 'openrouter', name: 'OpenRouter' },
  { id: 'perplexity', name: 'Perplexity', defaultModel: 'sonar' },
  {
    id: 'together',
    name: 'Together',
    defaultModel: 'meta-llama/Llama-3.3-70B-Instruct-Turbo',
  },
  // OpenAI-compatible escape hatch — the user supplies base_url + model.
  { id: 'openai-compatible', name: 'OpenAI-compatible' },
] as const;

export interface InstallMethod {
  readonly id: 'brew' | 'unix' | 'windows';
  readonly command: string;
}

/**
 * Install methods (ADR-0010). `command` is literal (locale-invariant). The
 * tab `label` and `note` are localized in `messages.install.methods`, keyed
 * by `id`. Sourced from the aic README — stable across releases. Homebrew is
 * the primary hero CTA; the rest live in the install section's tabbed view.
 */
export const INSTALL_METHODS: readonly InstallMethod[] = [
  {
    id: 'brew',
    command: 'brew install CaicoLeung/aic/aic',
  },
  {
    id: 'unix',
    command:
      "curl --proto '=https' --tlsv1.2 -sSfL https://github.com/CaicoLeung/aic/releases/latest/download/aic-installer.sh | sh",
  },
  {
    id: 'windows',
    command:
      'irm https://github.com/CaicoLeung/aic/releases/latest/download/aic-installer.ps1 | iex',
  },
] as const;

/** The single primary CTA command used in the hero (Q10). */
export const PRIMARY_INSTALL_COMMAND = 'brew install CaicoLeung/aic/aic';

/**
 * Ordered step ids for the "How it works" flow (ADR-0010). The visible
 * label/detail are localized — they live in `messages.how.steps`, keyed by
 * these ids. Structure (order + the highlight on `03`) stays here.
 */
export const HOW_IT_WORKS_STEPS = ['01', '02', '03', '04', '05', '06'] as const;

/**
 * Commands table rows for the hero (ADR-0010). `command`/`args` are literal
 * (locale-invariant); the human-facing `description` is localized in
 * `messages.commands`, keyed by `id`.
 */
export interface CommandRow {
  readonly id: 'aic' | 'aic-setup' | 'aic-list';
  readonly command: string;
  readonly args?: string;
}

export const COMMANDS: readonly CommandRow[] = [
  { id: 'aic', command: 'aic' },
  { id: 'aic-setup', command: 'aic', args: 'setup' },
  { id: 'aic-list', command: 'aic', args: 'list' },
] as const;

/**
 * Per-hunk batch splitting — the differentiator behind the #03 Auto-batching
 * section. Shipped in v0.3.5 (#12, per-hunk split + live reasoning view) and
 * v0.3.6 (#13, streaming multi-batch).
 *
 * Editorial / low-drift: this is illustrative copy for the decomposition
 * visual + reasoning strip, NOT a build-time fetch (ADR-0003 fetches current
 * version + providers; feature-intro versions are historical and immutable).
 * `shippedIn` doubles as the changelog anchor (`#0.3.5`).
 */
export type HunkCommitType = 'feat' | 'fix' | 'refactor';

/**
 * Accent token per commit intent — varied hues make the three intents
 * visually distinct in both the #03 decomposition and the hero terminal.
 * Single source of truth shared by `HunkTraceLine` and the commit chips.
 * Kept complete over `HunkCommitType`, so lookups never need a fallback.
 */
export const HUNK_TYPE_ACCENT: Readonly<Record<HunkCommitType, string>> = {
  feat: 'var(--color-amber)',
  fix: 'var(--color-mint)',
  refactor: 'var(--color-amber-warm)',
};

export interface HunkCommit {
  /** Short hash shown in the commit pill. */
  readonly hash: string;
  readonly type: HunkCommitType;
  readonly scope: string;
  readonly summary: string;
}

export interface HunkTrace {
  /** Source line where the hunk starts — rendered as a `@@N` unified-diff header. */
  readonly at: number;
  readonly type: HunkCommitType;
  readonly summary: string;
}

export interface HunkSplitting {
  /** Semver (no leading "v") when per-hunk splitting shipped — doubles as changelog anchor. */
  readonly shippedIn: string;
  /** The single source file the commits are decomposed from. */
  readonly file: string;
  readonly commits: readonly HunkCommit[];
  readonly hunks: readonly HunkTrace[];
}

export const HUNK_SPLITTING: HunkSplitting = {
  shippedIn: '0.3.5',
  file: 'src/auth.rs',
  commits: [
    { hash: 'abc1234', type: 'feat', scope: 'auth', summary: 'refresh tokens' },
    { hash: 'def5678', type: 'fix', scope: 'auth', summary: 'redirect on expiry' },
    { hash: 'ghi9012', type: 'refactor', scope: 'auth', summary: 'extract token store' },
  ],
  hunks: [
    { at: 42, type: 'feat', summary: 'refresh tokens' },
    { at: 87, type: 'fix', summary: 'redirect on expiry' },
    { at: 134, type: 'refactor', summary: 'extract token store' },
  ],
} as const;

/**
 * v0.5.0 CLI-agent backend presets (#118). `BackendKind::Cli` — aic delegates
 * to a local coding-agent CLI in headless/print mode, reusing that agent's
 * own auth. No API key, no default model. Listed in source-repo preset order
 * (`["claude", "codex", "pi", "opencode"]`). See ADR-0015.
 */
export interface AgentPreset {
  readonly id: string;
  readonly displayName: string;
  /** `stream` = reasoning arrives live (thinking_delta); `batch` = silent until done. */
  readonly reasoning: 'stream' | 'batch';
}

export const AGENT_PRESETS: readonly AgentPreset[] = [
  { id: 'claude', displayName: 'Claude Code', reasoning: 'stream' },
  { id: 'codex', displayName: 'Codex', reasoning: 'batch' },
  { id: 'pi', displayName: 'Pi', reasoning: 'stream' },
  { id: 'opencode', displayName: 'OpenCode', reasoning: 'batch' },
] as const;

/**
 * v0.5.0 WCAG-safe commit-type palette (#116). Each of the 17 Conventional
 * Commit types gets a distinct, readable color in CLI terminal output — all
 * clearing WCAG AA Large (3:1) on light and dark backgrounds. The swatch
 * strip in batching section (#03) mirrors these exact hues. Source: aic
 * `types.rs` `NAMED_PALETTE`. See ADR-0016.
 */
export interface CommitTypeColor {
  readonly type: string;
  /** WCAG-safe hex for light & dark terminals. */
  readonly color: string;
}

export const COMMIT_TYPE_PALETTE: readonly CommitTypeColor[] = [
  { type: 'feat', color: '#15803d' },
  { type: 'improvement', color: '#059669' },
  { type: 'fix', color: '#ea580c' },
  { type: 'perf', color: '#dc2626' },
  { type: 'hotfix', color: '#e11d48' },
  { type: 'revert', color: '#c026d3' },
  { type: 'docs', color: '#2563eb' },
  { type: 'deps', color: '#0284c7' },
  { type: 'style', color: '#7c3aed' },
  { type: 'ci', color: '#6366f1' },
  { type: 'refactor', color: '#0891b2' },
  { type: 'chore', color: '#0f766e' },
  { type: 'build', color: '#a16207' },
  { type: 'release', color: '#4d7c0f' },
  { type: 'security', color: '#b45309' },
  { type: 'test', color: '#db2777' },
  { type: 'wip', color: '#64748b' },
] as const;
