// @flow

import gameEngine from '..';
import * as fun from '../helpers';

const gameLogic = (): Function => {
  const startMessage = 'What number is missing in this progression?';

  const newProgression = fun.createProgression(
    fun.getRandomNatural(1, 10),
    fun.getRandomNatural(2, 10),
  );
  const progressionLength = 10;
  const hidenElementNumber = fun.getRandomNatural(1, 10);
  const question = fun.printProgression(newProgression, hidenElementNumber, progressionLength);
  const rightAnswer = newProgression(hidenElementNumber);
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
