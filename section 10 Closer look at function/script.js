'use strict';
/*
// SECTION: default parameters in function
const allBookings = [];
const createBooking = function (
  // default parameters in ES6 way
  flightNum,
  numPassenger = 1,
  price = 100 * numPassenger
) {
  
//   ES5 way short circuiting to assign default value
//   numPassenger = numPassenger || 1;
//   price = price || 100;
  

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  allBookings.push(booking);
  console.log(booking);
};

createBooking('LH321');
createBooking('LH321', 2);
createBooking('LH321', 5);

// It is not possible to skip arguments when calling the function.
createBooking('LH321', 1000); // here second argument will be counted as second parameter.


// SOLUTION:
createBooking('LH321', undefined);
*/

// SECTION: HOW PASSING ARGUMENTS WORKS WITH PREEMPTIVE TYPE AND WITH REFERENCE TYPE
/*
const flightNum = 'LH212';
const passenger = {
  name: 'Abrar Zahed',
  passport: 'ad6986798',
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'AT300';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 'ad6986798') {
    alert('Checked In');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flightNum, passenger);
console.log(flightNum, passenger);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(passenger);
checkIn(flightNum, passenger);
console.log(flightNum, passenger);
*/

// SECTION: Higher order function
/*

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstLetter = function (str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
};
// console.log(upperFirstLetter('aBrar'));

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// console.log(upperFirstWord('abrar hussen zahed'));

// Higher-order function example
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  //to get the name of callback function just like an object
  console.log(`Transformed by: ${fn.name}`);
};

transformer('javascript is awesome', upperFirstWord);

console.log('..............................................');

transformer('javascript is awesome', upperFirstLetter);

console.log('..............................................');

transformer('javascript is awesome', oneWord);
*/

// SECTION: Functions return another function

/*
const greet = function (greetings) {
  return function (name) {
    console.log(`${greetings} ${name}`);
  };
};
const greet1 = greet('Hey');

greet1('zahed');
greet1('abrar');
greet('hello')('abrar zahed');

const greetArrow = greetings => name => console.log(`${greetings} ${name}`);

const greet2 = greetArrow('Hey');
greet2('zahed');
greet2('abrar');
greetArrow('hello')('abrar zahed');
*/

/*  
  COMMENT: Default parameters in function
*/
/*
const bookings = [];
const createBookings = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  // @@@@@@@@@@ ES% way to setting default parameter  @@@@@@@@@@ //
  // numPassenger = numPassenger || 1
  // price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBookings('FA323');
createBookings('ER323', 3);
createBookings('ER323', undefined, 300); // here used undefined in order to use default parameter
*/

/* **************************************** 
COMMENT: HOW PASSING ARGUMENTS WORKS WITH PREEMPTIVE TYPE AND WITH REFERENCE TYPE   
***************************************** */
/*


const flightNum = 'LH212';
const passenger = {
  name: 'Abrar Zahed',
  passport: 'ad6986798',
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'AT300';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 'ad6986798') {
    console.log('Checked In');
  } else {
    console.log('Wrong passport');
  }
};

// checkIn(flightNum, passenger);
// console.log(flightNum, passenger);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(passenger);
checkIn(flightNum, passenger);
console.log(flightNum, passenger);
*/

/* **************************************** 
COMMENT:    Higher order function
***************************************** */
/*
//INFO: First class function and higher order function are not same at all. First class function is a term or feature which a programming language either contains or not, thats it. It does not have anything to do in practice. On the other hand higher order function actually does have.

// INFO: What is higher order function? Answer: A higher order function is a function that receive another function(callback function) as an argument or return another function or both.

console.log('============== function oneWord ==============');
// @@@@@@@@@@ normal function  @@@@@@@@@@ //
const oneWord = function (str) {
  return str.replaceAll(' ', '');
};
console.log(oneWord('abrar hussen zahed'));

console.log('============== function upperFirstWord ==============');
// @@@@@@@@@@ normal function  @@@@@@@@@@ //
const upperFirstWord = function (str) {
  const [first, ...restWords] = str.split(' ');
  return [first.toUpperCase(), ...restWords].join(' ');
};
console.log(upperFirstWord('abrar hussen zahed'));

// @@@@@@@@@@ higher order function  @@@@@@@@@@ //
console.log('============== function transformer ==============');
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);

  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('javaScript is awesome', oneWord);
console.log('============== function transformer ==============');
transformer('javaScript is awesome', upperFirstWord);
*/

/* **************************************** 
COMMENT: Functions return another function   
***************************************** */

/*
const greet = function (greetings) {
  return function (name) {
    console.log(`${greetings} ${name}`);
  };
};
const greet1 = greet('Hey');

greet1('zahed');
greet1('abrar');
greet('hello')('abrar zahed');

const greetArrow = greetings => name => console.log(`${greetings} ${name}`);

const greet2 = greetArrow('Hey');
greet2('zahed');
greet2('abrar');
greetArrow('hello')('abrar zahed');
*/

