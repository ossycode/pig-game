'use strict';

import { rollDice, playGame } from './controller';
import * as domElem from './dom-elements';
// import { isStartGame } from '.';

export const displayDiceToUI = function () {
  const dice = rollDice();
  if (isStartGame === false) {
    displayNotification('Please start the game!');
  } else {
    playGame(dice);
    if (dice === 1) {
      domElem.diceDiv.classList.add('dice1');
    } else {
      domElem.diceDiv.classList.remove('dice1');
    }
    if (dice === 2) {
      domElem.diceDiv.classList.add('dice2');
    } else {
      domElem.diceDiv.classList.remove('dice2');
    }
    if (dice === 3) {
      console.log(dice);
      domElem.diceDiv.classList.add('dice3');
    } else {
      domElem.diceDiv.classList.remove('dice3');
    }
    if (dice === 4) {
      console.log(dice);
      domElem.diceDiv.classList.add('dice4');
    } else {
      domElem.diceDiv.classList.remove('dice4');
    }
    if (dice === 5) {
      console.log(dice);
      domElem.diceDiv.classList.add('dice5');
    } else {
      domElem.diceDiv.classList.remove('dice5');
    }
    if (dice === 6) {
      console.log(dice);
      domElem.diceDiv.classList.add('dice6');
    } else {
      domElem.diceDiv.classList.remove('dice6');
    }
  }
};

export const displayNotification = function (message) {
  domElem.notification.classList.add('animateOut');
  domElem.notification.textContent = message;
  window.setTimeout(
    () => domElem.notification.classList.remove('animateOut'),
    2000
  );
};
