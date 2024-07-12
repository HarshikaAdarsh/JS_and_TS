/* Exercise 3:
------------------------------------------------------------------------------------------------------------------------------------
Write a JavaScript program to replace every character in a given string with the character following it in the alphabet
*/
const formatDate  = (Date) => {
    const date = Date.getMonth();
    const month = Date.getMonth();
    const year = Date.getFullYear();
          return `${date} / ${month} / ${year} `;
}
console.log(formatDate(Date));