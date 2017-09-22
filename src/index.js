import readlineSync from 'readline-sync';

export const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const isEvenGame = () => {
  const isNumberEven = num => (num % 2 === 0 ? 'yes' : 'no');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('Answer "yes" if number even otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const question = Math.round(Math.random() * 100);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isNumberEven(question);
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export const calcGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('What is the result of the expression?');
  const operations = {
    '*': (a, b) => a * b,
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = Math.round(Math.random() * 100);
    const secondNumber = Math.round(Math.random() * 100);
    const actualOperation = ['*', '+', '-'][Math.round(Math.random() * 2)];
    console.log(`Question: ${firstNumber} ${actualOperation} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = operations[actualOperation](firstNumber, secondNumber);
    // console.log(correctAnswer, userAnswer);
    if (correctAnswer !== Number(userAnswer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

