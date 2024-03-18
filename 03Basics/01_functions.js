

// function sayMyName() {
//   console.log("A");
//   console.log("S");
//   console.log("H");
//   console.log("U");
// }

// sayMyName() // "sayMyName" will be reference and if i want to execute it use parentheis"()" 

// const addition  = function addTwoNumbers(number1, number2){
//     return number1 + number2;
// }

// let add = addition(3, 4);
// console.log(add);

function addTwoNumbers(number1, number2){
    // console.log(number1 + number2);
}

addTwoNumbers(4, "5")


function loginUserMessage(username){
    // toh in case kissi ne naam likha hee nhi then???
    if (username === undefined) {
        console.log("please enter a username");// output k saath ara h undefined just looged in to remove that use return here
        return
    }
    return `${username} just logged in `
}

console.log(loginUserMessage())

