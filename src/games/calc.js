import { getGameData, runGameEngine } from '../index.js';
import getRandomNumber from '../lib/getRandomNumber.js';

const gameTask = 'What is the result of the expression?';

const getRandomOperator = () => {
  let addition;
  let substraction;
  let multiplication;
  let randomOperator;
  const operations = [addition, substraction, multiplication];
  const randomNumForOperator = getRandomNumber(operations.length);
  switch (randomNumForOperator) {
    case 0:
      randomOperator = '+';
      break;
    case 1:
      randomOperator = '-';
      break;
    case 2:
      randomOperator = '*';
      break;
    default:
      break;
  } return randomOperator;
};

const prepareGameData = () => {
  const randomNum1 = getRandomNumber(30);
  const randomNum2 = getRandomNumber(30);
  const randomOperator = getRandomOperator();
  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
  let correctAnswer;
  switch (randomOperator) {
    case '+':
      correctAnswer = randomNum1 + randomNum2;
      break;
    case '-':
      correctAnswer = randomNum1 - randomNum2;
      break;
    case '*':
      correctAnswer = randomNum1 * randomNum2;
      break;
    default:
      break;
  } return getGameData(question, String(correctAnswer));
};

const runCalcGame = () => runGameEngine(gameTask, prepareGameData);
export default runCalcGame;
