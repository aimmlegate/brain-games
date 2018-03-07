export const randPos = (max, min) => Math.floor(Math.random() * (max - min)) + min;

export const operatorString = (oper) => {
  switch (oper) {
    case 0: return '+';
    case 1: return '-';
    case 2: return '*';
    default: return 'null';
  }
};

export const calculator = (n, m, oper) => {
  switch (oper) {
    case 0: return n + m;
    case 1: return n - m;
    case 2: return n * m;
    default: return 0;
  }
};

export const euclid = (n, m) => {
  if (n === m) return n;
  return (n < m) ? euclid(n, m - n) : euclid(m, n - m);
};
