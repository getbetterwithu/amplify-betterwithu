# CL 적용 예제 층 — 그 밖의 컴포넌트, 고급 주제, 코드, 개념 (examples-CD.md)

> **이 파일의 항목은 정의가 아니다.** 특정 예제 코드에 대해 여러 해석이 일치한 사례(3일치)와, 판정 항목에 붙어 있던 보충이다. Amplify 실행 검증 전이다.
> 새 코드를 해석할 때 정의처럼 인용하지 않는다. 정의는 공식 문서에서 먼저 찾고, 여기 항목은 "비슷한 코드에서는 ~로 해석됩니다"처럼 사례로만 인용한다. 답에는 *추가검증필요* 태그로 쓴다.
> 항목 제목: `### <ID> — <화면 제목> — <등급>`. 각 항목 끝의 `검토` 줄은 사용자 검토용이다.

항목 94건. 컴포넌트별로 절을 나눴다.


---

## table

### C-table-01 — Table.cellContent [source] — 3일치
- 코드 요지: 표의 4행 1열, 5행 1열 셀 내용을 그래프 점 label로 쓴다. 핵심 줄: `pointLabel("F_4"): fruitTable.cellContent(4,1)`
- 확정 문장:
  - Table.cellContent(행,열)은 셀의 내용(문자열)을 읽는 source이다.
  - cellContent(4,1)은 점 F_4의 label로, cellContent(5,1)은 점 F_5의 label로 쓰인다.
- 관찰예측: fruitTable의 해당 셀에 입력한 텍스트가 그래프 점 F_4, F_5의 label로 보인다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 cellContent source 기준, 서술은 가장 정확한 LLM-2)
- 실행검증: 해당 없음
- 비어 있음: 셀이 비어 있을 때 label이 비는지는 LLM-2가 모른다고 했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-table-02 — Table.cellNumericValue [source] — 3일치
- 코드 요지: 표 1행의 두 셀 숫자값을 그래프 변수 X_1, Y_1로 보낸다. 핵심 줄: `number("X_1"): table1.cellNumericValue(1,1)`
- 확정 문장:
  - Table.cellNumericValue(행,열)은 셀의 숫자값을 읽는 source이다.
  - cellNumericValue(1,1)이 number("X_1")로, cellNumericValue(1,2)가 number("Y_1")로 전달된다.
- 관찰예측: 셀 숫자를 바꾸면 그래프의 X_1, Y_1 값이 갱신된다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 cellNumericValue source 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 숫자가 아닌 셀일 때 값은 LLM-2·LLM-3가 모른다고 했다(LLM-2는 undefined로 추정만 했다).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-table-03 — Table.columnNumericValues [source] — 3일치
- 코드 요지: 표의 1열, 2열 숫자값 목록 전체를 그래프 numberList로 보낸다. 핵심 줄: `numberList("X_1"): table1.columnNumericValues(1)`
- 확정 문장:
  - Table.columnNumericValues(열)은 해당 열 숫자값들의 목록을 읽는 source이다.
  - 1열은 numberList("X_1")로, 2열은 numberList("Y_1")로 전달된다.
- 관찰예측: 표의 열 값이 바뀌면 두 numberList가 갱신된다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 columnNumericValues source 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 비었거나 숫자가 아닌 셀이 목록에 어떻게 포함되는지(한 칸만 비면 두 목록 길이가 어긋나는지)는 LLM-2·LLM-3가 모른다고 했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-table-04 — Table.cellHasFocus [source] — 3일치
- 코드 요지: 표 셀에 focus가 있으면 1, 아니면 0을 그래프 변수에 보낸다. 핵심 줄: `number("F_{4focus}"): when fruitTable.cellHasFocus(4,1) or fruitTable.cellHasFocus(4,2) 1 otherwise 0`
- 확정 문장:
  - Table.cellHasFocus(행,열)은 해당 셀에 focus가 있는지를 나타내는 source이다.
  - F_{1focus}~F_{3focus}는 각각 (1,2), (2,2), (3,2) 셀이 focus일 때 1이고 아니면 0이다.
  - F_{4focus}는 (4,1) 또는 (4,2), F_{5focus}는 (5,1) 또는 (5,2)가 focus일 때 1이고 아니면 0이다.
- 관찰예측: 사용자가 해당 셀을 선택하면 대응하는 그래프 변수가 1이 되고, 셀을 벗어나면 0이 된다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 cellHasFocus source 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 이 0/1 값이 그래프에서 점 강조 등으로 어떻게 보이는지는 코드에 없다(LLM-1·LLM-2가 추정만 했다).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-table-05 — Table.maxRows [sink] — 3일치
- 코드 요지: table1의 maxRows sink로 최대 행 수를 5로 제한한다. 핵심 줄: `maxRows: 5`
- 확정 문장:
  - maxRows: 5는 표의 행 수를 최대 5로 제한한다.
  - 그래프는 1열, 2열의 columnNumericValues를 numberList X_1, Y_1로 받는다.
- 관찰예측: 표에 행을 5개까지만 둘 수 있고, 입력된 숫자는 그래프 목록에 반영된다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 maxRows sink 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 헤더 행이 maxRows에 포함되는지는 LLM-3가 모른다고 했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-table-06 — Table.disableRowChanges [sink] — 3일치
- 코드 요지: choice의 1번 선택지가 선택되면 표의 행 변경을 막는다. 핵심 줄: `disableRowChanges: choice.isSelected(1)`
- 확정 문장:
  - choice.isSelected(1)이 true이면 disableRowChanges가 켜져 표의 행 추가·삭제를 할 수 없다.
- 관찰예측: choice에서 1번을 선택하면 표의 행 추가·삭제가 비활성화된다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 disableRowChanges sink 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 행 변경에 포함되는 구체적 조작 범위와 그 버튼이 사라지는지 비활성화되는지는 LLM-3가 모른다고 했고 LLM-1·LLM-2도 "비활성화되거나 사라진다"로 갈라 말했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-table-07 — Table.cellContent [sink] — 3일치
- 코드 요지: 표 1행의 두 셀 내용을 그래프의 넓이, 둘레 값으로 채운다. 핵심 줄: `cellContent(1,1): "${graph.number("A_{rea}")}"`
- 확정 문장:
  - Table.cellContent(행,열)는 sink로도 쓰여 셀의 내용을 CL이 채운다.
  - (1,1)에는 graph의 number("A_{rea}")가, (1,2)에는 number("P_{erimeter}")가 문자열로 들어간다.
- 관찰예측: 그래프 값이 변하면 두 셀 내용도 따라 바뀐다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 cellContent sink 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 숫자 문자열의 소수점 자릿수 표시는 LLM-2가 모른다고 했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-table-08 — Table.cellSuffix [sink] — 3일치
- 코드 요지: 셀 값이 1 또는 -1이면 단수 단위, 아니면 복수 단위를 cellSuffix로 붙이고, button은 graph의 x_1, y_1이 바뀌면 reset한다. 핵심 줄: `cellSuffix(1,1): when this.cellNumericValue(1,1) = 1 or this.cellNumericValue(1,1) = -1 "square foot" otherwise "square feet"`
- 확정 문장:
  - cellSuffix(1,1)은 셀 숫자값이 1 또는 -1이면 "square foot", 그 외에는 "square feet"이다.
  - cellSuffix(1,2)는 셀 숫자값이 1 또는 -1이면 "foot", 그 외에는 "feet"이다.
  - graph는 button.timeSincePress()를 t_0으로, 두 셀의 cellNumericValue를 a, p로 받는다.
  - button의 resetOnChange는 graph의 x_1, y_1 값을 이어 붙인 문자열이며, 이 문자열이 바뀌면 button이 reset된다.
- 관찰예측: 셀 값이 1이나 -1이면 단수 단위, 그 밖의 값이면 복수 단위가 접미사로 보인다. 그래프의 x_1, y_1이 바뀌면 button이 reset된다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 cellSuffix/resetOnChange sink 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: resetOnChange에 의한 reset의 정확한 범위는 LLM-3가 모른다고 했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-table-09 — Table.cellErrorMessage [sink] — 3일치
- 코드 요지: 셀 값이 0 이하이면 cellErrorMessage를 내고, 두 셀이 모두 양수가 아니면 button을 disabled로 한다. 핵심 줄: `cellErrorMessage(1,1): when this.cellNumericValue(1,1) > 0 "" otherwise "Enter a positive number."`
- 확정 문장:
  - cellErrorMessage(1,1), (1,2)는 해당 셀 숫자값이 0보다 크면 "", 아니면 "Enter a positive number."이다.
  - button의 disabled는 not(두 셀 숫자값이 모두 0보다 큼)이므로 두 셀이 모두 양수일 때만 button이 활성화된다.
  - button의 resetOnChange와 graph의 t_0, a, p는 C-table-08과 같은 구조이다.
