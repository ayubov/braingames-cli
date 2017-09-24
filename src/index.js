import readlineSync from 'readline-sync';

export default (gameDetails) => {
  console.log('Welcome to the Brain Games!');
  const taskDescription = gameDetails().task;
  console.log(taskDescription);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < 3; i += 1) {
    const details = gameDetails();
    console.log(`Question: ${details.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(details.correctAnswer);
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
