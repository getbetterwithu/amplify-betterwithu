# MathQuill v0.10.1 등록부 · 로컬 렌더 실측

기준 파일: `amplify-betterwithu/lib/mathquill.js` (머리글 MathQuill v0.10.1)
실측 방법: math.html과 동일 스택(jQuery + MathQuill)에서 `StaticMath` → `.latex(입력)`
날짜: 2026-10-23

> **범위 주의:** 이 표는 **사이트에 들어 있는 MathQuill** 기준입니다. Amplify Classroom 본제품과 버전이 같은지는 아직 미확인입니다. Amplify 메모/수식답변/CL 문자열 실측(3단계)이 최종 원본이 됩니다.

## 0. 한 줄 결론

- 규칙은 **금지 목록이 아니라 허용 목록**으로 관리하는 편이 맞습니다.
- convert.html 프롬프트의 금지 항목 대부분은 로컬 실측과 일치합니다.
- **어긋난 것:** `\lim` / `\lim_{x\\to0}` 는 로컬에서 **렌더됨**. 프롬프트의 "렌더되지 않음"은 이 빌드 기준으로는 틀림.
- **미묘한 것:** `\cbrt` 는 LatexCmds에 **등록**되어 있으나, `.latex("\\cbrt{8}")` 경로에서는 **빈 칸**. 타이핑 전용 별칭으로 보이며, 프롬프트의 "쓰지 말 것"은 실무적으로 맞음. 세제곱근은 `\sqrt[3]{}` 또는 `\nthroot`.
- `\dfrac`/`\cfrac` → `\frac` 별칭. 크기도 동일. `\frac`만 쓰면 됨.

## 1. convert.html 프롬프트 대조 (로컬 실측)

| 항목 | 프롬프트 주장 | 로컬 실측 | 판정 |
|---|---|---|---|
| \therefore | 렌더 안 됨 | not-rendered / latex=`` | 일치 |
| \because | 렌더 안 됨 | not-rendered / latex=`` | 일치 |
| \equiv | 렌더 안 됨 | not-rendered / latex=`` | 일치 |
| \Rightarrow | 렌더 안 됨 | not-rendered / latex=`` | 일치 |
| \Leftrightarrow | 렌더 안 됨 | not-rendered / latex=`` | 일치 |
| \ldots | 렌더 안 됨 | not-rendered / latex=`` | 일치 |
| \cdots | 렌더 안 됨 | not-rendered / latex=`` | 일치 |
| \propto | 렌더 안 됨 | not-rendered / latex=`` | 일치 |
| \bot | 렌더 안 됨 | not-rendered / latex=`` | 일치 |
| \backsim | 렌더 안 됨 | not-rendered / latex=`` | 일치 |
| \text | 렌더 안 됨 | not-rendered / latex=`` | 일치 |
| \underbrace | 렌더 안 됨 | not-rendered / latex=`` | 일치 |
| \quad | 렌더 안 됨 | not-rendered / latex=`` | 일치 |
| \lim | 렌더 안 됨 | renders / latex=`\lim` | **프롬프트와 불일치** (로컬에선 됨) |
| \lim_sub | (lim 관련) | renders / latex=`\lim_{x\to0}` | **프롬프트와 불일치** (로컬에선 됨) |
| \cbrt | 렌더 안 됨 | empty / latex=`` | 실무 일치(latex 경로 빈칸). 등록은 되어 있음 |
| \dfrac | frac과 동일 | alias→frac / latex=`\frac{1}{2}` | 일치(별칭) |
| \cfrac | frac과 동일 | alias→frac / latex=`\frac{1}{2}` | 일치(별칭) |
| \sim | 물결(교과서 다름) | renders / latex=`\sim` | 일치(렌더는 되나 모양 이슈) |
| \parallel | 곧은 두 줄(교과서 다름) | renders / latex=`\parallel` | 일치(렌더는 되나 모양 이슈) |

### 유니코드 직접 삽입 (로컬)

| 기호 | 결과 |
|---|---|
| unicode_sim | unicode-ok · 표시 `∽` |
| unicode_equiv | unicode-ok · 표시 `≡` |
| unicode_parallel | unicode-ok · 표시 `⫽` |
| unicode_therefore | unicode-ok · 표시 `∴` |
| unicode_because | unicode-ok · 표시 `∵` |
| unicode_implies | unicode-ok · 표시 `⇒` |

## 2. 허용 목록 후보 (이름 명령어, 소스 등록부)

이름 명령어 등록 수(필터 전): 161 · 내부용 제외 후: 147

### 기하·도형
`\overline` · `\underline` · `\overleftrightarrow` · `\overarc` · `\overleftarrow` · `\overrightarrow` · `\triangle` · `\angle` · `\measuredangle` · `\degree` · `\perp` · `\parallel` · `\nparallel` · `\parallelogram` · `\bigcirc` · `\square` · `\cong` · `\ncong` · `\sim` · `\nsim` · `\mid`

