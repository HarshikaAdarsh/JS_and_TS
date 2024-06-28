 const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network 
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
 })
 
 promiseOne.then(function(){
    console.log("Promise consumed");
 })

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task2");
        resolve()
    }, 1000)
  
}).then(function(){
    console.log("Async 2 resolved");
})

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function () {
        resolve({username:"Chai", email: "chai@example.com"})
    }, 1000)
})
PromiseThree.then(function(user){
    console.log(user);
})

const PromiseFour = new Promise(function(resolve , reject){
      setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Alex", password: "123"})
        }
        else {
            reject('ERROR: Something is wrong ')
        }
      },1000)
})
 PromiseFour
 .then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function (error) {
    console.log(error);
})
.finally(() => console.log("The Promise is either resolved or rejected"))

const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"John", password: "123"})
        }
        else {
            reject('ERROR: In JS something is wrong ')
        }
      },1000)
})
// Alternative of accpeting promise "Asynch and Await"

// async function consumePromiseFive(){
//     const response = await PromiseFive
//     console.log(response);
// }
// executing function 
// consumePromiseFive()
 
// Drawback of async and await is that it donot handle error
//we can use try and catch to use error handeling in async and await
async function consumePromiseFive(){
    try{
        const response = await PromiseFive
         console.log(response);
    }
    catch (error) {
       console.log(error);
    }
}
consumePromiseFive()

async function getAllUser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // this response.json also take time thats why we will use await here also  
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log("E:", error);
    }
}
getAllUser()
// Now we will recreate the same above function in then and catch format
fetch('https://jsonplaceholder.typicode.com/users').then((response)=> {
    
        // this response.json also take time thats why we will use await here also  
      return response.json();
       
})
.then((data)=> {
    console.log(data);
})
.catch((error) => {
    console.log("E:", error);  
})
