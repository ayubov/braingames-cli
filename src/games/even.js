import playGame from '..';
import getRandomNumber from '../utils';

const isNumberEven = num => (num % 2 === 0 ? 'yes' : 'no');
const task = 'Answer "yes" if number even otherwise answer "no".';

export default () => {
  const gameData = () => {
    const num = getRandomNumber(100);
    const question = `${num}`;
    const correctAnswer = String(isNumberEven(num));
    return { question, correctAnswer };
  };
  return playGame(gameData, task);
};

