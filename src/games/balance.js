import playGame from '..';
import getRandomNumber from '../utils';

export default () => {
  const gameData = () => {
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
    const num = getRandomNumber(10000);
    const question = `${num}`;
    const correctAnswer = balance(num);
    const task = 'Balance the given number.';
    return { question, correctAnswer, task };
  };
  return playGame(gameData);
};
