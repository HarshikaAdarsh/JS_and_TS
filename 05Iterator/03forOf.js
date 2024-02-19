// forof  loop
// Array specific loop 
//forof loop identify itself when to end the loop and when to initiate  
// we do not have to initialize, increment, or break loop 
// we can use this on array, object , string etc
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greeting = "Hello"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

// Maps => map in itself is a object
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('fr', "France")
console.log(map);