function sayMyName() {
    console.log("My name is John Doe");
    console.log("My name is shruti");
}

//sayMyName();

//function addTwoNumbers(num1, num2) {
   //console.log(num1 + num2) ;
//}

function addTwoNumbers(num1, num2) {
    //let result = num1 + num2;
    //return result
    return num1 + num2;
}

//const result = addTwoNumbers(5, 10);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please provide a username") ;
    }
    return `Welcome back, ${username}!`;
}
//console.log(loginUserMessage("shruti"));


//function calculateCartPrice(...prices){
    //return prices
//}
//console.log(calculateCartPrice(200,300,400,500));

function calculateCartPrice(val1, val2,...prices){
    return prices
}
//console.log(calculateCartPrice(200,300,400,500));

const user = {
    username: "shruti",
    price: 4000
}

function handleObject(anyobject){
    //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`) ;

}
//handleObject(user);
handleObject({
    username: "john",
    price: 5000
});

//array

const myArray = [1,2,3,4,5];
function returnSecondValue(getArray) {
    return getArray[1];
}
//console.log(returnSecondValue(myArray));
console.log(returnSecondValue([10,20,30,40,50]));
