import readlineSync from 'readline-sync';

export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

