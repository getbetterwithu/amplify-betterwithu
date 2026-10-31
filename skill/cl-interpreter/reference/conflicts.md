# 알려진 충돌 (단정 금지)

> 이 파일의 항목은 자료끼리 어긋나 있다. 실행 검증 전까지 **한쪽으로 단정하지 않는다.** 해석에서는 어느 쪽 설명인지 밝히고, 사용자에게 Amplify에서 확인할 지점으로 알려 준다. 단, 2번(differenceFunction 부호)은 사용자 판정(2026-10-22)으로 해소되어 판정 쪽으로 쓴다.

## 1. readOnly일 때 교사 대시보드에 보이는 모양

| 자료 | 내용 |
|---|---|
| 공식 문서(1등급, 영어) | `readOnly`는 컴포넌트를 화면의 정오 판정에서 무시하게 한다. 화면의 **모든** 컴포넌트가 readOnly `true`이면 대시보드 요약에서 그 화면에 **대시(-)** 가 표시된다. |
| 사용자 판정 | `readOnly: true`는 학생의 입력·선택·제출·조작을 막지 않는다. 대시보드 정오답 채점에서만 제외된다. (판정 확정 — 이 부분은 단정해도 된다.) |
| 지식 파일의 보충 설명 (LLM-1 보충) | 대시보드에 오답 대신 **점(dot, 회색 점)** 이나 "완료 여부"가 표시된다. 해당: B-math-response-24, B-multiple-choice-18, B-ordered-list-10 |

- 충돌 지점: 대시보드에 **어떤 모양**이 표시되는지(대시 / 점 / 그 밖). 판정 확정에는 표시 모양이 없다.
- 해석에서는: "정오답 채점에서 제외된다"까지만 단정한다. 모양은 "공식 문서는 모든 컴포넌트가 readOnly일 때 대시라고 설명하며, 점이라는 설명은 확인되지 않았습니다"로 쓰고 확인 지점으로 표시한다.

## 2. differenceFunction의 부호 (공식 문서 안의 충돌 → 사용자 판정으로 해소)

`parseEquation(...).differenceFunction("x","y")` (type:equation)

| 위치 | 내용 |
|---|---|
| 설명 | "simpleFunction representing for **(lhs) - (rhs)** of an equation. Useful for setting equal to zero to test or plot" |
| 예시 주석 | "Difference function takes the lhs of the equation and **subtracts it from the rhs**." 예: `3x+5 = y-2 -> (y-2)-(3x+5)` (즉 **rhs − lhs**) |

- 설명은 lhs−rhs, 예시는 rhs−lhs로 서로 반대다.
- **사용자 판정(2026-10-22, `knowledge/grammar-defs.md`의 C-adv-13)**: `differenceFunction`은 좌변에서 우변을 뺀 함수(**lhs − rhs**)다. `parseEquation`이 먼저 등호를 기준으로 좌변(lhs)과 우변(rhs)을 나눈다. 공식 문서의 **설명** 쪽과 같고, 예시 주석이 반대로 적혀 있는 것이다.
- 해석에서는: 부호를 lhs − rhs로 쓰고 출처 태그는 *판정*으로 단다. 공식 문서의 예시 주석이 반대로 적혀 있다는 점은 필요할 때 한 번만 밝힌다(확인 지점으로 남기지 않는다).
- 참고: `parseInequality(...).differenceFunction`은 설명과 예시가 모두 "(greater side) − (lesser side)"라서 이 충돌이 없다.

## 3. timeSinceSubmit의 시간 단위 (지식 파일 안의 불일치)

- 공식 문서는 `timeSinceSubmit`과 `timeSincePress` 모두 "Gets the **seconds** (plus milliseconds) since ..."라고 쓴다. 단위는 **초**다.
- examples-B.md의 여러 항목(B-math-response-03, 22 등)은 "timeSinceSubmit의 시간 단위는 비어 있음"이라고 되어 있다. 이는 LLM 답에서 나온 것이고 공식 문서 내용과 어긋난다.
- 해석에서는: 공식 문서를 우선해 단위를 초라고 쓴다. 기본 최대 시간은 INDEX.md의 "형제 항목" 표를 따른다.

## 4. 공식 문서 안의 오기 (참고)

- 수식 답변(expression input)의 `timeSinceSubmit` 설명은 "Increase that time by passing a parameter, as in **timeSincePress(20)**"라고 끝난다. `timeSinceSubmit` 항목인데 예시가 `timeSincePress(20)`로 적혀 있다. 원문의 오기로 보이며, 이 자료만으로는 판단할 수 없다.
- 해석에서는: `timeSinceSubmit(20)`처럼 인자를 쓰는 코드는 "인자는 최대 시간(`maxTime`)이다"까지만 말하고, 20이 초 단위의 최대 시간이라고 단정하지 않는다.
