// @flow

import gameEngine from '..';
import * as fun from '../helpers';

const gameLogic = (): Function => {
  const startMessage = 'What is the result of the expression?';
  const num1 = fun.getRandomNatural(50, 1);
  const num2 = fun.getRandomNatural(50, 1);
  const operTemplate = fun.getRandomNatural(3, 0);
  const question = `${num1} ${fun.getOperatorString(operTemplate)} ${num2}`;
  const rightAnswer = fun.calculateNumbers(num1, num2, operTemplate);
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
