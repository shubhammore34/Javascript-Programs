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
console.log(4>3);
console.log(2==2);
console.log(1<2 || 4>0.5)

 // 2. Write three JavaScript statement which provide falsy value.


