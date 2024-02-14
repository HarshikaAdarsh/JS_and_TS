  const marvelHeros =  ["thor", "Spiderman",  "Ironman"]
  const dcheros =  ["flash", "batman", "superman"]


  
// methods to merge arrays

//1)Push ()
  marvelHeros.push(dcheros); // push modifies original array
  console.log(marvelHeros);

// how to access array in push function 

console.log(marvelHeros[3][2]);


//2) Concatination()
//Concatinate do not modify array but return a new array

const allHeros = dcheros.concat(marvelHeros)
console.log(allHeros);

//3) Spread 

const all_new_heros =  [...marvelHeros, ...dcheros]
console.log(all_new_heros);

// Flat method => returns a nre array with all sub arrays concatinated recursively

const recursive_array = [1,2,3,[4,5,6],3,2,[8,6,[4,8,1]]]
const Flat_recursive_array = recursive_array.flat(Infinity)
console.log(Flat_recursive_array);

// How to find if its array 
//using " .isArray()" function 
console.log(Array.isArray("Alex"));

// How to convert into array
// using .from()
console.log(Array.from("Alex"));
console.log(Array.from({name: "Alex"}));// output = [] 
// this will show an empty array coz it is not able to decide which one to convert in array value or key 


// how to return a new array from set of elements 
// using Of()

let marks = 100;
let marks1 = 200;
let marks2 = 300;
console.log(Array.of(marks, marks1, marks2)); 