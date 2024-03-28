// for smjh le masst h 

for (let i = 0; i <= 10; i++) {
 //...variable declare,condition check,  i ko badhara
    const element = i;
    if (element == 5){
        // console.log(`5 is best number`);
    }
    // console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
       //console.log(`inner loop value ${j} and outer value ${i}`); 
        //console.log(i + '*' + j + '=' + (i*j));
    }
}

let myArray = ['flash', 'batman', 'superman']
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

//break
// for (let i = 1; i <= 20; i++) {
//     if (i==5) {
//         console.log(`tohri ama ko chodo`);
//         break
//     }
//   console.log(`Value of i is: ${i}`);
    
// }
//continue ek baar maafi dega jab i ==5 hoga vo oose print nhi karega rest all it'll print

for (let i = 1; i <= 20; i++) {
    if (i==5) {
        console.log(`tohri ama ko chodo`);
        continue
    }
  console.log(`Value of i is: ${i}`);
    
}