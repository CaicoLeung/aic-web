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

export const GITHUB_OWNER = 'CaicoLeung';
export const GITHUB_REPO = 'aic';
export const GITHUB_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;
export const GITHUB_RAW_BASE = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main`;

/** Visible across the site; overwritten by loadAicFacts() when reachable. */
export const FALLBACK_VERSION = '0.1.7';

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
  { id: 'deepseek', name: 'DeepSeek', defaultModel: 'deepseek-chat' },
  { id: 'groq', name: 'Groq', defaultModel: 'llama-3.3-70b-versatile' },
  { id: 'ollama', name: 'Ollama', defaultModel: 'llama3.3' },
  { id: 'xai', name: 'xAI', defaultModel: 'grok-4.3' },
  { id: 'mistral', name: 'Mistral', defaultModel: 'mistral-small-latest' },
  // OpenRouter routes to many vendors — there is no single default model.
  { id: 'openrouter', name: 'OpenRouter' },
  { id: 'perplexity', name: 'Perplexity', defaultModel: 'sonar' },
  { id: 'together', name: 'Together', defaultModel: 'meta-llama/Llama-3.3-70B-Instruct-Turbo' },
  // OpenAI-compatible escape hatch — the user supplies base_url + model.
  { id: 'openai-compatible', name: 'OpenAI-compatible' },
] as const;

export interface InstallMethod {
  readonly id: string;
  readonly label: string;
  readonly command: string;
  readonly note?: string;
}

/**
 * Install methods. Sourced from the aic README — stable across releases.
 * Homebrew is the primary hero CTA (Q10); the rest live in the install
 * section's tabbed view.
 */
export const INSTALL_METHODS: readonly InstallMethod[] = [
  {
    id: 'brew',
    label: 'Homebrew',
    command: 'brew tap CaicoLeung/aic && brew install aic',
    note: 'Update with `brew upgrade aic`. Homebrew installs are detected automatically, so `aic update` will redirect you to brew.',
  },
  {
    id: 'unix',
    label: 'Installer · macOS / Linux',
    command:
      "curl --proto '=https' --tlsv1.2 -sSfL https://github.com/CaicoLeung/aic/releases/latest/download/aic-installer.sh | sh",
    note: 'Downloads the latest release binary from GitHub Releases.',
  },
  {
    id: 'windows',
    label: 'Installer · Windows',
    command:
      'irm https://github.com/CaicoLeung/aic/releases/latest/download/aic-installer.ps1 | iex',
    note: 'PowerShell. Downloads the latest release binary.',
  },
] as const;

/** The single primary CTA command used in the hero (Q10). */
export const PRIMARY_INSTALL_COMMAND = 'brew tap CaicoLeung/aic && brew install aic';

/** Step labels for the "How it works" flow — sourced from aic-sketch.png. */
export interface HowItWorksStep {
  readonly n: string;
  readonly label: string;
  readonly detail: string;
}

export const HOW_IT_WORKS_STEPS: readonly HowItWorksStep[] = [
  { n: '01', label: 'install', detail: 'brew install aic' },
  { n: '02', label: 'setup', detail: 'provider · key · model' },
  { n: '03', label: 'run', detail: 'type:  aic' },
  { n: '04', label: 'read', detail: 'reads the diff' },
  { n: '05', label: 'draft', detail: 'writes the message' },
  { n: '06', label: 'commit', detail: 'ships it  ✓' },
] as const;

/** Commands table rows for the hero — from intro.png. */
export interface CommandRow {
  readonly command: string;
  readonly args?: string;
  readonly description: string;
}

export const COMMANDS: readonly CommandRow[] = [
  {
    command: 'aic',
    description: 'commit staged work · or batch-plan unstaged',
  },
  {
    command: 'aic',
    args: 'setup',
    description: 'one-time wizard — provider → key → model',
  },
  {
    command: 'aic',
    args: 'list',
    description: 'show resolved config + masked API key',
  },
] as const;
