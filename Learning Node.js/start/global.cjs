// global object runs globally in node.js, it is like window in browser

// console.log("Hello World")

// global.console.log("Hello World")

// let hello = "Hello World from Node.js";
// let justNode = hello.slice(17);
// console.log(`Who let the ${justNode} out?`);

const path = require("path");

console.log(__dirname);
console.log(`The file name is ${path.basename(__filename)}`);

for (let key in global){
    console.log(key);
}