import readlineSync from 'readline-sync';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

export default () => {
  let userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello, '}${userName}${'!'}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNum = Math.floor(Math.random() * 1000);
  const userAnswer = readlineSync.question(`${'Question: '}${randomNum}${'   '}`);
  console.log(`${'Your answer: '}${userAnswer}`);
  if (userAnswer === isEven(randomNum)) {
    console.log('Correct!');
    const randomNum = Math.floor(Math.random() * 1000);
    const userAnswer = readlineSync.question(`${'Question: '}${randomNum}${'   '}`);
    console.log(`${'Your answer: '}${userAnswer}`);
    if (userAnswer === isEven(randomNum)) {
      console.log('Correct!');
      const randomNum = Math.floor(Math.random() * 1000);
      const userAnswer = readlineSync.question(`${'Question: '}${randomNum}${'   '}`);
      console.log(`${'Your answer: '}${userAnswer}`);
      if (userAnswer === isEven(randomNum)) {
        console.log('Correct!');
        console.log(`${'Congratulations, '}${userName}${'!'}`);
        return true;
      }if (userAnswer === 'yes') {
        console.log(`${'"'}${userAnswer}${'"'}${' is wrong answer. Correct answer was "no".'}`);
        console.log(`${"Let's try again, "}${userName}${'!'}`);
        return false;
      } if (userAnswer === 'no') {
        console.log(`${'"'}${userAnswer}${'"'}${' is wrong answer. Correct answer was "yes".'}`);
        console.log(`${"Let's try again, "}${userName}${'!'}`);
        return false;
      } console.log(`${'"'}${userAnswer}${'"'}${' is wrong answer.'}`);
      console.log(`${"Let's try again, "}${userName}${'!'}`);
      return false;
    } if (userAnswer === 'yes') {
      console.log(`${'"'}${userAnswer}${'"'}${' is wrong answer. Correct answer was "no".'}`);
      console.log(`${"Let's try again, "}${userName}${'!'}`);
      return false;
    } if (userAnswer === 'no') {
      console.log(`${'"'}${userAnswer}${'"'}${' is wrong answer. Correct answer was "yes".'}`);
      console.log(`${"Let's try again, "}${userName}${'!'}`);
      return false;
    } console.log(`${'"'}${userAnswer}${'"'}${' is wrong answer.'}`);
    console.log(`${"Let's try again, "}${userName}${'!'}`);
    return false;
  } if (userAnswer === 'yes') {
    console.log(`${'"'}${userAnswer}${'"'}${' is wrong answer. Correct answer was "no".'}`);
    console.log(`${"Let's try again, "}${userName}${'!'}`);
    return false;
  } if (userAnswer === 'no') {
    console.log(`${'"'}${userAnswer}${'"'}${' is wrong answer. Correct answer was "yes".'}`);
    console.log(`${"Let's try again, "}${userName}${'!'}`);
    return false;
  } console.log(`${'"'}${userAnswer}${'"'}${' is wrong answer.'}`);
  console.log(`${"Let's try again, "}${userName}${'!'}`);
  return false;
};
