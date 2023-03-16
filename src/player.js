'use strict';

export const Player = name => {
  let bankScore = 0;
  let hold = true;
  let board = {};
  let roundScore = 0;
  const getName = () => name;

  return { getName, hold, bankScore, board, roundScore };
};
