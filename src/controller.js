'use strict';

import * as domElem from './dom-elements';
import { Player } from './player';

let isStartGame = false;

export const controlModal = function () {
  domElem.modal.classList.contains('hidden')
    ? domElem.modal.classList.remove('hidden')
    : domElem.modal.classList.add('hidden');
};

export const rollDice = function () {
  const dice = Math.floor(Math.random() * 6) + 1;

  //   console.log(dice);
  return dice;
};

const player1 = Player('Player1');
const player2 = Player('Player2');

export const initialisedGame = function () {
  isStartGame = true;
  console.log(isStartGame);
};

export const changeActivePlayer = function () {};