- 관찰예측: 셀에 0이나 음수를 쓰면 오류 문구가 보이고 button을 누를 수 없다. 두 셀이 양수이면 button이 활성화된다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 cellErrorMessage/disabled sink 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 빈 셀의 비교 결과(LLM-3 모름)와 오류 문구가 보이는 시점(입력 중인지 제출 시인지, LLM-2 모름)은 코드에 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-table-10 — Table.initialCellContent [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 표 셀의 initialCellContent로 좌표쌍 5개의 초기값을 넣고, 두 열을 그래프 numberList로 읽는다. 핵심 줄: `initialCellContent(1,1): "5"` / `numberList("X"): table.columnNumericValues(1)`
- 관찰예측: 표가 다섯 개의 좌표쌍으로 채워져 나타나고, 이 값이 그래프의 X, Y 목록으로 전달된다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(인자 6은 6초, 학생이 수정 가능)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-table-11 — Table.cellEditable [sink] — 3일치
- 코드 요지: button을 누르기 전(timeSincePress() = 0)에만 표 셀을 편집할 수 있고, 누르면 button이 disabled가 된다. 핵심 줄: `cellEditable(1,1): button.timeSincePress() = 0`
- 확정 문장:
  - cellEditable(1,1), (1,2)는 button.timeSincePress() = 0일 때 true이다(button을 누르기 전에만 편집 가능).
  - button의 disabled는 this.timeSincePress() > 0이므로 한 번 누르면 button이 disabled가 된다.
  - button의 resetLabel은 graph.number("a_{nimComplete}") = 1이면 "Reset", 아니면 ""이다.
  - graph는 t_0, a, p를 각각 timeSincePress(), 두 셀의 cellNumericValue로 받는다.
- 관찰예측: button을 누르면 두 셀이 잠기고 button이 비활성화되며, a_{nimComplete}가 1이 되면 Reset label이 보인다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 cellEditable/disabled/resetLabel sink 기준, 서술은 가장 정확한 LLM-3)
- 표현판단: reset 이후 동작 서술이 갈렸다. LLM-1은 Reset을 누르면 초기 상태로 돌아간다고, LLM-2는 다시 편집할 수 있다고 했고, LLM-3는 모른다고 했다. 확정 문장에서 뺐다.
- 실행검증: 해당 없음
- 비어 있음: reset 뒤 셀 상태(LLM-3 모름)와 resetLabel이 ""일 때 button 모양(LLM-2 모름)은 코드에 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-table-12 — Table.cellDisableEvaluation [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 표의 1행 1열 셀의 수식 자동 계산을 끈다. 핵심 줄: `cellDisableEvaluation(1,1): true`
- 확정 문장에 붙은 보충 (판정 문장이 아님):
  - (LLM-1 보충) 입력한 수식 형태가 그대로 유지된다.
- 관찰예측: 1행 1열 셀에 `1/2`나 `2+3`을 입력해도 계산된 값으로 바뀌지 않는다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-table-13 — Table.correct [sink] — 3일치
- 코드 요지: 표 1행의 두 값이 {8, 3}(순서 무관)이면 correct이고, graph는 셀 값을 L, W로 받되 정의되지 않으면 1을 쓴다. 핵심 줄: `number("L"): firstDefinedValue(table.cellNumericValue(1,1),1)`
- 확정 문장:
  - table의 correct는 (1,1)=8이고 (1,2)=3이거나, (1,2)=8이고 (1,1)=3일 때 참이다. 순서와 무관하다.
  - graph의 number("L"), number("W")는 각각 (1,1), (1,2)의 숫자값이며 정의되지 않았으면 1이다(firstDefinedValue).
  - graph는 readOnly: true, number("t_0")은 button.timeSincePress()이다.
  - button은 한 번 누르면(timeSincePress() > 0) disabled가 되고, resetLabel은 a_{nimComplete} = 1일 때 "Reset", resetOnChange는 graph의 x_1, y_1 기반이다.
- 관찰예측: 두 셀에 8과 3을 어느 순서로 넣어도 정답이고, graph는 읽기 전용이다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 correct/readOnly sink 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: correct 판정이 화면이나 교사용 화면에서 어떻게 표시되는지는 코드에 없다(LLM-1의 "교사 대시보드 체크"는 LLM-1만의 서술이다).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-table-14 — Table.warning [sink] — 3일치
- 코드 요지: lineTargetTable의 warning이 (2,2) 셀 내용이 직선 식으로 해석되지 않을 때 경고를 낸다. 핵심 줄: `when not(isDefined(xyLine(lineTargetTable.cellContent(2,2)))) "You have to enter the equation of a line."`
- 확정 문장:
  - warning은 xyLine(cellContent(2,2))가 정의되지 않으면 "You have to enter the equation of a line.", 아니면 ""이다.
  - lineTargetGraph는 readOnly: true이고, numTries = button.pressCount를 pointLabel("S_core")에 "Number of Tries: ${numTries}"로 표시한다.
  - myEquation은 lineTargetTable.cellContent(2,2), myLine은 xyLine(myEquation)이며, 그 slope, yIntercept가 number("m_3"), number("b_3")으로 전달된다.
  - number("t")는 button.timeSincePress()이다.
  - 메모는 목표 직선(m_2, b_2)과 학생 직선(m_3, b_3)의 기울기와 절편이 모두 같으면 isCorrect로 보고, 버튼을 누른 뒤 정답이면 정답 문구, 오답이면 재시도 문구, 누르기 전에는 ""를 feedback으로 하여 content에 이어 붙인다.
- 관찰예측: 유효한 직선 식이 아니면 warning 문구가 나타나고, 유효한 식을 제출하면 메모에 정오 피드백이 나온다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 warning/xyLine 기준, 서술은 가장 정확한 LLM-3)
- 표현판단: warning이 누구에게 보이는지 갈렸다. LLM-2는 교사용 경고라고, LLM-1은 표에 경고 문구가 나타난다고, LLM-3는 warning을 낸다고만 했다. 노출 대상은 확정 문장에서 뺐다.
- 실행검증: 해당 없음
- 비어 있음: xyLine이 해석하는 식 형식의 범위(LLM-2 모름), 괄호 없는 `button.timeSincePress` 참조가 의도대로 동작하는지(LLM-3 모름)는 코드에 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-table-15 — Table.readOnly [sink] — 3일치
- 코드 요지: 표를 readOnly로 하고, 자유 답변의 initialText에 "I notice ..."와 "I wonder ..." 두 문단을 넣는다. 핵심 줄: `readOnly: true` / `initialText: "I notice ...\n\nI wonder ..."`
- 확정 문장:
  - 표는 readOnly: true이므로 편집할 수 없다.
  - 자유 답변은 initialText로 "I notice ...\n\nI wonder ..."를 미리 채워서 시작한다.
- 관찰예측: 표는 편집할 수 없고, 답변란에는 "I notice ..."와 "I wonder ..." 두 문구가 처음부터 들어 있다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 readOnly/initialText sink 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-table-16 — Table.hidden [sink] — 3일치
- 코드 요지: mc1의 1번 선택지가 선택되지 않으면 table1을 숨긴다. 핵심 줄: `hidden: not(mc1.isSelected(1))`
- 확정 문장:
  - hidden은 not(mc1.isSelected(1))이므로 mc1의 1번이 선택되지 않은 동안 table1이 숨겨지고, 1번이 선택되면 보인다.
