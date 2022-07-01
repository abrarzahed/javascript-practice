/*
INFO: What is javaScript?

ANSWER: Javascript is a high-level, prototyped-based, object-oriented 
multi-paradigm,dynamic, single-threaded, garbage-collected 
programing language with first-class-functions and a 
non-blocking event loop concurrency model.🤨.

POINT:  High-level:- Every programs that runs on computer needs some hardware resource
such as memory, cpu to work. There are low level languageS such as C or C# where
you have to manually manage these resources. 

For example asking to computer for memory to store a variable. 
On the other hand there are high-level languages such as javascript and python, 
where you do not need to manually manage these resources. Because these languages
have so called abstractions that takes all of that work away from us.

These makes the language easier to learn and use. But the down site is that, 
the programs will not be as fast as low level language such as C and C# programs. 
One of the powerful tool that take memory collection away from developers is 
called garbage collection.

POINT: Garbage-collected:- Garbage collection is basically and algorithm inside 
javascript engine which automatically removes all unused objects from computer memory. 
In order not to clog it up with unnecessary stuff.

POINT: Interpreted or just-in-time compiled:- Computer processor only understands 
0 and 1 which is called machine code. But they are not efficient to write and read. 
So programmers write human readable code. Which is an abstraction over machine code. 
But still this code eventually needs to be translated into machine code. 
And thats step can be either needs compiling or interpreting. 
In the case of javascript this happens inside the javascript engine.

POINT: Multi-paradigm:- One of the thing that makes javascript so popular is 
the fact that, javascript is multi-paradigm language. In programming 
paradigm is an approach and mindset of structuring code, which will direct 
your coding style and technique.

POINT: Prototyped-based object-oriented:- Javascript is a prototyped-based 
object-oriented programming language. That means almost everything in javascript 
is an object. Except for preemptive values such as numbers, strings etc. 
Even arrays are objects in javascript.

POINT: First-class functions:- Javascript is a language with first-class functions. 
That means in javascript, functions are simply treated as regular variables. 
Functions can be passed into other functions. And can be returned as well. 
Which is extremely powerful because it turns on the ability of functional programming.

POINT: Dynamic:- That means javascript dynamically typed language. 
In javascript we don't assign data types to variables. They only became known 
when javascript engine execute the code. Also the types of variables can be 
changed at any point of program by reassigning them.

POINT: Single-treaded & non-blocking event loop:- Javascript runs in one single thread. 
So it can only do one thing at time. Therefore in a long-running task such as 
fetching data from external server, would block the single thread 😫. 
But there is another term in javascript which is responsible to prevent 
this from happening which is called non-blocking event loop 😊.

By using non-blocking event loop, javascript takes long running tasks and execute them in background. And then puts them back in the main thread once they are finished.

*/

// ================ //

