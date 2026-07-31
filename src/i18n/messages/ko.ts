/**
 * KO (Korean) message module.
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
    title: 'aic — AI 기반 git 커밋',
    description:
      'aic가 diff를 읽고, 컨벤션 커밋을 초안해 커밋합니다 — 명령 한 번. 스테이지된 게 없으면? 작업을 논리적인 커밋으로 묶어줍니다.',
  },

  topbar: {
    brandTag: 'AI 기반 git 커밋',
    versionTitle: '최신 릴리스: v{version} — 변경 이력 보기',
    github: 'GitHub',
    nav: {
      how: '사용법',
      batching: '배치',
      providers: '프로바이더',
      install: '설치',
    },
    switcher: {
      label: '언어',
    },
  },

  contentHeader: {
    versionTitle: '최신 릴리스: v{version} — 변경 이력 보기',
    home: '홈',
    changelog: '변경 이력',
    github: 'GitHub',
  },

  copyButton: {
    copyAria: '{label} 복사',
    copiedAria: '{label} 복사됨',
    copied: '복사됨 ✓',
  },

  hero: {
    eyebrow: '01 — 소개',
    h1: {
      stopWriting: '그만 쓰자,',
      commit: '커밋',
      messages: '메시지.',
      stopUntangling: '그만 풀자,',
      merge: '병합',
      conflicts: '충돌.',
    },
    ledeBefore:
      '<b>aic</b>가 diff를 읽고, 컨벤션 커밋을 초안해 커밋합니다 — 명령 한 번. 병합 중이라? ',
    ledeLink: '충돌을 해결',
    ledeAfter:
      '합니다 — 파일 단위로, 무엇이든 적용되기 전에 diff를 확인. 스테이지된 게 없으면? 작업을 논리적인 커밋으로 쪼갭니다 — 한 파일 안에서도.',
    ctaHint: '그런 다음 <code>{cmd}</code> 실행',
  },

  how: {
    eyebrow: '02 — 작동 방식',
    h2: '한 번 설치 → <code>{cmd}</code> 입력 → 깔끔한 커밋.',
    steps: {
      '01': { label: '설치', detail: 'brew install aic' },
      '02': { label: '설정', detail: 'provider · key · model' },
      '03': { label: '실행', detail: 'type:  aic' },
      '04': { label: '읽기', detail: 'diff 읽기' },
      '05': { label: '초안', detail: '메시지 작성' },
      '06': { label: '커밋', detail: '완료  ✓' },
    },
  },

  commands: {
    aic: { description: '스테이지된 작업 커밋 · 또는 미스테이지 배치 계획' },
    'aic-setup': { description: '일회성 마법사 — 프로바이더 → 키 → 모델' },
    'aic-list': { description: '해결된 구성 + 마스킹된 API 키 표시' },
  },

  batching: {
    eyebrow: '03 — 자동 배치',
    kicker: '스테이지된 게 없어?',
    h2: '한 파일, 여러 커밋',
    lede: 'aic는 hunk 단위로 diff를 읽습니다 — 그래서 한 파일도 여러 개의 집중된 커밋이 될 수 있고, 각각 하나의 아이디어. 스테이지 없이, 명령 한 번, 깔끔한 히스토리.',
    aside: 'hunk별 배치 ✦',
    stripLabel: '추론 · hunk별',
    shipBadge: 'v{version}에 탑재',
    cmpLink: '최고 AI 커밋 도구들 사이의 aic 보기 →',
  },

  providers: {
    eyebrow: '04 — 프로바이더와 프라이버시',
    h2: '당신의 키 · 당신의 모델',
    lede: '프로바이더를 직접. aic는 LLM과 직접 통신 — 중간자 없음, 커밋별 추가 비용 없음, 프록시 없음. API 키는 당신의 기계를 떠나지 않습니다.',
    aside: '중간자 없음 · 커밋별 추가 비용 없음 · 호출은 당신의 기계에서 직접',
    link: '프로바이더 코드 읽기 →',
    yourModel: '(당신의 모델)',
  },

  install: {
    eyebrow: '05 — 설치',
    h2: '한 줄로 aic 설치.',
    postinstall:
      '<span class="arrow" aria-hidden="true">→</span> 그런 다음 <code>{cmd}</code>를 실행해 프로바이더, 키, 모델을 선택.',
    methods: {
      brew: {
        label: 'Homebrew',
        note: '`brew upgrade aic`로 업데이트. Homebrew 설치는 자동 감지되어 `aic update`가 brew로 안내합니다.',
      },
      unix: {
        label: '설치기 · macOS / Linux',
        note: 'GitHub Releases에서 최신 릴리스 바이너리를 다운로드.',
      },
      windows: {
        label: '설치기 · Windows',
        note: 'PowerShell. 최신 릴리스 바이너리를 다운로드.',
      },
    },
  },

  footer: {
    eyebrow: '오늘부터 더 깔끔한 커밋을',
    h2: '커밋 메시지 쓰기는 그만.',
    star: '★ GitHub에서 별표',
    nav: {
      resolve: '병합 충돌 해결',
      roundup: '최고 AI 커밋 도구',
      compare: 'aic vs aicommits',
      changelog: '변경 이력',
    },
    meta: 'MIT 라이선스 · Astro + Tailwind + GSAP로 제작',
  },

  resolve: {
    eyebrow: '기능 · 병합 충돌',
    h1: {
      main: '병합 충돌을 해결.',
      without: '수동',
      manualMerge: '병합 없이.',
    },
    lede: '<b>aic</b>는 충돌하는 모든 파일을 읽고, 깔끔한 해결을 제안하며, diff를 보여줍니다. 파일마다 승인 — 당신의 허락 없이는 아무것도 적용되지 않고 — 그런 다음 병합을 마무리합니다.',
    ctaHint: '그런 다음 <code>aic resolve</code> 실행',
    workflow: {
      h2: 'aic가 충돌을 해결하는 방식',
      lede: 'resolve는 워크플로이지 마법 지팡이가 아닙니다. aic는 충돌한 각 파일을 돌며, 수정을 제안하고, 매 단계에서 승인을 위해 멈춥니다.',
      steps: [
        { h: '감지', n: '<code>aic resolve</code>가 저장소 상태를 읽습니다. 병합 중이고 미해결 파일이 있으면 나열합니다.' },
        { h: '파일별 해결', n: '각 파일마다 aic는 충돌 내용을 모델에 보내 마커 없는 버전을 받습니다. 마커가 빠져나오면 한 번 재시도합니다.' },
        { h: 'diff 검토', n: 'aic는 제안된 모든 해결을 하나의 diff로 묶습니다 — 마커는 제거, 양쪽은 조정 — 무엇이 바뀔지 정확히 보입니다.' },
        { h: '파일별 승인', n: '각 파일은 자체 <code>apply?</code> 프롬프트를 갖습니다. yes면 aic가 해결을 쓰고 스테이지합니다. no면 그 파일은 그대로입니다.' },
        { h: '마무리', n: '미해결이 없으면 aic가 병합의 <code>--continue</code>를 실행합니다. 진행 중 막힌 부분은 명확한 인수인계로 보고되고, 정체 모를 카운트가 아닙니다.' },
      ],
    },
    twoWays: {
      h2: '두 가지 진입',
      lede: '명령을 외울 필요 없습니다. 명시적인 동사가 있고, 잊을 때 잡아주는 가드가 있습니다.',
      points: [
        { h: '<code>aic resolve</code>', n: '명시적인 동사. 저장소가 병합 중이면 언제든 실행하면 aic가 위의 감지 단계부터 이어받습니다.' },
        { h: '커밋 가드', n: '충돌된 저장소에서 평범한 <code>aic</code>를 실행하면 알아채고, resolve로의 인수인계를 제안하며, 더 깊은 가드가 여전히 충돌 마커를 담은 커밋을 막습니다. 친절한 현관, 그리고 안전망.' },
      ],
    },
    review: {
      h2: '당신의 허락 없이는 아무것도 적용되지 않는다',
      lede: '요점은 이것: aic는 제안하고, 당신이 결정합니다. 당신이 보고 승인하지 않은 해결은 결코 쓰지 않습니다.',
      callout: '<strong>적용 전에 검토.</strong>제안된 모든 해결은 디스크에 닿기<em>전에</em> diff로 보여집니다. 각 파일은 별도의 <code>y/n</code> — 신뢰하는 것은 승인, 아닌 것은 거부, 거부된 파일은 당신이 둔 그대로 남습니다.',
    },
    limits: {
      h2: 'aic가 당신에게 남기는 것',
      lede: '앞서 정직하게, 도구가 끝나고 당신이 시작하는 지점을 알도록. 이것은 v1의 한계입니다.',
      points: [
        { h: '병합 충돌만', n: 'aic가 다루는 것은 충돌된<em>병합</em> 상태. 진행 중인 rebase나 <code>am</code>은 v1에서 감지되어 거부됩니다 — 완료하거나 중단한 뒤 resolve하세요.' },
        { h: '자동 해결이 안 되는 충돌도', n: '바이너리 파일, 과도하게 큰 파일, delete/modify 충돌은 이유와 함께 건너뜁니다 — aic가 수동 해결을 위해 가리킵니다.' },
        { h: '마무리는 전부 아니면 전무', n: '어찌 됐든 <code>--continue</code>는 미해결 경로가 있으면 막히므로, 남은 한 블로커가 마무리를 잡습니다. aic의 인수인계는 무엇이 남았는지 정확히 알려줍니다.' },
      ],
    },
    verdict: {
      h2: '한 줄 요약',
      body: '<code>aic resolve</code>는 충돌한 파일을 읽고, 실제로 검토할 수 있는 해결을 제안하며, 당신이 승인한 것만 씁니다 — 그런 다음 병합을 마무리합니다. aic가 커밋에 쓰는 것과 같은 "diff를 읽고, 수정을 초안하고, 출하하라" 루프가 git에서 가장 보기 흉한 부분을 향하고 있습니다.',
      releaseNotes: 'v0.3.0 릴리스 노트',
    },
  },

  vs: {
    aicommits: {
      eyebrow: '비교 · aicommits 대안',
      h1: 'aic vs aicommits',
      ledeAfter: ' 는 AI 커밋 메시지 도구에서 자리 잡은 기본 선택 — 설치 기반, 생태계, 선발의 추진력. 이 페이지는 그렇지 않은 척하려는 게 아닙니다. <strong>aic</strong>가 언제 더 나은 선택인지 — 그리고 언제 그냥 aicommits에 머물러야 하는지 정확히 알려줍니다.',
      callout: '<strong>좁은 업계.</strong>aicommits 자체 README도 이름이 너무 길면 <code>aic</code>로 별칭하길 권합니다. 우리는 <code>aic</code>를 별개의 것으로 출하했습니다 — 그리고 hunk 단위로 미스테이지 작업을 논리적인 커밋으로 쪼개, 한 파일도 여러 개가 될 수 있습니다.',
      matrix: {
        capability: '기능',
        aic: 'aic',
      },
      winsH2: 'aic가 앞서는 부분',
      rivalH2: 'aicommits가 여전히 이기는 부분',
      rivalLede: 'aic가 인기 도구를 모든 면에서 이긴 척하지 않겠습니다. 이기지 못합니다. 이것들이 자동 배치보다 더 중요하다면, aicommits가 맞는 선택입니다:',
      tieTag: '트레이드오프',
      verdict: {
        h2: '한 줄 요약',
        body: '미스테이지 작업이 쌓이고 깔끔하고 논리적인 커밋으로 쪼개고 싶거나 — Node.js 의존 없이 Claude, Gemini, DeepSeek을 일급 프로바이더로 — 원한다면 <strong>aic</strong>로 전환하세요. <code>git commit</code> 훅, gitmoji 커밋, 고를 수 있는 여러 후보, 또는 그저 인기 있는 선택의 편안함을 원한다면, aicommits도 여전히 훌륭한 도구입니다.',
      },
      axes: {
        'auto-batch': {
          feature: '미스테이지 작업을 여러 커밋으로 자동 배치',
          aic: '예 — 미스테이지 변경을 논리적이고 원자적인 커밋으로 쪼갬',
          rival: '아니오 — 스테이지된 diff당 메시지 하나',
          note: 'aic의 대표 기능. aicommits의 `--generate N`은 한 커밋에 대해 N개의 후보 메시지를 만드는 것이지, N개의 커밋이 아닙니다.',
        },
        'per-hunk': {
          feature: '한 파일을 여러 커밋으로 분할(hunk별)',
          aic: '예 — 인텐트별로 각 hunk를 자체 커밋으로 라우팅',
          rival: '아니오 — 기껏해야 파일 단위',
          note: 'aic v0.3.5에 탑재. aicommits(및 roundup의 모든 도구)는 기껏해야 파일 경계에서 분할; aic는 hunk 단위로 diff를 읽어, 세 가지 관심사를 담은 한 파일이 세 개의 집중된 커밋이 됩니다.',
        },
        resolve: {
          feature: '병합 충돌 해결',
          aic: '예 — `aic resolve`가 diff를 제안, 파일별로 확인',
          rival: '아니오 — 커밋 메시지만',
          note: 'aic의 두 번째 대표 워크플로(`v0.3.0`). aicommits엔 충돌 이야기가 없습니다 — 손으로 병합한 뒤에야 메시지를 씁니다.',
        },
        anthropic: {
          feature: '일급 Anthropic · Gemini · DeepSeek',
          aic: '예 — 네이티브 프로바이더',
          rival: 'OpenRouter / 커스텀 엔드포인트로만',
          note: 'aicommits는 간접적으로만 도달; aic는 일급으로 출시하고 합리적인 기본 모델을 붙입니다.',
        },
        runtime: {
          feature: '런타임과 의존성',
          aic: 'Rust 바이너리 — Node.js 불필요',
          rival: 'Node.js v22+ — npm',
          note: 'aic는 하나의 정적 바이너리 — `node_modules`도, 전이 의존성 트리도 없고, Node 버전을 바꿔도 글로벌 설치가 망가지지 않습니다. (Rust의 더 빠른 콜드스타트도 도움 되지만, 어찌 됐든 LLM 호출이 지배적입니다.) aicommits가 마찰 없인 건 Node.js가 이미 경로에 있을 때뿐입니다.',
        },
        reach: {
          feature: '프로바이더 도달 범위',
          aic: '11개 일급 + OpenAI 호환',
          rival: '8 + OpenRouter/커스텀(모든 모델)',
          note: '둘 다 OpenRouter로 모든 모델에 도달하지만, aic는 더 많은 일급 프로바이더를 출시 — xAI, Together, Perplexity, Mistral 포함 — 에 더해 LM Studio, vLLM, 게이트웨이용 OpenAI 호환 탈출구도.',
        },
        formats: {
          feature: '커밋 메시지 형식',
          aic: 'Conventional Commits',
          rival: 'plain · conventional · gitmoji',
          note: 'aic는 설계상 conventional만; aicommits는 plain 비구조 모드를 포함해 고를 수 있게 합니다.',
        },
        hook: {
          feature: 'Git 훅 통합',
          aic: '아니오',
          rival: '예 — prepare-commit-msg 훅',
          note: 'aicommits는 훅으로 일상적인 `git commit` 흐름에 연결; aic는 명시적으로 실행합니다.',
        },
        candidates: {
          feature: '여러 메시지 후보',
          aic: '아니오',
          rival: '예 — `--generate N`',
          note: 'aicommits는 커밋 전에 몇 가지 메시지를 골라볼 수 있습니다.',
        },
        prompt: {
          feature: '프롬프트와 로케일 제어',
          aic: '환경변수로 시스템 프롬프트',
          rival: '`--prompt`, locale, max-length',
          note: 'aicommits가 더 풍부한 노브를 노출. aic는 `AIC_SYSTEM_PROMPT` 재정의를 지원하지만 표면 옵션은 더 적습니다.',
        },
        popularity: {
          feature: '인기와 생태계',
          aic: '신규, 소규모',
          rival: '자리 잡은 선발',
          note: 'aicommits는 더 큰 커뮤니티를 가진 알려진 양입니다. 추진력이 가장 중요하다면, 계속 쓰세요.',
        },
      },
    },
  },

  roundup: {
    eyebrow: '라운드업 · 최고 AI 커밋 도구',
    h1: '최고의 AI 커밋 메시지 도구',
    lede: '<code>git diff</code>를 읽고 커밋 메시지를 초안하는 CLI는 넘쳐납니다. "어떤 게 최고?"에 대한 정직한 대답은 "무엇을 원하느냐에 따라"입니다. 다음은 공정하고, 기능을 검증한 분야 조사 — 와 빠르게 고르는 방법입니다.',
    callout: '<strong>공개.</strong><code>aic</code>는 우리 도구라 이 목록에 있습니다. 각 도구가 진정으로 잘하는 것에 대해 모든 한 줄평을 정직하게 유지 — 다른 도구가 우리를 이기는 부분도 포함해.',
    choose: {
      h2: '선택 방법',
      items: [
        { need: '미스테이지 작업을 논리적인 커밋으로 쪼개고 싶다 — 한 파일 안에서도', pick: '→ aic' },
        { need: '병합 충돌을 대신 해결해 줄 누군가가 필요, 나중에 메시지만이 아니라', pick: '→ aic' },
        { need: '인기 있고 잘 지원되는 기본값을 원한다', pick: '→ aicommits' },
        { need: '이미 Claude Code에서 일하고 있다', pick: '→ ai-commit' },
        { need: '무료, 로컬, 오프라인 — 그리고 PR 설명도', pick: '→ git-ai' },
        { need: '최대 프로바이더와 세련된 TUI를 원한다', pick: '→ llmc' },
      ],
    },
    field: {
      h2: '출전 작품',
      hlEyebrow: '신규 · v{version}',
      hlHead: '한 파일, 여러 커밋',
      hlSub: 'hunk별 분할 — 여기서 파일 경계 아래로 내려가는 유일한 도구.',
      badge: '바로 우리',
      vsAicommitsLink: 'aicommits와 비교 →',
      repoLink: '저장소 ↗',
      compareLink: '전체 비교 →',
      note: '전면 조사는 아님 — 공간이 붐빕니다(<code>commitizen</code>, <code>cz-git</code> 그리고 열두 개 더). 이 다섯이 뚜렷한 접근을 모읍니다: 자동 배치, 기존 강자, Claude Code 네이티브, 로컬 우선, 최대 프로바이더.',
    },
    verdict: {
      h2: '우리의 정직한 평가',
      body: '미스테이지 작업이 쌓이고 깔끔하고, 원자적이고, 컨벤션 커밋으로 커밋하고 싶다 — Node.js 설치 없이 — 면 <strong>aic</strong>가 그것을 위해 만들어졌습니다. 그렇지 않다면, aicommits가 안전한 기본값이고, 나머지는 각자 명확한 틈새를 차지합니다.',
      seeVs: 'aic vs aicommits 보기 →',
    },
    tools: {
      aic: {
        strength:
          '미스테이지 작업을 hunk 단위로 논리적인 커밋으로 쪼개는 유일한 도구 — 그래서 한 파일도 여러 집중된 커밋이 될 수 있고 — 병합 충돌도 해결합니다(`aic resolve`). 의존성 없는 Rust 바이너리로 출시, Anthropic, Gemini, DeepSeek을 일급으로 지원.',
      },
      aicommits: {
        strength:
          '자리 잡은 기본값 — prepare-commit-msg 훅, gitmoji 지원, 가장 큰 커뮤니티, 그리고 OpenRouter로 모든 모델.',
      },
      'ai-commit': {
        strength:
          '소스 파일을 읽는 Claude Code 프로바이더로 두드러집니다 — 이미 Claude Code를 쓴다면 자연스러운 선택.',
      },
      'git-ai': {
        strength:
          '기본이 로컬 Ollama(무료, 오프라인)이며 커밋 메시지뿐 아니라 PR 설명도 초안합니다.',
      },
      llmc: {
        strength:
          '가장 넓은 프로바이더 목록(13), 세련된 터미널 UI, TOML 설정, 커스텀 프롬프트, 자동 커밋.',
      },
    },
  },

  changelog: {
    eyebrow: '변경 이력 · 릴리스 노트',
    h1: '모든 aic 릴리스를 순서대로.',
    ledeBefore: '출하된 <code>aic</code>의 각 버전 — 빌드 시 소스 저장소의 ',
    ledeLink: 'CHANGELOG.md',
    ledeAfter: ' 에서 가져오며, 그 가져오기가 잠시 닿지 않으면 GitHub Releases를 폴백으로 씁니다. 최신이 위.',
    englishNote: '릴리스 노트는 영어로 유지됩니다.',
    timeline: {
      latest: '최신',
      githubRelease: 'GitHub 릴리스',
      noNotes: '발행된 릴리스 노트가 없습니다.',
    },
  },
};
