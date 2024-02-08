 // concatination

 const name = "alex";
 const repoCount=39;

 console.log(name+ repoCount);

 //string Interpolation = here we create placeholder and inject values
 // using back ticks
 
 console.log(`Hello my name is ${name} amd my Repo Count is ${repoCount}`);

 const gameName = new String ('alexxxx') // key value pairs // declaration like object
// in output it will show like an array but it is not it is a object in key value pair 
// this is helpful in various method usage like indexof() etc

 console.log(gameName[0]);
 console.log(gameName.__proto__);

 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('e'));

 //dividing into substring
 const newString =  gameName.substring(0,4)
 console.log(newString);

 const anotherString = gameName.slice(-8,3)
 console.log(anotherString);

 const newStringOne = "    Alex   "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "https://alex%20johnson"

 console.log(url.replace('%20', '-'))
 console.log(url.includes('alex'))


 const newStringtwo = "alex-edward-johnson"
 console.log(newStringtwo.split('-'));

 const newStringthree = new String('alex-edward-johnson')
 console.log(newStringthree.split('-'));