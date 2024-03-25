const userEmail = []
//koi value h toh h mrlb truthy maan lenge

if (userEmail) {
    console.log("got user email");
}else {
    console.log("dont have user email");
}

// falsy values:
// false, 0, "", -0, BigInt 0n, null, undefineddd
//truthy:
// "0","false"," ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length ===0){
    console.log("object is empty");
}

//NUllish coalescing operator (??): null undefined ye seerf null or undefined k liye bana h 
let val1;
// val1 = 5??10
// val1 = null??10
// val1 = undefined??16

val1 = null??13??45

console.log(val1);

//ternary operator

// condition ? true:false

const iceTeaPrice = 100

iceTeaPrice <= 80? console.log("less than"): console.log("more than 80");