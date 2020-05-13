import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';

const { cons, car, cdr } = pairs;


export const getGameData = (question, correctAnswer) => cons(question, correctAnswer);
const getQuestion = (gameData) => car(gameData);
const getCorrectAnswer = (gameData) => cdr(gameData);

export const runGameEngine = (gameTask, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameTask}`);
  const getGameCore = (gameIter) => {
    if (gameIter === 3) return console.log(`Congratulations, ${userName}!`);
    const data = gameData();
    const question = getQuestion(data);
    const correctAnswer = getCorrectAnswer(data);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct !');
      return getGameCore(gameIter + 1);
    } return console.log(`"${userAnswer}" is wrong answer. Correct answer was "${correctAnswer}". \nLet's try again, ${userName}!`);
  }; return getGameCore(0);
};
