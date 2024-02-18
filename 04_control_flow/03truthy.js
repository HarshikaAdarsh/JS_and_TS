const userEmail = "Alex@gmail.com"// if there is some value in string its a truthy value 
// here we didnot compare user email but we assumed that its a truthy value 
if(userEmail){ 
    console.log("Got user Email");
}
else{
    console.log("Dont have user email");
}

// if there is no value in string its a falsy value 
const userEmail1 = ""
if(userEmail1){ 
    console.log("Got user Email");
}
else{
    console.log("Dont have user email");
}

// if there is empty array or array with value both will be truthy
const userEmail2 = []
if(userEmail2){ 
    console.log("Got user Email");
}
else{
    console.log("Dont have user email");
}

// All truthy value and falsy value 

// falsy -> False, 0, -0, BigInt 0n, "", null, undefined,NaN

//truthy -> "0", 'false', " ", [], {} (obejct), function(){} 
  

// Prove 
const userEmail5 =[]
if (userEmail5.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}