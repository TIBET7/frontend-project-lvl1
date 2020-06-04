import readlineSync from 'readline-sync';
import { makeQuestion, makeCorrectAnswer } from './lib/gameData.js';

export default (gameTask, makeGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameTask}`);
  const maxGameIterationsCount = 3;
  const playRound = (gameIter) => {
    if (gameIter === maxGameIterationsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const gameData = makeGameData();
    const question = makeQuestion(gameData);
    const correctAnswer = makeCorrectAnswer(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct !');
      playRound(gameIter + 1);
      return;
    } console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
  }; playRound(0);
};