/*

JavaScript Engine and Runtime

INFO: What is javaScript engine?

ANSWER: Javascript engine is a program that executes javascript code.

POINT: Every browser has its own javascript engine. But provably the most known javascript engine is google V8 engine.

POINT: Any javascript engine always contains a cal-stack and a heap. The call-stack 
is where all the code is executes using something called "execution context". 
And the heap is an unstructured memory that stores all the objects that applications need.
With that this is clear that where javascript code is executes. But now the question 
is how the code will be compiled into machine code?

Well at first lets take a look at the deference between compilation and interpretation. 
As we now that every single computer programs eventually needs to be converted as 
machine code. And this can be happen by either compilation or interpretation.

POINT: Compilation:- In compilation the entire code will be converted into 
machine code at once. And then that machine code will be written in a portable 
binary file that can be executed by any computer. So here the execution can be 
happen way after compilation. 

POINT: Interpretation: In interpretation there is an interpreter which runs through 
the source code and execute them line by line. So here we do not have the same two 
steps unlike in compilation. So the code is read an execute at a same time. 
of course the source code is still needs to be converted into machine code. 
But it simply happens right before its execution and not ahead of time.

Before emergence of modern javascript, it used to be a purely interpreted language. 
But the problem of  interpreted languages is that they are much much slower than compiled languages. Still many people think javascript is an interpreted language, 
but this is not true any more. Instead of simple interpretation, 
now modern javascript engine uses a mix version of compilation and interpretation. 
Which is called just-in-time(JIT) compilation.

This approach basically compiles the entire code into machine at once and then 
executes them right away. There is still two steps as simple compilation approach but 
now there isn't any portable file. So the execution happens immediately after compilation. 
And surely this is indeed a faster approach than executing line by line.

INFO: What is javaScript runtime?

ANSWER: The most common javaScript runtime is the browser. 
JavaScript runtime can be imagined  as a big container. Which contains all the 
things that needed to use javaScript. The heart of any javascript runtime is 
always a javascript engine. Without an engine there is no runtime and no javascript at all. However the engine alone is not enough in order to work properly we also need 
access to web APIs such as DOM, Timers, fetch and son and so forth.

Web APIs are functionalities provided to the engine which are not part of 
javascript language itself. Javascript simply gets access to these APIs through 
the global window object. Actually web APIs are the parts of runtime.
Because as we know that javascript runtime is such a container which 
contains all the javascript related stuff that we need.

A typical javascript runtime also includes a so called "callback queue". 
This is nothing but a data structure that contains all the callback functions 
which are ready to be executed, Which happens through something called event loop.

*/

// ================ //

