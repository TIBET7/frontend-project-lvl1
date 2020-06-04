import pairs from '@hexlet/pairs';

const { cons, car, cdr } = pairs;

export const makeGameData = (question, correctAnswer) => cons(question, correctAnswer);
export const makeQuestion = (gameData) => car(gameData);
export const makeCorrectAnswer = (gameData) => cdr(gameData);
