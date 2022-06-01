'use strict';

//* Dom selection
const body = document.querySelector('body');
const playAgainButton = document.querySelector('.again');
const theNumber = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
scoreEl.textContent = score;
let highScore = 0;

function handleWrongNumber(guess) {
  if (guess > secretNumber) {
    if (score > 1) {
      displayMessage('Too High 📈');
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      score--;
      scoreEl.textContent = score;
    }
  } else {
    if (score > 1) {
      displayMessage('Too Low 📉');
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      score--;
      scoreEl.textContent = score;
    }
  }
}

function displayMessage(message) {
  messageEl.textContent = message;
}

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when no number
  if (!guess) {
    displayMessage('⛔ Not a number');
    score--;
    scoreEl.textContent = score;

    // when win
  } else if (guess === secretNumber) {
    theNumber.textContent = secretNumber;
    displayMessage('🎉 Correct Number');
    body.style.background = '#1abc9c';
    theNumber.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }

    // when guess is high
  } else if (guess !== secretNumber) {
    handleWrongNumber(guess);
  }
});

playAgainButton.addEventListener('click', function () {
  body.style.background = '#222';
  theNumber.style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  scoreEl.textContent = score;
  theNumber.textContent = '?';
  document.querySelector('.guess').value = '';
});
