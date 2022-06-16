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
