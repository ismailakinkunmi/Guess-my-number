'use strict';

let displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

let displaySecreteNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

let secreteNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

let backgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

let scoreValue = function (score) {
  document.querySelector('.score').textContent = score;
};

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
const check = document.querySelector('.check');
let highscore = 0;

check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // player enter null or 0 value
  if (!guess) {
    displayMessage('😒 no number');
  }
  //  player guess right
  else if (guess === secretNumber) {
    backgroundColor('#60b347');
    displayMessage('😎 correct number');
    secreteNumberWidth('30rem');
    displaySecreteNumber(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
  //  player guess wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '😘 number is high' : 'number is low'
      );
      score--;
      scoreValue(score);
    } else {
      displayMessage('🥵 You lost the game');
      scoreValue(0);
    }
  }
});

// play again
const again = document.querySelector('.again');
again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  scoreValue(score);
  backgroundColor('#222');
  secreteNumberWidth('15rem');
  displayMessage('Start guessing...');
  displaySecreteNumber('?');
  document.querySelector('.guess').value = '';
});
