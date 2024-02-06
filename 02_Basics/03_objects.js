// Object Using constructor - Object.create - Singleton is created
// Objects Literals - No Singleton 

const mySym = Symbol("Key1") // Symbol 
const jsUser = {
    name: "Utkarsh",
    age: 24,
    location: "Lucknow",
    email: "utk@google.com",
    isLoggedIn: false,
    lastLogInDays: ['Monday', "Saturday"],
    [mySym] : mySym

}

// console.log(jsUser.email) - not the right way

/*
console.log(jsUser['email'])
console.log(typeof(jsUser[mySym]))
console.log(jsUser);
*/

jsUser.greeting = function(){
    console.log("Hello User!");
}
jsUser.greetings = function(){
    console.log(`Hello User! ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetings());






