import readlineSync from 'readline-sync';

export default () => {
  const isNumberEven = num => (num % 2 === 0 ? 'yes' : 'no');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('Answer "yes" if number even otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const question = Math.round(Math.random() * 100);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isNumberEven(question);
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
