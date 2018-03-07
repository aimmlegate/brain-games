// @flow

import gameEngine from '..';
import * as fun from '../functions';

const gameLogic = () => {
  const startMessage = 'What is the result of the expression?';
  const num1 = fun.randPos(50, 1);
  const num2 = fun.randPos(50, 1);
  const operTemplate = fun.randPos(3, 0);
  const question = `${num1} ${fun.operatorString(operTemplate)} ${num2}`;
  const rightAnswer = fun.calculator(num1, num2, operTemplate);
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
