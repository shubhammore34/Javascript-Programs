// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of Javascript";

//Print the string on the browser console using console.log()
console.log(challenge);

//Print the length of the string on the browser console using console.log()
console.log(challenge.length)

//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0, 2));

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substr());

//Check if the string contains a word Script using includes() method
console.log(challenge.includes('script'));

//Split the string into an array using split() method
console.log(challenge.split());

//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "));

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(str.split(' , '));

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("Javascript" , "Python"));

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('11'));



