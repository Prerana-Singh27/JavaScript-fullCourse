//Immediately invoked Function Expression (IIFE)

(function chai() {//named iife
    console.log("IIFE function executed");
})(); // IIFE function executed

( (name) => {// without name
    console.log(`Hello, ${name}`);
})('Shruti'); // Hello, Shruti