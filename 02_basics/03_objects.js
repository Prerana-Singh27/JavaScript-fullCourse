// singleton
// object literals

const mySym = Symbol("key1"); // symbol as key

const JsUser = {
    name: "Shruti",
    "full name": "Shruti Singh",
    [mySym]: "myKey1Value",
    age: 20,
    location: "India",
    email:"singhprerana199@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday"]
} // declaring an object

//console.log(JsUser.email); // accessing the object
//console.log(JsUser["email"]); // accessing the object
//console.log(JsUser["full name"]); // accessing the object
//console.log(JsUser[mySym]); // accessing the object

JsUser.age = 21; // updating the object
//Object.freeze(JsUser); // freeze the object
JsUser.age = 25; // will not update
//console.log(JsUser.age);

JsUser.greeting = function() { // method
    console.log("Hello JsUser");
}

JsUser.greetingTwo= function() { // method
    console.log(`Hello JsUser, ${this.name}`); // this keyword
}

console.log(JsUser.greeting()); // calling the method
console.log(JsUser.greetingTwo());