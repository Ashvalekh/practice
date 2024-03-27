function findMinMax(number) {
    if (number === 0) {
        console.log(`ye nhi ho skta`);
    }
    const largest = Math.max(...number)
    const smallest = Math.min(...number)
    return (`largest number is ${largest}, smallest number is ${smallest}`)
}

const number = [1,3,5,6]
console.log(findMinMax(number))
// console.log(`${largest}, ${smallest}`);