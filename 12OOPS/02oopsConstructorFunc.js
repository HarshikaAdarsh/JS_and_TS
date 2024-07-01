// const promiseOne = new Promise()
// const date = new Date()

// this  new keyword is constructor function 
// this constructor function it allows to 
// create multiple instances from one object literals

function User( username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("Alex" , 12, true)
const userTwo = new User("Ben" , 12, true)
console.log(userOne);
console.log(userTwo);

// step 1- object creation 
// step 2- constructor fucntion call coz of new keyword
// step 3- whatever arguments are written they will inject into this keyword
// step 4 - at last we get in function 
 