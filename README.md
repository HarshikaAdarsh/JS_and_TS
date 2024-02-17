# JS_and_TS

Javascript Execution context 
----this means how javascript will run and execute -------

## there are two main context in Java script and one more 

1) Global Execution Context 
2) Function / Functional Execution context 
3) Eval Execution context 


## Javascript run in two phases
1) Memory Creation Phase => where it allocate memory to variables and all
2) Execution Phase => execution of functions, calulations and all

####example 
let val1 = 10
let val2 =5 
fucntion addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result = addNum(10,2)