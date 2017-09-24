import readlineSync from 'readline-sync';
import playGame from '..';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  const operationsObj = {
    '*': (a, b) => a * b,
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };
  const randomNumbers = [Math.round(Math.random() * 100), Math.round(Math.random() * 100)];
  const firstOperation = ['*', '+', '-'][Math.round(Math.random() * 2)];

  class Details {
    constructor(userName, numbers, operation, operations) {
      this.name = userName;
      this.numbers = numbers;
      this.operation = operation;
      this.operations = operations;
    }
    question() {
      return `${this.numbers[0]} ${this.operation} ${this.numbers[1]}`;
    }
    correctAnswer() {
      const actualNumbers = this.numbers;
      const actualOperation = this.operation;
      this.numbers = [Math.round(Math.random() * 100), Math.round(Math.random() * 100)];
      this.operation = ['*', '+', '-'][Math.round(Math.random() * 2)];
      return this.operations[actualOperation](actualNumbers[0], actualNumbers[1]);
    }
  }

  const gameData = new Details(name, randomNumbers, firstOperation, operationsObj);
  return playGame(gameData);
};

