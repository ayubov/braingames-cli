import readlineSync from 'readline-sync';
import playGame from './index';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Balance the given number.');

  const balance = (number) => {
    const arrOfDigits = String(number).split('').map(e => Number(e));
    const sortArrOfDigits = arr => arr.slice().sort((a, b) => a - b);
    const getBalance = (arr) => {
      const sortedArr = sortArrOfDigits(arr);
      if (sortedArr[sortedArr.length - 1] - sortedArr[0] < 2) {
        return sortedArr.join('');
      }
      sortedArr[0] += 1;
      sortedArr[sortedArr.length - 1] = sortedArr[sortedArr.length - 1] - 1;
      return getBalance(sortedArr);
    };
    return getBalance(arrOfDigits);
  };

  const randomNumber = Math.round(Math.random() * 10000);

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
      this.number = Math.round(Math.random() * 10000);
      return balance(actualNumber);
    }
  }

  const gameData = new Details(name, randomNumber);
  return playGame(gameData);
};
