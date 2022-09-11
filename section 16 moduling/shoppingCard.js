/* 
   COMMENT: Exporting Module
*/
//=== Named export  ===//
/*
console.log('Exporting Module');
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };
*/

//=== Default export  ===//
const shippingCost = 10;
export const cart = [];

const totalPrice = 237;
const totalQuantity = 23;

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
