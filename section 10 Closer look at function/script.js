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

// @@@@@@@@@@ Does NOT work  @@@@@@@@@@ //
// book(32, 'Jon Doe');

// @@@@@@@@@@ Right way to do with call method  @@@@@@@@@@ //
// INFO: The call method is actually a way to explicitly set the "this" keyword to the object you want.
// book.call(bimanBangladesh, 303, 'Abrar Zahed');
console.log(bimanBangladesh);

book.call(banglaWings, 32, 'Jon Doe');
console.log(banglaWings);

  // @@@@@@@@@@ The apply method  @@@@@@@@@@ //

// INFO: Unlike call method the apply method takes an array as its second argument
const flightData = [343, 'Jorge Miller'];
book.apply(bimanBangladesh, flightData);
console.log(bimanBangladesh);

// INFO: But there is an easy and efficient way of doing this by using call method with spread operator
book.call(banglaWings, ...flightData);
console.log(banglaWings);
*/
