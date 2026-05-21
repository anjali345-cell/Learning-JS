
// for (let i = 1; i < 10; i++) {
//     console.log("i")
//     for (let j = 1; j <= 10; j++) {
//         // console.log(i + "*" + j + "=" + i * j)
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
// }



// let heros = ["flash", "batman", "jinie"]
// console.log(heros.length)
// for (let index = 0; index < heros.length; index++) {
//     const element = heros[index];
//     console.log(element)
// }


// break

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected")
//         break
//     }
//     console.log(`Value is ${index}`)
// }

// continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected")
        continue
    }
    console.log(`Value is ${index}`)
}
