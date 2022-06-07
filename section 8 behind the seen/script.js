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
