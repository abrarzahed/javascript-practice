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

/*
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
*/

/*
// INFO: Difference between objects and primitive
let age = 30;
let oldAge = age;
age = 31; //But the variable old age won't be changed.

// console.log(age);
// console.log(oldAge);

const one = {
  name: 'Abrar',
  age: 40,
};
const two = one;
two.age = 50; //Also age of one is assigned to 50 !

// console.log('one:', one);
// console.log('two:', two);

const person = {
  name: 'Mr. Jon',
  age: 33,
  friends: ['david', 'zara'],
};

// SOLUTION: function Object.assign in order to create a copy of an object. BUG: but a shallow copy, Means it won't copy an object or array inside of an object.
const copyPerson = Object.assign({}, person);

copyPerson.job = 'Teacher';
copyPerson.age = 100;
copyPerson.friends.push('Yash'); //also added Yash into person object friends array

console.log(person);
console.log(copyPerson);
*/

/*
//INFO: testing fake store api
const container = document.querySelector('.container');
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => {
    for (let i in json) {
      const item = document.createElement('div');
      const heading1 = document.createElement('h3');
      const img = document.createElement('img');
      img.src = json[i].image;
      heading1.textContent = ` ${i} ${json[i].title}`;
      item.appendChild(heading1);
      item.appendChild(img);
      container.appendChild(item);
    }
  });
*/

/*

const arrayOne = [1, 2, 3];
const arrayTwo = [...arrayOne];
arrayTwo[2] = 100;
console.log('Array one:', arrayOne);
console.log('Array two:', arrayTwo);
*/
