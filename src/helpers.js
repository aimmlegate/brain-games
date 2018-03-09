// @flow

export const getRandomNatural =
  (max: number, min: number): number => Math.floor(Math.random() * (max - min)) + min;

export const getOperatorString = (oper: number) :string => {
  switch (oper) {
    case 0: return '+';
    case 1: return '-';
    case 2: return '*';
    default: return 'null';
  }
};

export const calculateNumbers = (n: number, m: number, oper: number): number => {
  switch (oper) {
    case 0: return n + m;
    case 1: return n - m;
    case 2: return n * m;
    default: return 0;
  }
};

export const getGcd = (n: number, m: number): number => {
  if (n === m) return n;
  return (n < m) ? getGcd(n, m - n) : getGcd(m, n - m);
};

export const isEqualArrays =
  (ar1: Array<number>, ar2: Array<number>): boolean =>
    (ar1.every((el, index) => el === ar2[index]));

export const stringToNumArray = (string: string): Array<number> =>
  string.split('').map(el => parseInt(el, 10));

export const numArrayToString = (array: Array<number>): string => array.join('');

export const balanceArray = (array: Array<number>): Array<number> => {
  const mutArray = array.slice();
  if ((mutArray[0] === mutArray[mutArray.length - 1]) ||
    (Math.abs(mutArray[0] - mutArray[mutArray.length - 1]) === 1)) {
    return mutArray;
  }
  if (mutArray[0] > mutArray[mutArray.length - 1]) {
    mutArray[0] -= 1;
    mutArray[mutArray.length - 1] += 1;
    return balanceArray(mutArray.sort((a, b) => a - b));
  }
  mutArray[0] += 1;
  mutArray[mutArray.length - 1] -= 1;
  return balanceArray(mutArray.sort((a, b) => a - b));
};

export const createProgression = (start: number, d: number): Function =>
  (n: number): number => start + ((n - 1) * d);

export const printProgression = (progress: Function, hide: number, length: number): string => {
  const iter = (len, string): string => {
    if (len <= 0) return string;
    if (len === hide) return iter(len - 1, `.. ${string}`);
    return iter(len - 1, `${progress(len)} ${string}`);
  };
  return iter(length, '');
};

export const isPrime = (number: number): boolean => {
  if (number < 2) return false;
  const iter = (divisor) => {
    if (divisor === number) return true;
    if (number % divisor === 0) return false;
    return iter(divisor + 1);
  };
  return iter(2);
};
