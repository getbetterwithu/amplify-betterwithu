# 문법 항목 색인 (grammar-defs.md·examples-*.md 찾아보기)

> 판정 확정 항목은 grammar-defs.md에서, 3일치 항목과 판정 항목의 보충은 examples-*.md에서 `### <ID>` 제목으로 찾는다 (ID 앞글자 `A-`는 examples-A, `B-`는 examples-B, `C-`·`D-`는 examples-CD). 등급: 판정 확정 / 3일치. "검증필요"가 Y인 항목은 실행 검증 필요 표시가 붙은 13건이다.

> 화면 제목은 Amplify 공식 예제의 영문 제목이다. 형식은 `구성요소.sink또는source [sink|source]`이다.

| ID | 화면 제목 | 등급 | 검증필요 |
|---|---|---|---|
| A-graph-01 | Graph.number [source] | 3일치 |  |
| A-graph-02 | Graph.calculatorState [source] | 판정 확정 |  |
| A-graph-03 | Graph.numberList [source] | 3일치 |  |
| A-graph-04 | Graph.animationTime [source] | 판정 확정 |  |
| A-graph-05 | Graph.bounds [source] | 판정 확정 |  |
| A-graph-06 | Graph.labelText [source] | 3일치 |  |
| A-graph-07 | Graph.labelLatex [source] | 3일치 |  |
| A-graph-08 | Graph.labelNumericValue [source] | 판정 확정 |  |
| A-graph-09 | Graph.isAnimating [source] | 판정 확정 |  |
| A-graph-10 | Graph.currentX/Y [source] | 판정 확정 | Y |
| A-graph-11 | Graph.narration [sink] | 3일치 |  |
| A-graph-12 | Graph.animationDuration [sink] | 판정 확정 |  |
| A-graph-13 | Graph.animationKeyboardStepValue [sink] | 판정 확정 |  |
| A-graph-14 | Graph.saveOnChange [sink] | 판정 확정 | Y |
| A-graph-15 | Graph.resetAnimationOnChange [sink] | 판정 확정 |  |
| A-graph-16 | Graph.bounds [sink] | 판정 확정 |  |
| A-graph-17 | Graph.background [sink] | 판정 확정 |  |
| A-graph-18 | Graph.number [sink] | 판정 확정 |  |
| A-graph-19 | Graph.numberList [sink] | 판정 확정 |  |
| A-graph-20 | Graph.pointLabel [sink] | 3일치 |  |
| A-graph-21 | Graph.xAxisLabel [sink] | 3일치 |  |
| A-graph-22 | Graph.yAxisLabel [sink] | 3일치 |  |
| A-graph-24 | Graph.trace [sink] | 판정 확정 |  |
| A-graph-25 | Graph.function [sink] | 3일치 |  |
| A-graph-26 | Graph.warning [sink] | 판정 확정 |  |
| A-graph-27 | Graph.correct [sink] | 3일치 |  |
| A-graph-29 | Graph.hidden [sink] | 3일치 |  |
| A-sketch-01 | Sketch.number [source] | 판정 확정 |  |
| A-sketch-02 | Sketch.numberList [source] | 판정 확정 | Y |
| A-sketch-03 | Sketch.bounds [source] | 3일치 |  |
| A-sketch-04 | Sketch.labelText [source] | 3일치 |  |
| A-sketch-05 | Sketch.labelLatex [source] | 3일치 |  |
| A-sketch-06 | Sketch.labelNumericValue [source] | 3일치 |  |
| A-sketch-07 | Sketch.sketch [source] | 3일치 |  |
| A-sketch-08 | Sketch.currrentStroke [source] | 판정 확정 |  |
| A-sketch-09 | Sketch.currentX [source] | 판정 확정 | Y |
| A-sketch-10 | Sketch.currentY [source] | 판정 확정 | Y |
| A-sketch-11 | Sketch.smartStrokeJoining [sink] | 판정 확정 |  |
| A-sketch-12 | Sketch.narration [sink] | 판정 확정 |  |
| A-sketch-13 | Sketch.bounds [sink] | 판정 확정 |  |
| A-sketch-14 | Sketch.previewCurrentStroke [sink] | 판정 확정 |  |
| A-sketch-15 | Sketch.allowEraser [sink] | 판정 확정 |  |
| A-sketch-16 | Sketch.background [sink] | 판정 확정 |  |
| A-sketch-17 | Sketch.disableSketch [sink] | 판정 확정 |  |
| A-sketch-18 | Sketch.hideSketch [sink] | 판정 확정 |  |
| A-sketch-19 | Sketch.initialTool [sink] | 3일치 |  |
| A-sketch-20 | Sketch.initialColor [sink] | 3일치 |  |
| A-sketch-21 | Sketch.availableColors [sink] | 3일치 |  |
| A-sketch-22 | Sketch.number [sink] | 판정 확정 |  |
| A-sketch-23 | Sketch.numberList [sink] | 3일치 |  |
| A-sketch-24 | Sketch.xAxisLabel [sink] | 3일치 |  |
| A-sketch-25 | Sketch.yAxisLabel [sink] | 3일치 |  |
| A-sketch-27 | Sketch.function [sink] | 판정 확정 |  |
| A-sketch-28 | Sketch.trace [sink] | 3일치 |  |
| A-sketch-29 | Sketch.resetOnChange [sink] | 판정 확정 |  |
| A-sketch-30 | Sketch.correct [sink] | 3일치 |  |
| A-sketch-31 | Sketch.warning [sink] | 판정 확정 |  |
| A-sketch-32 | Sketch.readOnly [sink] | 판정 확정 |  |
| A-sketch-33 | Sketch.pointLabel [sink] | 3일치 |  |
| A-sketch-34 | Sketch.hidden [sink] | 3일치 |  |
| A-note-01 | Note.content [sink] | 판정 확정 |  |
| A-note-02 | Note.hidden [sink] | 3일치 |  |
| A-image-01 | Image.hidden [sink] | 판정 확정 |  |
| B-math-response-01 | Math Input.latex [source] | 3일치 |  |
| B-math-response-02 | Math Input.numericValue [source] | 3일치 |  |
| B-math-response-03 | Math Input.timeSinceSubmit [source] | 판정 확정 |  |
| B-math-response-04 | Math Input.submitted [source] | 판정 확정 |  |
| B-math-response-05 | Math Input.explainContent [source] | 판정 확정 |  |
| B-math-response-06 | Math Input.history [source] | 판정 확정 |  |
| B-math-response-07 | Math Input.lastValue [source] | 판정 확정 |  |
| B-math-response-08 | Math Input.submitCount [source] | 판정 확정 |  |
| B-math-response-09 | Math Input.initialLatex [sink] | 판정 확정 | Y |
| B-math-response-10 | Math input.placeholderLatex [sink] | 판정 확정 |  |
| B-math-response-11 | Math Input.disableEvaluation [sink] | 판정 확정 |  |
| B-math-response-12 | Math Input.errorMessage [sink] | 판정 확정 |  |
| B-math-response-13 | Math Input.suffix [sink] | 3일치 |  |
| B-math-response-14 | Math Input.capture [sink] | 3일치 |  |
| B-math-response-15 | Math Input.submitLabel [sink] | 3일치 |  |
| B-math-response-16 | Math Input.resetLabel [sink] | 3일치 |  |
| B-math-response-17 | Math Input.clearOnReset [sink] | 3일치 |  |
| B-math-response-18 | Math Input.submitDisabled [sink] | 3일치 |  |
| B-math-response-19 | Math Input.initialText [sink] | 판정 확정 |  |
| B-math-response-20 | Math Input.explainPrompt [sink] | 판정 확정 |  |
| B-math-response-21 | Math Input.showPeerResponses [sink] | 3일치 |  |
| B-math-response-22 | Math Input.showExplain [sink] | 3일치 |  |
| B-math-response-23 | Math Input.correct [sink] | 판정 확정 |  |
| B-math-response-24 | Math Input.readOnly [sink] | 판정 확정 |  |
| B-math-response-25 | Math Input.warning [sink] | 3일치 |  |
| B-math-response-26 | Math Input.resetOnChange [sink] | 판정 확정 |  |
| B-math-response-27 | Math Input.showSubmitButton [sink] | 3일치 |  |
| B-math-response-28 | Math Input.hidden [sink] | 판정 확정 |  |
| B-multiple-choice-01 | Choice.isSelected [source] | 판정 확정 |  |
| B-multiple-choice-02 | Choice.timeSinceSubmit [source] | 3일치 |  |
| B-multiple-choice-03 | Choice.submitted [source] | 3일치 |  |
| B-multiple-choice-04 | Choice.explainContent [source] | 3일치 |  |
| B-multiple-choice-05 | Choice.submitCount [source] | 3일치 |  |
| B-multiple-choice-06 | Choice.choiceContent [source] | 3일치 |  |
| B-multiple-choice-07 | Choice.choiceContent [sink] | 판정 확정 |  |
| B-multiple-choice-08 | Choice.initialText [sink] | 3일치 |  |
| B-multiple-choice-09 | Checkboxes.prompt [sink] | 판정 확정 |  |
| B-multiple-choice-10 | Choice.showExplain [sink] | 3일치 |  |
| B-multiple-choice-11 | Choice.maxSelectedChoices [sink] | 판정 확정 |  |
| B-multiple-choice-12 | Choice.explainPrompt [sink] | 3일치 |  |
| B-multiple-choice-13 | Choice.maxButtonsPerRow [sink] | 3일치 |  |
| B-multiple-choice-14 | Choice.submitLabel [sink] | 3일치 |  |
| B-multiple-choice-15 | Choice.showSubmitButton [sink] | 3일치 |  |
| B-multiple-choice-16 | Choice.correct [sink] | 판정 확정 | Y |
| B-multiple-choice-17 | Choice.warning [sink] | 3일치 |  |
| B-multiple-choice-18 | Choice.readOnly [sink] | 판정 확정 |  |
| B-multiple-choice-19 | Choice.hidden [sink] | 3일치 |  |
| B-multiple-choice-20 | Choice.resetOnChange [sink] | 3일치 |  |
| B-multiple-choice-21 | Choice.matchesKey [Source] | 3일치 | Y |
| B-ordered-list-01 | Ordered List.matchesKey [source] | 3일치 |  |
| B-ordered-list-02 | Ordered List.order [source] | 판정 확정 |  |
| B-ordered-list-03 | Ordered List.itemAtIndex [source] | 3일치 |  |
| B-ordered-list-04 | Ordered List.textAtIndex [source] | 3일치 |  |
| B-ordered-list-05 | Ordered List.indexOfItem [source] | 3일치 |  |
| B-ordered-list-06 | Ordered List.initialOrder [sink] | 3일치 |  |
| B-ordered-list-07 | Ordered List.itemContent [sink] | 3일치 |  |
| B-ordered-list-08 | Ordered List.correct [sink] | 3일치 |  |
| B-ordered-list-09 | Ordered List.warning [sink] | 판정 확정 | Y |
| B-ordered-list-10 | Ordered List.readOnly [sink] | 판정 확정 |  |
| B-ordered-list-11 | Ordered List.hidden [sink] | 3일치 |  |
| B-free-response-01 | Input.content [source] | 판정 확정 |  |
| B-free-response-02 | Input.timeSinceSubmit [source] | 3일치 |  |
| B-free-response-03 | Input.submitted [source] | 3일치 |  |
| B-free-response-04 | Input.initialText [sink] | 3일치 |  |
| B-free-response-05 | Input.placeholderText [sink] | 3일치 |  |
| B-free-response-06 | Input.submitLabel [sink] | 3일치 |  |
| B-free-response-07 | Input.showSubmitButton [sink] | 3일치 |  |
| B-free-response-08 | Input.submitDisabled [sink] | 3일치 |  |
| B-free-response-09 | Input.hidden [sink] | 3일치 |  |
| C-table-01 | Table.cellContent [source] | 3일치 |  |
| C-table-02 | Table.cellNumericValue [source] | 3일치 |  |
| C-table-03 | Table.columnNumericValues [source] | 3일치 |  |
| C-table-04 | Table.cellHasFocus [source] | 3일치 |  |
| C-table-05 | Table.maxRows [sink] | 3일치 |  |
| C-table-06 | Table.disableRowChanges [sink] | 3일치 |  |
| C-table-07 | Table.cellContent [sink] | 3일치 |  |
| C-table-08 | Table.cellSuffix [sink] | 3일치 |  |
| C-table-09 | Table.cellErrorMessage [sink] | 3일치 |  |
| C-table-10 | Table.initialCellContent [sink] | 판정 확정 |  |
| C-table-11 | Table.cellEditable [sink] | 3일치 |  |
| C-table-12 | Table.cellDisableEvaluation [sink] | 판정 확정 |  |
| C-table-13 | Table.correct [sink] | 3일치 |  |
| C-table-14 | Table.warning [sink] | 3일치 |  |
| C-table-15 | Table.readOnly [sink] | 3일치 |  |
| C-table-16 | Table.hidden [sink] | 3일치 |  |
| C-table-17 | Table.resetOnChange [sink] | 판정 확정 |  |
| C-action-button-01 | Action Button.timeSincePress [source] | 판정 확정 |  |
| C-action-button-02 | Action Button.history [source] | 3일치 |  |
| C-action-button-03 | Action Button.lastValue [source] | 3일치 |  |
| C-action-button-04 | Action Button.pressCount [source] | 3일치 |  |
| C-action-button-05 | Action Button.capture [sink] | 3일치 |  |
| C-action-button-06 | Action Button.label [sink] | 3일치 |  |
| C-action-button-07 | Action Button.resetLabel [sink] | 판정 확정 |  |
| C-action-button-08 | Action Button.disabled [sink] | 3일치 |  |
| C-action-button-09 | Action Button.style [sink] | 판정 확정 |  |
| C-action-button-10 | Button.resetStyle [sink] | 3일치 |  |
| C-action-button-11 | Action Button.resetOnChange [sink] | 판정 확정 |  |
| C-action-button-12 | Action Button.hidden [sink] | 3일치 |  |
| C-polypad-02 | Polypad.polypadState / initialState [source/sink] | 3일치 |  |
| C-polypad-03 | Polypad.value [source] | 3일치 |  |
| C-polypad-04 | Polypad.correct [sink] | 3일치 |  |
| C-polypad-05 | Polypad.isInitialState [source] | 3일치 |  |
| C-polypad-06 | Polypad.hidden [sink] | 3일치 |  |
| C-polypad-07 | Polypad.narration [sink] | 3일치 |  |
| C-polypad-08 | Polypad.warning [sink] | 3일치 |  |
| C-polypad-09 | Polypad.readOnly [sink] | 3일치 |  |
| C-challenge-creator-01 | Challenge Creator.preventSubmissionReason [Sink] | 3일치 |  |
| C-challenge-creator-02 | Challenge Creator.preventChallengeCreationReason [Sink] | 3일치 |  |
| C-challenge-creator-03 | Challenge Creator.challengeText [Sink] | 판정 확정 |  |
| C-challenge-creator-04 | Challenge Creator.challengeBackground [Sink] | 3일치 |  |
| C-challenge-creator-05 | Challenge Creator.responseText [Sink] | 3일치 |  |
| C-challenge-creator-06 | Challenge Creator.responseBackground [Sink] | 3일치 |  |
| C-screen-01 | Screen.title [sink] | 3일치 |  |
| C-screen-02 | Screen.subtitle [sink] | 3일치 |  |
| C-screen-03 | Screen.coverText [sink] | 3일치 | Y |
| C-screen-04 | Screen.coverButtonLabel [sink] | 3일치 |  |
| C-screen-05 | Screen.disableCalculatorReason [sink] | 3일치 |  |
| C-card-sort-01 | Card Sort.totalCards [source] | 3일치 |  |
| C-card-sort-02 | Card Sort.totalCorrectCards [source] | 3일치 |  |
| C-card-sort-03 | Card Sort.matchesKey [source] | 3일치 |  |
| C-media-01 | Media.time [source] | 판정 확정 |  |
| C-media-02 | Media.time [sink] | 판정 확정 |  |
| C-media-03 | Media.hidden [sink] | 3일치 |  |
| C-adv-01 | Random Numbers | 판정 확정 |  |
| C-adv-03 | Updating Random with a button | 3일치 |  |
| C-adv-04 | Using number & graphLabel sinks | 3일치 |  |
| C-adv-05 | History & numberList | 3일치 |  |
| C-adv-07 | Notice and Wonder | 3일치 |  |
| C-adv-08 | Wiring up graph and sketch | 3일치 |  |
| C-adv-09 | Backgrounds and transformations | 3일치 |  |
| C-adv-10 | Simple aggregate | 판정 확정 |  |
| C-adv-11 | Aggregate | 판정 확정 |  |
| C-adv-12 | Using simple function | 판정 확정 | Y |
| C-adv-13 | Using simple function | 판정 확정 | Y |
| C-adv-14 | Using pattern parsing | 3일치 |  |
| C-adv-15 | (제목 없음) | 3일치 |  |
| D-concept-01 | `a = b` 같은 문장은 CL에서 무엇을 뜻하는가? 다른 프로그래밍 언어의 대입문과 무엇이 다른가? | 3일치 |  |
| D-concept-02 | sink와 source는 각각 무엇인가? 값이 어느 방향으로 흐르는지, 각각 예를 하나씩 들어라. | 판정 확정 |  |
| D-concept-03 | sink를 설정하는 문장의 형태를 아는 대로 모두 적어라. (예: 이름만 쓰는 경우, 이름 뒤에 괄호 인자가 붙는 경우) | 3일치 |  |
| D-concept-04 | CL에서 변수(variable)는 어떻게 정의하고 어디서 쓸 수 있는가? 한 컴포넌트에서 정의한 변수를 다른 컴포넌트에서 읽을 수 있는가? 읽는다면 방법은? | 3일치 |  |
| D-concept-05 | `this`와 `컴포넌트이름.무언가` 형태의 참조는 각각 무엇을 가리키는가? | 판정 확정 |  |
| D-concept-08 | source와 sink가 요구하는 값의 타입(숫자, 문자열, 시간 길이 등)이 맞지 않으면 어떻게 되는가? 아는 타입을 나열하라. | 3일치 | Y |
| D-concept-09 | 코드에서 줄의 순서는 실행 결과에 영향을 주는가? | 판정 확정 |  |
| D-concept-10 | `${...}` 문법은 무엇이고 어디에서 쓸 수 있는가? 안에 들어갈 수 있는 것은 무엇인가? | 3일치 |  |
| D-concept-11 | 수식 입력의 `numericValue`와 `latex`는 어떻게 다르고, 문자열 안에 넣으면 각각 어떻게 보이는가? | 판정 확정 |  |
| D-concept-12 | 여러 줄 문자열은 어떻게 쓰는가? 줄바꿈은 어떻게 표현하는가? | 판정 확정 |  |
| D-concept-14 | 조건문의 문법을 적어라. 조건이 여러 개일 때와, 어느 조건에도 해당하지 않을 때는 어떻게 쓰는가? | 3일치 |  |
| D-concept-15 | 조건에 쓸 수 있는 비교 연산자와 논리 연산자를 나열하고 문법을 보여라. | 판정 확정 |  |
| D-concept-16 | 정답 판정과 관련된 sink는 무엇이며 어떤 값(타입)을 받는가? 정답, 오답, 미응답 상태는 어떻게 표현하는가? | 3일치 |  |
| D-concept-17 | 숫자를 비교해서 정답 판정을 할 때 주의할 점이 있는가? (예: 소수, 오차) | 판정 확정 |  |
| D-concept-18 | 존재하지 않는 sink나 source 이름을 쓰거나 문법이 틀렸을 때 Amplify에서는 어떻게 표시되는가? | 판정 확정 |  |
| D-concept-19 | (master)(화면 전체)에 쓰는 코드와 개별 컴포넌트에 쓰는 코드는 무엇이 다른가? | 판정 확정 |  |
| D-code-01 | Getting Started / sinks-sources | 3일치 |  |
| D-code-02 | Getting Started / sinks-sources | 3일치 |  |
| D-code-03 | Getting Started / sinks-sources | 3일치 |  |
| D-code-04 | Getting Started / sinks-sources | 판정 확정 |  |
| D-code-05 | Getting Started / dynamic-text | 3일치 |  |
| D-code-06 | Getting Started / dynamic-text | 판정 확정 |  |
| D-code-07 | Getting Started / dynamic-text | 3일치 |  |
| D-code-08 | Getting Started / conditionals | 3일치 |  |
| D-code-09 | Getting Started / correctness | 3일치 |  |
| D-code-10 | Getting Started / correctness | 3일치 |  |
| D-code-11 | Getting Started / correctness | 3일치 |  |
| U-alias-01 | 변수에 컴포넌트를 넣어 부르기 (`i = input1`, 사용자 판정으로 추가) | 판정 확정 | |
