// usage of Rest => to pass multiple values in parameters in fucntion 

function calculateCartPrice(...num) {
 return num;    
}
console.log(calculateCartPrice(200,400,600));


// objects in function 

const User = {
    username : "Alex",
    price : 199 
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price  is ${anyobject.price}`);
}
handleObject(User)

handleObject({ //direct object passing
 username : "sam",
 price : 399,
})

// array passing in function

const myNewArray = [200, 400, 600];

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 300, 500]));