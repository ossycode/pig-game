'use strict';

import './style.css';
import { controlModal, initialisedGame } from './controller';
import { displayDiceToUI } from './views';
import * as domElem from './dom-elements';

domElem.openModal.addEventListener('click', controlModal);
domElem.closeModal.addEventListener('click', controlModal);
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

domElem.rollDiceBtn.addEventListener('click', displayDiceToUI);
domElem.startGame.addEventListener('click', initialisedGame);
