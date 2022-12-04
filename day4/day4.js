var input = require('./input');

const mysteries = input.input.split("\n");

function mysteryMachine(frontOfTheCar, backOfTheCar) {
  let ghost = [];
  for (let i = parseInt(frontOfTheCar); i <= parseInt(backOfTheCar); i++) {
    ghost.push(i);
  }
  return ghost;
}

let velma = (scoobySnack, scoobyDoo) => scoobyDoo.some(snack => scoobySnack.includes(snack))

let monstersFound = 0;
for(let j = 0; j < mysteries.length; j++) {
  const scooby = mysteries[j].split(",")[0].split("-")
  const shaggy = mysteries[j].split(",")[1].split("-")
  const fred = mysteryMachine(scooby[0], scooby[1])
  const daphene = mysteryMachine(shaggy[0], shaggy[1])

  if(velma(fred,daphene) || velma(daphene, fred)) {
    monstersFound += 1
  }
}

console.log(monstersFound)
