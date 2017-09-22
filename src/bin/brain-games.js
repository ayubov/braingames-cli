#!/usr/bin/env node

// import { sayHello as playGame } from '..';
import readlineSync from 'readline-sync';

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

sayHello();
