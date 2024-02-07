const user = {
    username: 'Utkarsh',
    price: 999,
    welcomeMessage : function(){
        console.log(`Welcome ${this.username}`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); // this gives a empty object while in browser console it will give a window object which is a global object.



function chai(){
    let username = 'Utkarsh'
    console.log(this.username);
}
// chai()

const chai1 = () => {
    let username = "Utkarsh"
    console.log(this.username);
}
// chai1()

// ------------------- Arrow Functions ------------------

// Syntax () => {} 

const addTwo = (num1, num2) => { // normal arrow function explicit return
    return num1 + num2 
}
// console.log(addTwo(8,7));

// Implicit Return arrow function 

const addTwoo = (num1, num2) =>  (num1 + num2)
console.log(addTwoo(4,5));

const addTwooo = (num1, num2) =>  ({username: "uTk"})
console.log(addTwooo(4,5));


