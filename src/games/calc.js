import { getGameData, runGameEngine } from '../index.js';
import getRandomNumber from '../lib/getRandomNumber.js';

const gameTask = 'What is the result of the expression?';

const prepareGameData = () => {
  let addition;
  let substraction;
  let multiplication;
  const operations = [addition, substraction, multiplication];
  const randomNum1 = getRandomNumber(1, 30);
  const randomNum2 = getRandomNumber(1, 30);
  const randomOperator = getRandomNumber(0, operations.length);
  let question;
  let correctAnswer;
  switch (randomOperator) {
    case 0:
      question = `${randomNum1} + ${randomNum2}`;
      correctAnswer = randomNum1 + randomNum2;
      break;
    case 1:
      question = `${randomNum1} - ${randomNum2}`;
      correctAnswer = randomNum1 - randomNum2;
      break;
    case 2:
      question = `${randomNum1} * ${randomNum2}`;
      correctAnswer = randomNum1 * randomNum2;
      break;
    default:
      break;
  } return getGameData(question, String(correctAnswer));
};

const runCalcGame = () => runGameEngine(gameTask, prepareGameData);
export default runCalcGame;
