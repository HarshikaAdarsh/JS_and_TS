// for 
// syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}

// loop inside loop
for (let index = 0; index < 3; index++) {
    console.log(`Outer loop value: ${index}`);
    for (let j = 0; j < 2; j++) {
    console.log(`Inner loop value ${j} and inner loop ${index}`);
    
   }
    
}

// loop in array

let myArray = ["falsh", "batman", "Superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

for (let i = 0; i <= 20 ; i++) {
    if (i == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Values of i is ${i}`);
    
}

for (let i = 0; i <= 20 ; i++) {
    if (i == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Values of i is ${i}`);
    
}