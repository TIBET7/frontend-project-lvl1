import { makeGameData } from '../lib/gameData.js';
import runGame from '../index.js';
import getRandomNum from '../lib/getRandomNum.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const prepareGameData = () => {
  const randomNum = getRandomNum(1, 1000);
  const question = String(randomNum);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return makeGameData(question, correctAnswer);
};

const startGame = () => runGame(gameTask, prepareGameData);
export default startGame;
