import { makeGameData } from '../lib/gameData.js';
import runGame from '../index.js';
import getRandomNum from '../lib/getRandomNum.js';

const gameTask = 'What is the result of the expression?';

const prepareGameData = () => {
  const operators = ['+', '-', '*'];
  const randomNum1 = getRandomNum(1, 30);
  const randomNum2 = getRandomNum(1, 30);
  const randomOperatorIndex = getRandomNum(0, operators.length - 1);
  const randomOperator = operators[randomOperatorIndex];
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
  } return makeGameData(question, String(correctAnswer));
};

const startGame = () => runGame(gameTask, prepareGameData);
export default startGame;
