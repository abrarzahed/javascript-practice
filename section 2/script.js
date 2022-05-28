"use strict";
/*
// * testing strict mode
let driversLicense = false;
const testPass = true;

if (testPass) driversLicense = true;
if (driversLicense) console.log("I can drive :D");
*/

// * function
/*
// Function declaration
const age1 = calcAge1(1994); // Called before the function is initialized
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

console.log(age1);

// Function expression : Anonymous function
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1994);
console.log(age2);

// Big different between function declaration and function expression is that, function declaration can be called before the function is initialized. Where function expression can not be called before the function is initialized

// Arrow function
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear) => {
  const age = 2022 - birthYear;
  return 65 - age;
};

const workingAgeLeft = yearsUntilRetirement(1994);
console.log(workingAgeLeft);
*/

// Function calling another function
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  //  calling another function
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
const readyJuice = fruitProcessor(4, 6);
console.log(readyJuice);
*/

/*
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return console.log(
      `Mr. ${firstName} has ${retirement} years left to retire.`
    );
  } else {
    return console.log(`Mr. ${firstName} has already retired.`);
  }
};
yearsUntilRetirement(1934, "Abrar");
yearsUntilRetirement(1994, "Zahed");
*/

// ! Coding challenge 1 ⬇
/*
const calcAverage = (score1, score2, score3) => {
  const average = (score1 + score2 + score3) / 3;
  return average;
};
const averageDolphins = calcAverage(85, 54, 41);
const averageKoalas = calcAverage(23, 34, 27);

const checkWinner = function (average1, average2) {
  if (average1 > average2 * 2) {
    console.log("dolphins won");
  } else if (average2 > average1 * 2) {
    console.log("koala won");
  }
};
checkWinner(averageDolphins, averageKoalas);
*/

// * Array data structure
// Add elements
/*
const friends = ["peter", "jon", "jack", "Jon Doe"];
const friendsLength = friends.push("Zahed");
// console.log(friends, friendsLength);

const unshiftArrayLength = friends.unshift("Abrar");
// console.log(friends, unshiftArrayLength);

// Remove elements
const popArray = friends.pop();
// console.log(friends, popArray);

const shiftArray = friends.shift();
console.log(friends, shiftArray);

console.log(friends.indexOf("Jon Doe"));
console.log(friends.indexOf("bob"));

console.log(friends.includes("test"));
console.log(friends.includes("jack"));
*/

// ! Coding challenge 2 ⬇
/*
const calcTip = function (bill) {
  const tip = bill > 50 && bill < 300 ? 0.15 : 0.2;
  return bill * tip;
};

const calcTotal = function (bill) {
  const tip = bill > 50 && bill < 300 ? 0.15 : 0.2;
  return bill * tip + bill;
};

const bills = [125, 555, 44];
console.log("Bills", bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log("Tips", tips);

const totals = [calcTotal(bills[0]), calcTotal(bills[1]), calcTotal(bills[2])];
console.log("totals", totals);
*/

//* objects
/*
const person = {
  firstName: "Abrar",
  lastName: "Zahed",
  age: 2022 - 1994,
  job: "Developer",
  friends: ["A", "B", "c"],
};

/*
Brackets Notation: Is used when it is need to compute the property to destructure the object. or need to pass expression.

console.log(person.firstName);

Dot Notation: Is used to get access to the object by using literal name of property.
*/

/*
const nameKey = "Name";
console.log(person["first" + nameKey]);
console.log(person["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about person? Choose between firstName, lastName, age, job and friends"
);

if (person[interestedIn]) {
  // console.log(person[interestedIn]);
} else {
  alert(
    "Wrong request! Choose between firstName, lastName, age, job and friends."
  );
}

person.location = "Bangladesh";
person["url"] = "abrar-zahed.netlify.app";
console.log(person);
// ! Coding challenge 3 ⬇
console.log(
  `${person.firstName} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}`
);
*/

