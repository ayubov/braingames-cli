#!/usr/bin/env node

// import { calcGame as playGame } from '..';
import readlineSync from 'readline-sync';

const calcGame = () => {
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
    if (correctAnswer !== Number(userAnswer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

calcGame();
