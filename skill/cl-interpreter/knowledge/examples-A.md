# CL 적용 예제 층 — 그래프·그림판·메모·이미지 (examples-A.md)

> **이 파일의 항목은 정의가 아니다.** 특정 예제 코드에 대해 여러 해석이 일치한 사례(3일치)와, 판정 항목에 붙어 있던 보충이다. Amplify 실행 검증 전이다.
> 새 코드를 해석할 때 정의처럼 인용하지 않는다. 정의는 공식 문서에서 먼저 찾고, 여기 항목은 "비슷한 코드에서는 ~로 해석됩니다"처럼 사례로만 인용한다. 답에는 *추가검증필요* 태그로 쓴다.
> 항목 제목: `### <ID> — <화면 제목> — <등급>`. 각 항목 끝의 `검토` 줄은 사용자 검토용이다.

항목 63건. 컴포넌트별로 절을 나눴다.


---

## graph

### A-graph-01 — Graph.number [source] — 3일치
- 코드 요지: 입력창 `xValue`의 제출 여부에 따라 그래프 `tangentGraph1`의 number `a` 값을 정하고, `xValue`의 correct 조건은 `tangentGraph`의 number `c_{orrect}`가 1인지로 정한다.
  - `tangentGraph1:2` `when xValue.submitted xValue.numericValue`
  - `xValue:1` `correct: tangentGraph.number("c_{orrect}") = 1`
- 확정 문장:
  - `tangentGraph1:1`은 number `a`의 sink를 정의한다.
  - `xValue.submitted`가 참이면 `xValue.numericValue`(source)가 `a`의 값이 되고, 아니면 `a`는 10000이다.
  - `xValue`의 `correct` sink는 `tangentGraph`의 number `c_{orrect}`(source)가 1과 같은지로 정해진다.
  - `xValue:1`이 참조하는 이름은 `tangentGraph`이며 `tangentGraph1`이 아니다.
