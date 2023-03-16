'use strict';

import './style.css';
import {
  controlModal,
  initialisedGame,
  checkIfStartGame,
  bankPoints,
} from './controller';
import { displayDiceToUI } from './views';
import * as domElem from './dom-elements';

globalThis.isStartGame = false;

// export let isStartGame = false;

domElem.openModalBtn.addEventListener('click', controlModal);
domElem.closeModalBtn.addEventListener('click', controlModal);
window.addEventListener('click', function (e) {
  if (e.target.id === 'modal') {
    controlModal();
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    controlModal();
  }
});

domElem.rollDiceBtn.addEventListener('click', function (e) {
  displayDiceToUI(e);
});

domElem.startGameBtn.addEventListener('click', initialisedGame);

domElem.bankPointBtn.addEventListener('click', function (e) {
  console.log(e.target.id);
  bankPoints();
});