- 관찰예측: mc1에서 1번을 선택하면 표가 나타난다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 hidden/isSelected 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-table-17 — Table.resetOnChange [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: button을 누를 때마다 표의 두 셀 값을 capture하고, 표는 button.pressCount가 바뀔 때마다 reset한다. 핵심 줄: `resetOnChange: "${button.pressCount}"` / `capture("width"): table.cellNumericValue(1,1)`
- 관찰예측: 두 셀에 값을 넣어야 button이 활성화되고, 누르면 기록 목록에 값이 쌓이며 표가 reset된다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(reset 뒤 빈 칸)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


---

## action-button

### C-action-button-01 — Action Button.timeSincePress [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 메모가 `submitMe.timeSincePress`를 `myTime`에 담아 "It has been ${myTime} seconds since you pressed "Submit"." 문장에 넣는다.
  - `레이블 없는 메모:1` `myTime = submitMe.timeSincePress`
- 표현판단: 사용자 검토(2026-10-22): 2번 답(누르기 전 0)을 채택했다.
- 관찰예측: submitMe를 누른 뒤 문장 속 숫자가 증가한다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-action-button-02 — Action Button.history [source] — 3일치
- 코드 요지: captureButton이 누를 때마다 historyGraph의 `a`, `b`를 "xCoord", "yCoord"로 capture하고, historyGraph는 그 history를 numberList `a_{list}`, `b_{list}`로 받는다.
  - `captureButton:1` `capture("xCoord"): historyGraph.number("a")`
  - `historyGraph:1` `numberList("a_{list}"): captureButton.history("xCoord")`
- 확정 문장:
  - `captureButton`은 눌릴 때 `historyGraph.number("a")`를 "xCoord"로, `historyGraph.number("b")`를 "yCoord"로 capture한다.
  - `captureButton.history("xCoord")`와 `history("yCoord")`는 capture된 값들의 기록이고, 각각 `a_{list}`, `b_{list}`가 된다.
- 관찰예측: 점을 옮기고 버튼을 누를 때마다 그 시점의 (a, b)가 두 목록에 하나씩 추가된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: history의 초기값(LLM-3).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-action-button-03 — Action Button.lastValue [source] — 3일치
- 코드 요지: historyGraph의 number `a_{recent}`, `b_{recent}`가 captureButton의 `lastValue("xCoord")`, `lastValue("yCoord")`를 받는다.
  - `historyGraph:1` `number("a_{recent}"): captureButton.lastValue("xCoord")`
- 확정 문장:
  - `captureButton.lastValue(key)`는 해당 key로 가장 마지막에 capture된 값을 돌려주는 source이다.
  - `a_{recent}`는 마지막 "xCoord", `b_{recent}`는 마지막 "yCoord" 값이다.
  - capture 대상은 `historyGraph.number("a")`와 `historyGraph.number("b")`이다.
- 관찰예측: 버튼을 누를 때마다 `a_{recent}`, `b_{recent}`가 그 시점의 `a`, `b` 값으로 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 버튼을 누르기 전 `lastValue`의 값(LLM-2, LLM-3).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-action-button-04 — Action Button.pressCount [source] — 3일치
- 코드 요지: 그래프의 number `a`가 liftoff 버튼의 `pressCount`를 받는다.
  - `레이블 없는 그래프:1` `number("a"): liftoff.pressCount`
- 확정 문장:
  - `liftoff.pressCount`는 liftoff 버튼이 눌린 횟수를 돌려주는 source이다.
  - `a`는 이 횟수를 그대로 받는다.
- 관찰예측: liftoff를 한 번 누를 때마다 `a`가 1씩 늘어난다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: reset 시 count가 어떻게 되는지(LLM-3).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-action-button-05 — Action Button.capture [sink] — 3일치
- 코드 요지: captureButton의 `capture` sink가 눌릴 때 `a`, `b`를 기록하고, historyGraph가 기록 전체(`history`)와 마지막 값(`lastValue`)을 모두 받는다.
  - `captureButton:1` `capture("xCoord"): historyGraph.number("a")`
  - `historyGraph:4` `number("a_{recent}"): captureButton.lastValue("xCoord")`
- 확정 문장:
  - `capture("xCoord")`와 `capture("yCoord")` sink는 버튼이 눌릴 때 `historyGraph.number("a")`, `number("b")`의 값을 해당 key로 기록한다.
  - `history(key)`는 기록 전체를 `a_{list}`, `b_{list}`로, `lastValue(key)`는 가장 최근 기록을 `a_{recent}`, `b_{recent}`로 보낸다.
- 관찰예측: 버튼을 누를 때마다 기록이 목록에 누적되고 최근 값도 새 값으로 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-action-button-06 — Action Button.label [sink] — 3일치
- 코드 요지: myButton의 `label`이 `pressCount`가 10 미만이면 "Press Me!", 아니면 "Too Many!"이다.
  - `myButton:2` `when myButton.pressCount < 10 "Press Me!"`
- 확정 문장:
  - `label`은 `pressCount < 10`이면 "Press Me!", 그 밖에는 "Too Many!"이다.
- 관찰예측: 10번째 누름이 반영되어 `pressCount`가 10이 된 시점부터 버튼 label이 "Too Many!"로 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-action-button-07 — Action Button.resetLabel [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: goodTime 버튼의 `resetLabel`을 "Make a Bad Time Again"으로 설정하고, 그래프의 number `s_{mile}`이 `goodTime.timeSincePress`를 받는다.
  - `goodTime:1` `resetLabel: "Make a Bad Time Again"`
  - `레이블 없는 그래프:1` `number("s_{mile}"): goodTime.timeSincePress`
- 표현판단: 사용자 검토(2026-10-22): 누르면 표정 A→B와 리셋 버튼, 리셋하면 B→A라고 판정했다.
- 관찰예측: goodTime을 누른 뒤 `s_{mile}`이 경과 시간을 반영하고, reset용 label로 "Make a Bad Time Again"이 사용된다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-action-button-08 — Action Button.disabled [sink] — 3일치
- 코드 요지: beCarefulButton의 `disabled`가 자신의 `pressCount`가 5일 때 참이고, 메모는 `pressCount` 1~5에 따라 `threats` 문구를 본문 뒤에 붙인다.
  - `beCarefulButton:1` `disabled: beCarefulButton.pressCount = 5`
  - `레이블 없는 메모:3` `when beCarefulButton.pressCount = 1 "\n\nI'm serious."`
- 확정 문장:
  - `disabled`는 `beCarefulButton.pressCount = 5`일 때 참이다.
  - `threats`는 `pressCount`가 1, 2, 3, 4, 5일 때 각각 "I'm serious.", "Are YOU serious?", "Okay, this is happening.", "One more press and it's lights-out time.", "Good night, pal."이고, 그 밖에는 `""`이다.
  - `content`는 고정 본문 뒤에 `${threats}`를 붙인다.
- 관찰예측: 누를 때마다 메모의 문구가 단계별로 바뀌고, 5번 누른 뒤에는 "Good night, pal."이 보이며 버튼이 비활성화되어 더 누를 수 없다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-action-button-09 — Action Button.style [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 행동 버튼의 `style`이 `pressCount`가 0이면 `buttonStyles.default`, 1이면 `buttonStyles.red`, 그 밖에는 `buttonStyles.link`이다.
  - `레이블 없는 행동 버튼:2` `when this.pressCount = 0 buttonStyles.default`
- 표현판단: 사용자 검토(2026-10-22): link 스타일은 밑줄 있는 링크 형태라고 판정했다.
- 관찰예측: 처음에는 기본 버튼 모양이고, 한 번 누르면 빨간 스타일, 두 번 이상 누르면 밑줄이 있는 텍스트 링크 모양이 된다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-action-button-10 — Button.resetStyle [sink] — 3일치
- 코드 요지: button의 `resetStyle`을 `buttonStyles.red`, `resetLabel`을 "Reset"으로 설정하고, 그래프의 `a`가 `button.timeSincePress(20)`을 받는다.
  - `button:1` `resetStyle: buttonStyles.red`
  - `레이블 없는 그래프:1` `number("a"): button.timeSincePress(20)`
- 확정 문장:
  - `resetStyle` sink는 reset 상태의 버튼 style을 `buttonStyles.red`로 정한다.
  - `resetLabel` sink는 reset 상태의 버튼 label을 "Reset"으로 정한다.
  - `a`는 `button.timeSincePress(20)`을 받는다.
- 표현판단: `timeSincePress(20)`의 인자 20의 의미에서 갈렸다. LLM-1은 20초 제한(최대 20초)이라고 했고, LLM-2와 LLM-3은 모른다고 했다. 인자의 의미는 확정하지 않았다. reset 모양이 보이는 시점도 LLM-1은 리셋 모드로 전환되었을 때, LLM-2는 누르면, LLM-3은 reset 동작이 보일 때라고 달라서 "reset 상태일 때"까지만 썼다.
- 관찰예측: 버튼이 reset 상태가 되면 빨간 style의 "Reset" 버튼으로 나타난다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: `timeSincePress`에 넘기는 인자(20)의 의미(LLM-2, LLM-3). 버튼이 reset 상태로 바뀌는 정확한 시점.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-action-button-11 — Action Button.resetOnChange [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: button의 `resetOnChange`가 graph의 `v`와 `h`를 이은 문자열이고, graph의 `t_0`과 메모가 `button.timeSincePress(...)`로 경과 시간을 받는다.
  - `button:1` `resetOnChange: "${graph.number("v")}${graph.number("h")}"`
  - `graph:1` `number("t_0"): button.timeSincePress(1)`
- 표현판단: 사용자 검토(2026-10-22): 1·2번 답(리셋되면 시간이 0으로 초기화)을 채택했다.
- 관찰예측: 버튼을 누르면 경과 시간이 증가하고, 점을 움직여 `v`나 `h`가 바뀌면 버튼이 reset된다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-action-button-12 — Action Button.hidden [sink] — 3일치
- 코드 요지: beCarefulButton의 `hidden`이 자신의 `pressCount`가 5일 때 참이고, 메모는 C-action-button-08과 같은 `threats` 문구를 붙인다.
  - `beCarefulButton:1` `hidden: beCarefulButton.pressCount = 5`
- 확정 문장:
  - `hidden`은 `beCarefulButton.pressCount = 5`일 때 참이다.
  - `threats`와 `content`는 `pressCount` 1~5에 따라 단계별 문구를 본문 뒤에 붙이고, 그 밖에는 `""`이다.
- 관찰예측: 5번째 누름 뒤 마지막 문구("Good night, pal.")가 보이고 버튼은 화면에서 사라진다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


### C-action-button-13 — Action Button.hidden [sink] — 적용 예제 (자기 참조, 이름 확인 전 보류)
- 코드 요지: 버튼 B의 `hidden`이 `button2.pressCount = 0`이다. B가 `button2` 자신이라면 누른 적이 없는 동안 숨겨져 있어서 첫 클릭이 불가능하다.
  - `hidden: button2.pressCount = 0` (원문 104줄, 원문에 컴포넌트 이름이 없음)
- 관찰예측: 이름이 `button2`로 확인되면, 누른 적 없는 상태에서 버튼이 보이지 않을 것으로 예측한다. 이름이 확인되기 전에는 예측하지 않는다.
- 출처: 적용 예제 (2차 검증 31번 해석, 조건부)
- 처리: 이름이 확인되기 전에는 오류 후보로 올리지 않는다. 확인된 뒤에만 "오류로 보입니다"로 쓴다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


---

## polypad

### C-polypad-02 — Polypad.polypadState / initialState [source/sink] — 3일치
- 코드 요지: 다른 Polypad `polypadInitial`의 `polypadState`를 이 Polypad의 `initialState`로 쓴다.
  - `initialState: polypadInitial.polypadState`
- 확정 문장:
  - `initialState` sink는 `polypadInitial.polypadState`(source)이다.
- 관찰예측: 이 Polypad가 시작할 때 `polypadInitial`과 같은 상태로 나타난다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `polypadState` source/`initialState` sink 기준)
- 실행검증: 해당 없음
- 비어 있음: 시작 후 `polypadInitial`이 바뀌면 이 Polypad에 다시 반영되는지(LLM-2·LLM-3 지적).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-polypad-03 — Polypad.value [source] — 3일치
- 코드 요지: Polypad `polypadSums`의 named value `leftSum`, `rightSum`을 그래프 변수 `w_{left}`, `w_{right}`로 보낸다.
  - `number("w_{left}"): polypadSums.value("leftSum")`
  - `number("w_{right}"): polypadSums.value("rightSum")`
- 확정 문장:
  - `number("w_{left}")` sink는 `polypadSums.value("leftSum")`(source)이다.
  - `number("w_{right}")` sink는 `polypadSums.value("rightSum")`(source)이다.
- 관찰예측: Polypad 안의 해당 value가 바뀌면 그래프 변수 `w_{left}`, `w_{right}`도 갱신된다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `value` source 기준)
- 실행검증: 해당 없음
- 비어 있음: Polypad 내부에서 `leftSum`, `rightSum`이 정의·계산되는 방식(LLM-2·LLM-3 지적, 이 코드에 없음).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-polypad-04 — Polypad.correct [sink] — 3일치
- 코드 요지: Polypad의 named value 세 개(`triangleCorrect`, `squareCorrect`, `pentagonCorrect`)가 모두 참이면 `correct`로 한다.
  - `triangleCorrect = this.value("triangleCorrect")`
  - `correct: triangleCorrect and squareCorrect and pentagonCorrect`
- 확정 문장:
  - `triangleCorrect`, `squareCorrect`, `pentagonCorrect`는 각각 `this.value(<같은 이름>)`이다.
  - `correct` sink는 세 변수의 `and`이다.
- 관찰예측: 세 도형 조건을 모두 만족해야 Polypad가 정답이 된다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `value` source/`correct` sink 기준)
- 실행검증: 해당 없음
- 비어 있음: named value가 만들어지는 위치(LLM-3 지적), 이 value들이 불리언인지(LLM-2는 `and` 연산에서 추정).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-polypad-05 — Polypad.isInitialState [source] — 3일치
- 코드 요지: Polypad가 초기 상태인 동안 메모와 `input`을 숨긴다.
  - `hidden: polypad.isInitialState`
- 확정 문장:
  - 메모와 `input`의 `hidden` sink는 모두 `polypad.isInitialState`(source)이다.
- 관찰예측: Polypad를 변경하기 전에는 메모와 `input`이 숨겨져 있고, 변경한 뒤에는 나타난다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `isInitialState` source/`hidden` sink 기준)
- 실행검증: 해당 없음
- 비어 있음: Polypad를 처음 상태로 되돌렸을 때 다시 숨겨지는지(LLM-2·LLM-3 지적).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-polypad-06 — Polypad.hidden [sink] — 3일치
- 코드 요지: `hiddenChoice`의 2번이 선택되면 Polypad를 숨긴다.
  - `hidden: hiddenChoice.isSelected(2)`
- 확정 문장:
  - Polypad의 `hidden` sink는 `hiddenChoice.isSelected(2)`이다.
- 관찰예측: `hiddenChoice`에서 2번을 선택하면 Polypad가 사라진다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `hidden` sink/`isSelected` 기준)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-polypad-07 — Polypad.narration [sink] — 3일치
- 코드 요지: Polypad의 narration sink 두 개에 고정 문장과 value 리스트 첫 원소를 넣은 문장을 설정한다. 핵심 줄: `narration(2): "The cube shows the value ${this.value("value").elementAt(1)}."`
- 확정 문장:
  - narration(1)은 고정 문장 "A single six-sided number cube."를 설정한다.
  - narration(2)는 Polypad 자신의 value("value") 목록에서 elementAt(1)로 꺼낸 값을 문장에 끼워 넣는다.
- 관찰예측: 화면 변화는 없고, 접근성(스크린 리더) narration이 큐브 설명과 "The cube shows the value N." 형태의 현재 값 문장을 읽어 준다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 narration sink 기준, 서술은 가장 정확한 LLM-2)
- 실행검증: 해당 없음
- 비어 있음: value가 목록이라는 점과 elementAt이 1부터 세는지는 LLM-2가 모른다고 했다. narration이 재생되는 정확한 시점은 LLM-3가 모른다고 했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-polypad-08 — Polypad.warning [sink] — 3일치
- 코드 요지: Polypad의 warning sink가 sum 값이 200을 넘을 때만 경고 문구를 낸다. 핵심 줄: `when this.value("sum") > 200 "Student has created a total greater than 200."`
- 확정 문장:
  - this.value("sum")이 200보다 크면 warning은 "Student has created a total greater than 200."이고, 그렇지 않으면 빈 문자열 ""이다.
  - 경계값은 코드대로 sum이 정확히 200이면 경고가 없다.
- 관찰예측: sum이 200을 초과하면 교사용 화면에 이 warning이 나타난다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 warning sink 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: warning이 학생 화면에도 노출되는지는 LLM-2·LLM-3가 모른다고 했다. "sum"이 Polypad에 정의된 어떤 값인지는 코드에 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-polypad-09 — Polypad.readOnly [sink] — 3일치
- 코드 요지: Polypad의 readOnly는 readOnlyChoice에서 2번 선택지가 선택되었는지에 따르고, readOnlyChoice 자신은 항상 readOnly이다. 핵심 줄: `readOnly: readOnlyChoice.isSelected(2)` / `readOnly: true`
- 확정 문장:
  - readOnlyChoice.isSelected(2)가 true이면 Polypad가 readOnly가 되어 조작할 수 없다.
  - readOnlyChoice는 readOnly: true이므로 선택을 바꿀 수 없다.
