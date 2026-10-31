# 공식 Index 발췌 (함수·타입·Logic)

> 등급: **1등급 — 공식 영어 원문**. 출처: classroom.amplify.com/computation-layer/documentation (사이트 data/advanced/index-docs.json에서 옮김). 설명 문장은 원문 그대로이고 번역하지 않았다. 코드의 `#` 주석도 원문이다.

> 이 파일에 없는 함수·타입은 "이 자료에서는 찾지 못했습니다"라고 답한다.


## Logic and Conditionals  `#logic`

CL uses booleans and logical operators (and, or, and not) to show and hide components (using the "hidden" sink) and to otherwise respond to student interactions.


#### Logical Operators

If you need to express a complicated condition, it can be helpful to combine several simpler conditionals.


#### Defined and Undefined Values

When there's no way to answer a question in CL, the value is treated as "undefined". An example of this is asking what line an equation represents when the equation does not represent any line. In these situations, you will usually want to do something different (for example, you might add special instructions to clarify that the student needs to specify a line).


#### Comparing values

Computation Layer supports comparisons between numbers. You can also grab the max or min of a numberList.


### `not`  `function:not`

Takes a boolean and returns its opposite. Use like "when not(___)"

```text
# Store a Boolean value that tells us if the input has been submitted.
submitted = numberTyper.submitted

# Store the numericValue of the math input as a variable called n.
n = numberTyper.numericValue

# Check to see if the number matches different constraints and assign
# a feedback variable accordingly.
feedback =
  when submitted and n > 2 and n < 4 and not(n = 3) "\n\nNice!"
  when submitted "\n\nNope!"
  otherwise ""

content: "Type a number that is greater than 2 and less than 4 and ISN'T 3.${feedback}"
```


### `isDefined`  `function:isDefined`

Takes any type and returns a boolean for if it's defined. For example, use with the numericValue of an expression input.

```text
# Tries to assign the value in the "numberDefiner" math input to "a"
# first and then plots 4 as a backup if that value is undefined.
number("a"): when isDefined(numberDefiner.numericValue) numberDefiner.numericValue otherwise 4
```


### `isUndefined`  `function:isUndefined`

Takes any type and returns a boolean for if it's undefined. For example, use with the numericValue of an expression input.

```text
# Checks to see if the math input has been submitted and is undefined.
# If that's true it displays an irritated warning. If that's false
# it displays the welcome text.
content:
  when undefinerInput.submitted and isUndefined(undefinerInput.numericValue) "WHAT DID WE SAY?!"
  when undefinerInput.submitted "Thank you. `${undefinerInput.numericValue}` is defined."
  otherwise "Type a defined number in the blank.\n\nWe mean it.\n\nDon't try to type anything undefined."
```


### `firstDefinedValue`  `function:firstDefinedValue`

Takes multiple arguments, all of the same type, and returns the first that's valid. Use, for example as "a = firstDefinedValue(exp1.numericValue, 2)". That will return 2 until exp.numericValue is valid.

```text
# Tries to assign the value in the "numberDefiner" math input to "a"
# first and then plots 4 as a backup if that value is undefined.
number("a"): firstDefinedValue(numberDefiner.numericValue,4)
```


### `isBlank`  `function:isBlank`

Takes a string and returns a boolean of whether it's the empty string.

```text
# Check to see if the student has entered text into "friendInput"
# and change the feedback display accordingly.
feedback =
  when isBlank(friendInput.content) ""
  otherwise "\n\nHello, ${friendInput.content}."

content: "What's your name, friend?${feedback}"
```


### `max`  `function:max`

Takes a numberList and returns its largest value as a number.

```text
# Create a list using the values in column 1 of the table
# and inject that ist into the graph.
X = table.columnNumericValues(1)
numberList("X"): X 

# Find the maximum and minimum values from the list, then
# multiply by a scale factor to add some padding:
left = numericValue("${min(X)}-5")
right = numericValue("${max(X)}+5")

# Set the window bounds using the left and right
# values calculated in the previous row.
bounds: makeBounds(left,right,-10,10)
```


### `min`  `function:min`

Takes a numberList and returns its smallest value as a number.

```text
# Create a list using the values in column 1 of the table
# and inject that ist into the graph.
X = table.columnNumericValues(1)
numberList("X"): X 

# Find the maximum and minimum values from the list, then
# multiply by a scale factor to add some padding:
left = numericValue("${min(X)}-5")
right = numericValue("${max(X)}+5")

# Set the window bounds using the left and right
# values calculated in the previous row.
bounds: makeBounds(left,right,-10,10)
```


## Types  `#types`

Every value in the Computation Layer has a type. For example, consider some of the sources and sinks for the Math Input component:
The timeSinceSubmit source produces a number
The latex source produces the LaTeX value of the component
The submitLabel sink expects a string value
The hidden sink expects a true/false value

These examples demonstrate some basic types: numbers, LaTeX, strings, and booleans. However there are other types like sketches, numberLists, colors, etc. Abstractly, a type describes what kind of data is stored in a value, and what operations are available for that value. For example, the numberList type stores a list of numbers, and some of the available operations are to find the length of the list, or to get an element at a specific index.

Computation Layer is a "Strongly typed" language. Every expression produces a value of some type. For example,sketch1.sketch.pointCount produces a value of type number, while the subexpression sketch1.sketch produces a value of type sketch. Whenever you use a value(e.g., in an expression, function call, or sink), we check that is the correct type for that usage, and show an error if it is not (e.g., trying to use a number in a sink that expects a string).


#### Basic Types

The most common types in the Computation Layer are numbers, strings, LaTeX and booleans.
Numbers represent numeric values
String represent text values
Booleans are true/false values
LaTeX represent written mathematics
Strings are wrapped in quotes (""), while LaTeX is wrapped in backticks (``). One way to see the difference is to observe how they look when inserted into a note. For example:
#this is a regular string:
str1 = "y=x^2"
​
#this is a LaTeX string
str2 = `y=x^2`
​
#you can put LaTeX inside of a string, like so:
str3 = "string outside `y=x^2` string outside"

```text
#this is a regular string:
str1 = "y=x^2"

#this is a LaTeX string
str2 = `y=x^2`

#you can put LaTeX inside of a string, like so:
str3 = "string outside `y=x^2` string outside"
```


#### Complex Types

Complex types, such as sketches, colors, numberLists, etc, store a specific kind of data, and have a set of attributes, or member functions, which you can use to extract data from the type or transform it in some way.

When working with one of these types, you generally need to answer these questions:
What kind of information does this type represent?
How do I obtain values of this type?
What attributes or functions can I use to manipulate this type?
Where can I use this type?
You'll generally get these types from either a component source or a function, transform them by calling additional functions on them, and then use them in a sink or as an argument to another function.


#### Utility Types

The utility types, sketchTools, buttonStyles, and colorPalette, are designed to provide access to useful objects. For example, the colorPalette type contains standard Desmos colors that can then be used in the initialColor sink for the Sketch component. These types are obtained by referencing a global constant, e.g. colors for the colorPalette type.


