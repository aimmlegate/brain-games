
import * as fun from './functions';

export default (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(game()('startMessage'));
  const userName = fun.getAnswer('May I have your name? ');
  const gameplay = (isRight = 1) => {
    if (isRight > 3) {
      console.log(`Congratulations, ${userName}`);
      return null;
    }
    const newGame = game();
    console.log(`Question: ${newGame('question')}`);
    const newAnswer = fun.getAnswer('Your answer: ');
    if (newAnswer === newGame('rightAnswer')) {
      console.log('Correct!');
      return gameplay(isRight + 1);
    } else if (newAnswer === 'exit') {
      return null;
    }
    console.log(`Let's try again, ${userName}`);
    return gameplay(isRight);
  };
  return gameplay();
};

