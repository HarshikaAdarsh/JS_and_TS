const tinderUser = new Object()
const MinderUser = {}

console.log(tinderUser);
console.log(MinderUser);

tinderUser.id = "Btech7843"
tinderUser.name = "Alex"
tinderUser.isLoggedIn = false 

console.log(tinderUser);

// objects inside objects
//declaration 
const regularUser ={
    email : "alex@gmail.com",
    fullname: {
        userFullname:{
            firstname : "Alex",
            lastname: "johnson"
        }
    }
}

// access
console.log(regularUser.fullname.userFullname.firstname);

// How to merge objects 
//1) method 1 
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = {obj1, obj2}
console.log(obj3);


//2) method 2 
//syntax 
// const obj4 = Object.assign(target, source)
const obj4 = Object.assign(obj2, obj1) //Here object is stored in target (obj1)
const obj5 = Object.assign({},obj2, obj1)// Here objectis stored in target (empty object)
console.log(obj4);
console.log(obj5);

//3) method 3  
// spread method
const obj6 = {...obj1, ...obj2}
console.log(obj3);


//Objects inside array

const User = [
    {
        id :"1234",
        email : "alex@gmail.com",

    },
    {
        id:"6475",
        email: " ben@gamil.com",
    },
    {
        id:"8340",
        email: "john@gmail.com",
    }
]
console.log(User);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty( 'isLoggedIn'));