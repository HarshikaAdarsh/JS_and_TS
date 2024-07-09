// in Js math.pi value can be 4 or 3 instead of 3.14....
// If yes then why if no then why

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5 ;
// console.log(Math.PI);

//const mynewObject = Object.create(null)

const GreenTea = {
    name: 'lipton' ,
    price: 100,
    isAvailable: true,
    orderGreenTea: function(){
        console.log("GreenTea Gir gyi")
    }

}
console.log(GreenTea);

console.log("******************")

console.log(Object.getOwnPropertyDescriptor(GreenTea, "name"));


Object.defineProperty(GreenTea, 'name',{
    writable: false,
  //  enumerable: false => if we do this enumerable then it will stop iteration or enumeration
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(GreenTea, "name"));

for( let [key, value] of Object.entries(GreenTea)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }

}