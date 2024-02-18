// Nullish Coalescing Operator (??) : null and undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 10

console.log(val1);
console.log(val2);
console.log(val3);

// Note => nullish operatore and terniary operator are different 

// Terniary Operator

//condition ? true : false
 
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("More than 80");
