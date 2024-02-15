const user ={
    username : "ALex",
    price:999,

    welcomeMessage : function () {
        console.log(`${this.username}, Welcome to website `);
    }// here this keyword is used to indicate current context of variable 
}
user.welcomeMessage(); // till here context is same 
user.username = "sam"; // Now context will change 
user.welcomeMessage();


// let see how context works 
const user0 ={
    username : "ALex",
    price:999,

    welcomeMessage : function () {
        console.log(`${this.username}, Welcome to website `);
        console.log(this);
    }
}
user0.welcomeMessage(); 
user0.username = "sam"; 
user0.welcomeMessage
console.log(this);



// In case of node environment this by default shows empty object context
// so output here will show {}
const user1 ={
    username : "ALex",
    price:999,

    welcomeMessage : function () {
        console.log(`${this.username}, Welcome to website `);
        console.log(this)
    }
}
console.log(this);

//NOTE => In case of browser it do not send empty object instead it send some window object

// This only work on object and not in fucntion 
function work() {
    let username = "Alex"
    console.log(this.username);
}
work(); // this will not work here in function


//Arrow fucntion 
const work1 = () =>{
    let username = "Alex"
    console.log(this);
}
work1()

// using parameters 
const work2 = (num1, num2) => {
    return num1 + num2 ; 
}
console.log(work2(2,5)); 

// Implicit return 
const work3 =(num1, num2) => num1+num2
console.log(work3(9,1));


// return object 
const work4 = (num1,num2) => ({username : "Alex"})
console.log(work4(4,7));