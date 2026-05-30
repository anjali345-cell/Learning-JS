// for each don't return any value

// const myCoding = [{
//     name: 'JavaScript',
//     fileName: "js",
// },
// {
//     name: 'Python',
//     fileName: "py",
// },
// {
//     name: 'Java',
//     fileName: "java",
// },
// {
//     name: 'C++',
//     fileName: "cpp",
// }
// ]

// myCoding.forEach((item) => {
// console.log(item.fileName)
// })



// const coding = ["js", "python", "java", "cpp", "kotlin"]

// let values = coding.forEach((item) => {
//     // console.log(item)
//     return item;
// })
// console.log(values)


// Filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) =>  {
//     return num > 4
// })
// console.log(newNums)

const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);