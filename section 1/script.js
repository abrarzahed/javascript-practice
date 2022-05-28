/*let js = "amazing";
console.log(10 + 40 + 63 - 39);
let FirstName = "Abrar";
console.log(FirstName);

let myFirstJob = "programer";
let myCurrentJob = "teacher";
console.log(myFirstJob);
*/

/*
lastName = "Zahed";
console.log(lastName);
*/

/*
// * Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);
*/

/*
// * Comparison Operators
ageJonas = 30;
ageSarah = 19;
console.log(ageJonas > ageSarah);
console.log(ageJonas < ageSarah);
*/

/*
let now = 2037;
let ageJonas = now - 1991;
let ageSarah = now - 2005;

console.log(now - 1991 > now - 2005);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// ! Coding Challenge 1 ⬇
/*
// let markMass = 78;
// let markHeight = 1.69;
// let markBMI = (markMass / markHeight) ** 2;

// let jonMass = 92;
// let jonHeight = 1.95;
// let jonBMI = (jonMass / jonHeight) ** 2;
let markMass = 95;
let markHeight = 1.88;
let markBMI = (markMass / markHeight) ** 2;

let jonMass = 85;
let jonHeight = 1.76;
let jonBMI = (jonMass / jonHeight) ** 2;

markHigherBMI = markBMI > jonBMI;
console.log(markBMI, jonBMI, markHigherBMI);
*/

/*
// * String
const firstName = "Abrar";
const lastName = "Zahed";
const birthYear = 1994;
let year = 2022;
const me =
  "I'm " +
  firstName +
  " " +
  lastName +
  ". " +
  "I'm  " +
  (year - birthYear) +
  " years old";

const meNew = `I'm ${lastName} ${firstName}. I am ${
  year - birthYear
} years old`;

console.log(me);
console.log(meNew);

console.log("String \n\
with \n\
multiple \n\
line \n\
in older way.");

console.log(`String
with
multiple
line`);
*/

/*
// * If else statement
const age = 14;
if (age >= 18) {
  //   alert("Person is good to go");
} else {
  const yearsLeft = 18 - age;
  //   alert(`${yearsLeft} years left to get into it !`);
}

const birthYear = 2094;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// ! Coding Challenge 2 ⬇
/*
let markMass = 78;
let markHeight = 1.69;

let jonMass = 92;
let jonHeight = 1.95;


let markMass = 95;
let markHeight = 1.88;

let jonMass = 85;
let jonHeight = 1.76
let markBMI = (markMass / markHeight) ** 2;
let jonBMI = (jonMass / jonHeight) ** 2;

let outputString;

if (markBMI > jonBMI) {
  outputString = `Mark's BMI ${markBMI} is higher than Jon's BMI ${jonBMI}`;
} else {
  outputString = `Jon's BMI ${jonBMI} is higher than Mark's BMI ${markBMI}`;
}

console.log(outputString);
*/

// * Type conversion
/*
const year = "1991";
console.log(year + 18);
console.log(Number(year) + 18);

console.log(Number("Abrar"));
console.dir(typeof NaN);
console.log(String(23));
*/

//* Type coercion
/*
console.log("I am " + 23 + " years Old"); // only plus (+) operator converts type into string by default
console.log(23 - "10" - "3"); // minus (-) operator converts type into number by default
console.log(3 * "10"); // multiplayer (*) operator converts type into number by default
console.log(30 / "3"); // division (/) operator converts type into number by default
console.log("23" > 20); //comparison (>, <, >=, <=) operators convert type into string by default
*/

// * Truthy and falsy values
// There are 6 falsy values in javascript they are: false, 0, '', undefined, null, NaN. Similarly everything else are truthy value such as any number and string etc.
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean("Abrar"));
console.log(Boolean({}));
console.log(Boolean([]));
*/

/*
const money = 0;
if (money) {
  console.log(`Dont spend money`);
} else {
  console.log(`You should have a job`);
}
*/

/*
let height;
if (height) {
  console.log(`Height is defined`);
} else {
  console.log(`Height is UNDEFINED`);
}
*/

// * Equality operators
/*
const num = "18";
if (num === 18) console.log(`You are an adult`); // Strict equality
if (num == 18) console.log(`You are an adult`); // lose equality
*/

/*
const userAge = prompt("How old are You ?");
console.log(userAge);
console.log(typeof userAge);

if (userAge >= 18) {
  console.log(`Ok you are an adult`);
} else if (userAge < 18) {
  console.log(`No ! You can't participate`);
}
*/

/*
function test() {
  const userAge = prompt("How old are You ?");
  console.log(userAge);
  console.log(typeof userAge);

  if (userAge >= 18) {
    console.log(`Ok you are an adult`);
  } else if (userAge < 18) {
    console.log(`No ! You can't participate`);
  }
}
*/

// ! Coding Challenge 3 ⬇
/*
// const dolphinsAverageScore = (96 + 108 + 89) / 3;
// const koalasAverageScore = (88 + 91 + 110) / 3;

// const dolphinsAverageScore = (97 + 112 + 101) / 3;
// const koalasAverageScore = (109 + 95 + 123) / 3;

const dolphinsAverageScore = (97 + 112 + 101) / 3;
const koalasAverageScore = (109 + 95 + 106) / 3;

const isDolphinsAverageScoreHigherThan100 = dolphinsAverageScore >= 100;
const isKoalasAverageScoreHigherThan100 = koalasAverageScore >= 100;

if (isDolphinsAverageScoreHigherThan100 && isKoalasAverageScoreHigherThan100) {
  if (dolphinsAverageScore > koalasAverageScore) {
    console.log(
      `Team Dolphins won the mach with average score ${dolphinsAverageScore}`
    );
  } else if (koalasAverageScore > dolphinsAverageScore) {
    console.log(
      `Team Koalas won the mach with average score ${koalasAverageScore}`
    );
  } else {
    console.log(
      `The mach is draw. Team Koalas average score:  ${koalasAverageScore}, Team Dolphins average score: ${dolphinsAverageScore}`
    );
  }
}
*/

/*
// * Switch  case
// Switch case statement is used to check  equality only. Where if else statement is used to check grater than or smaller than or equality too
const day = "friday";

switch (day) {
  case "saturday":
  case "sunday":
    console.log("Learning vue js");
    break;
  case "monday":
    console.log("Day for h");
    break;
  case "tuesday":
  case "wednesday":
    console.log("Learning Vue js");
    break;
  case "thursday":
    console.log("Learning CSS");
    break;
  case "friday":
    console.log("Learning Math");
    break;
  default:
    console.log("Not a valid day");
}
*/

/*
// * Ternary operators
const age = 18;
age >= 18 ? console.log("Yes") : console.log("no");
*/

// ! Coding Challenge 4 ⬇
/*
const bill = 430;
const tipPercentage = bill >= 50 && bill <= 300 ? 15 : 20;
const tip = (bill * tipPercentage) / 100;
const total = bill + tip;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);
*/
