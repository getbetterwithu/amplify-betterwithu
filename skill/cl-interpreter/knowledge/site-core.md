# 사이트 핵심 설명 — Getting Started (영어 원문 + 한국어)

> 등급: 영어 문장은 **1등급 공식 원문**이다. 한국어 문장은 CL학습 사이트(cl.betterwithu.kr)의 번역·정리이며 비공식이다. 영어와 한국어가 다르게 읽히면 영어를 따른다.

> 이 파일은 CL의 기본 동작 원리(sink/source, 동적 텍스트, 조건, 정답 판정)를 설명한다.

> 번역 용어: sink, source는 번역하지 않는다. 출처: https://classroom.amplify.com/computation-layer/documentation?lang=ko#sinks-sources


## sink와 source (Sinks and Sources)  `#sinks-sources`

- EN: CL might look different from other programming languages you're used to. Instead of operating as a list of commands that run one after another, CL allows you to wire different pieces together to keep their values consistent. For example, a = b means that a is always the value of b. The value of a will change whenever the value of b does. This is similar to how spreadsheets work. It's also how the Desmos calculator works.
- KO: CL은 익숙한 다른 프로그래밍 언어와 달라 보일 수 있다. CL은 명령을 하나씩 차례로 실행하는 목록이 아니라, 여러 부분을 서로 연결해 값이 늘 일치하도록 만든다. 예를 들어 a = b는 a가 언제나 b의 값이라는 뜻이다. b의 값이 바뀌면 a의 값도 함께 바뀐다. 스프레드시트가 작동하는 방식과 비슷하고, Desmos 계산기도 이렇게 작동한다.

- EN: "Sinks" and "Sources" are the way to get values into and out of components. For example, the statement number("m"): exp1.numericValue means that the value of m inside of this Graph component equals the computed value of the Expression Input component named "exp1." As a student types into that Expression Input, the value of m in the graph will update immediately.
- KO: sink와 source는 구성요소(component)에 값을 넣고 구성요소에서 값을 꺼내는 방법이다. 예를 들어 number("m"): exp1.numericValue라는 문장은 이 그래프 구성요소 안의 m 값이 "exp1"이라는 수식 답변 구성요소의 계산값과 같다는 뜻이다. 학생이 그 수식 답변에 입력하는 동안 그래프의 m 값이 곧바로 바뀐다.


#### sink (Sinks)

- EN: Use sinks to inject values into components. Sinks are colored teal and are always followed by a colon. For example, you could make a graph that plots y=mx+b and then use the graph's "number" sink to set values for the variables m and b.
- KO: sink는 구성요소에 값을 넣을 때 쓴다. sink는 청록색으로 표시되고 뒤에 항상 콜론(:)이 붙는다. 예를 들어 y=mx+b를 그리는 그래프를 만든 뒤 그래프의 "number" sink로 변수 m과 b의 값을 정할 수 있다.

```text
# Set the values of m & b in the graph
number("m"): 1.5
number("b"): 2
```


#### 변수 (Variables)

- EN: You can define variables within a script. This makes your code more reusable and helps you avoid repeating the same code. Note that variables look very similar to sinks but behave very differently.
- KO: 스크립트 안에서 변수를 정의할 수 있다. 변수를 쓰면 코드를 여러 곳에서 다시 쓸 수 있고 같은 코드를 되풀이하지 않아도 된다. 변수는 sink와 모양이 아주 비슷하지만 작동은 전혀 다르다는 점에 주의한다.

- EN: Suppose you wanted the submitLabel and initialText on an input to both say, "Hello world!"
- KO: 입력 구성요소의 제출 버튼 라벨(submitLabel)과 초기에 입력된 내용(initialText)이 둘 다 "Hello world!"(안녕, 세상!)가 되게 하고 싶다고 하자.

```text
#if you change this line, both submitLabel and initialText will change.
customString = "Hello world!"

submitLabel: customString
initialText: customString
```

- EN: Pro tip: You can reference variables defined in other components by using the "script" keyword. For example:
- KO: 팁: "script" 키워드를 쓰면 다른 구성요소에서 정의한 변수를 가져올 수 있다. 예를 들면 다음과 같다.

```text
choiceContent(1): input1.script.customString
```


#### source (Sources)

