# 공식 문서 발췌 (컴포넌트별 sink·source, 고급 주제)

> 등급: **1등급 — 공식 영어 원문**. 출처: classroom.amplify.com/computation-layer/documentation. 설명은 번역하지 않은 원문이다.

> 컴포넌트별 sink/source 목록에서 `kind`는 sink 또는 source이다. 목록에 없는 이름은 "이 자료에서는 찾지 못했습니다"라고 답한다.


# 1부. 컴포넌트별 sink·source


## Graph and Graphing Calc  `#component:input/graph`

- **animationDuration** [sink] — Adds an animation playhead on top of the graph as if it were a video. This sets the duration for the animation. A non-positive value hides the playhead. Note: Only works with graph exhibits.
- **animationKeyboardStepValue** [sink] — Sets the amount of time (in seconds) that an animation moves when its scrubber is adjusted with the arrow keys. If not specified, the scrubber moves in increments of 1 second. Note: Only works with graph exhibits.
- **saveOnChange** [sink] — Specify a string value. If that value changes, the component saves its state.
- **resetAnimationOnChange** [sink] — Specify a string value. If that value changes, the animation timer resets.
- **number(identifier: latex)** [sink] — Sets the value of a variable in the calculator. This will override any existing definitions of that variable.
- **numberList(identifier: latex)** [sink] — Sets a variable in the calculator to the contents of a list. This will override any existing definitions of that variable.
- **expression(identifier: latex, ...allowedSymbols: latex)** [sink] — Sets a variable in the calculator to an expression with the provided latex. This will override any existing definitions of that variable. The first parameter is the name of the variable or function to be defined. The optional additional parameters specify the symbols that the latex expression is allowed to reference. (By default, it will not be allowed to reference any existing variables or functions in the calculator.)
- **pointLabel(identifier: string)** [sink] — Sets a label for a point. This only works for points defined like A=(1,2), and the identifier needs to match the name given to the point (A in this case). Takes a string. The label next to the point exactly matches the provided string, so the label is turned off if the empty string is provided.
- **xAxisLabel** [sink] — Sets the string we display along the x-axis. This overrides any user interaction, so we caution against using it with fullscreen graphs.
- **yAxisLabel** [sink] — Sets the string we display along the y-axis. This overrides any user interaction, so we caution against using it with fullscreen graphs.
- **audioTraceReverseExpressions** [sink] — Specifies whether expressions are traversed in reverse order when audio trace is active. This behavior may be desired in situations where the curves you wish a student to examine are declared at the end of the calculator's expression list so that they appear in the foreground.
- **trace** [sink] — Allows tracing curves to inspect coordinates and shows point coordinates when clicked.
- **narration(narrationIndex: number)** [sink] — Text that screen readers will read aloud. Similar to image alt text, narration can be used to describe a graph or sketch. Example: narration: "The graph shows a plot of time studied (in hours) on the x-axis and test scores on the y-axis." You can include multiple narrations for a graph to separate pieces of information from one another. Example: narration(1): "A description of the graph's main characteristics would go here." narration(2): "The line does not pass through all of the points." In the above example, narration(2) could change as the student interacts with the activity without needing to modify the graph description in narration(1). Separating narrations also minimizes the amount of text a screen reader needs to speak.
- **bounds** [sink] — Sets the bounds of the graph. Commonly used in combination with the "background" sink. This overrides user interaction, so we caution against using it with fullscreen graphs.
- **graphDescription** [sink] — Sets the description read by screen readers for the entire graph or calculator component. Use this to provide a custom accessible label that overrides the default screen reader announcement for the graph.
- **background** [sink] — Sets the background layer of the graph.
- **showResetButton** [sink] — If this is a geometry component, controls the presence of the reset button.
- **correct** [sink] — Sets a Boolean value that determines whether or not a gray checkmark is displayed for the student's screen in the dashboard's summary view.
- **warning** [sink] — Sets a string that is displayed as a tooltip in the teacher dashboard attached to a warning icon.
- **readOnly** [sink] — Sets a Boolean value that determines whether or not a component will be ignored when determining a screen's correctness. If all components have a readOnly value of "true," we display a dash for the student's screen in the dashboard's summary view, indicating teachers can focus their efforts elsewhere.
- **hidden** [sink] — When true, this component will not be shown to students.
- **function(identifier: latex)** [sink] — Sets the output of simpleFunction() to a variable defined in the graph.
- **number(latex: latex)** [source] — Gets the numerical value of a variable in the graph.
- **numberList(latex: latex)** [source] — Gets the list of numbers that was assigned to the variable in the graph.
- **calculatorState** [source] — Gets the full state of a graph. Pass this, for example, into the graphLayer method.
- **bounds** [source] — Gets the bounds of a graph component.
- **labelText(identifier: string)** [source] — Gets the content from a point label based on the name of the point.
- **labelLatex(identifier: string)** [source] — Gets the inner latex content from a point label based on the name of the point.
- **labelNumericValue(identifier: string)** [source] — Evaluates to content of a point label based on the name of the point.
- **animationTime** [source] — Gets the position of the animation playhead. Use in conjunction with animationDuration.
- **isAnimating** [source] — Tells whether the animation is running. Use in conjunction with animationDuration.
- **currentX** [source] — Gets the current x-coordinate of the mouse. Works on hover with a mouse and while depressed for touch.
- **currentY** [source] — Gets the current y-coordinate of the mouse. Works on hover with a mouse and while depressed for touch.

