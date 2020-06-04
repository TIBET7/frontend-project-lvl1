import { makeGameData } from '../lib/gameData.js';
import runGame from '../index.js';
import getRandomNum from '../lib/getRandomNum.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const prepareGameData = () => {
  const randomNum1 = getRandomNum(1, 100);
  const randomNum2 = getRandomNum(1, 100);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = gcd(randomNum1, randomNum2);
  return makeGameData(question, String(correctAnswer));
};

const startGame = () => runGame(gameTask, prepareGameData);
export default startGame;