- EN: A source is a value that you can pull out of a component and is typically based on work a student has done. To use a component's source, name the component and the use that name in your script.
- KO: source는 구성요소에서 꺼내 쓸 수 있는 값이고, 대개 학생이 한 작업을 바탕으로 한다. 구성요소의 source를 쓰려면 구성요소에 이름을 붙이고 스크립트에서 그 이름을 쓴다.

- EN: For example, let's say that you have a button that you've named btn1. You can use its sources in any script anywhere in the activity, like this:
- KO: 예를 들어 btn1이라는 이름을 붙인 버튼이 있다고 하자. 이 버튼의 source는 활동 안 어느 스크립트에서든 다음과 같이 쓸 수 있다.

```text
#pressCount is a simple number
number("b"): btn1.pressCount

#the "timeSincePress" source asks for a duration.
#this will stop reporting after 10 seconds.
number("a"): btn1.timeSincePress(10)
```

- EN: Pro tip: If you want to access a source from a component you're in, you don't need to name the component. In a button Component's script, for example, just write label: this.pressCount.
- KO: 팁: 스크립트를 쓰고 있는 그 구성요소의 source를 쓸 때는 구성요소 이름을 적지 않아도 된다. 예를 들어 버튼 구성요소의 스크립트에서는 label: this.pressCount라고만 쓰면 된다.


## 동적 글자 (Dynamic Text)  `#dynamic-text`

- EN: Computation Layer lets you change the text on the page in response to work each student did. You can update a prompt or even use your students' own work from a previous screen on a later one.
- KO: Computation Layer를 쓰면 학생 각자가 한 작업에 따라 페이지의 글자를 바꿀 수 있다. 안내 문구를 바꿀 수도 있고, 학생이 앞 화면에서 한 작업을 뒤 화면에서 쓸 수도 있다.

