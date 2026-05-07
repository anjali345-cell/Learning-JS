// singleton

// object literal
const mySymbol = Symbol("key1")

const jsUser = {
    name: "Anjali",
    email: "anjali@google.com",
    [mySymbol]: "myKey1",
    gender: "female",
    age: 24,
    "full name": "Anjali Shrivastava",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    isUser: true,
    contact: 9343587615,
}

// console.log(jsUser.email) //not good practice
// console.log(jsUser["email"]) //good practice
// console.log(jsUser["isLoggedIn"])
// console.log(jsUser[mySymbol]) // to access symbol we use brackets

// jsUser.email = "as0172085@americanexpress.com"
// Object.freeze(jsUser)
// jsUser.name = "Prachi"
// console.log(jsUser)

jsUser.greetings = function(){
    console.log("hello JS user")
};
console.log(jsUser.greetings())

jsUser.greetingsTwo = function(){
    console.log(`hello JS user ${this.name}, I am ${this.age} years old.`)
};
console.log(jsUser.greetingsTwo())