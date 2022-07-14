'use strict';

// 1. new {} is created
// 2. function is called, "this" = {}
// 3. {} is linked to prototype
// 4. function automatically return {}

const Person = function (firstName, birthYear) {
  //=== Instance property  ===//
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2022 - this.birthYear);
  };
};

const abrar = new Person('Abrar', 1994);
console.log(abrar);

const zahed = new Person('Zahed', 1994);
console.log(zahed);

const nam = {
  firstName: 'Abrar Hussen',
  birthYear: 1980,
};

console.log(nam);

console.log(abrar instanceof Person);
console.log(nam instanceof Person);

console.log(abrar.calcAge());
