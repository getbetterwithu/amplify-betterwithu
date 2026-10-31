# 파일 지도 (INDEX)

질문 유형을 보고 **필요한 파일만** 읽는다. 지식 전체를 매번 읽지 않는다.

## 찾는 순서 (지식의 위계)
이름마다 이 순서로 찾는다. 앞 단계의 내용을 뒤 단계로 덮어쓰지 않는다 (`SKILL.md` 2절).
1. 공식 문서: `knowledge/official-index.md`, `knowledge/official-docs.md`, `knowledge/site-core.md` — 정의의 정본
2. 충돌 파일: `reference/conflicts.md`
3. 판정: `knowledge/grammar-defs.md` (판정 확정 항목의 확정 문장만)
4. 3일치: `knowledge/examples-A.md`·`examples-B.md`·`examples-CD.md` — 정의가 아니라 특정 코드의 **적용 예제**. 비슷한 코드의 사례로만 인용한다. ID 앞글자 `A-`는 A, `B-`는 B, `C-`·`D-`는 CD 파일
5. 가설: `reference/hypotheses.md`

아래 표의 "먼저 읽을 파일"이 grammar 쪽이어도, 그 이름의 정의는 1단계 공식 문서에서 먼저 확인한다.

## 질문 유형별 읽을 파일

| 질문 유형 | 먼저 읽을 파일 | 이어서 읽을 파일 |
|---|---|---|
| CL 코드를 붙여넣고 "무슨 뜻이야?" | 이름의 정의를 `knowledge/official-docs.md` 1부에서 먼저 본다 | 같은 이름을 `knowledge/grammar-defs.md`(판정)와 예제 파일(`examples-*.md`, 제목이 `Choice.submitCount [source]`처럼 컴포넌트와 이름으로 되어 있다)에서 검색한다. 같은 이름이 여러 항목에 있으면 모두 본다 |
| sink·source 자체의 정의가 궁금할 때 (예: `numericValue`가 뭐야) | `knowledge/official-docs.md` 1부 (정의는 여기에 있다) | 예제 파일의 `Math Input.numericValue`처럼 컴포넌트·이름으로 된 제목은 그 이름을 쓴 **사용 예**다. 정의가 아니라 예제로 읽는다 |
| 캡처 이미지 해석 | `SKILL.md` 3절 (한 번에 전사 → 해석) | 전사 후 위 행과 같다 |
| sink·source가 뭐야, CL이 어떻게 동작해? | `knowledge/site-core.md` | `knowledge/examples-CD.md`의 D-concept 항목 (사례) |
| 특정 컴포넌트에 쓸 수 있는 sink·source가 있나? | `knowledge/official-docs.md` 1부 (컴포넌트별 목록) | `grammar-defs.md`와 예제 파일에서 같은 이름의 항목 |
| 함수·타입이 있나? (`makeBounds`, `numberList`, `aggregate` 등) | `knowledge/official-index.md` | `knowledge/official-docs.md` 2부 (고급 주제) |
| `when`, `otherwise`, `and`, `or`, `not`, 조건식 | `knowledge/official-index.md`의 Logic 절 | `knowledge/site-core.md` 조건 절 |
| 정답 판정(`correct`), `numericValue`, `submitted` | `knowledge/site-core.md` 정답 판정 절 | `knowledge/examples-B.md`의 math-response, multiple-choice 절 |
| `aggregate`, `random`, 수식 해석 같은 고급 주제 | `knowledge/official-docs.md` 2부 | `knowledge/grammar-defs.md`의 C-adv 항목, `examples-CD.md`의 adv 절 |
| readOnly, disableEvaluation, differenceFunction 등 헷갈리는 설정 | `reference/conflicts.md` | `grammar-defs.md`와 예제 파일에서 해당 이름 검색. 실행검증 표시와 `reference/hypotheses.md` 확인 |
| 변수에 컴포넌트를 넣어 부르는 코드 (`i = input1` 같은 모양) | `knowledge/grammar-defs.md`의 U-alias-01 (판정 확정) | 확정 범위는 패턴 자체와 확인된 네 가지 형태까지. 컴포넌트 이름이 코드에 있으면 `input1`의 CL만 외부 컴포넌트 CL로 요청 |
| "이게 확실해?" 라는 질문 | 해당 항목의 등급 줄 | `SKILL.md` 7~8절 |

## 형제 항목 (같이 읽을 것)

이름이 다르지만 같은 방식으로 동작하는 항목은 **한쪽 설명을 다른 쪽에서도 찾는다.** 한쪽에만 적혀 있는 값(기본값, 단위)이 있다.

| 항목 | 형제 | 같이 읽을 설명 |
|---|---|---|
| `timeSincePress` (action-button) | `timeSinceSubmit` (multiple-choice, expression input, text input) | 공식 문서는 둘 다 **초(seconds)** 단위라고 쓴다. 기본 최대 시간 "10초에서 멈추고 인자(`maxTime`)로 늘릴 수 있다"는 설명은 `timeSincePress` 항목에만 직접 적혀 있고, `timeSinceSubmit` 항목에는 인자 `maxTime`이 있다는 것까지만 적혀 있다. 해석에서는 `timeSincePress`의 설명을 근거로 같은 방식이라고 읽되, `timeSinceSubmit`의 기본 최대 시간이 10초라고 직접 적힌 곳은 없음을 확인 지점으로 표시한다 |
| `timeSinceSubmit()` 괄호 있음/없음 | 같은 source | `choice.timeSinceSubmit`처럼 괄호 없이 쓴 코드도 있다. 인자 없는 호출과 같은 것인지는 자료에 없다 |
| `capture(key)` | `history(key)`, `lastValue(key)` | 같은 `key` 문자열을 써야 짝이 맞는다. 다르면 오류 후보 |
| `choiceContent(index)` | `isSelected(choiceIndex)` | 보기 번호는 1부터 센다 |
| `differenceFunction` (equation) | `differenceFunction` (inequality) | equation은 공식 문서의 설명과 예시 부호가 다르나, 사용자 판정으로 lhs − rhs다(`reference/conflicts.md` 2번). inequality는 (greater side) − (lesser side) |

