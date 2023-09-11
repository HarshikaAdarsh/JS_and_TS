const accountId =2134; 
let accountEmail = "harshika28@gmail.com" //let deals with scope
var accountPassword = "47872356" // var has scope issue
 accountCity = "bangaluru" //js can reserve memory without using const and var - but recommended
let accountState; // it will be undefined

//console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);