## Multiple Choice and Checkboxes  `#component:multiple-choice`

- **choiceContent(choiceIndex: number)** [sink] — Sets the content for a given multiple choice option, indexed starting with 1. (This only works if the multiple choice option at this index includes some content already.)
- **initialText** [sink] — Sets the initial value of the text input for explain type multiple choice.
- **prompt** [sink] — Sets the small italicized prompt above the choices. If blank, no prompt will show up. If this sink is unused and the choice type is multi-select, we will use the default text: "(Select all that apply.)"
- **showExplain** [sink] — Should we ask students to explain their answer?
- **maxSelectedChoices** [sink] — Sets how many choices a student is allowed to select. Only applies to Checkbox components.
- **explainPrompt** [sink] — Sets a string that replaces the generic "Explain your thinking" prompt on "explain" multiple choice components.
- **maxButtonsPerRow** [sink] — Takes a number from 1 to 10, and updates the layout to not allow more than that many buttons in a row. Note that built-in wrapping behavior could result in fewer buttons in a row. Only works with the "Button" layout of multiple choice or checkboxes, and only allows integer values between 1 and 10. Values less than 1 are ignored, and values greater than 10 are clamped to 10. Non-integers are first rounded.
- **submitLabel** [sink] — Specify a label for the submit button.
- **resetLabel** [sink] — Specify a label for the reset link.
- **showSubmitButton** [sink] — When true, force show submit button. When false, force hide submit button, unless a source relies on it.
- **disableChange** [sink] — When true, disable selecting a choice or changing an existing selection.
- **correct** [sink] — Sets a Boolean value that determines whether or not a gray checkmark is displayed for the student's screen in the dashboard's summary view.
- **warning** [sink] — Sets a string that is displayed as a tooltip in the teacher dashboard attached to a warning icon.
- **readOnly** [sink] — Sets a Boolean value that determines whether or not a component will be ignored when determining a screen's correctness. If all components have a readOnly value of "true," we display a dash for the student's screen in the dashboard's summary view, indicating teachers can focus their efforts elsewhere.
- **hidden** [sink] — When true, this component will not be shown to students.
- **resetOnChange** [sink] — Specify a string value. If that value changes, the component resets.
- **matchesKey** [source] — Returns whether response matches the answer key. If no answer key is provided, returns false.
- **isSelected(choiceIndex: number)** [source] — Gets a Boolean that describes whether or not a particular multiple choice option has been selected, given the index of that option, starting with 1. This works for explain, simple, or multi-select multiple choice components.
- **timeSinceSubmit(maxTime: number)** [source] — Gets the seconds (plus milliseconds) since the "Submit" button was pressed.
- **submitted** [source] — Gets a Boolean value that indicates whether or not the multiple choice component has been submitted.
- **explainContent** [source] — Content of the "explain" text box.
- **submitCount** [source] — Gets the number of times the multiple choice component has been submitted.
- **isSelectedList** [source] — Gets a boolean array indicating which choices are selected. Each element corresponds to whether that choice is selected (true) or not (false).
- **choiceContent(index: number)** [source] — Gets the string content for choice with the provided index.

## Polygraph  `#component:polygraph`


## Polypad  `#component:polypad`

- **narration(narrationIndex: number)** [sink] — Text that screen readers will read aloud. Similar to image alt text, narration can be used to describe a polypad. As with the graph narration sink, you can include multiple narrations for a polypad to separate pieces of information from one another. This allows you to modify narrations independently and minimizes the amount of text a screen reader needs to speak.
- **initialState** [sink] — Sets the initial Polypad state. This will not affect the customization options in the settings menu.
- **initialViewport** [sink] — Sets the initial Polypad viewport.
- **customConfetti** [sink] — Sets emoji to be used as confetti particles.
- **textVariable(textVariableName: string)** [sink] — Sets a Polypad text variable. Text variables can be used to set the content of a text tile.
- **interactivityVariable(interactivityVariableName: string)** [sink] — Sets a Polypad interactivity variable. Interactivity variables can be used to control the interactivity status of tiles. Valid values are "normal", "locked", "fixed", "generator", and "permanent".
- **visibilityVariable(visibilityVariableName: string)** [sink] — Sets a Polypad visibility variable. Visibility variables can be used to control the visibility of tiles. Valid values are "visible" and "hidden".
- **resetOnChange** [sink] — Specify a string value. If that value changes, the component resets.
- **hidden** [sink] — When true, this component will not be shown to students.
- **correct** [sink] — Sets a Boolean value that determines whether or not a gray checkmark is displayed for the student's screen in the dashboard's summary view.
- **warning** [sink] — Sets a string that is displayed as a tooltip in the teacher dashboard attached to a warning icon.
- **readOnly** [sink] — Sets a Boolean value that determines whether or not a component will be ignored when determining a screen's correctness. If all components have a readOnly value of "true," we display a dash for the student's screen in the dashboard's summary view, indicating teachers can focus their efforts elsewhere.
- **polypadState** [source] — Gets the full state of a Polypad. Pass this, for example, into the Polypad's initialState sink.
- **isInitialState** [source] — Gets a Boolean value that indicates whether the student has interacted with the Polypad.

