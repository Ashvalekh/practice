// #primitive

//7 types Strings, Number, Boolean, null, undefined, Symbol, BigInt, 

//Symbol

// const id = Symbol("123")
// const anotherId = Symbol("123")

// console.log(id != anotherId);



// reference type (Non primitive)

//Array, Objects, Functions
// the data types of all reference type is object, a function's typesOf is object function

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "hiesh",
    age: 22
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof heros);