/*
// @@@@@@@@@@ with regular function  @@@@@@@@@@ //
const recipeMaker = function (item) {
  return function (recipe) {
    console.log(`${item} ${recipe}`);
  };
};

// @@@@@@@@@@ with arrow function  @@@@@@@@@@ //
// const recipeMaker = item => recipe => console.log(`${item} ${recipe}`);

const recipe1 = recipeMaker('Apple');
recipe1('juice');

const recipe2 = recipeMaker('Chicken');
recipe2('Kabab');
*/

/* **************************************** 
COMMENT: the call and apply  method   
***************************************** */

// @@@@@@@@@@ The bind method  @@@@@@@@@@ //
/*
const bimanBangladesh = {
  airline: 'Biman Bangladesh',
  airCode: 'BM',
  bookings: [],
};

const banglaWings = {
  airline: 'Bangladesh Wings',
  airCode: 'BW',
  bookings: [],
};

const book = function (flightNum, name) {
  console.log(
    `${name} booked a set on ${this.airline} flight ${this.airCode}${flightNum}`
  );
  this.bookings.push({
    flight: `${this.airCode}${flightNum}`,
    passengerName: name,
  });
};
/*

// @@@@@@@@@@ Does NOT work  @@@@@@@@@@ //
// book(32, 'Jon Doe');

// @@@@@@@@@@ Right way to do with call method  @@@@@@@@@@ //
// INFO: The call method is actually a way to explicitly set the "this" keyword to the object you want.
// book.call(bimanBangladesh, 303, 'Abrar Zahed');
// console.log(bimanBangladesh);

// book.call(banglaWings, 32, 'Jon Doe');
// console.log(banglaWings);

// @@@@@@@@@@ The apply method  @@@@@@@@@@ //

// INFO: Unlike call method the apply method takes an array as its second argument
const flightData = [343, 'Jorge Miller'];
// book.apply(bimanBangladesh, flightData);
// console.log(bimanBangladesh);

// INFO: But there is an easy and efficient way of doing this by using call method with spread operator
// book.call(banglaWings, ...flightData);
// console.log(banglaWings);

// @@@@@@@@@@ The bind method  @@@@@@@@@@ //
// INFO: The bind does not immediately cal the function. Instead it store the function into variable

/*
const bookBW = book.bind(banglaWings);
// bookBW(545, 'Jonas Steven');
// console.log(banglaWings);

const bookBW343 = book.bind(banglaWings, 343);
// bookBW343('Marta');
// console.log(banglaWings);

// @@@@@@@@@@ With event listener  @@@@@@@@@@ //
bimanBangladesh.planes = 200;
bimanBangladesh.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// bimanBangladesh.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', bimanBangladesh.buyPlane.bind(bimanBangladesh));

// @@@@@@@@@@ Partial application  @@@@@@@@@@ //
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.23);
// console.log(addVat(100));
const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat = addTax(0.23);
console.log(addVat(100));
*/

///////////////////////////////////////
// Coding Challenge #1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favorite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what should the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]


GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(`Results: ${this.answers}`);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
*/

/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question} \n${this.options.join('\n')} \n(Write option number)`
      )
    );
    console.log(answer);

    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log('Result', this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
*/

/* **************************************** 
COMMENT: Immediately Invoked Function Expressions (IIFE)   
***************************************** */
/*
const runOnce = function () {
  console.log('This should never run again, But it will');
};
runOnce();

// @@@@@@@@@@ with function expression @@@@@@@@@@ //
(function () {
  console.log('This will never run again');
})();

// @@@@@@@@@@ with arrow function  @@@@@@@@@@ //
(() => console.log('This will ALSO never run again'))();

// INFO: immediately invoked functions are  use to create scopes for certain variables or functions. But in modern javascript there is another way to do this. which is the concept of block

{
  const isPrivate = 200; // not accessible out side of this block
  var isPublic = 400; // is accessible out side of this block
}

// console.log(isPrivate); // will give an error
// console.log(isPublic); // will run
*/

/****************************************** 
COMMENT: The closures   
******************************************/
/*
const secureBooking = function () {
  let passenger = 0;
  return function () {
    passenger++;
    console.log(`${passenger} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();

// console.dir(booker);

// @@@@@@@@@@ example 1  @@@@@@@@@@ //
let f;
let g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 4;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

// @@@@@@@@@@ example 2  @@@@@@@@@@ //
const boardPassengers = function (n, wait) {
  const passengerPerGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(
      `There are 3 boarding groups. Each group contains ${passengerPerGroup} passengers`
    );
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 4);
// INFO: closures has priority over the scope chain
*/

/****************************************** 
COMMENT: Coding challenge 2   
******************************************/
/*
const body = document.body;
const colorChanger = function () {
  const header = document.querySelector('h1');

  body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
};
colorChanger();
*/

const body = document.body;

const colorChanger = function () {
  const header = document.querySelector('h1');
  body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
};

colorChanger();
