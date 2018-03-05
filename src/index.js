import readlineSync from 'readline-sync';

const startMessage = 'Welcome to the Brain Games!';
const nameMessage = 'May I have your name? ';
const evenStartMessage = 'Answer "yes" if number even otherwise answer "no".';

const getAnswer = message => readlineSync.question(message);
const randNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const expectedAnswer = number => ((number % 2 === 0) ? 'yes' : 'no');
const askQuestion = question => console.log(`Question: ${question}`);
const wrongAnswer = (answer, trueAnswer) => console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}`);
const congrat = name => console.log(`Congratulations, ${name}`);

const evenGame = () => {
  const userName = getAnswer(nameMessage);
  const newQuestion = (quantity = 0) => {
    if (quantity > 3) {
      return congrat(userName);
    }
    const newNumber = randNumber(1, 100);
    console.log(evenStartMessage);
    askQuestion(newNumber);
    const chekAnswer = () => {
      const newAnswer = getAnswer('Answer: ');
      if (newAnswer === expectedAnswer(newNumber)) {
        console.log('Correct!');
        return newQuestion(quantity + 1);
      }
      wrongAnswer(newAnswer, expectedAnswer(newNumber));
      console.log(`Let's try again, ${userName}`);
      return newQuestion(quantity);
    };
    return chekAnswer();
  };
  return newQuestion();
};

export default () => {
  console.log(startMessage);
  return evenGame();
};