- 관찰예측: readOnlyChoice의 선택 상태가 2번이면 Polypad를 조작할 수 없고, 2번이 아니면 조작할 수 있다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 readOnly/isSelected 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: readOnlyChoice에서 2번이 선택 상태가 되는 경로(초기값이나 교사 설정 등)는 코드에 없다(LLM-2·LLM-3).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


---

## challenge-creator

### C-challenge-creator-01 — Challenge Creator.preventSubmissionReason [Sink] — 3일치
- 코드 요지: Challenge Creator에서 `mcCC2`의 1~3번 중 하나가 선택되기 전에는 `preventSubmissionReason`으로 제출을 막는다.
  - `preventSubmissionReason: when mcCC2.isSelected(1) or mcCC2.isSelected(2) or mcCC2.isSelected(3) ""`
  - `otherwise "Make a selection."`
- 확정 문장:
  - `preventSubmissionReason` sink는 `mcCC2`의 1, 2, 3 중 하나라도 선택되면 `""`, 아니면 `"Make a selection."`이다.
  - `(master)`의 `subtitle`은 부분 활동 안내와 완성 활동 URL이다.
- 관찰예측: 선택하기 전에는 제출이 막히고 `Make a selection.` 사유가 나타난다. 선택하면 제출이 허용된다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `preventSubmissionReason` sink 기준)
- 실행검증: 해당 없음
- 비어 있음: 사유 문구가 화면의 어디에 표시되는지(LLM-2 지적).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-challenge-creator-02 — Challenge Creator.preventChallengeCreationReason [Sink] — 3일치
- 코드 요지: Challenge Creator에서 `inputCC1.numericValue`가 정의되지 않으면 `preventChallengeCreationReason`으로 챌린지 생성을 막는다.
  - `preventChallengeCreationReason: when isDefined(inputCC1.numericValue) ""`
  - `otherwise "Enter a numeric value."`
- 확정 문장:
  - `preventChallengeCreationReason` sink는 `isDefined(inputCC1.numericValue)`이면 `""`, 아니면 `"Enter a numeric value."`이다.
  - `(master)`의 `subtitle`은 부분 활동 안내와 완성 활동 URL이다.
- 관찰예측: 유효한 숫자를 입력하지 않으면 챌린지 생성이 막히고 `Enter a numeric value.`가 나타난다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `preventChallengeCreationReason` sink 기준)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-challenge-creator-03 — Challenge Creator.challengeText [Sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: Challenge Creator의 `challengeText`에 `inputCC1.latex`를 설정한다.
  - `challengeText: inputCC1.latex`
- 관찰예측: 입력한 수식이 챌린지의 문제 text로 반영된다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(챌린지 카드에 수식이 그대로 나타남)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-challenge-creator-04 — Challenge Creator.challengeBackground [Sink] — 3일치
- 코드 요지: 챌린지 배경을 `sketch1`의 계산기 상태와 스케치 레이어를 겹쳐 만들고 좌표 범위를 -10~10으로 정한다.
  - `challengeBackground: layerStack(graphLayer(sketch1.calculatorState),sketchLayer(sketch1.sketch))`
  - `challengeBounds: makeBounds(-10,10,-10,10)`
- 확정 문장:
  - `challengeBackground` sink는 `graphLayer(sketch1.calculatorState)`와 `sketchLayer(sketch1.sketch)`를 `layerStack`으로 쌓은 값이다.
  - `challengeBounds` sink는 `makeBounds(-10,10,-10,10)`이며 x, y 범위가 모두 -10~10이다.
  - `(master)`의 `subtitle`은 부분 활동 안내와 완성 활동 URL이다.
- 관찰예측: 챌린지 화면에 그래프와 스케치가 겹친 배경이 -10~10 범위로 보인다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `challengeBackground`/`challengeBounds`/`layerStack`/`makeBounds` 기준)
- 실행검증: 해당 없음
- 비어 있음: `layerStack`에서 겹치는 앞뒤 순서(LLM-3 지적).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-challenge-creator-05 — Challenge Creator.responseText [Sink] — 3일치
- 코드 요지: Challenge Creator의 `responseText`에 `mcCC2.explainContent`를 설정한다.
  - `responseText: mcCC2.explainContent`
- 확정 문장:
  - `responseText` sink는 `mcCC2.explainContent`(source)이다.
  - `(master)`의 `subtitle`은 부분 활동 안내와 완성 활동 URL이다.
- 관찰예측: `mcCC2`의 설명 입력 내용이 response text에 반영된다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `responseText` sink 기준)
- 표현판단: LLM-1은 "제출자의 풀이 응답", LLM-2는 "응답하는 쪽에 원 제작자 설명이 나타남"으로 보는 대상이 달라, 확정 문장에는 값의 연결만 쓰고 표시되는 화면은 쓰지 않았다.
- 실행검증: 해당 없음
- 비어 있음: `explainContent`가 비어 있을 때의 값, response text가 표시되는 위치(LLM-3 지적 및 위 불일치).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-challenge-creator-06 — Challenge Creator.responseBackground [Sink] — 3일치
- 코드 요지: 응답 화면 배경을 `sketch2`의 계산기 상태와 두 스케치 레이어로 겹쳐 만들고, y 범위는 `sketch2.script.y`, `sketch2.script.z`에서 가져온다.
  - `responseBackground: layerStack(graphLayer(sketch2.calculatorState),sketchLayer(sketch1.sketch),sketchLayer(sketch2.sketch))`
  - `responseBounds: makeBounds(-10,10,sketch2.script.y,sketch2.script.z)`
- 확정 문장:
  - `responseBackground` sink는 `graphLayer(sketch2.calculatorState)`, `sketchLayer(sketch1.sketch)`, `sketchLayer(sketch2.sketch)`를 이 순서로 나열한 `layerStack`이다.
  - `responseBounds` sink는 `makeBounds(-10,10,sketch2.script.y,sketch2.script.z)`이며 x 범위는 -10~10, y 범위는 `sketch2.script.y`~`sketch2.script.z`이다.
  - `(master)`의 `subtitle`은 부분 활동 안내와 완성 활동 URL이다.
- 관찰예측: 응답 화면에 그래프와 두 스케치가 겹쳐 보이고, y 범위는 `sketch2`의 script 변수 `y`, `z` 값으로 정해진다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `responseBackground`/`responseBounds` sink 기준)
- 실행검증: 해당 없음
- 비어 있음: `sketch2.script.y`, `sketch2.script.z`가 정의되는 방식과 실제 값, 레이어의 겹침 순서(LLM-2·LLM-3 지적).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


---

## screen

### C-screen-01 — Screen.title [sink] — 3일치
- 코드 요지: 화면 title에 inputName.content를 넣고, 그래프의 A 점 label과 변수 b, s를 설정한다. 핵심 줄: `title: "Hi ${inputName.content} !"` / `number("b"): inputName.timeSinceSubmit`
- 확정 문장:
  - (master)의 title sink는 inputName.content를 끼워 "Hi <이름> !" 형태로 화면 제목을 만든다.
  - 그래프의 pointLabel("A")는 inputName.content, number("b")는 inputName.timeSinceSubmit(제출 후 경과 시간), number("s")는 8이다.
  - inputName의 submitLabel은 "Submit Name and Launch Rocket"이다.
- 관찰예측: 이름이 반영되어 화면 title이 "Hi 이름 !"으로 바뀌고, 그래프 점 A의 label이 이름이 되며, 제출 버튼에 "Submit Name and Launch Rocket"이 보인다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 sink/source 기준, 서술은 가장 정확한 LLM-3)
- 표현판단: title이 바뀌는 시점이 갈렸다. LLM-1은 버튼을 누른 뒤, LLM-2·LLM-3는 "이름을 쓰면"이라고 했다. 시점은 확정 문장에서 뺐다.
- 실행검증: 해당 없음
- 비어 있음: 로켓이 날아가는 애니메이션은 LLM-1·LLM-2만 말했고 이 코드의 b, s 변수가 그것을 어떻게 구동하는지는 코드에 없다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-screen-02 — Screen.subtitle [sink] — 3일치
- 코드 요지: 화면 subtitle에 제출 후 경과 시간을 끼워 넣는다. 핵심 줄: `subtitle: "Your rocket has been flying for `${inputName.timeSinceSubmit()}` seconds."`
- 확정 문장:
  - (master)의 subtitle sink는 inputName.timeSinceSubmit() 값을 문장에 끼워 넣는다.
  - 그래프의 pointLabel("A"), number("b"), number("s")와 inputName의 submitLabel은 C-screen-01과 같은 코드이다.
- 관찰예측: 제출 뒤 subtitle의 초 값이 시간이 지나며 증가한다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 subtitle sink 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 제출 전에 subtitle에 어떤 값이 보이는지는 LLM-2·LLM-3가 모른다고 했다(LLM-2는 0으로 추정만 했다).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-screen-03 — Screen.coverText [sink] — 3일치
- 코드 요지: (master)의 coverText sink에 화면 안내 문구를 설정한다. 핵심 줄: `coverText: "On this screen you will write your name on a rocket and press a button to make it fly."`
- 확정 문장:
  - coverText는 이 화면의 cover에 보이는 안내 문구를 설정한다.
  - 그래프와 inputName 코드(pointLabel("A"), number("b"), number("s"), submitLabel)는 C-screen-01과 같다.
- 관찰예측: 화면에 들어가면 cover에 이 안내 문구가 보인다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 coverText sink 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 필요 (확신 낮음이 섞였던 항목 — 실행 검증 필요)
- 비어 있음: cover가 나타나는 방식과 시점(전체를 덮는 오버레이인지 등)은 LLM-2·LLM-3가 모른다고 했다. 오버레이/카드 형태라는 서술은 LLM-1만 했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-screen-04 — Screen.coverButtonLabel [sink] — 3일치
- 코드 요지: coverText와 함께 coverButtonLabel sink에 cover 버튼의 label을 설정한다. 핵심 줄: `coverButtonLabel: "Try It"`
- 확정 문장:
  - coverButtonLabel은 cover에 있는 버튼의 label을 "Try It"으로 설정한다.
  - coverText는 활동 안내 문구이다.
- 관찰예측: cover에 안내 문구와 "Try It"이라고 적힌 버튼이 보인다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 coverButtonLabel sink 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 이 버튼을 누르면 정확히 무슨 일이 일어나는지(cover가 닫히고 본 화면으로 들어가는지)는 코드에 없다. LLM-1만 그렇게 서술했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-screen-05 — Screen.disableCalculatorReason [sink] — 3일치
- 코드 요지: disableCalculatorReason sink에 계산기를 쓰지 않는 이유 문구를 설정한다. 핵심 줄: `disableCalculatorReason: "This screen does not require the use of a calculator."`
- 확정 문장:
  - disableCalculatorReason은 이 화면에서 calculator를 열 수 없게 하고, 설정한 이유 문구를 안내한다.
