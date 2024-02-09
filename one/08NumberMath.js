const score = 400; // this is a number but we can explicitly define this also 
 console.log(score);
// using object 
const balance =  new Number(100)
console.log(balance); // it will give key value pair output

// some methods & properties
console.log(balance.toString().length);

console.log(balance.toFixed(4));

//for precision
const bigNumer = 364.89523470461;
console.log(bigNumer.toPrecision(5));


//for place value 
const hunderds = 1000000
console.log(hunderds.toLocaleString());
//console.log(hunderds.toLocaleString('en-In'))

// for MAX & MIN value
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//property of Math itself 
console.log(Math);

// negative values become positive 
console.log(Math.abs(-8));

// Round Off
console.log(Math.round(4.6));

// Round Off ceiling - If there is even any floating value it will round Off to top value 
console.log(Math.ceil(4.0));

// Round OFF floor
console.log(Math.floor(4.2));

// finding Min & max value 
console.log(Math.min(4,9,6,3,8,3,9,7,6))
console.log(Math.max(4,9,6,3,8,3,9,7,6))

// Rnadom Value 
console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random())*10)+1);

// this above thing can be done by formula also 
const min = 10 ; 
const max = 20 ;

console.log(Math.floor(Math.random() * (max - min + 1)) + min )
