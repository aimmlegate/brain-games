// @flow

import readlineSync from 'readline-sync';

export const getAnswer = (message: string): string => readlineSync.question(message);

export const showMessage = (message: string): void => console.log(message);
