import readlineSync from 'readline-sync';

export const getAnswer = message => readlineSync.question(message);

export const showMessage = message => console.log(message);
