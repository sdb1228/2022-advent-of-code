var input = require('./input');

// A is Rock
// B is Paper
// C is Scicorsaksldjaskdjf
//
// X Lose
// Y Tie
// Z Win

// console.log(throwScore)

// const arrayOfthrows = input.input.split("\n");
// let totalScore = 0;

// for(let i = 0; i < arrayOfthrows.length; i++){
  // totalScore = throwScore[arrayOfthrows[i][2]] + totalScore
  // if (arrayOfthrows[i][0] === opponentThrowTranslator[arrayOfthrows[i][2]]) {
   // totalScore += 3
  // } else if (arrayOfthrows[i][0] === "A" && arrayOfthrows[i][2] === "Y") {
   // totalScore += 6
  // } else if (arrayOfthrows[i][0] === "B" && arrayOfthrows[i][2] === "Z") {
   // totalScore += 6
  // } else if (arrayOfthrows[i][0] === "C" && arrayOfthrows[i][2] === "X") {
   // totalScore += 6
  // }
// }

// console.log(totalScore)
//
//
//

const gameScore = {"Y": 3, "X": 0, "Z": 6}
const opponentThrowScore = {"B": 2, "A": 1, "C": 3}
const opponentThrowTranslator = {"A": "C", "B": "A", "C": "B"}
const opponentThrowTranslatorInverse = {"C": "A", "A": "B", "B": "C"}


const arrayOfthrows = input.input.split("\n");
let totalScore = 0;


for(let i = 0; i < arrayOfthrows.length; i++){
  totalScore += gameScore[arrayOfthrows[i][2]]

  if(arrayOfthrows[i][2] === "Y") {
    totalScore += opponentThrowScore[arrayOfthrows[i][0]]
  } else if (arrayOfthrows[i][2] === "X") {
    totalScore += opponentThrowScore[opponentThrowTranslator[arrayOfthrows[i][0]]]
  } else if (arrayOfthrows[i][2] === "Z") {
    totalScore += opponentThrowScore[opponentThrowTranslatorInverse[arrayOfthrows[i][0]]]
  }
}

console.log(totalScore)