/*
INFO: What is execution context?

ANSWER: After compilation of javascript code, there will be a a global execution
context for top level code. Top level code means the code which is not inside a function.
The definition of execution context can be like, an environment in which stored all the necessary information for code to be executed with a specific order and role.

For each and every function, a new execution context will be created. 
Same goes for methods because there simply functions attached to objects.

After execution of all functions the engine waits for callback functions to arrive. 
For example a callback function associated with a click event.

Now lets explore what inside of an execution context. The first thing inside 
any execution context is so called variable environment. In this environment 
all the variables and function declarations are stored. And there is also a spacial
arguments object. This object contains all the arguments passed into function that 
the current execution context belongs to. Because each function gets its own execution
context as soon as the function is called. So all the variable declared inside a function
will end up in its own variable environment.

However a function can also access a variable outside of the function. This work 
because something called scope chain.

Basically scope chain is consists of references to variables that are located outside
of the current function. to keep track of the scope chain it is stored in each 
execution context. Each context also gets a spacial variable called this keyword.

INFO: The content of the execution context  variable environment, scope chain and this keyword 
are generated in the so called creation face. Which happens right before execution.

But execution context belonging to arrow functions, do not get there argument object and 
the this keyword. Basically arrow functions do not have argument object and this keyword.
Instead they can use the argument and this keyword from their closest regular function.

POINT: Scope chain and Scope:-  Scoping controls how variables are organized and accessed. 
Where do variables live? or Where they can be accessed by javascript engine, and where not?

In javascript there is something called lexical scoping. Lexical scoping means, the way variables
are organized and accessed is entirely controlled by the placement of functions and of blocks
in the programs code. For example a function which is written inside another function, has access
to the variables of the parent function. Scope chaining only works upwards by something called variable lookup not downwards nor sideways.

Variables scoping is influenced by where exactly we write our functions and blocks.

Scope is eventually a space or environment in which a variable is declared.
And in the case of functions, it is an environment which is stored in the functions execution context. In javascript there are global scope, function scope and block scope.
Well, Then what is scope of variable? Simply scope of variable is a region of our code 
where a certain variable can be accessed.

1 Global Scope: Global scope is for all the top level code. Code that outside of functions and 
blocks are located in global scope. And they can be accessed from anywhere of the program. Even inside of any function and any block.

2 Function Scope: Each and every function creates a scope. Variable that declared inside that
function scope is only accessible inside that function. This is also called local scope.
Function declaration, function expression and arrow function the all create their own scope. 

3 Block Scope: Traditionally only functions  used to create scopes in javascript. But with es6 
blocks also create scopes now. Block means everything between starting and ending curly braces.
Such as an if statement or a for loop. As like function scope, variable which is declared inside 
the block is only accessible inside that block.

But the deference is, block scope only applies to variable declared with let and const.
Only variables declared with let and const are restricted to the block in which they are created.
Other hand variable declared with var still accessible from outside of that block. But restricted
inside function. Var is function scoped and let, const are block scoped.

In es6 all functions are now also block scoped, at least in 'strict mode'. That means just like let and const function which is declared inside a block is only accessible inside this block. 
 
POINT: Variable Environment & Hoisting:- This term says how variables are actually created in javascript. In javascript there is a mechanism called hoisting. 
Hoisting makes some types of variables accessible or usable in the code before they are declared.


Some people define hoisting as "variables magically lifted to the top of their scope" and to be honest that is actually hoisting looks like. But... behind the seen that actually not what happens. In fact behind the seen the code is scanned for variable declarations, and for each variable a new property is created in the "variable environment object". And this happens during so called "creation face" of execution context. That is how hoisting works.

Although hoisting does not works  same for all variable types. So lets analyze the way hoisting works for function declaration, variable defined with var, variable defined with let and const, function expression and arrow function.

# Function declaration is actually hoisted. And the initial value is function itself. That means we can use function declaration before they are declared.

# Variables defined with "var" are also hoisted. But in this case hoisting works in a deferent way. When we try to access a var variable before its declaration we dont get the declared value nor an error, instead we get "undefined". This is wired behavior to lots of people. In fact it might be a common source of bug. But as a beginner or a learner i dont have that much headache about this. Because there are alternatives to get rid of this unexpected occurrence.

# Let and const are'nt hoisted. Though technically they are but their initial value is "uninitialized" . In other word it is called that they are stored in "Temporal Dead Zone"(TDZ)
All that means , they can be accessed between the beginning of the scope and the place where they are declared. Let and const are block scoped. So they only exist in the block in which they were created. Therefore they are successful alternatives of var at least to avoid that unexpected occurrence that i mentioned before.

# Now lets talk about function expression and arrow function. How does hoisting works for them?
Well it is actually depends on if they were created using var or const or let. Because we have learned already that functions are simply variables in javascript. It means that function expression and arrow function declared with var is hoisted. It is usable before declaration but the value is undefined. On the other hand function expression and arrow function defined with let and const are not hoisted practically(though technically they are). They can not be accessed
before declaration.

POINT: The "this" keyword:- "this" keyword" or "this" variable is created for every execution context(every function). In fact as we learned before this is one of the three components of any execution context along with variable environment and scope chain. Generally the "this" keyword will always take the value of the owner of the function in which "this" keyword is used. This definition is still abstract. 

But the important thing is that, the value of "this" keyword is not static at all. It depends on how the function is called. And its value is only assigned when the function is actually called.

Now lets analyze four deferent ways in which functions can be called(excluded new, call, apply, bind). 

# In this sequence, the first way to call a function is, as a method. Means a function is attached to an object. So when a method is called, the "this" keyword inside that method is simply point to the object in which the function is associated. In other word it is point the object which is calling the method.

# Another way of calling a function is simply call it as a normal function, not as a method which is attached to any object. In this case the "this" keyword will simple be undefined if strict mode is on. Otherwise(without strict mode) the "this" keyword will point to global object in this case(browser) it is window object.

# Next we have arrow functions. Actually arrow functions are not a way of calling functions. It is an important type of function that we have to consider. Arrow functions does not have their own "this" variable/keyword. Instead here the "this" will simply be the "this" of its parent function. Technically this is called the lexical "this" keyword.

# Finally if the function is called as an event listener then the "this" keyword will be the dom element in which the event handler is attached to.

Well up until now we have seen, what is "this". But.. it is more important to know what isn't "this"😀

⛔ "this" will never point to the function in which it is used.
⛔ "this" will never point to the variable environment of the function in which it is used.

These two are the most common wrong area of "this"😀
 




*/
