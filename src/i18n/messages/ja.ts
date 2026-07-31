/**
 * JA (Japanese) message module.
 *
 * STATUS: machine-produced first draft, PENDING HUMAN REVIEW before it
 * ships (CONTEXT.md → Localized copy). Once reviewed, remove this notice.
 *
 * Conventions preserved from `en.ts`: light inline HTML kept verbatim
 * (rendered via `set:html`); `{param}` placeholders kept; literal commands,
 * brand names, and the locale-invariant how-step command-details
 * (`brew install aic`, `provider · key · model`, `type:  aic`) stay EN.
 */
import type { Messages } from './types';

export const messages: Messages = {
  meta: {
    title: 'aic — AI 駆動の git コミット',
    description:
      'aic は diff を読み、コンベンショナルコミットを起草してコミットします — コマンド1つ。ステージ済みがない？作業を論理的なコミットにまとめます。',
  },

  topbar: {
    brandTag: 'AI 駆動の git コミット',
    versionTitle: '最新リリース：v{version} — 変更履歴を見る',
    github: 'GitHub',
    nav: {
      how: '使い方',
      batching: 'バッチ処理',
      providers: 'プロバイダ',
      install: 'インストール',
    },
    switcher: {
      label: '言語',
    },
  },

  contentHeader: {
    versionTitle: '最新リリース：v{version} — 変更履歴を見る',
    home: 'ホーム',
    changelog: '変更履歴',
    github: 'GitHub',
  },

  copyButton: {
    copyAria: '{label} をコピー',
    copiedAria: '{label} をコピーしました',
    copied: 'コピーしました ✓',
  },

  hero: {
    eyebrow: '01 — はじめに',
    h1: {
      stopWriting: 'もう書かない、',
      commit: 'コミット',
      messages: 'メッセージ。',
      stopUntangling: 'もう解かない、',
      merge: 'マージ',
      conflicts: 'コンフリクト。',
    },
    ledeBefore:
      '<b>aic</b> は diff を読み、コンベンショナルコミットを起草してコミットします — コマンド1つ。マージ中なら、',
    ledeLink: 'コンフリクトを解決',
    ledeAfter:
      'します — ファイルごとに、何も適用される前に diff を確認。ステージ済みがない？作業を論理的なコミットに分割します — 1つのファイル内でも。',
    ctaHint: 'そして <code>{cmd}</code> を実行',
  },

  how: {
    eyebrow: '02 — 仕組み',
    h2: '一度インストール → <code>{cmd}</code> と入力 → クリーンなコミット。',
    steps: {
      '01': { label: 'インストール', detail: 'brew install aic' },
      '02': { label: 'セットアップ', detail: 'provider · key · model' },
      '03': { label: '実行', detail: 'type:  aic' },
      '04': { label: '読み取り', detail: 'diff を読む' },
      '05': { label: '起草', detail: 'メッセージを書く' },
      '06': { label: 'コミット', detail: '完了  ✓' },
    },
  },

  commands: {
    aic: { description: 'ステージ済みをコミット · または未ステージをバッチ計画' },
    'aic-setup': { description: '一度だけのウィザード — プロバイダ → キー → モデル' },
    'aic-list': { description: '解決済みの設定 + マスク済み API キーを表示' },
  },

  batching: {
    eyebrow: '03 — 自動バッチ処理',
    kicker: 'ステージ済みがない？',
    h2: '1つのファイル、複数のコミット',
    lede: 'aic は hunk レベルで diff を読みます — だから1つのファイルでも複数の焦点を絞ったコミットになり、それぞれが1つのアイデア。ステージなし、コマンド1つ、クリーンな履歴。',
    aside: 'hunk ごとのバッチ処理 ✦',
    stripLabel: '推論 · hunk ごと',
    shipBadge: 'v{version} で搭載',
    cmpLink: 'ベスト AI コミットツールの中の aic を見る →',
  },

  providers: {
    eyebrow: '04 — プロバイダとプライバシー',
    h2: 'あなたのキー · あなたのモデル',
    lede: 'プロバイダを自分で。aic は LLM と直接通信 — 中間業者なし、コミットごとの課金なし、プロキシなし。API キーはあなたのマシンから出ません。',
    aside: '中間業者なし · コミットごとの課金なし · 呼び出しはあなたのマシンから直接',
    link: 'プロバイダのコードを読む →',
    yourModel: '（あなたのモデル）',
  },

  install: {
    eyebrow: '05 — インストール',
    h2: '1行で aic をインストール。',
    postinstall:
      '<span class="arrow" aria-hidden="true">→</span> そして <code>{cmd}</code> を実行してプロバイダ、キー、モデルを選択。',
    methods: {
      brew: {
        label: 'Homebrew',
        note: '`brew upgrade aic` で更新。Homebrew インストールは自動検出されるので、`aic update` は brew へ誘導します。',
      },
      unix: {
        label: 'インストーラ · macOS / Linux',
        note: 'GitHub Releases から最新リリースのバイナリをダウンロード。',
      },
      windows: {
        label: 'インストーラ · Windows',
        note: 'PowerShell。最新リリースのバイナリをダウンロード。',
      },
    },
  },

  footer: {
    eyebrow: '今日からよりクリーンなコミットを',
    h2: 'コミットメッセージを書くのは終わり。',
    star: '★ GitHub でスター',
    nav: {
      resolve: 'マージコンフリクトを解決',
      roundup: 'ベスト AI コミットツール',
      compare: 'aic vs aicommits',
      changelog: '変更履歴',
    },
    meta: 'MIT ライセンス · Astro + Tailwind + GSAP で構築',
  },

  resolve: {
    eyebrow: '機能 · マージコンフリクト',
    h1: {
      main: 'マージコンフリクトを解決。',
      without: '手動マージ',
      manualMerge: 'なしで。',
    },
    lede: '<b>aic</b> はコンフリクトしたすべてのファイルを読み、クリーンな解決を提案し、diff を見せます。ファイルごとに承認 — あなたの許可なしには何も適用されず — その後マージを完了します。',
    ctaHint: 'そして <code>aic resolve</code> を実行',
    workflow: {
      h2: 'aic がコンフリクトを解決する流れ',
      lede: 'resolve はワークフローであり、魔法の杖ではありません。aic はコンフリクトした各ファイルを巡り、修正を提案し、毎ステップで承認のために止まります。',
      steps: [
        { h: '検出', n: '<code>aic resolve</code> はリポジトリの状態を読みます。マージ中で未解決のファイルがあれば、それを一覧表示します。' },
        { h: 'ファイルごとに解決', n: '各ファイルについて、aic はコンフリクトした内容をモデルに送り、マーカーのないバージョンを受け取ります。マーカーが漏れていれば、一度再試行します。' },
        { h: 'diff を確認', n: 'aic はすべての提案された解決を1つの diff にまとめます — マーカーは除去、両側は調和 — 何が変わるか正確に分かります。' },
        { h: 'ファイルごとに承認', n: '各ファイルには独自の <code>apply?</code> プロンプトがあります。yes なら aic は解決を書き込んでステージします。no ならそのファイルは触られません。' },
        { h: '完了', n: '未解決がなくなると、aic はマージの <code>--continue</code> を実行します。途中のブロッカーは明確な引き継ぎで報告され、謎のカウントではありません。' },
      ],
    },
    twoWays: {
      h2: '2つの入り口',
      lede: 'コマンドを覚える必要はありません。明示的な動詞と、忘れた時にキャッチするガードがあります。',
      points: [
        { h: '<code>aic resolve</code>', n: '明示的な動詞。リポジトリがマージ中ならいつでも実行でき、aic は上の検出ステップから引き継ぎます。' },
        { h: 'コミットガード', n: 'コンフリクトしたリポジトリで plain な <code>aic</code> を実行すると、それは気づき、resolve への引き継ぎを提案し、さらに深いガードがコンフリクトマーカーを含むコミットをブロックします。親切な玄関、プラス安全網。' },
      ],
    },
    review: {
      h2: 'あなたの許可なくして何も適用されない',
      lede: '要点はこれ：aic は提案し、あなたが決める。あなたが見て承認していない解決を書き込むことはありません。',
      callout: '<strong>適用前に確認。</strong>提案されたすべての解決は、ディスクに触れる<em>前に</em> diff として表示されます。各ファイルは独立した <code>y/n</code> — 信頼するものは承認、しないものは却下、却下されたファイルはあなたが残した通りに残ります。',
    },
    limits: {
      h2: 'aic があなたに残すもの',
      lede: '先に正直に。ツールが終わり、あなたが始まる場所を知るため。これらは v1 の制限です。',
      points: [
        { h: 'マージコンフリクトのみ', n: 'aic が扱うのはコンフリクトした<em>マージ</em>状態。進行中の rebase や <code>am</code> は v1 では検出されて拒否されます — 完了または中止してから resolve してください。' },
        { h: '自動解決できないコンフリクトも', n: 'バイナリファイル、巨大ファイル、delete/modify コンフリクトは理由付きでスキップされます — aic は手動で解決できるようそれらを指し示します。' },
        { h: '完了はオールオアナッシング', n: 'どのみち <code>--continue</code> は未解決のパスがあるとブロックするので、残り1つのブロッカーが完了を止めます。aic の引き継ぎは何が残っているか正確に伝えます。' },
      ],
    },
    verdict: {
      h2: '要するに',
      body: '<code>aic resolve</code> はコンフリクトしたファイルを読み、実際に確認できる解決を提案し、あなたが承認したものだけを書き込み — それからマージを完了します。aic がコミットに使うのと同じ「diff を読み、修正を起草し、出荷する」ループが、git の最も見苦しい部分に向けられています。',
      releaseNotes: 'v0.3.0 リリースノート',
    },
  },

  vs: {
    aicommits: {
      eyebrow: '比較 · aicommits の代替',
      h1: 'aic vs aicommits',
      ledeAfter: ' は AI コミットメッセージツールとして定着したデフォルト — インストールベース、エコシステム、先発の勢い。このページはそうでないふりをするためのものではありません。いつ <strong>aic</strong> がより良い選択か — そしていつ aicommits に留まるべきかを正確に伝えます。',
      callout: '<strong>狭い業界ですね。</strong>aicommits 自身の README も、名前が長すぎる場合は <code>aic</code> にエイリアスすることを提案しています。私たちは <code>aic</code> を独立したものとして出荷しました — そしてそれは hunk レベルで未ステージの作業を論理的なコミットに分割するので、1つのファイルでも複数になり得ます。',
      matrix: {
        capability: '能力',
        aic: 'aic',
      },
      winsH2: 'aic がリードする点',
      rivalH2: 'aicommits が依然として勝つ点',
      rivalLede: 'aic が人気ツールにすべてで勝つふりはしません。勝ちません。これらが自動バッチ処理より重要なら、aicommits が正しい選択です：',
      tieTag: 'トレードオフ',
      verdict: {
        h2: '要するに',
        body: '未ステージの作業が溜まり、クリーンで論理的なコミットに分割したい — または Node.js 依存なしで Claude、Gemini、DeepSeek をファーストクラスのプロバイダに — なら <strong>aic</strong> に切り替えましょう。<code>git commit</code> フック、gitmoji コミット、選べる複数候補、または人気の安心感が欲しいなら、aicommits も依然として素晴らしいツールです。',
      },
      axes: {
        'auto-batch': {
          feature: '未ステージの作業を複数コミットに自動バッチ',
          aic: 'はい — 未ステージの変更を論理的でアトミックなコミットに分割',
          rival: 'いいえ — ステージ済み diff ごとに1メッセージ',
          note: 'aic の看板機能。aicommits の `--generate N` は1つのコミットに対し N 個の候補メッセージを生成するのであり、N 個のコミットではありません。',
        },
        'per-hunk': {
          feature: '1つのファイルを複数コミットに分割（hunk ごと）',
          aic: 'はい — インテントごとに各 hunk を独自のコミットへ',
          rival: 'いいえ — 多くてファイル粒度',
          note: 'aic v0.3.5 で搭載。aicommits（および roundup のすべてのツール）は多くてもファイル境界で分割; aic は hunk レベルで diff を読むので、3つの関心事を抱える1ファイルが3つのフォーカスされたコミットになります。',
        },
        resolve: {
          feature: 'マージコンフリクトを解決',
          aic: 'はい — `aic resolve` が diff を提案、ファイルごとに確認',
          rival: 'いいえ — コミットメッセージのみ',
          note: 'aic の2つ目の看板ワークフロー（`v0.3.0`）。aicommits にはコンフリクトの話がありません — 手動でマージした後にメッセージを書くだけです。',
        },
        anthropic: {
          feature: 'ファーストクラスの Anthropic · Gemini · DeepSeek',
          aic: 'はい — ネイティブプロバイダ',
          rival: 'OpenRouter / カスタムエンドポイント経由のみ',
          note: 'aicommits は間接的にしか到達しません; aic はそれらをファーストクラスとして出荷し、理にかなったデフォルトモデルを付けます。',
        },
        runtime: {
          feature: 'ランタイムと依存',
          aic: 'Rust バイナリ — Node.js 不要',
          rival: 'Node.js v22+ — npm',
          note: 'aic は1つの静的バイナリ — `node_modules` も推移的依存ツリーもなく、Node バージョンを切り替えてもグローバルインストールが壊れません。（Rust の速いコールドスタートも助けになりますが、どのみち LLM 呼び出しが支配的です。）aicommits が摩擦なしなのは Node.js が既にパスにある時だけです。',
        },
        reach: {
          feature: 'プロバイダの到達範囲',
          aic: '11 ファーストクラス + OpenAI 互換',
          rival: '8 + OpenRouter/カスタム（任意のモデル）',
          note: 'どちらも OpenRouter 経由で任意のモデルに到達しますが、aic はより多くのファーストクラスプロバイダを出荷します — xAI、Together、Perplexity、Mistral を含む — に加えて LM Studio、vLLM、ゲートウェイ向けの OpenAI 互換の逃げ道も。',
        },
        formats: {
          feature: 'コミットメッセージの形式',
          aic: 'Conventional Commits',
          rival: 'plain · conventional · gitmoji',
          note: 'aic は設計上 conventional のみ; aicommits は plain な非構造モードを含め選べます。',
        },
        hook: {
          feature: 'Git フック統合',
          aic: 'いいえ',
          rival: 'はい — prepare-commit-msg フック',
          note: 'aicommits はフックで通常の `git commit` フローに組み込まれます; aic は明示的に実行します。',
        },
        candidates: {
          feature: '複数のメッセージ候補',
          aic: 'いいえ',
          rival: 'はい — `--generate N`',
          note: 'aicommits はコミット前にいくつかのメッセージから選べます。',
        },
        prompt: {
          feature: 'プロンプトとロケール制御',
          aic: '環境変数でシステムプロンプト',
          rival: '`--prompt`、locale、max-length',
          note: 'aicommits はより豊富なノブを公開します。aic は `AIC_SYSTEM_PROMPT` の上書きをサポートしますが、表面のオプションはより少ないです。',
        },
        popularity: {
          feature: '人気とエコシステム',
          aic: '新しく、小規模',
          rival: '定着した先発',
          note: 'aicommits はより大きなコミュニティを持つ知られた存在です。勢いが最も重要なら、そのまま使い続けましょう。',
        },
      },
    },
  },

  roundup: {
    eyebrow: 'ラウンドアップ · ベスト AI コミットツール',
    h1: 'ベストな AI コミットメッセージツール',
    lede: '<code>git diff</code> を読んでコミットメッセージを起草する CLI はいくらでもあります。「どれがベスト？」への正直な答えは「あなたが何を欲しいかによる」です。以下は公正で、機能を検証したツールの調査 — と、素早く選ぶ方法です。',
    callout: '<strong>開示。</strong><code>aic</code> は私たちのツールなので、このリストに含まれています。各ツールが本当に得意なことについて、すべての一言を正直に保ちました — 他が私たちに勝つ点も含めて。',
    choose: {
      h2: '選び方',
      items: [
        { need: '未ステージの作業を論理的なコミットに分割したい — 1つのファイル内でも', pick: '→ aic' },
        { need: 'マージコンフリクトを解決してほしい、後でメッセージだけでなく', pick: '→ aic' },
        { need: '人気でサポートの良いデフォルトが欲しい', pick: '→ aicommits' },
        { need: 'すでに Claude Code で働いている', pick: '→ ai-commit' },
        { need: '無料、ローカル、オフラインがいい — PR の説明も', pick: '→ git-ai' },
        { need: '最多のプロバイダと洗練された TUI が欲しい', pick: '→ llmc' },
      ],
    },
    field: {
      h2: '顔ぶれ',
      hlEyebrow: '新機能 · v{version}',
      hlHead: '1つのファイル、複数のコミット',
      hlSub: 'hunk ごとの分割 — ここでファイル境界より下に行く唯一のツール。',
      badge: '私たちです',
      vsAicommitsLink: 'aicommits と比較 →',
      repoLink: 'リポジトリ ↗',
      compareLink: '完全な比較 →',
      note: '網羅ではありません — 空間は混み合っています（<code>commitizen</code>、<code>cz-git</code> など十数個追加で）。この5つは異なるアプローチをカバーします：自動バッチ、既存の大手、Claude Code ネイティブ、ローカルファースト、最多プロバイダ。',
    },
    verdict: {
      h2: '私たちの正直な見解',
      body: '作業が未ステージで溜まり、クリーンでアトミック、コンベンショナルなコミットとしてコミットしたい — しかも Node.js をインストールせずに — なら <strong>aic</strong> はそのために作られています。そうでなければ、aicommits が安全なデフォルトのままで、他はそれぞれ明確なニッチを占めます。',
      seeVs: 'aic vs aicommits を見る →',
    },
    tools: {
      aic: {
        strength:
          'ここで唯一、未ステージの作業を hunk レベルで論理的なコミットに分割するツール — だから1つのファイルでも複数のフォーカスされたコミットになり得る — そしてマージコンフリクトを解決します（`aic resolve`）。依存関係のない Rust バイナリとして出荷し、Anthropic、Gemini、DeepSeek をファーストクラスでサポートします。',
      },
      aicommits: {
        strength:
          '定着したデフォルト — prepare-commit-msg フック、gitmoji サポート、最大のコミュニティ、そして OpenRouter 経由で任意のモデル。',
      },
      'ai-commit': {
        strength:
          'ソースファイルを読む Claude Code プロバイダで際立ちます — すでに Claude Code を使っているなら自然な fit。',
      },
      'git-ai': {
        strength:
          'デフォルトでローカル Ollama（無料、オフライン）で、コミットメッセージだけでなく PR の説明も起草します。',
      },
      llmc: {
        strength:
          '最も広いプロバイダリスト（13）に、洗練されたターミナル UI、TOML 設定、カスタムプロンプト、自動コミット。',
      },
    },
  },

  changelog: {
    eyebrow: '変更履歴 · リリースノート',
    h1: 'すべての aic リリースを、順に。',
    ledeBefore: '出荷された <code>aic</code> の各バージョン — ビルド時にソースリポジトリの ',
    ledeLink: 'CHANGELOG.md',
    ledeAfter: ' から取得。その取得が一時的に届かない場合は GitHub Releases をフォールバックに使います。最新が上。',
    englishNote: 'リリースノートは英語のままです。',
    timeline: {
      latest: '最新',
      githubRelease: 'GitHub リリース',
      noNotes: 'リリースノートは公開されていません。',
    },
  },
};
