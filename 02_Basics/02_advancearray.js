const marvelHeros = ['Thor', 'IronMan', "Spiderman"]
const dcHeros = ["SuperMan", "Flash", "Batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

//  Spread Operator (...)
const allHeros = [...marvelHeros, ...dcHeros, 'Hero']
console.log(allHeros);

// Flat - Flat all the sub-array 
const anotherArray = [1,2,3, [4,5,6], 7,[6,7,[4,5]]]
const arrayNew = anotherArray.flat(1)
console.log(arrayNew);

// 

console.log(Array.from("utk"))
console.log(Array.from({name:"Utkarsh"})) //Interesting

let score1 = 100
let score2 = 400
let score3 = 3000

console.log(Array.of(score1,score2,score3));