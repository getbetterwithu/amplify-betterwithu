# MathQuill · Amplify 수식 문법 실측 보고서

- **작성일:** 2026-10-23 (Asia/Seoul)
- **목적:** MathQuill/일반 LaTeX에 있는 명령 중 Amplify에서 실제로 그려지지 않는 것과 그려지는 것을 구분하고, Amplify가 LaTeX처럼 보이는 이유와 한계를 확정한다.
- **이 파일 위치:** 아래 "저장 경로" 절

---

## 1. 한 줄 결론

1. Amplify(Desmos) 수식 표시·입력의 엔진은 **MathQuill**이다.
2. 저장 형식은 **LaTeX 꼴 문자열**이지만 **표준 LaTeX 전체가 아니다.** 등록된 명령 부분집합만 그림이 나온다.
3. 정확한 표현: Amplify는 LaTeX 전체가 아니라 **Desmos용 MathQuill LaTeX 부분집합**을 쓴다.
4. 변환·수업 도구 규칙은 금지 목록만이 아니라 **허용 목록 + 유니코드 치환표**가 원본이어야 한다.

---

## 2. 측정 범위와 방법

### 2.1 Amplify 실측 (주 근거)

| 항목 | 내용 |
|---|---|
| 장소 | `classroom.amplify.com` 활동 편집기 페이지 (로그인 세션) |
| 방법 | 페이지의 `Desmos.GraphingCalculator` API로 표현식을 **한 개씩** 넣고 수식 칸 DOM(가시 텍스트·mathspeak) 판독 |
| 판정 | 가시 텍스트 없음 + speak가 `Expression 1:` 수준 → **empty**. 그 외 → **renders** |
| 원데이터 | `amplify-one-by-one-render.json` |
| 시험 개수 | 72항 |

### 2.2 로컬 도구 MathQuill (보조)

| 항목 | 내용 |
|---|---|
| 파일 | `amplify-betterwithu/lib/mathquill.js` (**MathQuill v0.10.1**) |
| 방법 | jQuery + MathQuill, `StaticMath` → `.latex(입력)` (math.html과 동일 스택) |
| 등록부 | 이름 명령 약 161개 등 |
| 문서 | `mathquill-registry-and-local-render.md` |

### 2.3 메모 컴포넌트 (샘플만)

- 활동 「CL 코드 예시 수합」에 임시 화면 `MathQuill vs Amplify latex probe (temp)` 생성 후 메모 입력 시도.
- 백틱으로 수식 칸을 연 뒤 키 입력 시 MathQuill 편집 칸이 열림. 이 경로에서 `\therefore`, `\lim`이 명령으로 안 바뀌고 글자/백슬래시로 남는 모습을 **샘플 확인**.
- CL `content:` 대량 주입은 저장·평가가 불안정(`undefined` 등)하여 주 표 근거로 쓰지 않음.
- **메모 전항 일괄 DOM 실측은 주 표에 포함하지 않음.** 주 표 = 계산기 수식 칸.

### 2.4 확인하지 못한 것

- Amplify 내장 MathQuill 정확한 버전 문자열과 로컬 v0.10.1의 바이트 단위 동일 여부
- 수식 답변 컴포넌트·CL 이중 백슬래시 경로의 전항 표
- 학생 미리보기 전용 렌더 차이

---

## 3. 개념 정리

```
사용자 입력 (키 / 백틱 / CL / 계산기)
        │
        ▼
MathQuill — 등록 명령만 조판. 미등록 → 빈 칸 또는 글자
        │
        ▼
LaTeX 꼴 문자열 (내부 저장, 부분집합)
        │
        ▼
Desmos 계산 엔진 (계산기 경로) — 조판 성공 ≠ 항상 유효한 식
```

- **MathQuill:** 웹 수식 조판·편집 라이브러리
- **Amplify Classroom:** Desmos 기반, 수식 UI가 MathQuill
- **일반 LaTeX/amsmath:** 논문용. Amplify와 지원 집합이 다름

---

## 4. Amplify 실측 결과 요약

| 구분 | 개수 |
|---|---|
| 그려짐 (renders) | **53** |
| 안 그려짐 (empty) | **19** |
| 합계 | **72** |

### 4.1 Amplify에서 안 그려지는 명령 (empty)

