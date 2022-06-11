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

  // ! coding CHALLENGE:
  orderPizza(firstIng, ...otherIng) {
    let str = `Here is your delicious pizza with ${firstIng}, `;

    if (otherIng.length > 1) {
      for (let i of otherIng) {
        if (otherIng.indexOf(i) === otherIng.length - 1) {
          str += i + '.';
          console.log(i);
        } else if (otherIng.indexOf(i) === otherIng.length - 2) {
          str += i + ' and ';
        } else {
          str += i + ', ';
        }
      }
    } else {
      str = `Here is your delicious pizza with ${firstIng}`;
      if (otherIng) {
        for (let i of otherIng) {
          str += ' and ' + i;
        }
      }
    }

    console.log(str);
  },
};

console.log('========== || ============');

// short circuiting: logical and(&&) and logical or(||) can use any data types, the can return any data types and they csn be used for short circuiting.
/*
console.log([] || 'Abrar');
console.log('' || 'Abrar');
console.log(undefined || 'Abrar');
console.log(null || 'Abrar');
console.log(0 || 'Abrar');
console.log({} || 'Abrar');
console.log(undefined || null);
console.log(true || 'Abrar');
console.log(false || 'Abrar');
*/

// Real example
restaurant.numGuests = 20;
const guests = restaurant.numGuests || 100;

console.log(guests);

console.log('========== && ============');

console.log([] && 'Abrar');
console.log(true && 'Abrar');
console.log(undefined && 'Abrar');
console.log(null && 'Abrar');
console.log(0 && 'Abrar');
console.log({} && 'Abrar');
console.log(undefined && null);
console.log(true && 'Abrar');
console.log(false && 'Abrar');

// Real example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// real example using short circuiting
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/*
// The rest parameters. Rest because on left of =
const [a, b, ...all] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(all);

// use case of rest and spread together.

//INFO: the rest pattern always should be the last element of assignment.

// ARRAY
const [pizza, , risotto, ...others] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, others);

// OBJECT
const { sat: weekend, ...weekDays } = restaurant.openingHours;
// console.log(weekend);
// console.log(weekDays);

// Functions
const add = function (...nums) {
  let sum = 0;
  for (let i of nums) {
    sum += i;
  }
  console.log(sum);
};
const x = [21, 34, 4, 6];
// add(1, 2);
// add(1, 2, 3);
// add(1, 2, 3, 4);
// add(1, 2, 3, 4, 5);
// add(...x);
restaurant.orderPizza('Mushroom', 'Spinach', 'Onion', 'Garlic');
*/

/*////////////////////////////////////////////////////////////
INFO: spread operators Spread because on right side of =
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


// OBJECTS
// marg an object to another object
const newRestaurant = { foundedIn: 1999, ...restaurant, founder: 'Abrar' };
// console.log(newRestaurant, restaurant);

// Shallow copy of an object
const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);
*/

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