## Screen  `#component:screen`

- **title** [sink] — Overrides the provided title with a string value. You can use string interpolation (e.g., "hello ${ name }") and conditionals to build rich text to show to the user. Note: We recommend including placeholder text as the display content, which will appear in the miniscreen, teacher dashboard, and teacher guide.
- **subtitle** [sink] — Adds a subtitle that is centered under the screen title.
- **coverText** [sink] — Covers the screen with the text provided. The cover is dismissable.
- **coverButtonLabel** [sink] — Use in conjunction with coverText to change the button text from the default ("Ok"). If set to an empty string, the cover won't be dismissable.
- **disableCalculatorReason** [sink] — If provided, disables the calculator tool.

## 그림판  `#component:sketch`

- **smartStrokeJoining** [sink] — Perform mutations on mouseup: removing nearby points and joining with other strokes. Most useful when sketch is used for curve sketching, e.g. in Function Carnival. Defaults to false.
- **allowEraser** [sink] — Sometimes you only want students to be able to clear, not erase. Set this to false if that's the mood you're in.
- **disableSketch** [sink] — Sets whether drawing on a sketch is permitted.
- **hideSketch** [sink] — Hides the student's sketch. Also disables sketching since anything sketched would be hidden.
- **initialTool** [sink] — Sets the starting tool.
- **initialColor** [sink] — Sets the starting color.
- **availableColors** [sink] — Configures the available colors in sketch.
- **number(identifier: latex)** [sink] — If the sketch has a graph background, sets the value of a variable in the calculator. This will override any existing definitions of that variable.
- **numberList(identifier: latex)** [sink] — If the sketch has a graph background, sets a variable in the calculator to the contents of a list. This will override any existing definitions of that variable.
- **expression(identifier: latex, ...allowedSymbols: latex)** [sink] — If the sketch has a graph background, sets a variable in the calculator to an expression with the provided latex. This will override any existing definitions of that variable. The first parameter is the name of the variable or function to be defined. The optional additional parameters specify the symbols that the latex expression is allowed to reference. (By default, it will not be allowed to reference any existing variables or functions in the calculator.)
- **pointLabel(identifier: string)** [sink] — If the sketch has a graph background, sets a label for a point on the graph. This only works for points defined like A=(1,2), and the identifier needs to match the name given to the point (A in this case). Takes a string. The label next to the point exactly matches the provided string, so the label is turned off if the empty string is provided.
- **xAxisLabel** [sink] — If the sketch has a graph background, sets the string we display along the x-axis.
- **yAxisLabel** [sink] — If the sketch has a graph background, sets the string we display along the y-axis.
- **audioTraceReverseExpressions** [sink] — If the sketch has a graph background, specifies whether expressions are traversed in reverse order when audio trace is active. This behavior may be desired in situations where the curves you wish a student to examine are declared at the end of the calculator's expression list so that they appear in the foreground.
- **trace** [sink] — If the sketch has a graph background, allows tracing curves to inspect coordinates and shows point coordinates when clicked.
- **narration(narrationIndex: number)** [sink] — Text that screen readers will read aloud. Similar to image alt text, narration can be used to describe a graph or sketch. Example: narration: "The graph shows a plot of time studied (in hours) on the x-axis and test scores on the y-axis." You can include multiple narrations for a graph to separate pieces of information from one another. Example: narration(1): "A description of the graph's main characteristics would go here." narration(2): "The line does not pass through all of the points." In the above example, narration(2) could change as the student interacts with the activity without needing to modify the graph description in narration(1). Separating narrations also minimizes the amount of text a screen reader needs to speak.
- **bounds** [sink] — Sets the bounds of this sketch. If the sketch has a graph background, it will be updated to match.
- **graphDescription** [sink] — Sets the description read by screen readers for the entire graph or calculator component. Use this to provide a custom accessible label that overrides the default screen reader announcement for the graph.
- **background** [sink] — Sets the background of the sketch.
- **correct** [sink] — Sets a Boolean value that determines whether or not a gray checkmark is displayed for the student's screen in the dashboard's summary view.
- **warning** [sink] — Sets a string that is displayed as a tooltip in the teacher dashboard attached to a warning icon.
- **readOnly** [sink] — Sets a Boolean value that determines whether or not a component will be ignored when determining a screen's correctness. If all components have a readOnly value of "true," we display a dash for the student's screen in the dashboard's summary view, indicating teachers can focus their efforts elsewhere.
- **hidden** [sink] — When true, this component will not be shown to students.
- **function(identifier: latex)** [sink] — Sets the output of simpleFunction() to a variable defined in the graph.
- **resetOnChange** [sink] — Specify a string value. If that value changes, the component resets.
- **number(latex: latex)** [source] — If the sketch has a graph background, gets the numerical value of a variable in the graph.
- **numberList(latex: latex)** [source] — If the sketch has a graph background, gets the list of numbers that was assigned to the variable in the graph.
- **calculatorState** [source] — Gets the full state of a graph. Pass this, for example, into the graphLayer method.
- **bounds** [source] — Gets the bounds of a sketch component.
- **labelText(identifier: string)** [source] — If the sketch has a graph background, gets the text content from a point label in the graph based on the name of the point.
- **labelLatex(identifier: string)** [source] — If the sketch has a graph background, gets the inner latex content from a point label in the graph based on the name of the point.
- **labelNumericValue(identifier: string)** [source] — If the sketch has a graph background, evaluates the content of a point label in the graph based on the name of the point.
- **sketch** [source] — Gets a sketch object that represents everything drawn on the sketch.
- **currentStroke** [source] — Gets a sketch object that represents the current stroke in progress.
- **currentX** [source] — Gets the current x-coordinate of the mouse. Works on hover with a mouse and while depressed for touch.
- **currentY** [source] — Gets the current y-coordinate of the mouse. Works on hover with a mouse and while depressed for touch.

