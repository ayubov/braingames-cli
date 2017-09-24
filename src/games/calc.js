import playGame from '..';
import getRandomNumber from '../utils';

export default () => {
  const operations = {
    '*': (a, b) => a * b,
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };
  const task = 'What is the result of the expression?';
  const gameData = () => {
    const [num1, num2] = [getRandomNumber(100), getRandomNumber(100)];
    const actualOperation = ['*', '+', '-'][getRandomNumber(2)];
    const question = `${num1} ${actualOperation} ${num2}`;
    const correctAnswer = String(operations[actualOperation](num1, num2));
    return { question, correctAnswer };
  };
  return playGame(gameData, task);
};

