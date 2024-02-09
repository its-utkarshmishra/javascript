// For In LOOP - not works with Map Object.
const myObj = {
    JS: 'Javascript',
    CPP: 'C++',
    RB: "Ruby",
    Swift: "Swift"

}
for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

// For Each Loop

const coding = ["JS", "Ruby", "Java", "Python", "CPP"]
// coding.forEach(element => {
//     console.log(
//         element
//     );
// });

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)


coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
 console.log(item.languageFileName)
}
)

