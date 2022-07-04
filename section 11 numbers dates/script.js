'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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
          <div class="movements__value">${movement.toFixed(2)}</div>
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
  labelBalance.textContent = `${account.balance.toFixed(2)} EUR`;
};

/****************************************** 
COMMENT: display summery   
******************************************/
const calcDisplaySummery = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${Math.abs(incomes.toFixed(2))}€`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
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
  const amount = Math.floor(inputLoanAmount.value);
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
COMMENT:  LECTURES   
******************************************/
// console.log(23 === 23.0);

// console.log(0.1 + 0.2 === 0.3); // bug in javascript

/* 
  COMMENT: convert string number
*/
/*
console.log('23', Number('23'));
console.log('200', +'200');
*/
/* 
  COMMENT: Parsing
*/

/*
// parsInt(): It will convert a string to a number with omitting non numeric value. But only works if that string is starts with numeric integer value.
console.log(Number.parseInt('30px'));

// parsefloat(): It works same as parseInt(). But the different is, it also works with floating point number.
console.log(Number.parseInt('2.5rem')); // it won't return 2.5
console.log(Number.parseFloat('2.5rem'));

// isNan()
console.log(Number.isNaN(20));
console.log(Number.isNaN(+'20x'));

// isFinite(): is the best way to check if the value is a number or not.
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(20 / 0)); //  false because it will return infinity
*/

/* 
  COMMENT: Math function
*/

// @@@@@@@@@@ square root  @@@@@@@@@@ //
/*
console.log(Math.sqrt(25));

// @@@@@@@@@@ get maximum and minimum value   @@@@@@@@@@ //
const arr = [1, 3, 2, -5, 0];
console.log(Math.max(...arr));
console.log(Math.min(...arr));

// @@@@@@@@@@ Math.random()  @@@@@@@@@@ //
console.log(Math.trunc(Math.random() * 6) + 1);

// @@@@@@@@@@ get a random number between an minimum number and a maximum number  @@@@@@@@@@ //
const randomInt = function (max, min) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};
console.log(randomInt(20, 10));
*/

// @@@@@@@@@@ Rounding integers numbers  @@@@@@@@@@ //
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.5));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.6));

console.log(Math.floor(23.3));
console.log(Math.floor(23.6));

// @@@@@@@@@@ Rounding decimal numbers  @@@@@@@@@@ //
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(2));
console.log((2.744).toFixed(2));
console.log(+(2.345).toFixed(2)); // to convert the result into number
