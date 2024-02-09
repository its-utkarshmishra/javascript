// for of Loop ==> Array Specific Loop
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello Utkarsh!"
for (const greet of greetings) {
    if(greet == " "){
        // console.log("Space Encountered");
        continue
    }
    // console.log(`Each char is ${greet}`);
}

// Maps - It's an Object with has unique values.
const map  = new Map()
map.set('IN', "India")
map.set('USA', "Unites States of America")
map.set('Fr', "France")
console.log(map);

for (const [key, value] of map) {
    console.log(key , ':-' , value);
}

// forof loop does work on objects.