// there are two methods to decalre an object 
// 1) literals = no singleton 
// 2) constructor = singleton will created


// object constructor 
//Object.create();


//  object literals 
const mySym = Symbol("key1")


const jsUser = {
    name: " Alex ",
    age : 20,
   [ mySym ] : "myKey1", //how to access symbol data type in objects
    location: "Brooklyn",
    email: "alex@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday", "Saturday"]
}

console.log(jsUser.age);

console.log(jsUser["LastLoginDays", "email", "name"]); // this is showing only last element of array

console.log(typeof jsUser[mySym]);

// How to change already existing object 
jsUser.email =  "Alexben@gmail.com"

// how to lock any object value 
//use=> freeze
//Object.freeze(jsUser)
jsUser.email = "Benalex@gmail.com"
console.log(jsUser);


// functions in objects
jsUser.greeting = function(){
    console.log("Hello Js Users");
}
jsUser.greetingTwo = function(){
    console.log(`Hellow js user, this is ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());