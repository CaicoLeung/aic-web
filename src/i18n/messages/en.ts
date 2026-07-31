/**
 * Canonical English message module (CONTEXT.md → Canonical locale (EN)).
 *
 * This is the single source of narrative truth. Every other locale module
 * `satisfies Messages` (the shape derived from this file) so key parity is
 * enforced at compile time (ADR-0010 / Q6=A). Strings are added here first;
 * a missing key anywhere is a type error, never a silent runtime miss.
 *
 * Conventions:
 *  - `{param}` placeholders are substituted by `t()` (see `src/i18n/t.ts`).
 *  - Literal commands, brand names, version strings, and fetched facts are
 *    NOT messages — they are code-register / data and stay in components.
 *  - The Terminal mockup + the Batching decomposition pills/traces
 *    (`HUNK_SPLITTING`) are locale-invariant English (ADR-0010 Q4=B):
 *    illustrative fake git output, not narrative prose.
 *  - Rich text: a message MAY contain light inline HTML (`<b>`, `<em>`,
 *    `<code>`, `<span>`); render such messages via `set:html`. Dynamic
 *    commands use `{param}` inside the HTML the message already contains.
 *    Dynamic-`href` links split the message at the link boundary
 *    (before / link text / after) since the URL can't live in a message.
 *    This keeps full sentence context for translators; translations are
 *    first-party + human-reviewed (CONTEXT.md → Localized copy), so the
 *    light HTML is safe.
 */