## 컴포넌트 이름 대응표

자료마다 같은 컴포넌트를 다르게 부른다. 같은 컴포넌트로 읽는다. (official-docs.md의 제목 기준, 영어 이름은 문법 항목 ID의 분류 이름)

| 한국어(official-docs 제목) | 영어 이름 | 비고 |
|---|---|---|
| 그래프 | graph (`input/graph`) | |
| 그림판 | sketch | |
| 메모 | note (`exhibit/text`) | `content` sink |
| 이미지 | image | |
| 미디어 | media (`video`) | |
| 수식 답변 | math-response, Math Input, Expression Input (`input/expression`) | `numericValue`, `latex`, `submitted` |
| 자유 답변 | free-response (`input/text`) | |
| 객관식 | multiple-choice, Choice | |
| 정렬 리스트 | ordered-list (`reorder`) | |
| 표 | table | |
| 행동 버튼 | action-button | `pressCount`, `timeSincePress` |
| 폴리패드 | polypad | |
| 챌린지 크리에이터 | challenge-creator (`challenge`) | |
| 카드 정렬 | card-sort (`cardsort`) | |
| 화면 | screen, `(master)` | 화면 전체 sink (`title`, `subtitle` 등) |

## 파일 설명

| 파일 | 내용 | 등급 |
|---|---|---|
| `README.md` | 소개와 입력 방법 안내 | — |
| `SKILL.md` | 지침 본체 (입력별 처리, 답변 형식, 출처 태그, 등급 규칙) | — |
| `knowledge/grammar-defs.md` | 정의 층: 판정 확정 86건(질문 17 + 추가 1 + 2026-10-22 사용자 검토 68)의 코드 요지·확정 문장·출처·실행검증 | 판정 |
| `knowledge/examples-A.md` | 예제 층: graph, sketch, note, image (63건) | 3일치 사례 + 판정 항목의 보충 (실행 검증 전) |
| `knowledge/examples-B.md` | 예제 층: free-response, math-response, multiple-choice, ordered-list (69건) | 〃 |
| `knowledge/examples-CD.md` | 예제 층: action-button, table, polypad 등 나머지 컴포넌트, 고급 주제(adv), 코드(code), 개념(concept) (94건) | 〃 |
| `knowledge/grammar-index.md` | 문법 항목 227개의 ID·화면 제목·등급 찾아보기 표 (선택. 예제 파일 제목에 같은 정보가 있다) | — |
| `knowledge/site-core.md` | Getting Started 핵심 설명 (영어 원문 + 한국어) | 영어 1등급, 한국어 비공식 |
| `knowledge/official-index.md` | 공식 Index의 함수·타입·Logic | 1등급 영어 원문 |
| `knowledge/official-docs.md` | 컴포넌트별 sink·source 목록, 고급 주제 | 1등급 영어 원문 |
| `reference/hypotheses.md` | 가설 (단정 금지): A-sketch-26 | 가설 |
| `reference/conflicts.md` | 알려진 충돌: readOnly 대시보드 표시(단정 금지), differenceFunction 부호(사용자 판정으로 해소), timeSinceSubmit 단위 | — |
| `reference/unverified.md` | 확인되지 않은 함수(total, mod 등), `#` 주석 규칙, 표 빈 칸 비교, 패턴 도구 초안(확정 아님) | 확인 지점 |
| `VERSION.md` | 버전, 갱신 일자, 변경 내용, 갱신 방법 | — |

## 문법 항목 읽는 법 (grammar-defs.md, examples-*.md)
- `### <ID> — <화면 제목> — <등급>`: 등급은 "판정 확정"(grammar-defs.md), "3일치" 또는 "판정 항목의 보충 (3일치급)"(examples-*.md). 답에는 각각 *판정*, *추가검증필요* 태그로 쓴다.
- 예제 파일 항목 끝의 `검토` 줄은 사용자 검토용 칸이다. 답에 쓰지 않는다. 3일치 항목은 적용 예제로만 인용한다. 가설은 *예상* 태그로 쓴다. 내부 등급 이름(3일치, 가설)은 답에 쓰지 않는다.
- `확정 문장`: 사실로 써도 되는 부분.
- `표현판단`: LLM 답이 갈려서 확정 문장에서 **뺀** 세부. 사실로 말하지 않는다.
- `비어 있음`: 이 자료만으로는 확인되지 않는 부분. 공식 문서에 값이 있으면 공식 문서가 우선한다 (예: timeSinceSubmit 단위).
- `실행검증: 필요`: 실행 검증 필요 3건 (10건은 2026-10-22 사용자 확인으로 해제).
- `※ 단정 금지`가 붙은 줄은 사실로 말하지 않는다 (`reference/conflicts.md` 참조).
- 항목 안에 "LLM-N 보충"이 있어도 답에는 LLM 이름을 쓰지 않는다.

## 자료에 없는 것
이 패키지는 CL의 모든 함수·타입·컴포넌트를 덮지 않는다. 없는 내용은 "이 자료에서는 찾지 못했습니다"라고 하고 공식 문서(classroom.amplify.com/computation-layer/documentation) 확인을 권한다.
비공식 문서는 근거로 쓰지 않는다.
