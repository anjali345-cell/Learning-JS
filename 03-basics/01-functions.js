//1. function addTwoNumbers(number1, number2) { //function() <- parameter
//     console.log(number1 + number2)
// }
// addTwoNumbers(4, 5) //<- arguments

// function addTwoNumbers(number1, number2) {
//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }
// const result = addTwoNumbers(3, 4)
// console.log("Result:", result)


//2. Functions

// function loginUserMessage(username) {
//     if (!username) {
//         return console.log("Please enter a username")
//     }
//     return console.log(`${username} just logged in`)
// }

// loginUserMessage("A")


//3. Rest operetor
// function calculateCartPrice(...num1) { //(...)is spread operator and rest operator name depends on usage
//     return console.log(num1)
// }
// calculateCartPrice(200, 400, 100, 600)


// 4. objects in function
// const user = {
//     username: "anjali",
//     price: 200
// }

// function handleUserInfo(anyObject) {
//     console.log(`Username is ${anyObject.username}, and the price is ${anyObject.price}`)
// }
// handleUserInfo(user)


// 5. arrays as arguements in functions
const myNewArray = [200, 4545, 65658, 3523, 400]

function handleArray(getArray) {
    return getArray[1];
}
console.log(handleArray(myNewArray))

// 6. nested function scopes
function one() {
    console.log("function one executed");
    function two() {
        const website = "website one"
        console.log(website)
    }
    two()
}
one()