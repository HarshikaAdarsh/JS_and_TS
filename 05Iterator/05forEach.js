const coding = ["js", "ruby", "java", "python", "cpp"]

// callback function do not have function name

//coding.forEach( function (val) {} )

// for each do not return any value 
// prove =>
const values = coding.forEach((item) => {
    console.log(item);
    return item;
}) 

// to overcome this we have another way which is filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNum = myNums.filter((num) => {
    num > 4
})
console.log(newNum); // this will give empty array [REASON]=> explicit return (discussed in arrow function)
// which means if we are using  {}scope the we have to return it 

const newNum2 = myNums.filter((num) => num > 4)
console.log(newNum2);

//-----------------------------------------------------------------------------------------------------------------------------//

//now try to implement it in forEach here we have to use if else

myNums.forEach((num) => {
    if(num>6){
        newNum.push(num)
    }
})
console.log(newNum);