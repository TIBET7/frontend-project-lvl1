import { makeGameData } from '../lib/gameData.js';
import runGame from '../index.js';
import getRandomNum from '../lib/getRandomNum.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  } return true;
};

const prepareGameData = () => {
  const randomNum = getRandomNum(1, 100);
  const question = String(randomNum);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return makeGameData(question, correctAnswer);
};

const startGame = () => runGame(gameTask, prepareGameData);
export default startGame;
