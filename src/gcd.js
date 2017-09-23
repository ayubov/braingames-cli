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
  const getRandomNumber = () => Math.round(Math.random() * 100);
  const numbers = [getRandomNumber(), getRandomNumber()];
  const question = `${numbers[0]} ${numbers[1]}`;
  const correctAnswer = gcd(numbers[0], numbers[1]);
  const gameData = {
    question,
    correctAnswer,
    name,
  };
  return playGame(gameData);
};
