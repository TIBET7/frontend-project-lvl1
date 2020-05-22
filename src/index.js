import readlineSync from 'readline-sync';
import { getQuestion, getCorrectAnswer } from './lib/gameData.js';

export default (gameTask, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameTask}`);
  const getGameCore = (gameIter) => {
    const maxGameIterations = 3;
    if (gameIter === maxGameIterations) return console.log(`Congratulations, ${userName}!`);
    const data = gameData();
    const question = getQuestion(data);
    const correctAnswer = getCorrectAnswer(data);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct !');
      return getGameCore(gameIter + 1);
    } return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${userName}!`);
  }; return getGameCore(0);
};
