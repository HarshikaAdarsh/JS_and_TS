//if 


//conditions <, >, <=, >=, ==, !=, === (this check type also), !==  
// if(condition ){
//    body
// }

const score = 200

if(score > 100){
    let power = "fly"
    console.log(`User power : ${power}`);
}
else{
    console.log(score);
}

//consol.log(`user power : ${power}`)

// scope without {}
// we can use " , "
const balance = 1000
if(balance > 500) console.log("test"),
console.log("test2"); // warning do not follow this syntax 

// # nesting 
if(balance < 500){
    console.log("less than 500");
}
else if (balance <750 ){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 750");
}else{
    console.log("less than 1200");
}


// example 

const IsUserLoggedIn = true;
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if( IsUserLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail  ) {
    console.log("User logged in");
}
