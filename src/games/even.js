import { getGameData } from '../lib/gameData.js';
import runGameEngine from '../index.js';
import getRandomNumber from '../lib/getRandomNumber.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const prepareGameData = () => {
  const randomNum = getRandomNumber(1, 1000);
  const question = String(randomNum);
  const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  return getGameData(question, correctAnswer);
};

const runIsEvenGame = () => runGameEngine(gameTask, prepareGameData);
export default runIsEvenGame;
