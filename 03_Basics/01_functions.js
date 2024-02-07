function addtwonumbers (num1, num2){ //parameter
    return num1 + num2
}
const result = addtwonumbers(3, 4) // arguments
// console.log("Result:", result);
function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage("Utkarsh")) 

// Functions with Objects 


function calculateCartPrice (...num1) { // Rest Operator 
    return num1
}

function calculateCartPrice (val1, val2, ...num1) { // Rest Operator 
    return num1
}

// console.log(calculateCartPrice(2,2,2));

// Objects in Functions
const user = {
    username: "Utkarsh",
    price: 299,

}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

// Pass Array in Fucntions

const myArray = [200, 500, 600, 399]

function returnArrayValue (getArray){
    return getArray[3]
}

console.log(returnArrayValue(myArray));