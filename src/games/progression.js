import { getGameData, runGameEngine } from '../index.js';
import getRandomNumber from '../lib/getRandomNumber.js';

const gameTask = 'What number is missing in the progression?';

const getProgression = (basicNum, progressionStep, progressionLength) => {
  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    result[i] = basicNum + i * progressionStep;
  } return result;
};

const runGameAction = () => {
  const progressionLength = 10;
  const randomNum1 = getRandomNumber(20);
  const randomprogressionStep = getRandomNumber(10);
  const randomHiddenNum = getRandomNumber(progressionLength);
  const randomProgression = getProgression(randomNum1, randomprogressionStep, progressionLength);
  const correctAuxiliaryAnswer = randomProgression[randomHiddenNum];
  randomProgression[randomHiddenNum] = '..';
  const questionProgression = randomProgression.join(' ');
  const question = `${questionProgression}`;
  const correctAnswer = correctAuxiliaryAnswer;
  return getGameData(question, String(correctAnswer));
};

const getProgressionGame = () => runGameEngine(gameTask, runGameAction);
export default getProgressionGame;
