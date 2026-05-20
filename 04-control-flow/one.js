// if 
// if elseIf

// let temperature = 40;

// if(temperature >= 40){
//     console.log("Temperature less than 40")
// }
// else{
//     console.log(`Temparature more than 40`)
// }


let userLoggedIn = true;
let debitCard = true;
let LoggedInFromGoogle = true;
let LoggedInFromEmail = true;

if(userLoggedIn && debitCard){  //and
    console.log("User is allowed to buy")
};

if(LoggedInFromEmail || LoggedInFromGoogle){ //or
    console.log("User loggedIn")
}