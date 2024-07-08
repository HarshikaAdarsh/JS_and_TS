let myName = "Alexander      "

console.log(myName.trueLength);

let hero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function (){
        console.log(`Spidy power is ${this.spiderman}`);

    }
}

Object.prototype.alex = function(){
    console.log(`alex is present in all objects`);
}



Array.prototype.heyAlex = function(){
    console.log(`Hitesh says Hello`);
}
hero.alex();
hero.heyAlex();
//heroPower.heyAlex();