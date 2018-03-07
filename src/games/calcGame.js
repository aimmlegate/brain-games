// @flow
import gameEngine from '..';

const calc = (n, m, oper) => {
  switch (oper) {
    case 0: return n + m;
    case 1: return n - m;
    case 2: return n * m;
    default: return 0;
  }
};

const operator = (oper) => {
  switch (oper) {
    case 0: return '+';
    case 1: return '-';
    case 2: return '*';
    default: return 'null';
  }
};

const gameLogic = () => {
  const startMessage = 'What is the result of the expression?';
  const num1 = Math.floor(Math.random() * (50 - 1)) + 1;
  const num2 = Math.floor(Math.random() * (50 - 1)) + 1;
  const operTemplate = Math.floor(Math.random() * (3 - 0)) + 0;
  const question = `${num1} ${operator(operTemplate)} ${num2}`;
  const rightAnswer = calc(num1, num2, operTemplate);
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
