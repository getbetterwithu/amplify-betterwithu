# CL 적용 예제 층 — 답변형 컴포넌트 (자유 답변, 수식 답변, 객관식, 정렬 리스트) (examples-B.md)

> **이 파일의 항목은 정의가 아니다.** 특정 예제 코드에 대해 여러 해석이 일치한 사례(3일치)와, 판정 항목에 붙어 있던 보충이다. Amplify 실행 검증 전이다.
> 새 코드를 해석할 때 정의처럼 인용하지 않는다. 정의는 공식 문서에서 먼저 찾고, 여기 항목은 "비슷한 코드에서는 ~로 해석됩니다"처럼 사례로만 인용한다. 답에는 *추가검증필요* 태그로 쓴다.
> 항목 제목: `### <ID> — <화면 제목> — <등급>`. 각 항목 끝의 `검토` 줄은 사용자 검토용이다.

항목 69건. 컴포넌트별로 절을 나눴다.


---

## math-response

### B-math-response-01 — Math Input.latex [source] — 3일치
- 코드 요지: 그래프의 `function("f")`를 `simpleFunction(expressionInput.latex,"x")`로 정하고, 메모 `content`에 같은 `latex`를 넣는다.
- 확정 문장:
  - `function("f")` sink는 `simpleFunction(expressionInput.latex,"x")`로, `expressionInput.latex` source를 변수 `x`의 함수로 만든 것이다.
  - 메모의 `content` sink는 `expressionInput.latex`를 백틱 안에 넣은 문장 `"Trying to graph `${expressionInput.latex}` as a function of `x`."`이다.
- 관찰예측: 수식을 입력하면 그래프에 그 식이 `f`로 그려지고, 메모에는 입력한 수식이 문장 안에 수식 표기로 나타난다. 수식을 바꾸면 둘이 함께 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 잘못된 식이 입력될 때 그래프 동작, `simpleFunction`이 허용하는 latex 형식의 범위는 코드에 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-02 — Math Input.numericValue [source] — 3일치
- 코드 요지: `inspectInput.numericValue`를 그래프 변수 `a`에 보내고, 메모는 `a`가 화면 범위 밖이면 경고를 덧붙인다.
- 확정 문장:
  - `cubicGraph`의 `number("a")` sink는 `inspectInput.numericValue`이다.
  - 메모의 `feedback`은 `cubicGraph.number("a") < -9.3 or cubicGraph.number("a") > 10`이면 `"\n\nYour point is off the screen."`, 그 외에는 `""`이다.
  - 메모의 `content` sink는 `"Enter the value for x you want to inspect.${feedback}"`이다.
