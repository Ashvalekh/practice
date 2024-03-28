//reduce

// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currva: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)


// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc, curr){
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc+curr;

// },0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "mobile dev",
        price: 29967
    },
    {
        itemName: "data science",
        price: 2999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);