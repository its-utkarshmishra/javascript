// Arrays

const myArr = [0,1,2,3,4,5]
const heros = ["Batman", "Spiderman"]

// Array Methods

// myArr.push(323)
// myArr.pop()

// myArr.unshift(10)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// slice and splice
console.log("A ", myArr);
const newArr = myArr.slice(1,3)
console.log(newArr);
console.log("B ", myArr);

const newArr2 = myArr.splice(1,3)
console.log(newArr2);

console.log("C ", myArr);