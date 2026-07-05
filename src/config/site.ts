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
export const FALLBACK_VERSION = '0.1.6';

export interface ProviderInfo {
  /** Lowercase id as used in config/env (`openai`, `anthropic`, …). */
  readonly id: string;
  /** Human-facing display name (`OpenAI`, `Anthropic`, …). */
  readonly name: string;
}

/**
 * Fallback provider list. Order is presentation order — matches the
 * intro.png footer (`OpenAI · Anthropic · Gemini · DeepSeek · Groq · Ollama`).
 */
export const FALLBACK_PROVIDERS: readonly ProviderInfo[] = [
  { id: 'openai', name: 'OpenAI' },
  { id: 'anthropic', name: 'Anthropic' },
  { id: 'gemini', name: 'Gemini' },
  { id: 'deepseek', name: 'DeepSeek' },
  { id: 'groq', name: 'Groq' },
  { id: 'ollama', name: 'Ollama' },
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
