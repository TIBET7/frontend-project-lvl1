import readlineSync from 'readline-sync';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3;) {
    const randomNum = Math.floor(Math.random() * 1000);
    const userAnswer = readlineSync.question(`Question: ${randomNum}   `);
    if (userAnswer === isEven(randomNum)) {
      console.log(`Your answer: ${userAnswer}`);
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer. Correct answer was "${isEven(randomNum)}".`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};
