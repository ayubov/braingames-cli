import playGame from '..';
import getRandomNumber from '../utils';

export default () => {
  const balance = (number) => {
    const arrOfDigits = String(number).split('').map(e => Number(e));
    const getBalance = (arr) => {
      const sortedArr = arr.slice().sort((a, b) => a - b);
      if (sortedArr[sortedArr.length - 1] - sortedArr[0] < 2) {
        return sortedArr.join('');
      }
      sortedArr[0] += 1;
      sortedArr[sortedArr.length - 1] -= 1;
      return getBalance(sortedArr);
    };
    return getBalance(arrOfDigits);
  };
  const task = 'Balance the given number.';
  const gameData = () => {
    const num = getRandomNumber(10000);
    const question = `${num}`;
    const correctAnswer = String(balance(num));
    return { question, correctAnswer, task };
  };
  return playGame(gameData);
};
