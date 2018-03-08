// @flow

import readlineSync from 'readline-sync';

export const getAnswer = (message: string) => readlineSync.question(message);

export const showMessage = (message: string) => console.log(message);
