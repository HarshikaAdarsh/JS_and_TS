let score = "33ghfy";

console.log(typeof score); 
console.log(typeof(score)); // input score as a method 

let valueInNumber = Number(score) // converting score into number
console.log(typeof valueInNumber);  //datatype conversion
console.log(valueInNumber); // it will who 'NAN' which is not a number

/*
 what is actually convertable 

 "33" - from string to no = 33
 "33abc" - cant be convertable = NAN
 true - from boolean to number = 1
*/


//boolean
let isloggedIn = 1;
 
let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);
// 1 = 'true'
// "" = false
// "hitesh" = true

//string
let number = 33;

let valueofnumber = String(number)
console.log(valueofnumber);
console.log(typeof (valueofnumber))


//*  OPERATIONS *//

let value = 33;
let negvalue = -value;
console.log(negvalue);

/* concatination */

let str1= "hello"
let str2 = " hale"

let str3= str1+str2;
console.log(str3);