- 관찰예측: 학생이 calculator를 열 수 없고 설정한 이유가 안내된다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 disableCalculatorReason sink 기준, 서술은 LLM-3)
- 표현판단: 이유가 보이는 방식이 갈렸다. LLM-1은 계산기 아이콘이 회색이 되고 마우스를 올리면 툴팁이 뜬다고, LLM-2는 계산기 버튼을 누르면 문구가 보인다고 했다. UI 방식은 확정 문장에서 뺐다.
- 실행검증: 해당 없음
- 비어 있음: 계산기 버튼이 비활성화되는지 숨겨지는지, 이유가 표시되는 정확한 UI는 LLM-2·LLM-3가 모른다고 했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


---

## card-sort

### C-card-sort-01 — Card Sort.totalCards [source] — 3일치
- 코드 요지: Card Sort 컴포넌트 `sort`의 `totalCards`를 읽어 subtitle에 표시한다.
  - `total = sort.totalCards`
  - `subtitle: "Total Cards: ${total}"`
- 확정 문장:
  - `total`은 `sort.totalCards`(source)이다.
  - `subtitle` sink는 `"Total Cards: ${total}"`이다.
- 관찰예측: subtitle에 카드의 총 개수가 표시된다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `totalCards` source 기준)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-card-sort-02 — Card Sort.totalCorrectCards [source] — 3일치
- 코드 요지: Card Sort의 `totalCorrectCards`를 읽어 subtitle에 표시한다.
  - `correct = sort.totalCorrectCards`
  - `subtitle: "Total Correct Cards: ${correct}"`
- 확정 문장:
  - `correct`는 `sort.totalCorrectCards`(source)이다.
  - `subtitle` sink는 `"Total Correct Cards: ${correct}"`이다.
- 관찰예측: 카드를 옮길 때마다 올바르게 분류된 카드 수가 갱신되어 subtitle에 보인다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `totalCorrectCards` source 기준)
- 표현판단: LLM-1은 "올바른 그룹으로 묶을 때마다 숫자가 증가"한다고 했으나 LLM-2·LLM-3은 "갱신/바뀐다"고만 하고 정답 기준은 모른다고 하여, 확정 문장에는 "갱신"만 썼다.
- 실행검증: 해당 없음
- 비어 있음: 정답 판정 기준(key)이 어디서 어떻게 정해지는지(LLM-2·LLM-3 지적).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-card-sort-03 — Card Sort.matchesKey [source] — 3일치
- 코드 요지: Card Sort의 `matchesKey`에 따라 `Yes`/`No`를 subtitle에 표시한다.
  - `match = sort.matchesKey`
  - `complete = when match "Yes" otherwise "No"`
- 확정 문장:
  - `match`는 `sort.matchesKey`(source, 참/거짓 값)이다.
  - `complete`는 `match`가 참이면 `"Yes"`, 아니면 `"No"`이다.
  - `subtitle` sink는 `"Matches Key? ${complete}"`이다.
- 관찰예측: 카드 분류 전체가 key와 일치하면 `Matches Key? Yes`, 아니면 `Matches Key? No`가 보인다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `matchesKey` source 기준)
- 실행검증: 해당 없음
- 비어 있음: 부분 일치일 때의 처리 방식(LLM-3 지적).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


### C-card-sort-04 — Card Sort.subtitle [sink] — 적용 예제 (자료 한계)
- 코드 요지: 화면 subtitle 한 줄만 있다. 40번은 "증명과정(1~4단계)을 순서에 따라 짝지워보세요.", 41번은 "먼저 주어진 조건과 그로 인해 알 수 있는 것을 구별해서 짝지어보자."이다. 카드 정렬 컴포넌트의 CL은 원문에 없다.
- 관찰예측: 이 자료에서는 안내 문구가 보인다는 것만 예측한다. 카드 목록, 정답 순서, 판정 방식은 예측하지 않는다.
- 출처: 적용 예제 (2차 검증 40·41번 해석). 자료 한계 패턴.
- 처리: 카드 목록, 정답 순서, 판정 방식은 "이 코드만으로는 확인되지 않습니다"로 답하고 지어내지 않는다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


---

## media

### C-media-01 — Media.time [source] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 비디오(미디어) 컴포넌트 `eggsVideo2`의 `time`을 그래프 변수 `b`에 보낸다.
  - `number("b"): eggsVideo2.time`
- 관찰예측: 영상의 재생 위치가 바뀌면 `b`도 따라 바뀐다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(단위 초, 실시간 전달)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-media-02 — Media.time [sink] — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `mcEggs`에서 고른 번호에 따라 `eggsVideo1`의 `time` sink 값을 정하고, 메모는 같은 번호로 달걀 수 설명 문장을 만들어 content로 보인다.
  - `eggsVideo1`: `time: when mcEggs.isSelected(1) 13.78 ... when mcEggs.isSelected(5) 1.2 otherwise 0`
  - 메모: `content: "How many eggs do you want to see?${eggsRemoved}"`
- 관찰예측: 달걀 수 선택에 대응하는 시점으로 영상의 시간이 바뀌고, 메모에 질문과 함께 단수/복수가 맞춰진 설명 문장이 나타난다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(time sink가 재생 위치를 즉시 이동)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-media-03 — Media.hidden [sink] — 3일치
- 코드 요지: `gcMC`의 1번이 선택되지 않으면 미디어 컴포넌트 `va`를 숨긴다.
  - `hidden: not(gcMC.isSelected(1))`
- 확정 문장:
  - `va`의 `hidden` sink는 `not(gcMC.isSelected(1))`이다.
- 관찰예측: `gcMC`의 1번을 선택했을 때만 `va`가 보이고, 그 외에는 숨겨진다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `hidden` sink 기준)
- 실행검증: 해당 없음
- 비어 있음: `va`가 어떤 종류의 미디어인지는 코드에 없고 화면 제목(Media.hidden)에서 읽었다(LLM-2 지적).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


---

## adv

### C-adv-01 — Random Numbers — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: note1이 난수 생성기로 A, B를 만들고 C와 equation을 구성하며, 수식 답변은 입력의 numericValue가 `note1.script.B`와 같을 때 correct이다.
  - `note1:3` `A = r.int(-12,-2)`, `note1:4` `B = r.int(3,7)`
  - `레이블 없는 수식 답변:1` `correct: this.numericValue = note1.script.B`
- 표현판단: 사용자 검토(2026-10-22): 1번 답(화면이 열릴 때마다 새 방정식)을 채택했다.
- 관찰예측: A, B가 난수로 정해지고, 학생이 B와 같은 숫자를 입력하면 정답으로 판정된다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-adv-03 — Updating Random with a button — 3일치
- 코드 요지: 버튼 누른 횟수를 seed로 random 정수 a, b를 만들어 덧셈 문제 prompt를 구성하고, 학생 답이 단순 숫자일 때만 제출할 수 있게 하며 정답을 a+b로 판정한다.
  - `r = randomGenerator(btn1.pressCount)`
  - `correct: isASimpleNumber and this.numericValue = numericValue(\`${prompt.script.a}+${prompt.script.b}\`)`
  - `resetOnChange: "${btn1.pressCount}"`
- 확정 문장:
  - `prompt`는 `randomGenerator(btn1.pressCount)`로 만든 `r`에서 `r.int(-20,20)`으로 정수 `a`, `b`를 뽑고, `b >= 0`이면 `a+b` 형태, 아니면 `a`와 음수 `b`를 이어 붙인 형태(`ab`, 음수 기호 포함)의 문자열(latex)이 된다.
  - 수식 답변은 `disableEvaluation: true`로 기본 평가를 끄고, `patterns.number.matches(this.latex)`로 입력이 단순 숫자 형태인지 `isASimpleNumber`에 저장한다.
  - `correct` sink는 단순 숫자 형태이면서 `this.numericValue`가 `a+b`의 값과 같을 때 참이다.
  - `submitDisabled` sink는 단순 숫자 형태가 아니면 제출을 막는다.
  - `resetOnChange`는 `btn1.pressCount`가 바뀔 때 답변을 reset한다.
- 관찰예측: 버튼을 누를 때마다 새 문제가 나오고 답변란이 비워진다. 계산식 형태의 입력은 제출할 수 없고, 숫자 하나를 써야 제출할 수 있다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 sink/source 기준, 줄 대응은 LLM-2·LLM-3의 줄별 설명이 코드와 가장 가깝다)
- 실행검증: 해당 없음
- 비어 있음: `randomGenerator`가 같은 seed에서 같은 값을 재현하는 규칙(LLM-3 지적, 코드에 없음).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-adv-04 — Using number & graphLabel sinks — 3일치
- 코드 요지: 수식 답변 `exp1`의 숫자 값을 그래프 변수 `n`과 점 `A`의 label에 보낸다.
  - `number("n"): exp1.numericValue`
  - `pointLabel("A"): \`n = ${exp1.numericValue}\``
- 확정 문장:
  - `number("n")` sink는 `exp1.numericValue`(source)를 그래프 변수 `n`에 설정한다.
  - `pointLabel("A")` sink는 점 `A`의 label을 `"n = <exp1.numericValue>"` 문자열로 설정한다.
- 관찰예측: `exp1`에 숫자를 입력하면 그래프 변수 `n`이 그 값이 되고, 점 `A`의 label이 `n = 값`으로 바뀐다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `number`/`pointLabel` sink 기준)
- 실행검증: 해당 없음
- 비어 있음: `exp1`이 비어 있거나 숫자가 아니어서 `numericValue`가 undefined일 때 label이 어떻게 보이는지(LLM-3 지적).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-adv-05 — History & numberList — 3일치
- 코드 요지: 버튼 `b1`이 그래프의 `a`, `b` 값을 capture하고, 그래프 `g1`은 그 history를 리스트 `A`, `B`로 받는다.
  - `numberList("A"): b1.history("a")`
  - `capture("a"): g1.number(\`a\`)`
- 확정 문장:
  - `b1`의 `capture("a")`, `capture("b")` sink는 `g1.number(\`a\`)`, `g1.number(\`b\`)`의 값을 각각 `"a"`, `"b"` 이름으로 capture한다.
  - `g1`의 `numberList("A")`, `numberList("B")` sink는 `b1.history("a")`, `b1.history("b")`를 그래프 리스트 `A`, `B`로 설정한다.
- 관찰예측: 버튼을 누를 때마다 그 시점의 `a`, `b` 값이 history에 쌓여 리스트 `A`, `B`에 누적된다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `capture`/`history`/`numberList` 기준)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-adv-07 — Notice and Wonder — 3일치
- 코드 요지: 그래프에 5초 애니메이션을 두고 `animationTime`에 따라 narration을 바꾸며, 자유 답변란에 두 줄 안내문을 미리 채운다.
  - `animationDuration:5`
  - `narration(1): when this.animationTime > 0 "" otherwise "This graph shows a circle."`
  - `initialText: "I notice . . . ... I wonder . . . "`
- 확정 문장:
  - `animationDuration` sink는 그래프 애니메이션 길이를 5로 설정하고, `number("t_0")` sink는 `this.animationTime`을 그래프 변수 `t_0`에 설정한다.
  - `narration(1)`은 `animationTime`이 0보다 크지 않을 때(재생 전) `"This graph shows a circle."`이고, `narration(2)`, `narration(3)`은 `animationTime`이 0이 아닐 때 각각 원 분할 설명과 Stage 1~4 설명이다.
  - 자유 답변의 `initialText` sink는 `I notice . . .`, 빈 줄, `I wonder . . .` 세 줄 문구를 초기 텍스트로 설정한다.