- EN: The recommended way to dynamically use strings in Notes is to define a local variable in the computation layer for the script, and then insert it into the content by clicking the {#} button. For example:
- KO: 메모에서 글자를 동적으로 쓰는 권장 방법은 그 메모의 Computation Layer 스크립트에 지역 변수를 정의한 뒤, {#} 버튼을 눌러 그 변수를 메모 내용에 넣는 것이다. 예를 들면 다음과 같다.

```text
#define two variables that the note can reference.

#this is the value
v = input1.numericValue

#this is the latex
n = input1.latex
```

- EN: You can also overwrite the contents of a note wholesale using its "content" sink. In this case, you might want to take advantage of a feature called "interpolation." Inside of a string, you can write ${} to pull in a variable dynamically. For example:
- KO: 메모의 "content" sink를 쓰면 메모 내용 전체를 덮어쓸 수도 있다. 이때는 "보간(interpolation)"이라는 기능을 쓰면 좋다. 글자(string) 안에 ${}를 쓰면 변수의 값을 그 자리에 동적으로 넣을 수 있다. 예를 들면 다음과 같다.

```text
#this is the value
v = input1.numericValue

#this is the latex
n = input1.latex

content: "
You wrote: ${n}

Which evaluates to: ${v}
"
```

- EN: Note that this technique works in other places that can accept strings, for example in the "pointLabel" sink for graphs:
- KO: 이 방법은 글자를 받는 다른 곳에서도 쓸 수 있다. 예를 들어 그래프의 "pointLabel" sink에서도 쓸 수 있다.

```text
#A is the name of a point in the graph
pointLabel("A"): "Hello, ${input1.content}!"
```


## 조건문 (Conditionals)  `#conditionals`

- EN: Computation Layer doesn't have "if," "then," or "else." Instead we use a structure similar to a "switch" in other programming languages. We call it when. It is a list of tests, each followed by what should happen in that situation, and requires a default value (otherwise) if none of the conditions match.
- KO: Computation Layer에는 "if", "then", "else"가 없다. 대신 다른 프로그래밍 언어의 "switch"와 비슷한 구조를 쓰고, 이것을 when이라고 부른다. when은 조건 검사를 나열한 목록이고, 각 검사 뒤에 그 경우의 값이 온다. 어느 조건에도 맞지 않을 때 쓸 기본값(otherwise)이 반드시 있어야 한다.

```text
# n here is a local variable. "number" is the name we gave to an expression input on this screen.
n = input1.numericValue

#we compute a custom feedback string to use in the note.
feedback =
  when isUndefined(n) " "
  when n < 10 "Way higher."
  when n > 100 "Way lower."
  when n < 31 "Higher."
  when n > 31 "Lower."
  otherwise "Found it!"
```

- EN: Note that a "when" returns as soon as it finds a matching condition. As a result, when we get to the 4th condition to check whether n is greater than 30, we already know that n is at least 10 and at most 100. This might help you write shorter and cleaner conditions.
- KO: when은 맞는 조건을 찾는 즉시 그 값을 돌려준다는 점에 주의한다. 그래서 n이 30보다 큰지 확인하는 네 번째 조건에 이르렀을 때는 n이 10 이상 100 이하라는 것을 이미 알고 있다. 이 성질을 이용하면 조건을 더 짧고 깔끔하게 쓸 수 있다.


## 정답 판정 (Correctness)  `#correctness`

- EN: Checking student responses for correctness is a great way to both provide students with feedback and help teachers quickly see correctness in the teacher dashboard.
- KO: 학생 응답의 정답 여부를 확인하면 학생에게 피드백을 줄 수 있고, 교사도 교사 대시보드에서 정답 여부를 빠르게 볼 수 있다.

- EN: In general, we recommend being very careful when adding correctness checks to an activity. Computers are pretty dumb and might mark work wrong when a human would mark it correct, which is a really demoralizing experience for students. Here are a few tips for writing correctness.
- KO: 활동에 정답 판정을 넣을 때는 아주 조심하기를 권한다. 컴퓨터는 꽤 단순해서 사람이라면 맞다고 할 답을 틀렸다고 판정할 수 있고, 이런 일은 학생의 의욕을 크게 꺾는다. 다음은 정답 판정을 쓸 때의 몇 가지 팁이다.


#### 값 비교하기 (Compare Values)

- EN: If you want to check that a student got a number right, you can compare its value. This is generally safe if the answer is an integer, but risky otherwise! Always test it out yourself with a few values you expect to work. Here's a very simple example of checking whether the value is greater than 7:
- KO: 학생이 숫자를 맞혔는지 확인하려면 그 값을 비교하면 된다. 답이 정수이면 대체로 안전하지만, 그렇지 않으면 위험하다! 맞다고 판정되어야 할 값 몇 개로 항상 직접 시험해 본다. 다음은 값이 7보다 큰지 확인하는 아주 간단한 예이다.

```text
#define a variable to test correctness
#note: we can use this value elsewhere since it's a variable.
correct = this.numericValue > 7

#populate the "correct" SINK for this component.
#this will update what you see in the teacher dashboard
#note the use of sink (correct:) and variable (correct =)
correct: correct
```

- EN: We can reuse that computation to create a feedback string in a note:
- KO: 이 계산 결과를 다시 써서 메모에 피드백 글자를 만들 수 있다.

```text
#read off correctness from a different component
#save as a variable the note can use.
feedback =
  when exp1.script.correct "That's correct!"
  otherwise "Not correct yet."
```


#### 그래핑 계산기 사용하기 (Use the Graphing Calculator)

- EN: For more complicated examples of correctness, one nice technique is to use the graphing calculator. We like to use movable points with a step set on sliders to enable snapping.
- KO: 더 복잡한 정답 판정에는 그래핑 계산기를 쓰는 것이 좋은 방법이다. 움직이는 점을 쓰고, 슬라이더에 간격(step)을 정해 점이 정해진 값에 딱 맞춰지게(snapping) 하는 방법을 권한다.

- EN: In this example, we want a slope of 2. The graph computes the slope using a variable called m, and then uses snapping. The Computation Layer is just this line:
- KO: 이 예에서는 기울기가 2이기를 원한다. 그래프는 m이라는 변수로 기울기를 계산하고, 점이 정해진 값에 맞춰지게 한다. Computation Layer는 다음 줄뿐이다.

```text
#define a local correctness variable:
isCorrect = this.number("m") = 2

#populate the correct sink, for the dashboard
correct: isCorrect
```


#### 조건문 사용하기 (Use Conditionals)

- EN: For more advanced correctness in the calculator, you can use conditionals. Build in a little tolerance for extra safety (e.g., C={|a-7.4| ≤ 0.1: 1, 0}).
- KO: 계산기에서 더 고급 정답 판정을 하려면 조건문을 쓸 수 있다. 안전을 위해 약간의 허용 오차를 둔다(예: C={|a-7.4| ≤ 0.1: 1, 0}).

- EN: Most importantly, always try your correctness checks yourself with a range of inputs before giving them to students!
- KO: 무엇보다 정답 판정은 학생에게 주기 전에 항상 여러 가지 입력으로 직접 시험해 본다!
