# Amplify 수업자료 도구 모음

작업을 시작하는 Codex와 Claude는 먼저 [`작업-시작-전-필독.md`](작업-시작-전-필독.md)와
[`인수인계/현재-작업-상태.md`](인수인계/현재-작업-상태.md)를 읽어야 합니다.

중학교 수학 Amplify Classroom 수업자료를 만들 때 쓰는 도구들입니다.

운영 주소: **https://amplify.betterwithu.kr/**

| 페이지 | 내용 |
|---|---|
| `index.html` | 홈 — 도구 카드 목록 |
| `settings.html` | 수식 변환 AI 설정 |
| `gemini-key.html` | Gemini API 키 발급 안내(스크린샷은 `img/gemini-key/`) |
| `interpret.html` | Computation Layer 분석 스킬 소개·설치 안내(다운로드는 준비 중) |
| `text.html` | 글자 꾸미기 (크기·색·굵게) |
| `math.html` | 수식 입력 (명령어 25개 + 복사용 기호 23개, 입력 칸을 누르면 복사, AI 수식 스킬 안내) |
| `skill/amplify-math/` | Claude·GPT·Gemini용 Amplify 수식 스킬 (`SKILL.md`, `references/rules.md`, `instructions.md`). 규칙을 고치면 `skill/amplify-math.zip`도 다시 만듭니다. Codex CLI·Gemini CLI는 GitHub 주소로 직접 설치 가능(명령은 `skill.html`에 있음) |
| `skill.html` | 스킬 설치 허브 (처음이라면·코딩 에이전트·붙여넣기, 무료 여부와 시험 현황) |
| `skill-claude.html` `skill-chatgpt.html` `skill-gemini.html` | 각 AI별 설치 안내 (화면 그림 포함, `img/skill-*/`) |
| `convert.html` | AI 수식 변환 · 웹에서 먼저 해보기 (체험용, 같은 규칙의 수식 스킬 설치를 권장) |
| `privacy.html` | 개인정보 및 AI 데이터 처리 안내 |
| `terms.html` | 이용 안내·저작권·비제휴 고지 |

CL 학습자료는 별도 저장소에서 관리하며 `https://cl.betterwithu.kr/`로 연결합니다.

## Computation Layer 분석 스킬

- 웹 질의응답 해석기는 종료했고, `interpret.html`은 스킬 소개·설치 안내 페이지입니다.
- 스킬 패키지는 별도 세션에서 제작 중이며 다운로드 파일과 버전은 아직 확정되지 않았습니다.
- 이 페이지는 AI를 호출하지 않습니다.

## 페이지를 추가하려면

`index.html` 아래쪽 `PAGES` 배열에 한 줄만 넣으면 카드가 생깁니다.

```js
{ icon:"📊", title:"새 도구", url:"new.html", color:"#0f4c81",
  desc:"무엇을 하는 도구인지 한두 문장." },
```

## AI 도구 공통 설정

`settings.html`에서 한 번 설정하면 수식 변환이 그 설정을 사용합니다. 개인 키는 그 사람의 브라우저에만 저장되고, 공유용 키는 Vercel 환경변수에만 둡니다.

현재 공통 설정은 Google Gemini를 사용합니다. 모델 이름은 설정 화면에서 바꿀 수 있습니다.

키 발급 안내: [`gemini-key.html`](gemini-key.html)

### 공유 키 (선택) — Vercel 프록시

암호를 아는 사람이 관리자 키로 쓰게 하는 기능입니다.
키가 브라우저에 노출되지 않도록 서버(Vercel)를 거칩니다.

**1. Vercel에 레포 연결**

[vercel.com/new](https://vercel.com/new) → GitHub 계정 연결 → `amplify-betterwithu` Import
→ 설정은 건드리지 말고 **Deploy**. (프레임워크 자동 감지 = Other 로 두면 됩니다.)

**2. 환경변수 등록**

Settings → Environment Variables 에서 아래 값을 넣습니다.

| 이름 | 값 |
|---|---|
| `GEMINI_API_KEY` | 공유용 Gemini 키 — **주력 키 말고 새로 발급하세요** |
| `GEMINI_API_KEYS` | (선택·권장) 공유용 키 여러 개를 쉼표 또는 줄바꿈으로 입력 |
| `SHARE_PASSWORD` | 연수마다 새로 정해 전달할 공유 암호 — README나 코드에는 실제 값을 쓰지 않습니다 |
| `GEMINI_MODEL` | (선택) 기본값 `gemini-3.5-flash` |

넣은 뒤 Deployments → 최신 배포 → **Redeploy** 해야 반영됩니다.

**3. 주소를 페이지에 알려주기**

배포가 끝나면 `https://<프로젝트>.vercel.app` 주소가 나옵니다.
`shared-config.example.js` 를 복사해 `shared-config.js` 를 만들고 주소를 넣습니다.

```js
window.AI_ENDPOINT = "https://<프로젝트>.vercel.app/api/ai";
```

이 파일에는 공개 중계 주소만 들어가므로 저장소에 포함해도 됩니다. API 키와 공유 암호는 절대 이 파일에 넣지 않습니다.

> 공유 키에는 [Google Cloud 콘솔](https://console.cloud.google.com/apis/credentials)에서
> **일일 사용량 상한**을 걸어두시길 권합니다. 암호가 퍼져도 한도까지만 나갑니다.

**공통 프록시가 하는 일** (`api/ai.js`)
- 암호가 맞을 때만 관리자 키로 Gemini 를 부릅니다 (키는 응답에 담기지 않습니다)
- 허용된 사이트 출처와 `convert` 작업만 받습니다
- 이미지 크기를 제한하고, 한 키가 사용 한도에 닿으면 등록된 다음 키를 시도합니다

## 수식 미리보기

Amplify는 수식을 **MathQuill**로 그립니다 (KaTeX 아님).
`lib/`에 그 라이브러리를 두고 같은 엔진으로 렌더하므로,
미리보기 화면이 Amplify에서 보일 모양과 같습니다.

⚠️ GitHub Pages는 밑줄로 시작하는 폴더를 제외하므로 `_mq/`가 아니라 `lib/`입니다.

---

2026 서울대학교사범대학부설중학교 허철호
