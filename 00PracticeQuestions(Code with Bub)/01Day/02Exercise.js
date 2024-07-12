/*
Exercise 2:
--------------
Write a javascript program to get the extension of a filename.
*/
const getExtension = (str) =>{
   return  str.slice(str.lastIndexOf( '.'))
}
const ans = getExtension('index.html')
console.log(ans);

