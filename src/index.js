import readlineSync from 'readline-sync';


const getAnswer = message => readlineSync.question(message);

export default (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(game()('startMessage'));
  const userName = getAnswer('May I have your name? ');
  const gameplay = (isRight = 1) => {
    if (isRight > 3) {
      console.log(`Congratulations, ${userName}`);
      return null;
    }
    const newGame = game();
    console.log(`Question: ${newGame('question')}`);
    const newAnswer = getAnswer('Your answer: ');
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

