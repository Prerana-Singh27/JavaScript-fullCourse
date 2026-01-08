let a = 300 

if (true) {
    let a  = 400 
    const b = 500
    //console.log("Inside block", a) ;//block scope variable a
}
//console.log("Outside block", a) ; //global scope variable a

function one() {
    const username = "shruti"
    function two() {
        const website = "www.shruti.com"
        //console.log(username) ;
    }
    //console.log(website) ;
    two()
}
//one() 

if (true) {
    const username = "john"
    if (username === "john") {
        const website = "www.john.com"
        //console.log(username+website) ;
    }
    //console.log(website) ;
}
//console.log(username) ;

//++++++++++++++++++++++++++interestiing +++++++++++++++++

console.log(addone(5)) ;
function addone(num) {
    return num + 1
}

//console.log(addTwo(5)) 
const addTwo = function(num) {//function expression
    return num + 2
}
console.log(addTwo(5)) 