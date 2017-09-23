import readlineSync from 'readline-sync';
import playGame from './index';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  const operations = {
    '*': (a, b) => a * b,
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };
  const number1 = Math.round(Math.random() * 100);
  const number2 = Math.round(Math.random() * 100);
  const actualOperation = ['*', '+', '-'][Math.round(Math.random() * 2)];
  const correctAnswer = String(operations[actualOperation](number1, number2));
  const question = `${number1} ${actualOperation} ${number2}`;
  const gameData = {
    question,
    correctAnswer,
    name,
  };
  return playGame(gameData);
};

