'use strict';

const numberButton =  document.querySelector('.number-button');
const randomNumber = document.querySelector('.random-number');

numberButton.addEventListener('click', getRandomNumber);

function getRandomNumber() {
    randomNumber.textContent = Math.floor(Math.random() * 100);
}