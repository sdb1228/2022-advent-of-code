var input = require('./input');

const throwScore = {"Y": 2, "X": 1, "Z": 3}
const opponentThrowTranslator = {"Y": "B", "X": "A", "Z": "C"}

// A is Rock
// B is Paper
// C is Scicorsaksldjaskdjf
//
// X
// Y
// Z

console.log(throwScore)

const arrayOfthrows = input.input.split("\n");
let totalScore = 0;

for(let i = 0; i < arrayOfthrows.length; i++){
  totalScore = throwScore[arrayOfthrows[i][2]] + totalScore
  if (arrayOfthrows[i][0] === opponentThrowTranslator[arrayOfthrows[i][2]]) {
   totalScore += 3
  } else if (arrayOfthrows[i][0] === "A" && arrayOfthrows[i][2] === "Y") {
   totalScore += 6
  } else if (arrayOfthrows[i][0] === "B" && arrayOfthrows[i][2] === "Z") {
   totalScore += 6
  } else if (arrayOfthrows[i][0] === "C" && arrayOfthrows[i][2] === "X") {
   totalScore += 6
  }
}

console.log(totalScore)
