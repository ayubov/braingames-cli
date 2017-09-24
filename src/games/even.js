import playGame from '..';
import getRandomNumber from '../utils';

export default () => {
  const isNumberEven = num => (num % 2 === 0 ? 'yes' : 'no');
  const task = 'Answer "yes" if number even otherwise answer "no".';
  const gameData = () => {
    const num = getRandomNumber(100);
    const question = `${num}`;
    const correctAnswer = isNumberEven(num);
    return { question, correctAnswer, task };
  };
  return playGame(gameData);
};