- 관찰예측: 재생 전에는 첫 narration 문장이, 재생이 시작되면 나머지 문장들이 조건에 따라 나타난다. 자유 답변란에 `I notice`/`I wonder` 문구가 미리 들어 있다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `narration`/`initialText` sink 기준, 조건 해석은 LLM-2)
- 표현판단: LLM-1은 narration을 "스크린 리더용 해설"로 설명했으나 LLM-2·LLM-3은 그런 용도를 말하지 않아 확정 문장에서 뺐다.
- 실행검증: 해당 없음
- 비어 있음: 여러 narration이 재생되는 순서와 시점(LLM-3 지적, 코드에 없음).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-adv-08 — Wiring up graph and sketch — 3일치
- 코드 요지: 그래프 `g1`과 스케치 `s1`이 서로 `animationTime`을 공유하고, `g1`은 스케치의 y값 목록을 리스트 `L`로 받으며, `s1`은 스케치가 비어 있는지를 변수 `v`로 만든다.
  - `numberList("L"): s1.sketch.yValuesAt(this.animationTime)`
  - `number("t"): g1.animationTime`
- 확정 문장:
  - `g1`: `animationDuration`은 10, `number("t")`는 `this.animationTime`, `numberList("L")`은 `s1.sketch.yValuesAt(this.animationTime)`이다.
  - `s1`: `number("t")`는 `g1.animationTime`이다.
  - `s1`의 `number("v")`는 `sketch.strokeCount`, `sketch.pointCount`, `currentStroke.strokeCount`가 모두 0이면 1, 아니면 0이다.
- 관찰예측: 스케치를 그리기 전에는 `v`가 1이고, 그리면 0이 된다. 그래프 시간에 대응하는 스케치 y값 목록이 `L`에 반영된다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 sink 기준, `v` 조건은 LLM-2·LLM-3의 세 조건 모두 포함한 설명)
- 표현판단: LLM-1의 관찰예측("움직이는 점이나 궤적 그래프")과 `v`의 조건(`currentStroke` 누락)은 LLM-2·LLM-3과 달라, 코드에 있는 리스트 `L` 반영과 세 조건 모두 쓴 설명만 취했다.
- 실행검증: 해당 없음
- 비어 있음: `yValuesAt`이 돌려주는 값의 규칙(LLM-3 지적, 코드에 없음).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-adv-09 — Backgrounds and transformations — 3일치
- 코드 요지: 버튼을 누르면 스케치를 비활성화하고 숨긴 뒤, 경과 시간만큼 x를 이동한 변환 스케치를 background로 보여 준다.
  - `xTransform = simpleFunction("x+${btn.timeSincePress}","x","y")`
  - `background: sketchLayer(this.sketch.transform(xTransform,yTransform))`
- 확정 문장:
  - `isAnimating`은 `btn.timeSincePress > 0`이고, `disableSketch`와 `hideSketch` sink가 모두 `isAnimating`을 받아 애니메이션 중에는 스케치 입력이 막히고 원본 스케치가 숨겨진다.
  - `xTransform`은 x에 `btn.timeSincePress`를 더하는 변환, `yTransform`은 y를 유지하는 변환이다.
  - `background` sink는 `this.sketch.transform(xTransform,yTransform)`을 `sketchLayer`로 만든 레이어이다.
  - `btn`의 `disabled` sink는 스케치의 `strokeCount`와 `pointCount`가 모두 0이면 버튼을 비활성화한다.
- 관찰예측: 스케치를 그려야 버튼이 활성화되고, 누르면 원본은 숨겨지고 그린 선이 오른쪽으로 이동한 모습이 배경으로 보인다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `disableSketch`/`hideSketch`/`background` sink 기준)
- 실행검증: 해당 없음
- 비어 있음: 변환 함수 문자열에 넣은 시간이 매 프레임 갱신되는지(LLM-2 지적), 이동이 끝나는 시점(LLM-3 지적).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-adv-10 — Simple aggregate — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `exp1.numericValue`를 `aggregate`해 그래프 숫자 리스트 `L`로 보낸다.
  - `numberList("L"): aggregate(exp1.numericValue)`
- 확정 문장에 붙은 보충 (판정 문장이 아님):
  - (LLM-1 보충) `numberList("L")` sink에 `aggregate(...)` 결과가 설정되며, 학생별 입력값이 취합되어 리스트의 원소가 된다.
- 관찰예측: 수집된 `numericValue`들이 그래프 리스트 `L`에 나타난다. (LLM-1·LLM-3 일치)
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-adv-11 — Aggregate — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `graph1`이 학생들의 `btn1` capture 값(`a`, `b`)의 마지막 값을 `aggregate`해 리스트 `A`, `B`로 만든다.
  - `numberList("A"): aggregate(btn1.lastValue("a"))`
  - `capture("a"): graph1.number("a")`
- 확정 문장에 붙은 보충 (판정 문장이 아님):
  - (LLM-1·LLM-3 보충) `graph1:1`의 `number("s")`는 `btn1.timeSincePress() > 0`이면 1, 아니면 0이다. `btn1`의 `resetLabel`은 `"Reset"`, `disabled`는 `graph1.number("a") = -9 and graph1.number("b") = 9`일 때이다.
- 관찰예측: 점을 옮긴 뒤 버튼을 누르면 캡처된 마지막 `a`, `b` 값이 집계되어 리스트 `A`, `B`에 나타난다. `a = -9`이고 `b = 9`인 위치에서는 버튼이 비활성화된다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-adv-12 — Using simple function — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 수식 답변 `exp1`의 latex를 `simpleFunction`으로 바꿔 그래프 함수 `f`에 연결하고, 그래프의 변수 `C`가 1이면 `exp1`을 정답 처리한다.
  - `function("f"): simpleFunction(exp1.latex)`
  - `correct: graph1.number(\`C\`) = 1`
- 관찰예측: 입력한 식이 그래프 함수 `f`로 그려지고, `C`가 1이면 정답이다.
- 표현판단: 사용자 검토(2026-10-22): 변수 인자를 생략하면 기본 변수는 x라고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-adv-13 — Using simple function — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 수식 답변 `exp1`의 latex를 `parseEquation`으로 해석해 `x`, `y`의 `differenceFunction`을 그래프 함수 `f`에 연결하고, `C`가 1이면 정답 처리한다.
  - `function("f"): parseEquation(exp1.latex).differenceFunction("x", "y")`
  - `correct: graph1.number(\`C\`) = 1`
- 관찰예측: 입력한 방정식이 `x`, `y`에 대한 함수로 그래프에 반영되고, `C`가 1이면 정답이다.
- 표현판단: 사용자 검토(2026-10-22): differenceFunction은 lhs − rhs라고 판정했다. 이전에는 부호 방향을 확정하지 않았다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-adv-14 — Using pattern parsing — 3일치
- 코드 요지: 입력이 단순 숫자일 때만 제출할 수 있고, 숫자 값이 10이면 정답이며, 아니면 오류 문구를 보인다.
  - `isJustANumber = patterns.number.matches(this.latex)`
  - `correct: this.numericValue = 10`
  - `submitDisabled: not(isJustANumber)`
- 확정 문장:
  - `isJustANumber`는 `patterns.number.matches(this.latex)`이고, `disableEvaluation: true`로 기본 평가를 끈다.
  - `correct` sink는 `this.numericValue = 10`이다.
  - `submitDisabled` sink는 `not(isJustANumber)`이다.
  - `errorMessage` sink는 `isJustANumber`이면 `""`, 아니면 `"Enter a number."`이다.
- 관찰예측: `3+7`처럼 식 형태로 쓰면 `Enter a number.`가 나오고 제출할 수 없다. 숫자 `10`을 쓰면 정답이다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `submitDisabled`/`errorMessage`/`correct` 기준)
- 실행검증: 해당 없음
- 비어 있음: `disableEvaluation` 상태에서 `numericValue`가 숫자로 정의되는지(LLM-2 지적), 음수·소수가 `patterns.number`에 포함되는지(LLM-3 지적).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### C-adv-15 — (제목 없음) — 3일치
- 코드 요지: 두 숫자로 이루어진 분수 pattern을 만들어 `exp1.latex`가 맞는지 `yes`/`no`로 저장하고, 분자와 분모의 latex를 뽑는다.
  - `pattern = patterns.fraction(patterns.number, patterns.number)`
  - `numerator = pattern.parse(exp1.latex).numerator.latex`
- 확정 문장:
  - `pattern`은 `patterns.fraction(patterns.number, patterns.number)`이다.
  - `isValid`는 `pattern.matches(exp1.latex)`이면 `"yes"`, 아니면 `"no"`이다.
  - `numerator`, `denominator`는 `pattern.parse(exp1.latex)`의 `numerator.latex`, `denominator.latex`이다.
  - `exp1`은 `disableEvaluation: true`이다.
- 관찰예측: 분수 입력이면 `isValid`가 `yes`가 되고 분자·분모 latex 문자열이 추출된다. 이 코드에는 해당 변수들을 content 등으로 화면에 표시하는 줄이 없다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 `patterns`/`parse` 기준, 줄 대응은 LLM-2)
- 실행검증: 해당 없음
- 비어 있음: 분수가 아닌 입력에서 `parse` 결과가 오류인지 undefined인지(LLM-2·LLM-3 지적).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


### C-adv-16 — Aggregate와 자기 값 — 적용 예제 (집계 변수 구분)
- 코드 요지: 그래프가 학급 점수 `s_1`을 `aggregate`해 리스트 `S_1`을 만들고, 나의 점수와 비교하는 `m_1`을 둔다.
  - `numberList("S_1"): aggregate(graph3.number("s_1"))` (원문 7줄)
  - `m_1 = total({S_1 > s_1 : 1, 0})` (원문 192줄)
- 관찰예측: 나보다 점수가 높은 학생 수가 메모의 피드백 문구에 반영된다.
- 출처: 적용 예제 (2차 검증 27번 해석). aggregate 판정은 C-adv-10·11 판정 항목을 따른다.
- 처리: aggregate 자체를 오류로 보지 않는다. `S_1`과 `s_1`의 구분은 설계이므로 오류 후보가 아니다. `total()`은 확인되지 않은 함수다 (reference/unverified.md).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


---

## concept

### D-concept-01 — `a = b` 같은 문장은 CL에서 무엇을 뜻하는가? 다른 프로그래밍 언어의 대입문과 무엇이 다른가? — 3일치
- 코드 요지: `a = b`의 의미를 묻는 개념 질문. 예시: `n = input1.numericValue`
- 확정 문장:
  - `a = b`는 변수 `a`를 `b`의 값(식)에 연결해 정의한다.
  - 한 번 실행되는 순차 대입문이 아니라, 값 사이의 관계를 선언하는 것이다. 그래서 `b`가 바뀌면 `a`도 따라 바뀐다(LLM-1, LLM-2).
