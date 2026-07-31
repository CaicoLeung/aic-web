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
      title: 'aic 对比 aicommits — AI 提交工具对比',
      description:
        'aicommits 是公认的默认之选。如果你想要自动分批、一流的 Anthropic/Gemini/DeepSeek 支持，并且不想依赖 Node.js，那就选 aic。一份诚实、逐特性对比的评测。',
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
    switcher: {
      label: '语言',
    },
  },

  contentHeader: {
    versionTitle: '最新版本：v{version} — 查看更新日志',
    home: '首页',
    changelog: '更新日志',
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
      '<b>aic</b> 读取你的 diff，起草一条约定式提交并提交——只需一条命令。合并进行中？它会',
    ledeLink: '解决冲突',
    ledeAfter:
      '——逐文件处理，落地前先给你 diff 确认。没有暂存内容？它会把你的改动拆成多个逻辑提交——甚至在同一个文件内。',
    ctaHint: '然后运行 <code>{cmd}</code>',
  },

  how: {
    eyebrow: '02 — 工作原理',
    h2: '安装一次 → 输入 <code>{cmd}</code> → 干净提交。',
    steps: {
      '01': { label: '安装', detail: 'brew install aic' },
      '02': { label: '配置', detail: 'provider · key · model' },
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
    lede: 'aic 在 hunk 层级读取你的 diff——这样一个文件也能拆成多个聚焦的提交，每个只讲一件事。没有暂存、一条命令、一份干净的历史。',
    aside: '按 hunk 批处理 ✦',
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
  },

  install: {
    eyebrow: '05 — 安装',
    h2: '一行安装 aic。',
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
      changelog: '更新日志',
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
        { h: '检测', n: '<code>aic resolve</code> 读取仓库状态。如果你正处于合并中且有未合并的文件，它会列出来。' },
        { h: '逐文件解决', n: '对每个文件，aic 把冲突内容发给你的模型，取回一份不含冲突标记的版本。如果仍有标记漏网，它会重试一次。' },
        { h: '审查 diff', n: 'aic 把所有提议的解决汇总成一个 diff——标记被移除、两边被调和——让你看清究竟会改什么。' },
        { h: '逐文件确认', n: '每个文件都有自己的 <code>apply?</code> 提示。回答 yes，aic 就写入解决方案并暂存；回答 no，那个文件原封不动。' },
        { h: '完成', n: '当没有未合并的内容时，aic 替你执行合并的 <code>--continue</code>。流程中被卡住的点会带着清晰的交接说明上报，而不是一个莫名其妙的计数。' },
      ],
    },
    twoWays: {
      h2: '两种入口',
      lede: '你不必记命令。有一个显式的动词，还有一个在你忘记时接住你的守卫。',
      points: [
        { h: '<code>aic resolve</code>', n: '显式的动词。只要你的仓库正处于合并中，随时运行它，aic 会从上面的检测步骤接手。' },
        { h: '提交守卫', n: '在一个有冲突的仓库里运行普通的 <code>aic</code>，它会察觉、提议交接给 resolve，而更深一层的守卫会拦下任何仍带有冲突标记的提交。友好的前门，加上一道安全网。' },
      ],
    },
    review: {
      h2: '没有你的点头，什么都不落地',
      lede: '核心就一句话：aic 提议，你拍板。它绝不写入一个你没看过、没批准的解决方案。',
      callout: '<strong>落地前先审查。</strong>每一个提议的解决方案在触碰磁盘<em>之前</em>都以 diff 形式呈现。每个文件是一道独立的 <code>y/n</code>——信任的就批准，不信任的就驳回，被驳回的文件会原封不动地留在你离开时的样子。',
    },
    limits: {
      h2: 'aic 留给你的部分',
      lede: '先把丑话说前面，让你清楚工具到哪儿结束、你从哪儿接手。这些是 v1 的限制。',
      points: [
        { h: '仅限合并冲突', n: 'aic 处理的是有冲突的<em>合并</em>状态。进行中的 rebase 或 <code>am</code> 在 v1 中会被检测到并拒绝——先完成或中止它，再来 resolve。' },
        { h: '有些冲突无法自动解决', n: '二进制文件、超大文件，以及删除/修改类冲突会被跳过并给出原因——aic 会指给你看，让你手动解决。' },
        { h: '完成步骤是全有或全无', n: '无论怎样 <code>--continue</code> 都会卡在任何未合并的路径上，所以哪怕只剩一个阻塞点，完成步骤也走不下去。aic 的交接说明会确切告诉你还剩什么。' },
      ],
    },
    verdict: {
      h2: '简而言之',
      body: '<code>aic resolve</code> 读取你的冲突文件，提出你确实能审查的解决方案，只写入你批准的部分——然后完成合并。它和 aic 用于提交的那套「读 diff、起草修复、交付」循环是同一个，只是指向了 git 里最难看的地方。',
      releaseNotes: 'v0.3.0 发布说明',
    },
  },

  vs: {
    aicommits: {
      eyebrow: '对比 · aicommits 的替代方案',
      h1: 'aic 对比 aicommits',
      ledeAfter: ' 是 AI 提交信息工具里根深蒂固的默认选择——装机量、生态、先发优势都在它那边。本页无意粉饰这一点。它要准确告诉你 <strong>aic</strong> 何时更值得选——以及你何时就该继续用 aicommits。',
      callout: '<strong>巧了。</strong>aicommits 自己的 README 就建议，如果名字太长，可以把它别名成 <code>aic</code>。我们把 <code>aic</code> 作为独立的东西发布了——而且它在 hunk 层级把你的未暂存改动拆成多个逻辑提交，所以哪怕一个文件也能变成好几个。',
      matrix: {
        heading: '逐特性对比',
        capability: '能力',
        aic: 'aic',
      },
      winsH2: 'aic 领先的地方',
      rivalH2: 'aicommits 仍然占优的地方',
      rivalLede: '我们不会假装 aic 在所有方面都胜过这个流行工具。它没有。如果下面这些对你来说比自动批处理更重要，那 aicommits 就是更对的选择：',
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
    },
  },

  roundup: {
    eyebrow: '盘点 · 最佳 AI 提交工具',
    h1: '最佳的 AI 提交信息工具',
    lede: '能读你的 <code>git diff</code> 并起草提交信息的 CLI 多的是。「哪个最好？」的诚实答案是「看你想要什么」。下面是一份公允的、逐项核实的工具盘点——外加一个快速选择的办法。',
    callout: '<strong>事先声明。</strong><code>aic</code> 是我们自己的工具，所以它出现在这份清单里。我们让每一句点评都如实反映每个工具真正擅长的方面——包括别人胜过我们的地方。',
    choose: {
      h2: '如何选择',
      items: [
        { need: '你想把未暂存改动拆成合乎逻辑的提交——哪怕在同一个文件里', pick: '→ aic' },
        { need: '你想让人替你解决合并冲突，而不只是事后写条信息', pick: '→ aic' },
        { need: '你想要流行、维护良好的默认选择', pick: '→ aicommits' },
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
      note: '并非穷举——这个领域很拥挤（再加上 <code>commitizen</code>、<code>cz-git</code> 以及十几个别的）。这五个覆盖了各种截然不同的思路：自动批处理、老牌产品、Claude Code 原生、本地优先，以及最多供应商。',
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