## Other Functions  `#other-functions`

Here are some functions which don't fit cleanly into one of the above sections.


### `mergeSketches`  `function:mergeSketches`

Create a sketch from other sketches.

```text
# Combines the current stroke with the rest of
# the sketch to create a layer that appears in 
# real time.
background: sketchLayer(mergeSketches(sketch1.sketch,sketch1.currentStroke))
```


### `length`  `function:length`

Takes a List and returns its length as a number.

```text
# Create a list using the values in column 1 of the table.

X = table.columnNumericValues(1)

# Use CL to display a dynamic note.

content:
# When the table is empty (list length = 0),
# tell the student to enter some x values.
when length(X) = 0 "Enter some values for `x`."

# After at least one point has been entered, display
# a new set of instructions is displayed along with
# the number of points entered, represented by length(X).
otherwise "You have entered `${length(X)}` points.

What do you think this graph will look like?

Use the sketch tool if it helps with your thinking."
```


### `numericValue`  `function:numericValue`

Takes a latex string, and evaluates it to a number, if possible. Returns NaN if it fails

```text
# Get the latex string from the expression input component
# "orderedPairInput". Create an orderedPair object using
# parseOrderedPair and then assign that object to the
# Computation Layer variable "myPair".
myPair = parseOrderedPair(orderedPairInput.latex)

# Assign the numeric value of the x property
# of the orderedPair object named "myPair" to
# the calculator variable "x_last".
number("x_{last}"): numericValue(myPair.x)

# Assign the numeric value of the y property
# of the orderedPair object named "myPair" to
# the calculator variable "y_last".
number("y_{last}"): numericValue(myPair.y)
```


### `conic`  `function:conic`

Create a new conic object from the provided latex string.


### `evaluationFrame`  `function:evaluationFrame`

Creates a frame to store functions and variables for future evaluation.

```text
# Open an evaluation frame.
frame = evaluationFrame()
# Define the variables a and b and assign their values 
# using the cell valuees from table1.
  .define(`a`,table1.cellNumericValue(1,1))
  .define(`b`,table1.cellNumericValue(1,2))
# Define the functions f and g and create them using
# the cell content from table2.
  .define(`f`,simpleFunction(table2.cellContent(1,1)))
  .define(`g`,simpleFunction(table2.cellContent(1,2)))
  
  
# Evaluate the function and variables from the tables
# acording to the math input.
output = input1.script.frame.evaluate(this.latex)
```


### `substituteLatexVariable`  `function:substituteLatexVariable`

Takes a latex string, a search string, and a replace string - and returns the latex having made the substitution.

```text
# Substitute in the student input for a and b.
subA = substituteLatexVariable(input1.latex,"a",table1.cellContent(1,1))
subB = substituteLatexVariable(subA,"b",table1.cellContent(1,2))

# Display the evaluation only after input1 is submitted
eval = when input1.submitted "`${subB}=${input1.script.output}`" otherwise "Press \"Submit\" to see the evaluation."
```


### `countNumberUsage`  `function:countNumberUsage`

Counts numeric constants in a latex string. countNumberUsage(latex) counts all numbers, or if you provide a specific number as an argument, only that number specifically will be counted

```text
# Create a dynamic note that displays the
# total amount of 4's and numbers altogether
# in the math input

content:
"Use the number \"`4`\" four times to create an expression that equals `4`.

Total numbers: `${countNumberUsage(input.latex)}`

Total `4`'s: `${countNumberUsage(input.latex,4)}`

Equal to `4`? ${when input.numericValue = 4 "Yes" otherwise "No"}"
```


### `formatLatex`  `function:formatLatex`

Takes latex equations and expressions and applies a small set of simplification rules to format the equations and expressions nicely.


### `sketchLayer`  `function:sketchLayer`

Create a layer from a sketch.

```text
# Creates a sketch layer using only what's currently
# being sketched. and displays it in the background.
background: sketchLayer(sketch1.currentStroke)
```


### `layerStack`  `function:layerStack`

Create a stack of layers from other layers.

```text
# Creates a sketch layer using only what's currently
# being sketched and a separate sketch layer out of
# the existing sketch.
# Stacks these layers together and displays them in
# graph background.
background: layerStack(sketchLayer(sketch1.sketch),sketchLayer(sketch1.currentStroke))
```


### `graphLayer`  `function:graphLayer`

Create a layer from a graph. Use it like graphLayer(g.calculatorState)


## Deprecated Functions  `#deprecated-functions`

These functions have all been deprecated. If it's on this list, we now have a better way to do the same thing, which we recommend using instead.


### `sketchStrokeCount`  `function:sketchStrokeCount`

Takes a sketch and returns the number of strokes as a number.


### `sketchPointCount`  `function:sketchPointCount`

Takes a sketch and returns the number of points as a number.


### `sketchTotalStrokeLength`  `function:sketchTotalStrokeLength`

Takes a sketch and returns a number the aggregate length of all strokes as a number.


### `sketchYValues`  `function:sketchYValues`

Returns a numberList of all y-values that the sketch passes through at a given x value


### `sketchXValues`  `function:sketchXValues`

Returns a numberList of all x-values that the sketch passes through at a given y value


### `angleOfLine`  `function:angleOfLine`

Returns the angle an xyLine object makes with the x-axis, measured in radians.


### `slopeOfLine`  `function:slopeOfLine`

Returns the slope of an xyLine object.


### `yInterceptOfLine`  `function:yInterceptOfLine`

Returns the y-intercept of an xyLine object.


### `xInterceptOfLine`  `function:xInterceptOfLine`

Returns the x-intercept of an xyLine object.


### `isLineHorizontal`  `function:isLineHorizontal`

Returns a Boolean value given an xyLine object that indicates whether or not the line is horizontal.


### `isLineVertical`  `function:isLineVertical`

Returns a Boolean value given an xyLine object that indicates whether or not the line is vertical.


### `stretch`  `function:stretch`

Bounds strategy stretch. Use this in conjunction with bounds.setStrategy (deprecated).


### `left`  `function:left`

Bounds strategy left. Use this in conjunction with bounds.setStrategy (deprecated).


### `right`  `function:right`

Bounds strategy right. Use this in conjunction with bounds.setStrategy (deprecated).


### `centeredHorizontal`  `function:centeredHorizontal`

Bounds strategy centeredHorizontal. Use this in conjunction with bounds.setStrategy (deprecated).


### `bottom`  `function:bottom`

Bounds strategy bottom. Use this in conjunction with bounds.setStrategy (deprecated).


### `top`  `function:top`

Bounds strategy top. Use this in conjunction with bounds.setStrategy (deprecated).


### `centeredVertical`  `function:centeredVertical`

Bounds strategy centeredVertical. Use this in conjunction with bounds.setStrategy (deprecated).


## annotationKeyTuple  `#type:annotationKeyTuple`

