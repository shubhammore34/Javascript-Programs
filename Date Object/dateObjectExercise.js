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

/* Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
*/

const now = new Date()
console.log(now.getFullYear()) //2025

console.log(now.getMonth()) //0, because the month is January,  month(0-11)

console.log(now.getDate()) //5th January

console.log(now.getDay()) //Sunday is 0

console.log(now.getHours()) //19 hours 

console.log(now.getMinutes()) //8 


//Exercise level 2
/* Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100 */

let base = prompt("Enter base of the triangle : ")
let height = prompt("Enter height of the triangle : ")
console.log(`base of the triangle :  ${base}`)
console.log(`height of the triangle : ${height}`)

let areaOfTriangle = 0.5 * base * height;
console.log(`area of triangle is ${areaOfTriangle}`)

/* Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12 */

let side_a = prompt("Enter side a : ");
let side_b = prompt("Enter side b : ");
let side_c = prompt("Enter side c : ");

///The prompt input returned is a string we need ot convert it to a number for arithmetic calculations
let perimeterOfTriangle = parseInt(side_a) + parseInt(side_b) + parseInt(side_c);

console.log((`The perimeter of the triangle is ${perimeterOfTriangle}`));

//2nd way
let side_a = parseInt(prompt("Enter side a : "));
let side_b = parseInt(prompt("Enter side b : "));
let side_c = parseInt(prompt("Enter side c : "));
///The prompt input returned is a string we need ot convert it to a number for arithmetic calculations
let perimeterOfTriangle = (side_a + side_b + side_c);
console.log((`The perimeter of the triangle is ${perimeterOfTriangle}`));

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = prompt("Length : ")
let width = prompt("Width : ")
let areaOfRectangle = 2 * (length * width)
console.log(`area of rectangle : ${areaOfRectangle}`);

let perimeterOfRectangle = 2 * (length + width);
console.log(`perimeter of rectangle : ${perimeterOfRectangle}`)



