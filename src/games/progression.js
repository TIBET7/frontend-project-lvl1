import { getGameData, runGameEngine } from '../index.js';
import getRandomNumber from '../lib/getRandomNumber.js';

const gameTask = 'What number is missing in the progression?';

const getProgression = (basicNum, progressionStep, progressionLength) => {
  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    result[i] = basicNum + i * progressionStep;
  } return result;
};

const prepareGameData = () => {
  const progressionLength = 10;
  const randomNum1 = getRandomNumber(1, 20);
  const randomProgressionStep = getRandomNumber(1, 10);
  const randomHiddenNum = getRandomNumber(1, progressionLength);
  const progression = getProgression(randomNum1, randomProgressionStep, progressionLength);
  const correctAnswer = progression[randomHiddenNum];
  progression[randomHiddenNum] = '..';
  const question = String(progression.join(' '));
  return getGameData(question, String(correctAnswer));
};

const runProgressionGame = () => runGameEngine(gameTask, prepareGameData);
export default runProgressionGame;
