// there are two methods to decalre an object 
// 1) literals = no singleton 
// 2) constructor = singleton will created


// object constructor 
//Object.create();


//  object literals 
const mySym = Symbol("key1")
const mySym = Symbol("key1")


const jsUser = {
    name: " Alex ",
    age : 20,
    
    location: "Brooklyn",
    email: "alex@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday", "Saturday"]
}

console.log(jsUser.age);

console.log(jsUser["LastLoginDays", "email", "name"]); // this is showing only last element of array