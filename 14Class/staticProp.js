class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){ // here this static will help to restrict the access of that method or that property
        return `123`
    }

}
const Alex = new User("ALex")
//console.log(Alex.createId())

class Teacher extends User {
    constructor ( username,  email ){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher ("iphone" , "i@phone.com")
console.log(iphone)