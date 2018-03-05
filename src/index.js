import readlineSync from 'readline-sync';

const getName = message => readlineSync.question(message);
export default () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${getName('May I have your name?')}`);
};
