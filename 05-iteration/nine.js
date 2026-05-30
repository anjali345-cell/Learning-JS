
// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`accout is ${acc} current value is ${currval}`)
// return acc + currval
// }, 0)

// const myTotal = myNums.reduce((acc, curr)=> acc + curr, 0)
// console.log(myTotal);




const shoppingCart = [
    {
        itemName: "javascript",
        price: 3999
    },
    {
        itemName: "python masterclass",
        price: 2999
    },
    {
        itemName: "react native bootcamp",
        price: 4999
    },
    {
        itemName: "node.js backend course",
        price: 3499
    },
    {
        itemName: "data structures & algorithms",
        price: 4500
    },
    {
        itemName: "devops masterclass",
        price: 5999
    }
];
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay)