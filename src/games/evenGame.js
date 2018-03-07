// @flow

import gameEngine from '..';
import * as fun from '../functions';

const gameLogic = () => {
  const startMessage = 'Answer "yes" if number even otherwise answer "no".';
  const question = fun.randPos(1, 100);
  const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';
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
