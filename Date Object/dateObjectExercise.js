/*Exercises: Level 1
Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types. */

let firstName = 'Shubham';
let lastName = 'More';
let country = 'India';
let city = 'Mumbai';
let age = 23;
let isMarried = false;
let year = 2025;

console.log(typeof(firstName)); //string
console.log(typeof(lastName)); //string
console.log(typeof(country)); //string
console.log(typeof(city)); // string
console.log(typeof(age)); //number
console.log(typeof(isMarried)); //boolean
console.log(typeof(year)); //number

//Check if type of '10' is equal to 10
console.log(typeof('10')==10); //false
console.log(typeof('10')===10); //false

//Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8')==10); //9==10-->false
console.log(parseInt('9.8')===10); //9===10--->false

console.log(parseInt ('9.8')) //9

console.log(Math.round(+'9.8')); //10


//Boolean value is either true or false.

/* 1. Write three JavaScript statement which provide truthy value. */
let numberOne = 10;
console.log(Boolean(numberOne));

let numberTwo = -23;
console.log(Boolean(numberTwo));

let str = "JavaScript"
console.log(Boolean(str));

let stmt = true;
console.log(Boolean(stmt));

console.log(4>3);
console.log(2==2);
console.log(1<2 || 4>0.5)


 // 2. Write three JavaScript statement which provide falsy value.
let numOne = undefined;
console.log(Boolean(numOne));

let numTwo = null;
console.log(Boolean(numTwo));

let numThree = NaN;
console.log(Boolean(numThree));

let numFour = 0;
console.log(Boolean(numFour));

let numFive = "";
console.log(Boolean(numFive));

let numSix = false;
console.log(Boolean(numSix))

/* Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3 //true
4 >= 3 //true
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4' // number != string ---> true
4 == '4' // false --->my assumption was wrong. answer : true, bcoz it compares only value
4 === '4' //false
Find the length of python and jargon and make a falsy comparison statement.
let str1 = 'python';
let str2 = 'jargon';
console.log(str1.length);
console.log(str2.length);
console.log((str1.length) != (str2.length));
*/


//confirmation
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != "4")
console.log(4 == '4') //why true, bcoz it compares only value
console.log(3 === '3') // false, compare both value and data type
console.log(4 === "4")

//Find the length of python and jargon and make a falsy comparison statement
let str1 = 'python';
let str2 = 'jargon';
console.log(str1.length);
console.log(str2.length);
console.log((str1.length) != (str2.length));


/*
Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12 //true
4 > 3 && 10 > 12 //false
4 > 3 || 10 < 12 //true
4 > 3 || 10 > 12 //true
!(4 > 3) //!(true)-->false answer : false
!(4 < 3) //!(false)-->true answer : true
!(false) // true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) //true
!(4 === '4') //true
There is no 'on' in both dragon and python
*/

//There is no 'on' in both dragon and python
let str3 = 'dragon';
let str4 = 'python';
console.log(str3.includes('on')); //true
console.log(str4.includes('on')); //true

console.log(!(str3.includes('on') && (str4.includes('on') ) ) ); 

