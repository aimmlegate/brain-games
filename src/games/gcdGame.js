// @flow

import gameEngine from '..';

const euclid = (n, m) => {
  if (n === m) return n;
  return (n < m) ? euclid(n, m - n) : euclid(m, n - m);
};

const gameLogic = () => {
  const startMessage = 'Find the greatest common divisor of given numbers.';
  const num1 = Math.floor(Math.random() * (50 - 1)) + 1;
  const num2 = Math.floor(Math.random() * (50 - 1)) + 1;
  const question = `${num1} ${num2}`;
  const rightAnswer = euclid(num1, num2);
  return (key:string) => {
    switch (key) {
      case 'startMessage': return startMessage;
      case 'question': return question;
      case 'rightAnswer': return rightAnswer.toString();
      default: return null;
    }
  };
};

export default () => gameEngine(gameLogic);