// * Object method
/*
const person = {
  firstName: "Abrar",
  lastName: "Zahed",
  birthYear: 1994,
  job: "Developer",
  friends: ["A", "B", "c"],
  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  // ! Coding challenge 4 ⬇
  getSummery: function () {
    return `${this.firstName} is a ${this.age} years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
  },
};

console.log(person.calcAge());
console.log(person.age);

// ! Coding challenge 4 ⬇
console.log(person.getSummery());
*/

// ! Coding challenge 5 ⬇
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const jon = {
  fullName: "Jon Smith",
  mass: 78,
  height: 1.25,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();
jon.calcBMI();

if (mark.BMI > jon.BMI) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI}) is grater than ${jon.fullName}'s BMI (${jon.BMI})`
  );
} else if (jon.BMI > mark.BMI) {
  console.log(
    `${jon.fullName}'s BMI (${jon.BMI}) is grater than ${mark.fullName}'s BMI (${mark.BMI})`
  );
} else {
  console.log(`Both have same BMI`);
}
*/

//* Loop through array
/*
const person = [
  "Abrar",
  "Zahed",
  2022 - 1994,
  "Developer",
  ["A", "B", "c"],
  true,
];

const types = [];
for (let i = 0; i < person.length; i++) {
  types.push(typeof person[i]);
}
console.log(types);
*/

/*
const birthYears = [1991, 1999, 1994, 2000];
const ages = [];
for (let i = 0; i < birthYears.length; i++) {
  ages.push(2022 - birthYears[i]);
  console.log(birthYears[i], ages[i]);
}
console.log(ages);
*/

//* The concept of continue and break in loop
/*
const person = [
  "Abrar",
  "Zahed",
  2022 - 1994,
  "Developer",
  ["A", "B", "c"],
  true,
];

console.log("--- CONTINUE: ONLY STRING ---");
for (let i = 0; i < person.length; i++) {
  if (typeof person[i] !== "string") continue;
  console.log(person[i], typeof person[i]);
}

console.log("--- BREAK: ONLY STRING ---");
for (let i = 0; i < person.length; i++) {
  if (typeof person[i] !== "string") break;
  console.log(person[i], typeof person[i]);
}
*/

// * Loop backwords through array
/*
const person = [
  "Abrar",
  "Zahed",
  2022 - 1994,
  "Developer",
  ["A", "B", "c"],
  true,
];
for (let i = person.length - 1; i >= 0; i--) {
  console.log(i, person[i]);
}
*/

// * loop inside another loop(nested loop)
/*
for (let exercise = 1; exercise < 11; exercise++) {
  console.log(`----- Starting exercise ${exercise} -----`);

  for (let rep = 1; rep <= exercise; rep++) {
    console.log(`${rep}. Repetition ${rep} of exercise ${exercise} 🏋️‍♀️`);
  }
}
*/

// * While loop
/*
// The example of for loop in order to compare with.
// For loop is used when its defined that how many  iteration should happen
for (let exercise = 1; exercise < 11; exercise++) {
  // console.log(`FOR LOOP: Starting exercise ${exercise} ----- 🏋️‍♂️`);
}

console.log("------------------------------");
console.log("-------------------------");
console.log("--------------------");

// The while loop
// While loop is used when it is not defined that how many  iteration should happen
let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE LOOP: Starting exercise ${rep} ----- 🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
*/

// ! Coding challenge 6 ⬇
/*
const BILLS = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const TIPS = [];
const TOTAL = [];

const calcTip = function (bill) {
  return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
};
const calcTotal = function (bill) {
  return bill > 50 && bill < 300 ? bill * 0.15 + bill : bill * 0.2 + bill;
};

for (let i = 0; i < BILLS.length; i++) {
  TIPS.push(calcTip(BILLS[i]));
  TOTAL.push(calcTotal(BILLS[i]));
  console.log(BILLS[i], TIPS[i], TOTAL[i]);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(BILLS, TIPS, TOTAL);

const AVERAGE_OF_TOTAL = calcAverage(TOTAL);
console.log("Average of total", AVERAGE_OF_TOTAL);
*/
