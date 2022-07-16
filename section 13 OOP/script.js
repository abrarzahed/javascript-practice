'use strict';

// 1. new {} is created
// 2. function is called, "this" = {}
// 3. {} is linked to prototype
// 4. function automatically return {}

const Person = function (firstName, birthYear) {
  //=== Instance property  ===//
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const abrar = new Person('Abrar', 1994);
console.log(abrar);

const zahed = new Person('Zahed', 1994);
console.log(zahed);

console.log(abrar instanceof Person);

/* 
  COMMENT: Prototypes:
*/
console.log(Person.prototype);

//=== adding method to prototype   ===//
Person.prototype.calcAge = function () {
  return console.log(2022 - this.birthYear);
};

const jamal = new Person('Jamal', 1980);
console.log(jamal);

jamal.calcAge();

//=== adding property to prototype  ===//
Person.prototype.species = 'Homo Sapiens';

console.log(abrar.species, zahed.species);

console.log(abrar.hasOwnProperty('firstName'));
console.log(abrar.hasOwnProperty('species'));

console.log(Person.prototype);
console.log(abrar.__proto__);

console.log(abrar.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(abrar));
console.log(Person.prototype.isPrototypeOf(zahed));
console.log(Person.prototype.isPrototypeOf(Person));
