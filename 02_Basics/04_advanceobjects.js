// const tinderUser = new Object() - nonsingleton
// const tinderUser = {} - singleton


const tinderUser = {} 
tinderUser.id = "utkarsh@itsutkarsh.com"
tinderUser.name = "Utkarsh Mishra"
tinderUser.isLoggedIn = false


const regularUser  = {
    email: "some@gmail.com",
    fullname: {
        firstname: "Utkarsh",
        lastname: " Mishra"
    }
}
// console.log(regularUser.fullname.firstname);

// ---------------------------------------------------

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1,  obj2 }
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// When values come from database

const user =  [
    {
    id: 1,
    name: "utk"
    },
    {
        id: 2,
        name: "afsf"
    }
]

// console.log(user[1].name);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// ++++++++++++++++++++++++++++++++++++++++++++

// De-Structuring

const course ={
    coursename: "JS-Hindi",
    price: 990, 
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);

//  



