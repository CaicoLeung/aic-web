/**
 * ZH (Simplified Chinese) message module.
 *
 * STATUS: machine-produced first draft, PENDING HUMAN REVIEW before it
 * ships (CONTEXT.md → Localized copy). Once reviewed, remove this notice.
 *
 * Conventions preserved from `en.ts`:
 *  - light inline HTML (`<b>`/`<em>`/`<code>`/`<strong>`/`<span>`) kept
 *    verbatim — rendered via `set:html`;
 *  - `{param}` placeholders kept verbatim;
 *  - literal commands, brand names, and the locale-invariant how-step
 *    command-details (`brew install aic`, `provider · key · model`,
 *    `type:  aic`) stay as their EN string — commands don't translate.
 */
import type { Messages } from './types';

export const messages: Messages = {
  meta: {
    title: 'aic — AI 驱动的 git 提交',
    description:
      'aic 读取你的 diff，起草一条约定式提交并提交——只需一条命令。没有暂存内容？它会自动把你的改动归组为多个逻辑提交。',
    resolve: {
      title: 'aic resolve — AI 合并冲突解决器',
      description:
        'aic 读取每一个冲突文件，提出干净的解决方案，并把 diff 给你看。你逐文件确认——没有你的点头什么都不落地——然后它替你完成合并。一款绝不会盲目改动你的工作的 AI 合并冲突解决器。',
    },
    roundup: {
      title: '{year} 年最佳 AI 提交信息工具',
      description:
        '一份诚实的 AI 版 git 提交工具盘点——aic、aicommits、ai-commit、git-ai 和 llmc——以及一份公平、逐项核实过的选购建议。',
    },
    vs: {
      aicommits: {
        title: 'aic 对比 aicommits — AI 提交工具对比',
        description:
          'aicommits 的诚实替代方案：aic 自动把未暂存改动拆成原子提交、解决合并冲突，且无需 Node.js。逐特性对比。',
      },
      'ai-commit': {
        title: 'aic 对比 ai-commit — AI 提交工具对比',
        description:
          '寻找 ai-commit 的替代方案？aic 把未暂存工作拆成原子提交、解决合并冲突——无需 Node.js，也无需 Claude Code。',
      },
      llmc: {
        title: 'aic 对比 llmc — AI 提交工具对比',
        description:
          'llmc 的替代方案？aic 以 hunk 级分批和 AI 冲突解决胜过文件粒度的提交工具——单文件 Rust 二进制，零依赖。',
      },
      'git-ai': {
        title: 'aic 对比 git-ai — AI 提交工具对比',
        description:
          'git-ai 是本地优先的 Git 助手——提交信息、PR 描述，以及免费离线的 Ollama。在 hunk 级分批、冲突解决和活跃度上，aic 更胜一筹。',
      },
      opencommit: {
        title: 'aic 对比 OpenCommit — AI 提交工具对比',
        description:
          'OpenCommit 是 GitHub 2023 黑客松冠军、功能丰富的 GPT 封装工具。在原子化历史至关重要的地方，aic 更胜一筹：hunk 级分批和 AI 冲突解决，且无需 Node.js。',
      },
    },
    alt: {
      hub: {
        title: 'AI 提交工具替代方案——选择 aic',
        description:
          '为什么从 aicommits、OpenCommit、ai-commit、llmc 或 git-ai 切换到 aic?hunk 级分批、AI 冲突解决、无需 Node.js。',
      },
      aicommits: {
        title: 'aicommits 替代方案——aic：自动分批、原子提交',
        description:
          '寻找 aicommits 的替代方案?aic 自动把未暂存改动拆成原子提交并解决合并冲突——无需 Node.js。',
      },
      opencommit: {
        title: 'OpenCommit 替代方案——aic：原子化历史,而非仅仅一条信息',
        description:
          'OpenCommit 是黑客松冠军 GPT 封装。如果你想要 hunk 级分批和 AI 冲突解决——无需 Node.js,aic 就是替代方案。',
      },
      'ai-commit': {
        title: 'ai-commit 替代方案——aic：无需 Node 的 hunk 级提交',
        description:
          'ai-commit 是 Claude Code 之选。如果你想把未暂存工作拆成原子提交并解决冲突,aic 就是替代方案。',
      },
      llmc: {
        title: 'llmc 替代方案——aic：分批 + 解决',
        description:
          'llmc 提供 13 个供应商和一个 TUI。如果你想把未暂存工作拆成原子提交并解决冲突——以 Rust 二进制的方式,aic 就是替代方案。',
      },
      'git-ai': {
        title: 'git-ai 替代方案——aic：文件级别以下的提交',
        description:
          'git-ai 是本地优先助手。如果你想要 hunk 级分批和 AI 冲突解决,aic 就是替代方案。',
      },
    },
    deepseek: {
      title: 'aic + DeepSeek — 用 DeepSeek 写提交信息',
      description:
        '用 DeepSeek 让 aic 写约定式提交:一流供应商、一个配置向导、密钥永不离开你的机器。无需 Node.js。',
    },
    agents: {
      title: 'aic + 你的 AI 编码 agent — Claude Code、Codex、Pi、OpenCode',
      description:
        'aic 可以委托给你的本地 AI 编码 agent —— Claude Code、Codex、Pi 或 OpenCode —— 在 headless 模式下运行。无需 API 密钥，无需中间人：你的 agent 读取 diff 并写出提交，复用它自己的模型。',
    },
    changelog: {
      title: 'aic 更新日志 — 每一个版本',
      description:
        '按时间顺序列出 aic 的每一次发布——功能、修复与发布说明。最新：v{version}。',
    },
  },

  topbar: {
    brandTag: 'AI 驱动的 git 提交',
    versionTitle: '最新版本：v{version} — 查看更新日志',
    github: 'GitHub',
    nav: {
      how: '原理',
      batching: '批处理',
      providers: '供应商',
      install: '安装',
    },
    featureChip: {
      label: '新',
      text: '带上你的 agent',
    },
    switcher: {
      label: '语言',
    },
  },

  contentHeader: {
    versionTitle: '最新版本：v{version} — 查看更新日志',
    home: '首页',
    resolve: '解决冲突',
    roundup: '工具榜单',
    compare: '对比',
    changelog: '更新日志',
    agents: 'agents',
    github: 'GitHub',
  },

  copyButton: {
    copyAria: '复制 {label}',
    copiedAria: '已复制 {label}',
    copied: '已复制 ✓',
  },

  hero: {
    eyebrow: '01 — 介绍',
    h1: {
      stopWriting: '别再写',
      commit: '提交',
      messages: '信息。',
      stopUntangling: '别再费力解开',
      merge: '合并',
      conflicts: '冲突。',
    },
    ledeBefore:
      '你的历史不该满是 <em>"fix stuff"</em> 和 <em>"WIP"</em>。<b>aic</b> 读取你的 diff、写出真正的约定式提交并交付——一条命令。合并进行中？它会',
    ledeLink: '提出干净的解决方案',
    ledeAfter:
      '——针对每个冲突文件，而且在你批准 diff 之前什么都不会落地。没有暂存？它会把一个文件拆成多个聚焦的提交，自动完成。',
    ctaHint: '然后运行 <code>{cmd}</code>',
    /** Above-the-fold credibility line. `{version}` substituted at render. */
    trust: '★ {stars} · MIT 协议 · 无需 Node.js · 每周发布',
    /** 主动作命名(CRO)。 */
    ctaLabel: '安装 aic——一条命令',
    /** CTA 下方平台微文案(CRO)。 */
    platformNote: 'Homebrew（macOS · Linux）——Windows 和 Unix 安装器在下方 ↓',
  },

  how: {
    eyebrow: '02 — 工作原理',
    h2: '安装一次 → 输入 <code>{cmd}</code> → 干净提交。',
    steps: {
      '01': { label: '安装', detail: 'brew install aic' },
      '02': { label: '配置', detail: 'provider · key · model — 或你的本地 agent' },
      '03': { label: '运行', detail: 'type:  aic' },
      '04': { label: '读取', detail: '读取 diff' },
      '05': { label: '起草', detail: '写好提交信息' },
      '06': { label: '提交', detail: '搞定  ✓' },
    },
  },

  commands: {
    aic: { description: '提交已暂存的改动 · 或为未暂存内容做批处理规划' },
    'aic-setup': { description: '一次性向导 —— 供应商 → 密钥 → 模型' },
    'aic-list': { description: '显示已解析的配置 + 脱敏的 API 密钥' },
  },

  batching: {
    eyebrow: '03 — 自动批处理',
    kicker: '没有暂存内容？',
    h2: '一个文件，多个提交',
    lede: 'aic 在 hunk 层级读取你的 diff——这样一个文件也能拆成多个聚焦的提交，每个只讲一件事。没有暂存、一条命令、一份干净的历史——即使一个文件涉及三处不同的改动。',
    aside: '按 hunk 批处理 ✦',
    swatchLabel: '17 种提交类型 · WCAG 安全配色',
    stripLabel: '推理 · 按 hunk',
    shipBadge: '随 v{version} 发布',
    cmpLink: '查看 aic 在最佳 AI 提交工具中的位置 →',
  },

  providers: {
    eyebrow: '04 — 供应商与隐私',
    h2: '你的密钥 · 你的模型',
    lede: '自带供应商。aic 直连你的 LLM——没有中间人，没有按提交计费，没有代理。你的 API 密钥永不离开你的机器。',
    aside: '无中间人 · 无按提交计费 · 调用直接从你的机器发出',
    link: '阅读供应商代码 →',
    yourModel: '（你的模型）',
    profilesHint: '保存配置 · 用 <code>aic use</code> 切换',
  },

  install: {
    eyebrow: '05 — 安装',
    h2: '一行安装 aic。',
    // CRO 信任条——在安装方式前回答主要顾虑。
    trust: [
      '免费 & MIT',
      '无需 Node.js',
      '12 个供应商',
      '兼容你的 pre-commit 钩子',
      '密钥永不离机',
    ],
    postinstall:
      '<span class="arrow" aria-hidden="true">→</span> 然后运行 <code>{cmd}</code> 来选择供应商、密钥和模型。',
    methods: {
      brew: {
        label: 'Homebrew',
        note: '用 `brew upgrade aic` 更新。Homebrew 安装会被自动识别，因此 `aic update` 会引导你转用 brew。',
      },
      unix: {
        label: '安装器 · macOS / Linux',
        note: '从 GitHub Releases 下载最新发布版本的可执行文件。',
      },
      windows: {
        label: '安装器 · Windows',
        note: 'PowerShell。下载最新发布版本的可执行文件。',
      },
    },
  },

  footer: {
    eyebrow: '今天就交出更干净的提交',
    h2: '别再手写提交信息了。',
    star: '★ 在 GitHub 上加星',
    nav: {
      resolve: '解决合并冲突',
      roundup: '最佳 AI 提交工具',
      compare: 'aic 对比 aicommits',
      alternatives: '替代方案',
      deepseek: 'DeepSeek',
      changelog: '更新日志',
      agents: 'agents',
    },
    meta: 'MIT 协议 · 基于 Astro + Tailwind + GSAP 构建',
  },

  resolve: {
    eyebrow: '能力 · 合并冲突',
    h1: {
      main: '解决合并冲突。',
      sub: ['无需', '', '手动合并。'],
    },
    lede: '<b>aic</b> 读取每一个冲突文件，提出干净的解决方案，并把 diff 给你看。你逐文件确认——没有你的点头什么都不落地——然后它替你完成合并。',
    ctaHint: '然后运行 <code>aic resolve</code>',
    workflow: {
      h2: 'aic 如何解决一次冲突',
      lede: 'resolve 是一套流程，不是魔法棒。aic 遍历每个冲突文件、提出修复，并在每一步停下来等你确认。',
      steps: [
        {
          h: '检测',
          n: '<code>aic resolve</code> 读取仓库状态。如果你正处于合并中且有未合并的文件，它会列出来。',
        },
        {
          h: '逐文件解决',
          n: '对每个文件，aic 把冲突内容发给你的模型，取回一份不含冲突标记的版本。如果仍有标记漏网，它会重试一次。',
        },
        {
          h: '审查 diff',
          n: 'aic 把所有提议的解决汇总成一个 diff——标记被移除、两边被调和——让你看清究竟会改什么。',
        },
        {
          h: '逐文件确认',
          n: '每个文件都有自己的 <code>apply?</code> 提示。回答 yes，aic 就写入解决方案并暂存；回答 no，那个文件原封不动。',
        },
        {
          h: '完成',
          n: '当没有未合并的内容时，aic 替你执行合并的 <code>--continue</code>。流程中被卡住的点会带着清晰的交接说明上报，而不是一个莫名其妙的计数。',
        },
      ],
    },
    twoWays: {
      h2: '两种入口',
      lede: '你不必记命令。有一个显式的动词，还有一个在你忘记时接住你的守卫。',
      points: [
        {
          h: '<code>aic resolve</code>',
          n: '显式的动词。只要你的仓库正处于合并中，随时运行它，aic 会从上面的检测步骤接手。',
        },
        {
          h: '提交守卫',
          n: '在一个有冲突的仓库里运行普通的 <code>aic</code>，它会察觉、提议交接给 resolve，而更深一层的守卫会拦下任何仍带有冲突标记的提交。友好的前门，加上一道安全网。',
        },
      ],
    },
    review: {
      h2: '没有你的点头，什么都不落地',
      lede: '核心就一句话：aic 提议，你拍板。它绝不写入一个你没看过、没批准的解决方案。',
      callout:
        '<strong>落地前先审查。</strong>每一个提议的解决方案在触碰磁盘<em>之前</em>都以 diff 形式呈现。每个文件是一道独立的 <code>y/n</code>——信任的就批准，不信任的就驳回，被驳回的文件会原封不动地留在你离开时的样子。',
    },
    limits: {
      h2: 'aic 留给你的部分',
      lede: '先把丑话说前面，让你清楚工具到哪儿结束、你从哪儿接手。这些是 v1 的限制。',
      points: [
        {
          h: '仅限合并冲突',
          n: 'aic 处理的是有冲突的<em>合并</em>状态。进行中的 rebase 或 <code>am</code> 在 v1 中会被检测到并拒绝——先完成或中止它，再来 resolve。',
        },
        {
          h: '有些冲突无法自动解决',
          n: '二进制文件、超大文件，以及删除/修改类冲突会被跳过并给出原因——aic 会指给你看，让你手动解决。',
        },
        {
          h: '完成步骤是全有或全无',
          n: '无论怎样 <code>--continue</code> 都会卡在任何未合并的路径上，所以哪怕只剩一个阻塞点，完成步骤也走不下去。aic 的交接说明会确切告诉你还剩什么。',
        },
      ],
    },
    verdict: {
      h2: '简而言之',
      body: '<code>aic resolve</code> 读取你的冲突文件，提出你确实能审查的解决方案，只写入你批准的部分——然后完成合并。它和 aic 用于提交的那套「读 diff、起草修复、交付」循环是同一个，只是指向了 git 里最难看的地方。',
      releaseNotes: 'v0.3.0 发布说明',
    },
  },

  agents: {
    eyebrow: '能力 · CLI-agent 后端',
    h1: '带上你的 agent，而不是你的密钥。',
    lede: '<b>aic</b> 可以委托给你的本地 AI 编码 agent —— Claude Code、Codex、Pi 或 OpenCode —— 在 headless 模式下运行。无需 API 密钥，无需默认模型，无需中间人：你的 agent 读取 diff 并写出提交，复用它自己的模型和授权。',
    ctaHint: '然后运行 <code>aic setup</code> → 选择 agent 后端',
    how: {
      h2: '工作原理',
      lede: '同一套循环，换一个后端。aic 不再调用 LLM API，而是以 print 模式 shell 调用你的 agent，把 diff 传过去，让它做最擅长的事 —— 推理这次改动并写出提交信息。',
      steps: [
        {
          h: '选择 agent 后端',
          n: '运行 <code>aic setup</code>，选一个 CLI agent 而不是 API 供应商。aic 会记住它。',
        },
        {
          h: '委托，而非调用',
          n: '当你运行 <code>aic</code> 时，它会 shell 调用你的 agent —— 例如 <code>claude -p</code> —— 把 diff 和 prompt 传过去。推理由 agent 完成。',
        },
        {
          h: '同样的提交输出',
          n: '你的 agent 返回提交信息。aic 把它写进你的 git 历史 —— 批处理、约定式、彩色，一如既往。',
        },
      ],
    },
    presets: {
      h2: '四个 agent，一个后端',
      lede: '开箱即用四个预设。每个复用各自的授权 —— 只要 agent 已经装好，就无需额外配置。',
      items: [
        {
          h: 'Claude Code',
          n: '通过 <code>thinking_delta</code> 实时流式输出推理过程。你看 agent 思考，然后提交。',
        },
        { h: 'Codex', n: '在只读沙盒中静默运行，完成后返回提交信息。' },
        { h: 'Pi', n: '实时流式输出推理过程，和 Claude Code 一样。' },
        { h: 'OpenCode', n: '静默运行，复用你已有的供应商密钥（例如 Cursor OAuth）。' },
      ],
    },
    eitherOr: {
      h2: '切换你的后端 —— 不要两个都跑',
      lede: '<code>backend_kind</code> 是一个判别字段：每次运行只有一个后端生效。API 路径（provider · key · model）和 agent 路径（你的本地 CLI）是二选一，而不是叠加。',
      body: '再运行一次 <code>aic setup</code> 即可切换。aic 只保存一份配置；你最后一次选的后端就是它使用的那个。',
    },
    custom: {
      h2: '或者任意自定义 agent',
      body: '在这四个预设之外，你可以把任意 CLI 命令配置为你的 agent。只要它从 stdin 接收 prompt 并向 stdout 输出，aic 就能驱动它。',
    },
    speed: {
      h2: '为什么这么快',
      lede: '没有 API 跳转，没有新增授权。你的 agent 早已经把模型加载好并完成了认证 —— aic 只是把 diff 传过去，再把提交信息读回来。',
      body: '速度来自跳过了配置步骤，而不是来自更快的模型。你复用的是 agent 的会话和凭据。',
    },
    verdict: {
      h2: '简而言之',
      body: '<code>aic</code> + 你的编码 agent：agent 负责推理，aic 负责提交。无需 API 密钥，无需中间人，无需挑选模型 —— 输出的依然是 aic 一贯产出的那种批处理、约定式、彩色的历史。',
      releaseNotes: 'v0.5.0 发布说明',
    },
  },

  vs: {
    // Shared feature-matrix column labels — identical for every rival,
    // so defined once here rather than copied into each rival block.
    matrix: {
      heading: '逐特性对比',
      capability: '能力',
      aic: 'aic',
    },
    aicommits: {
      eyebrow: '对比 · aicommits 的替代方案',
      h1: 'aic 对比 aicommits',
      ledeAfter:
        ' 是 AI 提交信息工具里根深蒂固的默认选择——装机量、生态、先发优势都在它那边。本页无意粉饰这一点。它要准确告诉你 <strong>aic</strong> 何时更值得选——以及你何时就该继续用 aicommits。',
      callout:
        '<strong>巧了。</strong>aicommits 自己的 README 就建议，如果名字太长，可以把它别名成 <code>aic</code>。我们把 <code>aic</code> 作为独立的东西发布了——而且它在 hunk 层级把你的未暂存改动拆成多个逻辑提交，所以哪怕一个文件也能变成好几个。',
      winsH2: 'aic 领先的地方',
      rivalH2: 'aicommits 仍然占优的地方',
      rivalLede:
        '我们不会假装 aic 在所有方面都胜过这个流行工具。它没有。如果下面这些对你来说比自动批处理更重要，那 aicommits 就是更对的选择：',
      tieTag: '权衡',
      verdict: {
        h2: '简而言之',
        body: '如果你未暂存的改动越堆越多、想拆成干净合乎逻辑的提交——或者你想要 Claude、Gemini、DeepSeek 作为一等供应商且不依赖 Node.js——那就换到 <strong>aic</strong>。如果你想要 <code>git commit</code> 钩子、gitmoji 提交、多个候选信息可选，或者只是图个流行选择的踏实感，那 aicommits 仍然是很好的工具。',
      },
      axes: {
        'auto-batch': {
          feature: '把未暂存改动自动批处理成多个提交',
          aic: '是 —— 把未暂存改动拆成合乎逻辑的原子提交',
          rival: '否 —— 每个已暂存 diff 一条信息',
          note: 'aic 的招牌功能。aicommits 的 `--generate N` 是为一次提交生成 N 条候选信息，而不是 N 个提交。',
        },
        'per-hunk': {
          feature: '把单个文件跨多个提交拆分（按 hunk）',
          aic: '是 —— 按意图把每个 hunk 路由到各自的提交',
          rival: '否 —— 最多到文件粒度',
          note: '随 aic v0.3.5 发布。aicommits（以及 roundup 里的每个工具）最多只在文件边界拆分；aic 在 hunk 层级读 diff，所以一个文件涉及三件事就会变成三个聚焦的提交。',
        },
        resolve: {
          feature: '解决合并冲突',
          aic: '是 —— `aic resolve` 提出 diff，逐文件征询',
          rival: '否 —— 只有提交信息',
          note: 'aic 的第二个招牌流程（`v0.3.0`）。aicommits 没有任何冲突解决方案——它只在你手动合并完之后写那条信息。',
        },
        anthropic: {
          feature: '一等支持 Anthropic · Gemini · DeepSeek',
          aic: '是 —— 原生供应商',
          rival: '仅通过 OpenRouter / 自定义端点',
          note: 'aicommits 只能间接到达这些模型；aic 把它们作为一等供应商发布，并配有合理的默认模型。',
        },
        runtime: {
          feature: '运行时与依赖',
          aic: 'Rust 可执行文件 —— 无需 Node.js',
          rival: 'Node.js v22+ — npm',
          note: 'aic 是一个静态可执行文件——没有 `node_modules`、传递依赖树，也不会在你切换 Node 版本时弄坏全局安装。（Rust 更快的冷启动也有帮助，尽管无论哪种情况 LLM 调用都是耗时大头。）只有当 Node.js 已经在你路径里时，aicommits 才称得上无摩擦。',
        },
        reach: {
          feature: '供应商覆盖',
          aic: '11 个一等 + OpenAI 兼容',
          rival: '8 + OpenRouter/自定义（任意模型）',
          note: '两者都能通过 OpenRouter 到达任意模型，但 aic 现在发布的一等供应商更多——包括 xAI、Together、Perplexity、Mistral——外加一个面向 LM Studio、vLLM 和网关的 OpenAI 兼容逃生通道。',
        },
        formats: {
          feature: '提交信息格式',
          aic: 'Conventional Commits',
          rival: '普通 · 约定式 · gitmoji',
          note: 'aic 出于设计只支持约定式；aicommits 让你自选，包括一种无结构的普通模式。',
        },
        hook: {
          feature: 'Git 钩子集成',
          aic: '否',
          rival: '是 —— prepare-commit-msg 钩子',
          note: 'aicommits 通过一个钩子接入你常规的 `git commit` 流程；aic 则是显式运行。',
        },
        candidates: {
          feature: '多个提交信息候选',
          aic: '否',
          rival: '是 —— `--generate N`',
          note: 'aicommits 可以在提交前提供多条信息供你挑选。',
        },
        prompt: {
          feature: '提示词与语言控制',
          aic: '通过环境变量设系统提示词',
          rival: '`--prompt`、locale、max-length',
          note: 'aicommits 提供的可调项更丰富。aic 支持 `AIC_SYSTEM_PROMPT` 覆盖，但界面选项更少。',
        },
        popularity: {
          feature: '人气与生态',
          aic: '新、小',
          rival: '根深蒂固的先发者',
          note: 'aicommits 是那个知名度更高、社区更大的已知量。如果势头对你最重要，就继续用它。',
        },
      },
      faq: {
        h2: '常见问题',
        items: [
          {
            q: 'aic 是 aicommits 的好替代方案吗？',
            a: '如果你想把未暂存的改动拆成逻辑提交——甚至在一个文件内——并希望 AI 解决合并冲突，那么是的。如果你依赖 git 钩子、gitmoji 提交或多条候选消息，aicommits 仍然是合适的选择。',
          },
          {
            q: 'aic 像 aicommits 一样需要 Node.js 吗？',
            a: '不需要。aic 是单个 Rust 二进制——没有 node_modules、没有 npm 全局安装、没有 Node 版本兼容问题。',
          },
        ],
      },
    },
    'ai-commit': {
      eyebrow: '对比 · ai-commit 替代方案',
      h1: 'aic 对比 ai-commit',
      // 链接包裹对手名称于开头；这是尾部（含 <strong>；set:html 渲染）。
      ledeAfter:
        ' 是 Claude Code 原生的 AI 提交信息工具——它能读取你的源文件获取上下文，并且按需生成中文或英文信息。这份对比会保持公平：当 ai-commit 的细分优势成立时，我们会如实说明。<strong>aic</strong> 在原子化历史至关重要的地方胜出：hunk 级分批和 AI 冲突解决，且无需依赖 Node.js。',
      // 含 <strong>/<code>；set:html 渲染。
      callout:
        '<strong>两种不同的押注。</strong> ai-commit 押注 Claude Code 作为上下文引擎；aic 押注 diff 本身。两者都免费。只有 aic 能把未暂存的改动拆到文件边界以下、形成逻辑提交——还能解决合并冲突。',
      winsH2: 'aic 领先之处',
      rivalH2: 'ai-commit 仍然占优之处',
      rivalLede:
        'ai-commit 确实在几件事上做得更好。如果它们对你比自动分批更重要，选它也是合理的：',
      tieTag: '各有利弊',
      verdict: {
        h2: '一句话总结',
        // 含 <strong>/<code>；set:html 渲染。
        body: '如果你的未暂存工作堆积如山、希望拆成干净、原子的提交——或者希望合并冲突能逐文件审批地解决——选 <strong>aic</strong>。如果你常驻 Claude Code、想要中文提交信息、或者喜欢 emoji 风格的约定式提交，ai-commit 也是一个扎实、诚实的选择。',
      },
      // 矩阵与结论点列表内容，按 axis id 键控（`AI_COMMIT_COMPARISON.axes`）。
      axes: {
        'auto-batch': {
          feature: '把未暂存改动自动分批成多个提交',
          aic: '是——把未暂存改动拆成逻辑原子提交',
          rival: '否——每个暂存的 diff 只生成一条信息',
          note: 'aic 的招牌功能。ai-commit 只为你暂存的内容写一条信息。',
        },
        'per-hunk': {
          feature: '在单个文件内跨提交拆分（per-hunk）',
          aic: '是——按意图把每个 hunk 归入自己的提交',
          rival: '否——最多文件粒度',
          note: 'aic 在 hunk 级别读取 diff；ai-commit（和榜单里所有工具一样）把文件当作原子单位。',
        },
        resolve: {
          feature: '解决合并冲突',
          aic: '是——`aic resolve` 提出 diff，逐文件确认',
          rival: '否——只写提交信息',
          note: 'ai-commit 没有冲突处理能力——你仍然要手动解开合并。',
        },
        'claude-context': {
          feature: 'Claude Code 上下文',
          aic: '否',
          rival: '是——读取源文件获得更丰富的上下文',
          note: 'ai-commit 的招牌优势：当你已经在用 Claude Code 时，它可以看得比 diff 更远。',
        },
        'provider-reach': {
          feature: '供应商覆盖',
          aic: '11 个一流供应商 + OpenAI 兼容',
          rival: '任意 OpenAI 兼容端点 + Claude Code',
          note: '两者都很开放。aic 提供更多带合理默认模型的一流供应商；ai-commit 可接任意 OpenAI 兼容端点以及 Claude Code。',
        },
        runtime: {
          feature: '运行时与依赖',
          aic: 'Rust 二进制——无需 Node.js',
          rival: 'Node.js ≥ 22.19——Homebrew / curl',
          note: 'aic 是单个静态二进制；ai-commit 需要 Node 在你的 PATH 里（它的 Homebrew tap 也会拉 Node）。',
        },
        windows: {
          feature: 'Windows 支持',
          aic: '是——PowerShell 安装器，CI 测试通过',
          rival: '否——仅 macOS/Linux',
          note: 'ai-commit 通过 Homebrew/curl 安装；aic 提供原生 Windows 安装器。',
        },
        language: {
          feature: '提交信息语言',
          aic: '英文（网站支持 4 种语言）',
          rival: '是——`-l en` / `-l zh`',
          note: 'ai-commit 可按需生成中文信息；aic 的 CLI 目前仅英文。',
        },
        emoji: {
          feature: '信息中的 emoji',
          aic: '否',
          rival: '是——`--emoji`',
          note: '约定式提交是 aic 的唯一格式；ai-commit 可选地添加 emoji。',
        },
        candidates: {
          feature: '多条候选信息',
          aic: '否',
          rival: '否',
          note: '两者都没有从 N 条中挑选的菜单——都只起草一条。',
        },
        popularity: {
          feature: '社区规模',
          aic: '早期（约 8★）',
          rival: '早期（约 8★）',
          note: '两者都很新。ai-commit 的双语文档吸引中文用户；aic 提供 4 种语言。',
        },
      },
      faq: {
        h2: '常见问题',
        items: [
          {
            q: 'aic 是 ai-commit 的好替代方案吗？',
            a: '如果你想要 hunk 级自动分批和合并冲突解决，是的。如果你常驻 Claude Code 或需要中文提交信息，ai-commit 依然是更合适的选择。',
          },
          {
            q: 'aic 支持 Claude Code 吗？',
            a: 'aic 没有 Claude Code 集成——它直接调用你的 LLM 供应商，也不需要 Node.js。需要 Claude Code 上下文时，ai-commit 是细分选择。',
          },
        ],
      },
    },
    llmc: {
      eyebrow: '对比 · llmc 替代方案',
      h1: 'aic 对比 llmc',
      // 链接包裹对手名称于开头；这是尾部（含 <strong>；set:html 渲染）。
      ledeAfter:
        ' 是供应商最多的选择——13 个 LLM 后端、TOML 提示词和精美的终端界面。它是一款有真实优势的成熟工具。这份对比会保持公平：打成平手的地方，我们如实说平手。<strong>aic</strong> 胜出的地方——hunk 级分批和合并冲突解决、无需依赖 Node.js——正是切换的理由。',
      // 含 <strong>/<code>；set:html 渲染。
      callout:
        '<strong>同样的规范，不同的侧重。</strong> 两者都写约定式提交。llmc 把供应商选择和终端观感拉满；aic 把提交历史质量拉满——一个文件可以变成多个聚焦的提交，`aic resolve` 能完成你逐文件审批的合并。',
      winsH2: 'aic 领先之处',
      rivalH2: 'llmc 仍然占优之处',
      rivalLede:
        'llmc 赢得两项诚实的让步——供应商数量和终端观感。如果它们比原子化历史更重要，选它是公平的：',
      tieTag: '各有利弊',
      verdict: {
        h2: '一句话总结',
        // 含 <strong>/<code>；set:html 渲染。
        body: '如果未暂存的改动堆积成山、希望它们被提交成干净、原子、约定的提交——或者希望用 AI 解决合并冲突——选 <strong>aic</strong>。如果你想要最全的供应商菜单和最漂亮的终端输出，llmc 是不错的工具——只要知道它是文件粒度的，而且自 2025 年底以来就没什么动静。',
      },
      // 矩阵与结论点列表内容，按 axis id 键控（`LLMC_COMPARISON.axes`）。
      axes: {
        'auto-batch': {
          feature: '把未暂存改动自动分批成多个提交',
          aic: '是——把未暂存改动拆成逻辑原子提交',
          rival: '否——每个暂存的 diff 只生成一条信息',
          note: 'aic 的招牌功能。llmc 把你暂存的内容作为一条信息提交。',
        },
        'per-hunk': {
          feature: '在单个文件内跨提交拆分（per-hunk）',
          aic: '是——按意图把每个 hunk 归入自己的提交',
          rival: '否——最多文件粒度',
          note: 'aic 在 hunk 级别读取 diff；llmc（和榜单里所有工具一样）把文件当作原子单位。',
        },
        resolve: {
          feature: '解决合并冲突',
          aic: '是——`aic resolve` 提出 diff，逐文件确认',
          rival: '否——只写提交信息',
          note: 'llmc 没有冲突处理能力——你仍然要手动解开合并。',
        },
        'provider-count': {
          feature: '供应商数量',
          aic: '12（11 个一流 + OpenAI 兼容）',
          rival: '13',
          note: 'llmc 的菜单里多一个供应商。aic 用一流 Anthropic/Gemini/DeepSeek 和 OpenAI 兼容逃生舱来回应。',
        },
        tui: {
          feature: '终端体验',
          aic: '清晰、快速的行式输出',
          rival: '带进度计时器的精美 TUI',
          note: 'llmc 的界面是它的招牌——实时状态和计时器。aic 更看重速度和可脚本化。',
        },
        runtime: {
          feature: '运行时与依赖',
          aic: 'Rust 二进制——无需 Node.js',
          rival: 'Node.js——npx / npm',
          note: 'aic 是单个静态二进制；llmc 通过 Node 和 npx 运行。',
        },
        setup: {
          feature: '安装配置',
          aic: '交互式 `aic setup` 向导',
          rival: '可选的 `llmc init`（TOML 配置）',
          note: 'aic 引导你完成 供应商 → 密钥 → 模型；llmc 默认值合理，但配置基于文件。',
        },
        'custom-prompt': {
          feature: '自定义提示词',
          aic: '环境变量覆盖（`AIC_SYSTEM_PROMPT`）',
          rival: '支持 `${diff}` 插值的 TOML 提示词',
          note: 'llmc 的提示词配置更丰富；aic 提供系统提示词环境变量覆盖。',
        },
        activity: {
          feature: '项目活跃度',
          aic: '每周发布',
          rival: '自 2025-10 起停更，无 GitHub 发布',
          note: 'aic 每周发布并有公开更新日志；llmc 已沉寂约 9 个月。',
        },
        candidates: {
          feature: '多条候选信息',
          aic: '否',
          rival: '否',
          note: '两者都没有从 N 条中挑选的菜单——都只起草一条。',
        },
        formats: {
          feature: '提交信息格式',
          aic: '约定式提交',
          rival: '约定式提交',
          note: '两者都是设计上的约定式专属——平手。',
        },
      },
      faq: {
        h2: '常见问题',
        items: [
          {
            q: 'aic 是 llmc 的好替代方案吗？',
            a: '如果你希望未暂存工作被提交成原子、约定的提交并解决合并冲突，是的。llmc 在供应商数量（13）和终端观感上仍占优。',
          },
          {
            q: 'llmc 还在维护吗？',
            a: 'llmc 自 2025 年底以来一直沉寂，且没有 GitHub 发布。aic 每周发布并带有公开更新日志。',
          },
        ],
      },
    },
    'git-ai': {
      eyebrow: '对比 · git-ai 替代方案',
      h1: 'aic 对比 git-ai',
      ledeAfter:
        ' 是本地优先的 Git 助手——提交信息、PR 描述，默认零配置的 Ollama。它还很早期（v0.1.3），自 2026 年初以来一直沉寂，但 PR 描述这个切入点是真的。这份对比会保持公平。<strong>aic</strong> 在原子化历史至关重要的地方胜出：hunk 级分批和 AI 冲突解决，且无需依赖 Node.js。',
      callout:
        '<strong>两个助手，不同侧重。</strong> git-ai 用一个助手扩展 git（提交 + PR 描述，本地优先）。aic 只把一件事做深：干净、原子、约定式的提交历史——并解决合并冲突。',
      winsH2: 'aic 领先之处',
      rivalH2: 'git-ai 仍然占优之处',
      rivalLede:
        'git-ai 是榜单里唯一会起草 PR 描述、并默认免费本地模型的工具。如果它们比原子化历史更重要，选它是公平的：',
      tieTag: '各有利弊',
      verdict: {
        h2: '一句话总结',
        body: '如果未暂存工作堆积如山、想拆成干净、原子的提交——或者想解决合并冲突——选 <strong>aic</strong>。如果你想要一个也起草 PR 描述的本地优先助手，git-ai 值得关注——只是要知道它是文件粒度，且自 2026 年 2 月以来一直沉寂。',
      },
      faq: {
        h2: '常见问题',
        items: [
          {
            q: 'aic 是 git-ai 的好替代方案吗？',
            a: '如果你想把未暂存工作拆成逻辑提交并解决合并冲突，是的。如果你想要 PR 描述和免费本地默认，git-ai 依然值得关注。',
          },
          {
            q: 'aic 会起草 PR 描述吗？',
            a: '不会——aic 专注提交和冲突解决。PR 描述是 git-ai 在榜单里的强项。',
          },
        ],
      },
      axes: {
        'auto-batch': {
          feature: '把未暂存改动自动分批成多个提交',
          aic: '是——把未暂存改动拆成逻辑原子提交',
          rival: '否——每个暂存的 diff 只生成一条信息',
          note: 'aic 的招牌功能。git-ai 只为你暂存的内容写一条信息。',
        },
        'per-hunk': {
          feature: '在单个文件内跨提交拆分（per-hunk）',
          aic: '是——按意图把每个 hunk 归入自己的提交',
          rival: '否——最多文件粒度',
          note: 'aic 在 hunk 级别读取 diff；git-ai（和榜单里所有工具一样）把文件当作原子单位。',
        },
        resolve: {
          feature: '解决合并冲突',
          aic: '是——`aic resolve` 提出 diff，逐文件确认',
          rival: '否——只写提交信息',
          note: 'git-ai 没有冲突处理能力——你仍然要手动解开合并。',
        },
        'pr-description': {
          feature: 'PR 描述',
          aic: '否',
          rival: '是——`git ai pr`',
          note: 'git-ai 起草 PR 标题和描述；aic 专注提交与冲突解决。',
        },
        'local-default': {
          feature: '本地优先默认',
          aic: '自带任意供应商（含 Ollama）',
          rival: '零配置 Ollama——免费且离线',
          note: 'git-ai 开箱即离线可用；aic 需要供应商密钥，但也支持 Ollama。',
        },
        runtime: {
          feature: '运行时与依赖',
          aic: 'Rust 二进制——无需 Node.js',
          rival: 'Node.js ≥ 22——npm / npx',
          note: 'aic 是单个静态二进制；git-ai 通过 Node 和 scoped npm 包运行。',
        },
        setup: {
          feature: '安装配置',
          aic: '交互式 `aic setup` 向导',
          rival: '`git ai config` 命令',
          note: 'aic 引导你完成 供应商 → 密钥 → 模型；git-ai 通过 CLI 配置。',
        },
        providers: {
          feature: '供应商覆盖',
          aic: '11 个一流供应商 + OpenAI 兼容',
          rival: 'Ollama、OpenAI、Anthropic',
          note: 'aic 提供更多带合理默认模型的一流供应商。',
        },
        activity: {
          feature: '项目活跃度',
          aic: '每周发布',
          rival: '自 2026-02 起沉寂',
          note: 'aic 每周发布；git-ai 已沉寂约 6 个月。',
        },
        formats: {
          feature: '提交信息格式',
          aic: '约定式提交',
          rival: 'conventional + gitmoji 选项',
          note: 'git-ai 提供 gitmoji 格式；aic 设计上仅约定式。',
        },
        candidates: {
          feature: '多条候选信息',
          aic: '否',
          rival: '否',
          note: '两者都没有从 N 条中挑选的菜单——都只起草一条。',
        },
      },
    },
    opencommit: {
      eyebrow: '对比 · OpenCommit 替代方案',
      h1: 'aic 对比 OpenCommit',
      ledeAfter:
        ' 是 GitHub 2023 黑客松冠军、git 上功能最丰富的 GPT 封装——GitMoji、可配置描述、本地 Ollama，以及庞大的社区。这份对比会保持公平：OpenCommit 占优的地方，我们会如实说明。<strong>aic</strong> 在原子化历史至关重要的地方胜出——hunk 级分批和 AI 冲突解决，且无需依赖 Node.js。',
      callout:
        '<strong>都爱 git，但拆分方式不同。</strong> OpenCommit 是久经考验的 LLM 封装——为你的暂存 diff 写一条信息，emoji 可选。aic 是这里唯一深入文件边界以下的工具：未暂存工作变成逻辑原子提交，`aic resolve` 完成你逐文件审批的合并。',
      winsH2: 'aic 领先之处',
      rivalH2: 'OpenCommit 仍然占优之处',
      rivalLede:
        'OpenCommit 实至名归：功能丰富、被广泛采用、持续维护。如果它们比自动分批更重要，选它是公平的：',
      tieTag: '各有利弊',
      verdict: {
        h2: '一句话总结',
        body: '如果未暂存工作堆积如山、想拆成干净、原子的提交——或者想逐文件审批地解决合并冲突——选 <strong>aic</strong>。如果你想要一个久经考验、黑客松冠军级、带 GitMoji 和庞大社区的封装工具，OpenCommit 是出色的选择。',
      },
      faq: {
        h2: '常见问题',
        items: [
          {
            q: 'aic 是 OpenCommit 的好替代方案吗？',
            a: '如果你想把未暂存工作拆成逻辑提交——甚至在一个文件内——并希望 AI 解决合并冲突，是的。如果你想要带 GitMoji 和最大社区的久经考验封装，OpenCommit 依然是选择。',
          },
          {
            q: 'aic 支持 GitMoji 吗？',
            a: '不支持——aic 只写约定式提交。OpenCommit 提供可配置 GitMoji（默认 10 个，`--fgm` 启用完整规范）。',
          },
        ],
      },
      axes: {
        'auto-batch': {
          feature: '把未暂存改动自动分批成多个提交',
          aic: '是——把未暂存改动拆成逻辑原子提交',
          rival: '否——每个暂存的 diff 只生成一条信息',
          note: 'aic 的招牌功能。OpenCommit 只为你暂存的内容写一条信息。',
        },
        'per-hunk': {
          feature: '在单个文件内跨提交拆分（per-hunk）',
          aic: '是——按意图把每个 hunk 归入自己的提交',
          rival: '否——最多文件粒度',
          note: 'aic 在 hunk 级别读取 diff；OpenCommit（和榜单里所有工具一样）把文件当作原子单位。',
        },
        resolve: {
          feature: '解决合并冲突',
          aic: '是——`aic resolve` 提出 diff，逐文件确认',
          rival: '否——只写提交信息',
          note: 'OpenCommit 没有冲突处理能力——你仍然要手动解开合并。',
        },
        runtime: {
          feature: '运行时与依赖',
          aic: 'Rust 二进制——无需 Node.js',
          rival: 'Node.js——npm',
          note: 'aic 是单个静态二进制；OpenCommit 通过 Node 和 npm 运行。',
        },
        setup: {
          feature: '安装配置',
          aic: '交互式 `aic setup` 向导',
          rival: '`oco config set` 命令',
          note: 'aic 引导你完成 供应商 → 密钥 → 模型；OpenCommit 通过 CLI 命令或 `.env` 配置。',
        },
        'provider-count': {
          feature: '供应商覆盖',
          aic: '11 个一流供应商 + OpenAI 兼容',
          rival: 'Claude、GPT 和其他所有供应商',
          note: '两者都支持多供应商。aic 提供 11 个带合理默认模型的一流供应商；OpenCommit 手动配置任意供应商。',
        },
        emoji: {
          feature: 'GitMoji 支持',
          aic: '否',
          rival: '是——可配置，`--fgm` 启用完整规范',
          note: 'OpenCommit 用 GitMoji 装饰信息；aic 设计上仅约定式。',
        },
        community: {
          feature: '社区与采用',
          aic: '早期（约 8★）',
          rival: '7,500★ · 约 12k npm 下载/月 · 黑客松冠军',
          note: 'OpenCommit 远更成熟。如果势头最重要，这一行它赢。',
        },
        activity: {
          feature: '项目活跃度',
          aic: '每周发布',
          rival: '活跃（2026-07 仍有提交）',
          note: '两者都在积极维护——平手。',
        },
        candidates: {
          feature: '多条候选信息',
          aic: '否',
          rival: '否',
          note: '两者都没有从 N 条中挑选的菜单——都只起草一条。',
        },
      },
    },
    more: {
      h2: '更多对比',
      vsLabel: 'aic 对比 {name}',
      roundup: '看看 aic 在最佳 AI 提交工具中的位置 →',
      installCta: '安装 aic →',
    },
  },

  alt: {
    // 迁移安装步骤的本地化引导语。命令本身来自 PRIMARY_INSTALL_COMMAND（site.ts），
    // 由 AlternativePage 渲染为 <code>——绝不在 locale 文件中重写（ADR-0006）。
    migrateLead: '安装 aic：',
    hub: {
      eyebrow: '替代方案',
      h1: 'AI 提交工具替代方案——选择 aic',
      lede: '这个领域里的每个 AI 提交工具都只为你的暂存 diff 写一条信息。aic 是唯一深入文件边界以下的工具：未暂存工作变成逻辑原子提交，<code>aic resolve</code> 完成你逐文件审批的合并。下面诚实地看看什么时候切换是明智的。',
      h2: '各替代方案',
      items: [
        {
          id: 'aicommits',
          name: 'aicommits',
          line: '老牌默认——如果你想要自动分批和冲突解决，而不只是一条信息，就切换。',
        },
        {
          id: 'opencommit',
          name: 'OpenCommit',
          line: '黑客松冠军封装——如果你想要原子化历史，而不只是 GitMoji，就切换。',
        },
        {
          id: 'ai-commit',
          name: 'ai-commit',
          line: 'Claude Code 之选——如果你想要无需 Node.js 的 hunk 级拆分，就切换。',
        },
        {
          id: 'llmc',
          name: 'llmc',
          line: '最多供应商之选——如果你想要分批和解决，而不只是 TUI，就切换。',
        },
        {
          id: 'git-ai',
          name: 'git-ai',
          line: '本地优先助手——如果你想要文件级别以下的提交拆分，就切换。',
        },
      ],
    },
    aicommits: {
      eyebrow: '从 aicommits 切换',
      h1: 'aicommits 替代方案：aic',
      lede: 'aicommits 是公认的默认之选——为每个暂存的 diff 写一条信息,是久经验证的选择。如果你真正的问题是未暂存工作堆积、历史变得混乱,aic 正是为此而生的替代方案:它把你的改动拆成逻辑原子提交,并用逐文件审批的方式解决合并冲突。',
      whyH: '为什么人们从 aicommits 切换',
      why: 'aicommits 为你暂存的内容写一条信息——但它无法把杂乱的暂存区拆成逻辑提交,也无法帮你解开合并。两者都会留下混杂关注点的提交和手工解决的冲突。',
      switchH: '以下情况切换到 aic:',
      shouldSwitch:
        '…你的未暂存工作堆积,希望被提交成干净、原子、约定式的提交——甚至在一个文件内——或者你希望不装 Node.js 就获得 AI 解决的合并冲突。',
      notH: '以下情况留在 aicommits:',
      shouldNot:
        '…你依赖它的 `prepare-commit-msg` 钩子、想要 gitmoji 或纯文本格式、需要多条候选消息,或者只是想要最大社区带来的安心感。',
      migrateH: '如何切换',
      migrate: [
        '一次性配置:运行 `aic setup`——供应商、密钥、模型,一个向导搞定',
        '提交:暂存你的工作并运行 `aic`;aic 会自动分批未暂存的工作',
      ],
    },
    opencommit: {
      eyebrow: '从 OpenCommit 切换',
      h1: 'OpenCommit 替代方案：aic',
      lede: 'OpenCommit 久经考验、功能丰富——GitMoji、可配置描述、庞大的社区。但它只为你的暂存 diff 写一条信息。对于问题在于提交历史质量的人来说,aic 是替代方案:hunk 级分批和 AI 冲突解决,且无需依赖 Node.js。',
      whyH: '为什么人们从 OpenCommit 切换',
      why: 'OpenCommit 对 LLM 的封装很出色——但粒度只到文件。一个文件因三个原因被改动,仍然只会成为一个提交;合并冲突也仍然要你手动解决。',
      switchH: '以下情况切换到 aic:',
      shouldSwitch:
        '…你希望未暂存工作被拆成逻辑原子提交——甚至在一个文件内——或者合并冲突能逐文件审批地解决,且无需 Node.js。',
      notH: '以下情况留在 OpenCommit:',
      shouldNot:
        '…你想要那个久经考验、黑客松冠军、带 GitMoji 和最大社区的封装,而且文件粒度的提交对你没问题。',
      migrateH: '如何切换',
      migrate: [
        '一次性配置:运行 `aic setup`——供应商、密钥、模型,一个向导搞定',
        '提交:对已暂存或未暂存的工作运行 `aic`;没有任何东西会盲目落地',
      ],
    },
    'ai-commit': {
      eyebrow: '从 ai-commit 切换',
      h1: 'ai-commit 替代方案：aic',
      lede: 'ai-commit 通过任意 OpenAI 兼容端点或 Claude Code 写约定式提交——如果你常驻 Claude Code 会很顺手。对于想要原子化历史的人来说,aic 是替代方案:hunk 级分批、冲突解决、引导式配置向导,且无 Node 依赖。',
      whyH: '为什么人们从 ai-commit 切换',
      why: 'ai-commit 是文件粒度、靠环境变量配置:每个暂存的 diff 一条信息,没有拆分,没有冲突帮助,而且要求 Node.js ≥ 22。',
      switchH: '以下情况切换到 aic:',
      shouldSwitch:
        '…你希望未暂存工作被拆成逻辑提交、合并冲突被解决,并且有引导式配置向导——无需 Node.js。',
      notH: '以下情况留在 ai-commit:',
      shouldNot:
        '…你常驻 Claude Code、想要中文提交信息（`-l zh`）、或者想要 emoji 风格的约定式提交。',
      migrateH: '如何切换',
      migrate: [
        '一次性配置:运行 `aic setup`——供应商、密钥、模型,一个向导搞定',
        '提交:暂存你的工作并运行 `aic`;aic 会自动分批未暂存的工作',
      ],
    },
    llmc: {
      eyebrow: '从 llmc 切换',
      h1: 'llmc 替代方案：aic',
      lede: 'llmc 是供应商最多的选择——13 个后端、TOML 提示词、精美的 TUI。但它把你暂存的内容作为一条信息提交。对于提交历史质量,aic 是替代方案,而且它在持续维护。',
      whyH: '为什么人们从 llmc 切换',
      why: 'llmc 自 2025 年底以来一直沉寂,没有 GitHub 发布;而且和这里的每个工具一样,它是文件粒度——没有拆分,没有冲突解决。',
      switchH: '以下情况切换到 aic:',
      shouldSwitch:
        '…你希望未暂存工作被提交成干净、原子的约定式提交、冲突由 AI 解决,并且项目活跃、有公开更新日志。',
      notH: '以下情况留在 llmc:',
      shouldNot:
        '…你想要最全的供应商菜单（13 个）、最漂亮的 TUI,以及丰富的 TOML 提示词配置。',
      migrateH: '如何切换',
      migrate: [
        '一次性配置:运行 `aic setup`——供应商、密钥、模型,一个向导搞定',
        '提交:对已暂存或未暂存的工作运行 `aic`;没有任何东西会盲目落地',
      ],
    },
    'git-ai': {
      eyebrow: '从 git-ai 切换',
      h1: 'git-ai 替代方案：aic',
      lede: 'git-ai 是本地优先的 Git 助手——提交、PR 描述、零配置 Ollama。它还很早期（v0.1.3）,自 2026 年 2 月以来一直沉寂。对于原子化历史,aic 是替代方案,而且它每周发布。',
      whyH: '为什么人们从 git-ai 切换',
      why: 'git-ai 是文件粒度,而且数月没有更新——除了 PR 描述功能,它既不能拆分也不能解决冲突。',
      switchH: '以下情况切换到 aic:',
      shouldSwitch:
        '…你希望未暂存工作被拆成逻辑提交、合并冲突被解决——来自一个每周发布的项目。',
      notH: '以下情况留在 git-ai:',
      shouldNot: '…你想要 PR 描述,以及一个免费、离线、零配置的默认方案。',
      migrateH: '如何切换',
      migrate: [
        '一次性配置:运行 `aic setup`——供应商、密钥、模型,一个向导搞定',
        '提交:暂存你的工作并运行 `aic`;aic 会自动分批未暂存的工作',
      ],
    },
  },

  deepseek: {
    eyebrow: '能力 · DeepSeek',
    h1: '用 DeepSeek 写提交信息',
    lede: 'DeepSeek 是 <b>aic</b> 的一流供应商:在配置向导里选中它、粘贴你的密钥,aic 就会读取你的 diff 并写出一条约定式提交——一条命令搞定。你的密钥永远不会离开你的机器,而且 aic 能做的一切——自动分批、<code>aic resolve</code>、无需 Node.js——在 DeepSeek 上同样可用。',
    whyH: '为什么选择 DeepSeek + aic',
    why: [
      '一流供应商——无需 OpenRouter 中转或自定义端点',
      '又快又便宜——aic 默认使用为提交信息调优的轻量模型',
      '没有中间商——调用直接从你的机器发往 DeepSeek',
      '功能完全一致——自动分批和 `aic resolve` 在所有供应商上都能用',
    ],
    setupH: '一个向导搞定配置',
    setup: [
      '运行 <code>aic setup</code>',
      '选择 DeepSeek 作为供应商',
      '粘贴你的 <code>DEEPSEEK_API_KEY</code> 并选择模型',
      '提交——暂存你的工作并运行 <code>aic</code>',
    ],
    envH: '或用环境变量配置',
    env: '设置 <code>LLM_BACKEND=deepseek</code> 和 <code>DEEPSEEK_API_KEY</code>,然后运行 aic。配置按 环境变量 → 配置文件 → 默认值 的顺序解析。',
    modelH: '默认模型',
    model:
      'aic 内置合理的 DeepSeek 默认模型(<code>deepseek-v4-flash</code>)——针对提交信息这类轻量任务,又快又便宜。随时可用 <code>LLM_MODEL</code> 覆盖。',
    faq: {
      h2: '常见问题',
      items: [
        {
          q: 'aic 支持 DeepSeek 吗？',
          a: '支持——DeepSeek 是 aic 的一流供应商,与 OpenAI、Anthropic、Gemini 及其他 7 家并列。',
        },
        {
          q: 'aic 用哪个 DeepSeek 模型？',
          a: 'aic 默认使用 deepseek-v4-flash——针对提交信息调优的快速、低成本模型。随时可用 LLM_MODEL 覆盖。',
        },
        {
          q: '我的 DeepSeek 密钥安全吗？',
          a: '安全——aic 直接从你的机器调用 DeepSeek。密钥永远不会离开你的机器,没有中间商,也没有按次计费加成。',
        },
      ],
    },
  },

  roundup: {
    eyebrow: '盘点 · 最佳 AI 提交工具',
    h1: '最佳的 AI 提交信息工具',
    lede: '能读你的 <code>git diff</code> 并起草提交信息的 CLI 多的是。「哪个最好？」的诚实答案是「看你想要什么」。下面是一份公允的、逐项核实的工具盘点——外加一个快速选择的办法。',
    callout:
      '<strong>事先声明。</strong><code>aic</code> 是我们自己的工具，所以它出现在这份清单里。我们让每一句点评都如实反映每个工具真正擅长的方面——包括别人胜过我们的地方。',
    choose: {
      h2: '如何选择',
      items: [
        { need: '你想把未暂存改动拆成合乎逻辑的提交——哪怕在同一个文件里', pick: '→ aic' },
        { need: '你想让人替你解决合并冲突，而不只是事后写条信息', pick: '→ aic' },
        { need: '你想要流行、维护良好的默认选择', pick: '→ aicommits' },
        {
          need: '你想要黑客松冠军级、带可配置 GitMoji 的功能丰富封装工具',
          pick: '→ OpenCommit',
        },
        { need: '你已经习惯在 Claude Code 里工作', pick: '→ ai-commit' },
        { need: '你想要免费、本地、离线——还能写 PR 描述', pick: '→ git-ai' },
        { need: '你想要最多的供应商和一个打磨过的 TUI', pick: '→ llmc' },
      ],
    },
    field: {
      h2: '各路选手',
      hlEyebrow: '新功能 · v{version}',
      hlHead: '一个文件，多个提交',
      hlSub: '按 hunk 拆分——这里唯一深入到文件边界之下的工具。',
      badge: '是我们自己',
      vsAicommitsLink: '对比 aicommits →',
      repoLink: '代码仓库 ↗',
      compareLink: '完整对比 →',
      note: '并非穷举——这个领域很拥挤（再加上 <code>commitizen</code>、<code>cz-git</code> 以及十几个别的）。这六个覆盖了各种截然不同的思路：自动批处理、老牌产品、Claude Code 原生、本地优先、最多供应商，以及黑客松冠军级别的功能丰富 CLI。',
    },
    verdict: {
      h2: '我们的诚实看法',
      body: '如果你的未暂存改动越堆越多、想以干净、原子、约定式的提交提交掉——又不想装 Node.js——那 <strong>aic</strong> 就是为这个而生的。否则，aicommits 仍是稳妥的默认选择，而其余的各自占据一个清晰的细分。',
      seeVs: '查看 aic 对比 aicommits →',
    },
    tools: {
      aic: {
        strength:
          '这里唯一在 hunk 层级把未暂存改动拆成逻辑提交的工具——所以哪怕单个文件也能变成多个聚焦的提交——并且能解决合并冲突（`aic resolve`）。以无依赖的 Rust 可执行文件发布，一等支持 Anthropic、Gemini 和 DeepSeek。',
      },
      aicommits: {
        strength:
          '根深蒂固的默认选择——一个 prepare-commit-msg 钩子、gitmoji 支持、最大的社区，以及通过 OpenRouter 接入任意模型。',
      },
      opencommit: {
        strength:
          'GitHub 2023 黑客松冠军——功能丰富的封装：可配置 GitMoji、本地 Ollama/llama.cpp，以及庞大的社区（7.5k★、约 12k npm 下载/月）。',
      },
      'ai-commit': {
        strength:
          '凭借一个会读取你源文件的 Claude Code 供应商脱颖而出——如果你已经在用 Claude Code，会非常顺手。',
      },
      'git-ai': {
        strength:
          '默认使用本地 Ollama（免费、离线），而且还能起草 PR 描述，不只是提交信息。',
      },
      llmc: {
        strength:
          '最广的供应商列表（13 个），配一个打磨过的终端 UI、TOML 配置、自定义提示词，以及自动提交。',
      },
    },
  },

  changelog: {
    eyebrow: '更新日志 · 发布说明',
    h1: '每一次 aic 发布，按顺序排列。',
    ledeBefore: '<code>aic</code> 的各次发布——在构建时从源仓库的 ',
    ledeLink: 'CHANGELOG.md',
    ledeAfter: ' 拉取，若该抓取暂时不可达，则以 GitHub Releases 作为回退。最新在上。',
    englishNote: '发布说明保留英文原文。',
    timeline: {
      latest: '最新',
      githubRelease: 'GitHub 发布',
      noNotes: '未发布更新说明。',
    },
  },
};
