import { makeGameData } from '../lib/gameData.js';
import runGame from '../index.js';
import getRandomNum from '../lib/getRandomNum.js';

const gameTask = 'What number is missing in the progression?';

const getProgression = (basicNum, progressionStep, progressionLength) => {
  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    result[i] = basicNum + i * progressionStep;
  } return result;
};

const prepareGameData = () => {
  const progressionLength = 10;
  const progressionFirstNum = getRandomNum(1, 20);
  const randomProgressionStep = getRandomNum(1, 10);
  const randomNumIndex = getRandomNum(1, progressionLength - 1);
  const progression = getProgression(progressionFirstNum, randomProgressionStep, progressionLength);
  const correctAnswer = progression[randomNumIndex];
  progression[randomNumIndex] = '..';
  const question = String(progression.join(' '));
  return makeGameData(question, String(correctAnswer));
};

const startGame = () => runGame(gameTask, prepareGameData);
export default startGame;
