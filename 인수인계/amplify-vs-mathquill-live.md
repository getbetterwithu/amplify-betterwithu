# Amplify 실측: MathQuill/LaTeX 명령 렌더 결과

측정: 2026-10-23, classroom.amplify.com 페이지에서 `Desmos.GraphingCalculator` API로 표현식을 하나씩 넣고 수식 칸 DOM(mathspeak·가시 텍스트)을 읽음.

## 관계 (한 줄)

Amplify(Desmos)는 **MathQuill 엔진으로 수식을 그리고**, 저장 형식은 **LaTeX 부분집합**입니다. 표준 LaTeX 전체가 되는 것이 아닙니다. MathQuill/Desmos에 등록된 명령만 그림이 나옵니다.

## Amplify에서 안 그려지는 것 (빈 칸) — 19개

| id | 입력 | 비고 |
|---|---|---|
| cbrt | `\cbrt{8}` | 로컬 MQ: empty |
| therefore | `\therefore` | 로컬 MQ: not-rendered |
| because | `\because` | 로컬 MQ: not-rendered |
| equiv | `\equiv` | 로컬 MQ: not-rendered |
| backsim | `\backsim` | 로컬 MQ: not-rendered |
| Rightarrow | `\Rightarrow` | 로컬 MQ: not-rendered |
| Leftrightarrow | `\Leftrightarrow` | 로컬 MQ: not-rendered |
| ldots | `\ldots` | 로컬 MQ: not-rendered |
| cdots | `\cdots` | 로컬 MQ: not-rendered |
| propto | `\propto` | 로컬 MQ: not-rendered |
| bot | `\bot` | 로컬 MQ: not-rendered |
| text | `\text{AB}` | 로컬 MQ: not-rendered |
| underbrace | `\underbrace{a+b}` | 로컬 MQ: not-rendered |
| overbrace | `\overbrace{a+b}` | 로컬 MQ: not-rendered |
| quad | `a\quad b` | 로컬 MQ: not-rendered |
| mathbb | `\mathbb{R}` | 로컬 MQ: not-rendered |
| implies | `\implies` | 로컬 MQ: not-rendered |
| leftarrow | `\leftarrow` | 로컬 MQ: not-rendered |
| degree | `40^\circ` | 로컬 MQ: ok |

## Amplify에서 그려지는 것 — 53개

| id | 입력 | 화면/낭독 |
|---|---|---|
| frac | `\frac{1}{2}` | 1 2 ​ |
| dfrac | `\dfrac{1}{2}` | 1 2 ​ |
| cfrac | `\cfrac{1}{2}` | 1 2 ​ |
| sqrt | `\sqrt{2}` | 2 |
| sqrt3 | `\sqrt[3]{8}` | 3 8 |
| nthroot | `\nthroot{3}{8}` | 3 8 |
| lim | `\lim` | lim |
| limsub | `\lim_{x\to 0}` | lim x→0 ​ |
| sin | `\sin(x)` | sin(x) |
| sum | `\sum_{k=1}^{n}k` | n ∑ k=1 k |
| int | `\int_0^1 x dx` | ∫ 1 0 ​xdx |
| binom | `\binom{n}{k}` | n k |
| sim | `\sim` | ~ |
| parallel | `\parallel` | ∥ |
| cong | `\cong` | ≅ |
| nsim | `\nsim` | ≁ |
| overline | `\overline{AB}` | AB |
| overline_rm | `\overline{\mathrm{AB}}` | AB |
| overarc | `\overarc{\mathrm{AB}}` | AB |
| overleftrightarrow | `\overleftrightarrow{PQ}` | ➤ PQ ➤ |
| triangle | `\triangle` | △ |
| angle | `\angle` | ∠ |
| degree_cmd | `40\degree` | 40° |
| perp | `\perp` | ⟂ |
| parallelogram | `\parallelogram` | ▱ |
| bigcirc | `\bigcirc` | ◯ |
| mathrm | `\mathrm{ABC}` | ABC |
| mathbf | `\mathbf{A}` | A |
| textcolor | `\textcolor{red}{A}` | A |
| neq | `1\neq 2` | 1≠2 |
| leq | `1\leq 2` | 1≤2 |
| geq | `2\geq 1` | 2≥1 |
| times | `2\times 3` | 2×3 |
| div | `6\div 2` | 6÷2 |
| cdot | `2\cdot 3` | 2·3 |
| infty | `\infty` | ∞ |
| to | `x\to 0` | x→0 |
| pm | `\pm 1` | ±1 |
| vec | `\vec{a}` | → a |
| hat | `\hat{a}` | ^ a |
| square | `\square` | □ |
| measuredangle | `\measuredangle` | ∡ |
| forall | `\forall` | ∀ |
| prod | `\prod_{i=1}^{n}i` | n ∏ i=1 i |
| space | `a\ b` | a b |
| leftright | `\left(\frac{1}{2}\right)` | 1 2 ​ |
| Usim | `a∽b` | a∽b |
| Uequiv | `a≡b` | a≡b |
| Upar | `a⫽b` | a⫽b |
| Uthere | `∴` | ∴ |
| Ubecause | `∵` | ∵ |
| Uimpl | `a⇒b` | a⇒b |
| percent | `\percent` | % of |

## 모양 주의 (렌더는 되지만 교과서와 다름)

| 명령 | Amplify 결과 | 교과서에서 쓸 것 |
|---|---|---|
| `\sim` | 물결 `~` | 유니코드 `∽` |
| `\parallel` | 곧은 평행 `∥` | 유니코드 `⫽` |
| `\cong` | 합동 기호 `≅` (≅) | 합동은 보통 유니코드 `≡` |

## 로컬 도구 MathQuill vs Amplify 불일치

| id | 로컬 도구 MQ | Amplify 계산기 |
|---|---|---|
| degree | ok | empty |

참고: 로컬 도구 `lib/mathquill.js` v0.10.1 과 Amplify 내장 MathQuill은 **같은 계열**이지만 빌드가 완전히 같다고 단정하지는 않음. 위 표의 Amplify 열은 이번 실측.

## 메모 컴포넌트 vs 그래프 계산기

이번 일괄 실측의 주 경로는 Amplify 페이지에 실린 **Desmos Graphing Calculator API**(수식 목록)입니다. 메모 백틱 수식도 같은 MathQuill 계열을 쓰지만, 입력 UX(백틱→수식칸)가 다릅니다. 메모에서 확인한 샘플: 타이핑으로 연 수식칸에 `\therefore`·`\lim`을 넣으면 명령으로 안 바뀌고 글자/백슬래시로 남는 모습을 확인함.
