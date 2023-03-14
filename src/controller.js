'use strict';

import * as domElem from './dom-elements';

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
