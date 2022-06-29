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
const btnSort1 = document.querySelector('.btn--sort1');
const btnSort2 = document.querySelector('.btn--sort2');

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
const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  // sorting
  const moves = sort ? movements.slice().sort((a, b) => a - b) : movements;

  moves.forEach((movement, i) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const movementHtml = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${movement}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', movementHtml);
  });
};

/****************************************** 
COMMENT: calculate and print total balances   
******************************************/
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${account.balance} EUR`;
};

/****************************************** 
COMMENT: display summery   
******************************************/
const calcDisplaySummery = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${Math.abs(incomes)}€`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

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
COMMENT: Update ui   
******************************************/
const updateUI = function (account) {
  // display movements
  displayMovement(account.movements);

  // display balance
  calcDisplayBalance(account);

  // display summery
  calcDisplaySummery(account);
};

/****************************************** 
COMMENT: Event handlers   
******************************************/
/* 
  COMMENT: Log in
*/
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display ui with welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // updating ui
    updateUI(currentAccount);
  }
});

/* 
  COMMENT: Transfer money
*/
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const ReceiverAccount = accounts.find(
    ac => ac.userName === inputTransferTo.value
  );

  if (
    amount > 0 &&
    ReceiverAccount &&
    currentAccount.balance >= amount &&
    ReceiverAccount?.userName !== currentAccount.userName
  ) {
    //doing the transfer
    currentAccount.movements.push(-amount);
    ReceiverAccount.movements.push(amount);

    // updating ui
    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferTo.blur();
});

/* 
  COMMENT: request loan
*/
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);

    // update ui
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

/* 
  COMMENT: Close account
*/
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const accountToClose = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );

    // remove account from accounts array
    accounts.splice(accountToClose, 1);

    // hide ui
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
});

/* 
  COMMENT: sorting movements
*/
let isSorted = false;
btnSort1.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovement(currentAccount.movements, !isSorted);
  isSorted = !isSorted;
});

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

/****************************************** 
COMMENT: Coding Challenge #2   
******************************************/
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/* 
  COMMENT: Solution:
*/
/*
const calcAverageHumanAge = function (ages) {
  let dogHumanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));

  const adultDogs = dogHumanAges.filter(age => age > 18);

  const average = adultDogs.reduce(
    (acc, cur, _, arr) => acc + cur / arr.length,
    0
  );

  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

/****************************************** 
COMMENT: The find() method: unlike the filter, find returns the first element which satisfy certain condition
******************************************/
/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// @@@@@@@@@@ with for of loop  @@@@@@@@@@ //
let acc2;
for (const ac of accounts) {
  ac.owner === 'Steven Thomas Williams' && (acc2 = ac);
}

console.log(acc2);
*/

/****************************************** 
COMMENT: The some() method: some method works kind of same as includes() method. The difference is includes checks the equality. And some method can check an element exist in array with any condition.
******************************************/
/*
// @@@@@@@@@@ EQUALITY: with includes() method  @@@@@@@@@@ //
console.log(movements);
console.log(movements.includes(-130));

// @@@@@@@@@@ CONDITION: some() method  @@@@@@@@@@ //
const anyDeposit = movements.some(mov => mov > 1000);
console.log(anyDeposit);
*/

/****************************************** 
COMMENT: The every() method: some method works kind of same as some() method. But big different is every() only returns true if all the elements fullfil the certain condition.
******************************************/
/*
console.log(movements);
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));
*/

/****************************************** 
COMMENT: Separate callback   
******************************************/
/*
const checkDeposit = mov => mov > 0;
console.log(movements.some(checkDeposit));
console.log(movements.every(checkDeposit));
console.log(movements.filter(checkDeposit));
*/

/****************************************** 
COMMENT: The flat() and flatMap()   
******************************************/

// @@@@@@@@@@ flat() method  @@@@@@@@@@ //
/*
const arr = [[1, 2, 3], [4, 5, 6, 7], 8, 9];
console.log(arr.flat());

const arr2LabelDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arr2LabelDeep.flat(2)); // 2 label deep

const accountsMovements = accounts.map(acc => acc.movements);
console.log(accountsMovements);

const flatMovements = accountsMovements.flat(Infinity); // all label deep: (incase need)
console.log(flatMovements);

const bigTotal = flatMovements.reduce((acc, cur) => acc + cur, 0);

// @@@@@@@@@@ with chaining  @@@@@@@@@@ //
const total = accounts
  .map(acc => acc.movements)
  .flat(Infinity)
  .reduce((acc, cur) => acc + cur, 0);

console.log(total, bigTotal);

// @@@@@@@@@@ flatMap() method: flatMap only goes one level deep  @@@@@@@@@@ //
const total2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);

console.log(total2);
*/

/****************************************** 
COMMENT: The sort() method: Mutate the original array   
******************************************/
/*
// With string
const names = ['jonas', 'zara', 'abrar', 'zahed'];
console.log(names.sort());
console.log(names);

// With number
console.log(movements);

// ascending order
movements.sort((a, b) => a - b);
console.log(movements);

// descending order
movements.sort((a, b) => b - a);
console.log(movements);
*/

/****************************************** 
COMMENT: The fill() method: use to dynamically fill the array. Its mutate the original array  
******************************************/
/*
const arr = new Array(7);
console.log(arr);

arr.fill(1, 3, 5);
console.log(arr);
*/

/****************************************** 
COMMENT: from() method   
******************************************/
/*
const arr = Array.from({ length: 10 }, () => 1);
console.log(arr);

const arr2 = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(arr2);

const hundredRandomNum = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100 + 1)
);

console.log(hundredRandomNum);
console.log(hundredRandomNum.some(num => num == 100));
*/

// @@@@@@@@@@ Example  @@@@@@@@@@ //
/*
document.querySelector('.logo').addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => {
      const elm = el.textContent.replace('Ă', '');
      console.log(typeof elm);
      return Number(elm);
    }
  );
  console.log(movementsUI);
});
*/

/****************************************** 
COMMENT:  Coding Challenge #4   
******************************************/
/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Formula: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK 😀
*/

/*
// @@@@@@@@@@ Test data  @@@@@@@@@@ //
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// @@@@@@@@@@ Solution  @@@@@@@@@@ //
// condition 1
console.log('======= condition 1 =======');
dogs.forEach(dog => {
  return (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));
});
console.log(dogs);

// condition 2
console.log('======= condition 2 =======');
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? 'too much' : 'too less'
  }`
);

// condition 3
console.log('======= condition 3 =======');
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .map(d => d.owners)
  .flat(Infinity);
console.log(ownersEatTooLittle);

// condition 4
console.log('======= condition 4 =======');
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// condition 5
console.log('======= condition 5 =======');
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// condition 6
const okAmount = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log('======= condition 6 =======');
console.log(dogs.some(okAmount));

// condition 7
console.log('======= condition 7 =======');
const okAmountFoodDogs = dogs.filter(okAmount);
console.log(okAmountFoodDogs);

// condition 8
console.log('======= condition 8 =======');
const dogsSortedCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSortedCopy);
*/
