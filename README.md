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

----------- steps execute this program ----------------------- 
step 1) Global Execution (Global Environment) => This (Memory is created for val1, 
        val2, addNum, result1, and result2.)

step 2) Memory phase => all variable are collected
     like for eg =  val1 -> undefined
                    val2 -> undefined
                    addnum -> definition
                    result1 -> undefined
                    result2 -> undefined

Step 3) Execution Phase 
        val1 <- 1
        val2 <- 5
        addNum ->  Here one more executional context will be created Like this 

      ___________________________________                                
      |   New Variable Enviroment       |
      |                                 |
      |             +                   |
      |                                 |
      |        Execution Thread         | 
      |_________________________________|

##### Everytime when functions are created these boxes are created which New Executional context

Now again this new executional context will create memory phase and Executional phase
 1.1) Memory phase : val1 -> undefined
                     val2 -> undefined
                     total -> undefined 

 1.2) Executional Context : num1-> 10 
                            num2 -> 5
                            total -> 15 // Now this will return to the parent global context 
Now result1 will be stoed in parent Executional context    
For result2 two again a new executional context is created                          
### NOTE -> After execution is completed thi New Executional context will be deleted                           
                                                  
# Call Stack 
Last In First Out (LIFO)

ex-> If we have function inside a function  then how call stack will work 

One (
    Two(
        Three()
    )
)

Stack 

|  three()   |          
|   two()    |    
|  one()     |
|____________|