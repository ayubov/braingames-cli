import playGame from '..';
import getRandomNumber from '../utils';

const isPrime = (num, divisor) => {
  if (divisor === 1) {
    return 'yes';
  }
  return num % divisor === 0 ? 'no' : isPrime(num, divisor - 1);
};
const task = 'Is number prime?';

export default () => {
  const gameData = () => {
    const number = getRandomNumber(100);
    const question = `${number}`;
    const correctAnswer = isPrime(number, number - 1);
    return { question, correctAnswer };
  };
  return playGame(gameData, task);
};
