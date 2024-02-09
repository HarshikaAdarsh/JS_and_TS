let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//format of Date 
let myCreatedDateone = new Date (2023, 0, 23, 5, 3)
let myCreatedDatetwo = new Date(2023, 0, 23)
let myCreatedDatethree = new Date ("01-14-2023")

console.log(myCreatedDateone.toLocaleString())
console.log(myCreatedDatetwo.toDateString());
console.log(myCreatedDatethree.toLocaleString());

//Time Stamp 

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDateone.getTime());
console.log(Math.floor(Date.now()/1000))

// some metthods 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());