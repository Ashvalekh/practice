//++++Objects+++++
//singleton : apne tarah ka ek hee object jo ki constructor se banega
//->object.create se singleton bannta h

// object literals

const mySym = Symbol("key1")

const JSuser = {
    name: "hitesh",
    "full name": "ashutosh singh rathore",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedin: false,
    lastLoginDays: ["mondays", "tuesday"]
}

// console.log(JSuser["full name"]);
// console.log(JSuser["email"]);
// console.log(JSuser[mySym]);

// console.log(mySym);

// JSuser.email = "ashu@cht.com"
// Object.freeze(JSuser)
// JSuser.email = "ashu@ttt.com"
// console.log(JSuser);

JSuser.greeting = function(){
    console.log("hello user");
}
JSuser.greetingTwo = function(){
    console.log(`hello user, ${this.name}`);
}

// console.log(JSuser.greeting());
// console.log(JSuser.greetingTwo());

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor)

const {courseInstructor: instructor} = course

console.log(instructor)

// { this is how a json looks like
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "999"
// }