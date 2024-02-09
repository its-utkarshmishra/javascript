// map function
const myNums = [1,2,3,4,5]
// const newNums = myNums.map((num) => num + 10)
// console.log(newNums);

const newNums = myNums.map((num) => num * 10).map((num) => num + 1).filter( num => num >= 50)
// console.log(newNums);


//++++++++++++++++++++++++++++++++++ reduce function +++++++++++++++++++++++++

// const myTotal = myNums.reduce(function(acc, curval) {
//     console.log(`acc:${acc} and curval: ${curval}`);
//     return acc + curval
// }, 0)

const myTotal = myNums.reduce((acc, curval) => acc + curval, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Java Course",
        price: 5999
    },
    {
        itemName: "Python Course",
        price: 1999
    },
    {
        itemName: "Mobile Dev Course",
        price: 12999
    }
]

const cartPrice =  shoppingCart.reduce((acc, item) => acc + item.price, 0 )
console.log(cartPrice);