| id | 입력 | mathspeak | 로컬 MQ(참고) |
|---|---|---|---|
| cbrt | `\cbrt{8}` | Expression 1: | empty |
| therefore | `\therefore` | Expression 1: | not-rendered |
| because | `\because` | Expression 1: | not-rendered |
| equiv | `\equiv` | Expression 1: | not-rendered |
| backsim | `\backsim` | Expression 1: | not-rendered |
| Rightarrow | `\Rightarrow` | Expression 1: | not-rendered |
| Leftrightarrow | `\Leftrightarrow` | Expression 1: | not-rendered |
| ldots | `\ldots` | Expression 1: | not-rendered |
| cdots | `\cdots` | Expression 1: | not-rendered |
| propto | `\propto` | Expression 1: | not-rendered |
| bot | `\bot` | Expression 1: | not-rendered |
| text | `\text{AB}` | Expression 1: | not-rendered |
| underbrace | `\underbrace{a+b}` | Expression 1: | not-rendered |
| overbrace | `\overbrace{a+b}` | Expression 1: | not-rendered |
| quad | `a\quad b` | Expression 1: | not-rendered |
| mathbb | `\mathbb{R}` | Expression 1: | not-rendered |
| implies | `\implies` | Expression 1: | not-rendered |
| leftarrow | `\leftarrow` | Expression 1: | not-rendered |
| degree | `40^\circ` | Expression 1: | ok |

**수업·변환 시 대응**

| 안 되는 것 | 대신 쓸 것 |
|---|---|
| `\therefore` | 유니코드 `∴` |
| `\because` | 유니코드 `∵` |
| `\equiv` (합동 의도) | 유니코드 `≡` |
| `\Rightarrow` `\implies` | 유니코드 `⇒` |
| `\Leftrightarrow` | 유니코드 `⇔` |
| `\text{...}` | 한글·설명은 백틱 **밖** |
| `\quad` | `\ ` (백슬래시+공백) |
| `\ldots` `\cdots` | 유니코드 `…` 또는 백틱 밖 |
| `\cbrt{8}` | `\sqrt[3]{8}` |
| `40^\circ` | `40\degree` |
| `\underbrace` `\overbrace` `\mathbb` `\propto` `\bot` | 쓰지 않음 |

### 4.2 Amplify에서 그려지는 명령 (renders)

