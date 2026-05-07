// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "anjali345"
tinderUser.name = "Anjali"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

// const regularUser = {
//     email: "anjali@easyship.com",
//     fullname: {
//         userfullname: {
//             firstname: "Anjali",
//             lastname: "Shrivastava"
//         }

//     }
// }
// console.log(regularUser.fullname.userfullname)


const Obj1 = {1: "a", 2: "b"}
const Obj2 = {3: "a", 4: "b"}
const Obj3 = {5: "a", 6: "b"}

// 1.
// const Obj4 = Object.assign({}, Obj1, Obj2, Obj3) 
// const returnedTarget = Object.assign(target, source);
//target will be the space where all the object values will be stored, that is why we leave an empty array to be all values stored. Although this is not compulsary to give the empty array but the fundamental is that first value becomes the target and all the other objects values will be stored in first given obj for e.g. here Obj1 could be the target if not empty array

// console.log(Obj4)


// 2.
const Obj5 = {...Obj1, ...Obj2, ...Obj3};
// console.log(Obj5)

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
