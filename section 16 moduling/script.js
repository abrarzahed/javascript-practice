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
import add from './shoppingCard.js';
add('pizza', 2);
