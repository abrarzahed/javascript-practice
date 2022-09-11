/* 
  COMMENT: Importing module
*/

//=== Named import  ===//

/*
import { addToCart, cart, totalPrice, totalQuantity } from './shoppingCard.js';
console.log('importing Module');
addToCart('bread', 10);
console.log(totalPrice, totalQuantity);
*/

/*
import * as ShoppingCart from './shoppingCard.js';
console.log(ShoppingCart.totalPrice);
ShoppingCart.addToCart('bread', 5);
*/

//=== Default import  ===//

/*
import add from './shoppingCard.js';
add('pizza', 2);
*/

/* 
  COMMENT: Module pattern: how module system works behind the seen
*/

/*
const ShoppingCard2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart. Shipping cost is ${shippingCost}`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier.`);
  };

  return { cart, totalPrice, totalQuantity, addToCart };
})();

ShoppingCard2.addToCart('Alu', 20);

console.log(ShoppingCard2.shippingCost);
console.log(ShoppingCard2);
*/
import add, { cart } from './shoppingCard.js';

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  stateCart: [
    { product: 'bread', quantity: 10 },
    { product: 'pizza', quantity: 6 },
  ],
  user: { loggedIn: true },
};

/*
const cloneState = JSON.parse(JSON.stringify(state));
// const cloneState = Object.assign({}, state);
console.log(cloneState);
*/

//=== with lodash  ===//
const deepCloneState = cloneDeep(state);
state.user.loggedIn = false;
console.log(state);
console.log(deepCloneState);

add('pizza', 2);
add('sandwich', 20);
add('sandwich', 20);
add('sandwich', 20);
console.log(cart);

/* 
  COMMENT: parcel Hot module replacement
*/
if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting} ${this.name}`);
  }
}

const abrar = new Person('Abrar');

import 'core-js/stable';
