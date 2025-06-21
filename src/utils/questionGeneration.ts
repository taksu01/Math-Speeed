export type Operator = '+' | '-' | '*' | '/';

export function generateQuestion() {
  const operators: Operator[] = ['+', '-', '*', '/'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let a: number, b: number;

  if (operator === '/') {
    b = Math.floor(Math.random() * 10) + 1;
    const multiplier = Math.floor(Math.random() * 10) + 1;
    a = b * multiplier;
  } else if (operator === '-') {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    if (a < b) {
      [a, b] = [b, a];
    }
  } else {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
  }

  const question = `${a} ${operator} ${b}`;
  const answer = eval(`${a}${operator}${b}`);
  return {
    question,
    answer: Number(answer), // No need for toFixed since we ensure whole numbers
  };
}