- 관찰예측: 제출 전에는 `tangentGraph1`의 `a`가 10000이고, 수를 제출하면 `a`가 그 수로 바뀐다. `xValue`의 correct는 `tangentGraph`의 `c_{orrect}` 값이 1인지에 따라 결정된다.
- 표현판단: LLM-1은 `xValue:1`이 `tangentGraph1`의 값을 읽는 것처럼 요약했으나 LLM-2·3은 코드의 이름이 `tangentGraph`로 다르다는 점을 짚었다. 코드에 적힌 그대로 `tangentGraph`로 썼다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `tangentGraph`와 `tangentGraph1`이 같은 컴포넌트를 가리키는지, 서로 다른 컴포넌트인지. 10000이라는 값의 의도. `c_{orrect}`가 그래프 안에서 어떻게 정의되는지.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-02 — Graph.calculatorState [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 이 그래프의 background에 `tangentGraph1.calculatorState`를 `graphLayer`로 감싸 지정한다.
  - `레이블 없는 그래프:1` `background: graphLayer(tangentGraph1.calculatorState)`
- 관찰예측: `tangentGraph1`의 시각 요소가 레이블 등 일부를 뺀 채 이 그래프의 배경에 보인다.
- 표현판단: 사용자 검토(2026-10-22): 레이블 등 일부를 빼고 전부 복사된다고 판정했다. 이전에는 범위를 단정하지 않았다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-03 — Graph.numberList [source] — 3일치
- 코드 요지: `sketch1`의 획을 `graphLeft` background에 겹쳐 보이고, `graphLeft`의 numberList `L`과 경계 number 네 개를 `sketch1`에 연결한다.
  - `graphLeft:1` `background: layerStack(sketchLayer(sketch1.sketch),sketchLayer(sketch1.currentStroke))`
  - `sketch1:4` `bounds: makeBounds(graphLeft.number("x_m"), graphLeft.number("x_M"), graphLeft.number("y_m"), graphLeft.number("y_M"))`
- 확정 문장:
  - `(master):1`은 화면 `subtitle` sink를 문자열로 설정하며, `\n`은 줄바꿈이다.
  - `graphLeft:1`은 `sketch1.sketch`와 `sketch1.currentStroke`를 각각 `sketchLayer`로 만들어 `layerStack`으로 겹쳐 `background`에 지정한다.
  - `sketch1:1`은 `graphLeft`의 numberList `L`(source)을 `sketch1`의 numberList `L`(sink)로 제공한다.
  - `sketch1:4`는 `graphLeft`의 number `x_m`, `x_M`, `y_m`, `y_M`으로 `makeBounds`를 만들어 `sketch1`의 `bounds`에 지정한다.
- 관찰예측: `sketch1`에 그린 획이 `graphLeft` 위에 보이고, 그리는 중인 획(`currentStroke`)도 함께 보인다. `graphLeft`의 경계가 바뀌면 `sketch1`의 bounds도 같은 값으로 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: numberList `L`의 의미. `graphLeft` 안에서 `L`, `x_m` 등이 어떻게 정의되는지(코드에 없음).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-04 — Graph.animationTime [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `animationGraph`의 `animationTime`을 두 컴포넌트의 number `t_0`로 제공하고, 같은 시각에서 `animationSketch.sketch`의 y값 목록을 numberList `y_1`로 제공한다.
  - `animationGraph:5` `numberList("y_1"): animationSketch.sketch.yValuesAt(this.animationTime)`
  - `animationSketch:1` `number("t_0"): animationGraph.animationTime`
- 관찰예측: 학생이 `animationSketch`에 선을 그린 뒤 재생 버튼을 누르면 6.28초 동안 애니메이션이 진행된다. 재생되는 동안 두 컴포넌트의 `t_0`가 함께 증가하고, `t_0`를 x좌표로 삼은 스케치의 y값(`y_1`)에 맞춰 그래프의 점이나 도형이 움직인다.
- 표현판단: 사용자 검토(2026-10-22): 단위는 초이고 대체로 1번 답이 정확하다고 판정했다. 5행 문장은 사용자가 지시한 표현으로 고쳤다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-05 — Graph.bounds [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `graph1`의 bounds를 `button1.timeSincePress()` 값에 따라 고정값 또는 `graph1`의 number 네 개로 정하고, `sketch1`이 이를 그대로 받는다.
  - `graph1:6` `when button1.timeSincePress() = 0 makeBounds(-4,4,-4,4)`
  - `sketch1:1` `bounds: graph1.bounds`
- 확정 문장에 붙은 보충 (판정 문장이 아님):
  - (LLM-1 보충) `sketch1:1`은 `graph1.bounds`(source)를 `sketch1`의 `bounds`로 그대로 받아 두 컴포넌트가 같은 좌표 영역을 갖는다.
  - (LLM-1 보충) `graph1:3`의 number `z_{oom}`은 `button1.timeSincePress()`가 0이면 0, 아니면 1이다.
  - (LLM-1 보충) `graph1:1`은 `sketch1.sketch`와 `sketch1.currentStroke`를 `sketchLayer`와 `layerStack`으로 묶어 background에 지정하고, `button1:1`의 `resetLabel`은 "Reset"이다.
- 관찰예측: (LLM-1 보충) Reset 버튼을 누르면 `graph1`과 `sketch1`의 좌표 영역이 `makeBounds(-4,4,-4,4)`의 기본 영역으로 돌아가고, 그 외에는 `graph1`의 `x_m`, `x_M`, `y_m`, `y_M`을 따라 두 컴포넌트가 함께 바뀐다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-06 — Graph.labelText [source] — 3일치
- 코드 요지: `ratingGraph`의 number `x_k`가 조건을 만족하는 항목만 label `l_k`의 `labelText`를 글머리 문자열로 만들어 메모 `content`에 이어 붙인다.
  - `레이블 없는 메모:1` `topic1 = when ratingGraph.number("x_1") <= 0 "" otherwise "• ${ratingGraph.labelText("l_1")}\n"`
  - `레이블 없는 메모:5` `topic5 = when ratingGraph.number("x_5")  = 0 "" otherwise "• ${ratingGraph.labelText("l_5")}!"`
- 확정 문장:
  - `레이블 없는 메모:1-4`는 `topic1`~`topic4`를 정의한다. `x_k`가 0 이하이면 빈 문자열이고, 아니면 `"• "` + `ratingGraph.labelText("l_k")` + 줄바꿈이다.
  - `레이블 없는 메모:5`의 `topic5`는 조건이 `x_5 = 0`이면 빈 문자열이고, 아니면 `"• "` + `labelText("l_5")` + `"!"`이며 줄바꿈이 없다. 앞의 네 줄과 조건(`<= 0` 대 `= 0`)과 끝 문자가 다르다.
  - `레이블 없는 메모:7-8`의 `content`는 안내 문장 뒤에 `topic1`~`topic5`를 `${}`로 차례로 이어 붙인다.
- 관찰예측: `x_k`를 0보다 크게 하면 해당 label의 텍스트가 `The things you like are:` 아래에 글머리 항목으로 나타나고, 다섯 번째 항목에는 느낌표가 붙는다.
- 표현판단: LLM-1은 `x_k`를 점의 좌표로, LLM-2는 슬라이더 값으로 설명했으나 코드에는 `ratingGraph`의 number `x_k`라는 것만 있다. number `x_k`로 썼다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `labelText("l_k")`가 정확히 무엇의 문자열을 돌려주는지. `labelText`가 비어 있을 때의 표시 결과. `x_k`가 `ratingGraph` 안에서 어떻게 정의되는지.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-07 — Graph.labelLatex [source] — 3일치
- 코드 요지: `choice`의 선택에 따라 `graph1`의 number `I`를 정하고, 메모 `content`에 `graph1.labelLatex("P_k")`를 백틱 안에 넣어 보여준다.
  - `graph1:1` `number("I"): when choice.isSelected(1) 1 when choice.isSelected(2) 2 when choice.isSelected(3) 3 otherwise 0`
  - `레이블 없는 메모:2` `when choice.isSelected(1) "Linear Equation: \`${graph1.labelLatex("P_1")}\`"`
- 확정 문장:
  - `graph1:1`은 `choice.isSelected(1)`, `(2)`, `(3)`에 따라 number `I`를 1, 2, 3으로 설정하고, 아무것도 선택되지 않으면 0으로 설정한다.
  - `레이블 없는 메모:2-4`는 `choice` 선택 1, 2, 3에 따라 각각 Linear, Quadratic, Exponential Equation 문구에 `graph1.labelLatex("P_1")`, `("P_2")`, `("P_3")`의 값을 넣어 `content`로 설정한다.
  - `레이블 없는 메모:5`는 위 조건에 모두 해당하지 않으면 `"Select a type of equation."`을 `content`로 설정한다.
  - 백틱 안의 `labelLatex` 값은 수식 표기로 표시된다.
- 관찰예측: 선택 전에는 `Select a type of equation.`이 보이고, 선택지를 고르면 해당 방정식 문구와 `labelLatex` 값이 수식으로 표시된다.
- 표현판단: LLM-1은 "해당 그래프 요소가 나타난다"까지 서술했으나 코드에서 `I`를 쓰는 곳이 없어 세 답이 합의하지 않았다. 그 부분은 뺐다. 백틱의 수식 표시 역할은 LLM-2가 코드추론이라고 밝혔으나 LLM-1·3이 같은 취지여서 확정 문장에 넣었다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `labelLatex`가 어떤 label(점 라벨 또는 식 라벨)의 latex인지의 정확한 정의. `choice`가 복수 선택을 허용할 때의 동작(코드상 위의 `when`이 먼저 적용되는 것 외에는 모름).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-08 — Graph.labelNumericValue [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `simpleFunction`으로 만든 절댓값 차이 함수 `difference`에 `x_k`와 label `a_k`의 `labelNumericValue`를 넣어 0.2 미만인지 네 쌍 모두 검사해 `correct`를 정한다.
  - `레이블 없는 그래프:3` `c1 = difference.evaluateAt(this.number("x_1"),this.labelNumericValue("a_1")) < 0.2`
  - `레이블 없는 그래프:8` `correct: c1 and c2 and c3 and c4`
- 관찰예측: 네 쌍 모두의 차이가 0.2보다 작아야 `correct`가 참이고, 한 쌍이라도 기준을 충족하지 않으면 거짓이다.
- 표현판단: LLM-1은 `a_k`를 "라벨에 적힌 수식의 계산값"으로, LLM-2는 numericValue로 해석한다고 이름으로 추정했고, LLM-3은 label `a_k`의 numericValue라고 썼다. 사용자 판정(보기 1 채택)으로 판정 확정을 유지하고 추가 문장도 그대로 둔다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-09 — Graph.isAnimating [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 그래프의 `animationDuration`을 5로 설정하고, `this.isAnimating`이 참이면 number `i_{sAnim}`을 1, 아니면 0으로 제공한다.
  - `레이블 없는 그래프:3` ``number(`i_{sAnim}`): when this.isAnimating 1 otherwise 0``
- 관찰예측: 애니메이션이 재생 중이면 `i_{sAnim}`은 1이고, 재생 전이나 재생이 끝나면 0이다.
- 표현판단: 사용자 검토(2026-10-22): 단위는 초, `isAnimating`은 재생 중 여부라고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-10 — Graph.currentX/Y [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 그래프의 `this.currentX`, `this.currentY`를 number `x_1`, `y_1`로 제공한다.
  - `레이블 없는 그래프:1` ``number(`x_1`): this.currentX``
  - `레이블 없는 그래프:3` ``number(`y_1`): this.currentY``
- 관찰예측: 학생이 그래프 위에서 마우스 커서를 움직이면 `x_1`, `y_1`이 커서 위치의 좌표를 반영한다.
- 표현판단: 사용자 검토(2026-10-22): 마우스 커서 좌표라고 판정했다. 이전에는 무엇의 좌표인지 단정하지 않았다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-11 — Graph.narration [sink] — 3일치
- 코드 요지: `narrationGraph`에 고정 narration(1)과 number `t`에 따라 달라지는 narration(2)를 설정한다.
  - `narrationGraph:1` `narration(1): "A very badly drawn bird flies beneath a glowing sun."`
  - `narrationGraph:4` `when narrationGraph.number("t") > 7 "The bird is under the sun now."`
- 확정 문장:
  - `narrationGraph:1`은 narration(1)을 고정 문자열 `"A very badly drawn bird flies beneath a glowing sun."`로 설정한다.
  - `narrationGraph:3-5`는 narration(2)를 정의한다. `narrationGraph.number("t")`가 7보다 크면 `"The bird is under the sun now."`이고, 아니면 빈 문자열이다.
- 관찰예측: narration(1)은 항상 제시되고, `t`가 7을 넘으면 narration(2)의 문구가 추가로 나타나며 아니면 비어 있다.
- 표현판단: narration의 출력 방식을 LLM-1은 스크린 리더 낭독으로, LLM-2는 스크린리더용 설명이라고 했으나 LLM-3은 화면 또는 접근성 출력 방식을 모른다고 했다. 출력 방식은 확정 문장에 넣지 않았다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: narration의 화면 또는 접근성 출력 방식과 UI 위치. 괄호 안 번호(1, 2)가 읽는 순서를 뜻하는지.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-12 — Graph.animationDuration [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 입력창 `animationInput`이 제출되면 그 numericValue를 `animationGraph`의 `animationDuration`으로 쓰고, 입력값이 1 또는 -1이면 입력창의 suffix를 단수로 바꾼다.
  - `animationGraph:1` `animationDuration: when animationInput.submitted animationInput.numericValue otherwise 0`
  - `animationInput:1` `suffix: when this.numericValue = 1 or this.numericValue = -1 "second" otherwise "seconds"`
- 관찰예측: 입력을 제출하기 전 `animationDuration`은 0이다. 1 또는 -1을 입력하면 입력창 suffix(접미사)가 `second`이고, 다른 값이면 `seconds`이다.
- 표현판단: LLM-1은 제출 뒤 재생 컨트롤이 생긴다고 서술했으나 LLM-2·3은 길이 0일 때의 재생 UI를 모른다고 했다. 재생 UI 서술은 뺐다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-13 — Graph.animationKeyboardStepValue [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `animationDuration`을 `numericValue("2*\pi")`로 두고, `animationKeyboardStepValue`를 입력창 제출값 또는 `numericValue("\pi/8")`로 정한다.
  - `animationGraph:1` `animationDuration: numericValue("2*\pi")`
  - `animationGraph:3-5` `animationKeyboardStepValue: when animationInput.submitted animationInput.numericValue otherwise numericValue("\pi/8")`
- 관찰예측: 애니메이션 슬라이더에서 키보드 화살표를 누르면 제출 전에는 π/8(약 0.39)씩, 학생이 `animationInput`에 값을 제출한 뒤에는 그 값씩 시간이 이동한다.
- 표현판단: 사용자 검토(2026-10-22): 1·2번 답(키보드 화살표 간격)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-14 — Graph.saveOnChange [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `graphLeft`의 `saveOnChange`에 number `a`를 문자열로 보간한 값을 설정하고, `graphRight`의 number `p_{ress}`가 `graphLeft`의 같은 number를 읽는다.
  - `graphLeft:1` ``saveOnChange: "${this.number(`a`)}"``
  - `graphRight:1` ``number(`p_{ress}`): graphLeft.number(`p_{ress}`)``
- 관찰예측: `graphLeft`의 `a` 값이 바뀌면 `saveOnChange`에 들어가는 값도 바뀐다. `graphRight`의 `p_{ress}`는 `graphLeft`의 같은 number를 따른다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(화면 복귀 뒤 graphLeft는 이어지고 graphRight는 초기화)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-15 — Graph.resetAnimationOnChange [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `graphLeft`의 `resetAnimationOnChange`에 `btn.pressCount`를 문자열로 설정하고, `GraphRight`가 `graphLeft`의 시간과 재생 상태를 읽으며, `btn`은 `graphLeft.animationTime`이 0이면 숨긴다.
  - `graphLeft:4` ``resetAnimationOnChange: "${btn.pressCount}"``
  - `btn:1` `hidden: graphLeft.animationTime = 0`
- 관찰예측: `GraphRight`의 `T`와 `p_{lay}`는 `graphLeft`의 시간과 재생 상태를 반영한다. `graphLeft.animationTime`이 0인 동안 `btn`은 숨겨진다.
- 표현판단: 사용자 검토(2026-10-22): `btn`을 누를 때마다 애니메이션이 리셋되고 트리거는 누른 횟수라고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-16 — Graph.bounds [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `zoomButton.timeSincePress`가 0보다 크면 `zoomGraph`의 number 네 개로 만든 bounds를, 아니면 `makeBounds(-10,10,-10,10)`을 `bounds`로 설정한다.
  - `zoomGraph:8` `when zoomButton.timeSincePress > 0 makeBounds(xSmall, xBig, ySmall, yBig)`
  - `zoomGraph:9` `otherwise makeBounds(-10,10,-10,10)`
- 관찰예측: `zoomButton`을 누르기 전에는 x, y 모두 -10부터 10까지의 범위가 보이고, 누른 뒤에는 `x_{small}`, `x_{big}`, `y_{small}`, `y_{big}` 값이 bounds를 정한다.
- 표현판단: 사용자 검토(2026-10-22): 이 코드는 리셋 라벨 글자만 정하며 리셋 동작은 코드만으로 알 수 없다고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-17 — Graph.background [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `sketchA.sketch`를 `transform`과 `simpleFunction`으로 서로 다른 배율로 변환한 다섯 `sketchLayer`를 `layerStack`으로 겹쳐 `backgroundGraph`의 `background`로 설정한다.
  - `backgroundGraph:1-2` `sketch1 = sketchLayer(sketchA.sketch.transform(simpleFunction("2x","x","y"),simpleFunction("2y","x","y")))`
  - `backgroundGraph:12` `background: layerStack(sketch1,sketch2,sketch3,sketch4,sketch5)`
- 관찰예측: 학생이 `sketchA`에 선이나 도형을 그리고 획을 마치면(마우스를 떼면), `backgroundGraph`의 배경에 그 도형이 원점을 기준으로 2배, 4배, 6배, (가로 7·세로 8)배, 10배로 커진 다섯 복사본으로 한꺼번에 나타난다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(원점 기준, 획을 마치면 나타남)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-18 — Graph.number [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `xValue`의 제출값을 `tangentGraph`의 number `a`로 보내고, `tangentGraph`의 `c_{orrect}`가 1인지로 메모의 `feedback`과 `xValue`의 `correct`를 정하며, 숫자가 정의되지 않으면 `xValue`에 `warning`을 설정한다.
  - `레이블 없는 메모:1` `correct = tangentGraph.number("c_{orrect}") = 1`
  - `xValue:4` `when not(isDefined(xValue.numericValue)) "Student didn't enter a number."`
- 관찰예측: 제출 전에는 `content`에 안내문만 보인다. 수를 제출하면 `tangentGraph`의 `a`가 그 수가 되고 `c_{orrect}`에 따라 정답 또는 오답 `feedback`이 안내문 뒤에 붙는다. 숫자가 정의되지 않은 상태이면 교사 대시보드에 `warning` 문구가 나타난다.
- 표현판단: 사용자 검토(2026-10-22): `warning`은 교사 대시보드에만 나타난다고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-19 — Graph.numberList [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `guessTable`의 1번 열 numericValues를 `guessGraph`의 numberList `G_{uessX}`로 제공한다.
  - `guessGraph:1` `numberList("G_{uessX}"): guessTable.columnNumericValues(1)`
- 관찰예측: `guessTable` 첫 열의 숫자 값 목록이 바뀌면 `guessGraph`의 `G_{uessX}`도 바뀐다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(입력할 때마다 그래프에 실시간 반영)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-20 — Graph.pointLabel [sink] — 3일치
- 코드 요지: `pointLabelGraph`의 점 `a`의 label을 제출된 latex 또는 `s_{uccess}` 구간별 이모지로 정하고, 메모의 `content`는 입력값과 `m_{ysteryNumber}`의 비교에 따라 달라진다.
  - `pointLabelGraph:2` ``when pointLabelInput.submitted "`${pointLabelInput.latex}`"``
  - `레이블 없는 메모:10` `when pointLabelInput.numericValue < pointLabelGraph.number("m_{ysteryNumber}") "${prompt0}${feedbackLow}"`
- 확정 문장:
  - `pointLabelGraph:1-7`은 `pointLabel("a")`를 위에서부터 순서대로 판정해 설정한다. `pointLabelInput.submitted`이면 `pointLabelInput.latex`를 백틱으로 감싼 문자열이고, 아니면 `s_{uccess}`가 0.95 초과일 때 "🔥", 0.75 초과 "🥵", 0.50 초과 "😎", 0 초과 "🥶", 그 외에는 빈 문자열이다.
  - 제출 후에는 `pointLabelInput.latex`가 `s_{uccess}`보다 우선한다(`pointLabelGraph:2`가 먼저 판정되기 때문).
  - `레이블 없는 메모:1-6`은 `prompt0`, `prompt1`, `feedbackLow`, `feedbackHigh`, `feedbackCorrect`, `error` 문자열 변수를 정의한다.
  - `레이블 없는 메모:8-13`의 `content`는 미제출이면 `prompt0`+`prompt1`, `pointLabelInput.numericValue`가 `m_{ysteryNumber}`보다 작으면 `prompt0`+`feedbackLow`, 크면 `prompt0`+`feedbackHigh`, 같으면 `prompt0`+`feedbackCorrect`, 그 외에는 `prompt0`+`error`이다.
- 관찰예측: 제출 전에는 추측 입력 안내가 보이고 점 label은 `s_{uccess}` 값에 따른 이모지이다. 값을 제출하면 점 label은 입력 latex로 바뀌고 메모는 입력값과 `m_{ysteryNumber}`의 비교 결과에 맞는 문구를 보인다.
- 표현판단: `otherwise`에 해당하는 경우를 LLM-1은 "숫자가 아닌 입력 등"으로 풀이했으나 LLM-2·3은 "그 밖"으로만 썼다. 코드 그대로 "앞 조건에 모두 해당하지 않을 때"로 썼다. 또한 LLM-1의 "미스터리 숫자에 가까울수록 이모지가 바뀐다"는 `s_{uccess}`의 정의가 코드에 없어 뺐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `s_{uccess}`와 `m_{ysteryNumber}`의 출처와 정의(그래프 안 변수로 추정될 뿐 세 LLM 모두 내용은 모름). 같은 값이거나 경계에서의 세부 동작.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-21 — Graph.xAxisLabel [sink] — 3일치
- 코드 요지: x축 label을 `"Time ("` + `xAxisLabelTable.cellContent(1,1)` + `")"`로 설정한다.
  - `레이블 없는 그래프:1` `xAxisLabel: "Time (${xAxisLabelTable.cellContent(1,1)})"`
- 확정 문장:
  - `xAxisLabel` sink는 `xAxisLabelTable.cellContent(1,1)`(source, 표 (1,1) 셀의 내용)을 `Time (` 와 `)` 사이에 넣은 문자열로 설정된다.
- 관찰예측: 표의 (1,1) 셀이 `seconds`이면 x축 label은 `Time (seconds)`가 된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-22 — Graph.yAxisLabel [sink] — 3일치
- 코드 요지: y축 label을 `"Remaining Ice Cream ("` + `yAxisLabelTable.cellContent(1,1)` + `")"`로 설정한다.
  - `레이블 없는 그래프:1` `yAxisLabel: "Remaining Ice Cream (${yAxisLabelTable.cellContent(1,1)})"`
- 확정 문장:
  - `yAxisLabel` sink는 `yAxisLabelTable.cellContent(1,1)`(source, 표 (1,1) 셀의 내용)을 `Remaining Ice Cream (` 와 `)` 사이에 넣은 문자열로 설정된다.
- 관찰예측: 표의 (1,1) 셀이 `scoops`이면 y축 label은 `Remaining Ice Cream (scoops)`가 된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-24 — Graph.trace [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 그래프의 `trace` sink를 `traceChoice.isSelected(1)`로 설정한다.
  - `레이블 없는 그래프:1` `trace: traceChoice.isSelected(1)`
- 관찰예측: `traceChoice`의 첫 번째 선택지를 고르면 그래프의 `trace`가 참이 된다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(trace의 클릭·드래그 좌표 표시)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-25 — Graph.function [sink] — 3일치
- 코드 요지: `equationInput.latex`를 변수 `x`의 함수로 만들어 그래프의 function `f`로 설정한다.
  - `equationGraph:1` `function("f"): simpleFunction(equationInput.latex, "x")`
- 확정 문장:
  - `equationGraph:1`은 `equationInput.latex`(source)와 변수 `"x"`로 `simpleFunction`을 만들어 function `f`의 sink로 설정한다.
- 관찰예측: 유효한 latex를 입력하면 그에 해당하는 function `f`가 그래프에 반영된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 잘못된 식 또는 해석할 수 없는 latex를 입력했을 때의 처리 방식.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-26 — Graph.warning [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 그래프의 number `b`가 0이면 `warning`을 경고 문자열로, 아니면 빈 문자열로 설정한다.
  - `레이블 없는 그래프:2` `when this.number("b") = 0 "Student has set the circumference to zero."`
- 관찰예측: `b`가 0이면 `Student has set the circumference to zero.`라는 warning 문구가 설정된다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(교사 대시보드의 주황색 경고 아이콘)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-27 — Graph.correct [sink] — 3일치
- 코드 요지: 그래프의 `correct` sink를 `this.number("a") = 2`로 설정한다.
  - `레이블 없는 그래프:1` `correct: this.number("a") = 2`
- 확정 문장:
  - `correct` sink는 `this.number("a") = 2`로 설정된다. number `a`가 정확히 2일 때만 `correct`가 참이다.
- 관찰예측: `a`가 정확히 2일 때만 `correct`가 참이다.
- 표현판단: 정답 표시가 보이는 방식을 LLM-1은 교사 대시보드의 체크로 서술했으나 LLM-2는 학생 화면에서 어떻게 보이는지 모른다고 했다. 표시 방식은 확정 문장에 넣지 않았다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `correct`가 참일 때 학생 화면과 교사 대시보드에 어떻게 표시되는지.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-graph-29 — Graph.hidden [sink] — 3일치
- 코드 요지: 그래프의 `hidden` sink를 `hiddenChoice.isSelected(2)`로 설정한다.
  - `레이블 없는 그래프:1` `hidden: hiddenChoice.isSelected(2)`
- 확정 문장:
  - `hidden` sink는 `hiddenChoice.isSelected(2)`(source)로 설정된다. 두 번째 선택지가 선택되면 그래프가 hidden 처리된다.
- 관찰예측: `hiddenChoice`의 두 번째 선택지를 고르면 그래프가 화면에서 숨겨진다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


### A-graph-30 — Graph 식 목록 `t_{2c}`, `S` [variable] — 적용 예제 (짝 어긋남, 확인 지점)
- 코드 요지: 같은 블록의 `t_{2c}`만 두 번째 반사점(`p_{1x}`, `p_{1y}`, `v_{1x}`, `v_{1y}`)을 쓰고, 나머지 식은 짝이 맞는다.
  - `t_{2c}=f(t_c(p_{1x},p_{1y},v_{1x},v_{1y},c_{1x},c_{1y}))` (원문 식 1866, 787~791줄)
  - 같은 블록: `t_{0c}`는 `p_0`, `t_{1c}`는 `p_1`, `d_{2c}`는 `p_2`와 `v_2`를 쓴다 (식 213, 1865, 1868). 38·39번의 같은 식은 `p_2`, `v_2`를 쓴다.
  - `S=\sum_{n=1}^3I[n]` (원문 식 186, 829~833줄): `I[n]`을 그대로 더한다. 38·39번은 `I[n]>0`일 때만 센다.
- 관찰예측: 이 식만으로는 화면 판정을 예측하지 않는다. 세 번째 구간의 최근접 시각이 두 번째 반사 기준으로 계산되어, 세 번째 구간의 표적 판정이 맞지 않을 수 있다.
- 출처: 적용 예제 (2차 검증 37번 해석, 짝 어긋남 패턴. 실측 전)
- 처리: "오류로 보입니다"까지만 쓴다. `S`의 기준 차이는 활동마다 다를 수 있으므로 판정 조건을 읽을 때 원문에서 직접 확인하고, 의도는 "추가검증필요"로 쓴다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


### A-graph-31 — Graph 스크립트 변수 `L5`, `U5` [variable] — 적용 예제 (확인 지점)
- 코드 요지: 중첩된 `when ... otherwise` 가운데 마지막 `OTHERWISE`만 대문자로 쓴다. 같은 원문의 다른 `when` 줄은 모두 소문자 `otherwise`다.
  - `L5= when B5<M5a L5a otherwise when B5<M5b L5b otherwise when B5<M5c L5c OTHERWISE L5d` (원문 27줄)
  - `U5`도 같은 모양이다 (원문 28줄).
- 관찰예측: 이 자료에서는 예측하지 않는다. CL이 대소문자를 구분하는지 확인되지 않았다.
- 출처: 적용 예제 (2차 검증 43번 해석, 확인 지점). 공식 목록에서 대문자 `OTHERWISE`는 확인되지 않았다.
- 처리: 대소문자를 구분하는지 확인되기 전에는 오류 후보가 아니라 "추가검증필요"로 쓴다. 구분한다고 확인되면 그때 "공식 목록과 맞지 않는 것"으로 옮긴다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


---

## sketch

### A-sketch-01 — Sketch.number [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `sketch1`이 정수 위치 −9~9에서의 스케치 좌표 최댓값을 `number("Y_{…}")`·`number("X_{…}")`로 내놓고, (master)의 `subtitle`이 선 길이와 `number("M")`·`number("v_{ertical}")`에 따라 문구를 바꾼다.
  - `(master):2` `when sketch1.sketch.totalStrokeLength > 1.5 and sketch1.number("v_{ertical}") = 1 "Your line is vertical."`
  - `sketch1:5` `number("Y_{n9}"): firstDefinedValue(max(this.sketch.yValuesAt(-9)),-15)`
  - `sketch1:3` `resetOnChange: when mergeSketches(this.sketch,this.currentStroke).strokeCount > 1 "1" otherwise "0"`
- 관찰예측: 직선 도구가 처음부터 선택되어 있다. 선을 긋지 않으면 `"Sketch a line."`, 길이 1.5 이하의 짧은 선이면 `"Sketch a longer line."`, 그보다 길면 기울기 문구가 나타난다. 두 번째 획을 긋기 시작하면 기존 선이 지워지고 새 획만 남는다.
- 표현판단: 사용자 검토(2026-10-22): 세 답 모두 맞고, M·v_{ertical}은 배경 그래핑 계산기의 함수에서 계산된다고 판정했다. resetOnChange는 1번 답(기존 그림을 지움)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-02 — Sketch.numberList [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: (master)의 `subtitle`이 `sketch1.numberList("X")`의 길이로 "선이 지나는 gridline 수"를 보이는 화면이며, `sketch1` 코드에는 `numberList("X")` 정의가 없다.
  - `(master):3` `"Your line passes through ${length(sketch1.numberList("X"))} gridlines."`
  - `sketch1:5` `number("Y_{n9}"): firstDefinedValue(max(this.sketch.yValuesAt(-9)),-15)`
- 관찰예측: 선을 긋기 전에는 `"Sketch a line."`이 보이고, 선을 그으면 `numberList("X")`의 길이가 gridline 수 자리에 들어간 문구가 보인다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(배경 그래프의 교점 리스트)을 대체로 채택하고, 정의가 코드에 없는 source는 그 컴포넌트의 CL·계산기 식을 봐야 정확히 알 수 있다고 안내하라고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-03 — Sketch.bounds [source] — 3일치
- 코드 요지: `sampleSketch`가 획 수에 1을 더한 `count`로 `bounds`를 정하고, 그래프는 그 `bounds`를 그대로 가져온다.
  - `sampleSketch:1` `count = numericValue("${this.sketch.strokeCount}+1")`
  - `sampleSketch:3` `bounds: makeBounds(numericValue("-${count}"),count,numericValue("-${count}"),count)`
  - `레이블 없는 그래프:1` `bounds: sampleSketch.bounds`
- 확정 문장:
  - `count`는 `this.sketch.strokeCount`에 1을 더한 숫자이다.
  - `sampleSketch`의 `bounds` sink는 `makeBounds(-count, count, -count, count)`로, 획 수가 늘수록 범위가 커진다.
  - 그래프의 `bounds` sink는 `sampleSketch.bounds` source를 읽어 같은 범위를 쓴다.
- 관찰예측: 획이 0개일 때 범위는 −1~1이고, 획을 하나씩 완성할 때마다 −2~2, −3~3으로 넓어지며 그래프도 같은 범위를 쓴다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-1)
- 실행검증: 해당 없음
- 비어 있음: `numericValue`에 `"-${count}"` 문자열을 넣는 형태가 정상 동작하는지는 LLM-2가 코드추론으로만 언급했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-04 — Sketch.labelText [source] — 3일치
- 코드 요지: 표의 세 셀에 `sketch1`의 점 `P` 라벨을 `labelText`, `labelLatex`, `labelNumericValue`로 각각 읽어 보인다. 이 항목의 주제는 `Sketch.labelText [source]`이다.
  - `레이블 없는 표:1` `cellContent(1,1): sketch1.labelText("P")`
- 확정 문장:
  - `sketch1.labelText("P")` source는 `sketch1`의 점 `P`의 라벨을 텍스트로 내놓으며, 이 코드는 그 값을 `cellContent(1,1)` sink에 넣는다.
  - 같은 표의 (1,2)는 `labelLatex("P")`를 백틱으로 감싸고, (1,3)은 `labelNumericValue("P")`를 문자열 보간으로 넣는다.
- 관찰예측: 표 첫 행의 세 칸에 `P`의 라벨이 각각 텍스트, 수식, 숫자값 형태로 나타나고, `P`의 라벨이 바뀌면 세 칸도 따라 바뀐다.
- 출처: LLM 3일치 (표현 선택: 공식문서 표현(source/sink) 기준, 세부는 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 라벨이 숫자가 아닐 때 (1,3)에 무엇이 나오는지(LLM-2가 모른다고 함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-05 — Sketch.labelLatex [source] — 3일치
- 코드 요지: A-sketch-04와 같은 표 코드이며, 이 항목의 주제는 `Sketch.labelLatex [source]`이다.
  - `레이블 없는 표:3` `cellContent(1,2): "`${sketch1.labelLatex("P")}`"`
- 확정 문장:
  - `sketch1.labelLatex("P")` source는 `sketch1`의 점 `P`의 라벨을 LaTeX 형태로 내놓으며, 이 코드는 백틱으로 감싸 `cellContent(1,2)` sink에 넣는다.
  - 같은 표의 (1,1)은 `labelText("P")`, (1,3)은 `labelNumericValue("P")`를 쓴다.
- 관찰예측: 두 번째 칸에는 `P`의 라벨이 수식 형태로 표시된다.
- 출처: LLM 3일치 (표현 선택: 공식문서 표현(source/sink) 기준, 세부는 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 라벨이 LaTeX가 아닌 일반 문자일 때 `labelLatex` 결과(LLM-2가 모른다고 함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-06 — Sketch.labelNumericValue [source] — 3일치
- 코드 요지: A-sketch-04와 같은 표 코드이며, 이 항목의 주제는 `Sketch.labelNumericValue [source]`이다.
  - `레이블 없는 표:5` `cellContent(1,3): "${sketch1.labelNumericValue("P")}"`
- 확정 문장:
  - `sketch1.labelNumericValue("P")` source는 `sketch1`의 점 `P`의 라벨을 숫자값으로 내놓으며, 이 코드는 문자열 보간으로 `cellContent(1,3)` sink에 넣는다.
  - 같은 표의 (1,1)은 `labelText("P")`, (1,2)는 `labelLatex("P")`를 쓴다.
- 관찰예측: 세 번째 칸에 `P` 라벨의 숫자값이 나타나고, 그 값이 바뀌면 세 번째 칸도 바뀐다.
- 출처: LLM 3일치 (표현 선택: 공식문서 표현(source/sink) 기준, 세부는 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 라벨이 숫자로 해석되지 않을 때 문자열에 들어가는 값(LLM-2가 모른다고 함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-07 — Sketch.sketch [source] — 3일치
- 코드 요지: 메모의 `content`가 `sampleSketch.sketch.strokeCount`가 0인지에 따라 달라진다.
  - `레이블 없는 메모:2` `when sampleSketch.sketch.strokeCount = 0 "Sketch something."`
  - `레이블 없는 메모:3` `otherwise "Thanks!"`
- 확정 문장:
  - `sampleSketch.sketch`의 `strokeCount`가 0이면 `"Sketch something."`, 그 밖에는 `"Thanks!"`를 `content` sink에 낸다.
  - `this.currentStroke`가 아니라 `sketch`를 읽으므로 완료된 획만 센다.
- 관찰예측: 처음에는 `"Sketch something."`이 보이고, 획이 하나 완성되면 `"Thanks!"`로 바뀐다. 긋는 도중에는 아직 바뀌지 않는다(LLM-2).
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-08 — Sketch.currrentStroke [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 메모의 `content`가 `sampleSketch.currentStroke.totalStrokeLength`가 0인지에 따라 달라진다. 제목의 철자는 `Sketch.currrentStroke`로 되어 있다.
  - `레이블 없는 메모:2` `when sampleSketch.currentStroke.totalStrokeLength = 0 "Sketch something."`
  - `레이블 없는 메모:3` `otherwise "sketching..."`
- 관찰예측: 평소에는 `"Sketch something."`이고, 획을 긋는 동안 `"sketching..."`이 보인다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(손을 떼면 즉시 돌아감)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-09 — Sketch.currentX [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: (master)의 `subtitle`에 `sampleSketch.currentX`를 넣는다.
  - `(master):1` `subtitle: "Current `x`: `${sampleSketch.currentX}`"`
- 관찰예측: 학생이 `sampleSketch` 위에서 마우스 커서를 좌우로 움직이면 부제목의 `Current x:` 뒤 숫자가 커서 위치의 x좌표로 실시간으로 바뀐다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(마우스 커서의 x좌표, 실시간)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-10 — Sketch.currentY [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: (master)의 `subtitle`에 `sampleSketch.currentY`를 넣는다.
  - `(master):1` `subtitle: "Current `y`: `${sampleSketch.currentY}`"`
- 관찰예측: 학생이 `sampleSketch` 위에서 마우스 커서를 위아래로 움직이면 부제목의 `Current y:` 뒤 숫자가 커서 위치의 y좌표로 실시간으로 바뀐다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(마우스 커서의 y좌표, 실시간)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-11 — Sketch.smartStrokeJoining [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 그림판의 `smartStrokeJoining`을 `mc1`의 1번 선택 여부로 정한다.
  - `sketch1:1` `smartStrokeJoining: when mc1.isSelected(1) true otherwise false`
- 확정 문장에 붙은 보충 (판정 문장이 아님):
  - LLM-1, LLM-2, LLM-3의 핵심 해석은 모두 맞다.
  - LLM-1처럼 끝점이 맞닿은 획을 자동으로 하나로 합친다는 설명이 가장 구체적이다.
  - 채택은 LLM-1 우선이다.
- 관찰예측: `mc1`에서 1번 보기를 선택한 상태로 선을 긋고 그 끝점 근처에서 새 선을 이어 그으면 두 획이 하나로 합쳐진다. 다른 보기를 선택하면 별개의 획으로 남는다 (LLM-1 보충).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-12 — Sketch.narration [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 그림판의 첫 번째 `narration`에 획 수를 넣은 문자열을 지정한다.
  - `inflectionSketch:1` `narration(1): "${this.sketch.strokeCount} strokes"`
- 관찰예측: 화면에는 눈에 보이는 변화가 없고, 스크린 리더에서 `"0 strokes"`, `"1 strokes"`처럼 읽힌다.
- 표현판단: 사용자 검토(2026-10-22): 1·2번 답(스크린 리더용 설명)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-13 — Sketch.bounds [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 그림판의 `bounds`를 고정 좌표 범위로 둔다.
  - `레이블 없는 그림판:1` `bounds: makeBounds(-5,15,-15,5)`
- 관찰예측: 그림판의 좌표 영역이 기본 범위 대신 x −5~15, y −15~5로 맞춰져 보인다.
- 표현판단: 사용자 검토(2026-10-22): 1·3번 답(인자 순서를 그대로 말한 답)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-14 — Sketch.previewCurrentStroke [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 그림판의 `previewCurrentStroke`를 `false`로 둔다.
  - `레이블 없는 그림판:1` `previewCurrentStroke: false`
- 확정 문장에 붙은 보충 (판정 문장이 아님):
  - LLM-1이 맞다.
  - 채택은 LLM-1이다.
- 관찰예측: 마우스를 누르고 드래그하는 동안에는 선이 보이지 않다가, 버튼을 떼어 획을 마치는 순간 완성된 선이 나타난다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-15 — Sketch.allowEraser [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 그림판의 `allowEraser`를 `false`로 둔다.
  - `레이블 없는 그림판:1` `allowEraser: false`
- 확정 문장에 붙은 보충 (판정 문장이 아님):
  - LLM-1이 맞다.
  - 채택은 LLM-1이다.
- 관찰예측: 도구 모음에 다른 그리기 도구는 보이지만 지우개 아이콘은 나타나지 않아 획을 지우개로 지울 수 없다 (LLM-1 보충).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-16 — Sketch.background [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 그림판의 `background`를 다른 컴포넌트 `graph`의 계산기 상태로 만든 레이어로 둔다.
  - `레이블 없는 그림판:1` `background: graphLayer(graph.calculatorState)`
- 관찰예측: 그림판 뒤에 `graph`의 그래프 내용이 배경으로 보이고(레이블 등 일부 제외), 그 위에 그림을 그린다.
- 표현판단: 사용자 검토(2026-10-22): "레이블을 포함해 일부 정보는 나타나지 않는다" 정도로 안내하라고 지시했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-17 — Sketch.disableSketch [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 그림판의 `disableSketch`를 획 수가 5 이상인지로 정한다.
  - `레이블 없는 그림판:1` `disableSketch: this.sketch.strokeCount >= 5`
- 관찰예측: 네 번째 획까지는 정상적으로 그려지고, 다섯 번째 획을 마치면 그리기 도구가 잠겨 추가 그리기나 지우기를 할 수 없다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답을 채택하고, 잠기면 아무것도 할 수 없다고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-18 — Sketch.hideSketch [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 그림판의 `hideSketch`를 `sketchChoice`의 2번 선택 여부로 정한다.
  - `레이블 없는 그림판:1` `hideSketch: sketchChoice.isSelected(2)`
- 관찰예측: 2번을 선택하면 그린 내용이 보이지 않고, 다른 보기를 선택하면 다시 보인다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(그린 선만 사라지고 컴포넌트·배경은 남음)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-19 — Sketch.initialTool [sink] — 3일치
- 코드 요지: 그림판의 처음 선택 도구를 직선으로 둔다.
  - `레이블 없는 그림판:1` `initialTool: sketchTools.line`
- 확정 문장:
  - `initialTool` sink는 `sketchTools.line`이므로, 처음 선택된 도구가 직선 도구이다.
- 관찰예측: 화면에 들어가면 직선 도구가 이미 선택되어 있다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-20 — Sketch.initialColor [sink] — 3일치
- 코드 요지: 그림판의 처음 색을 보라색으로 둔다.
  - `레이블 없는 그림판:1` `initialColor: colors.purple`
- 확정 문장:
  - `initialColor` sink는 `colors.purple`이므로, 처음 선택된 색이 purple이다.
- 관찰예측: 색을 바꾸지 않고 처음 그리는 획이 보라색이다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-21 — Sketch.availableColors [sink] — 3일치
- 코드 요지: 그림판에서 고를 수 있는 색을 세 가지로 제한한다.
  - `레이블 없는 그림판:1` `availableColors: colors.list(colors.red, colors.green, rgb(163,104,229))`
- 확정 문장:
  - `availableColors` sink는 `colors.red`, `colors.green`, `rgb(163,104,229)` 세 색의 목록이다.
- 관찰예측: 색 선택기에 이 세 색이 제공된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `colors.list`와 `rgb` 함수의 세부 동작은 LLM-2가 코드추론으로만 말했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-22 — Sketch.number [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `sketch1`이 `graph1`의 변수 `a`와 창 범위를 받아 쓰고, `graph1`은 `sketch1`의 획을 배경 레이어로 쌓는다.
  - `sketch1:1` `number("a"): graph1.number("a")`
  - `sketch1:4` `bounds: makeBounds(graph1.number("x_m"), graph1.number("x_M"), graph1.number("y_m"), graph1.number("y_M"))`
  - `graph1:1` `background: layerStack(sketchLayer(sketch1.sketch),sketchLayer(sketch1.currentStroke))`
- 관찰예측: `graph1`의 `a`가 바뀌면 `sketch1`도 같은 `a` 값을 갖고, `graph1`의 창을 움직이면 `sketch1`의 창도 따라간다. `sketch1`의 획이 `graph1`의 배경에 나타난다.
- 표현판단: 사용자 검토(2026-10-22): 지시한 문장을 가장 정확한 표현으로 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-23 — Sketch.numberList [sink] — 3일치
- 코드 요지: A-sketch-22와 같은 구성에서 `a` 대신 `numberList("L")`을 `graph1`에서 받아 온다.
  - `sketch1:1` `numberList("L"): graph1.numberList("L")`
  - `sketch1:3` `bounds: makeBounds(graph1.number("x_m"), graph1.number("x_M"), graph1.number("y_m"), graph1.number("y_M"))`
- 확정 문장:
  - `sketch1`의 `numberList("L")` sink는 `graph1.numberList("L")` source를 읽는다.
  - `sketch1`의 `bounds` sink는 `graph1`의 `x_m`, `x_M`, `y_m`, `y_M`으로 만든 `makeBounds`이다.
  - `graph1`의 `background` sink는 `sketch1.sketch`와 `sketch1.currentStroke`를 `sketchLayer`로 바꿔 `layerStack`으로 쌓는다.
- 관찰예측: `graph1`의 `L` 목록과 창 범위가 `sketch1`에 반영되어 두 컴포넌트의 창이 일치하고, `sketch1`의 획이 `graph1` 배경에 보인다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `L`이 `graph1` 안에서 어떻게 정의되는지(LLM-2가 모른다고 함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-24 — Sketch.xAxisLabel [sink] — 3일치
- 코드 요지: 그림판의 x축 이름을 표의 (1,1) 셀 내용으로 만든다.
  - `레이블 없는 그림판:1` `xAxisLabel: "Time (${xAxisLabelTable.cellContent(1,1)})"`
- 확정 문장:
  - `xAxisLabel` sink는 `"Time ("` 뒤에 `xAxisLabelTable.cellContent(1,1)` source 값을 넣고 `")"`로 닫은 문자열이다.
- 관찰예측: 표 (1,1) 셀의 내용이 바뀌면 x축 이름의 괄호 안 내용도 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-25 — Sketch.yAxisLabel [sink] — 3일치
- 코드 요지: 그림판의 y축 이름을 표의 (1,1) 셀 내용으로 만든다.
  - `레이블 없는 그림판:1` `yAxisLabel: "Remaining Ice Cream (${yAxisLabelTable.cellContent(1,1)})"`
- 확정 문장:
  - `yAxisLabel` sink는 `"Remaining Ice Cream ("` 뒤에 `yAxisLabelTable.cellContent(1,1)` source 값을 넣고 `")"`로 닫은 문자열이다.
- 관찰예측: 표 (1,1) 셀의 내용이 바뀌면 y축 이름의 괄호 안 내용도 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-27 — Sketch.function [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 수식 입력창의 LaTeX를 `x`에 대한 함수로 만들어 그림판의 `function("f")`에 넣는다.
  - `레이블 없는 그림판:1` `function("f"): simpleFunction(equationInput.latex, "x")`
- 관찰예측: `equationInput`에 유효한 식을 입력하면 그 식이 함수 `f`로 반영된다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(배경 그래프의 f로 그려짐)을 채택하고, 그래프를 그림판으로 바꾼 컴포넌트의 성질을 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-28 — Sketch.trace [sink] — 3일치
- 코드 요지: 그림판의 `trace`를 `false`로 둔다.
  - `레이블 없는 그림판:1` `trace: false`
- 확정 문장:
  - `trace` sink는 `false`이므로 `trace` 기능이 꺼진다.
- 관찰예측: `trace`가 표시되지 않는다.
- 표현판단: LLM-1은 배경 그래프의 곡선 위 좌표 추적 팝업이 사라진다고 구체적으로 설명했으나 LLM-3은 세부 `trace` 동작을 모른다고 했다. 확정 문장에는 기능이 꺼진다는 데까지만 썼다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `trace`가 구체적으로 무엇을 추적하고 어떻게 표시하는지.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-29 — Sketch.resetOnChange [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 완료된 획과 현재 획을 합친 `totalSketch`의 획 수로 `resetOnChange` 값을 `"0"`/`"1"` 중에서 정한다.
  - `레이블 없는 그림판:1` `totalSketch = mergeSketches(this.sketch,this.currentStroke)`
  - `레이블 없는 그림판:3` `resetOnChange: when totalSketch.strokeCount < 2 "0" otherwise "1"`
- 관찰예측: 한 획으로만 그리는 동안은 값이 `"0"`이고, 두 번째 획이 시작되면 `"1"`로 바뀌어 첫 획이 지워진다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(첫 획이 사라지고 새 획만 남음)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-30 — Sketch.correct [sink] — 3일치
- 코드 요지: Sketch의 `correct` sink를 `this.sketch.totalStrokeLength`가 두 경계값 사이일 때 참이 되도록 설정한다.
- 확정 문장: `sketch1`의 `correct` sink는 `this.sketch.totalStrokeLength > 6.6 and this.sketch.totalStrokeLength < 6.8`이 참일 때 참이 된다. 두 경계는 모두 초과·미만이라 6.6과 6.8 자체는 포함되지 않는다.
  - 인용: `correct: this.sketch.totalStrokeLength > 6.6 and this.sketch.totalStrokeLength < 6.8`
- 관찰예측: 그려진 stroke들의 총 길이가 6.6 초과 6.8 미만인 구간에서만 `correct`가 참이고, 그 밖의 길이에서는 참이 아니다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `totalStrokeLength`의 길이 단위(좌표 단위)는 코드에 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-31 — Sketch.warning [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: master는 `subtitle` sink에 안내문을 넣고, 그림판은 `warning` sink를 `this.sketch.strokeCount`에 따라 빈 문자열 또는 경고문으로 정한다.
- 관찰예측: stroke가 0개 또는 1개이면 경고 문구가 비어 있고, stroke가 2개 이상이 되면 "More than one stroke is used." 경고 문구가 나타난다.
- 표현판단: LLM-1은 경고가 "교사 대시보드에 주황색 경고 아이콘"으로 뜬다고 썼고, LLM-2·3은 표시 위치를 같은 방식으로 말하지 않았다. 사용자 판정으로 LLM-1을 채택했지만, 교사 대시보드 아이콘 주장은 확정 문장에 넣지 않았다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-32 — Sketch.readOnly [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 그림판은 `readOnly: true`로 두고, 수식 답변은 `correct: this.numericValue = 10`으로 정답 조건을 정한다.
- 관찰예측: 학생은 그림판에 자유롭게 풀이 과정을 그릴 수 있으며, 그림판에 무엇을 그리든 수식 입력창에 10을 입력하면 화면 전체가 정답으로 표시된다. (LLM-1 보충)
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-33 — Sketch.pointLabel [sink] — 3일치
- 코드 요지: 그림판의 점 `A`, `B`의 `pointLabel` sink를 `table1`의 (1,1), (1,2) 셀 내용으로 정하되, 셀이 비어 있으면 기본 문자를 쓴다.
- 확정 문장:
  - `pointLabel("A")`는 `isBlank(table1.cellContent(1,1))`이면 `"A"`, 아니면 `table1.cellContent(1,1)` 값이다.
  - `pointLabel("B")`는 `isBlank(table1.cellContent(1,2))`이면 `"B"`, 아니면 `table1.cellContent(1,2)` 값이다.
- 관찰예측: 표의 해당 셀이 비어 있으면 점 라벨이 `A`, `B`로 보이고, 셀에 텍스트가 들어가면 그 텍스트가 점 라벨이 된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `isBlank`가 공백 문자만 있는 셀을 빈 것으로 보는지는 코드에 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-sketch-34 — Sketch.hidden [sink] — 3일치
- 코드 요지: 그림판의 `hidden` sink를 `choice1.isSelected(1)`로 설정한다.
- 확정 문장: 그림판의 `hidden` sink는 `choice1.isSelected(1)` 값을 따른다. 즉 `choice1`의 첫 번째 선택지가 선택되면 그림판이 숨겨진다.
  - 인용: `hidden: choice1.isSelected(1)`
- 관찰예측: `choice1`에서 첫 번째 선택지를 선택하면 그림판이 화면에서 숨겨진다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


---

## note

### A-note-01 — Note.content [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `nameInput0.content`를 변수 `myName`으로 읽어 환영 문구에 보간해 메모의 `content`로 설정한다.
  - `레이블 없는 메모:1` `myName = nameInput0.content`
  - `레이블 없는 메모:3` `content: "Welcome to the activity, ${myName}!"`
- 관찰예측: 입력창에 입력한 이름이 환영 문구에 나타난다.
- 표현판단: 사용자 검토(2026-10-22): 1·2번 답(입력 즉시 반영)을 채택했다. 제출 버튼과 제출 조건이 없다는 점을 근거로 들었다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### A-note-02 — Note.hidden [sink] — 3일치
- 코드 요지: 메모의 `hidden`을 `button1.timeSincePress() > 0`으로 두고, `button1`에는 `resetLabel`을 지정한 화면이다.
  - `레이블 없는 메모:1` `hidden: button1.timeSincePress() > 0`
  - `button1:1` `resetLabel: "Bring me back!"`
- 확정 문장:
  - 메모의 `hidden` sink는 `button1.timeSincePress()` source가 0보다 크면 참이 되므로, 버튼을 누른 뒤에는 메모가 숨겨진다.
  - `button1`의 `resetLabel` sink는 `"Bring me back!"`를 지정하며, 이 버튼으로 상태를 되돌리면 메모가 다시 나타난다.
- 관찰예측: 처음에는 메모가 보이고, `button1`을 누르면 메모가 사라지며 버튼 글자가 `"Bring me back!"`로 바뀐다(LLM-1·2). 이 버튼을 다시 누르면 메모가 돌아온다.
- 출처: LLM 3일치 (표현 선택: 공식문서 표현(sink/source) 기준, 세부는 가장 정확한 LLM-1)
- 실행검증: 해당 없음
- 비어 있음: 버튼을 누르기 전의 기본 라벨, reset이 되돌리는 정확한 범위(LLM-2·3이 모른다고 함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


---

## image

### A-image-01 — Image.hidden [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `button1.timeSincePress()`가 0보다 크면 이미지를 숨기고, `button1`의 `resetLabel`은 `"Show Image"`로 설정한다.
  - `레이블 없는 이미지:1` `hidden: button1.timeSincePress() > 0`
  - `button1:1` `resetLabel: "Show Image"`
- 관찰예측: `button1`을 누르면 이미지가 숨겨지고, Reset 뒤에는 이미지가 다시 보인다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답을 채택하고 누름→사라짐→리셋 라벨→초기화의 순서를 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 
