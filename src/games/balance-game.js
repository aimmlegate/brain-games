// @flow

import gameEngine from '..';
import * as fun from '../helpers';

const gameLogic = () => {
  const startMessage = 'Balance the given number.';
  const givenNumber = fun.getRandomNatural(100, 9999);
  const question = `${givenNumber}`;
  const stringFromNumber = givenNumber.toString(10);
  const arrayFromString = fun.stringToNumArray(stringFromNumber);
  const balancedArray = fun.balanceArray(arrayFromString);
  const rightAnswer = fun.numArrayToString(balancedArray);
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

