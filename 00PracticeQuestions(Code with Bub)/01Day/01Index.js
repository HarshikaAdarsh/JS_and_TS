/*

Exercise 1:

Write a JavaScript program to check two
numbers and return true if one of the number
is 100 or if the sum of the two numbers is
100

*/

const a = 4;
const b = 20;

const sum = function(a,b){
    sum = a+b
};

if (sum == 100 || a == 100 || b==100){
    console.log("true")
}
else{
    console.log("false");
}

//Bub's approach
const sum1 = (c,d) => c === 100 || d === 100 | ( c+d ) === 100;
console.log(sum1(100,0));
console.log(sum1(0,100));
console.log(sum1(20,80));
console.log(sum1(50,50));
console.log(sum1(20,30));
