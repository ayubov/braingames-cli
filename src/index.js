import readlineSync from 'readline-sync';

export default (gameDetails) => {
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${gameDetails.question()}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(gameDetails.correctAnswer());
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${gameDetails.name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${gameDetails.name}!`);
};
