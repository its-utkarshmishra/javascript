const userEmail = "Utk@itsutkarsh.com"

if(userEmail) {
    console.log('Got the User Email');
} else {
    console.log("Don't have the user email");

}

// Falsy Values - false, 0, -0, BigInt 0n, null, undefined, NaN.
// Truthy Values - "0", "false", " ", [], {}, function() {}.
const emailArray = [1]
if(emailArray.length == 0){
    console.log("Empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length == 0 ){
    console.log("Empty Object");
}

// Nullish Coalescing Operator (??) : null undifined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);

// Ternary Operator

// Condition ? True : Flase

const iceTea = 100
iceTea >= 80  ? console.log("Price is greater than 80") : console.log("less than 80");