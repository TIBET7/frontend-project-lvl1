import { getGameData, runGameEngine } from '../index.js';
import getRandomNumber from '../lib/getRandomNumber.js';

const gameTask = 'What is the result of the expression?';

const runGameAction = () => {
  const randomNum1 = getRandomNumber(30);
  const randomNum2 = getRandomNumber(30);
  let addition;
  let substraction;
  let multiplication;
  const operations = [addition, substraction, multiplication];
  const randomNumForOperator = getRandomNumber(operations.length);
  let question;
  let correctAnswer;
  switch (randomNumForOperator) {
    case 0:
      question = `${randomNum1} + ${randomNum2}`;
      correctAnswer = randomNum1 + randomNum2;
      getGameData(question, String(correctAnswer));
      break;
    case 1:
      question = `${randomNum1} - ${randomNum2}`;
      correctAnswer = randomNum1 - randomNum2;
      getGameData(question, String(correctAnswer));
      break;
    case 2:
      question = `${randomNum1} * ${randomNum2}`;
      correctAnswer = randomNum1 * randomNum2;
      getGameData(question, String(correctAnswer));
      break;
    default:
      break;
  } return getGameData(question, String(correctAnswer));
};

const getCalcGame = () => runGameEngine(gameTask, runGameAction);
export default getCalcGame;
