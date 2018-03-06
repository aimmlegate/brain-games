// @flow

export default () => {
  const startMessage = 'Answer "yes" if number even otherwise answer "no".';
  const question = Math.floor(Math.random() * (100 - 1)) + 1;
  const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return (key:string) => {
    switch (key) {
      case 'startMessage': return startMessage;
      case 'question': return question;
      case 'rightAnswer': return rightAnswer;
      default: return null;
    }
  };
};

