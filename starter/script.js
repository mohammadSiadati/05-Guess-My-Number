'use strict';

let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log('randomNumber:', randomNumber);
let message = (document.querySelector('.message').textContent =
  'Start guessing...');
let secretNumber = (document.querySelector('.number').textContent =
  randomNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
});
