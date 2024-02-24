const myObject = {
    js: 'javascript',
    cpp:"ruby",
    swift : 'swift'
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    console.log(myObject[key]);
}