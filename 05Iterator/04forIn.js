const myObject = {
    js: 'javascript',
    cpp:"ruby",
    swift : 'swift'
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    console.log(myObject[key]);
}
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log( key  );
}    

const map = new Map()
map.set('IN', "India")
map.set('IN', "United States of America")
map.set('IN', "France")
map.set('IN', "India")

for (const key in map) { // we cannot apply Iterative in map
    console.log(key);
}

