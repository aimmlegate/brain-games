// @flow

import gameEngine from '..';
import * as fun from '../helpers';

const gameLogic = (): Function => {
  const startMessage = 'Is this number prime?';
  const number = fun.getRandomNatural(1, 100);
  const question = `${number}`;
  const rightAnswer = (fun.isPrime(number)) ? 'yes' : 'no';
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
