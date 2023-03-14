'use strict';

import { rollDice } from './controller';
import * as domElem from './dom-elements';

export const displayDiceToUI = function () {
  const dice = rollDice();
  if (dice === 1) {
    console.log(dice);
    domElem.diceDiv.classList.add('dice1');
  } else {
    domElem.diceDiv.classList.remove('dice1');
  }
  if (dice === 2) {
    console.log(dice);
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
};
