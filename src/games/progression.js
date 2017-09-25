import playGame from '..';
import getRandomNumber from '../utils';

const totalLength = 10;
const makeProgression = (current, step) => (current.length === totalLength ?
  current : makeProgression([...current, current.slice(-1)[0] + step], step));

const hideElement = (arr, targetElement) => arr
  .reduce((acc, e, index) => (index !== targetElement ? acc.concat(e) : acc.concat('..')), [])
  .join(' ');

const task = 'What number is missing in this progression?';

export default () => {
  const gameData = () => {
    const startOfProgression = [getRandomNumber(100)];
    const step = getRandomNumber(10);
    const invisibleNumberIndex = getRandomNumber(10);
    const fullProgression = makeProgression(startOfProgression, step);
    const question = `${hideElement(fullProgression, invisibleNumberIndex)}`;
    const correctAnswer = String(fullProgression[invisibleNumberIndex]);
    return { question, correctAnswer };
  };
  return playGame(gameData, task);
};
