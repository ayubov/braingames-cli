import playGame from '..';
import getRandomNumber from '../utils';

export default () => {
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
  const task = 'Find the greatest common divisor of given numbers.';

  const gameData = () => {
    const [number1, number2] = [getRandomNumber(100), getRandomNumber(100)];
    const question = `${number1} ${number2}`;
    const correctAnswer = String(gcd(number1, number2));
    return { question, correctAnswer };
  };
  return playGame(gameData, task);
};
