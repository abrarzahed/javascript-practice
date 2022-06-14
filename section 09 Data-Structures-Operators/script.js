'use strict';
const weekdays = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
const openingHours = {
  // computed object keys as well 😲 by square braces
  [weekdays[5]]: {
    open: 12,
    close: 22,
  },
  [weekdays[6]]: {
    open: 11,
    close: 23,
  },
  [weekdays[0]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced objects literals
  openingHours,

  // ES6 way of writing a function(method) body inside an object.
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
    let output = `Here is your delicious pizza with ${firstIng}, `;

    if (otherIng.length > 1) {
      for (let i of otherIng) {
        if (otherIng.indexOf(i) === otherIng.length - 1) {
          output += i + '.';
          console.log(i);
        } else if (otherIng.indexOf(i) === otherIng.length - 2) {
          output += i + ' and ';
        } else {
          output += i + ', ';
        }
      }
    } else {
      output = `Here is your delicious pizza with ${firstIng}`;
      if (otherIng) {
        for (let i of otherIng) {
          output += ' and ' + i;
        }
      }
    }

    return console.log(output);
  },
};

//! Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

/*
// SOLUTION:
//1
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
const times = [...gameEvents.keys()];
const lastEventTime = times[times.length - 1];
console.log(
  `An event happened, on average, every ${
    lastEventTime / gameEvents.size
  } minutes`
);

// 4
for (const [key, value] of gameEvents) {
  let half = key < 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${half}] ${key}: ${value}`);
}
*/

// SECTION: MAP

/*
const rest = new Map();
// set element to map
rest.set('name', 'Classic Italian Restaurant');
rest.set(1, 'Firenze Italy');
rest.set(2, 'Lisbon', 'Portugal');

// map.set returns entire map with newly added item so it is possible combine multiple set method together.
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// map.get to get item
console.log(rest.get('name'));

// Example
const currentTime = 8;
console.log(
  rest.get(currentTime > rest.get('open') && currentTime < rest.get('close'))
);

// to check if a key exist in map or not
console.log(rest.has('categories'));

// delete an item from map
rest.delete(2);

// array as key in map
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

// object as key in map
rest.set(document.querySelector('h1'), 'Heading');

// clear entire map
// rest.clear();

// length of map
console.log(rest.size);

console.log(rest);
*/

/*
// Efficient way to populate map
const questions = new Map([
  ['question', 'What is the best programing language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again'],
]);

console.log(questions);

// convert an object ino map
const mapHours = new Map(Object.entries(openingHours));
console.log(mapHours);

// loop through map
// Example Quiz app
console.log(questions.get('question'));
for (const [key, value] of questions) {
  typeof key === 'number' && console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(questions.get(answer === questions.get('correct')));

// convert map into array
console.log([...questions]);
console.log([...questions.keys()]);
console.log([...questions.values()]);
*/

/*
SECTION: SET
const orderSet = new Set(['Pizza', 'Pasta', 'Risotto', 'Pizza', 'Pasta']);
console.log(orderSet);

//to get how many item in the set
console.log(orderSet.size);

// to check if an item exist or not. it returns true or false.
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('mushrooms'));

// add item to set
orderSet.add('Garlic Bread');

// delete item from set
orderSet.delete('Risotto');

// loop through set
for (let order of orderSet) console.log(order);

// remove all item from set at once
// orderSet.clear();

// set example
const staff = ['Chef', 'Waiter', 'Manager', 'Chef', 'Manager', 'Waiter'];
// converting set to array in order to get access to every element of it
const staffUnique = [...new Set(staff)];
console.log(staff, staffUnique);

// set with string
console.log('==== set with string ====');
console.log(new Set('Abrar'));

console.log('==== entire set ====');
console.log(orderSet);
*/

// =================================================
//PROBLEM: Coding Challenge #2
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/

