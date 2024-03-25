const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros[3][0]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//*spread operator (kaach ka geelas) "..."
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

//flat operator: will open arrays under arrays and will add in new array with all values open and easily accessable...

const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);

// console.log(Array.isArray("hitesh"))
// console.log(Array.from("hitesh"))

console.log(Array.from({ name: "hitesh" })); //interesting ye ek empty array dega cause isse pata hee nhi ki array kiska banana h

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));