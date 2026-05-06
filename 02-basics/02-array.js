const boys = ['John', 'Peter', 'Mark'];
const girls = ['Mary', 'Jane', 'Sara'];

// Concatenating two arrays
// boys.push(girls);

// const all = boys.concat(girls);
// console.log(all); // ['John', 'Peter', 'Mark', 'Mary', 'Jane', 'Sara']

// spread operator
const kids = [...boys, ...girls];
console.log(kids); // ['John', 'Peter', 'Mark', 'Mary', 'Jane', 'Sara']

const arr2 = [1, 2, 3, [2, 3, 4], [5, 6, 7], [8, 9, 10]];
const flatArr = arr2.flat(Infinity);
console.log(flatArr); // [1, 2, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// important methods
Array.from // creates a new array from an array-like or iterable object
Array.of // creates a new array with a variable number of arguments
Array.isArray // checks if an object is an array