## 메모  `#component:exhibit/text`

- **content** [sink] — Sets the content of a note, which is very useful for creating dynamic elements in the note. This also overwrites any text you enter in the note itself. (We will still display text written in the note component in the teacher dashboard, in the thumbnail, and in the teacher guide.)
- **hidden** [sink] — When true, this component will not be shown to students.

## 미디어  `#component:video`

- **time** [sink] — Sets the playhead time of the video (seconds).
- **hidden** [sink] — When true, this component will not be shown to students.
- **time** [source] — Gets the current playhead time of the video (seconds).

## 수식 답변  `#component:input/expression`

- **initialLatex** [sink] — Sets the initial value of the expression input. Should be a valid LaTeX string.
- **placeholderLatex** [sink] — Sets the placeholder of the input. Should be a valid LaTeX string.
- **disableEvaluation** [sink] — Never show evaluated user input on student side.
- **errorMessage** [sink] — An error to show to the student. Note: This will not show up in the teacher dashboard. (Use the "warning" sink to show warnings to the teacher.)
- **suffix** [sink] — Adds a suffix to everything entered by the student. Recommended for inputs that expect a certain unit (e.g., ft. or %).
- **capture(key: string)** [sink] — Sets a variable you want to capture every time the expression input is submitted. (Often times this is the numeric value of the expression input.) Retrieve the history of that variable later using the history source.
- **submitLabel** [sink] — Specify a label for the submit button.
- **showSubmitButton** [sink] — When true, force show submit button. When false, force hide submit button, unless a source relies on it.
- **resetLabel** [sink] — Specify a label for the reset link.
- **clearOnReset** [sink] — If true, when the user goes to edit their expression, we'll clear the prior one.
- **submitDisabled** [sink] — Disable the submit button. Note: Even if set to false, the input button will be disabled if the input is empty.
- **initialText** [sink] — Sets the initial value of the text input when students are asked to explain their thinking.
- **explainPrompt** [sink] — Sets a string that replaces the generic "Explain your thinking" prompt in the text input when students are asked to explain their answer.
- **showPeerResponses** [sink] — Overrides the "show classmates' responses" checkbox, and lets you use that feature even when it's not at the end of a column.
- **showExplain** [sink] — Should we ask students to explain their answer?
- **disableEdit** [sink] — Disables editing the expression.
- **correct** [sink] — Sets a Boolean value that determines whether or not a gray checkmark is displayed for the student's screen in the dashboard's summary view.
- **warning** [sink] — Sets a string that is displayed as a tooltip in the teacher dashboard attached to a warning icon.
- **readOnly** [sink] — Sets a Boolean value that determines whether or not a component will be ignored when determining a screen's correctness. If all components have a readOnly value of "true," we display a dash for the student's screen in the dashboard's summary view, indicating teachers can focus their efforts elsewhere.
- **hidden** [sink] — When true, this component will not be shown to students.
- **resetOnChange** [sink] — Specify a string value. If that value changes, the component resets.
- **latex** [source] — Gets the LaTeX string of the input, which is useful for importing into the graphing calculator, the note, and other components.
- **numericValue** [source] — Gets the evaluated value of an expression input. For example, "2+2" will return the number 4.
- **timeSinceSubmit(maxTime: number)** [source] — Gets the seconds (plus milliseconds) since the the expression input was submitted. It resets to zero if the student focuses into the input again. Increase that time by passing a parameter, as in timeSincePress(20).
- **submitted** [source] — Gets a Boolean value that indicates whether or not the expression input has been submitted.
- **explainContent** [source] — Content of the "explain" text box.
- **history(key: string)** [source] — Gets the history of a variable that was defined using the "capture" sink.
- **lastValue(key: string)** [source] — Gets the last value captured for a variable that was defined using the "capture" sink.
- **submitCount** [source] — Gets the number of times the input has been submitted.

