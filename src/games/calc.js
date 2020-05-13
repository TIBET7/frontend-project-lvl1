import { getGameData, runGameEngine } from '../index.js';

const gameTask = 'What is the result of the expression?';

const runGameAction = () => {
  const randomNum1 = Math.floor(Math.random() * 30);
  const randomNum2 = Math.floor(Math.random() * 30);
  const randomNumForOperator = Math.floor(Math.random() * 3);
  if (randomNumForOperator === 0) {
    const question = `${randomNum1} + ${randomNum2}`;
    const correctAnswer = randomNum1 + randomNum2;
    return getGameData(question, String(correctAnswer));
  } if (randomNumForOperator === 1) {
    const question = `${randomNum1} - ${randomNum2}`;
    const correctAnswer = randomNum1 - randomNum2;
    return getGameData(question, String(correctAnswer));
  } const question = `${randomNum1} * ${randomNum2}`;
  const correctAnswer = randomNum1 * randomNum2;
  return getGameData(question, String(correctAnswer));
};

const getCalcGame = () => runGameEngine(gameTask, runGameAction);
export default getCalcGame;
