import playGame from '..';
import getRandomNumber from '../utils';

export default () => {
  const gameData = () => {
    const isNumberEven = num => (num % 2 === 0 ? 'yes' : 'no');
    const num = getRandomNumber(100);
    const question = `${num}`;
    const correctAnswer = isNumberEven(num);
    const task = 'Answer "yes" if number even otherwise answer "no".';
    return { question, correctAnswer, task };
  };
  return playGame(gameData);
};

