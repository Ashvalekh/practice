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