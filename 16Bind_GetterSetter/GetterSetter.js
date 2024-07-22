// class User{
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }
//    // getter and setter works together
//     get password(){
//         return this.password.toUpperCase()
//     }
//     set password(value){
//         this.password = value.toUpperCase() // because of this "this" here it will show
//         // error  'Maximum call stack size exceeded' as set's this and constructor this will execute back to back
//     }
// }
// const hitesh = new User("hitesh.ai")
// console.log(hitesh.password);
let array = [1, 2, 3, 1, 2, 4, 5];
let uniqueArray = [...new Set(array)];

console.log(uniqueArray); 