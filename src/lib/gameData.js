import pairs from '@hexlet/pairs';

const { cons, car, cdr } = pairs;


export const getGameData = (question, correctAnswer) => cons(question, correctAnswer);
export const getQuestion = (gameData) => car(gameData);
export const getCorrectAnswer = (gameData) => cdr(gameData);