- 관찰예측: `b`의 값이 바뀌면 `a`를 쓰는 곳도 함께 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 연결이 갱신되는 정확한 규칙(LLM-2만 모름 표명).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-concept-02 — sink와 source는 각각 무엇인가? 값이 어느 방향으로 흐르는지, 각각 예를 하나씩 들어라. — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: sink와 source의 정의, 값의 흐름 방향을 묻는 개념 질문. 예시: `content: "정답입니다!"` / `btn.pressCount`
- 확정 문장에 붙은 보충 (판정 문장이 아님):
  - (LLM-1 보충) source를 변수로 읽어 sink 문자열에 넣는 예: `count = btn1.pressCount` / `content: "클릭 횟수: ${count}"`
- 관찰예측: sink로 설정한 값은 해당 컴포넌트의 상태나 화면 표시에 반영되고, source는 학생의 입력이나 컴포넌트 상태를 스크립트에서 읽게 해 준다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-concept-03 — sink를 설정하는 문장의 형태를 아는 대로 모두 적어라. (예: 이름만 쓰는 경우, 이름 뒤에 괄호 인자가 붙는 경우) — 3일치
- 코드 요지: sink 설정 문장의 형태를 묻는 개념 질문. 예시: `hidden: true` / `number("a"): 3` / `choiceContent(1): "첫째"`
- 확정 문장:
  - 이름만 쓰는 형태는 `sink이름: 값`이다. 예: `content: ...`, `hidden: true`, `correct: true`
  - 괄호 인자가 붙는 형태는 `sink이름(인자): 값`이다. 예: `number("m"): 3`, `choiceContent(1): "선택지 1"`
  - 인자가 둘 이상이면 쉼표로 구분한다. 예: `cellContent(1,2): "x"` (LLM-1, LLM-2가 언급)
- 관찰예측: `이름: 값` 문장을 쓰면 해당 컴포넌트의 그 속성이 값으로 설정된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-1, 형태 구분이 명확함)
- 실행검증: 해당 없음
- 비어 있음: 위 두 형태 외에 다른 형태가 있는지(LLM-2 모름 표명), 가능한 모든 sink 이름의 목록(LLM-3 모름 표명).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-concept-04 — CL에서 변수(variable)는 어떻게 정의하고 어디서 쓸 수 있는가? 한 컴포넌트에서 정의한 변수를 다른 컴포넌트에서 읽을 수 있는가? 읽는다면 방법은? — 3일치
- 코드 요지: 변수의 정의 위치, 사용 범위, 다른 컴포넌트에서 읽는 방법을 묻는 개념 질문. 예시: `x = input1.numericValue` / `note1.script.B`
- 확정 문장:
  - 변수는 `이름 = 식` 형태로 정의하고, 정의한 컴포넌트의 코드 안에서 이름으로 쓴다.
  - 다른 컴포넌트에서 정의한 변수는 읽을 수 있고, `컴포넌트이름.script.변수이름` 형태로 읽는다.
- 관찰예측: 컴포넌트 A에서 정의한 변수를 컴포넌트 B에서 `A.script.변수이름`으로 쓰면 A의 변수 값이 B 코드에 전달된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 변수 이름이 같은 이름의 sink와 겹칠 때의 규칙(LLM-2만 모름 표명).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-concept-05 — `this`와 `컴포넌트이름.무언가` 형태의 참조는 각각 무엇을 가리키는가? — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `this`와 `컴포넌트이름.무언가` 참조의 대상을 묻는 개념 질문. 예시: `this.numericValue` / `input1.numericValue`
- 관찰예측: `this.numericValue`는 자기 컴포넌트의 값을, `input1.numericValue`는 input1의 값을 읽는다.
- 표현판단: 사용자 검토(2026-10-22): this는 자기 CL 안에서 자기 이름 대신 쓰는 말이라고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-concept-08 — source와 sink가 요구하는 값의 타입(숫자, 문자열, 시간 길이 등)이 맞지 않으면 어떻게 되는가? 아는 타입을 나열하라. — 3일치
- 코드 요지: source와 sink의 값 타입이 맞지 않을 때의 동작과 알려진 타입을 묻는 개념 질문. 예시: `hidden: true` / `number("a"): 3`
- 확정 문장:
  - 세 LLM이 공통으로 든 타입은 number(숫자), string(문자열), boolean(참/거짓)이다.
  - 타입 불일치 시 동작은 합의된 내용이 없어 확정하지 않는다.
- 관찰예측: 합의된 내용 없음. 타입이 다른 값을 sink에 넣었을 때의 화면 동작은 실행해서 봐야 한다.
- 표현판단: 불일치 시 동작은 LLM-1(편집기 타입 불일치 오류, sink 미적용)과 LLM-3(타입 오류)이 오류라고 했고, LLM-2는 "오류나 undefined로 추정, 정확한 동작은 모름"(확신 낮음)이라 했다. 타입 목록도 LLM-1(latex, action 등), LLM-2(숫자 목록, 색, bounds, 스케치, 레이어, 함수, 버튼 스타일), LLM-3(List, Sketch, GraphState, Duration)이 다르다. 목록 외 타입은 한 LLM만 말한 것이거나 두 LLM만 겹쳐(List/숫자 목록, Sketch) 확정 문장에서 제외했다. Duration(시간 길이)은 LLM-3만 말했고 LLM-1은 분류 여부를 모름, LLM-2는 존재 여부를 모른다고 했다.
- 출처: LLM 3일치 (표현 선택: 공식문서 표현, 세 답의 교집합만 사용)
- 실행검증: 필요 (확신 낮음이 섞였던 항목 — 실행 검증 필요)
- 비어 있음: 타입 불일치 때의 정확한 동작과 오류 문구, 전체 타입 목록, 시간 길이(Duration) 타입의 존재 여부.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-concept-09 — 코드에서 줄의 순서는 실행 결과에 영향을 주는가? — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 코드에서 줄 순서가 결과에 영향을 주는지 묻는 개념 질문. 예시: `a = b`
- 관찰예측: 같은 변수를 쓰는 줄이 앞에 있든 뒤에 있든 결과 화면은 같다.
- 표현판단: 사용자 검토(2026-10-22): 줄 순서는 영향이 없다고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-concept-10 — `${...}` 문법은 무엇이고 어디에서 쓸 수 있는가? 안에 들어갈 수 있는 것은 무엇인가? — 3일치
- 코드 요지: `${...}` 문법의 정의, 사용 위치, 삽입 가능한 내용을 묻는 개념 질문. 예시: `"Hello, ${input1.content}!"` / `content: "값은 ${input1.numericValue}"`
- 확정 문장:
  - `${...}`는 문자열 안에 식의 값을 끼워 넣는 문자열 보간(string interpolation) 문법이다.
  - 문자열을 받는 곳(예: `content`의 문자열)에서 쓴다.
  - 안에는 변수, source(`input1.numericValue` 등), 수식 같은 CL 식이 들어간다.
- 관찰예측: `${...}` 안 식의 값이 바뀌면 화면에 표시된 문자열도 따라 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 안에 `when` 식이 들어갈 수 있는지(LLM-2만 모름 표명), 삽입 가능한 타입의 전체 범위(LLM-3만 모름 표명).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-concept-11 — 수식 입력의 `numericValue`와 `latex`는 어떻게 다르고, 문자열 안에 넣으면 각각 어떻게 보이는가? — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 수식 입력의 `numericValue`와 `latex`의 차이를 묻는 개념 질문. 예시: `content: "${exp1.numericValue} / ${exp1.latex}"`
- 관찰예측: 입력이 `2+3`이면 `${numericValue}` 자리에는 계산값 `5`, `${latex}` 자리에는 입력한 식의 표기가 들어간다(D-code-06의 LLM-1, LLM-2 예시와 같다).
- 표현판단: `latex`를 문자열에 넣었을 때 렌더링 여부는 LLM마다 갈렸다(LLM-1은 원문 텍스트, LLM-2는 백틱 필요(추정), LLM-3은 LaTeX 텍스트). 사용자 판정(보기 1 채택)으로 백틱 규칙을 확정 문장에 넣었다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-concept-12 — 여러 줄 문자열은 어떻게 쓰는가? 줄바꿈은 어떻게 표현하는가? — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 여러 줄 문자열과 줄바꿈 표현을 묻는 개념 질문. 예시: `content: "첫 줄\n둘째 줄"`
- 관찰예측: 따옴표 안에서 줄을 바꿔 쓰면 화면 텍스트도 줄이 나뉘어 표시된다(D-code-06 코드와 같은 형태).
- 표현판단: 사용자 검토(2026-10-22): 실제 줄바꿈과 `\n` 둘 다 허용된다고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-concept-14 — 조건문의 문법을 적어라. 조건이 여러 개일 때와, 어느 조건에도 해당하지 않을 때는 어떻게 쓰는가? — 3일치
- 코드 요지: 조건문 문법, 여러 조건, 해당 없음 처리를 묻는 개념 질문. 예시: `x = when n > 0 "양수" otherwise "그 외"`
- 확정 문장:
  - 조건문은 `when 조건 값` 형태이고, 조건이 여러 개면 `when` 줄을 이어서 여러 개 쓴다.
  - 어느 조건에도 해당하지 않을 때의 값은 마지막에 `otherwise 값`으로 쓴다.
  - 위에서부터 처음 참인 조건의 값이 선택된다(LLM-2, LLM-3 일치).
- 관찰예측: 조건이 위에서 아래로 검사되어 처음 참인 `when`의 값이 쓰이고, 모두 거짓이면 `otherwise`의 값이 쓰인다.
- 출처: LLM 3일치 (표현 선택: 공식문서 표현, when/otherwise 용어 기준)
- 실행검증: 해당 없음
- 비어 있음: `otherwise`를 생략했을 때의 동작(LLM-2만 모름 표명).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-concept-15 — 조건에 쓸 수 있는 비교 연산자와 논리 연산자를 나열하고 문법을 보여라. — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 조건에 쓰는 비교 연산자와 논리 연산자를 묻는 개념 질문. 예시: `ok = n >= 1 and n <= 10`
- 관찰예측: `and`로 이은 비교는 두 조건이 모두 참일 때 참이 된다.
- 표현판단: 사용자 검토(2026-10-22): 같지 않음 연산자는 없고 not과 등호로 표현한다고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-concept-16 — 정답 판정과 관련된 sink는 무엇이며 어떤 값(타입)을 받는가? 정답, 오답, 미응답 상태는 어떻게 표현하는가? — 3일치
- 코드 요지: 정답 판정 sink와 받는 타입, 정답·오답·미응답 표현을 묻는 개념 질문. 예시: `correct: this.numericValue = 10`
- 확정 문장:
  - 정답 판정 sink는 `correct`이고 Boolean 값을 받는다.
  - `true`는 정답, `false`는 오답이다.
- 관찰예측: `correct: this.numericValue = 10`처럼 쓰면 입력이 10일 때 정답, 아닐 때 오답으로 판정된다.
- 표현판단: 미응답 상태는 LLM-2, LLM-3이 모른다고 했고, LLM-1만 "제출 여부 조건 전까지 평가를 보류하거나 `correct:`에 값을 전달하지 않는 방식"이라고 답했다. 다른 답이 뒷받침하지 않으므로 확정 문장에서 제외했다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3, Boolean 타입 표기)
- 실행검증: 해당 없음
- 비어 있음: 미응답 상태의 표현과 값이 undefined일 때의 상태.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-concept-17 — 숫자를 비교해서 정답 판정을 할 때 주의할 점이 있는가? (예: 소수, 오차) — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 숫자를 비교해 정답 판정할 때의 주의점을 묻는 개념 질문. 핵심 줄: `correct: this.numericValue > 9.99 and this.numericValue < 10.01`
- 확정 문장에 붙은 보충 (판정 문장이 아님):
  - (LLM-1 보충) 오차의 원인으로 부동소수점 오차와 학생의 반올림 차이를 들었다.
