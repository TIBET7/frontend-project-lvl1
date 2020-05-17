import { getGameData, runGameEngine } from '../index.js';
import getRandomNumber from '../lib/getRandomNumber.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } return false;
};

const runGameAction = () => {
  const randomNum = getRandomNumber(1000);
  const question = `${randomNum}   `;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return getGameData(question, correctAnswer);
};

const getIsEvenGame = () => runGameEngine(gameTask, runGameAction);
export default getIsEvenGame;
