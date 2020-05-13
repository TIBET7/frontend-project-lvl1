import { getGameData, runGameEngine } from './index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

const runGameAction = () => {
  const randomNum = Math.floor(Math.random() * 1000);
  const question = `${randomNum}   `;
  const correctAnswer = isEven(randomNum);
  return getGameData(question, correctAnswer);
};

const getIsEvenGame = () => runGameEngine(gameTask, runGameAction);
export default getIsEvenGame;
