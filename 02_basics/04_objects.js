//singleton object
const tinderUser = {}// object literal syntax

tinderUser.id = "123abc"; // adding properties to object
tinderUser.name = "John";
tinderUser.isLoggedIn = false;

//console.log(typeof tinderUser); // object
//console.log( tinderUser); 

const regularUser = {
    email : "singhprerana199@gmail.com",
    fullname : {
        userFullname : {
            firstName : "Prerana",
            lastName : "Singh"
        } 
    }
}

//console.log( regularUser.fullname.userFullname.firstName); // accessing nested object properties

const obj1 = {1:"a", 2:"b"}; // keys are numbers
const obj2 = {3:"a", 4:"b"}; 

//const obj3 = {...obj1, ...obj2}; // merging objects using spread operator
//console.log(obj3);

//const obj3 = Object.assign({}, obj1, obj2); // merging objects using Object.assign
//console.log(obj3);

const users = [
    {
        id: "123",
        email: "singhprerana199@gmail.com"
    },
    {

    }
]
users[1].email

//important 
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // get all keys of object as array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // get key value pairs as nested array

console.log(tinderUser.hasOwnProperty("name")); // check if key exists in object