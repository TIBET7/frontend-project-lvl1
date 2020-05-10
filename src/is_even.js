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
  const answer = isEven(randomNum);
  return getGameData(question, String(answer));
};

const getIsEvenGame = () => runGameEngine(gameTask, runGameAction);
export default getIsEvenGame;
