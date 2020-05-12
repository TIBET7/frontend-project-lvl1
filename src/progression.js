import { getGameData, runGameEngine } from './index.js';

const gameTask = 'What number is missing in the progression?';

const getProgression = (num1, num2) => {
  const result = [num1, num2];
  const diff = num2 - num1;
  for (let i = 1; i < 9; i += 1) {
    result.push(result[i] + diff);
  } return result;
};

const runGameAction = () => {
  const randomNum1 = Math.floor(Math.random() * 20);
  const randomNum2 = Math.floor(Math.random() * 20);
  const randomHiddenNum = Math.abs(Math.floor(Math.random() * 9));
  const randomProgression = getProgression(randomNum1, randomNum2);
  const correctAnswer = randomProgression[randomHiddenNum];
  randomProgression[randomHiddenNum] = '..';
  const questionProgression = randomProgression.join(' ');
  const question = `${questionProgression}`;
  const answer = correctAnswer;
  return getGameData(question, String(answer));
};

const getProgressionGame = () => runGameEngine(gameTask, runGameAction);
export default getProgressionGame;