| id | 입력 | 가시 | mathspeak(요약) |
|---|---|---|---|
| frac | `\frac{1}{2}` | 1 2 ​ | Expression 1: 1 half |
| dfrac | `\dfrac{1}{2}` | 1 2 ​ | Expression 1: 1 half |
| cfrac | `\cfrac{1}{2}` | 1 2 ​ | Expression 1: 1 half |
| sqrt | `\sqrt{2}` | 2 | Expression 1: StartRoot, 2 , EndRoot |
| sqrt3 | `\sqrt[3]{8}` | 3 8 | Expression 1: Start Cube Root, 8, End Cube Root |
| nthroot | `\nthroot{3}{8}` | 3 8 | Expression 1: Start Cube Root, 8, End Cube Root |
| lim | `\lim` | lim | Expression 1: "l" "i" "m" |
| limsub | `\lim_{x\to 0}` | lim x→0 ​ | Expression 1: "l" "i" "m" Subscript, "x" to 0 , Baseline |
| sin | `\sin(x)` | sin(x) | Expression 1: sine ( "x" ) |
| sum | `\sum_{k=1}^{n}k` | n ∑ k=1 k | Expression 1: Start sum from "k" equals 1 to "n" , end sum, "k" |
| int | `\int_0^1 x dx` | ∫ 1 0 ​xdx | Expression 1: Start integral from 0 to 1, end integral, "x" "d" "x" |
| binom | `\binom{n}{k}` | n k | Expression 1: StartBinomial, "n" Choose "k" , EndBinomial |
| sim | `\sim` | ~ | Expression 1: tilde |
| parallel | `\parallel` | ∥ | Expression 1: parallel |
| cong | `\cong` | ≅ | Expression 1: congruent |
| nsim | `\nsim` | ≁ | Expression 1: not similar |
| overline | `\overline{AB}` | AB | Expression 1: StartOverline, "A" "B" EndOverline |
| overline_rm | `\overline{\mathrm{AB}}` | AB | Expression 1: StartOverline, AB EndOverline |
| overarc | `\overarc{\mathrm{AB}}` | AB | Expression 1: StartOver Arc, AB EndOver Arc |
| overleftrightarrow | `\overleftrightarrow{PQ}` | ➤ PQ ➤ | Expression 1: StartOver Left and Right Arrow, "P" "Q" EndOver Left and Right Arrow |
| triangle | `\triangle` | △ | Expression 1: triangle |
| angle | `\angle` | ∠ | Expression 1: angle |
| degree_cmd | `40\degree` | 40° | Expression 1: 40 degrees |
| perp | `\perp` | ⟂ | Expression 1: perpendicular |
| parallelogram | `\parallelogram` | ▱ | Expression 1: parallelogram |
| bigcirc | `\bigcirc` | ◯ | Expression 1: circle |
| mathrm | `\mathrm{ABC}` | ABC | Expression 1: ABC |
| mathbf | `\mathbf{A}` | A | Expression 1: StartBold Font, "A" EndBold Font |
| textcolor | `\textcolor{red}{A}` | A | Expression 1: Start red, "A" End red |
| neq | `1\neq 2` | 1≠2 | Expression 1: 1 not equal 2 |
| leq | `1\leq 2` | 1≤2 | Expression 1: 1 less than or equal to 2 |
| geq | `2\geq 1` | 2≥1 | Expression 1: 2 greater than or equal to 1 |
| times | `2\times 3` | 2×3 | Expression 1: 2 times 3 |
| div | `6\div 2` | 6÷2 | Expression 1: 6 divided by 2 |
| cdot | `2\cdot 3` | 2·3 | Expression 1: 2 times 3 |
| infty | `\infty` | ∞ | Expression 1: infinity |
| to | `x\to 0` | x→0 | Expression 1: "x" to 0 |
| pm | `\pm 1` | ±1 | Expression 1: plus-or-minus 1 |
| vec | `\vec{a}` | → a | Expression 1: Start\vec "a" undefined |
| hat | `\hat{a}` | ^ a | Expression 1: Start\hat "a" undefined |
| square | `\square` | □ | Expression 1: square |
| measuredangle | `\measuredangle` | ∡ | Expression 1: measured angle |
| forall | `\forall` | ∀ | Expression 1: forall |
| prod | `\prod_{i=1}^{n}i` | n ∏ i=1 i | Expression 1: Start product from "i" equals 1 to "n" , end product, "i" |
| space | `a\ b` | a b | Expression 1: "a" "b" |
| leftright | `\left(\frac{1}{2}\right)` | 1 2 ​ | Expression 1: left parenthesis, 1 half , right parenthesis |
| Usim | `a∽b` | a∽b | Expression 1: "a" ∽ "b" |
| Uequiv | `a≡b` | a≡b | Expression 1: "a" ≡ "b" |
| Upar | `a⫽b` | a⫽b | Expression 1: "a" ⫽ "b" |
| Uthere | `∴` | ∴ | Expression 1: ∴ |
| Ubecause | `∵` | ∵ | Expression 1: ∵ |
| Uimpl | `a⇒b` | a⇒b | Expression 1: "a" ⇒ "b" |
| percent | `\percent` | % of | Expression 1: percent of |

### 4.3 그려지지만 교과서 모양과 다른 것

| 명령 | Amplify 결과 | 권장 |
|---|---|---|
| `\sim` | 물결 `~` | 닮음 `∽` |
| `\parallel` | 곧은 평행 `∥` | `⫽` |
| `\cong` | `≅` | 합동은 보통 `≡` |

### 4.4 별칭·주의

| 항목 | 실측 |
|---|---|
| `\dfrac` `\cfrac` | 분수로 그려짐, `\frac`과 실무상 동일 → `\frac`만 |
| `\cbrt` | empty. `\sqrt[3]{}` 사용 |
| `\nthroot` / `\sqrt[3]` | 세제곱근으로 그려짐 |
| `\lim` | **그려짐** (글자 lim). 프롬프트 “렌더 안 됨”과 불일치 |
| `\percent` | `% of` |
| 유니코드 `∽≡⫽∴∵⇒` | 그대로 표시 |

---

## 5. convert.html 프롬프트 대조

프롬프트 금지(요약): therefore because Rightarrow Leftrightarrow equiv ldots cdots propto bot backsim text underbrace quad lim cbrt. dfrac/cfrac→frac.

