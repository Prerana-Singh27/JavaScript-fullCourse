const user = {
    username: "shruti",
    price: 5000,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to our platform!`);
        //console.log(this);
    }
}
//user.welcomeMessage(); // Output: shruti, welcome to our platform!
//user.username = "john_doe";
//user.welcomeMessage(); // Output: john_doe, welcome to our platform!

//console.log(this);

//function chai() {
    //let username = "chai_user";
    //console.log(this.username);

//}
//chai(); // In non-strict mode: global object (window in browsers), In strict mode: undefined

// const chai = function () {
//     let username = "chai_user"
//     console.log(this.username);
//}

const chai =  () =>  {
     let username = "chai_user"
    //console.log(this.username);
}

//chai(); // Output: undefined (arrow functions do not have their own 'this')

//ARROW FUNCTION

//const addTwo = (num1, num2) => {
    //return num1 + num2;
//} // basic arrow function syntax

// const addTwo = (num1, num2) => num1 + num2; // implicit return
//const addTwo = (num1, num2) => (num1 , num2) // don't need to write return keyword;

const addTwo = (num1, num2) => ({username: "shruti"});//object return
console.log(addTwo(5, 10)); // Output: 15