Represents an annotation key as an ordered pair of a highlight key and its annotation index.


### `highlightKey` (Attributes:)  `type:annotationKeyTuple:highlightKey`

Gets the highlight key from a rich text's annotation key pair.


### `annotationIndex` (Attributes:)  `type:annotationKeyTuple:annotationIndex`

Gets the annotation index from a rich text's annotation key pair.


### `color` (Attributes:)  `type:annotationKeyTuple:color`

Gets the highlight color from a rich text's annotation key pair.


### `from` (Attributes:)  `type:annotationKeyTuple:from`

Gets the start position from a rich text's annotation key pair.


### `to` (Attributes:)  `type:annotationKeyTuple:to`

Gets the end position from a rich text's annotation key pair.


## bounds  `#type:bounds`

Represents the mathematical bounds of a graph or sketch.


### `makeBounds` (Creating:)  `function:makeBounds`

Create a bounds object given left, right, bottom, top. These bounds will have non-square axis, meaning that when applied to a graph/sketch entity, the entity will be stretched to show exactly these bounds.

```text
# Sets four variables to numbers defined in this graph.
xmin = this.number("T_{opLeftX}")
xmax = this.number("B_{ottomRightX}")
ymin = this.number("B_{ottomRightY}")
ymax = this.number("T_{opLeftY}")

# Defines the bounds of the graph component to be
# four Computation Layer variables.
bounds: makeBounds(xmin,xmax,ymin,ymax)
```


### `left` (Attributes:)  `type:bounds:left`

Get the left property from the bounds object

```text
# Get and display bound properties.

content:
"Here are some properties of your window.

The left bound is: ${boundsCheck.bounds.left}
The bottom bound is: ${boundsCheck.bounds.bottom}
The top bound is: ${boundsCheck.bounds.top}
The right bound is: ${boundsCheck.bounds.right}
The height of the window is: ${boundsCheck.bounds.height}
The width of the window is: ${boundsCheck.bounds.width}"
```


### `bottom` (Attributes:)  `type:bounds:bottom`

Get the bottom property from the bounds object

```text
# Get and display bound properties.

content:
"Here are some properties of your window.

The left bound is: ${boundsCheck.bounds.left}
The bottom bound is: ${boundsCheck.bounds.bottom}
The top bound is: ${boundsCheck.bounds.top}
The right bound is: ${boundsCheck.bounds.right}
The height of the window is: ${boundsCheck.bounds.height}
The width of the window is: ${boundsCheck.bounds.width}"
```


### `height` (Attributes:)  `type:bounds:height`

Get the height property from the bounds object

```text
# Get and display bound properties.

content:
"Here are some properties of your window.

The left bound is: ${boundsCheck.bounds.left}
The bottom bound is: ${boundsCheck.bounds.bottom}
The top bound is: ${boundsCheck.bounds.top}
The right bound is: ${boundsCheck.bounds.right}
The height of the window is: ${boundsCheck.bounds.height}
The width of the window is: ${boundsCheck.bounds.width}"
```


### `width` (Attributes:)  `type:bounds:width`

Get the width property from the bounds object

```text
# Get and display bound properties.

content:
"Here are some properties of your window.

The left bound is: ${boundsCheck.bounds.left}
The bottom bound is: ${boundsCheck.bounds.bottom}
The top bound is: ${boundsCheck.bounds.top}
The right bound is: ${boundsCheck.bounds.right}
The height of the window is: ${boundsCheck.bounds.height}
The width of the window is: ${boundsCheck.bounds.width}"
```


### `top` (Attributes:)  `type:bounds:top`

Get the top property from the bounds object

```text
# Get and display bound properties.

content:
"Here are some properties of your window.

The left bound is: ${boundsCheck.bounds.left}
The bottom bound is: ${boundsCheck.bounds.bottom}
The top bound is: ${boundsCheck.bounds.top}
The right bound is: ${boundsCheck.bounds.right}
The height of the window is: ${boundsCheck.bounds.height}
The width of the window is: ${boundsCheck.bounds.width}"
```


### `right` (Attributes:)  `type:bounds:right`

Get the right property from the bounds object

```text
# Get and display bound properties.

content:
"Here are some properties of your window.

The left bound is: ${boundsCheck.bounds.left}
The bottom bound is: ${boundsCheck.bounds.bottom}
The top bound is: ${boundsCheck.bounds.top}
The right bound is: ${boundsCheck.bounds.right}
The height of the window is: ${boundsCheck.bounds.height}
The width of the window is: ${boundsCheck.bounds.width}"
```


### `stretch` (Attributes:)  `type:bounds:stretch`

Show the bounds exactly, while allowing the aspect ratio to be non-square.

```text
# make the bounds of the graph match the given bounds 
# exactly, even though they won't necessarily be square.
bounds: makeBounds(-10,10,-10,10).stretch()
```


### `squareLeft` (Attributes:)  `type:bounds:squareLeft`

Force the bounds to have a square aspect ratio, while preserving the provided edge.

```text
# This will force the axes to be square, 
# with the left edge going from -10 to 10.
bounds: makeBounds(0,10,-10,10).squareLeft()
```


### `squareRight` (Attributes:)  `type:bounds:squareRight`

Force the bounds to have a square aspect ratio, while preserving the provided edge.

```text
# This will force the axes to be square, 
# with the right edge going from -10 to 10.
bounds: makeBounds(-10,0,-10,10).squareRight()
```


### `squareCenterHorizontal` (Attributes:)  `type:bounds:squareCenterHorizontal`

Force the bounds to have a square aspect ratio, while preserving the provided edge.

```text
# This will force the axes to be square, with the 
# y axis in the center, and going from -10 to 10.
bounds: makeBounds(-10,10,-10,10).squareCenterHorizontal()
```


### `squareBottom` (Attributes:)  `type:bounds:squareBottom`

Force the bounds to have a square aspect ratio, while preserving the provided edge.

```text
# This will force the axes to be square, 
# with the bottom edge going from -10 to 10.
bounds: makeBounds(-10,10,0,10).squareBottom()
```


### `squareTop` (Attributes:)  `type:bounds:squareTop`

Force the bounds to have a square aspect ratio, while preserving the provided edge.

```text
# This will force the axes to be square, 
# with the top edge going from -10 to 10.
bounds: makeBounds(-10,10,-10,0).squareTop()
```


### `squareCenterVertical` (Attributes:)  `type:bounds:squareCenterVertical`

Force the bounds to have a square aspect ratio, while preserving the provided edge.

```text
# This will force the axes to be square, with the x axis 
# in the center, going from -10 to 10
bounds: makeBounds(-10,10,-10,10).squareCenterVertical()
```


## buttonStyles  `#type:buttonStyles`

Contains the Desmos button styles.


### `red` (Attributes:)  `type:buttonStyles:red`

The red style button.

```text
# This code makes the button red
style: buttonStyles.red
```


### `default` (Attributes:)  `type:buttonStyles:default`

