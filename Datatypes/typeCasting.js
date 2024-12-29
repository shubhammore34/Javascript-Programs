/* Changing Data Type (Casting)
Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.
String to Int
We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. We can convert string to number using the following methods:

parseInt()
Number()
Plus sign(+) */

let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10

let $num = '10'
let $numInt = Number($num)
console.log($numInt) // 10

let num3 = '10'
let numInt3 = +num
console.log(numInt3) // 10


/* String to Float
We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods:

parseFloat()
Number()
Plus sign(+) */

let $num1 = '9.81'
let numFloat = parseFloat($num1)
console.log(numFloat) // 9.81

let $num2 = '9.81'
let $numFloat2 = Number($num2)
console.log($numFloat2) // 9.81

let $num3 = '9.81'
let $numFloat3 = +$num3
console.log($numFloat3) // 9.81

/* Float to Int
We can convert float numbers to integers. We use the following method to convert float to int:

parseInt() */

let $num11 = 9.81
let $numInt11 = parseInt($num11)
console.log($numInt11) // 9