| 항목 | Amplify 실측 | 판정 |
|---|---|---|
| `\\therefore` 기대 empty | empty | 일치 |
| `\\because` 기대 empty | empty | 일치 |
| `\\equiv` 기대 empty | empty | 일치 |
| `\\Rightarrow` 기대 empty | empty | 일치 |
| `\\Leftrightarrow` 기대 empty | empty | 일치 |
| `\\ldots` 기대 empty | empty | 일치 |
| `\\cdots` 기대 empty | empty | 일치 |
| `\\propto` 기대 empty | empty | 일치 |
| `\\bot` 기대 empty | empty | 일치 |
| `\\backsim` 기대 empty | empty | 일치 |
| `\\text` 기대 empty | empty | 일치 |
| `\\underbrace` 기대 empty | empty | 일치 |
| `\\quad` 기대 empty | empty | 일치 |
| `\\cbrt` 기대 empty | empty | 일치 |
| `\\lim` 기대 renders | renders | **불일치** (프롬프트는 empty, 실측 renders) |
| `\\dfrac` 기대 renders | renders | 일치(그려짐, frac 권장) |
| `\\sim` 기대 renders | renders | 일치(렌더되나 모양 이슈) |
| `\\parallel` 기대 renders | renders | 일치(렌더되나 모양 이슈) |

**수정 권고:** (1) `\lim`을 “렌더 안 됨”에서 삭제하거나 이유 변경 (2) `\cbrt`는 `\sqrt[3]{}`로 명시 (3) 이 보고서 표를 규칙 원본으로.

---

## 6. 로컬 MathQuill 등록부 요약

- 버전: **MathQuill v0.10.1**
- 이름 명령 수: **161**
- AutoOperatorNames: arg, deg, det, dim, exp, gcd, hom, inf, ker, lg, lim, ln, log, max, min, sup, limsup, liminf, injlim, projlim, Pr
- 삼각 등: sin, cos, tan, arcsin, arccos, arctan, sinh, cosh, tanh, sec, csc, cot, coth
- 상세: `mathquill-registry-and-local-render.md`

로컬 vs Amplify: 방향은 대체로 같음. 도 기호는 `\degree`를 쓸 것 (`^\circ`는 Amplify empty).

---

## 7. 실무 규칙 (변환·수업 도구)

1. 수식은 백틱으로 감싼다.
2. 점 이름 A,B,C는 `\mathrm{}`.
3. 분수·근·기하는 4.2 허용 표를 따른다.
4. 닮음·합동·평행·따라서·왜냐하면·함의는 **유니코드** + 앞뒤 `\ `.
5. 4.1 empty 목록 명령은 출력하지 않는다.
6. 한글 설명은 백틱 밖.

---

## 8. 저장 경로와 같은 폴더 파일

### 세션 artifacts (Aside 산출물)

`/Users/cholhohuh/.aside/u/1/sessions/2026-10-23_9jR45I0HmhYR9GA3/artifacts/`

### 프로젝트 인수인계 복사본

`/Users/cholhohuh/Workspace/00_projects-and-labs/amplify-betterwithu/인수인계/`

| 파일 | 내용 |
|---|---|
| **MathQuill-Amplify-수식문법-실측보고서.md** | 이 종합 보고서 |
| amplify-vs-mathquill-live.md | Amplify 실측 짧은 판 |
| amplify-one-by-one-render.json | 1항씩 실측 원데이터 |
| amplify-desmos-calc-render.json | 일괄 삽입 시도 |
| mathquill-registry-and-local-render.md | 로컬 MQ 등록부·72항 |
| mathquill-local-verdict.csv | 로컬 판정 CSV |
| amplify-render-test-script.md | 메모/수식답변/CL 시험 문안 |

---

## 9. 부록: Amplify 전항 원표