The default style button.

```text
# This code sets the button to its default styling.

style: buttonStyles.default
```


### `link` (Attributes:)  `type:buttonStyles:link`

The link style button.

```text
# This code makes the button appear as a link.
style: buttonStyles.link
```


### `white` (Attributes:)  `type:buttonStyles:white`

The white style button.

```text
# This code makes the button white.

style: buttonStyles.white
```


## color  `#type:color`

Represents a color.


### `rgb` (Creating:)  `function:rgb`

Turns three values between 0 and 255 into a rgb color. Invalid numbers become 0.

```text
# rgb sets the initial color of the sketch
# tool. Here, we've set it to 0,128,128 (teal).

initialColor:   rgb(0, 128, 128)
```


### `setOpacity` (Attributes:)  `type:color:setOpacity`

set opacity (0 is transparent, 1 is full opacity) of a color

```text
# setOpacity adjusts the opacity of the initial
# sketch color (black). Here, we've set it to 40%.

initialColor: colors.black.setOpacity(0.4)
```


## colorPalette  `#type:colorPalette`

Contains the Desmos colors.


### `red` (Attributes:)  `type:colorPalette:red`

The color red used in the Desmos calculator.

```text
# Based on the choice selected, set the initial color
# to one of the 6 Desmos graph colors.

initialColor: 
  when choice.isSelected(1) colors.red
  when choice.isSelected(2) colors.blue
  when choice.isSelected(3) colors.green
  when choice.isSelected(4) colors.purple
  when choice.isSelected(5) colors.orange
  otherwise colors.black
```


### `blue` (Attributes:)  `type:colorPalette:blue`

The color blue used in the Desmos calculator.

```text
# Based on the choice selected, set the initial color
# to one of the 6 Desmos graph colors.

initialColor: 
  when choice.isSelected(1) colors.red
  when choice.isSelected(2) colors.blue
  when choice.isSelected(3) colors.green
  when choice.isSelected(4) colors.purple
  when choice.isSelected(5) colors.orange
  otherwise colors.black
```


### `green` (Attributes:)  `type:colorPalette:green`

The color green used in the Desmos calculator.

```text
# Based on the choice selected, set the initial color
# to one of the 6 Desmos graph colors.

initialColor: 
  when choice.isSelected(1) colors.red
  when choice.isSelected(2) colors.blue
  when choice.isSelected(3) colors.green
  when choice.isSelected(4) colors.purple
  when choice.isSelected(5) colors.orange
  otherwise colors.black
```


### `purple` (Attributes:)  `type:colorPalette:purple`

The color purple used in the Desmos calculator.

```text
# Based on the choice selected, set the initial color
# to one of the 6 Desmos graph colors.

initialColor: 
  when choice.isSelected(1) colors.red
  when choice.isSelected(2) colors.blue
  when choice.isSelected(3) colors.green
  when choice.isSelected(4) colors.purple
  when choice.isSelected(5) colors.orange
  otherwise colors.black
```


### `orange` (Attributes:)  `type:colorPalette:orange`

The color orange used in the Desmos calculator.

```text
# Based on the choice selected, set the initial color
# to one of the 6 Desmos graph colors.

initialColor: 
  when choice.isSelected(1) colors.red
  when choice.isSelected(2) colors.blue
  when choice.isSelected(3) colors.green
  when choice.isSelected(4) colors.purple
  when choice.isSelected(5) colors.orange
  otherwise colors.black
```


### `black` (Attributes:)  `type:colorPalette:black`

The color black used in the Desmos calculator.

```text
# Based on the choice selected, set the initial color
# to one of the 6 Desmos graph colors.

initialColor: 
  when choice.isSelected(1) colors.red
  when choice.isSelected(2) colors.blue
  when choice.isSelected(3) colors.green
  when choice.isSelected(4) colors.purple
  when choice.isSelected(5) colors.orange
  otherwise colors.black
```


### `list` (Attributes:)  `type:colorPalette:list`

make a list of colors, e.g. for use in setting available colors in sketch

```text
# Create a list of colors using colors.list and
# assign that list of colors to the availableColors
# sink to make a custom palette. The order you list
# them will be the order they appear in the palette.

availableColors: colors.list(colors.red, colors.green, rgb(163,104,229))
```


## conic  `#type:conic`

Represents a conic section.


### `getCoefficient` (Attributes:)  `type:conic:getCoefficient`

Get the 3x3 coefficient matrix of a conic where each row represents x terms and each column represents y terms.

```text
# Create a variable for a conic type using the
# latex input from this component.
fn = conic(this.latex)

# Get the coefficients in columns 1, 2, and 3 of 
# The first row of the coefficient matrix.
c11 = fn.getCoefficient(1,1)
c12 = fn.getCoefficient(1,2)
c13 = fn.getCoefficient(1,3)

# Get The coefficients in columns 1 and 2 of
# the second row of the coefficient matrix.
c21 = fn.getCoefficient(2,1)
c22 = fn.getCoefficient(2,2)

# Get the coefficient in column 1 of row 3
# of the coefficient matrix.
c31 = fn.getCoefficient(3,1)
```


### `verticalParabola` (Attributes:)  `type:conic:verticalParabola`

Returns a parabola object if the conic is a parabola aligned to the y axis.

```text
# Create a variable for a conic type using the
# latex input from this component.
# Specify that the conic be a vertical parabola.
fn = conic(this.latex).verticalParabola


# get the coefficient of the x^2 term from the vertical parabola
a = fn.getCoefficient(3,1)
# get the coefficient of the x term from the vertical parabola
b = fn.getCoefficient(2,1)
# get the coefficient of the constant term from the vertical parabola
c = fn.getCoefficient(1,1)
```


### `horizontalParabola` (Attributes:)  `type:conic:horizontalParabola`

Returns a parabola object if the conic is a parabola aligned to the x axis.

```text
# Create a variable for a conic type using the
# latex input from this component.
# Specify that the conic be a horizontal parabola.
fn = conic(this.latex).horizontalParabola


# get the coefficient of the y^2 term from the horizontal parabola
a = fn.getCoefficient(1,3)
# get the coefficient of the y term from the horizontal parabola
b = fn.getCoefficient(1,2)
# get the coefficient of the constant term from the horizontal parabola
c = fn.getCoefficient(1,1)
```


## equation  `#type:equation`

Represents a mathematical equation.


### `parseEquation` (Creating:)  `function:parseEquation`

Takes a latex string, e.g. "2x+y=1" - and returns an equation object

```text
content:
# Parses and displays separately the 
# left and right hand sides of an equation.
"Enter an equation.

lhs = `${parseEquation(input.latex).lhs}`
rhs = `${parseEquation(input.latex).rhs}`"
```


### `rhs` (Attributes:)  `type:equation:rhs`

Latex string for right-hand side of equation

```text
content:
# Parses and displays separately the 
# left and right hand sides of an equation.
"Enter an equation.

lhs = `${parseEquation(input.latex).lhs}`
rhs = `${parseEquation(input.latex).rhs}`"
```