export const messages = {
  meta: {
    title: 'aic — AI-powered git commits',
    description:
      'aic reads your diff, drafts a conventional commit, and commits it — one command. Nothing staged? It groups your work into logical commits for you.',
    /** Per-page titles/descriptions — ADR-0010: translate <title>, meta, JSON-LD. */
    resolve: {
      title: 'aic resolve — AI merge conflict resolver',
      description:
        'aic reads every conflicted file, proposes a clean resolution, and shows you the diff. Approve each file — nothing lands without your say-so — then it finalizes the merge. An AI merge conflict resolver that never touches your work blind.',
    },
    roundup: {
      /** `{year}` substituted at render. */
      title: 'Best AI commit message tools in {year}',
      description:
        'An honest roundup of AI-powered git commit tools — aic, aicommits, ai-commit, git-ai, and llmc — with a fair, feature-verified take on when to pick each one.',
    },
    vs: {
      title: 'aic vs aicommits — AI commit tool comparison',
      description:
        'aicommits is the established default. aic is the pick if you want auto-batching, first-class Anthropic/Gemini/DeepSeek, and no Node.js dependency. An honest, feature-by-feature comparison.',
    },
    changelog: {
      title: 'aic changelog — every release',
      /** `{version}` substituted at render. */
      description:
        'Every aic release in order — features, fixes, and notes as they shipped. Latest: v{version}.',
    },
  },

  topbar: {
    brandTag: 'AI-powered git commits',
    /** `{version}` substituted at render. */
    versionTitle: 'Latest release: v{version} — view changelog',
    github: 'GitHub',
    nav: {
      how: 'how',
      batching: 'batching',
      providers: 'providers',
      install: 'install',
    },
    switcher: {
      label: 'Language',
    },
  },

  contentHeader: {
    /** `{version}` substituted at render. */
    versionTitle: 'Latest release: v{version} — view changelog',
    home: 'home',
    changelog: 'changelog',
    github: 'GitHub',
  },

  copyButton: {
    /** `{label}` is the literal command/identifier being copied. */
    copyAria: 'Copy {label}',
    copiedAria: 'Copied {label}',
    copied: 'Copied ✓',
  },

  hero: {
    eyebrow: '01 — Introduction',
    h1: {
      stopWriting: 'Stop writing',
      commit: 'commit',
      messages: 'messages.',
      stopUntangling: 'Stop untangling',
      merge: 'merge',
      conflicts: 'conflicts.',
    },
    // Contains <b>; render via set:html. Split at the resolve link (dynamic href).
    ledeBefore:
      '<b>aic</b> reads your diff, drafts a conventional commit, and commits it — one command. Mid-merge? It ',
    ledeLink: 'resolves your conflicts',
    ledeAfter:
      ' file-by-file, with a diff to approve before anything lands. Nothing staged? It splits your work into logical commits — even within a single file.',
    // Contains <code>; render via set:html. `{cmd}` is the literal command.
    ctaHint: 'then run <code>{cmd}</code>',
  },

  how: {
    eyebrow: '02 — How it works',
    // Contains <code>; render via set:html. `{cmd}` is the literal command.
    h2: 'install once → type <code>{cmd}</code> → clean commit.',
    // Step content keyed by id (`HOW_IT_WORKS_STEPS`). Details that are literal
    // commands (brew install aic, provider · key · model, type: aic) stay as
    // their EN string in every locale — correct, since commands don't
    // translate. Prose details (reads the diff, …) translate normally.
    steps: {
      '01': { label: 'install', detail: 'brew install aic' },
      '02': { label: 'setup', detail: 'provider · key · model' },
      '03': { label: 'run', detail: 'type:  aic' },
      '04': { label: 'read', detail: 'reads the diff' },
      '05': { label: 'draft', detail: 'writes the message' },
      '06': { label: 'commit', detail: 'ships it  ✓' },
    },
  },

  commands: {
    aic: { description: 'commit staged work · or batch-plan unstaged' },
    'aic-setup': { description: 'one-time wizard — provider → key → model' },
    'aic-list': { description: 'show resolved config + masked API key' },
  },

  batching: {
    eyebrow: '03 — Auto-batching',
    kicker: 'nothing staged?',
    h2: 'one file, many commits',
    lede: 'aic reads your diff at the hunk level — so a single file can become several focused commits, each one idea. Nothing staged, one command, a clean history.',
    aside: 'per-hunk batching ✦',
    stripLabel: 'reasoning · per hunk',
    /** `{version}` is the shipped-in semver (HUNK_SPLITTING.shippedIn). */
    shipBadge: 'shipped in v{version}',
    cmpLink: 'see aic among the best AI commit tools →',
  },

  providers: {
    eyebrow: '04 — Providers & privacy',
    h2: 'your key · your model',
    lede: 'Bring your own provider. aic talks straight to your LLM — no middleman, no per-commit markup, no proxy. Your API key never leaves your machine.',
    aside: 'no middleman · no per-commit markup · calls go straight from your machine',
    link: 'read the provider code →',
    yourModel: '(your model)',
  },

  install: {
    eyebrow: '05 — Install',
    h2: 'install aic in one line.',
    // Contains <code>; render via set:html. `{cmd}` is the literal command.
    postinstall:
      '<span class="arrow" aria-hidden="true">→</span> then run <code>{cmd}</code> to pick provider, key, and model.',
    // Tab label + note keyed by install-method id. Notes contain literal
    // backtick commands; rendered as plain text (pre-existing behavior).
    methods: {
      brew: {
        label: 'Homebrew',
        note: 'Update with `brew upgrade aic`. Homebrew installs are detected automatically, so `aic update` will redirect you to brew.',
      },
      unix: {
        label: 'Installer · macOS / Linux',
        note: 'Downloads the latest release binary from GitHub Releases.',
      },
      windows: {
        label: 'Installer · Windows',
        note: 'PowerShell. Downloads the latest release binary.',
      },
    },
  },

  footer: {
    eyebrow: 'ship cleaner commits today',
    h2: 'stop writing commit messages.',
    star: '★ Star on GitHub',
    nav: {
      resolve: 'resolve merge conflicts',
      roundup: 'best AI commit tools',
      compare: 'aic vs aicommits',
      changelog: 'changelog',
    },
    meta: 'MIT licensed · built with Astro + Tailwind + GSAP',
  },

  resolve: {
    eyebrow: 'Capability · merge conflicts',
    h1: {
      main: 'Resolve merge conflicts.',
      // Second line, per-locale word order + connector. Rendered as
      // <em>{0}</em>{1}<span>{2}</span> — the connector ("the") and the order
      // of the two emphasized words are language-specific, so the whole
      // phrase lives here instead of being spliced around a hardcoded EN
      // word in the component.
      sub: ['Without', ' the ', 'manual merge.'],
    },
    // Contains <b>; render via set:html.
    lede: '<b>aic</b> reads every conflicted file, proposes a clean resolution, and shows you the diff. You approve each file — nothing lands without your say-so — then it finalizes the merge for you.',
    // Contains <code>; render via set:html.
    ctaHint: 'then run <code>aic resolve</code>',
    workflow: {
      h2: 'How aic resolves a conflict',
      lede: 'Resolve is a workflow, not a magic wand. aic walks each conflicted file, proposes a fix, and stops for your approval at every step.',
      // `h` plain; `n` contains <code> — render via set:html.
      steps: [
        { h: 'Detect', n: '<code>aic resolve</code> reads the repo state. If you\'re mid-merge with unmerged files, it lists them.' },
        { h: 'Resolve, per file', n: 'For each file, aic sends the conflicted content to your model and gets back a marker-free version. If any conflict markers slip through, it retries once.' },
        { h: 'Review the diff', n: 'aic builds one combined diff of every proposed resolution — the markers removed, both sides reconciled — so you see exactly what will change.' },
        { h: 'Approve, per file', n: 'Each file gets its own <code>apply?</code> prompt. Say yes and aic writes the resolution and stages it. Say no and that file stays untouched.' },
        { h: 'Finalize', n: 'When nothing is left unmerged, aic runs the merge\'s <code>--continue</code> for you. Mid-flow blockers are reported with a clear hand-off, not a mystery count.' },
      ],
    },
    twoWays: {
      h2: 'Two ways in',
      lede: 'You don\'t have to remember a command. There\'s an explicit verb, and a guard that catches you when you forget.',
      // `h` may contain <code>; `n` may contain <code> — render both via set:html.
      points: [
        { h: '<code>aic resolve</code>', n: 'The explicit verb. Run it any time your repo is mid-merge and aic takes it from the detection step above.' },
        { h: 'The commit guard', n: 'Run plain <code>aic</code> in a conflicted repo and it notices, offers to hand off to resolve, and a deeper guard blocks any commit that still carries conflict markers. The friendly front door, plus the safety net.' },
      ],
    },
    review: {
      h2: 'Nothing lands without your say-so',
      lede: 'The whole point: aic proposes, you decide. It never writes a resolution you haven\'t seen and approved.',
      // Contains <strong>/<em>/<code>; render via set:html.
      callout: '<strong>Review before apply.</strong> Every proposed resolution is shown as a diff <em>before</em> it touches disk. Each file is a separate <code>y/n</code> — approve the ones you trust, reject the ones you don\'t, and the rejected files stay exactly as you left them.',
    },
    limits: {
      h2: 'What aic leaves to you',
      lede: 'Honesty up front, so you know where the tool ends and you begin. These are the v1 limits.',
      points: [
        { h: 'Merge conflicts only', n: 'aic handles conflicted <em>merge</em> state. A rebase or <code>am</code> in flight is detected and refused in v1 — finish or abort it, then resolve.' },
        { h: 'Some conflicts can\'t be auto-resolved', n: 'Binary files, oversized files, and delete/modify conflicts are skipped with a reason — aic points you at them to resolve by hand.' },
        { h: 'Finalize is all-or-nothing', n: '<code>--continue</code> blocks on any unmerged path regardless, so a single remaining blocker holds finalize. aic\'s hand-off tells you exactly what\'s left.' },
      ],
    },
    verdict: {
      h2: 'The short version',
      // Contains <code>; render via set:html.
      body: '<code>aic resolve</code> reads your conflicted files, proposes resolutions you can actually review, and writes only what you approve — then finishes the merge. It\'s the same "read the diff, draft the fix, ship it" loop aic uses for commits, pointed at the ugliest part of git.',
      releaseNotes: 'v0.3.0 release notes',
    },
  },

  vs: {
    aicommits: {
      eyebrow: 'Comparison · aicommits alternative',
      h1: 'aic vs aicommits',
      // Link wraps the rival name at the start; render the link in markup,
      // this is the tail (contains <strong>; set:html).
      ledeAfter: ' is the entrenched default for AI-written commit messages — the install base, the ecosystem, the first-mover momentum. This page isn\'t here to pretend otherwise. It\'s here to tell you exactly when <strong>aic</strong> is the better pick — and when you should just stay on aicommits.',
      // Contains <strong>/<code>; render via set:html.
      callout: '<strong>Small world.</strong> aicommits\' own README suggests aliasing it to <code>aic</code> if the name is too long. We shipped <code>aic</code> as its own thing — and it splits your unstaged work into logical commits at the hunk level, so even one file can become several.',
      matrix: {
        capability: 'Capability',
        aic: 'aic',
      },
      winsH2: 'Where aic pulls ahead',
      rivalH2: 'Where aicommits still wins',
      rivalLede: 'We\'re not going to pretend aic beats the popular tool on everything. It doesn\'t. If any of these matter more to you than auto-batching, aicommits is the right call:',
      tieTag: 'trade-off',
      verdict: {
        h2: 'The short version',
        // Contains <strong>/<code>; render via set:html.
        body: 'If your unstaged work piles up and you want it split into clean, logical commits — or you want Claude, Gemini, or DeepSeek as first-class providers without a Node.js dependency — switch to <strong>aic</strong>. If you want a <code>git commit</code> hook, gitmoji commits, multiple candidates to pick from, or just the comfort of the popular choice, aicommits is still a great tool.',
      },
      // Matrix + verdict point-list content, keyed by axis id
      // (`AICOMMITS_COMPARISON.axes`). Rendered as plain text (cells keep
      // literal backtick-commands).
      axes: {
        'auto-batch': {
          feature: 'Auto-batch unstaged work into multiple commits',
          aic: 'Yes — splits unstaged changes into logical atomic commits',
          rival: 'No — one message per staged diff',
          note: 'aic’s signature feature. aicommits’ `--generate N` produces N candidate messages for ONE commit, not N commits.',
        },
        'per-hunk': {
          feature: 'Split a single file across commits (per-hunk)',
          aic: 'Yes — routes each hunk to its own commit by intent',
          rival: 'No — file-granular at most',
          note: 'Shipped in aic v0.3.5. aicommits (and every tool in the roundup) splits at the file boundary at most; aic reads the diff at the hunk level, so one file touching three concerns becomes three focused commits.',
        },
        resolve: {
          feature: 'Resolve merge conflicts',
          aic: 'Yes — `aic resolve` proposes a diff, asks per file',
          rival: 'No — commit messages only',
          note: 'aic’s second signature workflow (`v0.3.0`). aicommits has no conflict story — it only writes the message after you’ve merged by hand.',
        },
        anthropic: {
          feature: 'First-class Anthropic · Gemini · DeepSeek',
          aic: 'Yes — native providers',
          rival: 'Only via OpenRouter / custom endpoint',
          note: 'aicommits reaches them indirectly; aic ships them as first-class with sensible default models.',
        },
        runtime: {
          feature: 'Runtime & dependencies',
          aic: 'Rust binary — no Node.js',
          rival: 'Node.js v22+ — npm',
          note: "aic is one static binary — no `node_modules`, transitive dependency tree, or global-install breakage when you switch Node versions. (Rust's faster cold-start helps too, though the LLM call dominates either way.) aicommits is friction-free only when Node.js is already in your path.",
        },
        reach: {
          feature: 'Provider reach',
          aic: '11 first-class + OpenAI-compatible',
          rival: '8 + OpenRouter/custom (any model)',
          note: 'Both reach any model via OpenRouter, but aic now ships more first-class providers — xAI, Together, Perplexity, Mistral included — plus an OpenAI-compatible escape hatch for LM Studio, vLLM, and gateways.',
        },
        formats: {
          feature: 'Commit message formats',
          aic: 'Conventional Commits',
          rival: 'plain · conventional · gitmoji',
          note: 'aic is conventional-only by design; aicommits lets you pick, including a plain unstructured mode.',
        },
        hook: {
          feature: 'Git hook integration',
          aic: 'No',
          rival: 'Yes — prepare-commit-msg hook',
          note: 'aicommits wires into your normal `git commit` flow via a hook; aic is run explicitly.',
        },
        candidates: {
          feature: 'Multiple message candidates',
          aic: 'No',
          rival: 'Yes — `--generate N`',
          note: 'aicommits can offer several messages to pick from before committing.',
        },
        prompt: {
          feature: 'Prompt & locale control',
          aic: 'System prompt via env',
          rival: '`--prompt`, locale, max-length',
          note: 'aicommits exposes richer knobs. aic supports an `AIC_SYSTEM_PROMPT` override but fewer surface options.',
        },
        popularity: {
          feature: 'Popularity & ecosystem',
          aic: 'New, small',
          rival: 'Entrenched first-mover',
          note: 'aicommits is the known quantity with the larger community. If momentum matters most, stay with it.',
        },
      },
    },
  },

  roundup: {
    eyebrow: 'Roundup · best AI commit tools',
    h1: 'The best AI commit message tools',
    // Contains <code>; render via set:html.
    lede: 'There\'s no shortage of CLIs that will read your <code>git diff</code> and draft a commit message. The honest answer to "which is best?" is "depends what you want." Here\'s a fair, feature-verified survey of the field — and a quick way to pick.',
    // Contains <strong>/<code>; render via set:html.
    callout: '<strong>Disclosure.</strong> <code>aic</code> is our tool, so it\'s on this list. We\'ve kept every one-liner honest about what each tool is genuinely best at — including where the others beat us.',
    choose: {
      h2: 'How to choose',
      items: [
        { need: 'You want unstaged work split into logical commits — even within a single file', pick: '→ aic' },
        { need: 'You want merge conflicts resolved for you, not just a message afterward', pick: '→ aic' },
        { need: 'You want the popular, well-supported default', pick: '→ aicommits' },
        { need: 'You already live in Claude Code', pick: '→ ai-commit' },
        { need: 'You want free, local, offline — and PR descriptions too', pick: '→ git-ai' },
        { need: 'You want maximum providers and a polished TUI', pick: '→ llmc' },
      ],
    },
    field: {
      h2: 'The field',
      // `{version}` is HUNK_SPLITTING.shippedIn.
      hlEyebrow: 'new · v{version}',
      hlHead: 'one file, many commits',
      hlSub: 'per-hunk splitting — the only tool here that goes below the file boundary.',
      badge: "that's us",
      vsAicommitsLink: 'vs aicommits →',
      repoLink: 'repository ↗',
      compareLink: 'full comparison →',
      // Contains <code>; render via set:html.
      note: 'Not exhaustive — the space is crowded (add <code>commitizen</code>, <code>cz-git</code>, and a dozen more). These five cover the distinct approaches: auto-batching, the incumbent, Claude-Code-native, local-first, and max-provider.',
    },
    verdict: {
      h2: 'Our honest take',
      // Contains <strong>; render via set:html.
      body: 'If your work piles up unstaged and you want it committed as clean, atomic, conventional commits — without installing Node.js — <strong>aic</strong> is purpose-built for that. Otherwise, aicommits remains the safe default, and the others each own a clear niche.',
      seeVs: 'see aic vs aicommits →',
    },
    // Card strength one-liner per tool, keyed by id (`ROUNDUP`). Rendered
    // as plain text (keeps literal backtick-commands).
    tools: {
      aic: {
        strength:
          'The only tool here that splits unstaged work into logical commits at the hunk level — so even a single file can become several focused commits — and resolves merge conflicts (`aic resolve`). Ships as a dependency-free Rust binary with first-class Anthropic, Gemini, and DeepSeek.',
      },
      aicommits: {
        strength:
          'The entrenched default — a prepare-commit-msg hook, gitmoji support, the largest community, and any model via OpenRouter.',
      },
      'ai-commit': {
        strength:
          'Stands out with a Claude Code provider that reads your source files for richer context — a natural fit if you already use Claude Code.',
      },
      'git-ai': {
        strength:
          'Defaults to local Ollama (free, offline) and also drafts PR descriptions, not just commit messages.',
      },
      llmc: {
        strength:
          'The broadest provider list (13) with a polished terminal UI, TOML config, custom prompts, and auto-commit.',
      },
    },
  },

  changelog: {
    eyebrow: 'Changelog · release notes',
    h1: 'Every aic release, in order.',
    // Contains an inline link; render via set:html, split at the link.
    ledeBefore:
      'New versions of <code>aic</code> as they shipped — pulled at build time from the source repo’s ',
    ledeLink: 'CHANGELOG.md',
    ledeAfter:
      ', with GitHub Releases as a fallback if that fetch is briefly unreachable. Newest at the top.',
    /** ADR-0011: localized note shown above the EN body on non-en locales. */
    englishNote: 'Release notes are kept in English.',
    timeline: {
      latest: 'Latest',
      githubRelease: 'GitHub release',
      noNotes: 'No release notes published.',
    },
  },
} as const;
