var input = require('./input');

const moves = input.input.split("\n");

const stacks = [
['L', 'N', 'W', 'T', 'D'],
['C', 'P', 'H'],
['W', 'P', 'H', 'N', 'D', 'G', 'M', 'J'],
['C', 'W', 'S', 'N', 'T', 'Q', 'L'],
['P', 'H', 'C', 'N'],
['T', 'H', 'N', 'D', 'M', 'W', 'Q', 'B'],
['M', 'B', 'R', 'J', 'G', 'S', 'L'],
['Z', 'N', 'W', 'G', 'V', 'B', 'R', 'T'],
['W', 'G', 'D', 'N', 'P', 'L'],
]


// Part 1
// for(let i = 0; i < moves.length; i++) {
  // let move = moves[i];
  // let times = move.replace("move ", "").split(" from ")

  // for(let j = 0; j < parseInt(times[0]); j++) {
    // let movingStacks = times[1].split(" to ")
    // stacks[parseInt(movingStacks[1]) - 1].push(stacks[parseInt(movingStacks[0]) - 1].pop())
  // }
// }


//Part 2
for(let i = 0; i < moves.length; i++) {
  let move = moves[i];
  let times = move.replace("move ", "").split(" from ")
  let movingStacks = times[1].split(" to ")
  let copyOfSplicedArray = JSON.parse(JSON.stringify(stacks[parseInt(movingStacks[0]) - 1]))
  let otherStack = stacks[parseInt(movingStacks[0]) - 1].splice(copyOfSplicedArray.length - parseInt(times[0]), copyOfSplicedArray.length)
  stacks[parseInt(movingStacks[1]) - 1] = stacks[parseInt(movingStacks[1]) - 1].concat(otherStack)
}
console.log(stacks.map(item => item[item.length-1]).join(''))
console.log(stacks)