## 이미지  `#component:exhibit/image`

- **hidden** [sink] — When true, this component will not be shown to students.

## 자유 답변  `#component:input/text`

- **initialText** [sink] — Sets the initial value of the text input.
- **placeholderText** [sink] — Sets the placeholder text of the input.
- **showSubmitButton** [sink] — When true, force show submit button. When false, force hide submit button, unless a source relies on it.
- **submitDisabled** [sink] — Disable the submit button. Note: Even if set to false, the input button will be disabled if the input is empty.
- **submitLabel** [sink] — Specify a label for the submit button.
- **resetLabel** [sink] — Specify a label for the reset link.
- **clearOnReset** [sink] — Must be used in conjunction with resetOnChange. Gets a Boolean value indicating whether to clear content when the component's submit button is reset via resetOnChange. If true, reset also clears text input.
- **correct** [sink] — Sets a Boolean value that determines whether or not a gray checkmark is displayed for the student's screen in the dashboard's summary view.
- **warning** [sink] — Sets a string that is displayed as a tooltip in the teacher dashboard attached to a warning icon.
- **readOnly** [sink] — Sets a Boolean value that determines whether or not a component will be ignored when determining a screen's correctness. If all components have a readOnly value of "true," we display a dash for the student's screen in the dashboard's summary view, indicating teachers can focus their efforts elsewhere.
- **hidden** [sink] — When true, this component will not be shown to students.
- **resetOnChange** [sink] — Specify a string value. If that value changes, the component resets.
- **content** [source] — Gets the student input value as a string.
- **richText** [source] — Gets Rich text content preserving formatting
- **timeSinceSubmit(maxTime: number)** [source] — Gets the seconds (plus milliseconds) since the submit button was pressed.
- **submitted** [source] — Gets a Boolean value indicating whether or not the input has been submitted.
- **submitCount** [source] — Gets the number of times the input has been submitted.

## 정렬 리스트  `#component:reorder`

- **initialOrder** [sink] — Takes a numberList of where each item should start. Accepts any numberList as an order (with ties leaving two items in order). For example, [3, 1, 2] would mean that the first authored item would go in the last slot, the 2nd in the first slot, and the 3rd in the middle slot. [.25, 0, .25] would mean that the 2nd item goes first, the 1st goes right after, and the 3rd stays 3rd. As soon as a student reorders, the response is locked in and this sink is ignored.
- **itemContent(itemIndex: number)** [sink] — Sets the content for a given item, indexed starting with 1. (This only works if the item at this index exists.)
- **correct** [sink] — Sets a Boolean value that determines whether or not a gray checkmark is displayed for the student's screen in the dashboard's summary view.
- **warning** [sink] — Sets a string that is displayed as a tooltip in the teacher dashboard attached to a warning icon.
- **readOnly** [sink] — Sets a Boolean value that determines whether or not a component will be ignored when determining a screen's correctness. If all components have a readOnly value of "true," we display a dash for the student's screen in the dashboard's summary view, indicating teachers can focus their efforts elsewhere.
- **hidden** [sink] — When true, this component will not be shown to students.
- **matchesKey** [source] — Returns whether this matches the key (if provided).
- **order** [source] — Returns a numberList of where each item currently is (indexOfItem).
- **itemAtIndex(itemIndex: number)** [source] — Returns the starting item index of the item that's at the given index (indexed starting with 1).
- **textAtIndex(itemIndex: number)** [source] — Returns the string for the item that's at the given index (indexed starting with 1).
- **indexOfItem(initialItemIndex: number)** [source] — Returns the sorted index of the item that started with the given index (indexed starting with 1).

## 챌린지 크리에이터  `#component:challenge`

- **preventSubmissionReason** [sink] — Can the student submit this challenge? Provide an error message if not, empty string if so.
- **preventChallengeCreationReason** [sink] — Has the challenge creator correctly set up their challenge? Warning if not, empty string if so.
- **challengeText** [sink] — Specify text to display on the thumbnail of the challenge or the response.
- **challengeBackground** [sink] — Specify a thumbnail image for the challenge.
- **challengeBounds** [sink] — Set the bounds of the challengeBackground.
- **responseText** [sink] — Specify text to display on the thumbnail of the challenge or the response.
- **responseBackground** [sink] — Specify a thumbnail image for the response.
- **responseBounds** [sink] — Set the bounds of the responseBackground.

## 카드 정렬  `#component:cardsort`

- **totalCards** [source] — Number of cards in the Card Sort.
- **totalCorrectCards** [source] — Number of cards correctly sorted according to the answer key Notes: (1) Cards that are supposed to be on their own are marked correct when on their own. (2) Cards correctly sorted into an incomplete group count as correct. (3) Cards in a group where any card is wrong are all counted as wrong.
- **matchesKey** [source] — Returns whether response matches the answer key. If no answer key is provided, returns false.

## 표  `#component:table`