- 관찰예측: 입력값이 -9.3 이상 10 이하이면 안내문만 보이고, 그 범위를 벗어나면 안내문 아래에 "Your point is off the screen."이 추가된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 입력이 비어 있을 때 `a`의 값과 경고 조건이 어떻게 되는지는 코드에 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-03 — Math Input.timeSinceSubmit [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `raceButton.timeSinceSubmit`을 `t_0`에, `firstDefinedValue(raceButton.numericValue,1)`을 `s_{peed}`에 보낸다.
- 관찰예측: 제출 후 `t_0`가 제출 후 경과 시간에 따라 변한다. `numericValue`가 없을 때 `s_{peed}`에는 1이 쓰인다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(제출 후 t_0가 0부터 증가)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-04 — Math Input.submitted [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `newInspectInput`이 제출되었을 때만 그 `numericValue`를 `a`로 쓰고, 제출 전에는 10000을 쓴다.
- 관찰예측: 제출 전에는 `a`가 10000이지만 경고 조건에 `submitted`가 들어 있어 경고는 보이지 않는다. 범위 밖 값을 제출하면 경고가 보인다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(수정을 시작하면 submitted가 거짓이 됨)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-05 — Math Input.explainContent [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: master `subtitle`, 그래프의 `t_0`·`N`, 메모의 `explainContent` 표시, `input`의 `explainPrompt`를 설정한다.
- 관찰예측: 설명(`explainContent`)이 비어 있으면 메모에 전략 문구가 나타나지 않고, 설명을 적으면 그 텍스트가 안내문 뒤에 나타난다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(최대 20초, 제출 후 설명칸이 나타남)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-06 — Math Input.history [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `newInspectInputFinal`이 `capture("xval"): this.numericValue`로 값을 기록하고, 그래프는 `history("xval")`을 `numberList("x_{history}")`에 받는다.
- 관찰예측: 값을 여러 번 제출하면 `x_{history}` 목록에 capture된 값들이 반영된다. 제출 후 메모에는 마지막 `xval`이 현재 검사 값으로 보이고, 범위 밖이면 경고도 함께 보인다.
- 표현판단: 사용자 검토(2026-10-22): 1·2번 답(제출할 때마다 기록·누적)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-07 — Math Input.lastValue [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 그래프의 `number("x_{last}")` sink를 `newInspectInputFinal.lastValue("xval")`로 설정한다.
- 관찰예측: 값을 제출하면 `x_{last}`와 메모의 `x=` 표기가 마지막 capture 값으로 바뀌고, 범위 밖이면 경고가 추가된다.
- 표현판단: 사용자 검토(2026-10-22): 제출을 눌러야 기록된다고 판정했고, 1번 답(수정 중에도 lastValue 유지)은 틀렸다고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-08 — Math Input.submitCount [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `guess.submitted`일 때 `guess.numericValue`를 `G_{uessX}`로 보내고, 메모에 `guess.submitCount`를 표시한다.
- 관찰예측: 제출 전 `G_{uessX}`는 1000이고, 제출 후에는 제출한 입력값으로 바뀐다. 제출할수록 메모의 횟수 표기가 증가한다.
- 표현판단: 사용자 검토(2026-10-22): 제출 전에도 "You've guessed 0 times."가 보인다고 확인했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-09 — Math Input.initialLatex [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `expInput2`는 `initialLatex`로 `f\left(x\right)=`를 입력창에 미리 넣고, 그래프는 제출된 `expInput2.latex`만 `simpleFunction(latex,"x")`로 함수 `f`에 쓴다.
- 관찰예측: 입력창에 처음부터 `f(x)=`가 들어 있고, 제출 전에는 빈 `latex`가 함수에 연결되며, 제출 후에는 입력한 `latex`가 `f`에 반영된다.
- 표현판단: 사용자 검토(2026-10-22): `f(x)=` 뒤에 넣든 지우고 넣든 둘 다 작동한다고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-10 — Math input.placeholderLatex [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 수식 답변의 `placeholderLatex` sink를 `(x,y)`로 설정한다.
- 관찰예측: 입력란이 비어 있을 때 `(x,y)`가 안내용으로 보인다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(연한 회색, 타이핑하면 사라짐)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-11 — Math Input.disableEvaluation [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `fractionChecker`의 `disableEvaluation` sink를 `true`로 설정한다.
- 관찰예측: `fractionChecker`에 `1/2`나 `3+4`를 입력해도 입력창 오른쪽에 `0.5`나 `7`이 표시되지 않는다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-12 — Math Input.errorMessage [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `fractionChecker`의 `errorMessage` sink를 `isUndefined(this.numericValue)`에 따라 오류 문구 또는 빈 문자열로 정한다.
- 관찰예측: 유효한 수로 해석되지 않는 입력이면 "You have to type a valid number."가 보이고, 유효한 수이면 그 문구가 사라진다.
- 표현판단: 사용자 검토(2026-10-22): 숫자(pi 포함)는 통과, 문자는 제출 비활성화와 오류 메시지라고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-13 — Math Input.suffix [sink] — 3일치
- 코드 요지: `input`의 `suffix` sink를 `this.numericValue`가 1 또는 -1인지에 따라 "person"과 "people"로 정한다.
- 확정 문장:
  - `input`의 `suffix` sink는 `this.numericValue = 1 or this.numericValue = -1`이면 `"person"`, 그 외에는 `"people"`이다.
  - `(master)`의 `subtitle`은 "How many people are there in the graph display?"이고, 그래프의 `number("t_0")`은 `input.timeSinceSubmit(20)`, `number("N")`은 `input.numericValue`이다.
- 관찰예측: 입력값이 1 또는 -1이면 입력칸 옆에 "person"이, 그 밖의 수에는 "people"이 표시된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `timeSinceSubmit(20)`의 인자 20의 의미, 입력이 비어 있을 때 suffix(조건식상 "people"으로 평가될 것으로 LLM-2가 추정)는 확정되지 않았다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-14 — Math Input.capture [sink] — 3일치
- 코드 요지: `newInspectInputFinal`이 `capture("xval"): this.numericValue`로 값을 기록하고, 그 history가 그래프에, 마지막 값이 메모에 쓰인다.
- 확정 문장:
  - `newInspectInputFinal`의 `capture("xval")` sink는 `this.numericValue`이다.
  - `cubicGraph`의 `numberList("x_{history}")` sink는 `newInspectInputFinal.history("xval")`이다.
  - 메모의 `feedback`은 `submitted`이고 마지막 `xval`이 범위 밖이면 경고, 그렇지 않고 `submitted`이면 마지막 `xval`을 현재 검사 값으로 표시, 그 외에는 `""`이다.
- 관찰예측: 값을 제출할 때마다 capture된 값이 history에 반영되고, 메모에는 마지막 값이 나타난다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `capture`가 정확히 어느 시점에 값을 기록하고 history에 추가하는지는 코드에 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-15 — Math Input.submitLabel [sink] — 3일치
- 코드 요지: `input`의 `submitLabel` sink를 `"Guess"`로 설정한다.
- 확정 문장:
  - `input`의 `submitLabel` sink는 `"Guess"`로, 제출 버튼의 글자를 정한다.
  - 같은 화면에서 `(master)`의 `subtitle`은 "How many people are there in the graph display?"이고, 그래프의 `number("t_0")`은 `input.timeSinceSubmit(20)`, `number("N")`은 `input.numericValue`이다.
- 관찰예측: `input`의 제출 버튼에 "Guess"가 표시된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `timeSinceSubmit(20)`의 인자 20의 의미는 코드에 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-16 — Math Input.resetLabel [sink] — 3일치
- 코드 요지: Math Input의 `resetLabel` sink에 문자열을 넣는다. 같은 화면의 graph는 `input.timeSinceSubmit(20)`을 `t_0`에, `input.numericValue`를 `N`에 연결한다.
  - `input:1` → `resetLabel: "Guess again"`
- 확정 문장: Math Input의 `resetLabel` sink는 reset control(다시 입력하게 하는 버튼)의 label 문구를 정한다. 이 코드에서는 그 문구가 "Guess again"이다.
- 관찰예측: reset control이 화면에 나타나면 그 label은 "Guess again"이다.
- 출처: LLM 3일치 (표현 선택: 공식문서 표현 sink + LLM-3 표현)
- 실행검증: 해당 없음
- 비어 있음: reset control이 어떤 조건에서 나타나는지(항상 노출되는지, 제출 후에만 나타나는지). LLM-1과 LLM-3이 모른다고 답했고 코드에도 조건이 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-17 — Math Input.clearOnReset [sink] — 3일치
- 코드 요지: Math Input의 `clearOnReset` sink를 true로 둔다.
  - `input:1` → `clearOnReset: true`
- 확정 문장: `clearOnReset`이 true이면 Math Input을 reset할 때 입력란의 기존 값이 지워진다.
- 관찰예측: reset 뒤에는 이전에 입력한 값이 사라지고 빈 입력란이 된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-2)
- 실행검증: 해당 없음
- 비어 있음: reset이 `numericValue`와 `explainContent`를 모두 지우는지, 그중 일부만 지우는지(LLM-3이 모른다고 답함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-18 — Math Input.submitDisabled [sink] — 3일치
- 코드 요지: Math Input의 `submitDisabled` sink에 `this.submitCount`를 이용한 조건식을 넣는다.
  - `input:1` → `submitDisabled: this.submitCount >= 3`
- 확정 문장: `submitCount`가 3 이상이 되면 `submitDisabled`가 true가 되어 submit을 사용할 수 없게 된다. 즉 세 번 제출한 뒤에는 더 제출하지 못한다.
- 관찰예측: 세 번 제출한 뒤에는 submit 버튼을 누를 수 없다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-2)
- 실행검증: 해당 없음
- 비어 있음: reset을 하면 `submitCount`가 초기화되어 submit이 다시 활성화되는지(LLM-2, LLM-3이 모른다고 답함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-19 — Math Input.initialText [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: Math Input의 `initialText` sink에 문자열을 넣는다.
  - `input:1` → `initialText: "My strategy was . . ."`
- 관찰예측: 숫자를 제출해 설명 입력칸이 나타나면, 그 칸에 처음부터 "My strategy was . . ."가 채워져 있다.
- 표현판단: 사용자 검토(2026-10-22): 1·2번 답(제출 뒤 나타나는 설명칸의 초기 문구)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-20 — Math Input.explainPrompt [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: Math Input의 `explainPrompt` sink에 질문 문자열을 넣는다.
  - `input:1` → `explainPrompt: "What strategy did you use to make your estimate?"`
- 관찰예측: explain 입력 영역이 나타나면 이 질문이 prompt로 보인다.
- 표현판단: 사용자 검토(2026-10-22): 1·2번 답(제출 후 열리는 설명칸 위에 표시)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-21 — Math Input.showPeerResponses [sink] — 3일치
- 코드 요지: input에 `showPeerResponses`를 true로 두고, 메모와 객관식 문제는 `input.submitted`가 아니면 hidden으로 둔다.
  - `input:1` → `showPeerResponses: true`
  - `레이블 없는 메모:1`, `레이블 없는 객관식 문제:1` → `hidden: not(input.submitted)`
- 확정 문장:
  - `showPeerResponses`를 true로 두면 Math Input에서 peer responses(다른 학생들의 응답) 표시가 켜진다.
  - 메모와 객관식 문제는 `input.submitted`가 참이 되기 전에는 hidden이고, 제출 후에는 hidden 조건이 풀려 나타난다.
- 관찰예측: input을 제출하기 전에는 메모와 객관식 문제가 보이지 않고, 제출하면 둘 다 나타난다. peer responses 표시도 활성화된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: peer responses가 화면 어디에 어떤 형태로 보이는지(LLM-2, LLM-3이 모른다고 답함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-22 — Math Input.showExplain [sink] — 3일치
- 코드 요지: Math Input의 `showExplain` sink가 `numericValue`와 `timeSinceSubmit()` 두 조건의 결합으로 정해진다.
  - `input:1` → `showExplain: this.numericValue = 86 and this.timeSinceSubmit() > 8.6`
- 확정 문장: `numericValue`가 86이고 `this.timeSinceSubmit()`이 8.6보다 클 때만 `showExplain`이 true가 되어 explain이 표시된다. 다른 값을 제출했을 때는 표시되지 않는다.
- 관찰예측: 86을 제출하고 제출 후 경과 값이 8.6을 넘으면 explain이 나타나고, 86이 아닌 값에서는 나타나지 않는다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 표현판단: LLM-1과 LLM-2는 8.6을 "초"로 읽었고 LLM-3은 `timeSinceSubmit`의 단위를 모른다고 했다. 단위는 확정 문장에 쓰지 않고 "8.6보다 크면"으로만 적었다. LLM-1이 말한 "그래프 애니메이션 진행"은 세 답에 공통이 아니어서 뺐다.
- 실행검증: 해당 없음
- 비어 있음: `timeSinceSubmit()` 값의 단위.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-23 — Math Input.correct [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 컴포넌트 `fractionChecker`의 `correct` sink를 자기 자신의 `numericValue` 비교로 정한다.
  - `fractionChecker:1` → `correct: fractionChecker.numericValue = 0.05`
- 관찰예측: `numericValue`가 0.05로 평가되는 입력은 correct 상태가 되고, 그 밖의 값은 correct가 아니다.
- 표현판단: 사용자 검토(2026-10-22): 1/20도 정답으로 인정된다고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-24 — Math Input.readOnly [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: Math Input의 `readOnly` sink를 true로 둔다.
  - `레이블 없는 수식 답변:1` → `readOnly: true`
- 확정 문장에 붙은 보충 (판정 문장이 아님):
  - LLM-1이 완벽히 맞고, LLM-2와 LLM-3은 틀렸다.
  - (LLM-1 보충) 대시보드에는 정오답 대신 완료 여부(점 표시 등)만 나타난다. ※ 단정 금지: 공식 문서의 readOnly 설명과 표시 방식이 다르다 (reference/conflicts.md 1번). 실행 검증 전까지 이 보충은 사실로 말하지 않는다.
- 관찰예측: 학생은 평소처럼 수식을 입력할 수 있다. 입력해도 대시보드에서 정오답 판정은 받지 않는다. (LLM-1 보충) 오답 표시나 경고 대신 상호작용 완료(회색 점 등)로 보인다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-25 — Math Input.warning [sink] — 3일치
- 코드 요지: Math Input의 `warning` sink를 `numericValue` 조건식으로 정한다.
  - `레이블 없는 수식 답변:1` → `warning: when this.numericValue <= 0 "Enter a positive number." otherwise ""`
- 확정 문장: `numericValue`가 0 이하이면 `warning`이 "Enter a positive number."가 되고, 그렇지 않으면 빈 문자열이 된다.
- 관찰예측: 0이나 음수를 입력하면 warning 문구가 생기고, 양수를 입력하면 사라진다(빈 문자열).
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 표현판단: warning이 어디에 보이는지가 갈렸다. LLM-1은 교사 대시보드의 주황색 경고 아이콘이라고 적었고, LLM-2는 교사 화면으로 "추정"하면서 학생 화면 노출 여부는 모른다고 했으며, LLM-3은 위치를 쓰지 않았다. 표시 위치는 확정 문장에서 뺐다.
- 실행검증: 해당 없음
- 비어 있음: warning이 표시되는 화면(교사 대시보드인지, 학생 화면에도 보이는지), `numericValue`가 정의되지 않았을 때 `<= 0` 비교 결과(LLM-2, LLM-3이 모른다고 답함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-26 — Math Input.resetOnChange [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: graph가 `input.timeSinceSubmit(1)`을 `t_0`에, `input.numericValue`를 `a_{rea}`에 연결하고, input의 `resetOnChange`에는 graph의 `v`와 `h` 값을 이어 붙인 문자열을 넣는다.
  - `input:1` → `resetOnChange: "${graph.number("v")}${graph.number("h")}"`
- 관찰예측: graph에서 `v` 또는 `h` 값이 바뀌어 결합 문자열이 달라지면 input이 reset된다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(제출 상태 초기화)을 대체로 채택하고, 제출된 숫자도 사라져 빈 칸이 된다고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-27 — Math Input.showSubmitButton [sink] — 3일치
- 코드 요지: Math Input의 `showSubmitButton` sink를 false로 둔다.
  - `레이블 없는 수식 답변:1` → `showSubmitButton: false`
- 확정 문장: `showSubmitButton`이 false이면 이 Math Input에는 submit 버튼이 표시되지 않는다.
- 관찰예측: 입력창에 값을 넣어도 submit 버튼이 보이지 않는다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: submit 버튼이 없을 때 `submitted`가 참이 되는 경로가 있는지(LLM-2가 모른다고 답함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-math-response-28 — Math Input.hidden [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 메모는 `input1.submitted`일 때만 입력한 식(`input1.latex`)을 content에 덧붙이고, `input1`은 `timeSinceSubmit()`이 0보다 크면 hidden이 된다.
  - `레이블 없는 메모:1` → `Latex = when input1.submitted "\n\nYour expression: `${input1.latex}`" otherwise ""`
  - `input1:1` → `hidden: this.timeSinceSubmit() > 0`
- 관찰예측: 제출 전에는 메모에 질문만 보이고 `input1`이 보인다. 제출 후에는 메모에 입력한 식이 덧붙고 `input1`은 숨겨진다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(제출 즉시 입력창이 사라짐)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


---

## multiple-choice

### B-multiple-choice-01 — Choice.isSelected [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: Choice의 `isSelected(n)` source를 graph의 `M`과 choice 자신의 `explainPrompt`, `initialText`, `correct`, `warning`에 쓴다.
  - `graph:1-5` → `number("M")`: 1, 2, 3번 선택에 따라 1, 2, 3, 아니면 0
  - `choice:15` → `correct: this.isSelected(3)`
- 관찰예측: 보기를 고르면 `M` 값과 explain의 질문·초기 문장이 선택한 번호에 맞게 바뀐다. 3번만 correct이고, 아무것도 고르지 않으면 warning이 생긴다.
- 표현판단: warning 표시 위치는 A-sketch-31과 같은 방식으로 판정됐다(보기 2 채택). 미리보기에서는 뜨고, 교사 대시보드·학생 화면 표시는 확인 필요로 남긴다. correct가 정답 표시로 보이는 위치는 확정 문장에 넣지 않았다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-02 — Choice.timeSinceSubmit [source] — 3일치
- 코드 요지: 객관식의 `timeSinceSubmit()` source를 graph의 `t_0`에 연결한다.
  - `레이블 없는 그래프:1` → `number("t_0"): choice.timeSinceSubmit()`
- 확정 문장: `choice.timeSinceSubmit()`은 choice를 제출한 뒤의 경과 시간 source이고, 이 값이 graph의 `t_0`로 전달된다.
- 관찰예측: choice를 제출하면 `t_0` 값이 시간에 따라 변한다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 표현판단: LLM-1은 값이 "0에서부터 증가"하고 단위는 "초"라고 적었고, LLM-2는 0부터 증가한다고 하면서 제출 전 값은 모른다고 했으며, LLM-3은 단위를 모른다고 했다. 시작값, 제출 전 값, 단위는 확정 문장에서 뺐다.
- 실행검증: 해당 없음
- 비어 있음: 제출 전 `t_0` 값, 시간 단위.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-03 — Choice.submitted [source] — 3일치
- 코드 요지: 메모가 `choice.submitted`일 때만 감사 문구를 content에 덧붙인다.
  - `레이블 없는 메모:1` → `thankYou = when choice.submitted "\n\nThank you for your response" otherwise ""`
  - `레이블 없는 메모:3` → `content: "How many pets do you have? ${thankYou}"`
- 확정 문장: `choice.submitted`는 choice가 제출되었는지를 돌려주는 source다. 제출되면 `thankYou`는 "Thank you for your response" 문구를 담고, 아니면 빈 문자열이다. content는 질문 뒤에 `thankYou`를 붙인다.
- 관찰예측: 제출 전에는 메모에 "How many pets do you have?"만 보이고, 제출하면 그 아래에 "Thank you for your response"가 추가로 보인다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-04 — Choice.explainContent [source] — 3일치
- 코드 요지: 메모가 `choice.isSelected(1)`과 `choice.explainContent`를 읽어 content를 바꾼다.
  - `레이블 없는 메모:1` → `preference = when choice.isSelected(1) "like" otherwise "dislike"`
  - `레이블 없는 메모:4-5` → `when isBlank(choice.explainContent) "Do you like chocolate?"` / `otherwise "You ${preference} chocolate because ... \n\n${choice.explainContent}"`
- 확정 문장:
  - `choice.explainContent`는 choice의 설명(explain) 입력에 들어 있는 텍스트를 돌려주는 source다.
  - `explainContent`가 비어 있으면 메모는 질문 "Do you like chocolate?"만 보여 준다.
  - 비어 있지 않으면 "You like(또는 dislike) chocolate because ..." 문장 뒤에 설명 내용을 붙여 보여 준다.
  - `preference`는 1번이 선택되면 "like", 그 밖의 모든 경우(선택이 없는 경우 포함)에는 "dislike"다.
- 관찰예측: 설명이 비어 있는 동안에는 질문만 보이고, 설명을 쓰면 메모가 선택에 따른 like/dislike 문장과 쓴 설명으로 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 1번 외 선택이나 선택 없음에서 "dislike"가 의도된 값인지(LLM-3이 모른다고 답함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-05 — Choice.submitCount [source] — 3일치
- 코드 요지: 메모가 `mc4.submitCount`와 `mc4.submitted`로 시도 횟수 문구를 만들고, mc4는 보기 문구를 정한다.
  - `레이블 없는 메모:1` → `numSubmits = mc4.submitCount`
  - `레이블 없는 메모:5` → `when not(numSubmits = 1) "s"`
  - `mc4:1-3` → `choiceContent(1)` "Apples", `choiceContent(2)` "Bananas", `choiceContent(3)` "Strawberries"
- 확정 문장:
  - `mc4.submitCount`는 mc4의 제출 횟수를 돌려주는 source다.
  - `pluralizer`는 횟수가 1이 아니면 "s", 1이면 빈 문자열이다.
  - `mc4.submitted`가 참이면 `feedback`이 "That's incorrect."와 "You have tried N time(s) so far."를 담고, 아니면 빈 문자열이다. content는 "Which of these is best?" 뒤에 `feedback`을 붙인다.
  - `choiceContent(n)`은 n번 보기의 문구를 정한다. 여기서는 Apples, Bananas, Strawberries다.
- 관찰예측: 보기는 Apples, Bananas, Strawberries로 보인다. 제출할 때마다 N이 늘어, 첫 제출에는 "1 time", 그 뒤에는 "2 times" 식으로 표시된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 이 코드에는 mc4의 `correct` 설정이 없고 feedback은 `submitted`만 보므로, 어떤 보기를 제출하든 "That's incorrect."가 나오는지에 대한 정확한 평가 조건(LLM-3이 모른다고 답함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-06 — Choice.choiceContent [source] — 3일치
- 코드 요지: graph의 점 `P_2` 레이블을 choice1에서 선택된 보기의 `choiceContent(n)`으로 정한다.
  - `레이블 없는 그래프:2` → `when choice1.isSelected(1) choice1.choiceContent(1)`
  - `레이블 없는 그래프:5` → `otherwise "?"`
  - `choice1:1` → `explainPrompt: "What situation does your graph represent?"`
- 확정 문장:
  - `choiceContent(n)`은 n번 보기에 설정된 문구를 돌려주는 source로도 쓰인다.
  - `pointLabel("P_2")`는 1, 2, 3번 선택에 따라 그 보기의 `choiceContent` 문구가 되고, 아무것도 선택되지 않으면 "?"다.
  - `choice1`의 `explainPrompt`는 "What situation does your graph represent?"로 설정된다.
- 관찰예측: 아무것도 선택하지 않으면 `P_2`의 레이블이 "?"이고, 보기를 고르면 그 보기의 문구로 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 여러 보기가 동시에 선택될 때 어느 레이블이 우선하는지(LLM-3이 모른다고 답함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-07 — Choice.choiceContent [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 메모는 `mc4.submitCount`와 `mc4.submitted`로 시도 횟수 문구를 만들고, mc4는 `readOnly: true`와 보기 문구를 설정한다.
  - `mc4:1` → `readOnly: true`
  - `mc4:3-5` → `choiceContent(1)` "Apples", `choiceContent(2)` "Bananas", `choiceContent(3)` "Strawberries"
- 확정 문장에 붙은 보충 (판정 문장이 아님):
  - LLM-1이 맞고, LLM-2와 LLM-3은 틀렸다.
  - (LLM-1 보충) mc4의 보기는 `choiceContent(1)~(3)`에 따라 Apples, Bananas, Strawberries로 보인다.
- 관찰예측: 학생은 보기를 선택하고 제출할 수 있고, 제출하면 메모에 제출 횟수가 들어간 오답 피드백이 나타난다. 보기는 Apples, Bananas, Strawberries다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-08 — Choice.initialText [sink] — 3일치
- 코드 요지: choice의 `initialText`를 선택 번호에 따라 정하고, graph에는 선택·제출 상태를 수로 전달한다.
  - `choice:3` → `when this.isSelected(1) "I think linear is best because ..."`
  - `graph:12` → `number("S"): when choice.submitted 1 otherwise 0`
  - `graph:15` → `number("t"): choice.timeSinceSubmit`
- 확정 문장:
  - `initialText`는 설명(explain) 입력의 초기 문장을 정하며, 1, 2, 3번 선택에 따라 linear, quadratic, exponential에 맞는 "I think ... is best because ..." 문장이 되고 선택이 없으면 빈 문자열이다.
  - graph의 `I`는 1~3번 중 하나라도 선택되면 1, 아니면 0이다. `M`은 선택 번호(1, 2, 3) 또는 0이다. `S`는 `choice.submitted`이면 1, 아니면 0이다. `t`는 `choice.timeSinceSubmit` 값이다.
- 관찰예측: 보기를 고르면 선택에 맞는 초기 문장이 설명 칸에 들어가고, 선택과 제출에 따라 `I`, `M`, `S`, `t`가 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 선택을 바꿀 때 이미 쓴 글이 초기 문장으로 덮어써지는지(LLM-2가 모른다고 답함), `timeSinceSubmit`의 시간 단위(LLM-3이 모른다고 답함). 이 항목의 `graph:15`는 다른 항목과 달리 `choice.timeSinceSubmit`이 괄호 없이 쓰였는데, 세 LLM 모두 이 차이를 다루지 않았다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-09 — Checkboxes.prompt [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 체크박스의 `prompt` sink에 안내 문구를 넣는다.
  - `레이블 없는 체크박스:1` → `prompt: "(Select at most 2 out of 3)"`
- 관찰예측: 체크박스 주변에 "(Select at most 2 out of 3)" 안내 문구가 보인다.
- 표현판단: 사용자 검토(2026-10-22): 가운데 상단에 반투명 회색으로 보인다고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-10 — Choice.showExplain [sink] — 3일치
- 코드 요지: choice의 `showExplain` sink에 2번 보기 선택 여부를 넣는다.
  - `레이블 없는 객관식 문제:1` → `showExplain: this.isSelected(2)`
- 확정 문장: `showExplain`은 `this.isSelected(2)`의 결과로 정해지므로 2번 보기가 선택되었을 때만 explain이 표시된다.
- 관찰예측: 2번을 선택하면 explain이 나타나고, 다른 보기를 선택하거나 선택하지 않으면 나타나지 않는다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: explain으로 나타나는 입력 영역의 정확한 내용(LLM-3이 모른다고 답함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-11 — Choice.maxSelectedChoices [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 체크박스의 `maxSelectedChoices` sink를 2로 둔다.
  - `레이블 없는 체크박스:1` → `maxSelectedChoices: 2`
- 관찰예측: 2개를 선택하면 나머지 보기를 더 고를 수 없게 된다.
- 표현판단: 사용자 검토(2026-10-22): 2개를 고르면 나머지가 즉시 비활성화된다고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-12 — Choice.explainPrompt [sink] — 3일치
- 코드 요지: choice의 `explainPrompt`를 선택 번호에 따라 정하고, graph에는 `I`, `M`, `S`, `t`를 전달한다.
  - `choice:3` → `when this.isSelected(1) "Why is linear the best model?"`
  - `choice:6` → `otherwise ""`
- 확정 문장:
  - `explainPrompt`는 1, 2, 3번 선택에 따라 각각 "Why is linear the best model?", "Why is quadratic the best model?", "Why is exponential the best model?"가 되고, 선택이 없으면 빈 문자열이다.
  - graph의 `I`는 1~3번 중 선택이 있으면 1, 없으면 0이다. `M`은 선택 번호 또는 0이다. `S`는 `choice.submitted`이면 1, 아니면 0이다. `t`는 `choice.timeSinceSubmit` 값이다.
- 관찰예측: 보기를 고를 때마다 explain의 질문이 선택한 모델에 맞게 바뀌고, 선택과 제출에 따라 `I`, `M`, `S`, `t`가 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `timeSinceSubmit`의 시간 단위(LLM-3이 모른다고 답함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-13 — Choice.maxButtonsPerRow [sink] — 3일치
- 코드 요지: 객관식의 `maxButtonsPerRow`를 `graphLeft`의 `n_1` 값으로 정하고, graphLeft는 `n_1`에 따라 narration을 만든다.
  - `레이블 없는 객관식 문제:1` → `maxButtonsPerRow: graphLeft.number(`n_1`)`
  - `graphLeft:3-4` → `when this.number(`n_1`) = 1 " 1 button per row"` / `otherwise "${this.number(`n_1`)} buttons per row."`
- 확정 문장:
  - `maxButtonsPerRow`는 한 줄에 놓을 버튼의 최대 개수를 정하며, 여기서는 `graphLeft.number(`n_1`)` 값이 쓰인다.
  - `narration(1)`은 고정 문장이고, `narration(2)`는 `n_1`이 1이면 단수 문구(" 1 button per row"), 아니면 `n_1`을 넣은 복수 문구("N buttons per row.")다.
- 관찰예측: `n_1`이 바뀌면 객관식의 한 줄 최대 버튼 수(배치 한도)와 `narration(2)` 문구가 함께 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 표현판단: LLM-1은 narration이 스크린 리더용이라고 적었으나 LLM-2와 LLM-3은 그런 용도를 쓰지 않았다. narration의 용도는 확정 문장에서 뺐다.
- 실행검증: 해당 없음
- 비어 있음: `n_1`이 정수가 아닐 때의 동작, `n_1`의 허용 범위(LLM-2, LLM-3이 모른다고 답함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-14 — Choice.submitLabel [sink] — 3일치
- 코드 요지: choice의 `submitLabel` sink에 문자열을 넣고, graph는 `choice.timeSinceSubmit()`을 `t_0`에 연결한다.
  - `choice:1` → `submitLabel: "Check My Work"`
  - `레이블 없는 그래프:1` → `number("t_0"): choice.timeSinceSubmit()`
- 확정 문장: `submitLabel`은 choice의 제출 버튼에 표시되는 label 문구를 정하며, 여기서는 "Check My Work"다.
- 관찰예측: choice의 제출 버튼에 "Check My Work"가 보인다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `timeSinceSubmit()`의 시간 단위(LLM-3이 모른다고 답함).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-15 — Choice.showSubmitButton [sink] — 3일치
- 코드 요지: choice의 `showSubmitButton` sink를 true로 두고, graph는 `choice.timeSinceSubmit()`을 `t_0`에 연결한다.
  - `choice:1` → `showSubmitButton: true`
- 확정 문장: `showSubmitButton`이 true이면 choice에 submit 버튼이 표시된다.
- 관찰예측: choice에 submit 버튼이 보인다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: choice의 `showSubmitButton` 기본값이 표시인지 숨김인지(LLM-2가 모른다고 답함). 기본값에 따라 이 설정이 실제로 화면을 바꾸는지가 달라진다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-16 — Choice.correct [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: choice의 `correct`를 선택 조합 두 가지의 논리식으로 정하고, graph는 `c = choice`로 choice를 변수에 담아 5개 보기의 선택 여부를 1 또는 0으로 전달한다.
  - `choice:2-3` → `(isSelected(1) and isSelected(4) and not(2 or 3 or 5)) or (isSelected(2) and isSelected(3) and isSelected(5) and not(1 or 4))`
  - `graph:11` → `number(`i_{sSelectedC}`): when c.isSelected(1) 1 otherwise 0` (12~15행은 보기 2~5에 대해 `i_{sSelectedD}`~`i_{sSelectedG}`)
- 관찰예측: 1·4번만, 또는 2·3·5번만 선택한 조합에서만 correct가 되고, 선택 상태는 graph의 5개 수에 1 또는 0으로 반영된다.
- 표현판단: 사용자 검토(2026-10-22): B-math-response-24·B-multiple-choice-07의 readOnly 판정이 이 graph에도 같은 방식으로 적용된다고 판정했다. 이전에는 graph 컴포넌트에 적용되는지 합의되지 않았다고 적었다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-17 — Choice.warning [sink] — 3일치
- 코드 요지: graph가 선택·제출 상태를 number sink 네 개(I, M, S, t)로 내보내고, choice는 1~3번 보기가 하나도 선택되지 않았을 때만 warning 문구를 정한다.
  - `choice:3` `when not(this.isSelected(1) or this.isSelected(2) or this.isSelected(3)) "No option selected!"`
  - `graph:15` `number("t"): choice.timeSinceSubmit`
- 확정 문장:
  - `choice`의 `warning` sink는 1, 2, 3번 보기가 모두 선택되지 않았을 때 `"No option selected!"`이고, 하나라도 선택되면 `""`이다.
  - `graph`의 `I`는 1~3번 중 하나라도 선택되면 1, 아니면 0이다.
  - `graph`의 `M`은 선택된 보기 번호(1, 2, 3)이고, 아무것도 선택되지 않으면 0이다.
  - `graph`의 `S`는 `choice.submitted`가 참이면 1, 아니면 0이다.
  - `graph`의 `t`는 `choice.timeSinceSubmit` 값을 그대로 받는다.
- 표현판단: warning이 화면의 어디에 보이는지가 갈렸다. LLM-1은 교사 대시보드에 경고 아이콘이 뜬다고 했고, LLM-2는 교사 화면에 나타난다고 하면서 학생 화면 노출 여부는 모른다고 했으며, LLM-3은 위치를 말하지 않았다. 합의가 없으므로 노출 위치는 확정 문장에서 빼고 "warning이 보인다/비워진다"까지만 취했다.
- 관찰예측: 아무 보기도 선택하지 않은 상태에서는 warning에 "No option selected!"가 설정되고, 1~3번 중 하나를 선택하면 warning이 빈 문자열이 된다. 선택·제출 상태에 따라 `I`, `M`, `S`, `t` 값이 graph에 반영된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-1·LLM-3의 줄별 설명)
- 실행검증: 해당 없음
- 비어 있음: `timeSinceSubmit`의 시간 단위(LLM-3). warning이 교사 대시보드·학생 화면 중 어디에 노출되는지.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-18 — Choice.readOnly [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 메모는 `mc4.submitCount`와 `mc4.submitted`로 시도 횟수 피드백 문장을 만들고, `mc4`는 `readOnly: true`로 설정된다.
  - `mc4:1` `readOnly: true`
  - `레이블 없는 메모:10` `when mc4.submitted "...That's incorrect. You have tried ${numSubmits} time${pluralizer} so far."`
- 확정 문장에 붙은 보충 (판정 문장이 아님):
  - 이 판정에 따라 LLM-1이 맞고, LLM-2와 LLM-3은 틀렸다.
  - (LLM-1 보충) 교사 대시보드에는 오답 표시 대신 상호작용 완료를 나타내는 점(dot)으로만 표시된다. ※ 단정 금지: 공식 문서의 readOnly 설명과 표시 방식이 다르다 (reference/conflicts.md 1번). 실행 검증 전까지 이 보충은 사실로 말하지 않는다.
- 관찰예측: 학생이 mc4에서 보기를 선택하고 제출하면 메모에 "That's incorrect." 피드백과 제출 횟수가 나타난다. 제출 횟수가 1이면 "time", 그 밖에는 "times"로 표시된다. (LLM-1 보충) 교사 대시보드에는 오답 표시가 뜨지 않는다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-19 — Choice.hidden [sink] — 3일치
- 코드 요지: choice1의 `hidden` sink가 1~3번 보기 중 하나라도 선택되면 참이 되어 선택지를 숨기고, 메모는 선택한 식을 문장에 덧붙인다.
  - `choice1:1-4` `hidden: this.isSelected(1) or this.isSelected(2) or this.isSelected(3)`
  - `레이블 없는 메모:9` `content: "Which of the following has a vertex in the third quadrant?${c}"`
- 확정 문장:
  - `choice1`의 `hidden`은 1, 2, 3번 보기 중 하나라도 선택되면 참이다.
  - 메모의 `c`는 선택된 보기 번호에 따라 "You selected:" 뒤에 해당 이차식을 붙인 문자열이고, 아무것도 선택되지 않으면 `""`이다.
  - `content`는 질문 문장 뒤에 `${c}`를 붙여 표시한다.
- 관찰예측: 학생이 1~3번 보기 중 하나를 선택하면 choice1이 화면에서 사라지고, 메모에 "You selected:"와 선택한 식이 나타난다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-1)
- 실행검증: 해당 없음
- 비어 있음: 숨겨진 뒤 선택을 다시 바꿀 방법이 있는지(LLM-2는 코드추론으로만 언급). 여러 보기가 동시에 선택될 때 메모 문구의 우선순위(LLM-3).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-20 — Choice.resetOnChange [sink] — 3일치
- 코드 요지: 버튼을 누를 때마다 `btn.pressCount` 문자열이 바뀌어 choice의 선택이 리셋되고, 버튼은 선택한 보기와 `t_{ype}`의 일치 여부를 0/1로 capture하며 graph로 이력과 횟수를 보낸다.
  - `choice:1` `resetOnChange: "${btn.pressCount}"`
  - `btn:1` `disabled: not(choice.isSelected(1) or choice.isSelected(2))`
- 확정 문장:
  - `choice`의 `resetOnChange`는 `"${btn.pressCount}"`로 설정되어, 이 값이 바뀌면 choice가 리셋된다.
  - `btn`은 1번도 2번도 선택되지 않았을 때 `disabled`이다.
  - `btn`의 `capture("selected")`는 (1번 선택이고 `t_{ype}`=1) 또는 (2번 선택이고 `t_{ype}`=2)이면 1, 아니면 0이다.
  - `graph`는 `btn.history("selected")`를 numberList `C_{orrectCap}`에, `btn.pressCount`를 number `c_{count}`에 연결한다.
- 관찰예측: 처음에는 버튼이 비활성이고 1번이나 2번을 선택하면 활성화된다. 버튼을 누르면 `pressCount`가 늘고 capture 값(1 또는 0)이 기록되며, 그에 따라 choice의 선택이 해제된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-1)
- 실행검증: 해당 없음
- 비어 있음: reset이 선택 상태 외에 무엇을 초기화하는지(LLM-3). `t_{ype}` 값이 어디서 정해지는지는 이 코드에 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-multiple-choice-21 — Choice.matchesKey [Source] — 3일치
- 코드 요지: 메모가 `choice.matchesKey` source가 참이면 `match`를 "✅"로, 아니면 `""`로 정하지만 이 값을 `content`에 연결하는 줄은 없다.
  - `레이블 없는 메모:2` `when choice.matchesKey "✅"`
  - `(master):1` `subtitle: "Select all of the prime numbers."`
- 확정 문장:
  - `choice.matchesKey`는 choice의 현재 선택이 정답 key와 일치하는지를 나타내는 source이고, 일치하면 `match`가 "✅"가 된다.
  - 일치하지 않으면 `match`는 `""`이다.
  - 이 코드에서 `match`는 메모의 `content`에 쓰이지 않으므로, 주어진 코드만으로는 "✅"가 화면에 나타난다고 할 수 없다.
- 관찰예측: 소수를 모두 올바르게 선택해 key와 일치하면 `match`가 "✅"가 된다. 다만 `match`를 표시하는 `content`가 없어 이 코드만으로는 화면에 아무것도 안 보일 수 있다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-1·LLM-2)
- 실행검증: 필요 (확신 낮음이 섞였던 항목 — 실행 검증 필요)
- 비어 있음: 정답 key가 어디서 정해지는지(LLM-1은 편집기에서 설정한다고 했으나 LLM-2는 모른다고 했고 코드에도 없음). `match`가 화면 어디에 표시되는지.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


---

## ordered-list

### B-ordered-list-01 — Ordered List.matchesKey [source] — 3일치
- 코드 요지: 그래프의 number `I`가 order1의 `matchesKey`가 참이면 1, 아니면 0이다.
  - `레이블 없는 그래프:1` `number("I"): when order1.matchesKey 1 otherwise 0`
- 확정 문장:
  - `order1.matchesKey`는 정렬 리스트의 현재 순서가 정답 key와 일치하는지를 나타내는 source이다.
  - 일치하면 `I`는 1, 일치하지 않으면 0이다.
- 관찰예측: 학생이 항목을 정답 key와 같은 순서로 놓으면 그래프의 `I`가 1이 되고, 그렇지 않으면 0이다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 정답 key(정답 순서)가 설정되는 위치(LLM-2).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-ordered-list-02 — Ordered List.order [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 그래프의 numberList `L`이 order1의 현재 순서(`order` source)를 받는다.
  - `레이블 없는 그래프:1` `numberList("L"): order1.order`
- 표현판단: 사용자 검토(2026-10-22): 1번 답(원래 인덱스 번호 리스트)을 채택했다. 2번 답도 같은 취지다.
- 관찰예측: 항목을 끌어 순서를 바꾸면 `L`의 숫자 순서가 바뀐다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-ordered-list-03 — Ordered List.itemAtIndex [source] — 3일치
- 코드 요지: 정렬 리스트의 `correct` sink가 4번째 위치에 놓인 항목이 4인지로 정해진다.
  - `레이블 없는 정렬 리스트:1` `correct: this.itemAtIndex(4) = 4`
- 확정 문장:
  - `this.itemAtIndex(4)`는 4번째 위치에 놓인 항목을 돌려주는 source이다.
  - `correct`는 그 값이 4와 같을 때 참이다.
  - 따라서 4번째 자리에 항목 4가 있으면 정답으로 판정되고, 다른 위치의 순서는 이 식에 영향을 주지 않는다.
- 관찰예측: 4번째 자리에 항목 4를 놓으면 `correct`가 참이 된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `itemAtIndex`가 돌려주는 값이 항목의 번호(id)라는 점과 위치가 1부터 센다는 점은 세 LLM이 코드 맥락으로 추론한 것이며 명시된 정의는 아니다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-ordered-list-04 — Ordered List.textAtIndex [source] — 3일치
- 코드 요지: 메모의 `content`가 order1의 5번째와 1번째 위치에 있는 항목의 텍스트를 문장에 넣는다.
  - `레이블 없는 메모:4` `You said that the ${order1.textAtIndex(5)} was the most tasty and the ${order1.textAtIndex(1)} was the least tasty.`
- 확정 문장:
  - `order1.textAtIndex(n)`은 n번째 위치에 있는 항목의 텍스트를 돌려주는 source이다.
  - 메모는 5번째 위치의 텍스트를 "most tasty" 자리에, 1번째 위치의 텍스트를 "least tasty" 자리에 넣는다.
- 관찰예측: 학생이 정렬 리스트의 순서를 바꾸면 문장 속 두 과일 이름이 현재 5번째와 1번째 항목의 텍스트로 갱신된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-1)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-ordered-list-05 — Ordered List.indexOfItem [source] — 3일치
- 코드 요지: 메모의 `position` 변수가 order1에서 항목 1의 현재 위치(`indexOfItem(1)`)에 따라 서수 접두어를 정하고, `content`가 이를 "the apple was the ${position}tastiest" 문장에 넣는다.
  - `레이블 없는 메모:2` `when order1.indexOfItem(1) = 5 ""`
  - `레이블 없는 메모:11` `You said that the apple was the ${position}tastiest.`
- 확정 문장:
  - `order1.indexOfItem(n)`은 항목 n이 현재 놓인 위치를 돌려주는 source이다.
  - 항목 1의 위치가 5이면 `position`은 `""`, 4이면 `"second "`, 3이면 `"third "`, 2이면 `"fourth "`이다.
  - 그 밖의 값(1 등)이면 `"fifth "`이다.
- 관찰예측: 항목 1을 5번째에 놓으면 "was the tastiest", 4번째면 "was the second tastiest"처럼 `tastiest` 앞의 서수 표현이 위치에 따라 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 항목 1이 사과라는 점은 코드에 명시되어 있지 않고 문구에서 읽은 추정이다. 위치 번호와 맛 순위가 반대로 매핑되는 이유(LLM-3). 위치가 1부터 센다는 점은 명시되지 않았다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-ordered-list-06 — Ordered List.initialOrder [sink] — 3일치
- 코드 요지: graph1은 order1의 현재 순서를 numberList `L`로 받고, order1은 graph1의 numberList `i_{nitial}`을 `initialOrder`로 받는다.
  - `graph1:1` `numberList("L"): order1.order`
  - `order1:1` `initialOrder: graph1.numberList("i_{nitial}")`
- 확정 문장:
  - `initialOrder` sink는 graph1의 numberList `i_{nitial}` 값으로 설정되어 정렬 리스트의 처음 순서를 정한다.
  - `L`은 `order1.order`를 받아 정렬 리스트의 현재 순서를 반영한다.
- 관찰예측: 화면을 처음 열면 order1은 `i_{nitial}` 목록의 순서로 시작하고, 학생이 항목을 재정렬하면 `L`이 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-1)
- 실행검증: 해당 없음
- 비어 있음: 두 목록 사이의 순환 연결 가능성과 `initialOrder`가 적용되는 시점(LLM-2, LLM-3). `i_{nitial}`이 정의되는 위치는 이 코드에 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-ordered-list-07 — Ordered List.itemContent [sink] — 3일치
- 코드 요지: order1의 3번째 항목 내용(`itemContent(3)`)이 graph1의 두 점이 겹치면 안내 문구를, 아니면 graph1 스크립트의 `equation` 값을 보여 준다.
  - `order1:2` `when graph1.number("x_1") = graph1.number("x_2") and graph1.number("y_1") = graph1.number("y_2") "Create your line."`
  - `order1:3` `otherwise graph1.script.equation`
  - `graph1:11` `correct: m > 0.5 and m < 1`
- 확정 문장:
  - `itemContent(3)`은 (x_1, y_1)과 (x_2, y_2)가 같으면 `"Create your line."`, 다르면 `graph1.script.equation`이다.
  - graph1의 `equation`은 `d = 0`이면 `x=` 형태, `m = 0`이면 `y=` 형태, 그 밖에는 기울기 `m`과 절편 `b`를 조합한 `y=...` 형태의 문자열이다.
  - graph1의 `correct`는 기울기 `m`이 0.5 초과 1 미만일 때 참이다.
- 관찰예측: 두 점이 겹쳐 있으면 3번째 항목에 "Create your line."이 보이고, 점을 떼어 직선을 만들면 그 직선의 식이 3번째 항목에 나타난다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-1)
- 실행검증: 해당 없음
- 비어 있음: `graph1:9`의 중첩 `when`과 중괄호가 섞인 문자열에서 부호·계수 표기가 모든 경우에 정확한지(LLM-2, LLM-3). `n`, `d`, `m`, `b`가 그래프의 어느 값인지는 이 코드에 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-ordered-list-08 — Ordered List.correct [sink] — 3일치
- 코드 요지: 정렬 리스트의 `correct` sink가 4번째 위치에 놓인 항목이 4인지로 정해진다.
  - `레이블 없는 정렬 리스트:1` `correct: this.itemAtIndex(4) = 4`
- 확정 문장:
  - `this.itemAtIndex(4) = 4`가 참일 때, 즉 4번째 위치에 항목 4가 놓여 있을 때 `correct`가 참이다.
  - 이 식은 4번째 위치만 본다.
- 관찰예측: 항목 4를 4번째 자리에 놓으면 정답 상태가 되고, 그렇지 않으면 정답 상태가 아니다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-ordered-list-09 — Ordered List.warning [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: g가 order1의 현재 순서를 numberList `L`로 받고, (master)의 subtitle이 `L[1]`, `L[2]`, `L[3]`을 이어 붙이며, order1의 `warning`은 1번째 자리가 2이고 2번째 자리가 3일 때 경고 문구를 낸다.
  - `g:1` `numberList("L"): order1.order`
  - `order1:2` `when this.itemAtIndex(1) = 2 and this.itemAtIndex(2) = 3 "Student might be using the image size instead of actual size."`
- 표현판단: 사용자 검토(2026-10-22): 순서를 그대로 리스트에 저장하고 차례대로 읽는다고 판정했다. `number("L[1]")` 형식의 의미가 이것으로 정해졌다.
- 관찰예측: 정렬 순서가 바뀌면 subtitle에 보이는 숫자가 현재 순서에 맞춰 바뀐다. 순서가 2, 3으로 시작하면 이미지 크기를 쓴 것일 수 있다는 warning 문구가 설정된다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-ordered-list-10 — Ordered List.readOnly [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 정렬 리스트의 `readOnly` sink를 `true`로 설정한다.
  - `레이블 없는 정렬 리스트:1` `readOnly: true`
- 확정 문장에 붙은 보충 (판정 문장이 아님):
  - 이 판정에 따라 LLM-1이 맞고, LLM-2와 LLM-3은 틀렸다.
  - (LLM-1 보충) 정답 키가 있더라도 대시보드에는 정오답(✓/✗) 대신 완료 여부만 표시된다. ※ 단정 금지: 공식 문서의 readOnly 설명과 표시 방식이 다르다 (reference/conflicts.md 1번). 실행 검증 전까지 이 보충은 사실로 말하지 않는다.
- 관찰예측: 학생은 정렬 리스트의 순서를 자유롭게 바꿀 수 있다. (LLM-1 보충) 순서를 바꿔도 교사 대시보드에는 오답(✗) 대신 회색 점(상호작용 완료)이 표시된다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-ordered-list-11 — Ordered List.hidden [sink] — 3일치
- 코드 요지: 정렬 리스트의 `hidden` sink가 mc1의 1번 보기가 선택되지 않았을 때 참이 된다.
  - `레이블 없는 정렬 리스트:1` `hidden: not(mc1.isSelected(1))`
- 확정 문장:
  - 정렬 리스트는 `mc1.isSelected(1)`이 거짓이면 숨겨지고, 참일 때만 보인다.
- 관찰예측: 처음에는 정렬 리스트가 보이지 않고, mc1에서 1번 보기를 선택하면 나타나며, 선택이 해제되거나 다른 보기로 바뀌면 다시 숨겨진다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


---

## free-response

### B-free-response-01 — Input.content [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `nameInput.content` source를 변수 `myName`에 담아 메모의 `content` sink 문자열 안에 넣는다.
- 관찰예측: 이름을 입력하면 메모에 "Welcome to the activity, 이름!" 형태의 문구가 나타나고, 입력 내용이 바뀌면 문구 속 이름도 바뀐다.
- 표현판단: 사용자 검토(2026-10-22): 제출 조건이 없어 즉시 반영된다고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-free-response-02 — Input.timeSinceSubmit [source] — 3일치
- 코드 요지: `nameInput2.timeSinceSubmit`을 `myTime`에 담아 그래프의 `y_{val}`과 점 `P`의 `pointLabel`에 쓴다.
- 확정 문장:
  - `myTime = nameInput2.timeSinceSubmit`이고, `number("y_{val}")`은 `myTime`이다.
  - `pointLabel("P")`는 `myTime < 2 and nameInput2.submitted`이면 `"Hi, ${nameInput2.content}."`, 그렇지 않고 `nameInput2.submitted`이면 `"Okay, bye, ${nameInput2.content}."`, 그 외(제출 전)에는 `""`이다.
- 관찰예측: 제출 전에는 점 `P`의 라벨이 비어 있고, 제출 직후에는 "Hi, 이름."이 보이다가 `myTime`이 2 이상이 되면 "Okay, bye, 이름."으로 바뀐다. `y_{val}`은 `myTime`을 따라 변한다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 표현판단: 세 LLM 모두 "2초"로 읽었지만 LLM-3는 약 2초라고 했고, `timeSinceSubmit`의 단위는 코드에 적혀 있지 않다. 확정 문장은 "2 미만"까지만 썼다. LLM-3가 제기한 괄호 없는 `timeSinceSubmit` 표기의 유효성은 다른 두 LLM이 문제로 보지 않아 확정에 넣지 않았다.
- 비어 있음: `timeSinceSubmit`의 단위, 괄호 없는 `nameInput2.timeSinceSubmit` 표기와 괄호 있는 호출형의 관계는 이 코드로 확정되지 않는다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-free-response-03 — Input.submitted [source] — 3일치
- 코드 요지: `nameInput3.content`를 `name`에 담고, 메모의 `content` sink를 `nameInput3.submitted`에 따라 인사말 또는 안내문으로 정한다.
- 확정 문장:
  - `name = nameInput3.content`이다.
  - 메모의 `content` sink는 `nameInput3.submitted`이면 `"Good to meet you, ${name}."`, 그 외에는 `"Please type your name below."`이다.
- 관찰예측: 제출 전에는 "Please type your name below."가 보이고, 제출하면 "Good to meet you, 이름."으로 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-free-response-04 — Input.initialText [sink] — 3일치
- 코드 요지: 자유 답변의 `initialText` sink에 여러 줄 문자열을 설정한다.
- 확정 문장: 자유 답변 입력란의 `initialText` sink는 두 문장 사이에 빈 줄이 있는 문자열 `"I notice . . .` / (빈 줄) / `I wonder . . ."`이다.
- 관찰예측: 입력란에 `I notice . . .`, 빈 줄, `I wonder . . .`가 미리 채워진 상태로 보인다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-free-response-05 — Input.placeholderText [sink] — 3일치
- 코드 요지: 자유 답변의 `placeholderText` sink에 안내 문구를 설정한다.
- 확정 문장: 자유 답변 입력란의 `placeholderText` sink는 `"Type your answer here."`이다. 입력란이 비어 있을 때 보이는 안내 문구이다.
- 관찰예측: 입력란이 비어 있을 때 "Type your answer here."가 보이고, 입력을 시작하면 사라진다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-free-response-06 — Input.submitLabel [sink] — 3일치
- 코드 요지: `nameInput3`의 `submitLabel` sink를 `"Submit Name"`으로 설정하고, 메모는 제출 여부에 따라 내용을 바꾼다.
- 확정 문장:
  - `nameInput3`의 `submitLabel` sink는 `"Submit Name"`이다.
  - 메모의 `content` sink는 `nameInput3.submitted`이면 `"Good to meet you, ${name}."`, 그 외에는 `"Please type your name below."`이다.
- 관찰예측: `nameInput3`의 제출 버튼에 "Submit Name"이 표시되고, 제출하면 메모가 인사말로 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-free-response-07 — Input.showSubmitButton [sink] — 3일치
- 코드 요지: 자유 답변의 `showSubmitButton` sink를 `false`로 설정한다.
- 확정 문장: 자유 답변 컴포넌트의 `showSubmitButton` sink가 `false`이므로 제출 버튼이 표시되지 않는다.
- 관찰예측: 입력란에 제출 버튼이 보이지 않는다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-free-response-08 — Input.submitDisabled [sink] — 3일치
- 코드 요지: 자유 답변의 `submitDisabled` sink를 그래프 변수 `m_{ove}`가 0인지로 정한다.
- 확정 문장: 자유 답변의 `submitDisabled` sink는 `graph.number(`m_{ove}`) = 0`이다. `m_{ove}`가 0이면 제출이 비활성화되고, 0이 아니면 활성화된다.
- 관찰예측: 그래프의 `m_{ove}`가 0인 동안은 제출 버튼을 누를 수 없고, 0이 아닌 값이 되면 누를 수 있다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `graph.number(`m_{ove}`)`가 undefined일 때 `submitDisabled`가 어떤 상태가 되는지는 코드에 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### B-free-response-09 — Input.hidden [sink] — 3일치
- 코드 요지: 메모는 `input1`이 제출되면 설명을 질문 뒤에 붙이고, `input1`은 `this.timeSinceSubmit() > 0`이면 `hidden`이 된다.
- 확정 문장:
  - 메모의 변수 `Content`는 `input1.submitted`이면 `"\n\nYour explanation:\n${input1.content}"`, 그 외에는 `""`이다.
  - 메모의 `content` sink는 `"Why is the sky blue?${Content}"`이다.
  - `input1`의 `hidden` sink는 `this.timeSinceSubmit() > 0`이다.
- 관찰예측: 제출 전에는 질문과 입력란이 보이고, 제출 후에는 입력란이 숨겨지고 질문 아래에 "Your explanation:"과 입력한 설명이 나타난다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 제출 직후 `timeSinceSubmit()`이 정확히 0인 순간에 입력란이 숨겨지는 시점은 코드에 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 
