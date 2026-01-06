// DATES

let myDate = new Date()
//console.log(myDate)
//console.log(myDate.toString) 
//console.log(myDate.toDateString())
//console.log(myDate.toISOString())
//console.log(myDate.toLocaleString())

console.log(typeof myDate);

//let myCreatedDate = new Date("2020, 0 , 23")
//console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date("2020, 0 , 23",5 , 3)
//console.log(myCreatedDate.toLocalString());

let myCreatedDate = new Date("2020-01-14")
//console.log(myCreatedDate.toLocaltring());


let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());


//console.log(Math.floor(Date.now()/1000)); //convert in mili second

let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());