### `lhs` (Attributes:)  `type:equation:lhs`

Latex string for left-hand side of equation

```text
content:
# Parses and displays separately the 
# left and right hand sides of an equation.
"Enter an equation.

lhs = `${parseEquation(input.latex).lhs}`
rhs = `${parseEquation(input.latex).rhs}`"
```


### `differenceFunction` (Attributes:)  `type:equation:differenceFunction`

simpleFunction representing for (lhs) - (rhs) of an equation. Useful for setting equal to zero to test or plot

```text
# Difference function takes the lhs of the equation and subtracts it
# from the rhs.

# EXAMPLE: 3x+5 = y-2 -> (y-2)-(3x+5)

# This can be sent into a graph as a two variable function.

function("f"): parseEquation(input.latex).differenceFunction("x","y") 
```


## evaluationFrame  `#type:evaluationFrame`

A frame object to store functions and variables for future evaluation.


### `define` (Attributes:)  `type:evaluationFrame:define`

Define a function or assign a number value to a variable for future evaluation in a frame.

```text
# Open an evaluation frame.
frame = evaluationFrame()
# Define the variables a and b and assign their values 
# using the cell valuees from table1.
  .define(`a`,table1.cellNumericValue(1,1))
  .define(`b`,table1.cellNumericValue(1,2))
# Define the functions f and g and create them using
# the cell content from table2.
  .define(`f`,simpleFunction(table2.cellContent(1,1)))
  .define(`g`,simpleFunction(table2.cellContent(1,2)))
```


### `evaluate` (Attributes:)  `type:evaluationFrame:evaluate`

Get the numeric value of an expression within a frame.

```text
# Evaluate the function and variables from the tables
# acording to the math input.
output = input1.script.frame.evaluate(input1.latex)

# Display the evaluation only after input1 is submitted
eval = when input1.submitted "`${input1.latex}=${output}`" otherwise "Press \"Submit\" to see the evaluation."
```


## inequality  `#type:inequality`

Represents a mathematical inequality.


### `parseInequality` (Creating:)  `function:parseInequality`

Takes a latex string, e.g. "2x+y>1" - and returns an inequality object. Does not recognize compound inequalities.

```text
# Create a variable for the inequality created
# from the student's input.
inequality = parseInequality(i.latex)

# When the inequality is strictly greater than
# or less than, display "strict" otherwise, 
# display "not strict"
strictMsg = when inequality.isStrict "strict" otherwise "not strict"

# Uses isLeftGreater to determine which of the two
# sides is greater than the other. If leftIsGreater,
# bigger is set to the left side and smaller is set to
# the right side. If not, the assignments are switched.
bigger = when inequality.isLeftGreater inequality.lhs otherwise inequality.rhs
smaller = when inequality.isLeftGreater inequality.rhs otherwise inequality.lhs

# Turn the parsed sides into a function by subtracting
# the lesser side from the greater side.
f = inequality.differenceFunction("x", "y")


# Create the message to display in the note.
msg = when isDefined(inequality)
"Nice.
I wonder which is bigger: ${inequality.lhs} or ${inequality.rhs}.
Looks like it's ${strictMsg}.
And looks like it's true when ${bigger} is greater than ${smaller}.
"
otherwise ""
```


### `rhs` (Attributes:)  `type:inequality:rhs`

Latex string for right-hand side of inequality

```text
content:
# Parses and displays separately the 
# left and right hand sides of an inequality.
"Enter an inequality.

lhs = `${parseInequality(input.latex).lhs}`
rhs = `${parseInequality(input.latex).rhs}`"
```


### `lhs` (Attributes:)  `type:inequality:lhs`

Latex string for lef-hand side of inequality

```text
content:
# Parses and displays separately the 
# left and right hand sides of an inequality.
"Enter an inequality.

lhs = `${parseInequality(input.latex).lhs}`
rhs = `${parseInequality(input.latex).rhs}`"
```


### `isStrict` (Attributes:)  `type:inequality:isStrict`

True for strict inequality, False for non-strict inequality

```text
# Creates a function by subtracting the lesser side
# of the inequality from the greater side.
function(`f`): parseInequality(input.latex).differenceFunction(`x`,`y`)

# Creates a variable in the graph and sets it to 1 when the 
# inequality is strictly less than or greater than, and 0
# when the inequality is less than or equal to or greater than or 
# equal to.
number(`s_{trict}`): when parseInequality(input.latex).isStrict 1 otherwise 0
```


### `isLeftGreater` (Attributes:)  `type:inequality:isLeftGreater`

Which way does the inequality point? True for "greater than" and "greater than or equal to"

```text
# Create a variable for the inequality.
inequality = parseInequality(this.latex)

# Uses isLeftGreater to determine which of the two
# sides is greater than the other. If the left Is Greater,
# bigger is set to the left side and smaller is set to
# the right side. If not, the assignments are switched.
bigger = when inequality.isLeftGreater inequality.lhs otherwise inequality.rhs
smaller = when inequality.isLeftGreater inequality.rhs otherwise inequality.lhs
```


### `differenceFunction` (Attributes:)  `type:inequality:differenceFunction`

simpleFunction representing for (greater side) - (lesser side) of an equation. Useful for setting equal to zero to test or plot, with f(x,y)>0

```text
# Creates a function by subtracting the lesser side
# of the inequality from the greater side.
function(`f`): parseInequality(input.latex).differenceFunction(`x`,`y`)

# Creates a variable in the graph and sets it to 1 when the 
# inequality is strictly less than or greater than, and 0
# when the inequality is less than or equal to or greater than or 
# equal to.
number(`s_{trict}`): when parseInequality(input.latex).isStrict 1 otherwise 0
```


## location  `#type:location`




## mathFunction  `#type:mathFunction`

Represents a mathematical function that can be evaluated.


### `simpleFunction` (Creating:)  `function:simpleFunction`

