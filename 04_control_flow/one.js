const isUserloggedIn = true
const temperature = 41

//if (2 == "2")
//if( temperature === 50 ){
    //console.log("less than 50");

//} else {
//console.log("temperature is greater than 50");
//}
// < , > , <= , >= , != , !== , ===

//const score = 200

//if ( score > 100) {
    //const power = "fly"
   // console.log(`user can ${power}`);
//}
//console.log(`user can ${power}`);

const balance = 1000
//if ( balance > 500 ) console.log("test")

//if(balance < 500 ){
    //console.log("low balance");
//} else if ( balance > 1500 ){
    //console.log("high balance");
//} else {
    //console.log("normal balance");
//}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("you can make a purchase");
}

if (userLoggedIn || debitCard || loggedInFromGoogle || loggedInFromEmail){
    console.log("you are logged in");
}