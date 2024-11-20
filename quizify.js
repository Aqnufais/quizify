/*quizfy */
let readlineSync = require("readline-sync");
let score = 0;
let userName = readlineSync.question("What is your name? ");

const database = {
  data: [
    {
      question: `let a = {}, b = {}
      console.log(a == b)
      console.log(a === b)`,
      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true",
      },
      correctAnswer: "a",
    },
    {
      question: `object.assign(target,source) creates which type of copy?`,
      options: {
        a: "Deep Copy",
        b: "Shallow Copy",
        c: "Nested Copy",
        d: "Creates a new reference",
      },
      correctAnswer: "b",
    },
    {
      question: `Is method chaining possible with forEach?`,
      options: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "b",
    },
  ],
};

/*leader board */

const leaderBoard = {
  data: [
    {
      name: "Rohit",
      score: 10,
    },
    {
      name: "Maya",
      score: 5,
    },
    {
      name: "Nufais",
      score: 15,
    },
  ],
};

/*Main logic*/

function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log("yay! you are right");
    score = score + 5;
  } else {
    console.log("better luck next time");
    console.log(`correct answer is ${correctAnswer}`);
  }
}

function showQuestionsAndOptions() {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i + 1} - ${database.data[i].question}\n`);
    for (let key in database.data[i].options) {
      console.log(`${key} - ${database.data[i].options[key]}`);
    }
    let userAnswer = readlineSync
      .question("Enter your answer (a/b/c/d) - ")
      .toLowerCase();
    playGame(userAnswer, database.data[i].correctAnswer);
  }
}

function highScore(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log("\nCheck your position on the leaderboard\n")
  for ( let leader of sortedScoreList){
    console.log(`${leader.name} - Score: ${leader.score}`)
  }
}

showQuestionsAndOptions(database);
console.log("\nyour score is",score);
highScore(leaderBoard)