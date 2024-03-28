const coding = ["js", "ruby", "java", "python","cpp"] 

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (items) =>{
//     console.log(items);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

//array k andar object

const mycoding = [
    {
        languagename: "java",
        langFileName: "j"
    },
    {
        languagename: "javascript",
        langFileName: "js"
    },
    {
        languagename: "pyhton",
        langFileName: "py"
    }
]

mycoding.forEach((item) => {
    console.log(item.languagename);
})