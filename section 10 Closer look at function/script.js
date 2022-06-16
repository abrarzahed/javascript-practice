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