/*
// SOLUTION:
// 1
console.log('========== condition 1 ===========');
for (let [i, item] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${item}`);
}

// 2
console.log('========== condition 2 ===========');
const oddsValues = Object.values(game.odds);
let average = 0;
for (let i of oddsValues) {
  average += i / oddsValues.length;
}
console.log(average);

// 3
console.log('========== condition 3 ===========');
for (let [key, value] of Object.entries(game.odds)) {
  let teamName = key === 'x' ? 'draw' : game[key];
  let str = `Odds of ${teamName}: ${value}`;
  console.log(str);
}

// 4
console.log('========== condition 4 ===========');
const scorers = {};
for (let player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/

/*
// SOLUTION: Coding Challenge #2
// condition 1
for (let [index, value] of game.scored.entries())
  console.log(`Goal ${index + 1}: ${value}`);

// condition 2
const oddsValues = Object.values(game.odds);
let average = 0;
for (let i of oddsValues) {
  average += i / oddsValues.length;
}
console.log(average.toFixed(2));

// condition 3
for (let [key, value] of Object.entries(game.odds)) {
  let teamName = key === 'x' ? 'draw' : game[key];
  console.log(`Odd of ${teamName}: ${value}`);
}

// condition 4
const scorers = {};
for (let player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/

/*
// SECTION: Looping through object
// properties
const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open on ${properties.length} days : `);
for (let day of properties) {
  console.log(day);
}

// Values
const values = Object.values(openingHours);
console.log(values);

for (let i of values) {
  console.log(i);
}

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);
for (let [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

// Optional chaining(?)
/*
console.log(restaurant?.openingHours.mon?.open);
console.log(restaurant?.openingHours.fri?.open);
Example
const days = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
for (let day of days) {
  let open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we open at ${open}`);
}
*/

/*
Optional chaining(?) in methods
console.log(restaurant.order?.(1, 0) ?? `Method doesn't exist`);
console.log(restaurant.orderJuice?.(1, 0) ?? `Method does not exist`);
*/

/*
Optional chaining(?) Array
const users = [{ name: 'Abrar', email: 'abrar@dot.com' }];
console.log(users[0]?.name ?? 'User does not exist');
*/

/*
for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (let item of menu) {
  console.log(item);
}

with array.entries to have the index number of the item
for (let [index, item] of menu.entries()) {
  console.log(`${index + 1}: ${item}`);
}
*/

// Coding Challenge #1
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remain ing 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Podolwski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1,
    x: 3.25,
    team2: 11.33,
  },
};
*/

/*
condition 1
const [player1, player2] = game.players;
console.log(player1, player2);

condition 2
const [team1Gk, ...team1FieldPlayers] = player1;
console.log(team1Gk, team1FieldPlayers);

const [team2Gk, ...team2FieldPlayers] = player2;
console.log(team2Gk, team2FieldPlayers);

condition 3
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

condition 4
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

condition 5
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

condition 6
const printGoals = function (...numbers) {
  let output = `${numbers.length} goals were scored by respectively `;
  for (let i of numbers) {
    if (numbers.indexOf(i) === numbers.length - 1) {
      output += i + '.';
    } else if (numbers.indexOf(i) === numbers.length - 2) {
      output += i + ' and ';
    } else {
      output += i + ', ';
    }
  }
  return console.log(output);
};

printGoals(...game.scored);

condition 7
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
team2 === team1 && console.log('The match is draw');

*/

/*=============================
// 1
const [player1, player2] = game.players;
console.log(player1, player2);

//2
const [gk1, ...fieldPlayers1] = player1;
console.log(gk1, fieldPlayers1);

const [gk2, ...fieldPlayers2] = player2;
console.log(gk2, fieldPlayers2);

//3
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

// 4
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...players) {
  let output = `${players.length} goals were scored by respectively `;
  for (let player of players) {
    if (players.indexOf(player) === players.length - 1) {
      console.log(players.indexOf(player), player);
      output += player + '.';
    } else if (players.indexOf(player) === players.length - 2) {
      console.log(players.indexOf(player), player);
      output += player + ' and ';
    } else {
      console.log(players.indexOf(player), player);
      output += player + ', ';
    }
  }
  return console.log(output);
};
printGoals(...game.scored);

// 7
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
team2 === team1 && console.log('The match is draw');

*/

// ================================================================ //

/*
restaurant.numGuests = 0;
Nullish (null and undefined) operator
const guestCorrect = restaurant.numGuests ?? 0;
console.log(guestCorrect);
*/

// console.log('========== || ============');

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
/*
restaurant.numGuests = 20;
const guests = restaurant.numGuests || 100;

console.log(guests);
*/

/*

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
*/

// Real example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// real example using short circuiting
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

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
