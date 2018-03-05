import readlineSync from 'readline-sync';

const sayHello = (name) => console.log(`Hello, ${name}`);
const getName = (message) => readlineSync.question(message);

export default () => {
    console.log(`Welcome to the Brain Games!`);
    sayHello(
        getName(`May I have your name? `)
    );
};

