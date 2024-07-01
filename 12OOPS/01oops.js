// objects literals 
// literally just creating an object
const user = {
   username: "alex",
   loginCount: 8,
   signedIn: true,

   getUserDetails: function(){
  //  console.log("Got user details form database");
  console.log(`Username: ${this.username}`);
   }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // it will give empty object {} 
//because it reffers to the glodal context and 
// global context have context of window objects 

// this keyword is used to give current context 
