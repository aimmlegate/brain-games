export const getRandomNatural = (max, min) => Math.floor(Math.random() * (max - min)) + min;

export const operatorString = (oper) => {
  switch (oper) {
    case 0: return '+';
    case 1: return '-';
    case 2: return '*';
    default: return 'null';
  }
};

export const calculate = (n, m, oper) => {
  switch (oper) {
    case 0: return n + m;
    case 1: return n - m;
    case 2: return n * m;
    default: return 0;
  }
};

export const getGcd = (n, m) => {
  if (n === m) return n;
  return (n < m) ? getGcd(n, m - n) : getGcd(m, n - m);
};

export const isEqualArrays = (ar1, ar2) => ar1.every((el, index) => el === ar2[index]);

export const stringToNumArray = string => string.split('').map(el => parseInt(el, 10));

export const numArrayToString = array => array.join('');

export const balanceArray = (array) => {
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

export const createProgression = (start, d) => n => start + ((n - 1) * d);

export const printProgression = (progress, hide, length) => {
  const iter = (len, string) => {
    if (len <= 0) return string;
    if (len === hide) return iter(len - 1, `.. ${string}`);
    return iter(len - 1, `${progress(len)} ${string}`);
  };
  return iter(length, '');
};

export const isPrime = (number) => {
  if (number < 2) return false;
  const iter = (devisor) => {
    if (devisor === number) return true;
    if (number % devisor === 0) return false;
    return iter(devisor + 1);
  };
  return iter(2);
};
