'use strict';

// Selection dom elements
const scoreEl_1 = document.getElementById('score--0');
const scoreEl_2 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentEl_1 = document.getElementById('current--0');
const currentEl_2 = document.getElementById('current--1');
const playerEL_1 = document.querySelector('.player--0');
const playerEL_2 = document.querySelector('.player--1');

scoreEl_1.textContent = 0;
scoreEl_2.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// const initializedGame = function () {
//   scores[0] = 0;
//   scores[1] = 0;
//   currentScore = 0;
//   activePlayer = 0;
//   scoreEl_1.textContent = 0;
//   scoreEl_2.textContent = 0;
//   //   diceEl.classList.remove('hidden');
//   btnHold.classList.remove('hidden');
//   btnRoll.classList.remove('hidden');

//   document.querySelector(`.player--0`).classList.remove('player--winner');
//   document.querySelector(`.player--1`).classList.remove('player--winner');
// };
// initializedGame();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEL_1.classList.toggle('player--active');
  playerEL_2.classList.toggle('player--active');
  scores[activePlayer] += currentScore;
};

const holdDice = function () {
  //  add current score to active players score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // if players score >= 100, finish game
  if (scores[activePlayer] >= 20) {
    diceEl.classList.add('hidden');
    btnHold.classList.add('hidden');
    btnRoll.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
  }
  // switch to the next player
  switchPlayer();
};

const rollDice = function () {
  // generating random dice number
  let dice = Math.trunc(Math.random() * 6) + 1;

  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./images/dice-${dice}.png`;

  //  check for rolled 1
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // switch to to next player
  } else {
    switchPlayer();
  }
};

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdDice);
// btnNew.addEventListener('click', initializedGame);
