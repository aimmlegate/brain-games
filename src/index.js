// @flow

import * as ui from './user-interaction';

export default (game: Function) => {
  ui.showMessage('Welcome to the Brain Games!');
  ui.showMessage(game()('startMessage'));
  const userName = ui.getAnswer('May I have your name? ');
  const gameplay = (isRight = 1) => {
    if (isRight > 3) {
      ui.showMessage(`Congratulations, ${userName}`);
      return null;
    }
    const newGame = game();
    ui.showMessage(`Question: ${newGame('question')}`);
    const newAnswer = ui.getAnswer('Your answer: ');
    if (newAnswer === newGame('rightAnswer')) {
      ui.showMessage('Correct!');
      return gameplay(isRight + 1);
    } else if (newAnswer === 'exit') {
      return null;
    }
    ui.showMessage(`Let's try again, ${userName}`);
    return gameplay(isRight);
  };
  return gameplay();
};

