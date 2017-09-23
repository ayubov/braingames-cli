import readlineSync from 'readline-sync';
import playGame from './index';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if number even otherwise answer "no"');
  const isNumberEven = num => (num % 2 === 0 ? 'yes' : 'no');
  const randomNumber = Math.round(Math.random() * 100);

  class Details {
    constructor(userName, number) {
      this.name = userName;
      this.number = number;
    }
    question() {
      return `${this.number}`;
    }
    correctAnswer() {
      const actualNumber = this.number;
      this.number = Math.round(Math.random() * 100);
      return isNumberEven(actualNumber);
    }
  }

  const gameData = new Details(name, randomNumber);
  return playGame(gameData);
};