### 구조(분수·근·첨자 등)
`\frac` · `\dfrac` · `\cfrac` · `\fraction` · `\sqrt` · `\nthroot` · `\cbrt` · `\binom` · `\binomial` · `\choose` · `\overline` · `\underline` · `\hat` · `\tilde` · `\vec` · `\dot` · `\bar` · `\over` · `\left` · `\right` · `\langle` · `\rangle` · `\lVert` · `\rVert` · `\subscript` · `\superscript` · `\supscript`

### 서체·색
`\mathrm` · `\mathbf` · `\mathit` · `\mathsf` · `\mathtt` · `\textcolor` · `\class` · `\operatorname`

### 비교·관계
`\neq` · `\ne` · `\leq` · `\le` · `\geq` · `\ge` · `\lt` · `\gt` · `\approx` · `\cong` · `\ncong` · `\sim` · `\nsim` · `\perp` · `\parallel` · `\nparallel`

### 연산 기호
`\times` · `\div` · `\divide` · `\cdot` · `\sdot` · `\pm` · `\mp` · `\plusminus` · `\plusmn` · `\minusplus` · `\mnplus` · `\cross` · `\to` · `\infty` · `\infin` · `\infinity` · `\percent` · `\percentof`

### 합·곱·적분
`\sum` · `\summation` · `\prod` · `\product` · `\coprod` · `\coproduct` · `\int` · `\integral`

### 그리스 문자
`\alpha` · `\beta` · `\chi` · `\delta` · `\Delta` · `\digamma` · `\epsilon` · `\epsiv` · `\eta` · `\gamma` · `\Gamma` · `\gammad` · `\Gammad` · `\iota` · `\kappa` · `\kappav` · `\lambda` · `\Lambda` · `\mu` · `\nu` · `\omega` · `\Omega` · `\phi` · `\Phi` · `\phiv` · `\pi` · `\Pi` · `\piv` · `\psi` · `\Psi` · `\rho` · `\rhov` · `\sigma` · `\Sigma` · `\sigmaf` · `\sigmav` · `\tau` · `\theta` · `\Theta` · `\thetasym` · `\thetav` · `\upsi` · `\Upsi` · `\upsilon` · `\Upsilon` · `\varepsilon` · `\varkappa` · `\varphi` · `\varpi` · `\varrho` · `\varsigma` · `\vartheta` · `\xi` · `\Xi` · `\zeta`

### AutoOperatorNames (타이핑 시 함수 이름)
내장: `arg` · `deg` · `det` · `dim` · `exp` · `gcd` · `hom` · `inf` · `ker` · `lg` · `lim` · `ln` · `log` · `max` · `min` · `sup` · `limsup` · `liminf` · `injlim` · `projlim` · `Pr`

삼각 등: `sin` · `cos` · `tan` · `arcsin` · `arccos` · `arctan` · `sinh` · `cosh` · `tanh` · `sec` · `csc` · `cot` · `coth`

### 전체 이름 명령어 (알파벳순)

<details><summary>펼치기 (147)</summary>

`alpha`, `ang`, `angle`, `ans`, `approx`, `backslash`, `bar`, `beta`, `bigcirc`, `binom`, `binomial`, `cbrt`, `cdot`, `cfrac`, `chi`, `choose`, `cong`, `coprod`, `coproduct`, `cross`, `degree`, `delta`, `Delta`, `dfrac`, `digamma`, `div`, `divide`, `divides`, `dot`, `dprime`, `epsilon`, `epsiv`, `eta`, `forall`, `frac`, `fraction`, `gamma`, `Gamma`, `gammad`, `Gammad`, `ge`, `geq`, `gt`, `hat`, `infin`, `infinity`, `infty`, `int`, `integral`, `iota`, `kappa`, `kappav`, `lambda`, `Lambda`, `langle`, `le`, `leq`, `lt`, `lVert`, `mathbf`, `mathit`, `mathrm`, `mathsf`, `mathtt`, `measuredangle`, `mid`, `minusplus`, `mnplus`, `mp`, `mu`, `ncong`, `ne`, `neq`, `nparallel`, `nsim`, `nthroot`, `nu`, `omega`, `Omega`, `operatorname`, `over`, `overarc`, `overleftarrow`, `overleftrightarrow`, `overline`, `overrightarrow`, `parallel`, `parallelogram`, `percent`, `percentof`, `perp`, `phi`, `Phi`, `phiv`, `pi`, `Pi`, `piv`, `plusminus`, `plusmn`, `pm`, `prime`, `prod`, `product`, `psi`, `Psi`, `rangle`, `rho`, `rhov`, `rVert`, `sdot`, `sigma`, `Sigma`, `sigmaf`, `sigmav`, `sim`, `sqrt`, `square`, `sum`, `summation`, `tau`, `textcolor`, `theta`, `Theta`, `thetasym`, `thetav`, `tilde`, `times`, `to`, `triangle`, `underline`, `upsi`, `Upsi`, `upsih`, `Upsih`, `upsilon`, `Upsilon`, `varepsilon`, `varkappa`, `varphi`, `varpi`, `varrho`, `varsigma`, `vartheta`, `vec`, `xi`, `Xi`, `zeta`

