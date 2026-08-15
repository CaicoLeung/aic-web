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
      'aic가 diff를 읽고, 컨벤셔널 커밋을 초안해 커밋합니다 — 명령 한 번. 스테이지된 게 없으면? 작업을 논리적인 커밋으로 묶어줍니다.',
    resolve: {
      title: 'aic resolve — AI 병합 충돌 해결 도구',
      description:
        'aic는 충돌하는 모든 파일을 읽고, 깔끔한 해결을 제안하며, diff를 보여줍니다. 파일마다 승인 — 당신의 허락 없이는 아무것도 적용되지 않고 — 그런 다음 병합을 마무리합니다. 당신의 작업을 보지도 않고 건드리지 않는 AI 병합 충돌 해결 도구.',
    },
    roundup: {
      title: '{year}년 최고의 AI 커밋 메시지 도구',
      description:
        'AI 기반 git 커밋 도구에 대한 정직한 정리 — aic, aicommits, ai-commit, git-ai, llmc — 그리고 언제 무엇을 골라야 하는지에 대한 공정하고 기능이 검증된 견해.',
    },
    vs: {
      aicommits: {
        title: 'aic vs aicommits — AI 커밋 도구 비교',
        description:
          'aicommits 대안을 찾고 계신가요? aic는 스테이징하지 않은 작업을 원자 커밋으로 자동 분할하고 머지 충돌을 해결하며 Node.js가 필요 없습니다. 기능별 정직한 비교.',
      },
      'ai-commit': {
        title: 'aic vs ai-commit — AI 커밋 도구 비교',
        description:
          'ai-commit 대안이라면 aic를 선택하세요. 스테이징하지 않은 작업을 원자 커밋으로 나누고 머지 충돌을 해결합니다 — Claude Code도 Node.js도 불필요.',
      },
      llmc: {
        title: 'aic vs llmc — AI 커밋 도구 비교',
        description:
          'llmc 대안이라면 aic를 선택하세요. hunk 수준 배칭과 AI 충돌 해결로 파일 단위 도구를 능가합니다 — 의존성 없는 Rust 바이너리.',
      },
      'git-ai': {
        title: 'aic vs git-ai — AI 커밋 도구 비교',
        description:
          'git-ai는 로컬 우선 Git 어시스턴트입니다 — 커밋 메시지, PR 설명, 무료 오프라인 Ollama. hunk 수준 배칭, 충돌 해결, 활동성에서 aic가 이깁니다.',
      },
      opencommit: {
        title: 'aic vs OpenCommit — AI 커밋 도구 비교',
        description:
          'OpenCommit은 GitHub 2023 해커톤 우승자이자 기능이 풍부한 GPT 래퍼입니다. aic는 원자적 히스토리가 중요한 곳에서 이깁니다: hunk 수준 배칭과 AI 충돌 해결, Node.js 불필요.',
      },
    },
    alt: {
      hub: {
        title: 'AI 커밋 도구 대안 — aic 선택',
        description:
          'aicommits, OpenCommit, ai-commit, llmc, git-ai에서 aic로 전환해야 하는 이유? hunk 수준 배칭, AI 충돌 해결, Node.js 불필요.',
      },
      aicommits: {
        title: 'aicommits 대안 — aic: 배칭된 원자 커밋',
        description:
          'aicommits 대안을 찾고 계신가요? aic는 스테이징하지 않은 작업을 원자 커밋으로 자동 배칭하고 머지 충돌을 해결합니다 — Node.js 불필요.',
      },
      opencommit: {
        title: 'OpenCommit 대안 — aic: 메시지가 아니라 원자적 히스토리',
        description:
          'OpenCommit은 해커톤 우승 GPT 래퍼입니다. hunk 수준 배칭과 AI 충돌 해결을 원한다면 aic가 대안 — Node.js 불필요.',
      },
      'ai-commit': {
        title: 'ai-commit 대안 — aic: Node 없는 hunk 수준 커밋',
        description:
          'ai-commit은 Claude Code 선택지입니다. 스테이징하지 않은 작업을 원자 커밋으로 나누고 충돌을 해결하려면 aic가 대안.',
      },
      llmc: {
        title: 'llmc 대안 — aic: 배칭 + 해결',
        description:
          'llmc는 13개 프로바이더와 TUI를 제공합니다. 스테이징하지 않은 작업을 원자 커밋으로 나누고 충돌을 해결하려면 — Rust 바이너리로 aic를.',
      },
      'git-ai': {
        title: 'git-ai 대안 — aic: 파일 경계 아래의 커밋',
        description:
          'git-ai는 로컬 우선 어시스턴트입니다. hunk 수준 배칭과 AI 충돌 해결을 원한다면 aic가 대안.',
      },
    },
    deepseek: {
      title: 'aic + DeepSeek — DeepSeek로 커밋 메시지 작성',
      description:
        'DeepSeek로 aic에 Conventional Commits를 작성하게 하세요: 일급 프로바이더, 하나의 설정 마법사, 키는 기기를 떠나지 않습니다. Node.js 불필요.',
    },
    agents: {
      title: 'aic + 당신의 AI 코딩 에이전트 — Claude Code, Codex, Pi, OpenCode',
      description:
        'aic는 헤드리스 모드에서 로컬 AI 코딩 에이전트 — Claude Code, Codex, Pi, 또는 OpenCode — 에 작업을 위임할 수 있습니다. API 키도, 중간자도 없음: 에이전트가 diff를 읽고 커밋을 작성하며, 자신의 모델을 재사용합니다.',
    },
    changelog: {
      title: 'aic 체인지로그 — 모든 릴리스',
      description:
        'aic의 모든 릴리스를 순서대로 — 기능, 수정, 릴리스 노트. 최신: v{version}.',
    },
  },

  topbar: {
    brandTag: 'AI 기반 git 커밋',
    versionTitle: '최신 릴리스: v{version} — 변경 이력 보기',
    github: 'GitHub',
    nav: {
      how: '사용법',
      batching: '배치',
      resolve: '충돌 해결',
      agents: '에이전트',
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
    resolve: '충돌 해결',
    roundup: '도구 목록',
    compare: '비교',
    changelog: '변경 이력',
    agents: '에이전트',
    github: 'GitHub',
  },

  copyButton: {
    copyAria: '{label} 복사',
    copiedAria: '{label} 복사되었습니다',
    copied: '복사되었습니다 ✓',
  },

  how: {
    eyebrow: '02 — 작동 방식',
    h2: '한 번 설치 → <code>{cmd}</code> 입력 → 깔끔한 커밋.',
    steps: {
      '01': { label: '설치', detail: 'brew install aic' },
      '02': { label: '설정', detail: 'provider · key · model — 또는 로컬 에이전트' },
      '03': { label: '실행', detail: 'type:  aic' },
      '04': { label: '읽기', detail: 'diff 읽기' },
      '05': { label: '초안', detail: '메시지 작성' },
      '06': { label: '커밋', detail: '완료  ✓' },
    },
  },

  batching: {
    eyebrow: '03 — 자동 배치',
    kicker: '파일 경계 아래로',
    h2: '한 파일, 여러 커밋',
    lede: '다른 커밋 도구들은 모두 파일 경계에서 멈춥니다 — 한 파일, 한 메시지. aic는 hunk 단위로 diff를 읽으므로, 세 가지 관심사에 걸친 한 파일이 세 개의 집중된 conventional 커밋이 됩니다. 스테이지 없이, 명령 한 번, 실제로 깔끔하게 읽히는 히스토리.',
    aside: 'hunk별 배치 ✦',
    swatchLabel: '17가지 커밋 타입 · WCAG 안전 색상',
    stripLabel: '추론 · hunk별',
    shipBadge: 'v{version}에 탑재',
    cmpLink: '최고 AI 커밋 도구들 사이의 aic 보기 →',
  },
  resolveSection: {
    eyebrow: '04 — 충돌 해결',
    lede: '병합 중이라면 명령 한 번. aic는 충돌된 각 파일을 읽고 마커 없는 해결안을 제안하며, 디스크에 쓰기 전에 통합 diff를 보여줍니다. 각 파일은 별도의 <code>y/n</code>입니다 — 신뢰하는 것은 승인하고, 나머지는 거부하세요. 그리고 병합을 마칩니다.',
    link: 'aic가 충돌을 해결하는 흐름 →',
  },

  agentsSection: {
    eyebrow: '05 — 에이전트 가져오기',
    lede: '이미 Claude Code, Codex, Pi, 또는 OpenCode를 쓰고 계신가요? 헤드리스 모드에서 aic를 당신의 에이전트로 향하게 하세요 — diff를 넘기고, 에이전트가 메시지를 쓰고, aic가 커밋합니다. API 키도 기본 모델도 없음: 에이전트 자체의 인증을 재사용합니다.',
    link: '에이전트 백엔드 보기 →',
  },

  providers: {
    eyebrow: '06 — 프로바이더와 프라이버시',
    h2: '당신의 키 · 당신의 모델',
    lede: '프로바이더를 직접. aic는 LLM과 직접 통신 — 중간자 없음, 커밋별 추가 비용 없음, 프록시 없음. API 키는 당신의 기계를 떠나지 않습니다.',
    aside: '중간자 없음 · 커밋별 추가 비용 없음 · 호출은 당신의 기계에서 직접',
    link: '프로바이더 코드 읽기 →',
    yourModel: '(당신의 모델)',
    profilesHint: '프로필 저장 · <code>aic use</code>로 전환',
  },

  install: {
    eyebrow: '07 — 설치',
    h2: '한 줄로 aic 설치.',
    // CRO 신뢰 스트립 — 설치 방법 전에 주요 우려에 답합니다.
    trust: [
      '무료 & MIT',
      'Node.js 불필요',
      '12개 프로바이더',
      'pre-commit 훅과 공존',
      '키는 기기를 떠나지 않음',
    ],
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
  compareBand: {
    heading: 'aic 비교',
    lede: 'aic가 aicommits, OpenCommit 등과 비교해 어떨지 궁금하시나요? 각 비교는 경쟁 도구가 앞서는 점은 솔직히 인정하고, aic가 앞서는 부분을 정확히 보여줍니다。',
    roundupLink: '전체 목록 보기 →',
  },

  footer: {
    eyebrow: '오늘부터 더 깔끔한 커밋을',
    h2: '커밋 메시지 쓰기는 그만.',
    star: '★ GitHub에서 별표',
    nav: {
      resolve: '병합 충돌 해결',
      roundup: '최고 AI 커밋 도구',
      compare: 'aic vs aicommits',
      alternatives: '대안',
      deepseek: 'DeepSeek',
      changelog: '변경 이력',
      agents: '에이전트',
    },
    meta: 'MIT 라이선스 · Astro + Tailwind + GSAP로 제작',
  },

  resolve: {
    eyebrow: '기능 · 병합 충돌',
    h1: {
      main: '병합 충돌을 해결.',
      // 한국어는 어순이 반대 + 공백 필요: 수동 + ' ' + 병합 없이.
      sub: ['수동', ' ', '병합 없이.'],
    },
    lede: '<b>aic</b>는 충돌하는 모든 파일을 읽고, 깔끔한 해결을 제안하며, diff를 보여줍니다. 파일마다 승인 — 당신의 허락 없이는 아무것도 적용되지 않고 — 그런 다음 병합을 마무리합니다.',
    ctaHint: '그런 다음 <code>aic resolve</code> 실행',
    workflow: {
      h2: 'aic가 충돌을 해결하는 방식',
      lede: 'resolve는 워크플로이지 마법 지팡이가 아닙니다. aic는 충돌한 각 파일을 돌며, 수정을 제안하고, 매 단계에서 승인을 위해 멈춥니다.',
      steps: [
        {
          h: '감지',
          n: '<code>aic resolve</code>가 저장소 상태를 읽습니다. 병합 중이고 미해결 파일이 있으면 나열합니다.',
        },
        {
          h: '파일별 해결',
          n: '각 파일마다 aic는 충돌 내용을 모델에 보내 마커 없는 버전을 받습니다. 마커가 빠져나오면 한 번 재시도합니다.',
        },
        {
          h: 'diff 검토',
          n: 'aic는 제안된 모든 해결을 하나의 diff로 묶습니다 — 마커는 제거, 양쪽은 조정 — 무엇이 바뀔지 정확히 보입니다.',
        },
        {
          h: '파일별 승인',
          n: '각 파일은 자체 <code>apply?</code> 프롬프트를 갖습니다. yes면 aic가 해결안을 작성하고 스테이지합니다. no면 그 파일은 그대로입니다.',
        },
        {
          h: '마무리',
          n: '미해결이 없으면 aic가 병합의 <code>--continue</code>를 실행합니다. 진행 중 막힌 부분은 명확한 인수인계로 보고되고, 정체 모를 카운트가 아닙니다.',
        },
      ],
    },
    twoWays: {
      h2: '두 가지 진입',
      lede: '명령을 외울 필요 없습니다. 명시적인 동사가 있고, 잊을 때 잡아주는 가드가 있습니다.',
      points: [
        {
          h: '<code>aic resolve</code>',
          n: '명시적인 동사. 저장소가 병합 중이면 언제든 실행하면 aic가 위의 감지 단계부터 이어받습니다.',
        },
        {
          h: '커밋 가드',
          n: '충돌된 저장소에서 평범한 <code>aic</code>를 실행하면 알아채고, resolve로의 인수인계를 제안하며, 더 깊은 가드가 여전히 충돌 마커를 담은 커밋을 막습니다. 친절한 현관, 그리고 안전망.',
        },
      ],
    },
    review: {
      h2: '당신의 허락 없이는 아무것도 적용되지 않는다',
      lede: '요점은 이것: aic는 제안하고, 당신이 결정합니다. 당신이 보고 승인하지 않은 해결은 결코 쓰지 않습니다.',
      callout:
        '<strong>적용 전에 검토.</strong> 제안된 모든 해결은 디스크에 닿기 <em>전에</em> diff로 표시됩니다. 각 파일은 별도의 <code>y/n</code> — 신뢰하는 것은 승인, 아닌 것은 거부, 거부된 파일은 당신이 둔 그대로 남습니다.',
    },
    limits: {
      h2: 'aic가 당신에게 남기는 것',
      lede: '앞서 정직하게, 도구가 끝나고 당신이 시작하는 지점을 알도록. 이것은 v1의 한계입니다.',
      points: [
        {
          h: '병합 충돌만',
          n: 'aic가 다루는 것은 충돌된<em>병합</em> 상태. 진행 중인 rebase나 <code>am</code>은 v1에서 감지되어 거부됩니다 — 완료하거나 중단한 뒤 resolve하세요.',
        },
        {
          h: '자동 해결이 안 되는 충돌도',
          n: '바이너리 파일, 과도하게 큰 파일, delete/modify 충돌은 이유와 함께 건너뜁니다 — aic가 수동 해결이 필요한 지점을 짚어 줍니다.',
        },
        {
          h: '마무리는 전부 아니면 전무',
          n: '어찌 됐든 <code>--continue</code>는 미해결 경로가 있으면 막히므로, 남은 한 블로커가 마무리를 잡습니다. aic의 인수인계는 무엇이 남았는지 정확히 알려줍니다.',
        },
      ],
    },
    verdict: {
      h2: '한 줄 요약',
      body: '<code>aic resolve</code>는 충돌한 파일을 읽고, 실제로 검토할 수 있는 해결을 제안하며, 당신이 승인한 것만 씁니다 — 그런 다음 병합을 마무리합니다. aic가 커밋에 쓰는 것과 같은 "diff를 읽고, 수정을 초안하고, 출시하라" 루프가 git에서 가장 보기 흉한 부분을 향하고 있습니다.',
      releaseNotes: 'v0.3.0 릴리스 노트',
    },
  },

  agents: {
    eyebrow: '기능 · CLI 에이전트 백엔드',
    h1: '에이전트를 가져오세요, 키가 아닙니다.',
    lede: '<b>aic</b>는 헤드리스 모드에서 로컬 AI 코딩 에이전트 — Claude Code, Codex, Pi, 또는 OpenCode — 에 작업을 위임할 수 있습니다. API 키도, 기본 모델도, 중간자도 없음: 에이전트가 diff를 읽고 커밋을 작성하며, 자신의 모델과 인증을 재사용합니다.',
    ctaHint: '그런 다음 <code>aic setup</code> 실행 → 에이전트 백엔드 선택',
    how: {
      h2: '작동 방식',
      lede: '같은 루프, 다른 백엔드. LLM API를 호출하는 대신, aic는 프린트 모드에서 에이전트를 실행하고 diff를 전달하며, 에이전트가 가장 잘하는 일 — 변경 사항을 추론하고 메시지를 작성하는 일 — 을 맡깁니다.',
      steps: [
        {
          h: '에이전트 백엔드 선택',
          n: '<code>aic setup</code>을 실행하고 API 프로바이더 대신 CLI 에이전트를 선택하세요. aic가 기억합니다.',
        },
        {
          h: '호출이 아닌 위임',
          n: '<code>aic</code>를 실행하면 diff와 프롬프트와 함께 에이전트 — 예: <code>claude -p</code> — 로 위임합니다. 추론은 에이전트가 합니다.',
        },
        {
          h: '동일한 커밋 결과',
          n: '에이전트가 메시지를 반환합니다. aic가 git 히스토리에 적용합니다 — 배치, 컨벤셔널, 컬러, 언제나처럼.',
        },
      ],
    },
    presets: {
      h2: '네 에이전트, 하나의 백엔드',
      lede: '네 가지 프리셋이 기본 제공됩니다. 각각 자체 인증을 재사용 — 에이전트가 이미 설치되어 있다면 추가 설정 불필요.',
      items: [
        {
          h: 'Claude Code',
          n: '<code>thinking_delta</code>로 추론을 실시간 스트리밍. 에이전트가 생각하는 것을 지켜본 뒤 커밋하세요.',
        },
        {
          h: 'Codex',
          n: '읽기 전용 샌드박스에서 조용히 실행, 완료되면 메시지를 반환합니다.',
        },
        { h: 'Pi', n: 'Claude Code처럼 추론을 실시간 스트리밍.' },
        {
          h: 'OpenCode',
          n: '조용히 실행, 기존 프로바이더 키(예: Cursor OAuth)를 재사용.',
        },
      ],
    },
    eitherOr: {
      h2: '백엔드를 전환하세요 — 둘 다 실행하지 마세요',
      lede: '<code>backend_kind</code>는 구분자입니다: 실행마다 하나의 백엔드만 활성화됩니다. API 경로(provider · key · model)와 에이전트 경로(로컬 CLI)는 레이어가 아니라 대안입니다.',
      body: '전환하려면 <code>aic setup</code>을 다시 실행하세요. aic는 하나의 구성을 저장 — 마지막으로 선택한 백엔드가 사용됩니다.',
    },
    custom: {
      h2: '또는 모든 커스텀 에이전트',
      body: '네 가지 프리셋 외에도, 모든 CLI 명령을 에이전트로 구성할 수 있습니다. stdin으로 프롬프트를 받고 stdout으로 출력한다면, aic가 구동할 수 있습니다.',
    },
    speed: {
      h2: '왜 빠른가',
      lede: 'API 홉도, 새 인증도 없습니다. 에이전트는 이미 모델을 로드하고 인증을 마친 상태 — aic는 diff를 전달하고 메시지를 읽어올 뿐.',
      body: '속도는 더 빠른 모델이 아니라 설정 생략에서 옵니다. 에이전트의 세션과 자격 증명을 재사용하는 것입니다.',
    },
    verdict: {
      h2: '짧은 요약',
      body: '<code>aic</code> + 코딩 에이전트: 에이전트는 추론, aic는 커밋을 출시. API 키도, 중간자도, 고를 모델도 없음 — aic가 언제나 만드는 것과 같은 배치된, 컨벤셔널, 컬러 히스토리뿐.',
      releaseNotes: 'v0.5.0 릴리스 노트',
    },
  },

  vs: {
    // Shared feature-matrix column labels — identical for every rival,
    // so defined once here rather than copied into each rival block.
    matrix: {
      heading: '기능별 비교',
      capability: '기능',
      aic: 'aic',
    },
    aicommits: {
      eyebrow: '비교 · aicommits 대안',
      h1: 'aic vs aicommits',
      ledeAfter:
        '는 AI 커밋 메시지 도구에서 자리 잡은 기본 선택 — 설치 기반, 생태계, 선발주자로서의 추진력. 이 페이지는 그렇지 않은 척하려는 게 아닙니다. <strong>aic</strong>가 언제 더 나은 선택인지 — 그리고 언제 그냥 aicommits에 머물러야 하는지 정확히 알려줍니다.',
      callout:
        '<strong>좁은 세상이네요.</strong> aicommits 자체 README도 이름이 너무 길면 <code>aic</code>로 별칭하길 권합니다. 우리는 <code>aic</code>를 독자적인 도구로 출시했습니다 — 그리고 hunk 단위로 미스테이지 작업을 논리적인 커밋으로 쪼개, 한 파일도 여러 개가 될 수 있습니다.',
      winsH2: 'aic가 앞서는 부분',
      rivalH2: 'aicommits가 여전히 이기는 부분',
      rivalLede:
        'aic가 인기 도구를 모든 면에서 이긴 척하지 않겠습니다. 이기지 못합니다. 이것들이 자동 배치보다 더 중요하다면, aicommits가 맞는 선택입니다:',
      tieTag: '트레이드오프',
      verdict: {
        h2: '한 줄 요약',
        body: '미스테이지 작업이 쌓이고 깔끔하고 논리적인 커밋으로 쪼개고 싶거나, Node.js 의존 없이 Claude, Gemini, DeepSeek을 일급 프로바이더로 쓰고 싶다면 <strong>aic</strong>로 전환하세요. <code>git commit</code> 훅, gitmoji 커밋, 고를 수 있는 여러 후보, 또는 그저 인기 있는 선택의 편안함을 원한다면, aicommits도 여전히 훌륭한 도구입니다.',
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
          rival: '일반 · 컨벤셔널 · gitmoji',
          note: 'aic는 설계상 컨벤셔널만 지원합니다. aicommits는 일반 비구조 모드를 포함해 고를 수 있게 합니다.',
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
          note: 'aicommits가 더 풍부한 조절 옵션을 제공합니다. aic는 `AIC_SYSTEM_PROMPT` 재정의를 지원하지만 사용할 수 있는 옵션은 더 적습니다.',
        },
        popularity: {
          feature: '인기와 생태계',
          aic: '신규, 소규모',
          rival: '자리 잡은 선발',
          note: 'aicommits는 더 큰 커뮤니티를 가진 알려진 양입니다. 추진력이 가장 중요하다면, 계속 쓰세요.',
        },
      },
      faq: {
        h2: '자주 묻는 질문',
        items: [
          {
            q: 'aic는 aicommits의 좋은 대안인가요?',
            a: '스테이징하지 않은 작업을 논리 커밋으로 나누고(단일 파일 안에서도) 머지 충돌을 AI로 해결하고 싶다면, 그렇습니다. git 훅, gitmoji 커밋, 여러 후보에 의존한다면 aicommits가 적합합니다.',
          },
          {
            q: 'aic도 aicommits처럼 Node.js가 필요한가요?',
            a: '아니요. aic는 단일 Rust 바이너리입니다 — node_modules도 npm 전역 설치도 Node 버전 문제도 없습니다.',
          },
        ],
      },
    },
    'ai-commit': {
      eyebrow: '비교 · ai-commit 대안',
      h1: 'aic vs ai-commit',
      // 링크가 라이벌 이름을 시작 부분에서 감쌉니다; 이것은 꼬리 부분입니다(<strong> 포함; set:html).
      ledeAfter:
        ' 은(는) Claude Code 네이티브 AI 커밋 메시지 도구입니다 — 소스 파일을 읽어 맥락을 얻고, 중국어·영어 메시지를 즉석에서 생성합니다. 이 페이지는 공정하게 비교합니다: ai-commit의 틈새가 이기는 곳은 솔직히 말합니다. <strong>aic</strong>는 원자적 히스토리가 중요한 곳에서 이깁니다: hunk 수준 배칭과 AI 충돌 해결, 의존성 없는 Rust 바이너리로.',
      // <strong>/<code> 포함; set:html.
      callout:
        '<strong>서로 다른 두 베팅.</strong> ai-commit은 Claude Code를 맥락 엔진으로 베팅하고, aic는 diff 자체에 베팅합니다. 둘 다 무료입니다. 스테이징하지 않은 작업을 파일 경계 아래의 논리 커밋으로 나누고 머지 충돌까지 해결하는 것은 aic뿐입니다.',
      winsH2: 'aic가 앞서는 부분',
      rivalH2: 'ai-commit이 여전히 이기는 부분',
      rivalLede:
        'ai-commit이 진짜 더 잘하는 몇 가지가 있습니다. 이것들이 자동 배칭보다 중요하다면 ai-commit이 맞는 선택일 수 있습니다:',
      tieTag: '장단점',
      verdict: {
        h2: '요약',
        // <strong>/<code> 포함; set:html.
        body: '스테이징하지 않은 작업이 쌓이고, 그것을 깨끗하고 원자적인 커밋으로 나누고 싶다면 — 또는 머지 충돌을 파일별 승인으로 해결하고 싶다면 <strong>aic</strong>를 선택하세요. Claude Code를 쓰고, 중국어 커밋 메시지나 이모지 컨벤셔널 커밋을 원한다면 ai-commit도 견실하고 정직한 도구입니다.',
      },
      // 매트릭스와 결론 포인트 목록(`AI_COMMIT_COMPARISON.axes`의 axis id로 키 지정).
      axes: {
        'auto-batch': {
          feature: '스테이징되지 않은 작업을 여러 커밋으로 자동 배칭',
          aic: '예 — 스테이징되지 않은 변경을 논리적 원자 커밋으로 분할',
          rival: '아니요 — 스테이징된 diff당 메시지 하나',
          note: 'aic의 시그니처 기능입니다. ai-commit은 스테이징한 내용에 메시지 하나만 씁니다.',
        },
        'per-hunk': {
          feature: '단일 파일을 여러 커밋으로 분할(per-hunk)',
          aic: '예 — 각 hunk를 의도에 따라 자신의 커밋으로',
          rival: '아니요 — 기껏해야 파일 단위',
          note: 'aic는 hunk 수준에서 diff를 읽습니다; ai-commit(라운드업의 모든 도구처럼)은 파일을 원자 단위로 봅니다.',
        },
        resolve: {
          feature: '머지 충돌 해결',
          aic: '예 — `aic resolve`가 diff를 제안하고 파일별로 확인',
          rival: '아니요 — 커밋 메시지만',
          note: 'ai-commit에는 충돌 대응이 없습니다 — 머지는 여전히 수작업입니다.',
        },
        'claude-context': {
          feature: 'Claude Code 맥락',
          aic: '아니요',
          rival: '예 — 소스 파일을 읽어 더 풍부한 맥락 확보',
          note: 'ai-commit의 시그니처 장점: 이미 Claude Code를 쓴다면 diff 너머까지 볼 수 있습니다.',
        },
        'provider-reach': {
          feature: '프로바이더 범위',
          aic: '11개 일급 + OpenAI 호환',
          rival: '모든 OpenAI 호환 엔드포인트 + Claude Code',
          note: '둘 다 열려 있습니다. aic는 합리적 기본 모델을 가진 일급 프로바이더가 더 많고, ai-commit은 OpenAI 호환 엔드포인트와 Claude Code를 지원합니다.',
        },
        runtime: {
          feature: '런타임과 의존성',
          aic: 'Rust 바이너리 — Node.js 불필요',
          rival: 'Node.js ≥ 22.19 — Homebrew / curl',
          note: 'aic는 단일 정적 바이너리입니다; ai-commit은 Node가 PATH에 필요합니다(Homebrew tap도 Node를 설치합니다).',
        },
        windows: {
          feature: 'Windows 지원',
          aic: '예 — PowerShell 설치 프로그램, CI 테스트 완료',
          rival: '아니요 — macOS/Linux만',
          note: 'ai-commit은 Homebrew/curl로 설치; aic는 네이티브 Windows 설치 프로그램을 제공합니다.',
        },
        language: {
          feature: '커밋 메시지 언어',
          aic: '영어(웹사이트 4개 언어)',
          rival: '예 — `-l en` / `-l zh`',
          note: 'ai-commit은 중국어 메시지를 즉석 생성; aic의 CLI는 현재 영어만 지원합니다.',
        },
        emoji: {
          feature: '메시지의 이모지',
          aic: '아니요',
          rival: '예 — `--emoji`',
          note: '컨벤셔널 커밋은 aic의 유일한 형식; ai-commit은 선택적으로 이모지를 붙입니다.',
        },
        candidates: {
          feature: '여러 메시지 후보',
          aic: '아니요',
          rival: '아니요',
          note: '둘 다 N개 중 고르는 메뉴가 없습니다 — 메시지 하나만 작성합니다.',
        },
        popularity: {
          feature: '커뮤니티 규모',
          aic: '초기(약 8★)',
          rival: '초기(약 8★)',
          note: '둘 다 초기 단계입니다. ai-commit의 이중 언어 문서는 중국어 사용자를 끌고, aic는 4개 언어를 제공합니다.',
        },
      },
      faq: {
        h2: '자주 묻는 질문',
        items: [
          {
            q: 'aic는 ai-commit의 좋은 대안인가요?',
            a: 'hunk 수준 자동 배칭과 머지 충돌 해결을 원한다면, 그렇습니다. Claude Code를 쓰거나 중국어 커밋 메시지가 필요하다면 ai-commit이 적합합니다.',
          },
          {
            q: 'aic는 Claude Code를 지원하나요?',
            a: 'aic에는 Claude Code 통합이 없습니다 — LLM 프로바이더에 직접 호출하며 Node.js도 필요 없습니다. Claude Code 맥락이 필요하다면 ai-commit이 틈새 선택지입니다.',
          },
        ],
      },
    },
    llmc: {
      eyebrow: '비교 · llmc 대안',
      h1: 'aic vs llmc',
      // 링크가 라이벌 이름을 시작 부분에서 감쌉니다; 이것은 꼬리 부분입니다(<strong> 포함; set:html).
      ledeAfter:
        ' 은(는) 최대 프로바이더 선택지입니다 — 13개 LLM 백엔드, TOML 프롬프트, 세련된 터미널 UI. 실제 강점을 가진 진짜 도구입니다. 이 페이지는 공정하게 비교합니다. 비기면 비겼다고 말합니다. <strong>aic</strong>가 이기는 곳 — hunk 수준 배칭과 머지 충돌 해결, 의존성 없는 Rust 바이너리 — 그것이 전환의 이유입니다.',
      // <strong>/<code> 포함; set:html.
      callout:
        '<strong>같은 규격, 다른 초점.</strong> 둘 다 Conventional Commits를 작성합니다. llmc는 프로바이더 선택과 터미널 완성도를 극대화하고, aic는 커밋 히스토리 품질을 극대화합니다 — 한 파일이 여러 개의 집중된 커밋이 되고, `aic resolve`가 파일별 승인한 머지를 완료합니다.',
      winsH2: 'aic가 앞서는 부분',
      rivalH2: 'llmc가 여전히 이기는 부분',
      rivalLede:
        'llmc는 두 가지 정직한 양보를 얻습니다 — 프로바이더 수와 TUI 완성도. 그것들이 원자적 히스토리보다 중요하다면 공정한 선택입니다:',
      tieTag: '장단점',
      verdict: {
        h2: '요약',
        // <strong>/<code> 포함; set:html.
        body: '스테이징하지 않은 작업이 쌓이고 깨끗하고 원자적인 conventional commit으로 커밋하고 싶다면 — 또는 AI로 머지 충돌을 해결하고 싶다면 <strong>aic</strong>를 선택하세요. 가장 넓은 프로바이더 메뉴와 가장 예쁜 터미널 출력을 원한다면 llmc도 괜찮은 도구입니다 — 다만 파일 단위이고 2025년 후반부터 조용했다는 점은 알아두세요.',
      },
      // 매트릭스와 결론 포인트 목록(`LLMC_COMPARISON.axes`의 axis id로 키 지정).
      axes: {
        'auto-batch': {
          feature: '스테이징되지 않은 작업을 여러 커밋으로 자동 배칭',
          aic: '예 — 스테이징되지 않은 변경을 논리적 원자 커밋으로 분할',
          rival: '아니요 — 스테이징된 diff당 메시지 하나',
          note: 'aic의 시그니처 기능입니다. llmc는 스테이징한 내용을 메시지 하나로 커밋합니다.',
        },
        'per-hunk': {
          feature: '단일 파일을 여러 커밋으로 분할(per-hunk)',
          aic: '예 — 각 hunk를 의도에 따라 자신의 커밋으로',
          rival: '아니요 — 기껏해야 파일 단위',
          note: 'aic는 hunk 수준에서 diff를 읽습니다; llmc(라운드업의 모든 도구처럼)은 파일을 원자 단위로 봅니다.',
        },
        resolve: {
          feature: '머지 충돌 해결',
          aic: '예 — `aic resolve`가 diff를 제안하고 파일별로 확인',
          rival: '아니요 — 커밋 메시지만',
          note: 'llmc에는 충돌 대응이 없습니다 — 머지는 여전히 수작업입니다.',
        },
        'provider-count': {
          feature: '프로바이더 수',
          aic: '12(11개 일급 + OpenAI 호환)',
          rival: '13',
          note: 'llmc는 메뉴에 하나 더 있습니다. aic는 일급 Anthropic/Gemini/DeepSeek과 OpenAI 호환 탈출구로 응답합니다.',
        },
        tui: {
          feature: '터미널 경험',
          aic: '명확하고 빠른 라인 출력',
          rival: '진행 타이머가 있는 풍부한 TUI',
          note: 'llmc의 UI가 자랑입니다 — 실시간 상태와 타이머. aic는 속도와 스크립트 용이성을 중시합니다.',
        },
        runtime: {
          feature: '런타임과 의존성',
          aic: 'Rust 바이너리 — Node.js 불필요',
          rival: 'Node.js — npx / npm',
          note: 'aic는 단일 정적 바이너리; llmc는 Node와 npx로 실행됩니다.',
        },
        setup: {
          feature: '설치·설정',
          aic: '대화형 `aic setup` 마법사',
          rival: '선택적 `llmc init`(TOML 설정)',
          note: 'aic는 프로바이더 → 키 → 모델을 안내; llmc는 합리적 기본값이 있지만 설정은 파일 기반입니다.',
        },
        'custom-prompt': {
          feature: '커스텀 프롬프트',
          aic: '환경 변수 덮어쓰기(`AIC_SYSTEM_PROMPT`)',
          rival: '`${diff}` 보간이 있는 TOML 프롬프트',
          note: 'llmc의 프롬프트 설정이 더 풍부합니다; aic는 시스템 프롬프트 환경 변수 덮어쓰기를 제공합니다.',
        },
        activity: {
          feature: '프로젝트 활동',
          aic: '매주 릴리스',
          rival: '2025-10 이후 조용, GitHub 릴리스 없음',
          note: 'aic는 매주 릴리스와 공개 체인지로그; llmc는 약 9개월간 휴면 상태입니다.',
        },
        candidates: {
          feature: '여러 메시지 후보',
          aic: '아니요',
          rival: '아니요',
          note: '둘 다 N개 중 고르는 메뉴가 없습니다 — 메시지 하나만 작성합니다.',
        },
        formats: {
          feature: '커밋 메시지 형식',
          aic: 'Conventional Commits',
          rival: 'Conventional Commits',
          note: '둘 다 설계상 conventional 전용 — 무승부입니다.',
        },
      },
      faq: {
        h2: '자주 묻는 질문',
        items: [
          {
            q: 'aic는 llmc의 좋은 대안인가요?',
            a: '스테이징하지 않은 작업을 원자적 conventional 커밋으로 만들고 머지 충돌을 해결하고 싶다면, 그렇습니다. llmc는 프로바이더 수(13)와 TUI 완성도에서 우위를 유지합니다.',
          },
          {
            q: 'llmc는 아직 유지 관리되나요?',
            a: 'llmc는 2025년 후반부터 조용했고 GitHub 릴리스도 없습니다. aic는 매주 릴리스하며 공개 체인지로그를 유지합니다.',
          },
        ],
      },
    },
    'git-ai': {
      eyebrow: '비교 · git-ai 대안',
      h1: 'aic vs git-ai',
      ledeAfter:
        ' 은(는) 로컬 우선 Git 어시스턴트입니다 — 커밋 메시지, PR 설명, 기본적으로 설정 없는 Ollama. 아직 초기(v0.1.3)이고 2026년 초부터 조용했지만, PR 설명이라는 각도는 진짜입니다. 이 페이지는 공정하게 비교합니다. <strong>aic</strong>는 원자적 히스토리가 중요한 곳에서 이깁니다: hunk 수준 배칭과 AI 충돌 해결, 의존성 없는 Rust 바이너리로.',
      callout:
        '<strong>두 헬퍼, 다른 범위.</strong> git-ai는 어시스턴트로 git을 확장합니다(커밋 + PR 설명, 로컬 우선). aic는 한 가지를 깊게 합니다: 깨끗하고 원자적인 conventional 커밋 히스토리 — 그리고 머지 충돌 해결.',
      winsH2: 'aic가 앞서는 부분',
      rivalH2: 'git-ai가 여전히 이기는 부분',
      rivalLede:
        'git-ai는 라운드업에서 유일하게 PR 설명을 만들고 무료 로컬 모델을 기본값으로 합니다. 둘 중 하나가 원자적 히스토리보다 중요하다면 공정한 선택입니다:',
      tieTag: '장단점',
      verdict: {
        h2: '요약',
        body: '스테이징하지 않은 작업이 쌓이고 깨끗하고 원자적인 커밋으로 나누고 싶다면 — 또는 머지 충돌을 해결하고 싶다면 <strong>aic</strong>를 선택하세요. PR 설명도 만드는 로컬 우선 어시스턴트를 원한다면 git-ai는 주목할 만합니다 — 다만 파일 단위이고 2026년 2월부터 조용했다는 점은 알아두세요.',
      },
      faq: {
        h2: '자주 묻는 질문',
        items: [
          {
            q: 'aic는 git-ai의 좋은 대안인가요?',
            a: '스테이징하지 않은 작업을 논리 커밋으로 나누고 머지 충돌을 해결하고 싶다면, 그렇습니다. PR 설명과 무료 로컬 기본값을 원한다면 git-ai가 여전히 흥미롭습니다.',
          },
          {
            q: 'aic는 PR 설명을 작성하나요?',
            a: '아니요 — aic는 커밋과 충돌 해결에 집중합니다. PR 설명은 라운드업에서 git-ai의 강점입니다.',
          },
        ],
      },
      axes: {
        'auto-batch': {
          feature: '스테이징되지 않은 작업을 여러 커밋으로 자동 배칭',
          aic: '예 — 스테이징되지 않은 변경을 논리적 원자 커밋으로 분할',
          rival: '아니요 — 스테이징된 diff당 메시지 하나',
          note: 'aic의 시그니처 기능입니다. git-ai는 스테이징한 내용에 메시지 하나만 씁니다.',
        },
        'per-hunk': {
          feature: '단일 파일을 여러 커밋으로 분할(per-hunk)',
          aic: '예 — 각 hunk를 의도에 따라 자신의 커밋으로',
          rival: '아니요 — 기껏해야 파일 단위',
          note: 'aic는 hunk 수준에서 diff를 읽습니다; git-ai(라운드업의 모든 도구처럼)는 파일을 원자 단위로 봅니다.',
        },
        resolve: {
          feature: '머지 충돌 해결',
          aic: '예 — `aic resolve`가 diff를 제안하고 파일별로 확인',
          rival: '아니요 — 커밋 메시지만',
          note: 'git-ai에는 충돌 대응이 없습니다 — 머지는 여전히 수작업입니다.',
        },
        'pr-description': {
          feature: 'PR 설명',
          aic: '아니요',
          rival: '예 — `git ai pr`',
          note: 'git-ai는 PR 제목과 설명을 작성; aic는 커밋과 해결에 집중합니다.',
        },
        'local-default': {
          feature: '로컬 우선 기본값',
          aic: '원하는 프로바이더 선택(Ollama 포함)',
          rival: '설정 없는 Ollama — 무료·오프라인',
          note: 'git-ai는 바로 오프라인으로 작동; aic는 프로바이더 키가 필요하지만 Ollama도 지원합니다.',
        },
        runtime: {
          feature: '런타임과 의존성',
          aic: 'Rust 바이너리 — Node.js 불필요',
          rival: 'Node.js ≥ 22 — npm / npx',
          note: 'aic는 단일 정적 바이너리; git-ai는 Node와 scoped npm 패키지로 실행됩니다.',
        },
        setup: {
          feature: '설치·설정',
          aic: '대화형 `aic setup` 마법사',
          rival: '`git ai config` 명령',
          note: 'aic는 프로바이더 → 키 → 모델을 안내; git-ai는 CLI로 설정합니다.',
        },
        providers: {
          feature: '프로바이더 범위',
          aic: '11개 일급 + OpenAI 호환',
          rival: 'Ollama, OpenAI, Anthropic',
          note: 'aic는 합리적 기본 모델을 가진 일급 프로바이더가 더 많습니다.',
        },
        activity: {
          feature: '프로젝트 활동',
          aic: '매주 릴리스',
          rival: '2026-02 이후 조용',
          note: 'aic는 매주 릴리스; git-ai는 약 6개월간 휴면 상태입니다.',
        },
        formats: {
          feature: '커밋 메시지 형식',
          aic: 'Conventional Commits',
          rival: 'conventional + gitmoji 옵션',
          note: 'git-ai는 gitmoji 형식을 제공; aic는 설계상 conventional 전용입니다.',
        },
        candidates: {
          feature: '여러 메시지 후보',
          aic: '아니요',
          rival: '아니요',
          note: '둘 다 N개 중 고르는 메뉴가 없습니다 — 메시지 하나만 작성합니다.',
        },
      },
    },

    opencommit: {
      eyebrow: '비교 · OpenCommit 대안',
      h1: 'aic vs OpenCommit',
      ledeAfter:
        ' 은(는) GitHub 2023 해커톤 우승자이자 git용 최고 기능 GPT 래퍼입니다 — GitMoji, 구성 가능한 설명, 로컬 Ollama, 그리고 큰 커뮤니티. 이 페이지는 공정하게 비교합니다: OpenCommit이 이기는 곳은 솔직히 말합니다. <strong>aic</strong>는 원자적 히스토리가 중요한 곳에서 이깁니다 — hunk 수준 배칭과 AI 충돌 해결, 의존성 없는 Rust 바이너리로.',
      callout:
        '<strong>둘 다 git을 사랑합니다; 분할 방식이 다릅니다.</strong> OpenCommit은 검증된 LLM 래퍼입니다 — 스테이징한 diff에 메시지 하나, 이모지 선택 가능. aic는 여기서 유일하게 파일 경계 아래로 내려갑니다: 스테이징하지 않은 작업이 논리적 원자 커밋이 되고, `aic resolve`가 파일별 승인한 머지를 완료합니다.',
      winsH2: 'aic가 앞서는 부분',
      rivalH2: 'OpenCommit이 여전히 이기는 부분',
      rivalLede:
        'OpenCommit은 당연히 그 자리를 얻었습니다: 기능이 풍부하고, 널리 채택되었고, 활발히 유지됩니다. 이것들이 자동 배칭보다 중요하다면 공정한 선택입니다:',
      tieTag: '장단점',
      verdict: {
        h2: '요약',
        body: '스테이징하지 않은 작업이 쌓이고 깨끗하고 원자적인 커밋으로 나누고 싶다면 — 또는 머지 충돌을 파일별 승인으로 해결하고 싶다면 <strong>aic</strong>를 선택하세요. 검증되고 해커톤 우승에 GitMoji와 거대한 커뮤니티를 가진 래퍼를 원한다면 OpenCommit은 훌륭한 도구입니다.',
      },
      faq: {
        h2: '자주 묻는 질문',
        items: [
          {
            q: 'aic는 OpenCommit의 좋은 대안인가요?',
            a: '스테이징하지 않은 작업을 논리 커밋으로 나누고(단일 파일 안에서도) AI로 머지 충돌을 해결하고 싶다면, 그렇습니다. 검증된 래퍼와 GitMoji, 가장 큰 커뮤니티를 원한다면 OpenCommit이 적합합니다.',
          },
          {
            q: 'aic는 GitMoji를 지원하나요?',
            a: '아니요 — aic는 Conventional Commits만 작성합니다. OpenCommit은 구성 가능한 GitMoji를 제공합니다(기본 10개, `--fgm`으로 전체 스펙).',
          },
        ],
      },
      axes: {
        'auto-batch': {
          feature: '스테이징되지 않은 작업을 여러 커밋으로 자동 배칭',
          aic: '예 — 스테이징되지 않은 변경을 논리적 원자 커밋으로 분할',
          rival: '아니요 — 스테이징된 diff당 메시지 하나',
          note: 'aic의 시그니처 기능입니다. OpenCommit은 스테이징한 내용에 메시지 하나만 씁니다.',
        },
        'per-hunk': {
          feature: '단일 파일을 여러 커밋으로 분할(per-hunk)',
          aic: '예 — 각 hunk를 의도에 따라 자신의 커밋으로',
          rival: '아니요 — 기껏해야 파일 단위',
          note: 'aic는 hunk 수준에서 diff를 읽습니다; OpenCommit(라운드업의 모든 도구처럼)는 파일을 원자 단위로 봅니다.',
        },
        resolve: {
          feature: '머지 충돌 해결',
          aic: '예 — `aic resolve`가 diff를 제안하고 파일별로 확인',
          rival: '아니요 — 커밋 메시지만',
          note: 'OpenCommit에는 충돌 대응이 없습니다 — 머지는 여전히 수작업입니다.',
        },
        runtime: {
          feature: '런타임과 의존성',
          aic: 'Rust 바이너리 — Node.js 불필요',
          rival: 'Node.js — npm',
          note: 'aic는 단일 정적 바이너리; OpenCommit은 Node와 npm으로 실행됩니다.',
        },
        setup: {
          feature: '설치·설정',
          aic: '대화형 `aic setup` 마법사',
          rival: '`oco config set` 명령',
          note: 'aic는 프로바이더 → 키 → 모델을 안내; OpenCommit은 CLI 명령이나 `.env`로 설정합니다.',
        },
        'provider-count': {
          feature: '프로바이더 범위',
          aic: '11개 일급 + OpenAI 호환',
          rival: 'Claude, GPT 및 모든 프로바이더',
          note: '둘 다 멀티 프로바이더입니다. aic는 합리적 기본 모델을 가진 일급 프로바이더 11개 제공; OpenCommit은 원하는 프로바이더를 수동 설정합니다.',
        },
        emoji: {
          feature: 'GitMoji 지원',
          aic: '아니요',
          rival: '예 — 구성 가능, `--fgm`으로 전체 스펙',
          note: 'OpenCommit은 GitMoji로 장식; aic는 설계상 conventional 전용입니다.',
        },
        community: {
          feature: '커뮤니티와 채택',
          aic: '초기(약 8★)',
          rival: '7,500★ · 월 약 12k npm 다운로드 · 해커톤 우승',
          note: 'OpenCommit이 훨씬 더 확립되어 있습니다. 모멘텀이 가장 중요하다면 이 줄은 OpenCommit이 이깁니다.',
        },
        activity: {
          feature: '프로젝트 활동',
          aic: '매주 릴리스',
          rival: '활발(2026-07 업데이트)',
          note: '둘 다 적극적으로 유지 관리 — 무승부.',
        },
        candidates: {
          feature: '여러 메시지 후보',
          aic: '아니요',
          rival: '아니요',
          note: '둘 다 N개 중 고르는 메뉴가 없습니다 — 메시지 하나만 작성합니다.',
        },
      },
    },

    more: {
      h2: '더 많은 비교',
      vsLabel: 'aic vs {name}',
      roundup: 'aic를 최고 AI 커밋 도구 목록에서 보기 →',
      installCta: 'aic 설치 →',
    },
  },

  alt: {
    // 마이그레이션 설치 단계의 현지화된 도입구. 명령어 자체는 PRIMARY_INSTALL_COMMAND
    // (site.ts)에서 가져오며 AlternativePage가 <code>로 렌더링합니다. locale 파일에는
    // 다시 적지 않습니다 (ADR-0006).
    migrateLead: 'aic 설치:',
    hub: {
      eyebrow: '대안',
      h1: 'AI 커밋 도구 대안 — aic 선택',
      lede: '이 분야의 모든 AI 커밋 도구는 스테이징한 diff에 대해 메시지 하나만 씁니다. aic는 유일하게 파일 경계 아래로 내려갑니다: 스테이징하지 않은 작업이 논리적 원자 커밋이 되고, <code>aic resolve</code>가 파일별 승인한 머지를 완료합니다. 언제 전환하는 것이 현명한지 정직하게 살펴봅니다.',
      h2: '대안 목록',
      items: [
        {
          id: 'aicommits',
          name: 'aicommits',
          line: '기존 강자 — 메시지 하나가 아니라 자동 배칭과 충돌 해결을 원한다면 전환.',
        },
        {
          id: 'opencommit',
          name: 'OpenCommit',
          line: '해커톤 우승 래퍼 — GitMoji가 아니라 원자적 히스토리를 원한다면 전환.',
        },
        {
          id: 'ai-commit',
          name: 'ai-commit',
          line: 'Claude Code 선택지 — Node.js 없이 hunk 수준 분할을 원한다면 전환.',
        },
        {
          id: 'llmc',
          name: 'llmc',
          line: '최대 프로바이더 선택지 — TUI가 아니라 배칭과 해결을 원한다면 전환.',
        },
        {
          id: 'git-ai',
          name: 'git-ai',
          line: '로컬 우선 어시스턴트 — 파일 경계 아래의 커밋 분할을 원한다면 전환.',
        },
      ],
    },
    aicommits: {
      eyebrow: 'aicommits에서 전환',
      h1: 'aicommits 대안: aic',
      lede: 'aicommits는 확립된 기본값입니다 — 스테이징한 diff당 메시지 하나에 검증된 도구입니다. 진짜 문제가 스테이징하지 않은 작업이 쌓이고 히스토리가 흐려지는 것이라면, aic가 바로 그런 문제를 위해 만들어진 대안입니다: 변경 사항을 논리적 원자 커밋으로 나누고 파일별 승인으로 머지 충돌을 해결합니다.',
      whyH: 'aicommits에서 전환하는 이유',
      why: 'aicommits는 스테이징한 내용에 메시지 하나를 씁니다 — 하지만 어수선한 작업 트리를 논리 커밋으로 나누지 못하고, 머지를 풀어주지도 못합니다. 둘 다 관심사가 섞인 커밋과 수작업 충돌 해결을 남깁니다.',
      switchH: '다음이라면 aic로:',
      shouldSwitch:
        '…스테이징하지 않은 작업이 쌓여 깨끗하고 원자적인 conventional 커밋으로 만들고 싶다면(단일 파일 안에서도) — 또는 Node.js 설치 없이 AI로 해결된 머지 충돌을 원한다면.',
      notH: '다음이라면 aicommits에 유지:',
      shouldNot:
        '…`prepare-commit-msg` 훅에 의존하고, gitmoji 또는 일반 형식을 원하고, 여러 메시지 후보가 필요하거나, 가장 큰 커뮤니티의 안정감을 원한다면.',
      migrateH: '전환 방법',
      migrate: [
        '한 번만 설정: `aic setup` 실행 — 프로바이더·키·모델을 하나의 마법사에서',
        '커밋: 작업을 스테이징하고 `aic` 실행; aic가 스테이징하지 않은 작업을 자동으로 배칭합니다',
      ],
    },
    opencommit: {
      eyebrow: 'OpenCommit에서 전환',
      h1: 'OpenCommit 대안: aic',
      lede: 'OpenCommit은 검증되고 기능이 풍부합니다 — GitMoji, 구성 가능한 설명, 거대한 커뮤니티. 하지만 스테이징한 diff에 메시지 하나만 씁니다. 커밋 히스토리 품질이 문제라면 aic가 대안입니다: 의존성 없는 Rust 바이너리로 hunk 수준 배칭과 AI 충돌 해결.',
      whyH: 'OpenCommit에서 전환하는 이유',
      why: 'OpenCommit은 LLM을 잘 래핑합니다 — 하지만 파일 단위까지만입니다. 한 파일을 세 가지 이유로 건드려도 커밋 하나가 되고, 머지 충돌은 여전히 손으로 풀어야 합니다.',
      switchH: '다음이라면 aic로:',
      shouldSwitch:
        '…스테이징하지 않은 작업을 논리적 원자 커밋으로 나누고 싶다면(단일 파일 안에서도) — 또는 Node.js 없이 파일별 승인의 충돌 해결을 원한다면.',
      notH: '다음이라면 OpenCommit에 유지:',
      shouldNot:
        '…검증된 해커톤 우승 래퍼와 GitMoji, 가장 큰 커뮤니티를 원하고 파일 단위 커밋이 괜찮다면.',
      migrateH: '전환 방법',
      migrate: [
        '한 번만 설정: `aic setup` 실행 — 프로바이더·키·모델을 하나의 마법사에서',
        '커밋: 스테이징 여부와 무관하게 `aic` 실행; 아무것도 눈감고 적용되지 않습니다',
      ],
    },
    'ai-commit': {
      eyebrow: 'ai-commit에서 전환',
      h1: 'ai-commit 대안: aic',
      lede: 'ai-commit은 OpenAI 호환 엔드포인트나 Claude Code로 Conventional Commits를 작성합니다 — Claude Code를 쓴다면 편리합니다. 원자적 히스토리를 원한다면 aic가 대안입니다: hunk 수준 배칭, 충돌 해결, 안내식 설정 마법사, Node 의존성 없음.',
      whyH: 'ai-commit에서 전환하는 이유',
      why: 'ai-commit은 파일 단위에 환경 변수 설정입니다: 스테이징한 diff당 메시지 하나, 분할 없음, 충돌 도움 없음, 그리고 Node.js ≥ 22 필요.',
      switchH: '다음이라면 aic로:',
      shouldSwitch:
        '…스테이징하지 않은 작업을 논리 커밋으로 나누고 머지 충돌을 해결하며 안내식 설정 마법사를 원한다면 — Node.js 없이.',
      notH: '다음이라면 ai-commit에 유지:',
      shouldNot:
        '…Claude Code를 일상적으로 쓰고, 중국어 커밋 메시지(`-l zh`)를 원하거나, 이모지 컨벤셔널 커밋을 원한다면.',
      migrateH: '전환 방법',
      migrate: [
        '한 번만 설정: `aic setup` 실행 — 프로바이더·키·모델을 하나의 마법사에서',
        '커밋: 작업을 스테이징하고 `aic` 실행; aic가 스테이징하지 않은 작업을 자동으로 배칭합니다',
      ],
    },
    llmc: {
      eyebrow: 'llmc에서 전환',
      h1: 'llmc 대안: aic',
      lede: 'llmc는 최대 프로바이더 선택지입니다 — 13개 백엔드, TOML 프롬프트, 세련된 TUI. 하지만 스테이징한 내용을 메시지 하나로 커밋합니다. 커밋 히스토리 품질이라면 aic가 대안이고, 활발히 유지 관리됩니다.',
      whyH: 'llmc에서 전환하는 이유',
      why: 'llmc는 2025년 후반부터 조용했고 GitHub 릴리스도 없습니다. 그리고 이 분야의 모든 도구처럼 파일 단위입니다 — 분할도 충돌 해결도 없습니다.',
      switchH: '다음이라면 aic로:',
      shouldSwitch:
        '…스테이징하지 않은 작업을 깨끗하고 원자적인 conventional 커밋으로 만들고, 충돌을 AI로 해결하며, 공개 체인지로그가 있는 활발한 프로젝트를 원한다면.',
      notH: '다음이라면 llmc에 유지:',
      shouldNot:
        '…가장 넓은 프로바이더 메뉴(13), 가장 예쁜 TUI, 풍부한 TOML 프롬프트 설정을 원한다면.',
      migrateH: '전환 방법',
      migrate: [
        '한 번만 설정: `aic setup` 실행 — 프로바이더·키·모델을 하나의 마법사에서',
        '커밋: 스테이징 여부와 무관하게 `aic` 실행; 아무것도 눈감고 적용되지 않습니다',
      ],
    },
    'git-ai': {
      eyebrow: 'git-ai에서 전환',
      h1: 'git-ai 대안: aic',
      lede: 'git-ai는 로컬 우선 Git 어시스턴트입니다 — 커밋, PR 설명, 설정 없는 Ollama. 초기 단계(v0.1.3)이고 2026년 2월부터 휴면 상태입니다. 원자적 히스토리라면 aic가 대안이고, 매주 릴리스합니다.',
      whyH: 'git-ai에서 전환하는 이유',
      why: 'git-ai는 파일 단위이고 몇 달째 업데이트가 없습니다 — PR 설명 기능 외에는 분할도 해결도 할 수 없습니다.',
      switchH: '다음이라면 aic로:',
      shouldSwitch:
        '…스테이징하지 않은 작업을 논리 커밋으로 나누고 머지 충돌을 해결하고 싶다면 — 매주 릴리스하는 프로젝트에서.',
      notH: '다음이라면 git-ai에 유지:',
      shouldNot: '…PR 설명과 무료·오프라인·설정 없는 기본값을 원한다면.',
      migrateH: '전환 방법',
      migrate: [
        '한 번만 설정: `aic setup` 실행 — 프로바이더·키·모델을 하나의 마법사에서',
        '커밋: 작업을 스테이징하고 `aic` 실행; aic가 스테이징하지 않은 작업을 자동으로 배칭합니다',
      ],
    },
  },

  deepseek: {
    eyebrow: '기능 · DeepSeek',
    h1: 'DeepSeek로 커밋 메시지 작성',
    lede: 'DeepSeek은 <b>aic</b>의 일급 프로바이더입니다: 설정 마법사에서 선택하고 키를 붙여넣으면 aic가 diff를 읽고 conventional 커밋을 작성합니다 — 명령 하나. 키는 기기를 떠나지 않습니다. aic가 하는 모든 것 — 자동 배칭, <code>aic resolve</code>, Node.js 불필요 — 은 DeepSeek에서도 그대로 동작합니다.',
    whyH: 'DeepSeek + aic를 선택하는 이유',
    why: [
      '일급 프로바이더 — OpenRouter 경유나 커스텀 엔드포인트 불필요',
      '빠르고 저렴 — 커밋 메시지에 맞게 조정된 경량 모델을 기본으로',
      '중간자 없음 — 기기에서 DeepSeek으로 직접 호출',
      '전 기능 지원 — 자동 배칭과 `aic resolve`는 모든 프로바이더에서 동작',
    ],
    setupH: '하나의 마법사로 설정',
    setup: [
      '<code>aic setup</code> 실행',
      '프로바이더로 DeepSeek 선택',
      '<code>DEEPSEEK_API_KEY</code> 붙여넣기 및 모델 선택',
      '커밋 — 작업을 스테이징하고 <code>aic</code> 실행',
    ],
    envH: '환경 변수로도 설정 가능',
    env: '<code>LLM_BACKEND=deepseek</code>와 <code>DEEPSEEK_API_KEY</code>를 설정하고 aic를 실행하세요. 설정은 환경 변수 → 설정 파일 → 기본값 순으로 결정됩니다.',
    modelH: '기본 모델',
    model:
      'aic는 합리적인 DeepSeek 기본값(<code>deepseek-v4-flash</code>)을 내장합니다 — 커밋 메시지 작업에 빠르고 저렴합니다. 언제든 <code>LLM_MODEL</code>로 덮어쓸 수 있습니다.',
    faq: {
      h2: '자주 묻는 질문',
      items: [
        {
          q: 'aic는 DeepSeek를 지원하나요?',
          a: '네 — DeepSeek는 OpenAI, Anthropic, Gemini 등 7개 이상과 함께 aic의 일급 프로바이더입니다.',
        },
        {
          q: 'aic는 어떤 DeepSeek 모델을 사용하나요?',
          a: 'aic는 기본적으로 deepseek-v4-flash — 커밋 메시지에 맞는 빠르고 저렴한 모델을 사용합니다. 언제든 LLM_MODEL로 변경할 수 있습니다.',
        },
        {
          q: '제 DeepSeek 키는 안전한가요?',
          a: '네 — aic는 기기에서 DeepSeek으로 직접 호출합니다. 키가 기기를 떠나지 않으며 중간자나 커밋당 과금도 없습니다.',
        },
      ],
    },
  },

  roundup: {
    eyebrow: '라운드업 · 최고 AI 커밋 도구',
    h1: '최고의 AI 커밋 메시지 도구',
    lede: '<code>git diff</code>를 읽고 커밋 메시지를 초안하는 CLI는 넘쳐납니다. "어떤 게 최고?"에 대한 정직한 대답은 "무엇을 원하느냐에 따라"입니다. 다음은 기능을 하나하나 검증한 공정한 분야 조사와, 빠르게 고르는 방법입니다.',
    callout:
      '<strong>공개.</strong><code>aic</code>는 우리 도구라 이 목록에 있습니다. 각 도구가 진정으로 잘하는 것에 대해 모든 한 줄평을 정직하게 유지 — 다른 도구가 우리를 이기는 부분도 포함해.',
    choose: {
      h2: '선택 방법',
      items: [
        {
          need: '미스테이지 작업을 논리적인 커밋으로 쪼개고 싶다 — 한 파일 안에서도',
          pick: '→ aic',
        },
        {
          need: '병합 충돌을 대신 해결해 주길 원한다 — 나중에 메시지만이 아니라',
          pick: '→ aic',
        },
        { need: '인기 있고 잘 지원되는 기본값을 원한다', pick: '→ aicommits' },
        {
          need: '해커톤 우승에 GitMoji를 구성할 수 있는 기능 풍부 래퍼를 원한다면',
          pick: '→ OpenCommit',
        },
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
      note: '전면 조사는 아님 — 공간이 붐빕니다(<code>commitizen</code>, <code>cz-git</code> 그리고 열두 개 더). 이 여섯이 뚜렷한 접근을 모읍니다: 자동 배치, 기존 강자, Claude Code 네이티브, 로컬 우선, 최대 프로바이더, 그리고 해커톤 우승의 기능 풍부 CLI.',
    },
    verdict: {
      h2: '우리의 정직한 평가',
      body: '미스테이지 작업이 쌓이고 깔끔하고, 원자적이고, 컨벤셔널 커밋으로 커밋하고 싶다면 — Node.js 설치 없이 — <strong>aic</strong>가 바로 그 목적을 위해 만들어졌습니다. 그렇지 않다면, aicommits가 안전한 기본값이고, 나머지는 각자 명확한 틈새를 차지합니다.',
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
      opencommit: {
        strength:
          'GitHub 2023 해커톤 우승 — 구성 가능한 GitMoji, 로컬 Ollama/llama.cpp, 그리고 거대한 커뮤니티(7.5k★, 월 약 12k npm 다운로드)를 가진 기능 풍부 래퍼.',
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
    ledeBefore: '출시된 <code>aic</code>의 각 버전 — 빌드 시 소스 저장소의 ',
    ledeLink: 'CHANGELOG.md',
    ledeAfter:
      ' 에서 가져오며, 그 가져오기가 잠시 닿지 않으면 GitHub Releases를 폴백으로 씁니다. 최신이 위.',
    englishNote: '릴리스 노트는 영어로 유지됩니다.',
    timeline: {
      latest: '최신',
      githubRelease: 'GitHub 릴리스',
      noNotes: '발행된 릴리스 노트가 없습니다.',
    },
  },
};
