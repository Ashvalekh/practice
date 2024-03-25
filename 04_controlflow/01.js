//if statement
const isUserLoggedIn = true

if(isUserLoggedIn){

}

/* comparison operators 
less than: <
greater than: >
equal or not: ==
lessequal: <=
greaterEqual: >=
!=: not equal*/

// let temp = 78;
// if (temp < 50){
//     console.log("bohot hee garam h");
// }
// else{
//     console.log(`thandi hori h bhai`);
// }

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// const balance = 1000;

// // if (balance > 500) console.log("test"), console.log('test2'); ye nhi karna h 

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 950){
//     console.log("less than 750");
// }
// else{
//     console.log(("bhakk thori maika chodo"));
// }

const userLoggedIn = true;
const  debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2==3) {
    console.log(`allow to buy courses`);
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log(`aan de aan de`);
}