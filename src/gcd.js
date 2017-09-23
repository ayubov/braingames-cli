import readlineSync from 'readline-sync';
import playGame from './index';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  const gcd = (num1, num2) => {
    const findGCD = (number1, number2, divisor) => {
      if (divisor === 1) {
        return 1;
      }
      if (number1 % divisor === 0 && number2 % divisor === 0) {
        return divisor;
      }
      return findGCD(number1, number2, divisor - 1);
    };
    return num1 >= num2 ? findGCD(num1, num2, num2) : findGCD(num1, num2, num1);
  };
  const randomNumbers = [Math.round(Math.random() * 100), Math.round(Math.random() * 100)];

  class Details {
    constructor(userName, numbers) {
      this.name = userName;
      this.numbers = numbers;
    }
    question() {
      return `${this.numbers[0]} ${this.numbers[1]}`;
    }
    correctAnswer() {
      const actualNumbers = this.numbers;
      this.numbers = [Math.round(Math.random() * 100), Math.round(Math.random() * 100)];
      return gcd(actualNumbers[0], actualNumbers[1]);
    }
  }

  const gameData = new Details(name, randomNumbers);
  return playGame(gameData);
};
