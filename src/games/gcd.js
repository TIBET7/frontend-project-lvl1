import { getGameData, runGameEngine } from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const runGameAction = () => {
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = gcd(randomNum1, randomNum2);
  return getGameData(question, String(correctAnswer));
};

const getGcdGame = () => runGameEngine(gameTask, runGameAction);
export default getGcdGame;
