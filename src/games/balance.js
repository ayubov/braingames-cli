import playGame from '..';
import getRandomNumber from '../utils';

const balance = (number) => {
  const arrOfDigits = String(number).split('').map(e => Number(e));
  const getBalance = (arr) => {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    if (sortedArr[sortedArr.length - 1] - sortedArr[0] < 2) {
      return sortedArr.join('');
    }
    const newArr = [sortedArr[0] + 1, ...sortedArr.slice(1, -1), sortedArr.slice(-1)[0] - 1];
    return getBalance(newArr);
  };
  return getBalance(arrOfDigits);
};
const task = 'Balance the given number.';

export default () => {
  const gameData = () => {
    const num = getRandomNumber(10000);
    const question = `${num}`;
    const correctAnswer = String(balance(num));
    return { question, correctAnswer };
  };
  return playGame(gameData, task);
};
