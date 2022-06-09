'use strict';

/*
// @@@@@@ Hoisting @@@@@
// Variables
console.log(me);
// console.log(job);
// console.log(birthYear);

var me = 'Abrar';
let job = 'Teacher';
const birthYear = 1995;
*/

/*
// Functions
console.log(addDecl(2, 3));
// console.log(addExp(2, 3)); //won't work
// console.log(addArrow(2, 3)); //won't work

function addDecl(a, b) {
  return a + b;
}
var addExp = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
*/

/*
// BUG:: A common example of an bug because using "var"

if (!products) deleteProductArray();
var products = 10;
function deleteProductArray() {
  console.log('Product are deleted ⛔');
}

// POINT: See here products == 10 but still the deleteProductArray function is executed. Because var can be accessed before the are declared. And the initial value was undefined. undefined is a falsy value thats why the deleteProductArray was called and product array was deleted.
*/

/*
const abrar = {
  name: 'Abrar',
  birthYear: 1994,
  calcAge() {
    console.log(this);
    console.log(2022 - this.birthYear);
  },
};

abrar.calcAge();

const zahed = {
  name: 'Zahed',
  birthYear: 1990,
  calcAge: abrar.calcAge,
};

zahed.calcAge();
*/

/*
//INFO: Difference between regular function and arrow function.
var firstName = 'Mojir';
const abrar = {
  firstName: 'Abrar',
  birthYear: 1994,
  calcAge() {
    console.log(this);
    // console.log(2022 - this.birthYear);

    // SOLUTION: 1
    // const self = this;
    // const isMillennial = function () {
    //   console.log(self);
    //   console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
    // };

    SOLUTION: 2;
    const isMillennial = () => {
      console.log(this);
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    };

    isMillennial();
  },
  great: () => {
    // console.log(this);
    // console.log(`Hey ${this.firstName}`);
  },
};
abrar.calcAge();
abrar.great();
*/

// INFO: The arguments object in regular function.
const sumNum = function (a, b) {
  const test = [];
  console.log(arguments);
  for (let i of arguments) {
    test.push(i);
  }

  return test;
};
console.log(sumNum(2, 3, 4, 5, 6));

// INFO: The arguments object in arrow function.
const sumNumArrow = (a, b) => {
  const test = [];
  console.log(arguments); // BUG: the argument object does not exist in arrow function.
  for (let i of arguments) {
    test.push(i);
  }

  return test;
};
console.log(sumNumArrow(2, 3, 4, 5, 6));
