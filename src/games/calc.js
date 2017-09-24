import playGame from '..';

export default () => {
  const gameData = () => {
    const operations = {
      '*': (a, b) => a * b,
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
    };
    const [num1, num2] = [Math.round(Math.random() * 100), Math.round(Math.random() * 100)];
    const actualOperation = ['*', '+', '-'][Math.round(Math.random() * 2)];
    const question = `${num1} ${actualOperation} ${num2}`;
    const correctAnswer = operations[actualOperation](num1, num2);
    const task = 'What is the result of the expression?';
    return { question, correctAnswer, task };
  };
  return playGame(gameData);
};

