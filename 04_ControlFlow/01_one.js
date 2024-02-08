// IF Statement
const isUserLoggedIn = true
const temprature = 41
if(temprature < 50){
    console.log("Less than 50");
}

/* < -- Less than, > -- Greater Than, <=, =>, ==, !=, ===, !== */

//  Short Hand Notation 
const balance = 1000 
// if (balance > 2000) console.log("Low Balance")

const userLoggedIn = true
const debitCard = false

if(userLoggedIn && debitCard){
    console.log("Allowed");
}
else
console.log("Not Allowed");