// ES6

class User{
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("Alex", "Alex@gail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// behind the scene if we were using function instead of classes
function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User2("Ben", "Ben@gail.com", "456")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());