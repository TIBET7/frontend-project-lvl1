import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello, '}${userName}${'!'}`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3;) {
    const randomNum1 = Math.floor(Math.random() * 10);
    const randomNum2 = Math.floor(Math.random() * 10);
    const arr = ['+', '-', '*'];
    const randomOperator = arr[Math.floor(Math.random() * arr.length)];
    const userAnswer = readlineSync.question(`Question: ${randomNum1}${randomOperator}${randomNum2}  `);
    const correctAnswer = eval(`${randomNum1}${randomOperator}${randomNum2}`);
    if (Number(userAnswer) === correctAnswer) {
      console.log(`Your answer: ${userAnswer}`);
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};