</details>

## 3. 로컬 실측 전체 (72항)

| id | status | latex() |
|---|---|---|
| overline | ok | `\overline{\mathrm{AB}}` |
| underline | ok | `\underline{\mathrm{CD}}` |
| overleftrightarrow | ok | `\overleftrightarrow{\mathrm{PQ}}` |
| overarc | ok | `\overarc{\mathrm{AB}}` |
| triangle | ok | `\triangle\mathrm{ABC}` |
| angle | ok | `\angle\mathrm{A}` |
| degree | ok | `40\degree` |
| perp | ok | `\perp` |
| parallelogram | ok | `\parallelogram` |
| bigcirc | ok | `\bigcirc` |
| mathrm | ok | `\mathrm{ABC}` |
| mathbf | ok | `\mathbf{A}` |
| textcolor | ok | `\textcolor{red}{A}` |
| frac | ok | `\frac{1}{2}` |
| sqrt | ok | `\sqrt{2}` |
| sqrt3 | ok | `\sqrt[3]{8}` |
| neq | ok | `\ne` |
| leq | ok | `\le` |
| geq | ok | `\ge` |
| times_div | ok | `\times\div` |
| infty | ok | `\infty` |
| to | ok | `\to` |
| pm_mp | ok | `\pm\mp` |
| cdot | ok | `\cdot` |
| cbrt | empty | `` |
| lim | renders | `\lim` |
| lim_sub | renders | `\lim_{x\to0}` |
| dfrac | alias→frac | `\frac{1}{2}` |
| cfrac | alias→frac | `\frac{1}{2}` |
| therefore | not-rendered | `` |
| because | not-rendered | `` |
| equiv | not-rendered | `` |
| sim | renders | `\sim` |
| backsim | not-rendered | `` |
| parallel | renders | `\parallel` |
| Rightarrow | not-rendered | `` |
| Leftrightarrow | not-rendered | `` |
| ldots | not-rendered | `` |
| cdots | not-rendered | `` |
| propto | not-rendered | `` |
| bot | not-rendered | `` |
| text | not-rendered | `` |
| underbrace | not-rendered | `` |
| quad | not-rendered | `` |
| cong | renders | `\cong` |
| nsim | renders | `\nsim` |
| mathbb | not-rendered | `` |
| overbrace | not-rendered | `` |
| leftarrow | not-rendered | `` |
| implies | not-rendered | `` |
| unicode_sim | unicode-ok | `∽` |
| unicode_equiv | unicode-ok | `≡` |
| unicode_parallel | unicode-ok | `⫽` |
| unicode_therefore | unicode-ok | `∴` |
| unicode_because | unicode-ok | `∵` |
| unicode_implies | unicode-ok | `⇒` |
| sum | ok | `\sum_{k=1}^{n}k` |
| int | ok | `\int_{0}^{1}x` |
| binom | ok | `\binom{n}{k}` |
| nthroot | ok | `\sqrt[3]{8}` |
| vec | ok | `\vec{a}` |
| hat | ok | `\hat{a}` |
| left_right | ok | `\left(\frac{1}{2}\right)` |
| sin | ok | `\sin x` |
| log | ok | `\log_{10}x` |
| space_cmd | ok | `a\ b` |
| percent | ok | `\%\operatorname{of}` |
| square | ok | `\square` |
| measuredangle | ok | `\measuredangle` |
| forall | ok | `\forall` |
| prod | ok | `\prod_{i=1}^{n}i` |
| overline_nested | ok | `\mathbf{\overline{\mathrm{AB}}}` |

## 4. 프롬프트 수정 제안 (아직 파일 미반영)

1. `[렌더되지 않으므로 쓰지 말 것]` 목록에서 **`\lim` 삭제**하거나, "중학교 과정 밖이라 쓰지 말 것"으로 이유를 바꿉니다. (로컬에서는 렌더됨)
2. `\cbrt` 는 "등록은 있으나 latex 붙여넣기에서 빈칸 → `\sqrt[3]{}` 사용"으로 설명을 구체화합니다.
3. 금지 목록 대신 **허용 목록 + 유니코드 치환표**를 규칙 원본으로 두고, 웹 도구·스킬이 같은 표를 참조하게 합니다.
4. Amplify 본제품 실측 후 표의 "로컬" 열 옆에 "메모/수식답변/CL" 열을 추가합니다.
