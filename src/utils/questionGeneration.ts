export type Operator = '+' | '-' | '*' | '/';

export function generateQuestion() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const operators: Operator[] = ['+', '-', '*', '/'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${a} ${operator} ${b}`;
  const answer = eval(`${a}${operator}${b}`);
  return {
    question,
    answer: Number(answer.toFixed(2)), // handle division
  };
}
