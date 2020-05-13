import { getGameData, runGameEngine } from './index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  } return 'yes';
};

const runGameAction = () => {
  const randomNum = Math.floor(Math.random() * 100);
  const question = `${randomNum}   `;
  const correctAnswer = isPrime(randomNum);
  return getGameData(question, correctAnswer);
};

const getIsPrimeGame = () => runGameEngine(gameTask, runGameAction);
export default getIsPrimeGame;
