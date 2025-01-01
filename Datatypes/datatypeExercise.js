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

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let str1 = 'You cannot end a sentence with because because because is a conjunction';
console.log(str1.indexOf('because'));

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(str1.lastIndexOf('because'));

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(str1.search("because"));

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let str2 = ' 30 Days Of JavaScript ';
console.log(str2.trim(" "));
console.log(str2.trim());

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let str3 = "30 Days Of JavaScript";
console.log(str3.startsWith('30'));

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(str3.endsWith('JavaScript'));

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(str3.match('a'));

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let $str1 = "30 Days of ";
console.log($str1.concat("JavaScript"));

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))

/* Exercise level 2 */ 
/*The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.*/
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.")

//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof('10')==typeof(10)) //false
console.log(typeof(+'10')==typeof(10)) //true one method
console.log(typeof parseInt('10')==typeof(10)) //Second method
console.log(typeof Number ('10')==typeof(10)) //Third method


let numOne = '10';
let $numOne = Number('10');
let numTwo = 10;
console.log(typeof('10')==10); //false, not equal
console.log(($numOne)==numTwo);

console.log(typeof($numOne)); 
console.log(typeof(numTwo));
console.log(typeof($numOne)==typeof(numTwo));
console.log(typeof($numOne)==typeof(10));

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8')); //9.8
console.log(parseFloat('9.8')==10); //false
console.log(Math.ceil(parseFloat('9.8'))==10) //true first way
console.log(Math.round(parseFloat('9.8'))==10) //true second way

//Check if 'on' is found in both python and jargon
let str11 = 'python'
let str22= 'jargon'
console.log(str11.includes('on'));
console.log(str22.includes('on'));

//I hope this course is not full of jargon. Check if jargon is in the sentence.
let str4 = 'I hope this course is not full of jargon.';
console.log(str4.includes('jargon'));

//Generate a random number between 0 and 100 inclusively.
let randomNum = Math.random();
let numBtnZeroAnd100Inclusively = randomNum*101;
console.log(Math.floor(numBtnZeroAnd100Inclusively));

//Generate a random number between 50 and 100 inclusively.
let min = 50;
let max = 100.1;
let random = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random number between ${min} and ${max}: ${random}`);

//Generate a random number between 0 and 255 inclusively.
let min1= 0;
let max1=255.1;
let random1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
console.log(`Random number between ${min1} and ${max1}: ${random1}`);

//Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 24 \n5 1 5 25 125")

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.substr(32, 23)); //substr(): It takes two arguments, the starting index and number of characters to slice.

//Exercise level 3
//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(sentence2.match(/love/gi));
console.log(sentence2.match(/love/gi).length); //i is used for case insensitive

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence3 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence3.match(/because/g))
console.log(sentence3.match(/because/g).length)













