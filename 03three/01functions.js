// fucntion declaration 
function MyNAme(){
    console.log("Alex");
}
MyNAme // this is reference
MyNAme() // this is execution

function addTwoNumbers(number1, number2){ //parameters when parameters passed in function
    console.log(number1+number2);
}
console.log( addTwoNumbers(2,7) );// arguments (2,7) => when value of parameter passed in function call
// this above will not execute 

function add2num(num1,num2) {
    return num1+ num2 ;
}
let result = add2num(2,4);
console.log("Result : ",result);


// ways to take parameters and arguments
 
function loginUserMessage(username ="sam"){
    if (username === undefined){
        console.log("Please enter the username ");
        return ;
    }
    return `${username} just logged in `
}
console.log(loginUserMessage("alex"));