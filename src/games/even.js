import playGame from '..';

export default () => {
  const gameData = () => {
    const isNumberEven = num => (num % 2 === 0 ? 'yes' : 'no');
    const num = Math.round(Math.random() * 100);
    const question = `${num}`;
    const correctAnswer = isNumberEven(num);
    return { question, correctAnswer };
  };
  return playGame(gameData);
};