Takes a latex string and returns a function which can, for example, be passed into the function sink of a calculator The first argument is the latex string, and additional arguments are The names of the variables to treat as input variables (defaults to one-variable function in terms of x if not specified

```text
# Get the latex string from "equationInput" and assign
# it to f in the calculator.

function("f"): simpleFunction(equationInput.latex, "x")
```


### `evaluateAt` (Attributes:)  `type:mathFunction:evaluateAt`

evaluate function with given arguments

```text
# Create some simpleFunctions. we'll use them to help find
# our missing values
hypLength = simpleFunction("\sqrt{a^{2}+b^{2}}","a","b")
legLength = simpleFunction("\sqrt{c^{2}-a^{2}}","a","c")
# Set the content of cells (1,3) and (2,2)
cellContent(1,3):

# If either of the two inputs are undefined, don't show anything.
  when isUndefined(this.cellNumericValue(1,1)) or isUndefined(this.cellNumericValue(1,2)) ""

# Create a simpleFunction that sums the squares of the two legs
# and takes the square root. Define those two variables "a" and "b"
# evaluate the function at the two editable cells. The output is a number.
  otherwise "${hypLength.evaluateAt(this.cellNumericValue(1,1),this.cellNumericValue(1,2))}"

cellContent(2,2):
# If either of the two inputs are undefined, don't show anything.
  when isUndefined(this.cellNumericValue(2,1)) or isUndefined(this.cellNumericValue(2,3)) ""

# Create a simplefunction that subtracts the squares of a leg and the
# hypotenuse and takes the square root. Define those two variables "a" and "c"
# evaluate the function at the two editable cells. The output is a number.
  otherwise "${legLength.evaluateAt(this.cellNumericValue(2,1),this.cellNumericValue(2,3))}"
```


## orderedPair  `#type:orderedPair`

Represents an ordered pair.


### `parseOrderedPair` (Creating:)  `function:parseOrderedPair`

Takes a latex string - e.g. "(a,2)" - and returns a coordinate pair - e.g. x: "a", y: "2".

```text
# Get the latex string from the expression input component
# "orderedPairInput". Create an orderedPair object using
# parseOrderedPair and then assign that object to the
# Computation Layer variable "myPair".
myPair = parseOrderedPair(orderedPairInput.latex)

# Assign the numeric value of the x property
# of the orderedPair object named "myPair" to
# the calculator variable "x_last".
number("x_{last}"): numericValue(myPair.x)

# Assign the numeric value of the y property
# of the orderedPair object named "myPair" to
# the calculator variable "y_last".
number("y_{last}"): numericValue(myPair.y)
```


### `x` (Attributes:)  `type:orderedPair:x`

Latex string for first element of pair

```text
# Get the latex string from the expression input component
# "orderedPairInput". Create an orderedPair object using
# parseOrderedPair and then assign that object to the
# Computation Layer variable "myPair".
myPair = parseOrderedPair(orderedPairInput.latex)

# Assign the numeric value of the x property
# of the orderedPair object named "myPair" to
# the calculator variable "x_last".
number("x_{last}"): numericValue(myPair.x)

# Assign the numeric value of the y property
# of the orderedPair object named "myPair" to
# the calculator variable "y_last".
number("y_{last}"): numericValue(myPair.y)
```


### `y` (Attributes:)  `type:orderedPair:y`

Latex string for second element of pair

```text
# Get the latex string from the expression input component
# "orderedPairInput". Create an orderedPair object using
# parseOrderedPair and then assign that object to the
# Computation Layer variable "myPair".
myPair = parseOrderedPair(orderedPairInput.latex)

# Assign the numeric value of the x property
# of the orderedPair object named "myPair" to
# the calculator variable "x_last".
number("x_{last}"): numericValue(myPair.x)

# Assign the numeric value of the y property
# of the orderedPair object named "myPair" to
# the calculator variable "y_last".
number("y_{last}"): numericValue(myPair.y)
```


## parabola  `#type:parabola`

Represents a parabola.


### `getCoefficient` (Attributes:)  `type:parabola:getCoefficient`

Get the 3x3 coefficient matrix of a parabola where each row represents x terms and each column represents y terms.

```text
# Create a variable for a conic type using the
# latex input from this component.
fn = conic(this.latex)

# Get the coefficients in columns 1, 2, and 3 of 
# The first row of the coefficient matrix.
c11 = fn.getCoefficient(1,1)
c12 = fn.getCoefficient(1,2)
c13 = fn.getCoefficient(1,3)

# Get The coefficients in columns 1 and 2 of
# the second row of the coefficient matrix.
c21 = fn.getCoefficient(2,1)
c22 = fn.getCoefficient(2,2)

# Get the coefficient in column 1 of row 3
# of the coefficient matrix.
c31 = fn.getCoefficient(3,1)
```


### `isVertical` (Attributes:)  `type:parabola:isVertical`

Returns true if the parabola is aligned to the y axis.

```text
# returns TRUE if the conic is a vertical parabola.
match = conic(this.latex).verticalParabola.isVertical
```


### `isHorizontal` (Attributes:)  `type:parabola:isHorizontal`

Returns true if the parabola is aligned to the x axis.

```text
# returns TRUE if the conic is a vertical parabola.
match = conic(this.latex).horizontalParabola.isHorizontal
```


### `vertex` (Attributes:)  `type:parabola:vertex`

Vertex of parabola.

```text
# Define a vertical parabola
parabola = conic(this.latex).verticalParabola

# Get the coordinates of the vertex
vX = parabola.vertex.x
vY = parabola.vertex.y
```


### `xIntercepts` (Attributes:)  `type:parabola:xIntercepts`

X intercept(s) of parabola.

```text
# Define a vertical parabola
parabola = conic(this.latex).verticalParabola

# Get the x-intercepts as a list
X = parabola.xIntercepts
```


### `yIntercepts` (Attributes:)  `type:parabola:yIntercepts`

Y intercept(s) of parabola.

```text
# Define a horizontal parabola
parabola = conic(this.latex).horizontalParabola

# Get the y-intercepts as a list
Y = parabola.yIntercepts
```


## polypadTools  `#type:polypadTools`

Tools available in the polypad toolbar


### `move` (Attributes:)  `type:polypadTools:move`

The move polypad tool.


### `pen` (Attributes:)  `type:polypadTools:pen`

The pen polypad tool.


### `geo` (Attributes:)  `type:polypadTools:geo`

The geometry polypad tool.


### `text` (Attributes:)  `type:polypadTools:text`

The text polypad tool.


### `equation` (Attributes:)  `type:polypadTools:equation`

The equation polypad tool.


### `none` (Attributes:)  `type:polypadTools:none`

No polypad tool is active.


## randomGenerator  `#type:randomGenerator`

Contains random number generators.


### `randomGenerator` (Creating:)  `function:randomGenerator`

Create a random number generator. Provide zero or more numeric arguments as seeds (e.g. button.pressCount) if you want the numbers from this generator to re-randomize when those seed values change. See further documentation below.

```text
# Instantiate the randomGenerator. Assign it to a variable.
# Also pass a "seed" as a parameter so that it generates new
# random numbers as the seed changes. (In this case the number
# of times the pointGetter button was pressed.)
r = randomGenerator(intGetter.pressCount)

# Get a random integer between -9 and 9 and assign
# it to "a" in the calculator component. Get another
# integer and assign it to "b".
number("a"): r.int(-9,9)
number("b"): r.int(-9,9)
```


### `int` (Attributes:)  `type:randomGenerator:int`

Member function of a random number generator. Takes a and b as inputs arguments, and generates an output integer between round(a) and round(b) inclusive. |a| and |b| must both be less than 2^31, or the value will return NaN. That restriction may be relaxed in the future.

```text
# Instantiate the randomGenerator. Assign it to a variable.
# Also pass a "seed" as a parameter so that it generates new
# random numbers as the seed changes. (In this case the number
# of times the pointGetter button was pressed.)
r = randomGenerator(intGetter.pressCount)

# Get a random integer between -9 and 9 and assign
# it to "a" in the calculator component. Get another
# integer and assign it to "b".
number("a"): r.int(-9,9)
number("b"): r.int(-9,9)
```


### `float` (Attributes:)  `type:randomGenerator:float`

Member function of a random number generator. Takes a and b as inputs arguments, and generates an output float between a and b

```text
# Instantiate the randomGenerator. Assign it to a variable.
# Also pass a "seed" as a parameter so that it generates new
# random numbers as the seed changes. (In this case the number
# of times the pointGetter button was pressed.)
r = randomGenerator(floatGetter.pressCount)

# Get a random real number between -10 and 10 and assign
# it to "a" in the calculator component. Get another
# real number and assign it to "b".
number("a"): r.float(-9,9)
number("b"): r.float(-9,9)
```


## sketch  `#type:sketch`

Represents the data for a sketch.


### `filterByColor` (Attributes:)  `type:sketch:filterByColor`

Filter a sketch to only the strokes and points that match the given color. Note that opacity does not affect this filtering.

```text
# This code filters out only the purple sketches in 
# the sketch component to the left. 
Purple = sketch1.sketch.filterByColor(colors.purple)

# For display purposes, a background layer is created
# using only the purple sketches taken from the sketch
# component.
background: sketchLayer(Purple)
```


### `setColor` (Attributes:)  `type:sketch:setColor`

flatten all strokes and points in this sketch to the provided color

```text
# This code copies the sketch created in 
# the sketch component but changes it's 
# color to black.
background: sketchLayer(sketch1.sketch.setColor(colors.black))
```


### `setOpacity` (Attributes:)  `type:sketch:setOpacity`

Change opacity of all strokes and points in the sketch to the provided alpha value. 0 is transparent, 1 is full opacity. Note that using `setColor` after `setOpacity` will override the provided alpha value

```text
# This code copies the sketch created in 
# the sketch component but changes it's 
# opacity to 40%.
background: sketchLayer(sketch1.sketch.setOpacity(0.4))
```


### `scaleThicknessBy` (Attributes:)  `type:sketch:scaleThicknessBy`

scale the stroke thickness and point size by the provided amount, to a minimum of 1px for strokes and 2px for points.

```text
# Create a background sketch layer using the student's sketch.
# Scale the thickness based on the slider value in this graph
# (it goes from 0 to 2).

background: sketchLayer(sketch1.sketch.scaleThicknessBy(this.number(`a`)))
```


### `pointCount` (Attributes:)  `type:sketch:pointCount`

Takes a sketch and returns the number of points as a number.

```text
# Sets the screen's subtitle to display the number of points
# plotted in the sketch component.
subtitle: "You have plotted `${sketch1.sketch.pointCount}` points."
```


### `textCount` (Attributes:)  `type:sketch:textCount`

Takes a sketch and returns the number of text items as a number.

```text
# This counts how many text or math input boxes 
# someone creates in the sketch component.

number = sampleSketch.sketch.textCount
```


### `strokeCount` (Attributes:)  `type:sketch:strokeCount`

Takes a sketch and returns the number of strokes as a number.

```text
# Merges the current sketch and the existing sketch into
# a single sketch layer.
totalSketch = mergeSketches(this.sketch,this.currentStroke)

# Resets the sketch when the total number of strokes is 
# greater than one.
resetOnChange: when totalSketch.strokeCount < 2 "0" otherwise "1"
```


### `totalStrokeLength` (Attributes:)  `type:sketch:totalStrokeLength`

Takes a sketch and returns a number the aggregate length of all strokes as a number.

```text
# Create a subtitle that displays the total length of all
# of the strokes in the sketch.
subtitle: "Total length: `${sketch1.sketch.totalStrokeLength}`"
```


### `yValuesAt` (Attributes:)  `type:sketch:yValuesAt`

Returns a numberList of all y-values that the sketch passes through at a given x value

```text
# Create number lists for the y values of the
# sketch at x= -8, -4, 0, 4, and 8.
numberList("Y_{n8}"): this.sketch.yValuesAt(-8)
numberList("Y_{n4}"): this.sketch.yValuesAt(-4)
numberList("Y_{0}" ): this.sketch.yValuesAt(0)
numberList("Y_{4}" ): this.sketch.yValuesAt(4)
numberList("Y_{8}" ): this.sketch.yValuesAt(8)
```


### `xValuesAt` (Attributes:)  `type:sketch:xValuesAt`

Returns a numberList of all x-values that the sketch passes through at a given y value

```text
# Create number lists for the x values of the
# sketch at y= -8, -4, 0, 4, and 8.
numberList("X_{n8}"): this.sketch.xValuesAt(-8)
numberList("X_{n4}"): this.sketch.xValuesAt(-4)
numberList("X_{0}" ): this.sketch.xValuesAt(0)
numberList("X_{4}" ): this.sketch.xValuesAt(4)
numberList("X_{8}" ): this.sketch.xValuesAt(8)
```


### `pointXValues` (Attributes:)  `type:sketch:pointXValues`

Returns the x coordinates of points in the sketch as a list

```text
# Create two number lists X and Y, that track the 
# x and y locations, respectively of all the points
# plotted in this component.
numberList("X"): this.sketch.pointXValues
numberList("Y"): this.sketch.pointYValues 
```


### `pointYValues` (Attributes:)  `type:sketch:pointYValues`

Returns the y coordinates of points in the sketch as a list

```text
# Create two number lists X and Y, that track the 
# x and y locations, respectively of all the points
# plotted in this component.
numberList("X"): this.sketch.pointXValues
numberList("Y"): this.sketch.pointYValues 
```


### `transform` (Attributes:)  `type:sketch:transform`

Apply an arbitrary transformation to a sketch, by specifying functions

```text
# Combine the current sketch and the existing sketch
# strokes into a single layer that can be transformed.
totalSketch = mergeSketches(this.currentStroke, this.sketch)

# Use simpleFunction to create simpleFunctions to transform
# x and y, respectively

xTransform = simpleFunction("1.5x","x","y")
yTransform = simpleFunction("1.5y","x","y")

# Put everything together and display the transformed function as a background
# Create a sketchLayer by transforming totalSketch using xTransform and yTransform.

background: sketchLayer(totalSketch.transform(xTransform,yTransform))
```


## sketchTools  `#type:sketchTools`

Contains the tools from the sketch component toolbar.


### `pencil` (Attributes:)  `type:sketchTools:pencil`

The pencil sketch tool.

```text
# Sets the tool initially selected to the pencil.
# Try also:
    # sketchTools.line
    # sketchTools.eraser
    # sketchTools.points
    # sketchTools.math
    # sketchTools.text
initialTool: sketchTools.pencil
```


### `line` (Attributes:)  `type:sketchTools:line`

The line sketch tool.

```text
# Sets the tool initially selected to the pencil.
# Try also:
    # sketchTools.line
    # sketchTools.eraser
    # sketchTools.points
    # sketchTools.math
    # sketchTools.text
initialTool: sketchTools.pencil
```


### `eraser` (Attributes:)  `type:sketchTools:eraser`

The eraser sketch tool.

```text
# Sets the tool initially selected to the pencil.
# Try also:
    # sketchTools.line
    # sketchTools.eraser
    # sketchTools.points
    # sketchTools.math
    # sketchTools.text
initialTool: sketchTools.pencil
```


### `points` (Attributes:)  `type:sketchTools:points`

The points sketch tool.

```text
# Sets the tool initially selected to the pencil.
# Try also:
    # sketchTools.line
    # sketchTools.eraser
    # sketchTools.points
    # sketchTools.math
    # sketchTools.text
initialTool: sketchTools.pencil
```


### `math` (Attributes:)  `type:sketchTools:math`

The math sketch tool.

```text
# Sets the tool initially selected to the pencil.
# Try also:
    # sketchTools.line
    # sketchTools.eraser
    # sketchTools.points
    # sketchTools.math
    # sketchTools.text
initialTool: sketchTools.pencil
```


### `text` (Attributes:)  `type:sketchTools:text`

The text sketch tool.

```text
# Sets the tool initially selected to the pencil.
# Try also:
    # sketchTools.line
    # sketchTools.eraser
    # sketchTools.points
    # sketchTools.math
    # sketchTools.text
initialTool: sketchTools.pencil
```


## xyLine  `#type:xyLine`

Represents a linear equation or expression.


### `xyLine` (Creating:)  `function:xyLine`

Create a new xyLine object from the provided latex string.

```text
# Assigns to a variable called "myLine" an "xyLine" object
# built from the content of a cell in the table.
myLine = xyLine(lineInfoTable.cellContent(1,2))

# Displays the slope of the xyLine object in a table.
cellContent(2,2): "${myLine.slope}"

# Displays the y-intercept of the xyLine object in a table.
cellContent(3,2): "${myLine.yIntercept}"

# Displays the x-intercept of the xyLine object in a table.
cellContent(4,2): "${myLine.xIntercept}"

# Displays "Yes" if the line is horizontal.
cellContent(5,2): "${when myLine.isHorizontal "Yes" otherwise "No"}"

# Displays "Yes" if the line is vertical.
cellContent(6,2): "${when myLine.isVertical "Yes" otherwise "No"}"

# Displays the angle the line makes with the x-axis in radians.
cellContent(7,2): "${myLine.angle}"
```


### `angle` (Attributes:)  `type:xyLine:angle`

Returns the angle an xyLine object makes with the x-axis, measured in radians.

```text
# Assigns to a variable called "myLine" an "xyLine" object
# built from the content of a cell in the table.
myLine = xyLine(lineInfoTable.cellContent(1,2))

# Displays the angle the line makes with the x-axis in radians.
cellContent(2,2): "${myLine.angle}"
```


### `slope` (Attributes:)  `type:xyLine:slope`

Returns the slope of an xyLine object.

```text
# Assigns to a variable called "myLine" an "xyLine" object
# built from the content of a cell in the table.
myLine = xyLine(lineInfoTable.cellContent(1,2))

# Displays the slope of the xyLine object in a table.
cellContent(2,2): "${myLine.slope}"
```


### `yIntercept` (Attributes:)  `type:xyLine:yIntercept`

Returns the y-intercept of an xyLine object.

```text
# Assigns to a variable called "myLine" an "xyLine" object
# built from the content of a cell in the table.
myLine = xyLine(lineInfoTable.cellContent(1,2))

# Displays the y-intercept of the xyLine object in a table.
cellContent(2,2): "${myLine.yIntercept}"
```


### `xIntercept` (Attributes:)  `type:xyLine:xIntercept`

Returns the x-intercept of an xyLine object.

```text
# Assigns to a variable called "myLine" an "xyLine" object
# built from the content of a cell in the table.
myLine = xyLine(lineInfoTable.cellContent(1,2))

# Displays the x-intercept of the xyLine object in a table.
cellContent(2,2): "${myLine.xIntercept}"
```


### `isHorizontal` (Attributes:)  `type:xyLine:isHorizontal`

Returns a Boolean value given an xyLine object that indicates whether or not the line is horizontal.

```text
# Assigns to a variable called "myLine" an "xyLine" object
# built from the content of a cell in the table.
myLine = xyLine(lineInfoTable.cellContent(1,2))

# Displays "Yes" if the line is horizontal.
cellContent(2,2): "${when myLine.isHorizontal "Yes" otherwise "No"}"
```


### `isVertical` (Attributes:)  `type:xyLine:isVertical`

Returns a Boolean value given an xyLine object that indicates whether or not the line is vertical.

```text
# Assigns to a variable called "myLine" an "xyLine" object
# built from the content of a cell in the table.
myLine = xyLine(lineInfoTable.cellContent(1,2))

# Displays "Yes" if the line is vertical.
cellContent(2,2): "${when myLine.isVertical "Yes" otherwise "No"}"
```


## list  `#type:list`

Represents a list of items.


### `length` (Attributes:)  `type:list:length`

Takes a List and returns its length as a number.

```text
# Create a list using the values in column 1 of the table.

X = table.columnNumericValues(1)

# Use CL to display a dynamic note.

content:
# When the table is empty (list length = 0),
# tell the student to enter some x values.
when length(X) = 0 "Enter some values for `x`."

# After at least one point has been entered, display
# a new set of instructions is displayed along with
# the number of points entered, represented by length(X).
otherwise "You have entered `${length(X)}` points.

What do you think this graph will look like?

Use the sketch tool if it helps with your thinking."
```


### `elementAt` (Attributes:)  `type:list:elementAt`

Takes a List and an index, and returns the element of the list at that index (starts with 1)

```text
# Create variables for the distances from the center
# for each of the first 5 elements in the history list "distance"

d1 = button.history("distance").elementAt(1)
d2 = button.history("distance").elementAt(2)
d3 = button.history("distance").elementAt(3)
d4 = button.history("distance").elementAt(4)
d5 = button.history("distance").elementAt(5)

# Set the cellContent for each row using the variables d1-5
# Conditionally set the nth cell to blank before the nth attempt

cellContent(1,2): when button.pressCount < 1 "" otherwise "${d1}" 
cellContent(2,2): when button.pressCount < 2 "" otherwise "${d2}" 
cellContent(3,2): when button.pressCount < 3 "" otherwise "${d3}" 
cellContent(4,2): when button.pressCount < 4 "" otherwise "${d4}" 
cellContent(5,2): when button.pressCount < 5 "" otherwise "${d5}" 

# Display the most recent element of the history list on row 6.
# note: in this case it could also be attained using lastValue, 
# but elementAt is used here to showcase a dynamic index.

cellContent(6,2): when button.pressCount < 6 "" otherwise "${button.history("distance").elementAt(button.pressCount)}"
```
