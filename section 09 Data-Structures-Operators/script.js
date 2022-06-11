'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // object destructuring in function.
  orderDelivery({ starterIndex = 10, mainIndex = 20, time, address }) {
    console.log(
      `Order received \n Time: ${time}. \n Address: ${address}. \n Main index: ${mainIndex}. \n Starter index: ${starterIndex}.`
    );
  },
  // spread operators  arguments of functions
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// INFO: spread operators
const arr = [4, 5, 6];
const newArr = [1, 2, 3, ...arr];
console.log(arr, newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// INFO: two important use case of spread operators

// 1 shallow copy of an array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// 2 join two arrays or more together.
const joinedMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(joinedMenu);

// Spread operators does work with Iterables(string, array, map and set) but not with object(but in es2018 it is now possible to apply spread operators in objects)
const str = 'Abrar';
const strLetters = [...str];
console.log(strLetters);
// ARRAYs
// INFO: spread operators  arguments of functions
/*
const ingredients = [
  prompt(`Lets make a pasta! Ingredient 1`),
  prompt(`Ingredient 2`),
  prompt(`Ingredient 3`),
];
restaurant.orderPasta(...ingredients);
*/

// OBJECTS
// marg an object to another object
const newRestaurant = { foundedIn: 1999, ...restaurant, founder: 'Abrar' };
// console.log(newRestaurant, restaurant);

// Shallow copy of an object
const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);

/*
passing object as a argument
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
*/

// Array destructuring.
/*
Normal way
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
Destructuring way
[primary, secondary] = [secondary, primary];
console.log(primary, secondary);
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);
*/

/*
INFO: destructuring from nested array
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
With custom name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

Set Default value with custom name
const { menu = ['egg', 'meat'], starterMenu: starters = ['rice', 'milk'] } =
  restaurant;
console.log(menu, starters);
*/

/*
INFO: Mutating variables
let a = 111;
let b = 222;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

Nested object
const { openingHours } = restaurant;
const {
  fri: { open, close },
} = openingHours;
console.log(openingHours, open, close);
*/
