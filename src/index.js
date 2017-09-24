import readlineSync from 'readline-sync';

export default (gameDetails, task) => {
  console.log('Welcome to the Brain Games!');
  const taskDescription = task;
  console.log(taskDescription);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const maxRounds = 3;
  for (let roundCounter = 0; roundCounter < maxRounds; roundCounter += 1) {
    const { correctAnswer, question } = gameDetails();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
