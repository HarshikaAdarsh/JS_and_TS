function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called")
}
function createUser(username, email, password){
    // we will not call username directly

    SetUsername.call(this, username) // now this wont work coz there we have only given the reference not actually call the function

    this.email = email
    this.password = password
}

const res =  new createUser("alex", "alex@gmail.com" , "123")
console.log(res);