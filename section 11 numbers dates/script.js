'use strict';

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
    '2022-06-29T14:43:26.374Z',
    '2022-07-02T18:49:59.371Z',
    '2022-07-04T12:01:20.894Z',
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
    '2022-04-10T14:43:26.374Z',
    '2022-06-01T18:49:59.371Z',
    '2022-07-04T12:01:20.894Z',
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

/* 
  COMMENT: utility functions
*/

const formatMovements = function (date, locale) {
  const calcDatePassed = function (date1, date2) {
    return Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  };

  const daysPassed = calcDatePassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    /*
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth()}`.padStart(2, 0);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
    */
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCurrency = function (value, locale, currency) {
  const options = {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 2,
  };
  const formattedValue = new Intl.NumberFormat(locale, options).format(value);

  return formattedValue;
};

const displayMovement = function (account, sort = false) {
  containerMovements.innerHTML = '';

  //=== sorting  ===//
  const moves = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  moves.forEach((movement, i) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(account.movementsDates[i]);
    const displayDate = formatMovements(date, account.locale);

    const formattedMov = formatCurrency(
      movement,
      account.locale,
      account.currency
    );

    const movementHtml = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate.toLocaleString()}</div>
          <div class="movements__value">${formattedMov}</div>
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

  labelBalance.textContent = formatCurrency(
    account.balance,
    account.locale,
    account.currency
  );
};

/****************************************** 
COMMENT: display summery   
******************************************/
//=== incomes: Deposits, loan, got transfer  ===//
const calcDisplaySummery = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(
    incomes,
    account.locale,
    account.currency
  );

  //=== out: withdrawal  ===//
  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = formatCurrency(
    Math.abs(out),
    account.locale,
    account.currency
  );

  //=== transfer  ===//
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = formatCurrency(
    interest,
    account.locale,
    account.currency
  );
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
  //=== display movements  ===//
  displayMovement(account);

  //=== display balance  ===//
  calcDisplayBalance(account);

  //=== display summery  ===//
  calcDisplaySummery(account);
};

/****************************************** 
COMMENT: Event handlers   
******************************************/
/* 
  COMMENT: Log in
*/

let currentAccount;

//=== FAKE ALWAYS LOGGED IN  ===//
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 1;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //=== Display ui with welcome message  ===//
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'short',
    };

    const locale = currentAccount.locale;
    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
      now
    );

    /*
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth()}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const minutes = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}: ${minutes}`;
    */

    //=== clear input fields  ===//
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //=== updating ui  ===//
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
    //=== doing the transfer  ===//
    currentAccount.movements.push(-amount);
    ReceiverAccount.movements.push(amount);

    //=== Add transfer date  ===//
    currentAccount.movementsDates.push(new Date().toISOString());
    ReceiverAccount.movementsDates.push(new Date().toISOString());

    //=== updating ui  ===//
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
    //=== add movement  ===//
    currentAccount.movements.push(amount);

    //=== Add loan date  ===//
    currentAccount.movementsDates.push(new Date().toISOString());

    //=== update ui  ===//
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

    //=== remove account from accounts array  ===//
    accounts.splice(accountToClose, 1);

    //=== hide ui  ===//
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

/*
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
*/

/* 
  COMMENT: Remainder operator.
*/
/*
console.log(5 % 2);
console.log(5 / 2);
console.log(8 % 3);
console.log(8 % 2);

//  check is a number even or odd
const check_even_odd = function (num) {
  let strCommon = `And remainder is ${num % 2}`;
  return num % 2 === 0
    ? `Number ${num} is even. ${strCommon}`
    : `Number ${num} is odd. ${strCommon}`;
};

console.log(check_even_odd(12));

labelBalance.addEventListener('click', function () {
  document.querySelectorAll('.movements__row').forEach((row, i) => {
    if (i % 2 === 0) {
      row.style.background = 'gray';
    }
  });
});
*/

// biggest number in javascript
/*
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
*/

/*
// BigInt
console.log(34682374627836487326872647832n);

// BigInt with constructor
console.log(BigInt(32748672647823648723647));

// operations between two BigInt
console.log(287674865478256874567846n + 839478926472367836473824673n);
*/

/* 
  COMMENT: Dates and times
*/
/*
const now = new Date();
console.log(now);

console.log(new Date('Jan 05 2022 19:37:02'));

console.log(new Date('December 24, 2015'));

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 1, 30));

console.log(new Date(0));

console.log(new Date(3 * 24 * 60 * 60 * 1000));
*/

// @@@@@@@@@@ working with dates  @@@@@@@@@@ //
// Get date
/*
const future = new Date(2040, 10, 20, 5, 23);
console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());

console.log(future.toISOString());

console.log(future.getTime());

console.log(new Date(2236980180000));

// set date
future.setFullYear(2080);
console.log(future);
*/

/* 
  COMMENT: operation between dates
*/
/*
const future = new Date(2040, 10, 20, 5, 23);
// console.log(+future);

const calcDatePassed = function (date1, date2) {
  return Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
};

const days1 = calcDatePassed(new Date(2040, 3, 14), new Date(2040, 3, 4));
console.log(days1);
*/

/* 
   COMMENT: Internationalization with date
*/
/*
const now = new Date();
const options = {
  minute: 'numeric',
  hour: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};
const internationalizedDate = new Intl.DateTimeFormat(
  undefined,
  options
).format(now);

console.log(internationalizedDate);
*/

/* 
  COMMENT: Internationalization numbers
*/
/*
const num = 2100.45;

const options = {
  style: 'currency',
  currency: 'USD',
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('GB: ', new Intl.NumberFormat('en-GB', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
*/
