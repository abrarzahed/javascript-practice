# **Modern And Clean Code Tips and Programming Paradigms in Javascript**

## **Readable Code**

- Write code so that other can understand it.
- Write code so that you can understand it in 1 year at least.
- Avoid too "clever" and "overcomplicated" solutions. Strict with simple and straight solution as much as possible.
- Use descriptive variable names (**what they contain**)
- Use descriptive function names (**what they do**)

## **General**

- Use DRY principle (**refactor your code**)
- Dont pollute global namespace, encapsulate instead into function and es6 class
- Don't use var
- Use strong type checks (**=== and !==**)

## **Functions**

- Generally functions should do **only one thing**
- Don't do more than e function parameters
- Use default parameter whenever possible
- Generally, try to return same data type as received (**not mandatory**)
- Use arrow functions when they make code more readable (**such as callback functions of array methods**)"

## **Object oriented Programming**

- Use es6 classes(**most preferred way**)
- Encapsulate data and don't mutate them from outside the class
- Implement method chaining **by returning "this" from methods.**
- Don't use arrow functions as methods (in regular objects). Because arrow functions doesn't have this keyword.

## **Avoid Nested Code**

- Use early return (**{ { } }**). Guard class might be an example.
- Use ternary (conditional) or logical operators instead of "if"
- If really need to use "if" statement, then use multiple "if" instead of "if/else-if/else".
- Avoid for loops, instead use array methods like map, filter, reduce.
- Avoid callback-based asynchronous APIs

## **Asynchronous Code**

- Consume promises with async/await instead of "then" for best readability. Because "then" approach might produce lots of nested code.
- Whenever possible, run promises in **parallel ( Promise.all() )** to make application a bit faster.
- Handle errors and promise rejections

# **Imperative VS Declarative Code**

### _There are two fundamentally different ways to write code which are also called paradigms. And these two paradigms are imperative and declarative._

## **Imperative Code**

- Programmer explain **"How to do things "**
- We explain the computer every single step it has to follow in order to achieve a certain result.
  **Example:** step by step recipe of a cake.

```
const arr =  [2,4,6,8];
const doubled = [];
for(let i = 0; i <arr.length; i++) {
    doubled[i] = arr[i] * 2;
})
```

## **Declarative Code**

- Programmer tells **"What to do"**. Not how to do.
- We simply describe the way the computer should achieve the result.
- The **HOW** (step by step instructions) gets abstracted away.

```
const arr =  [2,4,6,8];
const doubled = arr.map(n => n * 2);
```

### _Now a days functional programming is considered as a sub paradigm of declarative programming paradigm._

## **Functional Paradigm**

- **Declarative** programming paradigm
- Based on the idea of writing software by combining many pure functions, avoiding **side effects** and mutable data

**Side Effects:** Modification (mutation) of any data outside of the function (mutating external variables, logging to console, writing to DOM etc) are called side effects.

**Pure Function:** A function without side effects. Does not depend on external variables. **Given the same inputs, always returns the same outputs.**

### _In javascript community, functional programming now has became the trend._

## **Declarative Syntax**

- Use array and object destructuring
- Use the spread operator (...)
- Use the ternary (conditional) operator
- Use template string
