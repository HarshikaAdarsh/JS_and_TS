// {} => this is scope (if else and functions not in object )
if (true){
    let a =10;  
    const b= 20;
    var c = 30 ; 
}
// console.log(a); // this wil show error as a is not in scope 
// console.log(b); // this willalso show error as cinst is not in scope 
console.log(c); // this is run as var do not follow scope of variable 


// global scope and block scope 

let a = 20 ;
if (true){
    let a=300 ; 
    const b = 20 ;
    console.log("Inner : " , a); // this is local scope 
}
console.log(a); // this is global scope 

//example

//scope in fucntions 
function one() {
    const userName = "Alex"
    function two() {
        const website = "youtube"
        console.log(userName);
    }
    two ();
    // console.log(website); // give error
}
one();


// scope in if else

if(true){
    const username = "Alex"
    if(username === "Alex"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website) // error 
}
//console.log(username); // give error

//++++++++++++++++++++++++++++++++++++++Interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// Hosting 

console.log(addone(5)); // here console will work above the function 
function addone(num) {
    return num+1;
}

console.log(addTwo(6)); // here it will show error  because a variable addtwo cannot access before initialization 
const addTwo = function(num){
    return num+2;
}
//console.log(addTwo(6));