- **maxRows** [sink] — Sets the number of rows the table will display.
- **disableRowChanges** [sink] — Sets a Boolean value that indicates whether or not the student can add or remove rows. Similar to fill-in-the-blank mode, but allows for existing cells to be edited. Highly recommended for use with any cell specific sources. (e.g., cellContent or cellNumericValue.)
- **cellContent(rowIndex: number, columnIndex: number)** [sink] — Sets the contents of a cell given the row index and column index of the cell. (Row index 1 is the first row underneath the header.)
- **cellSuffix(rowIndex: number, columnIndex: number)** [sink] — Adds a suffix to everything entered by the student. Recommended for inputs that expect a certain unit (e.g., ft. or %). Only shows up for expression types of cells.
- **cellErrorMessage(rowIndex: number, columnIndex: number)** [sink] — An error to show to the student. Note: This will not show up in the teacher dashboard. (Use the "warning" sink to show warnings to the teacher.)
- **initialCellContent(rowIndex: number, columnIndex: number)** [sink] — Sets the initial value of the cell at the row index and column index provided. This will unlock the cell and students can override the initial value. Note: Should be a valid latex string if setting for a math type of cell (default).
- **cellEditable(rowIndex: number, columnIndex: number)** [sink] — Overrides all other mechanisms of deciding whether the student can edit this cell.
- **cellDisableEvaluation(rowIndex: number, columnIndex: number)** [sink] — Disable the evaluation of math typed by the student in this cell. Only affects cells in math type columns.
- **correct** [sink] — Sets a Boolean value that determines whether or not a gray checkmark is displayed for the student's screen in the dashboard's summary view.
- **warning** [sink] — Sets a string that is displayed as a tooltip in the teacher dashboard attached to a warning icon.
- **readOnly** [sink] — Sets a Boolean value that determines whether or not a component will be ignored when determining a screen's correctness. If all components have a readOnly value of "true," we display a dash for the student's screen in the dashboard's summary view, indicating teachers can focus their efforts elsewhere.
- **hidden** [sink] — When true, this component will not be shown to students.
- **resetOnChange** [sink] — Specify a string value. If that value changes, the component resets.
- **cellContent(rowIndex: number, columnIndex: number)** [source] — Gets the contents of a cell given a row index and column index. (Row index 1 is the first row underneath the header.)
- **cellNumericValue(rowIndex: number, columnIndex: number)** [source] — Gets the evaluated numeric value of that cell given a row index and column index. (Row index 1 is the first row underneath the header.) If a student types "2 + 2", we will return "4".
- **columnNumericValues(columnIndex: number)** [source] — Gets the evaluated contents of each cell in a column and returns it as a number list given the column's index.
- **cellHasFocus(rowIndex: number, columnIndex: number)** [source] — Gets a Boolean value that indicates whether or not the student is editing a cell given the row index and column index of the cell. (Row index 1 is the first row underneath the header.)

## 행동 버튼  `#component:action-button`

