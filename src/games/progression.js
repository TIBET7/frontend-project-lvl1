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
  const randomNum1 = getRandomNumber(20);
  const randomProgressionStep = getRandomNumber(10);
  const randomHiddenNum = getRandomNumber(progressionLength);
  const progression = getProgression(randomNum1, randomProgressionStep, progressionLength);
  const correctAuxiliaryAnswer = progression[randomHiddenNum];
  progression[randomHiddenNum] = '..';
  const questionProgression = progression.join(' ');
  const question = String(questionProgression);
  const correctAnswer = correctAuxiliaryAnswer;
  return getGameData(question, String(correctAnswer));
};

const runProgressionGame = () => runGameEngine(gameTask, prepareGameData);
export default runProgressionGame;
