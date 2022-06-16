'use strict';
// SECTION: default parameters in function
const allBookings = [];
const createBooking = function (
  // default parameters in ES6 way
  flightNum,
  numPassenger = 1,
  price = 100 * numPassenger
) {
  /*
  ES5 way short circuiting to assign default value
  numPassenger = numPassenger || 1;
  price = price || 100;
  */

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
