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
      'aic は diff を読み、コンベンショナルコミットを起草してコミットします — コマンド1つ。何もステージしていない？作業を論理的なコミットにまとめます。',
    resolve: {
      title: 'aic resolve — AI マージコンフリクト解決',
      description:
        'aic はコンフリクトしたすべてのファイルを読み、クリーンな解決を提案し、diff を見せます。ファイルごとに承認 — あなたの許可なしには何も適用されず — その後マージを完了します。あなたの作業を盲目的に変更することのない AI マージコンフリクト解決ツール。',
    },
    roundup: {
      title: '{year}年最高の AI コミットメッセージツール',
      description:
        'AI による git コミットツールの正直な総まとめ — aic、aicommits、ai-commit、git-ai、llmc — と、いつどれを選ぶべきかについての公平で機能検証済みの見解。',
    },
    vs: {
      aicommits: {
        title: 'aic vs aicommits — AI コミットツール比較',
        description:
          'aicommits の代替を探していますか？ aic は未ステージの作業をアトミックコミットに自動分割し、マージコンフリクトを解決、Node.js も不要。機能ごとの正直な比較。',
      },
      'ai-commit': {
        title: 'aic vs ai-commit — AI コミットツール比較',
        description:
          'ai-commit の代替なら aic を。未ステージの作業をアトミックコミットに分割し、マージコンフリクトを解決。Claude Code も Node.js も不要。',
      },
      llmc: {
        title: 'aic vs llmc — AI コミットツール比較',
        description:
          'llmc の代替なら aic を。hunk レベルのバッチングと AI コンフリクト解決で、ファイル粒度のツールを上回ります。依存のない Rust バイナリ。',
      },
      'git-ai': {
        title: 'aic vs git-ai — AI コミットツール比較',
        description:
          'git-ai はローカルファーストの Git アシスタント — コミットメッセージ、PR 説明、無料オフラインの Ollama。hunk レベルのバッチング、コンフリクト解決、活発さで aic が勝ちます。',
      },
      opencommit: {
        title: 'aic vs OpenCommit — AI コミットツール比較',
        description:
          'OpenCommit は GitHub 2023 ハッカソン優勝の高機能 GPT ラッパー。aic はアトミックな履歴が重要な場面で勝ちます：hunk レベルのバッチングと AI コンフリクト解決、Node.js 不要。',
      },
    },
    alt: {
      hub: {
        title: 'AI コミットツールの代替案 — aic を選ぶ',
        description:
          'aicommits、OpenCommit、ai-commit、llmc、git-ai から aic へ乗り換える理由？ hunk レベルのバッチング、AI コンフリクト解決、Node.js 不要。',
      },
      aicommits: {
        title: 'aicommits の代替 — aic：バッチ処理されたアトミックコミット',
        description:
          'aicommits の代替をお探しですか？ aic は未ステージの作業をアトミックコミットに自動バッチし、マージコンフリクトを解決します — Node.js 不要。',
      },
      opencommit: {
        title: 'OpenCommit の代替 — aic：メッセージだけでなく原子履歴',
        description:
          'OpenCommit はハッカソン優勝の GPT ラッパー。hunk レベルのバッチングと AI コンフリクト解決を求めるなら aic が代替案 — Node.js 不要。',
      },
      'ai-commit': {
        title: 'ai-commit の代替 — aic：Node なしの hunk レベルコミット',
        description:
          'ai-commit は Claude Code 向け。未ステージの作業をアトミックコミットに分割しコンフリクトを解決したいなら aic が代替案。',
      },
      llmc: {
        title: 'llmc の代替 — aic：バッチング + 解決',
        description:
          'llmc は13のプロバイダーと TUI を提供。未ステージの作業をアトミックコミットに分割しコンフリクトを解決したいなら — Rust バイナリで aic を。',
      },
      'git-ai': {
        title: 'git-ai の代替 — aic：ファイル境界より下のコミット',
        description:
          'git-ai はローカルファーストのアシスタント。hunk レベルのバッチングと AI コンフリクト解決を求めるなら aic が代替案。',
      },
    },
    deepseek: {
      title: 'aic + DeepSeek — DeepSeek でコミットメッセージ',
      description:
        'DeepSeek で aic に Conventional Commits を書かせる:一級プロバイダー、1つのセットアップウィザード、キーはマシンから出ません。Node.js 不要。',
    },
    changelog: {
      title: 'aic チェンジログ — すべてのリリース',
      description:
        'aic の全リリースを順に — 機能、修正、リリースノート。最新：v{version}。',
    },
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
    resolve: '解決',
    roundup: '総まとめ',
    compare: '比較',
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
      '履歴が <em>"fix stuff"</em> や <em>"WIP"</em> だらけでいいはずがない。<b>aic</b> は diff を読み、本物の conventional コミットを書いて送り出します — コマンド1つ。マージ中なら、',
    ledeLink: 'クリーンな解決を提案',
    ledeAfter:
      'します — ファイルごとに、あなたが diff を承認するまで何も適用されません。ステージなし？1つのファイルを複数の焦点を絞ったコミットに、自動で分割します。',
    ctaHint: 'そして <code>{cmd}</code> を実行',
    /** Above-the-fold credibility line. `{version}` substituted at render. */
    trust: '★ {stars} · MIT · Node.js 不要 · 毎週リリース',
    /** 主アクションの命名(CRO)。 */
    ctaLabel: 'aic をインストール — コマンド1つ',
    /** CTA 下のプラットフォーム微コピー(CRO)。 */
    platformNote: 'Homebrew（macOS · Linux）— Windows・Unix のインストーラーは下へ ↓',
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
    aic: { description: 'ステージ済みをコミット · または未ステージの作業をまとめて計画' },
    'aic-setup': { description: '一度だけのウィザード — プロバイダ → キー → モデル' },
    'aic-list': { description: '解決済みの設定 + マスク済み API キーを表示' },
  },

  batching: {
    eyebrow: '03 — 自動バッチ処理',
    kicker: '何もステージしていない？',
    h2: '1つのファイル、複数のコミット',
    lede: 'aic は hunk レベルで diff を読みます — だから1つのファイルでも複数の焦点を絞ったコミットになり、それぞれが1つのアイデア。ステージなし、コマンド1つ、クリーンな履歴 — 1つのファイルが3つの関心事に触れていても。',
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
    // CRO トラストストリップ — インストール方法の前に主な懸念へ回答。
    trust: [
      '無料 & MIT',
      'Node.js 不要',
      '12プロバイダー',
      'git フックも動作',
      'キーはマシンから出ない',
    ],
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
      alternatives: '代替案',
      deepseek: 'DeepSeek',
      changelog: '変更履歴',
    },
    meta: 'MIT ライセンス · Astro + Tailwind + GSAP で構築',
  },

  resolve: {
    eyebrow: '機能 · マージコンフリクト',
    h1: {
      main: 'マージコンフリクトを解決。',
      // 日本語は語順が逆: 手動マージ + なしで。
      sub: ['手動マージ', '', 'なしで。'],
    },
    lede: '<b>aic</b> はコンフリクトしたすべてのファイルを読み、クリーンな解決を提案し、diff を見せます。ファイルごとに承認 — あなたの許可なしには何も適用されず — その後マージを完了します。',
    ctaHint: 'そして <code>aic resolve</code> を実行',
    workflow: {
      h2: 'aic がコンフリクトを解決する流れ',
      lede: 'resolve はワークフローであり、魔法の杖ではありません。aic はコンフリクトした各ファイルを巡り、修正を提案し、毎ステップで承認のために止まります。',
      steps: [
        {
          h: '検出',
          n: '<code>aic resolve</code> はリポジトリの状態を読みます。マージ中で未解決のファイルがあれば、それを一覧表示します。',
        },
        {
          h: 'ファイルごとに解決',
          n: '各ファイルについて、aic はコンフリクトした内容をモデルに送り、マーカーのないバージョンを受け取ります。マーカーが漏れていれば、一度再試行します。',
        },
        {
          h: 'diff を確認',
          n: 'aic はすべての提案された解決を1つの diff にまとめます — マーカーは除去、両側は調和 — 何が変わるか正確に分かります。',
        },
        {
          h: 'ファイルごとに承認',
          n: '各ファイルには独自の <code>apply?</code> プロンプトがあります。yes なら aic は解決を書き込んでステージします。no ならそのファイルは触られません。',
        },
        {
          h: '完了',
          n: '未解決がなくなると、aic はマージの <code>--continue</code> を実行します。途中のブロッカーは明確な案内とともに報告され、謎のカウントではありません。',
        },
      ],
    },
    twoWays: {
      h2: '2つの入り口',
      lede: 'コマンドを覚える必要はありません。明示的な動詞と、忘れた時にキャッチするガードがあります。',
      points: [
        {
          h: '<code>aic resolve</code>',
          n: '明示的な動詞。リポジトリがマージ中ならいつでも実行でき、aic は上の検出ステップから引き継ぎます。',
        },
        {
          h: 'コミットガード',
          n: 'コンフリクトしたリポジトリで素の <code>aic</code> を実行すると、aic はそれに気づき、resolve への引き継ぎを提案します。さらに深いガードが、コンフリクトマーカーを含むコミットをブロックします。親しみやすい入り口、そして安全網。',
        },
      ],
    },
    review: {
      h2: 'あなたの許可なくして何も適用されない',
      lede: '要点はこれ：aic は提案し、あなたが決める。あなたが見て承認していない解決を書き込むことはありません。',
      callout:
        '<strong>適用前に確認。</strong>提案されたすべての解決は、ディスクに触れる<em>前に</em> diff として表示されます。各ファイルは独立した <code>y/n</code> — 信頼するものは承認、しないものは却下、却下されたファイルはあなたが残した通りに残ります。',
    },
    limits: {
      h2: 'aic があなたに残すもの',
      lede: '先に正直に言っておきます。ツールがどこまでできて、どこからはあなた次第なのかを把握するためです。これらは v1 の制限です。',
      points: [
        {
          h: 'マージコンフリクトのみ',
          n: 'aic が扱うのはコンフリクトした<em>マージ</em>状態。進行中の rebase や <code>am</code> は v1 では検出されて拒否されます — 完了または中止してから resolve してください。',
        },
        {
          h: '自動解決できないコンフリクトも',
          n: 'バイナリファイル、巨大ファイル、delete/modify コンフリクトは理由付きでスキップされます — aic は手動で解決できるようそれらを指し示します。',
        },
        {
          h: '完了はオールオアナッシング',
          n: 'どのみち <code>--continue</code> は未解決のパスがあるとブロックするので、残り1つのブロッカーが完了を止めます。aic の案内は何が残っているか正確に伝えます。',
        },
      ],
    },
    verdict: {
      h2: '要するに',
      body: '<code>aic resolve</code> はコンフリクトしたファイルを読み、実際に確認できる解決を提案し、あなたが承認したものだけを書き込み — それからマージを完了します。aic がコミットに使うのと同じ「diff を読み、修正を起草し、出荷する」ループが、git の最も見苦しい部分に向けられています。',
      releaseNotes: 'v0.3.0 リリースノート',
    },
  },

  vs: {
    // Shared feature-matrix column labels — identical for every rival,
    // so defined once here rather than copied into each rival block.
    matrix: {
      heading: '機能ごとの比較',
      capability: '能力',
      aic: 'aic',
    },
    aicommits: {
      eyebrow: '比較 · aicommits の代替',
      h1: 'aic vs aicommits',
      ledeAfter:
        ' は AI コミットメッセージツールとして定着したデフォルト — 導入実績、エコシステム、先発の勢い。このページはそうでないふりをするためのものではありません。いつ <strong>aic</strong> がより良い選択か — そしていつ aicommits に留まるべきかを正確に伝えます。',
      callout:
        '<strong>世間は狭いですね。</strong>aicommits 自身の README も、名前が長すぎる場合は <code>aic</code> にエイリアスすることを提案しています。私たちは <code>aic</code> を独立したツールとして出荷しました — そしてそれは hunk レベルで未ステージの作業を論理的なコミットに分割するので、1つのファイルでも複数になり得ます。',
      winsH2: 'aic がリードする点',
      rivalH2: 'aicommits が依然として勝つ点',
      rivalLede:
        'aic が人気ツールにすべてで勝つふりはしません。勝ちません。これらが自動バッチ処理より重要なら、aicommits が正しい選択です：',
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
          note: 'aic v0.3.5 で搭載。aicommits（および roundup のすべてのツール）は多くてもファイル境界で分割。aic は hunk レベルで diff を読むので、3つの関心事を抱える1ファイルが3つの焦点を絞ったコミットになります。',
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
          note: 'aicommits は間接的にしか到達しません。aic はそれらをファーストクラスとして出荷し、理にかなったデフォルトモデルを付けます。',
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
          rival: 'プレーン · コンベンショナル · gitmoji',
          note: 'aic は設計上コンベンショナルのみ。aicommits はプレーンな非構造モードも含めて選べます。',
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
          note: 'aicommits はより多くの調整オプションを提供します。aic は `AIC_SYSTEM_PROMPT` の上書きをサポートしますが、選択できるオプションはより少ないです。',
        },
        popularity: {
          feature: '人気とエコシステム',
          aic: '新しく、小規模',
          rival: '定着した先発',
          note: 'aicommits はより大きなコミュニティを持つ知られた存在です。勢いが最も重要なら、そのまま使い続けましょう。',
        },
      },
      faq: {
        h2: 'よくある質問',
        items: [
          {
            q: 'aic は aicommits の良い代替になりますか？',
            a: '未ステージの作業を論理コミットに分割し（単一ファイル内でも）、マージコンフリクトを AI で解決したいなら、はい。git フック、gitmoji コミット、複数候補に依存するなら aicommits が適切です。',
          },
          {
            q: 'aic は aicommits のように Node.js が必要ですか？',
            a: 'いいえ。aic は単一の Rust バイナリ — node_modules も npm グローバルインストールも Node バージョン問題もありません。',
          },
        ],
      },
    },
    'ai-commit': {
      eyebrow: '比較 · ai-commit の代替',
      h1: 'aic vs ai-commit',
      // リンクは先頭でライバル名を包みます；これは末尾（<strong> を含む；set:html）。
      ledeAfter:
        ' は Claude Code ネイティブの AI コミットメッセージツール — ソースファイルを読んで文脈を得られ、中国語・英語のメッセージをその場で生成できます。このページは公平に比較します：ai-commit のニッチが勝つところは正直に言います。<strong>aic</strong> が勝つのはアトミックな履歴が重要な場面：hunk レベルのバッチングと AI コンフリクト解決、依存のない Rust バイナリで。',
      // <strong>/<code> を含む；set:html。
      callout:
        '<strong>2つの異なる賭け。</strong> ai-commit は Claude Code を文脈エンジンに賭け、aic は diff そのものに賭けます。どちらも無料。未ステージの作業をファイル境界の下で論理コミットに分割し、マージコンフリクトまで解決できるのは aic だけです。',
      winsH2: 'aic がリードする点',
      rivalH2: 'ai-commit がまだ勝つ点',
      rivalLede:
        'ai-commit が本当に優れている点がいくつかあります。これらが自動バッチングより重要なら、ai-commit が正しい選択かもしれません：',
      tieTag: 'トレードオフ',
      verdict: {
        h2: '短いまとめ',
        // <strong>/<code> を含む；set:html。
        body: '未ステージの作業が溜まり、それをクリーンでアトミックなコミットに分割したい — またはマージコンフリクトをファイル単位の承認で解決したいなら <strong>aic</strong>。Claude Code を使い、中国語のコミットメッセージや絵文字付きの conventional commit が欲しいなら、ai-commit は堅実で誠実なツールです。',
      },
      // マトリクスと結論のポイントリスト（`AI_COMMIT_COMPARISON.axes` の axis id で鍵付け）。
      axes: {
        'auto-batch': {
          feature: '未ステージの作業を複数コミットに自動バッチング',
          aic: 'あり — 未ステージの変更を論理的なアトミックコミットに分割',
          rival: 'なし — ステージした diff ごとに1メッセージ',
          note: 'aic の看板機能。ai-commit はステージした内容に1メッセージを書くだけ。',
        },
        'per-hunk': {
          feature: '単一ファイルを複数コミットに分割（per-hunk）',
          aic: 'あり — 各 hunk を意図に応じて自分のコミットへ',
          rival: 'なし — せいぜいファイル粒度',
          note: 'aic は hunk レベルで diff を読みます；ai-commit（ラウンドアップの全ツール同様）はファイルを原子単位とします。',
        },
        resolve: {
          feature: 'マージコンフリクトの解決',
          aic: 'あり — `aic resolve` が diff を提案し、ファイルごとに確認',
          rival: 'なし — コミットメッセージのみ',
          note: 'ai-commit にはコンフリクト対応がありません — マージは手作業のまま。',
        },
        'claude-context': {
          feature: 'Claude Code の文脈',
          aic: 'なし',
          rival: 'あり — ソースファイルを読んで文脈を得る',
          note: 'ai-commit の看板アドバンテージ：Claude Code を使っていれば diff を超えて見られます。',
        },
        'provider-reach': {
          feature: 'プロバイダー網羅',
          aic: '12の一級プロバイダー + OpenAI 互換',
          rival: '任意の OpenAI 互換エンドポイント + Claude Code',
          note: 'どちらもオープン。aic は妥当なデフォルトモデルを持つ一級プロバイダーが多く、ai-commit は OpenAI 互換の任意エンドポイントと Claude Code に対応。',
        },
        runtime: {
          feature: 'ランタイムと依存',
          aic: 'Rust バイナリ — Node.js 不要',
          rival: 'Node.js ≥ 22.19 — Homebrew / curl',
          note: 'aic は単一の静的バイナリ；ai-commit は Node が PATH に必要（Homebrew tap も Node を導入します）。',
        },
        windows: {
          feature: 'Windows 対応',
          aic: 'あり — PowerShell インストーラー、CI テスト済み',
          rival: 'なし — macOS/Linux のみ',
          note: 'ai-commit は Homebrew/curl で導入；aic はネイティブの Windows インストーラーを提供。',
        },
        language: {
          feature: 'コミットメッセージの言語',
          aic: '英語（サイトは4言語）',
          rival: 'あり — `-l en` / `-l zh`',
          note: 'ai-commit は中国語メッセージをその場で生成；aic の CLI は現状英語のみ。',
        },
        emoji: {
          feature: 'メッセージ内の絵文字',
          aic: 'なし',
          rival: 'あり — `--emoji`',
          note: 'Conventional Commits は aic の唯一の形式；ai-commit は任意で絵文字を付けます。',
        },
        candidates: {
          feature: '複数のメッセージ候補',
          aic: 'なし',
          rival: 'なし',
          note: 'どちらも N 個から選ぶメニューはありません — 1メッセージのみ。',
        },
        popularity: {
          feature: 'コミュニティ規模',
          aic: '若い（約8★）',
          rival: '若い（約8★）',
          note: 'どちらも初期段階。ai-commit のバイリンガル文書は中国語話者を引き寄せ、aic は4言語を提供。',
        },
      },
      faq: {
        h2: 'よくある質問',
        items: [
          {
            q: 'aic は ai-commit の良い代替になりますか？',
            a: 'hunk レベルの自動バッチングとマージコンフリクト解決を求めるなら、はい。Claude Code を使うか中国語のコミットメッセージが必要なら ai-commit が適切です。',
          },
          {
            q: 'aic は Claude Code に対応していますか？',
            a: 'aic に Claude Code 統合はありません — LLM プロバイダーに直接呼び出し、Node.js も不要です。Claude Code の文脈が欲しいなら ai-commit がニッチな選択肢です。',
          },
        ],
      },
    },
    llmc: {
      eyebrow: '比較 · llmc の代替',
      h1: 'aic vs llmc',
      // リンクは先頭でライバル名を包みます；これは末尾（<strong> を含む；set:html）。
      ledeAfter:
        ' は最大のプロバイダー数が売り — 13の LLM バックエンド、TOML プロンプト、洗練された TUI。実力のある本物のツールです。このページは公平に比較します：引き分けなら引き分けと言います。<strong>aic</strong> が勝つのは — hunk レベルのバッチングとマージコンフリクト解決、依存のない Rust バイナリ — それが乗り換えの理由です。',
      // <strong>/<code> を含む；set:html。
      callout:
        '<strong>同じ仕様、異なる焦点。</strong> どちらも Conventional Commits を書きます。llmc はプロバイダー選択とターミナル体験を最大化；aic はコミット履歴の質を最大化 — 1ファイルが複数の焦点を絞ったコミットになり、`aic resolve` がファイルごとに承認したマージを完了します。',
      winsH2: 'aic がリードする点',
      rivalH2: 'llmc がまだ勝つ点',
      rivalLede:
        'llmc は2つの正直な譲歩を勝ち取っています — プロバイダー数と TUI の仕上がり。それらがアトミックな履歴より重要なら、公平な選択です：',
      tieTag: 'トレードオフ',
      verdict: {
        h2: '短いまとめ',
        // <strong>/<code> を含む；set:html。
        body: '未ステージの作業が溜まり、それをクリーンでアトミックな conventional commit にしたい — または AI でマージコンフリクトを解決したいなら <strong>aic</strong>。最大のプロバイダーメニューと最も美しいターミナル出力が欲しいなら llmc は立派なツールです — ただしファイル粒度で、2025年後半から休眠している点は理解しておいてください。',
      },
      // マトリクスと結論のポイントリスト（`LLMC_COMPARISON.axes` の axis id で鍵付け）。
      axes: {
        'auto-batch': {
          feature: '未ステージの作業を複数コミットに自動バッチング',
          aic: 'あり — 未ステージの変更を論理的なアトミックコミットに分割',
          rival: 'なし — ステージした diff ごとに1メッセージ',
          note: 'aic の看板機能。llmc はステージした内容を1メッセージでコミットします。',
        },
        'per-hunk': {
          feature: '単一ファイルを複数コミットに分割（per-hunk）',
          aic: 'あり — 各 hunk を意図に応じて自分のコミットへ',
          rival: 'なし — せいぜいファイル粒度',
          note: 'aic は hunk レベルで diff を読みます；llmc（ラウンドアップの全ツール同様）はファイルを原子単位とします。',
        },
        resolve: {
          feature: 'マージコンフリクトの解決',
          aic: 'あり — `aic resolve` が diff を提案し、ファイルごとに確認',
          rival: 'なし — コミットメッセージのみ',
          note: 'llmc にはコンフリクト対応がありません — マージは手作業のまま。',
        },
        'provider-count': {
          feature: 'プロバイダー数',
          aic: '12（11の一級 + OpenAI 互換）',
          rival: '13',
          note: 'llmc はメニューに1つ多くあります。aic は一級の Anthropic/Gemini/DeepSeek と OpenAI 互換の逃げ道で応じます。',
        },
        tui: {
          feature: 'ターミナル体験',
          aic: 'クリアで速い行ベース出力',
          rival: '進行タイマー付きのリッチ TUI',
          note: 'llmc の UI が目玉 — リアルタイム状態とタイマー。aic は速度とスクリプト性を重視。',
        },
        runtime: {
          feature: 'ランタイムと依存',
          aic: 'Rust バイナリ — Node.js 不要',
          rival: 'Node.js — npx / npm',
          note: 'aic は単一の静的バイナリ；llmc は Node と npx で動作。',
        },
        setup: {
          feature: 'セットアップ',
          aic: '対話式の `aic setup` ウィザード',
          rival: '任意の `llmc init`（TOML 設定）',
          note: 'aic は プロバイダー → キー → モデル を案内；llmc は適切なデフォルトを持つが設定はファイルベース。',
        },
        'custom-prompt': {
          feature: 'カスタムプロンプト',
          aic: '環境変数で上書き（`AIC_SYSTEM_PROMPT`）',
          rival: '`${diff}` 補間付き TOML プロンプト',
          note: 'llmc のプロンプト設定はよりリッチ；aic はシステムプロンプトの環境変数上書きを提供。',
        },
        activity: {
          feature: 'プロジェクトの活動状況',
          aic: '毎週リリース、v0.4.0（2026-08-01）',
          rival: '2025-10 以降静か、GitHub リリースなし',
          note: 'aic は毎週のリリースと公開チェンジログ；llmc は約9ヶ月休眠。',
        },
        candidates: {
          feature: '複数のメッセージ候補',
          aic: 'なし',
          rival: 'なし',
          note: 'どちらも N 個から選ぶメニューはありません — 1メッセージのみ。',
        },
        formats: {
          feature: 'コミットメッセージ形式',
          aic: 'Conventional Commits',
          rival: 'Conventional Commits',
          note: 'どちらも設計上 conventional のみ — 引き分け。',
        },
      },
      faq: {
        h2: 'よくある質問',
        items: [
          {
            q: 'aic は llmc の良い代替になりますか？',
            a: '未ステージの作業をアトミックで conventional なコミットにし、マージコンフリクトを解決したいなら、はい。llmc はプロバイダー数（13）と TUI の仕上がりで優位を保ちます。',
          },
          {
            q: 'llmc はまだメンテナンスされていますか？',
            a: 'llmc は2025年後半から静かで、GitHub リリースもありません。aic は毎週リリースし、公開チェンジログを維持しています。',
          },
        ],
      },
    },
    'git-ai': {
      eyebrow: '比較 · git-ai の代替',
      h1: 'aic vs git-ai',
      ledeAfter:
        ' はローカルファーストの Git アシスタント — コミットメッセージ、PR 説明、デフォルトでゼロ設定の Ollama。まだ初期段階（v0.1.3）で2026年初頭から静かですが、PR 説明という角度は本物です。このページは公平に比較します。<strong>aic</strong> が勝つのはアトミックな履歴が重要な場面：hunk レベルのバッチングと AI コンフリクト解決、依存のない Rust バイナリで。',
      callout:
        '<strong>2つのヘルパー、異なる範囲。</strong> git-ai は git をアシスタントで拡張します（コミット + PR 説明、ローカルファースト）。aic は1つのことを深く：クリーンでアトミックな conventional コミット履歴 — そしてマージコンフリクトの解決。',
      winsH2: 'aic がリードする点',
      rivalH2: 'git-ai がまだ勝つ点',
      rivalLede:
        'git-ai はラウンドアップで唯一 PR 説明を作成し、無料のローカルモデルをデフォルトにします。どちらかがアトミックな履歴より重要なら、公平な選択です：',
      tieTag: 'トレードオフ',
      verdict: {
        h2: '短いまとめ',
        body: '未ステージの作業が溜まり、それをクリーンでアトミックなコミットに分割したい — またはマージコンフリクトを解決したいなら <strong>aic</strong>。PR 説明も作成するローカルファーストのアシスタントが欲しいなら git-ai は注目に値します — ただしファイル粒度で、2026年2月から静かである点は理解しておいてください。',
      },
      faq: {
        h2: 'よくある質問',
        items: [
          {
            q: 'aic は git-ai の良い代替になりますか？',
            a: '未ステージの作業を論理コミットに分割し、マージコンフリクトを解決したいなら、はい。PR 説明と無料ローカルデフォルトが欲しいなら git-ai は依然として興味深いです。',
          },
          {
            q: 'aic は PR 説明を作成しますか？',
            a: 'いいえ — aic はコミットとコンフリクト解決に集中します。PR 説明は git-ai のラウンドアップでの強みです。',
          },
        ],
      },
      axes: {
        'auto-batch': {
          feature: '未ステージの作業を複数コミットに自動バッチング',
          aic: 'あり — 未ステージの変更を論理的なアトミックコミットに分割',
          rival: 'なし — ステージした diff ごとに1メッセージ',
          note: 'aic の看板機能。git-ai はステージした内容に1メッセージを書くだけ。',
        },
        'per-hunk': {
          feature: '単一ファイルを複数コミットに分割（per-hunk）',
          aic: 'あり — 各 hunk を意図に応じて自分のコミットへ',
          rival: 'なし — せいぜいファイル粒度',
          note: 'aic は hunk レベルで diff を読みます；git-ai（ラウンドアップの全ツール同様）はファイルを原子単位とします。',
        },
        resolve: {
          feature: 'マージコンフリクトの解決',
          aic: 'あり — `aic resolve` が diff を提案し、ファイルごとに確認',
          rival: 'なし — コミットメッセージのみ',
          note: 'git-ai にはコンフリクト対応がありません — マージは手作業のまま。',
        },
        'pr-description': {
          feature: 'PR 説明',
          aic: 'なし',
          rival: 'あり — `git ai pr`',
          note: 'git-ai は PR タイトルと説明を作成；aic はコミットと解決に集中。',
        },
        'local-default': {
          feature: 'ローカルファーストのデフォルト',
          aic: '任意のプロバイダーを選択（Ollama 含む）',
          rival: 'ゼロ設定の Ollama — 無料・オフライン',
          note: 'git-ai はすぐにオフラインで動作；aic はプロバイダーキーが必要だが Ollama もサポート。',
        },
        runtime: {
          feature: 'ランタイムと依存',
          aic: 'Rust バイナリ — Node.js 不要',
          rival: 'Node.js ≥ 22 — npm / npx',
          note: 'aic は単一の静的バイナリ；git-ai は Node と scoped npm パッケージで動作。',
        },
        setup: {
          feature: 'セットアップ',
          aic: '対話式の `aic setup` ウィザード',
          rival: '`git ai config` コマンド',
          note: 'aic は プロバイダー → キー → モデル を案内；git-ai は CLI で設定。',
        },
        providers: {
          feature: 'プロバイダー網羅',
          aic: '12の一級プロバイダー + OpenAI 互換',
          rival: 'Ollama、OpenAI、Anthropic',
          note: 'aic は妥当なデフォルトモデルを持つ一級プロバイダーがより多い。',
        },
        activity: {
          feature: 'プロジェクトの活動状況',
          aic: '毎週リリース',
          rival: '2026-02 以降静か',
          note: 'aic は毎週リリース；git-ai は約6ヶ月休眠。',
        },
        formats: {
          feature: 'コミットメッセージ形式',
          aic: 'Conventional Commits',
          rival: 'conventional + gitmoji オプション',
          note: 'git-ai は gitmoji 形式を提供；aic は設計上 conventional のみ。',
        },
        candidates: {
          feature: '複数のメッセージ候補',
          aic: 'なし',
          rival: 'なし',
          note: 'どちらも N 個から選ぶメニューはありません — 1メッセージのみ。',
        },
      },
    },

    opencommit: {
      eyebrow: '比較 · OpenCommit の代替',
      h1: 'aic vs OpenCommit',
      ledeAfter:
        ' は GitHub 2023 ハッカソン優勝者で、git 向け最高機能の GPT ラッパー — GitMoji、設定可能な説明、ローカル Ollama、そして大きなコミュニティ。このページは公平に比較します：OpenCommit が勝つところは正直に言います。<strong>aic</strong> が勝つのはアトミックな履歴が重要な場面 — hunk レベルのバッチングと AI コンフリクト解決、依存のない Rust バイナリで。',
      callout:
        '<strong>どちらも git を愛する；分割の仕方が違う。</strong> OpenCommit は実績のある LLM ラッパー — ステージした diff に1メッセージ、絵文字は任意。aic はここで唯一ファイル境界の下まで行く：未ステージの作業が論理アトミックコミットになり、`aic resolve` がファイルごとに承認したマージを完了します。',
      winsH2: 'aic がリードする点',
      rivalH2: 'OpenCommit がまだ勝つ点',
      rivalLede:
        'OpenCommit は正当にその地位を獲得しています：高機能で、広く採用され、活発にメンテナンスされています。これらが自動バッチングより重要なら、公平な選択です：',
      tieTag: 'トレードオフ',
      verdict: {
        h2: '短いまとめ',
        body: '未ステージの作業が溜まり、それをクリーンでアトミックなコミットに分割したい — またはマージコンフリクトをファイル単位の承認で解決したいなら <strong>aic</strong>。実績があり、ハッカソン優勝、GitMoji と巨大なコミュニティを持つラッパーが欲しいなら、OpenCommit は素晴らしいツールです。',
      },
      faq: {
        h2: 'よくある質問',
        items: [
          {
            q: 'aic は OpenCommit の良い代替になりますか？',
            a: '未ステージの作業を論理コミットに分割し（単一ファイル内でも）、AI でマージコンフリクトを解決したいなら、はい。実績のあるラッパーと GitMoji、最大のコミュニティが欲しいなら OpenCommit が適切です。',
          },
          {
            q: 'aic は GitMoji に対応していますか？',
            a: 'いいえ — aic は Conventional Commits のみ書きます。OpenCommit は設定可能な GitMoji を提供します（デフォルト10個、`--fgm` で完全仕様）。',
          },
        ],
      },
      axes: {
        'auto-batch': {
          feature: '未ステージの作業を複数コミットに自動バッチング',
          aic: 'あり — 未ステージの変更を論理的なアトミックコミットに分割',
          rival: 'なし — ステージした diff ごとに1メッセージ',
          note: 'aic の看板機能。OpenCommit はステージした内容に1メッセージを書くだけ。',
        },
        'per-hunk': {
          feature: '単一ファイルを複数コミットに分割（per-hunk）',
          aic: 'あり — 各 hunk を意図に応じて自分のコミットへ',
          rival: 'なし — せいぜいファイル粒度',
          note: 'aic は hunk レベルで diff を読みます；OpenCommit（ラウンドアップの全ツール同様）はファイルを原子単位とします。',
        },
        resolve: {
          feature: 'マージコンフリクトの解決',
          aic: 'あり — `aic resolve` が diff を提案し、ファイルごとに確認',
          rival: 'なし — コミットメッセージのみ',
          note: 'OpenCommit にはコンフリクト対応がありません — マージは手作業のまま。',
        },
        runtime: {
          feature: 'ランタイムと依存',
          aic: 'Rust バイナリ — Node.js 不要',
          rival: 'Node.js — npm',
          note: 'aic は単一の静的バイナリ；OpenCommit は Node と npm で動作。',
        },
        setup: {
          feature: 'セットアップ',
          aic: '対話式の `aic setup` ウィザード',
          rival: '`oco config set` コマンド',
          note: 'aic は プロバイダー → キー → モデル を案内；OpenCommit は CLI コマンドや `.env` で設定。',
        },
        'provider-count': {
          feature: 'プロバイダー網羅',
          aic: '12の一級プロバイダー + OpenAI 互換',
          rival: 'Claude、GPT、その他すべてのプロバイダー',
          note: 'どちらもマルチプロバイダー。aic は妥当なデフォルトモデルを持つ一級プロバイダーを12提供；OpenCommit は任意のプロバイダーを手動設定。',
        },
        emoji: {
          feature: 'GitMoji サポート',
          aic: 'なし',
          rival: 'あり — 設定可能、`--fgm` で完全仕様',
          note: 'OpenCommit は GitMoji で装飾；aic は設計上 conventional のみ。',
        },
        community: {
          feature: 'コミュニティと採用',
          aic: '初期段階（約8★）',
          rival: '7,500★ · 約12k npm ダウンロード/月 · ハッカソン優勝',
          note: 'OpenCommit ははるかに確立されています。勢いが最優先なら、この行は OpenCommit の勝ち。',
        },
        activity: {
          feature: 'プロジェクトの活動状況',
          aic: '毎週リリース',
          rival: '活発（2026-07 に更新）',
          note: 'どちらも積極的にメンテナンス — 引き分け。',
        },
        candidates: {
          feature: '複数のメッセージ候補',
          aic: 'なし',
          rival: 'なし',
          note: 'どちらも N 個から選ぶメニューはありません — 1メッセージのみ。',
        },
      },
    },

    more: {
      h2: '他の比較',
      vsLabel: 'aic vs {name}',
      roundup: 'aic をベスト AI コミットツールの総まとめで見る →',
      installCta: 'aic をインストール →',
    },
  },

  alt: {
    hub: {
      eyebrow: '代替案',
      h1: 'AI コミットツールの代替案 — aic を選ぶ',
      lede: 'この分野のどの AI コミットツールも、ステージした diff に対して1メッセージを書くだけです。aic は唯一ファイル境界の下まで行く：未ステージの作業が論理アトミックコミットになり、<code>aic resolve</code> がファイルごとに承認したマージを完了します。いつ乗り換えるのが賢明かを正直に見てみましょう。',
      h2: '代替案一覧',
      items: [
        {
          id: 'aicommits',
          name: 'aicommits',
          line: '既存の大手 — メッセージだけでなく、自動バッチングとコンフリクト解決が欲しいなら乗り換え。',
        },
        {
          id: 'opencommit',
          name: 'OpenCommit',
          line: 'ハッカソン優勝のラッパー — GitMoji だけでなく原子履歴が欲しいなら乗り換え。',
        },
        {
          id: 'ai-commit',
          name: 'ai-commit',
          line: 'Claude Code 向け — Node.js なしの hunk レベル分割が欲しいなら乗り換え。',
        },
        {
          id: 'llmc',
          name: 'llmc',
          line: '最多プロバイダ向け — TUI だけでなくバッチングと解決が欲しいなら乗り換え。',
        },
        {
          id: 'git-ai',
          name: 'git-ai',
          line: 'ローカルファーストのアシスタント — ファイル境界より下のコミット分割が欲しいなら乗り換え。',
        },
      ],
    },
    aicommits: {
      eyebrow: 'aicommits から乗り換え',
      h1: 'aicommits の代替：aic',
      lede: 'aicommits は定着したデフォルト — ステージした diff ごとに1メッセージという点では実績のあるツールです。本当の問題が未ステージの作業が溜まり履歴が濁ることなら、aic はそのために作られた代替案です：変更を論理アトミックコミットに分割し、ファイル単位の承認でマージコンフリクトを解決します。',
      whyH: 'aicommits から乗り換える理由',
      why: 'aicommits はステージした内容に1メッセージを書きます — しかし散らかった作業ツリーを論理コミットに分割できず、マージをほどく手助けもできません。どちらも concern 混在のコミットと手作業のコンフリクト解決を残します。',
      switchH: '以下なら aic へ：',
      shouldSwitch:
        '…未ステージの作業が溜まり、それをクリーンでアトミックな conventional コミットにしたい（単一ファイル内でも）— または Node.js を入れずに AI 解決のマージコンフリクトが欲しい。',
      notH: '以下なら aicommits に留まる：',
      shouldNot:
        '…`prepare-commit-msg` フックに依存し、gitmoji や plain 形式が欲しく、複数のメッセージ候補が必要、または最大コミュニティの安心感が欲しい。',
      migrateH: '乗り換え方',
      migrate: [
        'aic をインストール：`brew tap CaicoLeung/aic && brew install aic`',
        '一度だけ設定：`aic setup` を実行 — プロバイダー・キー・モデルを1つのウィザードで',
        'コミット：作業をステージして `aic` を実行；aic が未ステージの作業を自動バッチします',
      ],
    },
    opencommit: {
      eyebrow: 'OpenCommit から乗り換え',
      h1: 'OpenCommit の代替：aic',
      lede: 'OpenCommit は実績があり高機能 — GitMoji、設定可能な説明、巨大なコミュニティ。しかしステージした diff に1メッセージを書くだけです。コミット履歴の質が問題なら、aic が代替案：依存のない Rust バイナリで hunk レベルのバッチングと AI コンフリクト解決。',
      whyH: 'OpenCommit から乗り換える理由',
      why: 'OpenCommit は LLM をうまくラップします — ただしファイル粒度まで。1つのファイルを3つの理由で触れても1コミットになり、マージコンフリクトは依然として手作業です。',
      switchH: '以下なら aic へ：',
      shouldSwitch:
        '…未ステージの作業を論理アトミックコミットに分割したい（単一ファイル内でも）— または Node.js なしでファイル単位承認のコンフリクト解決が欲しい。',
      notH: '以下なら OpenCommit に留まる：',
      shouldNot:
        '…実績あるハッカソン優勝ラッパー、GitMoji、最大コミュニティが欲しく、ファイル粒度で問題ない。',
      migrateH: '乗り換え方',
      migrate: [
        'aic をインストール：`brew tap CaicoLeung/aic && brew install aic`',
        '一度だけ設定：`aic setup` を実行 — プロバイダー・キー・モデルを1つのウィザードで',
        'コミット：ステージ済み・未ステージの作業に `aic` を実行；盲目的に何も適用されません',
      ],
    },
    'ai-commit': {
      eyebrow: 'ai-commit から乗り換え',
      h1: 'ai-commit の代替：aic',
      lede: 'ai-commit は OpenAI 互換エンドポイントか Claude Code で Conventional Commits を書きます — Claude Code を使っているなら便利。原子履歴が欲しいなら aic が代替案：hunk レベルのバッチング、コンフリクト解決、ガイド付きセットアップウィザード、Node 依存なし。',
      whyH: 'ai-commit から乗り換える理由',
      why: 'ai-commit はファイル粒度で環境変数設定：ステージした diff ごとに1メッセージ、分割なし、コンフリクト対応なし、そして Node.js ≥ 22 が必要。',
      switchH: '以下なら aic へ：',
      shouldSwitch:
        '…未ステージの作業を論理コミットに分割し、マージコンフリクトを解決し、ガイド付きウィザードが欲しい — Node.js なし。',
      notH: '以下なら ai-commit に留まる：',
      shouldNot:
        '…Claude Code を日常的に使い、中国語のコミットメッセージ（`-l zh`）が欲しい、または絵文字付きの conventional コミットが欲しい。',
      migrateH: '乗り換え方',
      migrate: [
        'aic をインストール：`brew tap CaicoLeung/aic && brew install aic`',
        '一度だけ設定：`aic setup` を実行 — プロバイダー・キー・モデルを1つのウィザードで',
        'コミット：作業をステージして `aic` を実行；aic が未ステージの作業を自動バッチします',
      ],
    },
    llmc: {
      eyebrow: 'llmc から乗り換え',
      h1: 'llmc の代替：aic',
      lede: 'llmc は最多プロバイダの選択肢 — 13バックエンド、TOML プロンプト、洗練された TUI。しかしステージした内容を1メッセージでコミットします。コミット履歴の質なら aic が代替案で、活発にメンテナンスされています。',
      whyH: 'llmc から乗り換える理由',
      why: 'llmc は2025年後半から静かで GitHub リリースもありません。そしてこの分野の全ツール同様ファイル粒度 — 分割もコンフリクト解決もなし。',
      switchH: '以下なら aic へ：',
      shouldSwitch:
        '…未ステージの作業をクリーンでアトミックな conventional コミットにし、コンフリクトを AI で解決し、公開チェンジログのある活発なプロジェクトが欲しい。',
      notH: '以下なら llmc に留まる：',
      shouldNot:
        '…最も広いプロバイダメニュー（13）、最も美しい TUI、豊かな TOML プロンプト設定が欲しい。',
      migrateH: '乗り換え方',
      migrate: [
        'aic をインストール：`brew tap CaicoLeung/aic && brew install aic`',
        '一度だけ設定：`aic setup` を実行 — プロバイダー・キー・モデルを1つのウィザードで',
        'コミット：ステージ済み・未ステージの作業に `aic` を実行；盲目的に何も適用されません',
      ],
    },
    'git-ai': {
      eyebrow: 'git-ai から乗り換え',
      h1: 'git-ai の代替：aic',
      lede: 'git-ai はローカルファーストの Git アシスタント — コミット、PR 説明、ゼロ設定の Ollama。初期段階（v0.1.3）で、2026年2月から休眠しています。原子履歴なら aic が代替案で、毎週リリースしています。',
      whyH: 'git-ai から乗り換える理由',
      why: 'git-ai はファイル粒度で、数ヶ月更新されていません — PR 説明機能以外に、分割も解決もできません。',
      switchH: '以下なら aic へ：',
      shouldSwitch:
        '…未ステージの作業を論理コミットに分割し、マージコンフリクトを解決したい — 毎週リリースするプロジェクトから。',
      notH: '以下なら git-ai に留まる：',
      shouldNot: '…PR 説明と、無料・オフライン・ゼロ設定のデフォルトが欲しい。',
      migrateH: '乗り換え方',
      migrate: [
        'aic をインストール：`brew tap CaicoLeung/aic && brew install aic`',
        '一度だけ設定：`aic setup` を実行 — プロバイダー・キー・モデルを1つのウィザードで',
        'コミット：作業をステージして `aic` を実行；aic が未ステージの作業を自動バッチします',
      ],
    },
  },

  deepseek: {
    eyebrow: '機能 · DeepSeek',
    h1: 'DeepSeek でコミットメッセージ',
    lede: 'DeepSeek は <b>aic</b> の一級プロバイダーです:セットアップウィザードで選び、キーを貼り付ければ、aic が diff を読んで conventional コミットを書きます — コマンド1つ。キーはマシンから出ません。aic のすべて — 自動バッチング、<code>aic resolve</code>、Node.js 不要 — は DeepSeek でもそのまま使えます。',
    whyH: 'DeepSeek + aic を選ぶ理由',
    why: [
      '一級プロバイダー — OpenRouter 経由やカスタムエンドポイントが不要',
      '高速で安い — コミットメッセージ向けに調整された軽量モデルをデフォルトに',
      '仲介なし — マシンから DeepSeek へ直接呼び出し',
      '全機能が利用可能 — 自動バッチングと `aic resolve` は全プロバイダーで動作',
    ],
    setupH: '1つのウィザードで設定',
    setup: [
      '<code>aic setup</code> を実行',
      'プロバイダーに DeepSeek を選択',
      '<code>DEEPSEEK_API_KEY</code> を貼り付け、モデルを選択',
      'コミット — 作業をステージして <code>aic</code> を実行',
    ],
    envH: '環境変数でも設定可',
    env: '<code>LLM_BACKEND=deepseek</code> と <code>DEEPSEEK_API_KEY</code> を設定して aic を実行。設定は 環境変数 → 設定ファイル → デフォルト の順で解決されます。',
    modelH: 'デフォルトモデル',
    model:
      'aic は妥当な DeepSeek デフォルト(<code>deepseek-v4-flash</code>)を同梱 — コミットメッセージのワークロードに高速で低コスト。いつでも <code>LLM_MODEL</code> で上書きできます。',
    faqH: 'よくある質問',
    faq: [
      {
        q: 'aic は DeepSeek に対応していますか？',
        a: 'はい — DeepSeek は aic の一級プロバイダーで、OpenAI、Anthropic、Gemini など8つ以上と並びます。',
      },
      {
        q: 'aic はどの DeepSeek モデルを使いますか？',
        a: 'aic はデフォルトで deepseek-v4-flash — コミットメッセージ向けの高速・低コストモデル。いつでも LLM_MODEL で上書きできます。',
      },
      {
        q: 'DeepSeek キーは安全ですか？',
        a: 'はい — aic はマシンから DeepSeek へ直接呼び出します。キーがマシンの外に出ることはなく、仲介も従量課金もありません。',
      },
    ],
  },

  roundup: {
    eyebrow: 'ラウンドアップ · ベスト AI コミットツール',
    h1: 'ベストな AI コミットメッセージツール',
    lede: '<code>git diff</code> を読んでコミットメッセージを起草する CLI はいくらでもあります。「どれがベスト？」への正直な答えは「何が欲しいかによる」です。以下は公正で、機能を検証したツールの調査 — と、素早く選ぶ方法です。',
    callout:
      '<strong>開示。</strong><code>aic</code> は私たちのツールなので、このリストに含まれています。各ツールが本当に得意なことについて、紹介文をすべて正直に保ちました — 他が私たちに勝つ点も含めて。',
    choose: {
      h2: '選び方',
      items: [
        {
          need: '未ステージの作業を論理的なコミットに分割したい — 1つのファイル内でも',
          pick: '→ aic',
        },
        {
          need: 'マージコンフリクトを解決してほしい、後でメッセージだけでなく',
          pick: '→ aic',
        },
        { need: '人気でサポートの良いデフォルトが欲しい', pick: '→ aicommits' },
        {
          need: 'ハッカソン優勝で、設定可能な GitMoji を持つ高機能ラッパーが欲しい',
          pick: '→ OpenCommit',
        },
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
      note: '網羅ではありません — 空間は混み合っています（<code>commitizen</code>、<code>cz-git</code> など十数個追加で）。この6つは異なるアプローチをカバーします：自動バッチ、既存の大手、Claude Code ネイティブ、ローカルファースト、最多プロバイダ、そしてハッカソン優勝の高機能 CLI。',
    },
    verdict: {
      h2: '私たちの正直な見解',
      body: '作業が未ステージで溜まり、クリーンでアトミック、コンベンショナルなコミットとしてコミットしたい — しかも Node.js をインストールせずに — なら <strong>aic</strong> はそのために作られています。そうでなければ、aicommits が安全なデフォルトのままで、他はそれぞれ明確なニッチを占めます。',
      seeVs: 'aic vs aicommits を見る →',
    },
    tools: {
      aic: {
        strength:
          'ここで唯一、未ステージの作業を hunk レベルで論理的なコミットに分割するツール — だから1つのファイルでも複数の焦点を絞ったコミットになり得る — そしてマージコンフリクトを解決します（`aic resolve`）。依存関係のない Rust バイナリとして出荷し、Anthropic、Gemini、DeepSeek をファーストクラスでサポートします。',
      },
      aicommits: {
        strength:
          '定着したデフォルト — prepare-commit-msg フック、gitmoji サポート、最大のコミュニティ、そして OpenRouter 経由で任意のモデル。',
      },
      opencommit: {
        strength:
          'GitHub 2023 ハッカソン優勝 — 設定可能な GitMoji、ローカル Ollama/llama.cpp、そして巨大なコミュニティ（7.5k★、約12k npm ダウンロード/月）を持つ高機能ラッパー。',
      },
      'ai-commit': {
        strength:
          'ソースファイルを読む Claude Code プロバイダで際立ちます — すでに Claude Code を使っているならぴったりです。',
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
    ledeBefore:
      '出荷された <code>aic</code> の各バージョン — ビルド時にソースリポジトリの ',
    ledeLink: 'CHANGELOG.md',
    ledeAfter:
      ' から取得。その取得が一時的に届かない場合は GitHub Releases をフォールバックに使います。最新が上。',
    englishNote: 'リリースノートは英語のままです。',
    timeline: {
      latest: '最新',
      githubRelease: 'GitHub リリース',
      noNotes: 'リリースノートは公開されていません。',
    },
  },
};
