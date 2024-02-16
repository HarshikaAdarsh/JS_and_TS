//Immediatley invoked fucntion expressions (IIFE)
// syntax of IIFE => ()()
// where (fucntion defination )(fucntion execution call )

// why IIFE = to reduce the pollution created by global scope 


(function chai() {
    console.log(`DB CONNECTED`);
})
(); // here semi colon is must to end the fucntion 


// sytax of IIFE using Arrow fucn

( (name) => {
    console.log(`DB Connected two`);
}) ('Alex')
