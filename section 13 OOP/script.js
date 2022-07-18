'use strict';

// 1. new {} is created
// 2. function is called, "this" = {}
// 3. {} is linked to prototype
// 4. function automatically return {}

/*
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
*/

/* 
  COMMENT: Prototypes:
*/
/*
console.log(Person.prototype);

//=== adding method to prototype   ===//
Person.prototype.calcAge = function () {
  return console.log(2022 - this.birthYear);
};

const jamal = new Person('Jamal', 1980);
console.log(jamal);

jamal.calcAge();
*/
//=== adding property to prototype  ===//
/*
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

console.log(abrar.__proto__);
*/

//=== Object.prototype (top of prototype chain)  ===//
/*
console.log(abrar.__proto__.__proto__);
console.log(abrar.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);
*/
/* 
  COMMENT: prototype in arrays
*/
/*
const arr = [3, 4, 4, 6, 6, 6];
console.log(arr.__proto__);
console.log(Array.prototype);
console.log(arr.__proto__.__proto__);

//=== add a method to array's prototype  ===//

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir(x => x + 1);
*/

/****************************************** 
COMMENT: Coding Challenge #1   
******************************************/
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

//=== create two car object with constructor function Car  ===//
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

//=== implement the accelerate function  ===//
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

//=== implement the brake function  ===//
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};
bmw.accelerate();
mercedes.accelerate();

bmw.brake();
mercedes.brake();

console.log(bmw, mercedes);
*/

/* 
  COMMENT: OOP with es6 classes: classes are just special kind of function
*/
/*
//=== class expression  ===//
// const PersonCL = class {};

//=== class deceleration  ===//
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Static method: wont be added to prototype
  static call() {
    console.log('Hey... come here');
  }

  // Instance Methods: will be added to .prototype property
  calcAge() {
    return console.log(2022 - this.birthYear);
  }
}

const jessica = new PersonCL('Jessica', 1994);

PersonCL.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

console.log(jessica);
jessica.calcAge();
jessica.greet();

PersonCL.hey = function () {
  console.log(this);
  console.log('Hey There ✋');
};
PersonCL.hey();
PersonCL.call();
*/

/* 
  COMMENT: Getters and Setters
*/
/*
const account = {
  owner: 'Abrar',
  movements: [230, 100, 30, 530],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set setLatest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.setLatest = 50;

console.log(account);
*/

/* 
  COMMENT: Object.create
*/
/*
const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1889;

steven.calcAge();

console.log(steven.__proto__);

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1998);
sarah.calcAge();
*/

/****************************************** 
COMMENT: Coding Challenge #2   
******************************************/

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  //=== instance methods  ===//
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  // getters and setters
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(value) {
    this.speed = value * 1.6;
  }
}

//=== create two car object with constructor function Car  ===//

const ford = new Car('Ford', 120);
console.log(ford.speedUS, ford.speed);

ford.accelerate();
ford.accelerate();

ford.brake();
ford.brake();

ford.speedUS = 100;

console.log(ford);
