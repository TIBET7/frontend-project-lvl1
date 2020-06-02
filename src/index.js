import readlineSync from 'readline-sync';
import { getQuestion, getCorrectAnswer } from './lib/gameData.js';

export default (gameTask, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameTask}`);
  const runGameIter = (gameIter) => {
    const maxGameIterationsCount = 3;
    if (gameIter === maxGameIterationsCount) return console.log(`Congratulations, ${userName}!`);
    const gameData = getGameData();
    const question = getQuestion(gameData);
    const correctAnswer = getCorrectAnswer(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct !');
      return runGameIter(gameIter + 1);
    } return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${userName}!`);
  }; return runGameIter(0);
};
