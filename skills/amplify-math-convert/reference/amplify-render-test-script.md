# Amplify 수식 렌더 시험 문안

목적: 로컬 MathQuill 결과를 Amplify Classroom에서 위치별로 재확인

## 준비
1. 새 Activity를 만듭니다.
2. 스크린을 세 장 둡니다: (A) 메모 note (B) 수식 답변 math input (C) CL로 note content에 문자열 주입
3. 각 항목을 붙여넣고, 렌더됨/안 됨/모양 다름을 캡처합니다.

## A. 메모 컴포넌트 `content`에 그대로 붙여넣기
아래 블록 전체를 메모에 붙입니다. 각 줄은 백틱 수식입니다.

```
A01 선분: `\overline{\mathrm{AB}}`
A02 호: `\overarc{\mathrm{AB}}`
A03 직선: `\overleftrightarrow{\mathrm{PQ}}`
A04 삼각형: `\triangle\mathrm{ABC}`
A05 각·도: `\angle\mathrm{A}=40\degree`
A06 수직: `\overline{\mathrm{AB}}\ \perp\ \overline{\mathrm{CD}}`
A07 평행사변형: `\parallelogram`
A08 분수: `\frac{1}{2}`
A09 dfrac: `\dfrac{1}{2}`
A10 제곱근: `\sqrt{2}`
A11 세제곱근 sqrt: `\sqrt[3]{8}`
A12 cbrt: `\cbrt{8}`
A13 lim: `\lim`
A14 lim_sub: `\lim_{x\to 0}`
A15 sin: `\sin x`
A16 sum: `\sum_{k=1}^{n}k`
A17 therefore cmd: `\therefore`
A18 because cmd: `\because`
A19 equiv cmd: `\equiv`
A20 sim cmd: `\sim`
A21 parallel cmd: `\parallel`
A22 Rightarrow: `\Rightarrow`
A23 text: `\text{AB}`
A24 underbrace: `\underbrace{a+b}`
A25 quad: `a\quad b`
A26 ldots: `\ldots`
A27 mathbb: `\mathbb{R}`
A28 닮음 유니코드: `\triangle\mathrm{ABC}\ ∽\ \triangle\mathrm{DEF}`
A29 합동 유니코드: `\triangle\mathrm{ABC}\ ≡\ \triangle\mathrm{DEF}`
A30 평행 유니코드: `\overline{\mathrm{AB}}\ ⫽\ \overline{\mathrm{CD}}`
A31 따라서 유니코드: `∴\ \angle\mathrm{A}=\angle\mathrm{D}`
A32 공백 없음 대조: `\triangle\mathrm{ABC}∽\triangle\mathrm{DEF}`
A33 mathrm: `\mathrm{ABC}`
A34 textcolor: `\textcolor{red}{\overline{\mathrm{AG}}}`
A35 cong: `\cong`
A36 binom: `\binom{n}{k}`
A37 left right: `\left(\frac{1}{2}\right)`
A38 to: `\to`
A39 implies: `\implies`
A40 bot: `\bot`
```

## B. 수식 답변(math input) 칸
메모와 달리 백틱 없이, 한 칸에 하나씩 입력·붙여넣기 합니다.

1. `\frac{1}{2}`
2. `\sqrt[3]{8}`
3. `\cbrt{8}`
4. `\lim_{x\to 0}`
5. `\sim`
6. `∽`
7. `\equiv`
8. `≡`
9. `\parallel`
10. `⫽`
11. `\therefore`
12. `∴`
13. `\mathrm{ABC}`
14. `\sin x`

## C. CL 문자열 (note content)
CL 예시:

```
content: "시험: `\\frac{1}{2}` / cbrt `\\cbrt{8}` / lim `\\lim_{x\\to 0}` / sim `\\sim` / 유니코드 `∽` / therefore `\\therefore`"
```

포럼 사례대로 백슬래시가 두 번 필요할 수 있습니다. 한 번/두 번을 둘 다 시험합니다.

## 기록 표 (직접 채움)

