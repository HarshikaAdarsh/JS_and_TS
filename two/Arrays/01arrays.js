const myArr = [9, 2, 3, 4, 5, 6]
console.log(myArr[0]) 

// myArr.push(7)
// myArr.push(1)
// myArr.pop()

myArr.unshift(0) // use to shift array values by 1
// unshift will add element in first position 
myArr.unshift(9)
myArr.shift() // it will shift array towards left
console.log(myArr);
 console.log(myArr.indexOf(9));

 const newArr = myArr.join()

 console.log(myArr);
 console.log(newArr);

 // Slice ,  Splice

 console.log("A", myArr);

 const myn1 = myArr.slice(1, 5) // slice shows the last element of range 

 console.log(myn1);
 console.log("B", myArr);

 const myn2 = myArr.splice(1,5) // splice shows the last element of range 
console.log("C", myArr);
 console.log(myn2);
