import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
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
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = Math.round(Math.random() * 100);
    const secondNumber = Math.round(Math.random() * 100);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = gcd(firstNumber, secondNumber);
    if (correctAnswer !== Number(userAnswer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
