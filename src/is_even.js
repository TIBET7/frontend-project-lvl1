import readlineSync from 'readline-sync';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`${'Hello, '}${userName}${'!'}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

export default () => {
  let randomNum = Math.floor(Math.random() * 1000);
  let userAnswer = readlineSync.question(`${'Question: '}${randomNum}${'   '}`);
  console.log(`${'Your answer: '}${userAnswer}`);
  if (userAnswer === isEven(randomNum)) {
    console.log('Correct!');
    randomNum = Math.floor(Math.random() * 1000);
    userAnswer = readlineSync.question(`${'Question: '}${randomNum}${'   '}`);
    console.log(`${'Your answer: '}${userAnswer}`);
    if (userAnswer === isEven(randomNum)) {
      console.log('Correct!');
      randomNum = Math.floor(Math.random() * 1000);
      userAnswer = readlineSync.question(`${'Question: '}${randomNum}${'   '}`);
      console.log(`${'Your answer: '}${userAnswer}`);
      if (userAnswer === isEven(randomNum)) {
        console.log('Correct!');
        console.log(`${'Congratulations, '}${userName}${'!'}`);
        return true;
      } console.log(`${'"'}${userAnswer}${'"'}${' is wrong answer. Correct answer was '}${'"'}${isEven(randomNum)}${'"'}`);
      console.log(`${"Let's try again, "}${userName}${'!'}`);
      return false;
    } console.log(`${'"'}${userAnswer}${'"'}${' is wrong answer. Correct answer was '}${'"'}${isEven(randomNum)}${'"'}`);
    console.log(`${"Let's try again, "}${userName}${'!'}`);
    return false;
  } console.log(`${'"'}${userAnswer}${'"'}${' is wrong answer. Correct answer was '}${'"'}${isEven(randomNum)}${'"'}`);
  console.log(`${"Let's try again, "}${userName}${'!'}`);
  return false;
};
