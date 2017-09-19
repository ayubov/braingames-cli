import readlineSync from 'readline-sync';

export const sayHello = () => {
  console.log('Welcome to the Brain Games!'); 
  const name = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${name}!`);
}

export const isEvenGame = () => {
  const isNumberEven = num => (num % 2 === 0 ? 'yes' : 'no');
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const name = readlineSync.question('May I have your name? ');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isNumberEven(number);
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log('Let\'s try again, Bill!');
      return;
    } else if (i === 2) {
      console.log('Correct!');
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log('Correct!');
    }
  }
};

