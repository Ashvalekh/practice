// for of
// array specific loop

// ["",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(greet);
}

//Maps: thoda array jaisa hee hota h, known for unique values if you declare one thing one more time it will not take it 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, Value] of map) {
    // console.log(key, ':-', Value);
}

const myObject = {
    "game1": "NFS",
    "game2" : "Spiderman"
}
// //toh object iterable nhi hote
// for (const [key, Value] of myObject) {
//     console.log(key, ':-', Value);
// }