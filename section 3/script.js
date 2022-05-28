'use strict';

/*
// FIX_ME: PROBLEM INFO: We work for a company building a smart home thermometer. Our most recent task is this - "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// * Understand the problem
// -What is temperature altitude?
// Answer: difference between the highest and lowest temp.
// -How to compute the max and min temp?
// -What is a sensor error? And what to do with error?

// * Breaking up into sub-problems
// Ignore errors.
// Find max value in temp array.
// Find min value in temp array.
// Subtract min from max (altitude) and return it.

// SOLUTION:
const calcTempAltitude = function (tempArray) {
  let max = tempArray[0];
  let min = tempArray[0];
  for (let i = 0; i < tempArray.length; i++) {
    if (typeof tempArray[i] !== 'number') continue;

    if (min > tempArray[i]) min = tempArray[i];

    if (max < tempArray[i]) max = tempArray[i];
  }
  console.log('max', max);
  console.log('min', min);
  return max - min;
};
const amplitude = calcTempAltitude(temperatures);
console.log('amplitude', amplitude);
*/

/*

// FIX_ME: PROBLEM INFO: The function now should receive two array of temp."

const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [10, -12, -16, -11, 'error', 19, 4, 20];

// * Understand the problem
// -With 2 arrays, should we implement the same functionality twice?
// Answer: NO, Just marge two arrays at the beginning

// * Breaking up into sub-problems
// Marge two arrays into one

// SOLUTION:
const calcTempAltitude2 = function (tempArray1, tempArray2) {
  const newArray = tempArray1.concat(tempArray2);
  let max = newArray[0];
  let min = newArray[0];
  for (let i = 0; i < newArray.length; i++) {
    if (typeof newArray[i] !== 'number') continue;

    if (min > newArray[i]) min = newArray[i];

    if (max < newArray[i]) max = newArray[i];
  }
  console.log('max', max);
  console.log('min', min);
  return max - min;
};
const amplitude2 = calcTempAltitude2(temperatures1, temperatures2);
console.log('amplitude2', amplitude2);
*/

/*
// FIX_ME: PROBLEM INFO: Given an array of forecasted temperatures, the thermometer displays a string base on these temperatures. Example: [17, 21, 23] will print "...17°C in 1 days. ...21°C in 2 days. ...23°C in 3days"

// SOLUTION:
const forecastArray = [17, 21, 23];
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} ${i + 1 < 2 ? 'day' : 'days'}, `;
  }
  console.log(str);
};

printForecast(forecastArray);
*/