| id | verdict | vis | speak |
|---|---|---|---|
| frac | renders | 1 2 ​ | Expression 1: 1 half |
| dfrac | renders | 1 2 ​ | Expression 1: 1 half |
| cfrac | renders | 1 2 ​ | Expression 1: 1 half |
| sqrt | renders | 2 | Expression 1: StartRoot, 2 , EndRoot |
| sqrt3 | renders | 3 8 | Expression 1: Start Cube Root, 8, End Cube Root |
| cbrt | empty |  | Expression 1: |
| nthroot | renders | 3 8 | Expression 1: Start Cube Root, 8, End Cube Root |
| lim | renders | lim | Expression 1: \"l\" \"i\" \"m\" |
| limsub | renders | lim x→0 ​ | Expression 1: \"l\" \"i\" \"m\" Subscript, \"x\" to 0 , Baseline |
| sin | renders | sin(x) | Expression 1: sine ( \"x\" ) |
| sum | renders | n ∑ k=1 k | Expression 1: Start sum from \"k\" equals 1 to \"n\" , end sum, \"k\" |
| int | renders | ∫ 1 0 ​xdx | Expression 1: Start integral from 0 to 1, end integral, \"x\" \"d\" \"x\" |
| binom | renders | n k | Expression 1: StartBinomial, \"n\" Choose \"k\" , EndBinomial |
| therefore | empty |  | Expression 1: |
| because | empty |  | Expression 1: |
| equiv | empty |  | Expression 1: |
| sim | renders | ~ | Expression 1: tilde |
| backsim | empty |  | Expression 1: |
| parallel | renders | ∥ | Expression 1: parallel |
| Rightarrow | empty |  | Expression 1: |
| Leftrightarrow | empty |  | Expression 1: |
| ldots | empty |  | Expression 1: |
| cdots | empty |  | Expression 1: |
| propto | empty |  | Expression 1: |
| bot | empty |  | Expression 1: |
| text | empty |  | Expression 1: |
| underbrace | empty |  | Expression 1: |
| overbrace | empty |  | Expression 1: |
| quad | empty |  | Expression 1: |
| mathbb | empty |  | Expression 1: |
| implies | empty |  | Expression 1: |
| leftarrow | empty |  | Expression 1: |
| cong | renders | ≅ | Expression 1: congruent |
| nsim | renders | ≁ | Expression 1: not similar |
| overline | renders | AB | Expression 1: StartOverline, \"A\" \"B\" EndOverline |
| overline_rm | renders | AB | Expression 1: StartOverline, AB EndOverline |
| overarc | renders | AB | Expression 1: StartOver Arc, AB EndOver Arc |
| overleftrightarrow | renders | ➤ PQ ➤ | Expression 1: StartOver Left and Right Arrow, \"P\" \"Q\" EndOver Left and Right Arrow |
| triangle | renders | △ | Expression 1: triangle |
| angle | renders | ∠ | Expression 1: angle |
| degree | empty |  | Expression 1: |
| degree_cmd | renders | 40° | Expression 1: 40 degrees |
| perp | renders | ⟂ | Expression 1: perpendicular |
| parallelogram | renders | ▱ | Expression 1: parallelogram |
| bigcirc | renders | ◯ | Expression 1: circle |
| mathrm | renders | ABC | Expression 1: ABC |
| mathbf | renders | A | Expression 1: StartBold Font, \"A\" EndBold Font |
| textcolor | renders | A | Expression 1: Start red, \"A\" End red |
| neq | renders | 1≠2 | Expression 1: 1 not equal 2 |
| leq | renders | 1≤2 | Expression 1: 1 less than or equal to 2 |
| geq | renders | 2≥1 | Expression 1: 2 greater than or equal to 1 |
| times | renders | 2×3 | Expression 1: 2 times 3 |
| div | renders | 6÷2 | Expression 1: 6 divided by 2 |
| cdot | renders | 2·3 | Expression 1: 2 times 3 |
| infty | renders | ∞ | Expression 1: infinity |
| to | renders | x→0 | Expression 1: \"x\" to 0 |
| pm | renders | ±1 | Expression 1: plus-or-minus 1 |
| vec | renders | → a | Expression 1: Start\\vec \"a\" undefined |
| hat | renders | ^ a | Expression 1: Start\\hat \"a\" undefined |
| square | renders | □ | Expression 1: square |
| measuredangle | renders | ∡ | Expression 1: measured angle |
| forall | renders | ∀ | Expression 1: forall |
| prod | renders | n ∏ i=1 i | Expression 1: Start product from \"i\" equals 1 to \"n\" , end product, \"i\" |
| space | renders | a b | Expression 1: \"a\" \"b\" |
| leftright | renders | 1 2 ​ | Expression 1: left parenthesis, 1 half , right parenthesis |
| Usim | renders | a∽b | Expression 1: \"a\" ∽ \"b\" |
| Uequiv | renders | a≡b | Expression 1: \"a\" ≡ \"b\" |
| Upar | renders | a⫽b | Expression 1: \"a\" ⫽ \"b\" |
| Uthere | renders | ∴ | Expression 1: ∴ |
| Ubecause | renders | ∵ | Expression 1: ∵ |
| Uimpl | renders | a⇒b | Expression 1: \"a\" ⇒ \"b\" |
| percent | renders | % of | Expression 1: percent of |

---

*끝. 확인된 사실과 미확인을 구분했다. 주 근거는 Amplify 페이지 Desmos 계산기 수식 칸 1항씩 실측이다.*
