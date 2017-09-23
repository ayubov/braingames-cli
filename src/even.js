import readlineSync from 'readline-sync';
import playGame from './index';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if number even otherwise answer "no"');
  const isNumberEven = num => (num % 2 === 0 ? 'yes' : 'no');
  const question = Math.round(Math.random() * 100);
  const correctAnswer = isNumberEven(question);
  const gameData = {
    question,
    correctAnswer,
    name,
  };
  return playGame(gameData);
};

