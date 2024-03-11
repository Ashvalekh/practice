const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor to call the courseInstructor from object course

// there's another way to call
const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     'name': "ashu",
//     'coursename': "js in hindi",
//     'price': "free"
// }


[
    {},
    {},
    {}
]