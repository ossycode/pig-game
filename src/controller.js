'use strict';

import * as domElem from './dom-elements';
import { Player } from './player';
import { displayNotification } from './views';

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

export const player1 = Player('Player1');
export const player2 = Player('Player2');

player1.board = {
  gameBoard: domElem.player1Board,
  domRoundScore: domElem.player1RoundScore,
  domCurrentScore: domElem.player1CurrentScore,
};

player2.board = {
  gameBoard: domElem.player2Board,
  domRoundScore: domElem.player2RoundScore,
  domCurrentScore: domElem.player2CurrentScore,
};

export const initialisedGame = function () {
  isStartGame = true;
  displayNotification('Player One turn!');
  player1.hold = false;
  player2.hold = true;
  player1.board.gameBoard.classList.add('activePlayer');
  player2.board.gameBoard.classList.remove('activePlayer');
  player1.roundScore = 0;
  player1.bankScore = 0;
  player1.board.domCurrentScore.textContent = player1.bankScore;
  player1.board.domRoundScore.textContent = player1.roundScore;
  player2.bankScore = 0;
  player2.roundScore = 0;
  player2.board.domCurrentScore.textContent = player2.bankScore;
  player2.board.domRoundScore.textContent = player2.roundScore;
  domElem.diceDiv.classList.remove(
    'dice1',
    'dice2',
    'dice3',
    'dice4',
    'dice5',
    'dice6'
  );
};

export const bankPoints = function () {
  let activePlayer;
  let secondPlayer;
  if (!player1.hold) {
    activePlayer = player1;
    secondPlayer = player2;
  } else {
    activePlayer = player2;
    secondPlayer = player1;
  }
  if (isStartGame && activePlayer.roundScore > 0) {
    activePlayer.bankScore += activePlayer.roundScore;
    activePlayer.board.domCurrentScore.textContent = activePlayer.bankScore;
    activePlayer.roundScore = 0;
    activePlayer.board.domRoundScore.textContent = activePlayer.roundScore;

    if (activePlayer.bankScore >= 20) {
      isStartGame = false;
      displayNotification(`${activePlayer.getName()} won! 🎉`);
      activePlayer.hold = true;
      secondPlayer.hold = true;
      activePlayer.bankScore = 0;
      secondPlayer.bankScore = 0;
      activePlayer.roundScore = 0;
      secondPlayer.roundScore = 0;
    } else {
      activePlayer.hold = true;
      secondPlayer.hold = false;
      displayNotification(`${secondPlayer.getName()} Turn!'`);
      secondPlayer.board.gameBoard.classList.add('activePlayer');
      activePlayer.board.gameBoard.classList.remove('activePlayer');
    }
  }
};

export const playGame = function (dice) {
  let activePlayer;
  let secondPlayer;
  if (!player1.hold) {
    activePlayer = player1;
    secondPlayer = player2;
  } else {
    activePlayer = player2;
    secondPlayer = player1;
  }
  if (dice === 1) {
    //   activePlayer.hold = true
    activePlayer.bankScore = 0;
    activePlayer.roundScore = 0;
    activePlayer.board.domCurrentScore.textContent = activePlayer.bankScore;
    activePlayer.board.domRoundScore.textContent = activePlayer.roundScore;
    activePlayer.hold = true;
    secondPlayer.hold = false;
    displayNotification(`${secondPlayer.getName()}'s Turn!'`);
    secondPlayer.board.gameBoard.classList.add('activePlayer');
    activePlayer.board.gameBoard.classList.remove('activePlayer');
  } else {
    activePlayer.roundScore += dice;
    activePlayer.board.domRoundScore.textContent = activePlayer.roundScore;
  }
};
