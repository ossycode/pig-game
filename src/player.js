'use strict';

export const Player = name => {
  let bankScore = 0;
  let hold = true;
  const getName = () => name;

  const checkWin = () => {
    if (bankScore === 50) {
      return true;
    }
    return false;
  };

  return { checkWin, getName, hold, bankScore };
};
