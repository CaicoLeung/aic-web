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
      aicommits: {
        title: 'aic vs aicommits — AI commit tool comparison',
        description:
          'An honest aicommits alternative: aic auto-batches unstaged work into atomic commits, resolves merge conflicts, and needs no Node.js. Feature-by-feature comparison.',
      },
      'ai-commit': {
        title: 'aic vs ai-commit — AI commit tool comparison',
        description:
          'Looking for an ai-commit alternative? aic splits unstaged work into atomic commits and resolves merge conflicts — no Node.js, no Claude Code required.',
      },
      llmc: {
        title: 'aic vs llmc — AI commit tool comparison',
        description:
          'llmc alternative? aic beats file-granular commit tools with hunk-level batching and AI conflict resolution — in a dependency-free Rust binary.',
      },
      'git-ai': {
        title: 'aic vs git-ai — AI commit tool comparison',
        description:
          'git-ai is the local-first Git assistant — commit messages, PR descriptions, and free offline Ollama. aic wins on hunk-level batching, conflict resolution, and activity.',
      },
      opencommit: {
        title: 'aic vs OpenCommit — AI commit tool comparison',
        description:
          'OpenCommit is the GitHub 2023 hackathon winner and a feature-rich GPT wrapper for git. aic wins where atomic history matters: hunk-level batching and AI conflict resolution, no Node.js.',
      },
    },
    alt: {
      hub: {
        title: 'AI commit tool alternatives — choose aic',
        description:
          'Why switch from aicommits, OpenCommit, ai-commit, llmc, or git-ai to aic? Hunk-level batching, AI conflict resolution, no Node.js.',
      },
      aicommits: {
        title: 'aicommits alternative — aic: batched, atomic commits',
        description:
          'Looking for an aicommits alternative? aic auto-batches unstaged work into atomic commits and resolves merge conflicts — no Node.js.',
      },
      opencommit: {
        title: 'OpenCommit alternative — aic: atomic history, not just a message',
        description:
          'OpenCommit is the hackathon-winning GPT wrapper. aic is the alternative if you want hunk-level batching and AI conflict resolution — no Node.js.',
      },
      'ai-commit': {
        title: 'ai-commit alternative — aic: hunk-level commits without Node',
        description:
          'ai-commit is the Claude Code pick. aic is the alternative if you want unstaged work split into atomic commits and conflicts resolved.',
      },
      llmc: {
        title: 'llmc alternative — aic: batching + resolve',
        description:
          'llmc offers 13 providers and a TUI. aic is the alternative if you want unstaged work split into atomic commits and conflicts resolved — in a Rust binary.',
      },
      'git-ai': {
        title: 'git-ai alternative — aic: commits below the file level',
        description:
          'git-ai is the local-first assistant. aic is the alternative if you want hunk-level batching and AI conflict resolution.',
      },
    },
    deepseek: {
      title: 'aic + DeepSeek — AI commit messages with DeepSeek',
      description:
        'Use DeepSeek to write Conventional Commits with aic: first-class provider, one setup wizard, your key never leaves your machine. No Node.js.',
    },
    agents: {
      title: 'aic + your AI coding agent — 11 CLI agents, one backend',
      description:
        'aic can delegate to your local AI coding agent — Claude Code, Codex, Cursor, Gemini, Copilot, and more (11 presets) — in headless mode. No API key, no middleman: your agent reads the diff and writes the commit, reusing its own model.',
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
      resolve: 'resolve',
      agents: 'agents',
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
    resolve: 'resolve',
    roundup: 'roundup',
    compare: 'compare',
    changelog: 'changelog',
    github: 'GitHub',
    agents: 'agents',
  },

  copyButton: {
    /** `{label}` is the literal command/identifier being copied. */
    copyAria: 'Copy {label}',
    copiedAria: 'Copied {label}',
    copied: 'Copied ✓',
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
      '02': { label: 'setup', detail: 'provider · key · model — or your local agent' },
      '03': { label: 'run', detail: 'type:  aic' },
      '04': { label: 'read', detail: 'reads the diff' },
      '05': { label: 'draft', detail: 'writes the message' },
      '06': { label: 'commit', detail: 'ships it  ✓' },
    },
  },

  batching: {
    eyebrow: '03 — Auto-batching',
    kicker: 'below the file boundary',
    h2: 'one file, many commits',
    lede: 'Every other commit tool stops at the file boundary — one file, one message. aic reads your diff at the hunk level, so a single file touching three concerns becomes three focused, conventional commits. Nothing staged, one command, a history that actually reads back cleanly.',
    aside: 'per-hunk batching ✦',
    swatchLabel: '17 commit types · WCAG-safe colors',
    stripLabel: 'reasoning · per hunk',
    /** `{version}` is the shipped-in semver (HUNK_SPLITTING.shippedIn). */
    shipBadge: 'shipped in v{version}',
    cmpLink: 'see aic among the best AI commit tools →',
  },
  resolveSection: {
    eyebrow: '04 — Resolve',
    // h2 reuses `resolve.h1.main` — single source for the headline.
    // Contains <code>; render via set:html.
    lede: 'Mid-merge, run one command. aic reads every conflicted file, proposes a marker-free resolution, and shows you the combined diff before anything lands. Each file is a separate <code>y/n</code> — approve what you trust, reject the rest, and it finalizes the merge.',
    link: 'how aic resolves a conflict →',
  },

  agentsSection: {
    eyebrow: '05 — Bring your agent',
    // h2 reuses `agents.h1` — single source for the headline.
    lede: "Already running Claude Code, Codex, Cursor, or Gemini? Point aic at your agent in headless mode — it passes the diff, your agent writes the message, aic ships the commit. No API key, no default model: it reuses your agent's own auth.",
    link: 'see the agent backend →',
  },

  providers: {
    eyebrow: '06 — Providers & privacy',
    h2: 'your key · your model',
    lede: 'Bring your own provider. aic talks straight to your LLM — no middleman, no per-commit markup, no proxy. Your API key never leaves your machine.',
    aside: 'no middleman · no per-commit markup · calls go straight from your machine',
    link: 'read the provider code →',
    yourModel: '(your model)',
    profilesHint: 'save profiles · switch with <code>aic use</code>',
  },

  install: {
    eyebrow: '07 — Install',
    h2: 'install aic in one line.',
    // CRO trust strip — answers the top objections before install methods.
    trust: [
      'Free & MIT',
      'No Node.js',
      '12 providers',
      'Survives your pre-commit hooks',
      'Key never leaves your machine',
    ],
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
  compareBand: {
    // Connective band (not a numbered spine section — a navigation/routing
    // element toward the SEO comparison cluster). Sits between Providers
    // (#06) and Install (#07). Plain text; render via t().
    heading: 'how aic compares',
    lede: 'Curious how aic holds up against aicommits, OpenCommit, or the rest? Each comparison concedes where the rival wins and shows exactly where aic pulls ahead.',
    roundupLink: 'see the full field →',
  },

  footer: {
    eyebrow: 'ship cleaner commits today',
    h2: 'stop writing commit messages.',
    star: '★ Star on GitHub',
    nav: {
      resolve: 'resolve merge conflicts',
      roundup: 'best AI commit tools',
      compare: 'aic vs aicommits',
      alternatives: 'alternatives',
      deepseek: 'DeepSeek',
      changelog: 'changelog',
      agents: 'agents',
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
        {
          h: 'Detect',
          n: "<code>aic resolve</code> reads the repo state. If you're mid-merge with unmerged files, it lists them.",
        },
        {
          h: 'Resolve, per file',
          n: 'For each file, aic sends the conflicted content to your model and gets back a marker-free version. If any conflict markers slip through, it retries once.',
        },
        {
          h: 'Review the diff',
          n: 'aic builds one combined diff of every proposed resolution — the markers removed, both sides reconciled — so you see exactly what will change.',
        },
        {
          h: 'Approve, per file',
          n: 'Each file gets its own <code>apply?</code> prompt. Say yes and aic writes the resolution and stages it. Say no and that file stays untouched.',
        },
        {
          h: 'Finalize',
          n: "When nothing is left unmerged, aic runs the merge's <code>--continue</code> for you. Mid-flow blockers are reported with a clear hand-off, not a mystery count.",
        },
      ],
    },
    twoWays: {
      h2: 'Two ways in',
      lede: "You don't have to remember a command. There's an explicit verb, and a guard that catches you when you forget.",
      // `h` may contain <code>; `n` may contain <code> — render both via set:html.
      points: [
        {
          h: '<code>aic resolve</code>',
          n: 'The explicit verb. Run it any time your repo is mid-merge and aic takes it from the detection step above.',
        },
        {
          h: 'The commit guard',
          n: 'Run plain <code>aic</code> in a conflicted repo and it notices, offers to hand off to resolve, and a deeper guard blocks any commit that still carries conflict markers. The friendly front door, plus the safety net.',
        },
      ],
    },
    review: {
      h2: 'Nothing lands without your say-so',
      lede: "The whole point: aic proposes, you decide. It never writes a resolution you haven't seen and approved.",
      // Contains <strong>/<em>/<code>; render via set:html.
      callout:
        "<strong>Review before apply.</strong> Every proposed resolution is shown as a diff <em>before</em> it touches disk. Each file is a separate <code>y/n</code> — approve the ones you trust, reject the ones you don't, and the rejected files stay exactly as you left them.",
    },
    limits: {
      h2: 'What aic leaves to you',
      lede: 'Honesty up front, so you know where the tool ends and you begin. These are the v1 limits.',
      points: [
        {
          h: 'Merge conflicts only',
          n: 'aic handles conflicted <em>merge</em> state. A rebase or <code>am</code> in flight is detected and refused in v1 — finish or abort it, then resolve.',
        },
        {
          h: "Some conflicts can't be auto-resolved",
          n: 'Binary files, oversized files, and delete/modify conflicts are skipped with a reason — aic points you at them to resolve by hand.',
        },
        {
          h: 'Finalize is all-or-nothing',
          n: "<code>--continue</code> blocks on any unmerged path regardless, so a single remaining blocker holds finalize. aic's hand-off tells you exactly what's left.",
        },
      ],
    },
    verdict: {
      h2: 'The short version',
      // Contains <code>; render via set:html.
      body: '<code>aic resolve</code> reads your conflicted files, proposes resolutions you can actually review, and writes only what you approve — then finishes the merge. It\'s the same "read the diff, draft the fix, ship it" loop aic uses for commits, pointed at the ugliest part of git.',
      releaseNotes: 'v0.3.0 release notes',
    },
  },

  agents: {
    eyebrow: 'Capability · CLI-agent backend',
    h1: 'Bring your agent, not your key.',
    // Contains <b>; render via set:html.
    lede: '<b>aic</b> can delegate to your local AI coding agent — Claude Code, Codex, Cursor, Gemini, or any of the 11 presets — in headless mode. No API key, no default model, no middleman: your agent reads the diff and writes the commit, reusing its own model and auth.',
    // Contains <code>; render via set:html.
    ctaHint: 'then run <code>aic setup</code> → pick agent backend',
    how: {
      h2: 'How it works',
      lede: 'Same loop, different backend. Instead of calling an LLM API, aic shells out to your agent in print mode, passes the diff, and lets it do what it does best — reason about the change and write the message.',
      // `h` may contain <code>; `n` may contain <code> — render both via set:html.
      steps: [
        {
          h: 'Pick the agent backend',
          n: 'Run <code>aic setup</code> and choose a CLI agent instead of an API provider. aic remembers it.',
        },
        {
          h: 'Delegate, not call',
          n: 'When you run <code>aic</code>, it shells out to your agent — e.g. <code>claude -p</code> — with the diff and the prompt. The agent does the reasoning.',
        },
        {
          h: 'Same commit output',
          n: 'Your agent returns the message. aic applies it to your git history — batched, conventional, colored, same as always.',
        },
      ],
    },
    presets: {
      h2: 'Eleven agents, one backend',
      lede: 'Eleven presets ship out of the box — three stream reasoning live, eight run print-mode. Each reuses its own auth — no extra setup if the agent is already installed.',
      // `h` is the display name; `n` may contain <code> — render via set:html.
      items: [
        {
          h: 'Claude Code',
          n: 'Streams reasoning live via <code>thinking_delta</code>. You watch the agent think, then commit.',
        },
        {
          h: 'Codex',
          n: 'Runs silently in a read-only sandbox, returns the message when done.',
        },
        {
          h: 'Pi',
          n: "Token-streams its reasoning live — finer-grained than Claude Code's end-of-phase bursts.",
        },
        {
          h: 'OpenCode',
          n: 'Runs silently, reuses your existing provider keys (e.g. Cursor OAuth).',
        },
        {
          h: 'Oh My Pi',
          n: 'pi fork — streams reasoning live, same feed as pi.',
        },
        {
          h: 'Gemini',
          n: 'Print mode via <code>gemini -p</code>. The preset shadows the provider name — <code>aic use google</code> still reaches the Google API.',
        },
        {
          h: 'Cursor',
          n: 'Print mode via <code>cursor-agent -p</code>, run untrusted — writes stay disabled.',
        },
        {
          h: 'Windsurf',
          n: 'Windsurf was renamed Devin Desktop — the preset maps to the <code>devin</code> binary.',
        },
        {
          h: 'GitHub Copilot',
          n: 'Print mode; headless runs stay text-only since tool use needs interactive approval.',
        },
        {
          h: 'Trae',
          n: 'Print mode via <code>traecli -p</code> — non-read tools stay gated.',
        },
        {
          h: 'Qwen Code',
          n: 'gemini-cli lineage — print mode via <code>qwen -p</code>.',
        },
      ],
    },
    eitherOr: {
      h2: "Switch your backend — don't run both",
      // Contains <code>; render via set:html.
      lede: '<code>backend_kind</code> is a discriminator: only one backend is active per run. The API path (provider · key · model) and the agent path (your local CLI) are alternatives, not layers.',
      body: 'Run <code>aic setup</code> again to switch. aic stores one config; whichever backend you last picked is the one it uses.',
    },
    custom: {
      h2: 'Or any custom agent',
      // Contains <code>; render via set:html.
      body: 'Beyond the eleven presets, you can configure any CLI command as your agent. If it accepts a prompt on stdin and prints to stdout, aic can drive it.',
    },
    speed: {
      h2: "Why it's fast",
      lede: 'No API hop, no new auth. Your agent already has the model loaded and authenticated — aic just passes the diff and reads the message back.',
      body: "The speed comes from skipping the setup, not from a faster model. You're reusing your agent's session and credentials.",
    },
    verdict: {
      h2: 'The short version',
      // Contains <code>; render via set:html.
      body: '<code>aic</code> + your coding agent: the agent reasons, aic ships the commit. No API key, no middleman, no model to pick — just the same batched, conventional, colored history aic always produces.',
      releaseNotes: 'v{version} release notes',
    },
  },

  vs: {
    // Shared feature-matrix column labels — identical for every rival,
    // so defined once here rather than copied into each rival block.
    matrix: {
      heading: 'Feature-by-feature',
      capability: 'Capability',
      aic: 'aic',
    },
    aicommits: {
      eyebrow: 'Comparison · aicommits alternative',
      h1: 'aic vs aicommits',
      // Link wraps the rival name at the start; render the link in markup,
      // this is the tail (contains <strong>; set:html).
      ledeAfter:
        " is the entrenched default for AI-written commit messages — the install base, the ecosystem, the first-mover momentum. This page isn't here to pretend otherwise. It's here to tell you exactly when <strong>aic</strong> is the better pick — and when you should just stay on aicommits.",
      // Contains <strong>/<code>; render via set:html.
      callout:
        "<strong>Small world.</strong> aicommits' own README suggests aliasing it to <code>aic</code> if the name is too long. We shipped <code>aic</code> as its own thing — and it splits your unstaged work into logical commits at the hunk level, so even one file can become several.",
      winsH2: 'Where aic pulls ahead',
      rivalH2: 'Where aicommits still wins',
      rivalLede:
        "We're not going to pretend aic beats the popular tool on everything. It doesn't. If any of these matter more to you than auto-batching, aicommits is the right call:",
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
      faq: {
        h2: 'FAQ',
        items: [
          {
            q: 'Is aic a good aicommits alternative?',
            a: 'Yes, if you want unstaged work split into logical commits — even within a single file — and AI merge-conflict resolution. aicommits stays the right pick if you rely on a git hook, gitmoji commits, or multiple message candidates.',
          },
          {
            q: 'Does aic need Node.js like aicommits?',
            a: 'No. aic is a single Rust binary — no node_modules, no npm global install, no Node-version breakage.',
          },
        ],
      },
    },
    'ai-commit': {
      eyebrow: 'Comparison · ai-commit alternative',
      h1: 'aic vs ai-commit',
      // Link wraps the rival name at the start; this is the tail (contains <strong>; set:html).
      ledeAfter:
        " is the Claude-Code-native pick for AI commit messages — it can read your source files for context and writes Chinese or English messages on demand. This page compares them fairly: when ai-commit's niche wins, we say so. <strong>aic</strong> wins where atomic history matters: hunk-level batching and AI conflict resolution, in a dependency-free Rust binary.",
      // Contains <strong>/<code>; render via set:html.
      callout:
        '<strong>Two different bets.</strong> ai-commit bets on Claude Code as the context engine; aic bets on the diff itself. Both are free. aic is the only one that splits unstaged work into logical commits below the file boundary — and resolves merge conflicts.',
      winsH2: 'Where aic pulls ahead',
      rivalH2: 'Where ai-commit still wins',
      rivalLede:
        'ai-commit is genuinely better at a few things. If these matter more to you than auto-batching, it might be the right call:',
      tieTag: 'trade-off',
      verdict: {
        h2: 'The short version',
        // Contains <strong>/<code>; render via set:html.
        body: 'If your work piles up unstaged and you want it split into clean, atomic commits — or you want merge conflicts resolved with per-file approval — choose <strong>aic</strong>. If you live in Claude Code, want Chinese commit messages, or want emoji-flavored conventional commits, ai-commit is a solid, honest tool.',
      },
      // Matrix + verdict point-list content, keyed by axis id
      // (`AI_COMMIT_COMPARISON.axes`). Rendered as plain text.
      axes: {
        'auto-batch': {
          feature: 'Auto-batch unstaged work into multiple commits',
          aic: 'Yes — splits unstaged changes into logical atomic commits',
          rival: 'No — one message per staged diff',
          note: "aic's signature feature. ai-commit writes one message for whatever you stage.",
        },
        'per-hunk': {
          feature: 'Split a single file across commits (per-hunk)',
          aic: 'Yes — routes each hunk to its own commit by intent',
          rival: 'No — file-granular at most',
          note: 'aic reads the diff at the hunk level; ai-commit (like every tool in the roundup) treats a file as the atomic unit.',
        },
        resolve: {
          feature: 'Resolve merge conflicts',
          aic: 'Yes — `aic resolve` proposes a diff, asks per file',
          rival: 'No — commit messages only',
          note: 'ai-commit has no conflict story — you still untangle merges by hand.',
        },
        'claude-context': {
          feature: 'Claude Code context',
          aic: 'No',
          rival: 'Yes — reads your source files for richer context',
          note: "ai-commit's signature advantage: Claude Code can look beyond the diff when you already use it.",
        },
        'provider-reach': {
          feature: 'Provider reach',
          aic: '11 first-class + OpenAI-compatible',
          rival: 'Any OpenAI-compatible endpoint + Claude Code',
          note: 'Both are open. aic ships more first-class providers with sensible default models; ai-commit reaches anything OpenAI-compatible plus Claude Code.',
        },
        runtime: {
          feature: 'Runtime & dependencies',
          aic: 'Rust binary — no Node.js',
          rival: 'Node.js ≥ 22.19 — Homebrew / curl',
          note: 'aic is one static binary; ai-commit needs Node in your path (its Homebrew tap pulls Node too).',
        },
        windows: {
          feature: 'Windows support',
          aic: 'Yes — PowerShell installer, CI-tested',
          rival: 'No — macOS/Linux only',
          note: 'ai-commit installs via Homebrew/curl; aic ships a native Windows installer.',
        },
        language: {
          feature: 'Commit-message language',
          aic: 'English (4-locale website)',
          rival: 'Yes — `-l en` / `-l zh`',
          note: "ai-commit writes Chinese messages on demand; aic's CLI is English-only today.",
        },
        emoji: {
          feature: 'Emoji in messages',
          aic: 'No',
          rival: 'Yes — `--emoji`',
          note: "Conventional Commits are aic's single format; ai-commit optionally decorates with emoji.",
        },
        candidates: {
          feature: 'Multiple message candidates',
          aic: 'No',
          rival: 'No',
          note: 'Neither offers a pick-from-N menu — both draft one message.',
        },
        popularity: {
          feature: 'Community size',
          aic: 'Young (~8★)',
          rival: 'Young (~8★)',
          note: "Both are early. ai-commit's bilingual docs pull a Chinese-speaking audience; aic ships 4 locales.",
        },
      },
      faq: {
        h2: 'FAQ',
        items: [
          {
            q: 'Is aic a good ai-commit alternative?',
            a: 'If you want hunk-level auto-batching and merge-conflict resolution, yes. ai-commit remains the pick if you live in Claude Code or need Chinese-language commit messages.',
          },
          {
            q: 'Does aic work with Claude Code?',
            a: 'aic has no Claude Code integration — it calls your LLM provider directly and needs no Node.js. For Claude Code context, ai-commit is the niche choice.',
          },
        ],
      },
    },
    llmc: {
      eyebrow: 'Comparison · llmc alternative',
      h1: 'aic vs llmc',
      // Link wraps the rival name at the start; this is the tail (contains <strong>; set:html).
      ledeAfter:
        " is the max-provider pick — 13 LLM backends, TOML prompts, and a polished terminal UI. A real tool with real strengths. This page compares them fairly. Where they tie, we say tie. Where <strong>aic</strong> wins — hunk-level batching and merge-conflict resolution in a dependency-free Rust binary — that's the argument for switching.",
      // Contains <strong>/<code>; render via set:html.
      callout:
        '<strong>Same spec, different scope.</strong> Both write Conventional Commits. llmc maximizes provider choice and terminal polish; aic maximizes commit-history quality — one file can become several focused commits, and `aic resolve` finishes merges you approve per file.',
      winsH2: 'Where aic pulls ahead',
      rivalH2: 'Where llmc still wins',
      rivalLede:
        "llmc earns two honest concessions — provider count and TUI polish. If either matters more than atomic history, it's a fair pick:",
      tieTag: 'trade-off',
      verdict: {
        h2: 'The short version',
        // Contains <strong>/<code>; render via set:html.
        body: "If unstaged work piles up and you want it committed as clean, atomic, conventional commits — or you want AI-resolved merge conflicts — choose <strong>aic</strong>. If you want the broadest provider menu and the prettiest terminal output, llmc is a decent tool — just know it's file-granular and has been quiet since late 2025.",
      },
      // Matrix + verdict point-list content, keyed by axis id
      // (`LLMC_COMPARISON.axes`). Rendered as plain text.
      axes: {
        'auto-batch': {
          feature: 'Auto-batch unstaged work into multiple commits',
          aic: 'Yes — splits unstaged changes into logical atomic commits',
          rival: 'No — one message per staged diff',
          note: "aic's signature feature. llmc commits whatever you stage as a single message.",
        },
        'per-hunk': {
          feature: 'Split a single file across commits (per-hunk)',
          aic: 'Yes — routes each hunk to its own commit by intent',
          rival: 'No — file-granular at most',
          note: 'aic reads the diff at the hunk level; llmc (like every tool in the roundup) treats a file as the atomic unit.',
        },
        resolve: {
          feature: 'Resolve merge conflicts',
          aic: 'Yes — `aic resolve` proposes a diff, asks per file',
          rival: 'No — commit messages only',
          note: 'llmc has no conflict story — you still untangle merges by hand.',
        },
        'provider-count': {
          feature: 'Provider count',
          aic: '12 (11 first-class + OpenAI-compatible)',
          rival: '13',
          note: 'llmc has one more provider on the menu. aic counters with first-class Anthropic/Gemini/DeepSeek and an OpenAI-compatible escape hatch.',
        },
        tui: {
          feature: 'Terminal experience',
          aic: 'Clear, fast line output',
          rival: 'Rich TUI with progress timers',
          note: "llmc's UI is its showpiece — real-time status and timers. aic favors speed and scriptability.",
        },
        runtime: {
          feature: 'Runtime & dependencies',
          aic: 'Rust binary — no Node.js',
          rival: 'Node.js — npx / npm',
          note: 'aic is one static binary; llmc runs through Node and npx.',
        },
        setup: {
          feature: 'Setup',
          aic: 'Interactive `aic setup` wizard',
          rival: 'Optional `llmc init` (TOML config)',
          note: 'aic walks you through provider → key → model; llmc defaults sensibly but config is file-based.',
        },
        'custom-prompt': {
          feature: 'Custom prompts',
          aic: 'Env override (`AIC_SYSTEM_PROMPT`)',
          rival: 'TOML prompt with `${diff}` interpolation',
          note: "llmc's prompt config is richer; aic exposes a system-prompt env override.",
        },
        activity: {
          feature: 'Project activity',
          aic: 'Weekly releases',
          rival: 'Quiet since 2025-10, no GitHub releases',
          note: 'aic ships on a weekly cadence with a public changelog; llmc has been dormant for ~9 months.',
        },
        candidates: {
          feature: 'Multiple message candidates',
          aic: 'No',
          rival: 'No',
          note: 'Neither offers a pick-from-N menu — both draft one message.',
        },
        formats: {
          feature: 'Commit message formats',
          aic: 'Conventional Commits',
          rival: 'Conventional Commits',
          note: 'Both are conventional-only by design — a tie.',
        },
      },
      faq: {
        h2: 'FAQ',
        items: [
          {
            q: 'Is aic a good llmc alternative?',
            a: 'If you want unstaged work committed as atomic, conventional commits and merge conflicts resolved, yes. llmc keeps its edge on provider count (13) and TUI polish.',
          },
          {
            q: 'Is llmc still maintained?',
            a: 'llmc has been quiet since late 2025 with no GitHub releases. aic ships weekly with a public changelog.',
          },
        ],
      },
    },
    'git-ai': {
      eyebrow: 'Comparison · git-ai alternative',
      h1: 'aic vs git-ai',
      // Link wraps the rival name at the start; this is the tail (contains <strong>; set:html).
      ledeAfter:
        ' is the local-first Git assistant — commit messages, PR descriptions, and zero-config Ollama by default. It is early (v0.1.3) and has been quiet since early 2026, but the PR-description angle is real. This page compares them fairly. <strong>aic</strong> wins where atomic history matters: hunk-level batching and AI conflict resolution, in a dependency-free Rust binary.',
      // Contains <strong>/<code>; render via set:html.
      callout:
        '<strong>Two helpers, different scopes.</strong> git-ai extends git with an assistant (commits + PR descriptions, local-first). aic specializes in one thing done deeply: clean, atomic, conventional commit history — and resolving merge conflicts.',
      winsH2: 'Where aic pulls ahead',
      rivalH2: 'Where git-ai still wins',
      rivalLede:
        'git-ai is the only tool in the roundup that drafts PR descriptions and defaults to a free local model. If either matters more than atomic history, it is a fair pick:',
      tieTag: 'trade-off',
      verdict: {
        h2: 'The short version',
        // Contains <strong>/<code>; render via set:html.
        body: 'If unstaged work piles up and you want it split into clean, atomic commits — or you want merge conflicts resolved — choose <strong>aic</strong>. If you want a local-first assistant that also drafts PR descriptions, git-ai is worth watching — just know it is file-granular and has been quiet since February 2026.',
      },
      faq: {
        h2: 'FAQ',
        items: [
          {
            q: 'Is aic a good git-ai alternative?',
            a: 'If you want unstaged work split into logical commits and merge conflicts resolved, yes. git-ai stays interesting if you want PR descriptions and a free local default.',
          },
          {
            q: 'Does aic draft PR descriptions?',
            a: 'No — aic focuses on commits and conflict resolution. git-ai is the roundup pick for PR descriptions.',
          },
        ],
      },
      // Matrix + verdict point-list content, keyed by axis id (`GIT_AI_COMPARISON.axes`).
      axes: {
        'auto-batch': {
          feature: 'Auto-batch unstaged work into multiple commits',
          aic: 'Yes — splits unstaged changes into logical atomic commits',
          rival: 'No — one message per staged diff',
          note: "aic's signature feature. git-ai writes one message for whatever you stage.",
        },
        'per-hunk': {
          feature: 'Split a single file across commits (per-hunk)',
          aic: 'Yes — routes each hunk to its own commit by intent',
          rival: 'No — file-granular at most',
          note: 'aic reads the diff at the hunk level; git-ai (like every tool in the roundup) treats a file as the atomic unit.',
        },
        resolve: {
          feature: 'Resolve merge conflicts',
          aic: 'Yes — `aic resolve` proposes a diff, asks per file',
          rival: 'No — commit messages only',
          note: 'git-ai has no conflict story — you still untangle merges by hand.',
        },
        'pr-description': {
          feature: 'PR descriptions',
          aic: 'No',
          rival: 'Yes — `git ai pr`',
          note: 'git-ai drafts PR titles and descriptions; aic is commit- and resolve-focused.',
        },
        'local-default': {
          feature: 'Local-first default',
          aic: 'BYO any provider (incl. Ollama)',
          rival: 'Zero-config Ollama — free and offline',
          note: 'git-ai works offline out of the box; aic needs a provider key but supports Ollama too.',
        },
        runtime: {
          feature: 'Runtime & dependencies',
          aic: 'Rust binary — no Node.js',
          rival: 'Node.js ≥ 22 — npm / npx',
          note: 'aic is one static binary; git-ai runs through Node and a scoped npm package.',
        },
        setup: {
          feature: 'Setup',
          aic: 'Interactive `aic setup` wizard',
          rival: '`git ai config` commands',
          note: 'aic walks you through provider → key → model; git-ai configures via CLI.',
        },
        providers: {
          feature: 'Provider reach',
          aic: '11 first-class + OpenAI-compatible',
          rival: 'Ollama, OpenAI, Anthropic',
          note: 'aic ships more first-class providers with sensible default models.',
        },
        activity: {
          feature: 'Project activity',
          aic: 'Weekly releases',
          rival: 'Quiet since 2026-02',
          note: 'aic ships on a weekly cadence; git-ai has been dormant for ~6 months.',
        },
        formats: {
          feature: 'Commit message formats',
          aic: 'Conventional Commits',
          rival: 'conventional + gitmoji option',
          note: 'git-ai offers a gitmoji format; aic is conventional-only by design.',
        },
        candidates: {
          feature: 'Multiple message candidates',
          aic: 'No',
          rival: 'No',
          note: 'Neither offers a pick-from-N menu — both draft one message.',
        },
      },
    },
    opencommit: {
      eyebrow: 'Comparison · OpenCommit alternative',
      h1: 'aic vs OpenCommit',
      // Link wraps the rival name at the start; this is the tail (contains <strong>; set:html).
      ledeAfter:
        ' is the GitHub 2023 hackathon winner and the most feature-rich GPT wrapper for git — GitMoji, configurable descriptions, local Ollama, and a large community. This page compares them fairly: where OpenCommit wins, we say so. <strong>aic</strong> wins where atomic history matters — hunk-level batching and AI conflict resolution, in a dependency-free Rust binary.',
      // Contains <strong>/<code>; render via set:html.
      callout:
        '<strong>Both love git; we split it differently.</strong> OpenCommit is a battle-tested wrapper around the LLM — one message for your staged diff, emoji optional. aic is the only one here that goes below the file boundary: unstaged work becomes logical atomic commits, and `aic resolve` finishes merges you approve per file.',
      winsH2: 'Where aic pulls ahead',
      rivalH2: 'Where OpenCommit still wins',
      rivalLede:
        'OpenCommit earns its place: feature-rich, widely adopted, actively maintained. If these matter more than auto-batching, it is a fair pick:',
      tieTag: 'trade-off',
      verdict: {
        h2: 'The short version',
        // Contains <strong>/<code>; render via set:html.
        body: 'If unstaged work piles up and you want it split into clean, atomic commits — or you want merge conflicts resolved with per-file approval — choose <strong>aic</strong>. If you want a proven, hackathon-winning wrapper with GitMoji and a huge community, OpenCommit is an excellent tool.',
      },
      faq: {
        h2: 'FAQ',
        items: [
          {
            q: 'Is aic a good OpenCommit alternative?',
            a: 'If you want unstaged work split into logical commits — even within one file — and AI merge-conflict resolution, yes. OpenCommit stays the pick for a battle-tested wrapper with GitMoji and the largest community.',
          },
          {
            q: 'Does aic support GitMoji?',
            a: 'No — aic writes Conventional Commits only. OpenCommit offers configurable GitMoji (10 by default, the full spec with `--fgm`).',
          },
        ],
      },
      // Matrix + verdict point-list content, keyed by axis id (`OPENCOMMIT_COMPARISON.axes`).
      axes: {
        'auto-batch': {
          feature: 'Auto-batch unstaged work into multiple commits',
          aic: 'Yes — splits unstaged changes into logical atomic commits',
          rival: 'No — one message per staged diff',
          note: "aic's signature feature. OpenCommit writes one message for whatever you stage.",
        },
        'per-hunk': {
          feature: 'Split a single file across commits (per-hunk)',
          aic: 'Yes — routes each hunk to its own commit by intent',
          rival: 'No — file-granular at most',
          note: 'aic reads the diff at the hunk level; OpenCommit (like every tool in the roundup) treats a file as the atomic unit.',
        },
        resolve: {
          feature: 'Resolve merge conflicts',
          aic: 'Yes — `aic resolve` proposes a diff, asks per file',
          rival: 'No — commit messages only',
          note: 'OpenCommit has no conflict story — you still untangle merges by hand.',
        },
        runtime: {
          feature: 'Runtime & dependencies',
          aic: 'Rust binary — no Node.js',
          rival: 'Node.js — npm',
          note: 'aic is one static binary; OpenCommit runs through Node and npm.',
        },
        setup: {
          feature: 'Setup',
          aic: 'Interactive `aic setup` wizard',
          rival: '`oco config set` commands',
          note: 'aic walks you through provider → key → model; OpenCommit configures via CLI commands or `.env`.',
        },
        'provider-count': {
          feature: 'Provider reach',
          aic: '11 first-class + OpenAI-compatible',
          rival: 'Claude, GPT, and every other provider',
          note: 'Both are multi-provider. aic ships 11 first-class with sensible default models; OpenCommit configures any provider manually.',
        },
        emoji: {
          feature: 'GitMoji support',
          aic: 'No',
          rival: 'Yes — configurable, full spec with `--fgm`',
          note: 'OpenCommit decorates messages with GitMoji; aic is conventional-only by design.',
        },
        community: {
          feature: 'Community & adoption',
          aic: 'Early (~8★)',
          rival: '7,500★ · ~12k npm downloads/mo · hackathon winner',
          note: 'OpenCommit is far more established. If momentum matters most, it wins this row.',
        },
        activity: {
          feature: 'Project activity',
          aic: 'Weekly releases',
          rival: 'Active (pushed 2026-07)',
          note: 'Both are actively maintained — a tie.',
        },
        candidates: {
          feature: 'Multiple message candidates',
          aic: 'No',
          rival: 'No',
          note: 'Neither offers a pick-from-N menu — both draft one message.',
        },
      },
    },
    more: {
      h2: 'More comparisons',
      vsLabel: 'aic vs {name}',
      roundup: 'See aic among the best AI commit tools →',
      installCta: 'Install aic →',
    },
  },

  alt: {
    // Localized lead-in for the migration install step. The command itself
    // is sourced from PRIMARY_INSTALL_COMMAND (site.ts) and rendered as
    // <code> by AlternativePage — it is never typed in a locale file
    // (ADR-0006: install commands are technical reference, single-sourced).
    migrateLead: 'Install aic:',
    hub: {
      eyebrow: 'Alternatives',
      h1: 'AI commit tool alternatives — choose aic',
      lede: 'Every AI commit tool in this space writes one message for your staged diff. aic is the only one that goes below the file boundary: unstaged work becomes logical atomic commits, and <code>aic resolve</code> finishes merges you approve per file. Here is an honest look at when switching makes sense.',
      h2: 'The alternatives',
      items: [
        {
          id: 'aicommits',
          name: 'aicommits',
          line: 'The incumbent default — switch if you want auto-batching and conflict resolution, not just a message.',
        },
        {
          id: 'opencommit',
          name: 'OpenCommit',
          line: 'The hackathon-winning wrapper — switch if you want atomic history, not just GitMoji.',
        },
        {
          id: 'ai-commit',
          name: 'ai-commit',
          line: 'The Claude Code pick — switch if you want hunk-level splitting without Node.js.',
        },
        {
          id: 'llmc',
          name: 'llmc',
          line: 'The max-provider pick — switch if you want batching and resolve, not just a TUI.',
        },
        {
          id: 'git-ai',
          name: 'git-ai',
          line: 'The local-first assistant — switch if you want commits split below the file level.',
        },
      ],
    },
    aicommits: {
      eyebrow: 'Switch from aicommits',
      h1: 'aicommits alternative: aic',
      lede: 'aicommits is the established default — a proven tool for one message per staged diff. If your real problem is that work piles up unstaged and history gets muddy, aic is the alternative built for that: it splits your changes into logical atomic commits and resolves merge conflicts with per-file approval.',
      whyH: 'Why people switch from aicommits',
      why: 'aicommits writes one message for what you stage — but it cannot split a messy working tree into logical commits, and it cannot help you untangle a merge. Both leave you with mixed-concern commits and hand-resolved conflicts.',
      switchH: 'Switch to aic if…',
      shouldSwitch:
        '…your unstaged work piles up and you want it committed as clean, atomic, conventional commits — even within a single file — or you want AI-resolved merge conflicts without installing Node.js.',
      notH: 'Stay with aicommits if…',
      shouldNot:
        '…you rely on its `prepare-commit-msg` hook, want gitmoji or plain formats, need multiple message candidates, or just want the comfort of the biggest community.',
      migrateH: 'How to switch',
      migrate: [
        'Configure once: run `aic setup` — provider, key, and model in one wizard',
        'Commit: stage your work and run `aic`; aic batches unstaged work automatically',
      ],
    },
    opencommit: {
      eyebrow: 'Switch from OpenCommit',
      h1: 'OpenCommit alternative: aic',
      lede: 'OpenCommit is battle-tested and feature-rich — GitMoji, configurable descriptions, a huge community. But it writes one message for your staged diff. aic is the alternative for people whose problem is commit-history quality: hunk-level batching and AI conflict resolution in a dependency-free Rust binary.',
      whyH: 'Why people switch from OpenCommit',
      why: 'OpenCommit wraps the LLM well — but it works at file granularity. One file touched for three reasons still becomes one commit, and merge conflicts are still yours to resolve by hand.',
      switchH: 'Switch to aic if…',
      shouldSwitch:
        '…you want unstaged work split into logical atomic commits — even within one file — or merge conflicts resolved with per-file approval, without Node.js.',
      notH: 'Stay with OpenCommit if…',
      shouldNot:
        '…you want the proven, hackathon-winning wrapper with GitMoji and the largest community, and file-granular commits are fine for you.',
      migrateH: 'How to switch',
      migrate: [
        'Configure once: run `aic setup` — provider, key, and model in one wizard',
        'Commit: run `aic` on staged or unstaged work; nothing lands blind',
      ],
    },
    'ai-commit': {
      eyebrow: 'Switch from ai-commit',
      h1: 'ai-commit alternative: aic',
      lede: 'ai-commit writes Conventional Commits via any OpenAI-compatible endpoint or Claude Code — handy if you live in Claude Code. aic is the alternative for atomic history: hunk-level batching, conflict resolution, and a guided setup wizard, with no Node dependency.',
      whyH: 'Why people switch from ai-commit',
      why: 'ai-commit is file-granular and env-var configured: one message per staged diff, no splitting, no conflict help, and Node.js ≥ 22 required.',
      switchH: 'Switch to aic if…',
      shouldSwitch:
        '…you want unstaged work split into logical commits, merge conflicts resolved, and a guided setup wizard — no Node.js.',
      notH: 'Stay with ai-commit if…',
      shouldNot:
        '…you live in Claude Code, want Chinese-language commit messages (`-l zh`), or want emoji-flavored conventional commits.',
      migrateH: 'How to switch',
      migrate: [
        'Configure once: run `aic setup` — provider, key, and model in one wizard',
        'Commit: stage your work and run `aic`; aic batches unstaged work automatically',
      ],
    },
    llmc: {
      eyebrow: 'Switch from llmc',
      h1: 'llmc alternative: aic',
      lede: 'llmc is the max-provider pick — 13 backends, TOML prompts, a polished TUI. But it commits whatever you stage as one message. aic is the alternative for commit-history quality, and it is actively maintained.',
      whyH: 'Why people switch from llmc',
      why: 'llmc has been quiet since late 2025 with no GitHub releases, and like every tool here it is file-granular — no splitting, no conflict resolution.',
      switchH: 'Switch to aic if…',
      shouldSwitch:
        '…you want unstaged work committed as clean atomic conventional commits, AI-resolved conflicts, and an active project with a public changelog.',
      notH: 'Stay with llmc if…',
      shouldNot:
        '…you want the broadest provider menu (13), the prettiest TUI, and rich TOML prompt configuration.',
      migrateH: 'How to switch',
      migrate: [
        'Configure once: run `aic setup` — provider, key, and model in one wizard',
        'Commit: run `aic` on staged or unstaged work; nothing lands blind',
      ],
    },
    'git-ai': {
      eyebrow: 'Switch from git-ai',
      h1: 'git-ai alternative: aic',
      lede: 'git-ai is a local-first Git assistant — commits, PR descriptions, zero-config Ollama. It is early (v0.1.3) and dormant since February 2026. aic is the alternative for atomic history, and it ships weekly.',
      whyH: 'Why people switch from git-ai',
      why: 'git-ai is file-granular and has not been updated in months — aside from its PR-description feature, it does not split or resolve.',
      switchH: 'Switch to aic if…',
      shouldSwitch:
        '…you want unstaged work split into logical commits and merge conflicts resolved — from a project that ships weekly.',
      notH: 'Stay with git-ai if…',
      shouldNot: '…you want PR descriptions and a free, offline, zero-config default.',
      migrateH: 'How to switch',
      migrate: [
        'Configure once: run `aic setup` — provider, key, and model in one wizard',
        'Commit: stage your work and run `aic`; aic batches unstaged work automatically',
      ],
    },
  },

  deepseek: {
    eyebrow: 'Capability · DeepSeek',
    h1: 'AI commit messages with DeepSeek',
    lede: 'DeepSeek is a first-class provider in <b>aic</b>: pick it in the setup wizard, paste your key, and aic reads your diff and writes a conventional commit — one command. Your key never leaves your machine, and everything aic does — auto-batching, <code>aic resolve</code>, no Node.js — works with DeepSeek too.',
    whyH: 'Why DeepSeek + aic',
    why: [
      'First-class provider — no OpenRouter hop or custom endpoint needed',
      'Fast and cheap — aic defaults to a lightweight model tuned for commit messages',
      'No middleman — calls go straight to DeepSeek from your machine',
      'Full feature parity — auto-batching and `aic resolve` work on every provider',
    ],
    setupH: 'Set it up in one wizard',
    setup: [
      'Run <code>aic setup</code>',
      'Pick DeepSeek as your provider',
      'Paste your <code>DEEPSEEK_API_KEY</code> and choose a model',
      'Commit — stage your work and run <code>aic</code>',
    ],
    envH: 'Or configure via environment',
    env: 'Set <code>LLM_BACKEND=deepseek</code> and <code>DEEPSEEK_API_KEY</code>, then run aic. Configuration resolves environment → config file → defaults.',
    modelH: 'Default model',
    model:
      'aic ships a sensible DeepSeek default (<code>deepseek-v4-flash</code>) — fast and cheap for the commit-message workload. Override anytime with <code>LLM_MODEL</code>.',
    faq: {
      h2: 'FAQ',
      items: [
        {
          q: 'Does aic support DeepSeek?',
          a: 'Yes — DeepSeek is a first-class provider in aic, alongside OpenAI, Anthropic, Gemini, and seven more.',
        },
        {
          q: 'Which DeepSeek model does aic use?',
          a: 'aic defaults to deepseek-v4-flash — a fast, low-cost model suited to commit messages. Override anytime with LLM_MODEL.',
        },
        {
          q: 'Is my DeepSeek key safe?',
          a: 'Yes — aic calls DeepSeek directly from your machine. Your key never leaves it, and there is no middleman or per-commit markup.',
        },
      ],
    },
  },

  roundup: {
    eyebrow: 'Roundup · best AI commit tools',
    h1: 'The best AI commit message tools',
    // Contains <code>; render via set:html.
    lede: 'There\'s no shortage of CLIs that will read your <code>git diff</code> and draft a commit message. The honest answer to "which is best?" is "depends what you want." Here\'s a fair, feature-verified survey of the field — and a quick way to pick.',
    // Contains <strong>/<code>; render via set:html.
    callout:
      "<strong>Disclosure.</strong> <code>aic</code> is our tool, so it's on this list. We've kept every one-liner honest about what each tool is genuinely best at — including where the others beat us.",
    choose: {
      h2: 'How to choose',
      items: [
        {
          need: 'You want unstaged work split into logical commits — even within a single file',
          pick: '→ aic',
        },
        {
          need: 'You want merge conflicts resolved for you, not just a message afterward',
          pick: '→ aic',
        },
        { need: 'You want the popular, well-supported default', pick: '→ aicommits' },
        {
          need: 'You want the hackathon-winning, feature-rich wrapper with configurable GitMoji',
          pick: '→ OpenCommit',
        },
        { need: 'You already live in Claude Code', pick: '→ ai-commit' },
        {
          need: 'You want free, local, offline — and PR descriptions too',
          pick: '→ git-ai',
        },
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
      note: 'Not exhaustive — the space is crowded (add <code>commitizen</code>, <code>cz-git</code>, and a dozen more). These six cover the distinct approaches: auto-batching, the incumbent, Claude-Code-native, local-first, max-provider, and the hackathon-winning feature-rich CLI.',
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
      opencommit: {
        strength:
          'The GitHub 2023 hackathon winner — a feature-rich wrapper with configurable GitMoji, local Ollama/llama.cpp, and a huge community (7.5k★, ~12k npm downloads/mo).',
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
