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

// console.log(typeof heros);

//+++++++++++++=++++

//stack, heap

// stack m copy milti h or heap m reference of original value. So, if you change a value in stasck the OG will not be disturbed...But in heap it'll

let myYoutubename = "ashvalekh"

let anotherName = myYoutubename
anotherName = "teri tehrvi"
console.log(anotherName);
console.log(myYoutubename);

let userOne = {
    name : "ashu",
    upiId : "ashu@ybl"
}

let userTwo = userOne
userTwo.name = "arjun"
console.log(userTwo);
console.log(userOne);