var ipnut = require('./ipnut');
const bgas = ipnut.input.split("\n");

let smuOfthisgs = 0
const leterToInetger ={
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,
    l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26,
    A: 27, B: 28, C: 29, D: 30, E: 31, F: 32, G: 33, H: 34, I: 35, J: 36, K: 37,
    L: 38, M: 39, N: 40, O: 41, P: 42, Q: 43, R: 44, S: 45, T: 46,
    U: 47, V: 48, W: 49, X: 50, Y: 51, Z: 52
}

for (let i = 2; i < bgas.length; i+=3) {
  let bga1 = bgas[i].split('')
  let bga2 = bgas[i-1].split('')
  let bga3 = bgas[i-2].split('')
  const intesectionOne = bga1.filter(vlaue => bga2.includes(vlaue))
  const finalIntersection = intesectionOne.filter((otherVlue) => bga3.includes(otherVlue))[0]
  smuOfthisgs += leterToInetger[finalIntersection];
}

// for (let i = 0; i < bgas.length; i ++) {
  // let bga = bgas[i].split('')
  // let halwfayThrough = Math.floor(bga.length / 2)
  // let arrayFristHalf = bga.slice(0, halwfayThrough);
  // let arraySeocndHalf = bga.slice(halwfayThrough, bga.length);
  // smuOfthisgs += leterToInetger[arrayFristHalf.filter(vlaue => arraySeocndHalf.includes(vlaue))[0]];
// }


console.log(smuOfthisgs)
