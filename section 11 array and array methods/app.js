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
COMMENT: display movement rows   
******************************************/
const displayMovement = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((movement, i) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const movementHtml = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${movement}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', movementHtml);
  });
};
displayMovement(account1.movements);

/****************************************** 
COMMENT: calculate and print total balances   
******************************************/
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

/****************************************** 
COMMENT: Create username   
******************************************/
const createUserName = function (accounts) {
  accounts.forEach(account => {
    account.userName = account.owner
      .toLowerCase()
      .split(' ')
      .map(w => w[0])
      .join('');
  });
};
createUserName(accounts);

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

/****************************************** 
COMMENT: Coding Challenge #1   
******************************************/
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const juliaArrayCorrectedCopy = [...dogsJulia];
  juliaArrayCorrectedCopy.splice(0, 1);
  juliaArrayCorrectedCopy.splice(-2);

  const bothDogs = [...juliaArrayCorrectedCopy, ...dogsKate];
  bothDogs.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/
/****************************************** 
COMMENT: The map() method: Does not mutate the original array But creates a new array  
******************************************/
/*
const euroToUsd = 1.1;
const movementsUsd = movements.map(item => item * euroToUsd);

console.log(movements, movementsUsd);

const moveDesc = movements.map(
  (mov, i) =>
    `${i + 1}: You have ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);

console.log(moveDesc);
*/

/****************************************** 
COMMENT:  The filter() method: Does not mutate the original array But creates a new array
******************************************/
/*
const deposit = movements.filter(mov => mov > 0);
console.log(deposit);
console.log(movements);
*/

/****************************************** 
COMMENT:  The reduce() method: Does not mutate the original array But creates a value
******************************************/

// console.log(movements);
// const balance = movements.reduce((acc, item, i, arr) => {
//   console.log(
//     `Iteration: ${i}, Accumulator: ${acc}, Current Item: ${item}, Array: ${arr}`
//   );
//   return acc + item;
// }, 0);

/*
console.log(movements);
const balance = movements.reduce((acc, item, i, arr) => acc + item, 0);

console.log(balance);

// @@@@@@@@@@ find the maximum and minimum value with reduce method  @@@@@@@@@@ //
const max = movements.reduce(
  (acc, cur) => (cur > acc ? cur : acc),
  movements[0]
);
const min = movements.reduce(
  (acc, cur) => (cur < acc ? cur : acc),
  movements[0]
);
console.log(max);
console.log(min);
*/
