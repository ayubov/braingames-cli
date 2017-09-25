import playGame from '..';
import getRandomNumber from '../utils';

const isPrime = (num) => {
  const iter = (number, divisor) => {
    if (divisor === 1) {
      return true;
    }
    return number % divisor === 0 ? false : iter(number, divisor - 1);
  };
  return iter(num, num - 1);
};

const task = 'Is number prime?';

export default () => {
  const gameData = () => {
    const number = getRandomNumber(100);
    const question = `${number}`;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return { question, correctAnswer };
  };
  return playGame(gameData, task);
};
