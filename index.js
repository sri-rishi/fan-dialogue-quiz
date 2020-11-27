var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;
var highScoreList = [
  {
    name: "Rishi", 
    score: "9"
  },
  {
    name: "Rajnish",
    score: "8"
  }
];



var userName = readlineSync.question(chalk.whiteBright("What is your name? "));

console.log(chalk.rgb(255, 136, 0)("Welcome " + userName + ", let's play Dialogue quiz."));

console.log(chalk.red("Rules"));
console.log(chalk.red("There are 10 questions"));
console.log(chalk.red("For right answer you get 1 points."));
console.log(chalk.red("for each wrong answer you will get penalised by -1"));

function dialogues(question,option,answer) {
  console.log(chalk.yellow(question));
  for(i=0;i<option.length;i++) {
    console.log(option[i]);
  }
  var userAnswer = readlineSync.question("Your Answer:");
  
  
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Right Answer!"));
    score = score + 1;
  }else{
    console.log(chalk.red("Wrong Answer!"));
    score = score - 1;
  }
  console.log("Your current score is " + score + ".");
  console.log( chalk.cyan("____________________________________"));
}

var questions = [{
  question: "'Yeh Babu Rao ka style hai' dialogue is form which movie?",                                            
  option: ["A. Bhagam Bhag","B. Hera Pheri","C. Welcome"],
  answer: "B"
},
{
  question: "'Main hu Nandu, sabka bandhu' dialogue is form which movie?",
  option: ["A. Andaaz Apna Apna", "B. Hungama", "C. Raja Babu"],
  answer: "C"
},
{
  question: "'Bhagwan ka diya hua sab kuch hai.....daulat hai shauhrat hai, izzat hai' dialogue is form which movie?",
  option: ["A. Parinda", "B. Krantiveer", "C. Welcome"],
  answer: "C"
},
{
  question: "'Dhondu just chill' dialogue is form which movie?",
  option: ["A. All the Best", "B. Golmaal:Fun Unlimited", "C. Dhamaal"],
  answer: "A"
},
{
  question: "'Woh stree hai kuch bhi kar sakti hai'  dialogue is form which movie?",
  option: ["A. Massan", "B. Stree", "C. Fukrey"],
  answer: "B"
},
{
  question: "'Control Uday. Control' dialogue is form which movie?",
  option: ["A. Dhamaal", "B. Ishq", "C. Welcome"],
  answer: "C"
},
{
  question: "'Tumhara naam kya hai Basanti?' dialogue is form which movie?",
  option: ["A. Chashme Badoor", "B. Sholey", "C. Apne"],
  answer: "B"
},
{
  question:"'Samajhta nahi hai yaar' dialogue is form which movie?",
  option: ["A. Raja Babu", "B. Bhagam Bhag", "C. Ishq"],
  answer: "A"
},
{
  question: "'Hum koi mandir ki ghanti hai ki koi bhi aake baja jata hai' dialogue is form which movie?",
  option: ["A. Dhol", "B. Chup Chup Ke", "C. Hungama"],
  answer: "C"
},
{
  question: "'Toh isse ghar kyu kahte hai, jilla ghoshit kar do', dialogue is form which movie?",
  option: ["A. Bhool Bhulaiyaa", "B. Bhagam Bhag", "C. Chup Chup Ke"],
  answer: "C"
}]



for(var j=0; j<questions.length; j++) {
  var currentQuestion = questions[j];
  
  dialogues(currentQuestion.question,currentQuestion.option,  currentQuestion.answer);
}
console.log("High Score: ")
for(var i=0; i<highScoreList.length; i++) {
  console.log(highScoreList[i].name);
  console.log(highScoreList[i].score);  
};

console.log(chalk.bgYellow("Dislaimer: If you have beaten the high score. Send me screenshot"));