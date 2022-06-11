'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Array destructuring.

/*
// Normal way
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);

let [primary, , secondary] = restaurant.categories;
console.log(primary, secondary);
*/

//INFO: Switch values of two variables
/*
 regular way
 const temp = primary;
 primary = secondary;
 secondary = temp;
 console.log(primary, secondary);
*/

/*
// Destructuring way
[primary, secondary] = [secondary, primary];
console.log(primary, secondary);
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);
*/

/*
// INFO: destructuring from nested array
const nested = [1, 2, [4, 5]];
const [a, , [j, k]] = nested;
console.log(a, j, k);
*/

// INFO: Object destructuring
// With same name
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
*/

/*
//With custom name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

// Set Default value with custom name
const { menu = ['egg', 'meat'], starterMenu: starters = ['rice', 'milk'] } =
  restaurant;
// console.log(menu, starters);
*/

// Mutating variables
let a = 111;
let b = 222;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested object
const { openingHours } = restaurant;
const {
  fri: { open, close },
} = openingHours;
console.log(openingHours, open, close);
