//let myName = "shruti    "
//console.log(myName.trueLengt);




let myHeros = ["thor","spiderman"]

let hero = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shru = function(){
    console.log(`shruu is present`);
}

Array.prototype.heyShru = function(){
    console.log(`hey`);
}

//hero.shru()

myHeros.shru()
myHeros.heyShru()
//hero.heyShru()


//Inheritance

const User = {
    name: "shruu",
    email: "shr@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntex
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "prerana     "
String.prototype.trueLength = function() {
    
    console.log(`${this}`);
    
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()