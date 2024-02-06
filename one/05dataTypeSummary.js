/* 
the reason for categorising in Primitive and non- primitive 
is they way it store in memory 
and how we access the data

Primitive data type => 7
its call by value => when we try to copy the dat from one place to another
then it will copy the original value not reference

  String 
  Number
  Boolean
  Null
  Undefined
  Symbol => to make anything unique
  BigInt

Non-Primitive ( Reference type ) =>3
  Array
  Objects
  Functions

*/

//JavaScript is dynamically type language 
//reason - which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
//example = const score = 100 ; , const score = false ; ,const score = "winner" ; 

/*
String  =>  const score = "winner";

Number  =>  const score = 100.67;

Boolean =>  const score = false;

Null    => const score = null;

Undefined  => let score; //which is undefined if u do not assign any value 

Symbol => const id = Symbol('123')
          const anotherId = Symbol('123');
          console.log(id===anotherId);   //they will never be equal even if we have assign same value in symbol, it is always unique and never same 

BigInt  => const bigNumber = 63285646289794229874365n  //  using 'n' at last represents bigInt
          */          



// Non-Primitive

/*  
Array = const book=["course","fiction","non-fiction"]
object =  let myobject = {
    name : "alex",
    age : 19
} 
const myFunction  = function(){
       console.log("hello world")
}
*/

// const bigNumber = 63285646289794229874365n
// console.log(typeof bignumber)