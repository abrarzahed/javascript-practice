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
/*
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
*/

/* 
  COMMENT: Prototype Inheritance
*/
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//=== linking prototype  ===//
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName}. I study ${this.course}`);
};

const mike = new Student('Mike', 2000, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

const obj = {
  name: 'Abrar',
};

console.log(obj instanceof Object);
*/

/****************************************** 
COMMENT: Coding Challenge #3   
******************************************/
/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definition of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
//=== Create main class  ===//
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

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

//=== Create child class  ===//
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
*/

/* 
  COMMENT: Inheritance between "classes": ES6 classes.
*/
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //=== Instance Methods  ===//
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  //=== getters  ===//
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  get fullName() {
    return this._fullName;
  }

  //=== setters  ===//
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not full name`);
  }

  //=== static  ===//
  static hey() {
    console.log('Hey there');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //=== super() always needs to be call first  ===//
    super(fullName, birthYear);
    this.course = course;
  }

  //=== Instance Methods  ===//
  introduce() {
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }

  //=== own instance method that will get priority over parents instance method. Because it will come first in the prototype chain.  ===//
  calcAge(year) {
    console.log(`I am ${year} years young`);
  }
}

const jessica = new StudentCl('Jessica Khan', 2000, 'CSC');
jessica.introduce();
jessica.calcAge(20);
*/

/* 
  COMMENT: Inheritance between classes: Object.create
*/
/*
const PersonProto = {
  calcAge() {
    return console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const abrar = Object.create(PersonProto);
abrar.init('Abrar', 1994);

//=== inheritance  ===//
const StudentProto = Object.create(PersonProto);
const jay = Object.create(StudentProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

jay.init('Jay', 2001, 'CSC');
console.log(jay);
*/

/* 
  COMMENT: Another example of class
*/
/*
class Account {
  //=== 1) Public fields (instances)  ===//
  locale = navigator.language;

  //=== 2) Private Fields   ===//
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  //=== 3) Public Methods   ===//
  //=== interface: API  ===//
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`${val} loan was approved`);
    }
    return this;
  }

  //=== 4) Private Methods   ===//
  #approveLoan(val) {
    console.log('Log from approveLoan function');
    return true;
  }
}

const acc1 = new Account('Abrar', 'EUR', 1111);

acc1.deposit(200);
acc1.withdraw(100);

acc1.requestLoan(1000);

// console.log(acc1.#pin);
console.log(acc1.getMovements());

// console.log(acc1.#movements);

//=== Chaining   ===//
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1);
*/

/****************************************** 
COMMENT: Coding Challenge #4   
******************************************/
/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
class Car1 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends Car1 {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
*/
