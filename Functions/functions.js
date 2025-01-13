/*A function is a reusable block of code or programming statements designed to perform a certain task. A function is declared by a function key word followed by a name, followed by parentheses (). A parentheses can take a parameter. If a function take a parameter it will be called with argument. A function can also take a default parameter. To store a data to a function, a function has to return certain data types. To get the value we call or invoke a function. Function makes code:

clean and easy to read
reusable
easy to test
A function can be declared or created in couple of ways:

Declaration function
Expression function
Anonymous function
Arrow function
*/

// Function Declaration
// Let us see how to declare a function and how to call a function.

//declaring a function without a parameter
function functionName() {
  // code goes here
}
functionName() // calling function by its name and with parentheses


// Function without a parameter and return
// Function can be declared without a parameter.

//Example:

// function without parameter,  a function which make a number square
function square() {
  let num = 2
  let sq = num * num
  console.log(sq)
}

square() // 4


// function without parameter
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}

addTwoNumbers() // a function has to be called by its name to be executed 


function printFullName (){
    let firstName = 'Shubham'
    let lastName = 'More'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}

printFullName() // calling a function


// Function returning value
// Function can also return values, if a function does not return values the value of the function is undefined. Let us write the above functions with return. From now on, we return value to a function instead of printing it.

function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
}
console.log(printFullName())



function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total

}

console.log(addTwoNumbers())


// Function with a parameter
// In a function we can pass different data types(number, string, boolean, object, function) as a parameter.

// function with one parameter
function functionName(parm1) {
  //code goes her
}
functionName(parm1) // during calling or invoking one argument needed

function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaOfCircle(10)) // should be called with one argument


function square(number) {
  return number * number
}

console.log(square(10))


// Function with two parameters
// function with two parameters
function functionName(parm1, parm2) {
  //code goes here
}
functionName(parm1, parm2) // during calling or invoking two arguments needed


// Function without parameter doesn't take input, so lets make a function with parameters
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}
sumTwoNumbers(10, 20) // calling functions

// If a function doesn't return it doesn't store data, so it should return

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}
console.log(sumTwoNumbers(10, 20))


function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(printFullName('Shubham', 'More'))


// Function with many parameters
// function with multiple parameters
/*function functionName(parm1, parm2, parm3,...){
  //code goes here
}
functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed
*/

// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers)); //calling a function


const $areaOfCircle = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
}
console.log($areaOfCircle(10))


/*Arrow Function
Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.

Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function. */

// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
  return n * n
}

console.log(square(2)) // 4


//Arrow Function
const $square = n => {
  return n * n
}

console.log($square(2))  // -> 4



// if we have only one line in the code block, it can be written as follows, explicit return
const square2 = n => n * n  // -> 4


const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  console.log(changeToUpperCase(countries))
  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]


  const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
  console.log(printFullName('Shubham', 'More'))

//   The above function has only the return statement, therefore, we can explicitly return it as follows.

const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Shubham', 'More'))


// Function with default parameters
// Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values.

// syntax
// Declaring a function
function functionName(param = value) {
  //codes
}

// Calling function
functionName()
functionName(arg)


//Example:

function greetings(name = 'Peter') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())
console.log(greetings('Shubham'))


function generateFullName(firstName = 'Shubham', lastName = 'More') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
  console.log(generateFullName())
  console.log(generateFullName('David', 'Smith'))


  function calculateAge(birthYear, currentYear = 2024) {
    let age = currentYear - birthYear
    return age
  }
  
  console.log('Age: ', calculateAge(21))


  //Let us see how we write the above functions with arrow functions

  // syntax
  // Declaring a function
  const functionName = (param = value) => {
    //codes
  }
  
  // Calling function
  functionName()
  functionName(arg)


//Example:

const greetings = (name = 'Peter') => {
  let message = name + ', welcome to 30 Days Of JavaScript!'
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))


const generateFullName = (firstName = 'John', lastName = 'Smith') => {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))


const calculateAge = (birthYear, currentYear = 2023) => currentYear - birthYear
console.log('Age: ', calculateAge(2001))