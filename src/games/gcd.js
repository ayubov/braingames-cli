import playGame from '..';

export default () => {
  const gameData = () => {
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
    const [number1, number2] = [Math.round(Math.random() * 100), Math.round(Math.random() * 100)];
    const question = `${number1} ${number2}`;
    const correctAnswer = gcd(number1, number2);
    const task = 'Find the greatest common divisor of given numbers.';
    return { question, correctAnswer, task };
  };
  return playGame(gameData);
};
