const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
//     //this is mainly used in object cant be done same in functions.....
// }

// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
    let username = "hitesh"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => { //explicit return yaha return keyword ka use hua h islliye 
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "hitesh"})

//impicit return yaha return keyword ka use nhi hua h islliye 

// console.log(addTwo(3, 4));

const myArray = [2, 4, 5, 6, 7]

myArray.forEach()