'use strict';

/****************************************** 
COMMENT: BANKIST APP   
******************************************/

// @@@@@@@@@@ Data  @@@@@@@@@@ //
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// @@@@@@@@@@ Elements  @@@@@@@@@@ //
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/****************************************** 
COMMENT: LECTURES   
******************************************/

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/****************************************** 
COMMENT: Some array methods   
******************************************/
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
// @@@@@@@@@@ slice(): Do not mutate the original array  @@@@@@@@@@ //
console.log(`================= Slice()`);
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log(arr.slice(1, -2));

let copyArr = [...arr];
let copyArr2 = arr.slice();
console.log(copyArr, copyArr2);

// @@@@@@@@@@ splice(): Does mutate the original array  @@@@@@@@@@ //
console.log(`================= SPlice()`);
console.log(arr.splice(2));
console.log(arr);

// @@@@@@@@@@ reverse(): Does mutate the original array  @@@@@@@@@@ //
console.log(`================= reverse()`);
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// @@@@@@@@@@ concat(): Does not mutate original arrays  @@@@@@@@@@ //
console.log(`================= concat()`);
const letters = arr.concat(arr2); // same as [...arr, ...arr2]
console.log(letters);
console.log(arr);
console.log(arr2);

// @@@@@@@@@@ join(): Does not mutate original array  @@@@@@@@@@ //
console.log(`================= join()`);
console.log(letters.join(' - '));
console.log(letters);
*/

/****************************************** 
COMMENT: Loop through array   
******************************************/
/*
const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
// @@@@@@@@@@ with for of loop: continue and break does work @@@@@@@@@@ //
console.log(`================= for of loop`);
for (const [i, movement] of movements2.entries()) {
  if (movement > 0) {
    console.log(`${i + 1}: You have deposited ${movement}`);
  } else {
    console.log(`${i + 1}: You have withdrew ${Math.abs(movement)}`);
  }
}

// @@@@@@@@@@ with forEach() method: continue and break does not work @@@@@@@@@@  //
console.log(`================= forEach() method`);
movements2.forEach((movement, i, array) => {
  if (movement > 0) {
    console.log(`${i + 1}: You have deposited ${movement}`);
    console.log(array);
  } else {
    console.log(`${i + 1}: You have withdrew ${Math.abs(movement)}`);
    console.log(array);
  }
});
*/

/****************************************** 
COMMENT: forEach() in map 
******************************************/
/*
console.log(`================= forEach() method in map`);
const currencies2 = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies2.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});
*/

/****************************************** 
COMMENT: forEach() in set 
******************************************/
/*
console.log(`================= forEach() method in set`);
const uniqueCurrencies = new Set(['USD', 'BDT', 'EUR', 'BDT', 'USD']);
console.log(uniqueCurrencies);

uniqueCurrencies.forEach((value, _, set) => {
  // '_' because the set does not have indexes or keys
  console.log(`${value}: ${value}`);
  // console.log(set);
});
*/
