const chalk = require("chalk");

var readlineSync = require('readline-sync');

var userName = readlineSync.question('What is your name ? ');

var score = 0;

console.log("***********************************************")

console.log("Welcome " + userName + " to DO YOU KNOW Anshul")


console.log("***********************************************")

console.log(chalk.red('Rules & Instructions: '));
console.log('1.', userName + ', There are 5 Questions on Anshul and all are Compulsory.');
console.log('2. You will get 1 points on each Right Answer.');
console.log('3. One Point will be deducted if the Answer is Wrong.');

console.log("--------------------------------------------------------")


// function play

function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yes, your are right")
    score = score + 1;
  } else {
    console.log("Oops! you are worng")

  }
  console.log(chalk.red("---------------------------------"))
  console.log(chalk.red("current score: " + score))
}

var questionOne = {
  question: " 1 . Where do I live? ",
  answer: "INDORE"
}

var questionTwo = {
  question: "2. What is my favorite food? ",
  answer: "PIZZA"
}

var questionThree = {
  question: "3. Who is my fav bollywood actor? ",
  answer: "SHAHRUKH KHAN"
}

var questionFour = {
  question: "4 .Which is my favourite sad song? ",
  answer: "CHANNA MEREYA"
}

var questionFive = {
  question: " 5. Which is my favorite cafe in Indore for coffee? ",
  answer: "STARBUCKS"
}

var question = [questionOne, questionTwo, questionThree, questionFour, questionFive]

// loop 
for (let i = 0; i < question.length; i++) {
  var currentQuestion = question[i]
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.blue("******************************************"))

console.log(chalk.blue("Your Final score is " + score))

if (score < 3) {
  console.log(chalk.blue("You should hangout more with Anshul"))
} else {
  console.log(chalk.blue("Well, you know him well"))
}