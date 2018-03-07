// @flow

import gameEngine from '..';
import * as fun from '../functions';

const gameLogic = () => {
  const startMessage = 'Find the greatest common divisor of given numbers.';
  const num1 = fun.randPos(50, 1);
  const num2 = fun.randPos(50, 1);
  const question = `${num1} ${num2}`;
  const rightAnswer = fun.euclid(num1, num2);
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
