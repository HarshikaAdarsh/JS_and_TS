
const User = {
   name : "Ben ",
    email: "ben@gmail.com"
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssigment : 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

// OutDated Approach
Teacher.__proto__ = User

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)
console.log("*************************************************************************************")

let anotherUsername = "AlexandBen         "

String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);

}
anotherUsername.trueLength()
"Alex".trueLength()
"AlexOrBen".trueLength()