- **capture(key: string)** [sink] — Sets a variable you want to capture every time the action button is pressed. (Retrieve the history of that variable later using the history source.)
- **label** [sink] — Sets the text to show on the button. Keep it short.
- **resetLabel** [sink] — Sets the link text we'll show that lets the student reset the action button.
- **disabled** [sink] — Sets a Boolean that determines when the action button is disabled or enabled. (When it's disabled, we gray out the button and make it unpressable.)
- **style** [sink] — Sets the button style. Use "default" for our standard blue style. Other options are "red" for a warning or for a confirmatory second click, "white" for a secondary click on a dark background, and "link" for our standard link.
- **resetStyle** [sink] — Sets the button style when in "reset" state. Use "link" for our standard link or "white" for button styling on a dark background.
- **hidden** [sink] — When true, this component will not be shown to students.
- **resetOnChange** [sink] — Specify a string value. If that value changes, the component resets.
- **timeSincePress(maxTime: number)** [source] — Gets the seconds (plus milliseconds) since the "Submit" button was pressed. It resets to zero if the "reset" link is pressed, or if a component on the same page is focused or edited. By default, it runs to 10 seconds and then stops. Increase that time by passing a parameter, as in timeSincePress(20).
- **history(key: string)** [source] — Gets the history of a variable that was defined using the "capture" sink.
- **lastValue(key: string)** [source] — Gets the last value captured for a variable that was defined using the "capture" sink.
- **pressCount** [source] — Gets the number of times the action button has been pressed.


# 2부. 고급 주제 (영어 원문)


## Graphs and Sketches  `#graphs`

Our graphing calculator is the secret engine behind a lot of Computation Layer's power. Sketches can benefit from this power as well, especially if you set the background of the sketch to be a graph.

Note that these features work best when you're using the graph component rather than the graphing calculator. The former hides the expressions list, while the latter includes it. Using CL with the graphing calculator will give warnings because we can't make guarantees about which variables will exist since a student could delete or duplicatively define named variables.


#### Numbers, NumberLists, and PointLabels

There are three main ways to get data into and out of graphs: numbers, numberLists, and pointLabels. Numbers are a single value, numberLists are a list of values, and pointLabels take a string. In each case, you can only read and write to named values. For example, if you make a point A=(1,n), turn on its label, and then use CL, you can both dynamically place and label the point like this:

```text
#position the point
number("n"): exp1.numericValue

#label the point. Note that I'm using the LaTeX type so that it'll format as math.
#if you use "" instead of `` it'll look like plaintext
pointLabel("A"): `n = ${exp1.numericValue}`
```

Note that number and numberList overwrite the value in the graph for the named variable. It's okay to put dummy data in the graph, just know that it'll get replaced when CL runs.

You can also pass in a numberList to a named variable. For example, the "history" sink on a button returns a numberList. You could leave a trail of every place that a point has been using capture/history in combination with number/numberList. If the graph is named "g1" and the button is named "b1", here's what you'd write in the button's script:

```text
#capture the current values of the point
capture("a"): g1.number(`a`)
capture("b"): g1.number(`b`)
```

And here's what you'd write in the graph's script:

```text
#populate the list of prior points from the button history
numberList("A"): b1.history("a")
numberList("B"): b1.history("b")
```


#### Animating Graphs

Many things in Desmos activities that look like videos are actually just animated graphs. To add a play button on top of a graph, just use the animationDuration sink. That sets how long the animation will play. You can then read off the animationTime sink and inject that straight into the graph. For example:

```text
#this is a 5 second animation
animationDuration:5

#take the animationTime and inject it in
number("t_0"): this.animationTime

#Add in accessibility tied to the animationTime!
narration(1): when this.animationTime > 0 "" otherwise "This graph shows a circle."
narration(2): when this.animationTime = 0 "" otherwise "The original circle splits into two circles, labeled \"Stage 1\". To get to the next stage, every circle splits into two more circles."
narration(3): when this.animationTime = 0 "" otherwise "The animation shows Stages 1 through 4."
```


#### Interpreting Sketches

At first glance, it might seem like sketches are similar to free response text and that there isn't anything interesting to extract from them. But sketches are full of rich data that you can connect to other representations.

For example, you can read off the number of strokes and points. You can also grab every value of a sketch at a given x-value. You can combine all of these features together to make a lightweight version of Function Carnival. Start by making a graph (g1) and sketch (s1).

Add this script for the graph:

```text
animationDuration: 10

number("t"): this.animationTime
numberList("L"): s1.sketch.yValuesAt(this.animationTime)
```

And add this script for the sketch:

```text
#this draws a vertical line in the sketch)
number("t"): g1.animationTime

#only show the message before you've drawn
#by looking at currentStroke, we also hide the message as soon as you start sketching
number("v"): 
  when (this.sketch.strokeCount = 0 and this.sketch.pointCount = 0 and this.currentStroke.strokeCount = 0) 1
  otherwise 0
```


#### Layers and Transformations

You can add layers behind graphs and sketches using the "background" sink. Combine this with transformations that you can do on sketches to build some fun interactives.

For example, you could have students sketch something and then animate their sketch offscreen when they press a button:

```text
isAnimating = btn.timeSincePress > 0

#disallow sketching
disableSketch: isAnimating
#and hide the sketch (the background will show it instead)
hideSketch: isAnimating

#transform the sketch:
xTransform = simpleFunction("x+${btn.timeSincePress}","x","y")
yTransform = simpleFunction("y","x","y")

background: sketchLayer(this.sketch.transform(xTransform,yTransform))
```


## Aggregate  `#aggregate`

For any source that returns a "number" you can use the "aggregate" function to generate a numberList, where each element is the number from a different student in the class. This is a powerful feature for social classrooms, but also challenging to use, test, and debug. Use with caution, and make sure to test (we suggest using multiple incognito windows) before using with any students.

It's easiest to see how aggregate works with a few examples. In this first one, we'll make a dot plot using the numbers from everyone in the class:

```text
numberList("L"): aggregate(exp1.numericValue)
```

For a more complicated example, we could aggregate the coordinates of the submitted points for everyone in the class. For this, we'll make use of an action button's "capture" sink + "last value" source to only include students who have pressed the button.

Here's the CL script for the button (named btn1):

```text
resetLabel: "Reset"

#disabled until the student has moved the point
disabled: graph1.number("a") = -9 and graph1.number("b") = 9

# This captures the x- and y-values for the student's point.
capture("a"): graph1.number("a")
capture("b"): graph1.number("b")
```

And here's the script for the graph (graph1):

```text
# Hide the movable point if submitted
number("s"): when btn1.timeSincePress() > 0 1 otherwise 0

# We're using captured values in the button. Why?
# this way only submitted points will be included.
numberList("A"): aggregate(btn1.lastValue("a"))
numberList("B"): aggregate(btn1.lastValue("b"))
```


## Interpreting Math  `#interpreting-math`

We love when students can express themselves in a variety of ways. Unfortunately, this means extra work for you in building CL scripts that can interpret all of that flexibility. This section can hopefully provide some useful ideas. But first, some principles we like to adhere to:
Never incorrectly mark a student wrong!
Try to interpret everything students might type.
Always test your scripts by trying out lots of student responses before sharing with students.
For example, we almost always prefer to look at numericValue from an input rather than expect the exact characters. Not only does this avoid creating bugs when, for example, a student inadvertently types a space, it also invites and celebrates writing expressions (e.g., 4+5) instead of just numbers (e.g., "9").


#### Example 1: simpleFunction

One powerful way to interpret math is to use our graphing calculator. But this can be challenging. Suppose we want a student to write the equation of a line that passes through the point (1, 3). Here, you could make use of "simpleFunction." That will understand an equation of the form y=3x, or f(x)=3x, or even just 3x. Here's the script in the graph:

```text
#this just says "don't worry about this for correctness"
readOnly: true

#use the function sink. We can then check for correctness easily
function("f"): simpleFunction(exp1.latex)
```

And here's the script on the input:

```text
#to check correctness, we're just going to look at the correctness value computed in the graph.
#C is computed to be 1 if correct and 0 otherwise
correct: graph1.number(`C`) = 1
```


#### Example 2: parseEquation

Pretty good! But unfortunately simpleFunction requires a line to be written in explicit form. A line like x+y=4 is correct, but simpleFunction doesn't detect it! Another option is to parse the equation and look at the difference function. This one's subtle, so we recommend looking at the graph. This will turn the student equation of x+y=4 into f(x,y) = 4-(x+y). Here's what this looks like in the graph's CL script:

```text
#this just says "don't worry about this for correctness"
readOnly: true

#use the function sink. We can then check for correctness easily
function("f"): parseEquation(exp1.latex).differenceFunction("x", "y")
```

There are other options too, like the xyLine method, which naturally understands all different forms of lines, but won't work for parabolas, for instance. The method of parsing you use depends on the math you're hoping for. Unfortunately, there's no one size fits all.


#### Using Patterns

Those first examples show how to provide feedback on student responses by numerically evaluating the students' responses. Sometimes you also want to check their exact form. For this, you can try exploring our "patterns" feature, which lets you parse expressions into pieces. Warning: Be very cautious with this feature! It's under development. It's also really easy to accidentally mark student thinking incorrect when it's just in an unexpected form.

Here's an example of how to check that a response is a simple number. Note that in Desmos, a "number" is a decimal, a fraction, or a mixed number.

```text
#this checks whether their expression is just a number. Will exclude e.g. 4+4
isJustANumber = patterns.number.matches(this.latex)

#turn off evaluation
disableEvaluation: true

#mark correctness
correct: this.numericValue = 10

#give the student actionable feedback
submitDisabled: not(isJustANumber)
errorMessage:
  when isJustANumber ""
  otherwise "Enter a number."
```

You can also pull apart different parts of their expression using patterns. For example, we could grab the numerator and denominator of a fraction as follows:

```text
#this says: look for a number divided by a number.
pattern = patterns.fraction(patterns.number, patterns.number)

#check validity
isValid = 
  when pattern.matches(exp1.latex) "yes"
  otherwise "no"
 
#read off the numerator and denominator. sorry this is verbose!
numerator = pattern.parse(exp1.latex).numerator.latex
denominator = pattern.parse(exp1.latex).denominator.latex
```

Patterns are a beta feature and you should use them carefully! We expect to make them easier to use over time and will be expanding our documentation as we do.


## Random Numbers  `#random`

Computation Layer supports random numbers. Random numbers are unique but stable for each student. This means that page reloads won't change the random numbers. However, every student will see a different set of random numbers. You can use this, for example, to give each student a different problem:

```text
r = randomGenerator()

A = r.int(-12,-2)
B = r.int(3,7)

#evaluate C
C = numericValue(`${A}*${B}`)

#create a random equation 
#wrapped in backticks so that it will be rendered with CL
equation = `${A}x+${B}y=${C}`
```

In the above example, the numbers were created in the note component, but you can grab them off of the note's script keyword to, for example, evaluate correctness on the math input:

```text
correct: this.numericValue = note1.script.B
```

The randomGenerator can also take an argument, called a "seed." This lets you change which random numbers a student sees (e.g., hooking up a button to produce a series of random problems):

```text
r = randomGenerator(btn1.pressCount)

a = r.int(-20,20)
b = r.int(-20,20)

#beautiful prompt, taking into account the - in b if it's negative
prompt =
  when b >= 0 `${a}+${b}`
  otherwise `${a}${b}`
```

Here we can again evaluate correctness. This example makes use of the advanced patterns feature (see interpreting math) to ensure that students are typing in only a number:

```text
disableEvaluation: true
isASimpleNumber = patterns.number.matches(this.latex)

correct: isASimpleNumber and this.numericValue = numericValue(`${prompt.script.a}+${prompt.script.b}`)
submitDisabled: not(isASimpleNumber)

resetOnChange: "${btn1.pressCount}"
```

Note that for many applications the random capabilities of the graphing calculator might be easier and more powerful! Random numbers in the calculator will behave similarly, remaining stable between page loads but different for different students.