- 관찰예측: 허용 범위를 부등식으로 지정하면 그 범위 안의 값이 정답으로 판정된다. 단순 `=` 비교는 오차가 있는 값이 오답 처리될 수 있다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-concept-18 — 존재하지 않는 sink나 source 이름을 쓰거나 문법이 틀렸을 때 Amplify에서는 어떻게 표시되는가? — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 존재하지 않는 sink·source 이름이나 문법 오류가 Amplify에서 어떻게 표시되는지 묻는 개념 질문.
- 관찰예측: 틀린 이름이나 문법이 있는 줄에 주황색 세모 느낌표 아이콘이 나타나고, 마우스를 올리면 오류 설명이 나온다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-concept-19 — (master)(화면 전체)에 쓰는 코드와 개별 컴포넌트에 쓰는 코드는 무엇이 다른가? — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: `(master)`(화면 전체) 코드와 개별 컴포넌트 코드의 차이를 묻는 개념 질문. 예시: `subtitle: "Hello"`
- 관찰예측: `(master)`에 `subtitle:` 등을 쓰면 특정 컴포넌트가 아니라 화면 전체의 부제목 등이 바뀐다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 


---

## code

### D-code-01 — Getting Started / sinks-sources — 3일치
- 코드 요지: 그래프 변수 m, b에 상수를 설정한다. 핵심 줄: `number("m"): 1.5` / `number("b"): 2`
- 확정 문장:
  - number("m")은 1.5, number("b")는 2로 설정된다.
- 관찰예측: 그래프에서 m, b를 쓰는 식은 m=1.5, b=2의 값을 받는다(예: y=mx+b 형태이면 y=1.5x+2).
- 출처: LLM 3일치 (표현 선택: 공식 용어 number sink 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-code-02 — Getting Started / sinks-sources — 3일치
- 코드 요지: 문자열 변수 customString을 정의해 submitLabel과 initialText에 같이 쓴다. 핵심 줄: `customString = "Hello world!"` / `submitLabel: customString`
- 확정 문장:
  - customString은 "Hello world!"로 정의된 변수이다.
  - submitLabel sink와 initialText sink가 모두 이 변수 값을 받는다.
- 관찰예측: 제출 버튼 label과 입력란 초기 내용이 둘 다 "Hello world!"이다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 submitLabel/initialText sink 기준, 서술은 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 비어 있음: 이 예시 코드가 어떤 컴포넌트에 놓이는지는 코드에 없다. 한 컴포넌트에 submitLabel과 initialText가 함께 있는 이유(자유 답변 종류)는 LLM-2가 모른다고 했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-code-03 — Getting Started / sinks-sources — 3일치
- 코드 요지: 1번 선택지의 내용을 다른 컴포넌트 input1에 정의된 변수 customString 값으로 설정한다. 핵심 줄: `choiceContent(1): input1.script.customString`
- 확정 문장:
  - choiceContent(1) sink가 다른 컴포넌트 input1의 변수 customString을 읽는다.
  - 다른 컴포넌트의 변수는 `컴포넌트.script.변수` 형태로 읽는다.
- 관찰예측: 1번 선택지에 input1의 customString 문자열이 보인다.
- 출처: LLM 3일치 (표현 선택: 공식 용어 choiceContent sink 기준, 서술은 가장 정확한 LLM-3)
- 표현판단: LLM-2는 선택지에 "Hello world!"가 표시된다고 단정했으나, LLM-1·LLM-3는 문자열 값을 말하지 않았다. D-code-02의 값을 가정한 것이라 확정 문장에서 뺐다.
- 실행검증: 해당 없음
- 비어 있음: customString의 실제 값은 이 코드에 없다(LLM-3).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-code-04 — Getting Started / sinks-sources — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 버튼 btn1의 누른 횟수와 누른 뒤 경과 시간을 그래프 변수 b, a로 보낸다. 핵심 줄: `number("b"): btn1.pressCount` / `number("a"): btn1.timeSincePress(10)`
- 관찰예측: 버튼을 누를수록 b가 늘고, 누른 뒤에는 a가 경과 시간에 따라 증가한다.
- 표현판단: 사용자 검토(2026-10-22): 1번 답(10초에 걸쳐 10까지 증가)을 채택했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-code-05 — Getting Started / dynamic-text — 3일치
- 코드 요지: input1의 수식 입력 값을 계산값과 LaTeX 문자열 두 가지로 각각 변수에 정의한다. 핵심 줄: `v = input1.numericValue`, `n = input1.latex`
- 확정 문장:
  - `예시:1`은 변수 `v`를 `input1.numericValue`(source)로 정의한다.
  - `예시:3`은 변수 `n`을 `input1.latex`(source)로 정의한다.
  - 두 줄 모두 변수 정의일 뿐 sink 설정이 없다.
- 관찰예측: sink가 없으므로 화면 외형은 바뀌지 않는다. input1의 입력이 바뀌면 `v`와 `n`의 값도 따라 갱신된다.
- 출처: LLM 3일치 (표현 선택: 공식문서 표현, source/numericValue 용어 기준)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-code-06 — Getting Started / dynamic-text — 판정 항목의 보충 (3일치급, 확정 문장은 grammar-defs.md의 같은 ID)
- 코드 요지: 수식 입력의 LaTeX와 계산값을 변수로 받아 `content` sink에 여러 줄 문자열로 넣는다. 핵심 줄: `n = input1.latex` / `You wrote: ${n}` / `Which evaluates to: ${v}`
- 관찰예측: input1에 `2+3`을 입력하면 `You wrote: 2+3` 아래 줄에 `Which evaluates to: 5`가 표시된다(LLM-1, LLM-2 예시). 입력이 바뀌면 두 줄도 따라 바뀐다.
- 표현판단: 사용자 검토(2026-10-22): 백틱으로 감싸면 수식 전용 텍스트로 보인다고 판정했다.
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-code-07 — Getting Started / dynamic-text — 3일치
- 코드 요지: 그래프의 점 A 라벨 sink에 input1의 `content`를 문자열 보간으로 넣는다. 핵심 줄: `pointLabel("A"): "Hello, ${input1.content}!"`
- 확정 문장:
  - `pointLabel("A")`는 괄호 인자(점 이름 `"A"`)가 붙은 sink이며, 그래프 점 A의 label을 설정한다.
  - 값은 `"Hello, ${input1.content}!"`로, `input1.content`(source)를 `${...}`로 문자열에 삽입한다.
- 관찰예측: input1에 이름을 입력하면 점 A의 label이 `Hello, 입력내용!`으로 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-code-08 — Getting Started / conditionals — 3일치
- 코드 요지: input1의 숫자를 정답 31과 비교해 힌트 문구를 고르는 변수 `feedback`을 정의한다. 핵심 줄: `when n < 10 "Way higher."` / `when n > 31 "Lower."` / `otherwise "Found it!"`
- 확정 문장:
  - `예시:1`은 `n`을 `input1.numericValue`로 정의한다.
  - `예시:3-9`는 `feedback`을 `when ... otherwise` 조건값으로 정의한다. 선택 결과는 `n`이 undefined이면 `" "`, `n < 10`이면 `"Way higher."`, `n > 100`이면 `"Way lower."`, `n < 31`이면 `"Higher."`, `n > 31`이면 `"Lower."`, 나머지(31)이면 `"Found it!"`이다.
  - 조건은 위에서부터 처음 맞는 것이 선택된다(LLM-2, LLM-3 일치).
- 관찰예측: `feedback`은 변수 정의일 뿐이라 sink에 연결하지 않으면 화면에 나타나지 않는다. content 등에 연결하면 31을 맞히는 힌트가 입력에 따라 바뀐다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-3, 줄별 풀이가 코드와 일치)
- 실행검증: 해당 없음
- 비어 있음: 앞 조건이 참일 때 뒤 조건이 평가되는지 여부(LLM-2만 코드추론으로 모름 표명).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-code-09 — Getting Started / correctness — 3일치
- 코드 요지: 현재 컴포넌트의 숫자 입력이 7보다 큰지를 변수에 담아 `correct` sink에 넘긴다. 핵심 줄: `correct = this.numericValue > 7` / `correct: correct`
- 확정 문장:
  - `예시:1`은 변수 `correct`를 `this.numericValue > 7`의 결과(Boolean)로 정의한다.
  - `예시:3`은 `correct` sink에 변수 `correct`의 값을 설정한다. 변수 이름과 sink 이름이 같은 형태다.
- 관찰예측: 7보다 큰 값을 입력하면 정답, 그 밖의 정의된 값을 입력하면 오답으로 판정된다.
- 출처: LLM 3일치 (표현 선택: 공식문서 표현, sink/numericValue 용어 기준)
- 실행검증: 해당 없음
- 비어 있음: 미입력 상태의 판정(LLM-3만 모름 표명).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-code-10 — Getting Started / correctness — 3일치
- 코드 요지: 다른 컴포넌트 exp1의 스크립트 변수 `correct`가 참인지에 따라 피드백 문구를 고르는 변수를 정의한다. 핵심 줄: `when exp1.script.correct "That's correct!"` / `otherwise "Not correct yet."`
- 확정 문장:
  - `예시:1-3`은 변수 `feedback`을 조건값으로 정의한다.
  - `exp1.script.correct`는 다른 컴포넌트 exp1에서 정의한 변수 `correct`를 읽는 참조이며, 참이면 `"That's correct!"`, 아니면 `"Not correct yet."`이 선택된다.
- 관찰예측: `feedback`은 정의만 있어 이 코드만으로는 화면에 나타나지 않는다. exp1의 정답 여부에 따라 두 문구 중 하나로 값이 정해진다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-2, `.script.` 참조를 변수 읽기로 설명)
- 실행검증: 해당 없음
- 비어 있음: 이 변수가 화면 어디에 표시되는지(LLM-3 모름 표명, 코드에 sink 없음).
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 

### D-code-11 — Getting Started / correctness — 3일치
- 코드 요지: 현재 그래프의 숫자 변수 `m`이 2인지를 변수에 담아 `correct` sink에 넘긴다. 핵심 줄: `isCorrect = this.number("m") = 2` / `correct: isCorrect`
- 확정 문장:
  - `예시:1`은 `isCorrect`를 `this.number("m") = 2`의 결과로 정의한다. 첫 번째 `=`는 변수 정의, 두 번째 `=`는 같음 비교다.
  - `예시:3`은 `correct` sink에 `isCorrect` 값을 설정한다.
- 관찰예측: 그래프의 `m` 값이 2가 되면 정답으로 판정된다.
- 출처: LLM 3일치 (표현 선택: 가장 정확한 LLM-1, `=` 비교 구분이 명시됨)
- 실행검증: 해당 없음
- 검토: [ ] 유지  [ ] 수정  [ ] 제외   메모: 