| ID | 입력 | 메모 | 수식답변 | CL | 비고 |
|---|---|---|---|---|---|
| A01 선분 | `\overline{\mathrm{AB}}` |  |  |  |  |
| A02 호 | `\overarc{\mathrm{AB}}` |  |  |  |  |
| A03 직선 | `\overleftrightarrow{\mathrm{PQ}}` |  |  |  |  |
| A04 삼각형 | `\triangle\mathrm{ABC}` |  |  |  |  |
| A05 각·도 | `\angle\mathrm{A}=40\degree` |  |  |  |  |
| A06 수직 | `\overline{\mathrm{AB}}\ \perp\ \overline{\mathrm{CD}}` |  |  |  |  |
| A07 평행사변형 | `\parallelogram` |  |  |  |  |
| A08 분수 | `\frac{1}{2}` |  |  |  |  |
| A09 dfrac | `\dfrac{1}{2}` |  |  |  |  |
| A10 제곱근 | `\sqrt{2}` |  |  |  |  |
| A11 세제곱근 sqrt | `\sqrt[3]{8}` |  |  |  |  |
| A12 cbrt | `\cbrt{8}` |  |  |  |  |
| A13 lim | `\lim` |  |  |  |  |
| A14 lim_sub | `\lim_{x\to 0}` |  |  |  |  |
| A15 sin | `\sin x` |  |  |  |  |
| A16 sum | `\sum_{k=1}^{n}k` |  |  |  |  |
| A17 therefore cmd | `\therefore` |  |  |  |  |
| A18 because cmd | `\because` |  |  |  |  |
| A19 equiv cmd | `\equiv` |  |  |  |  |
| A20 sim cmd | `\sim` |  |  |  |  |
| A21 parallel cmd | `\parallel` |  |  |  |  |
| A22 Rightarrow | `\Rightarrow` |  |  |  |  |
| A23 text | `\text{AB}` |  |  |  |  |
| A24 underbrace | `\underbrace{a+b}` |  |  |  |  |
| A25 quad | `a\quad b` |  |  |  |  |
| A26 ldots | `\ldots` |  |  |  |  |
| A27 mathbb | `\mathbb{R}` |  |  |  |  |
| A28 닮음 유니코드 | `\triangle\mathrm{ABC}\ ∽\ \triangle\mathrm{DEF}` |  |  |  |  |
| A29 합동 유니코드 | `\triangle\mathrm{ABC}\ ≡\ \triangle\mathrm{DEF}` |  |  |  |  |
| A30 평행 유니코드 | `\overline{\mathrm{AB}}\ ⫽\ \overline{\mathrm{CD}}` |  |  |  |  |
| A31 따라서 유니코드 | `∴\ \angle\mathrm{A}=\angle\mathrm{D}` |  |  |  |  |
| A32 공백 없음 대조 | `\triangle\mathrm{ABC}∽\triangle\mathrm{DEF}` |  |  |  |  |
| A33 mathrm | `\mathrm{ABC}` |  |  |  |  |
| A34 textcolor | `\textcolor{red}{\overline{\mathrm{AG}}}` |  |  |  |  |
| A35 cong | `\cong` |  |  |  |  |
| A36 binom | `\binom{n}{k}` |  |  |  |  |
| A37 left right | `\left(\frac{1}{2}\right)` |  |  |  |  |
| A38 to | `\to` |  |  |  |  |
| A39 implies | `\implies` |  |  |  |  |
| A40 bot | `\bot` |  |  |  |  |

표기: `O` 렌더됨 · `X` 안 됨 · `Δ` 모양 다름 · `-` 해당 없음

## 로컬 결과 요약 (참고, Amplify 아님)

- 됨: 선분/호/직선/삼각/각/수직/분수/sqrt/lim/sin/sum/binom/unicode 특수기호
- 안 됨: therefore, because, equiv, Rightarrow, text, underbrace, quad, ldots, cdots, mathbb, implies, bot, **cbrt(latex 경로)**
- 모양 주의: sim(~), parallel(∥) — 교과서는 ∽, ⫽
