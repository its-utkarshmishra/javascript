let a  = 20
const b = 30 
var c = 40

if (true){
    let a = 10 
}

// console.log(a);
// console.log(b);
// console.log(c);

// Nested Scope - Closures

function one(){
    const username = 'Utkarsh'

    function two(){
        const website = "youtube"
        console.log(username);

    }
    // console.log(website);

    two()
}
// one()

if(true){
    const username= "utkarsh"
    if(username === "utkarsh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++++++ Intresting ++++++++++++++++++++++++++

function addOne(num){
    return num+1
}
console.log(addOne(5))
// console.log(addTwo(2));  => this cannot be done when function is declared using a variable.
const addTwo = function(num){ // Multiple ways to write a function because in js variables can hold anything including a function
    return num + 2
}

// console.log(addTwo(2));

