// console.log(process.argv);


// this is a function that will grab the value of a flag from the command line arguments. For example, if we run the command `node index.js --greeting Hello --user Alice`, the function will return "Hello" for the `--greeting` flag and "Alice" for the `--user` flag.
function grab(flag){
let indexAfterFlag = process.argv.indexOf(flag) + 1;
return process.argv[indexAfterFlag];
}

let greeting = grab('--greeting');
let user = grab('--user');

console.log(`${greeting}, ${user}`);