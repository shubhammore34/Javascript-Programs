//Arrays
/*In contrast to variables, an array can store multiple values. Each value in an array has an index, and each index has a reference in a memory address. Each value can be accessed by using their indexes. The index of an array starts from zero, and the index of the last element is less by one from the length of the array.

An array is a collection of different data types which are ordered and changeable(modifiable). An array allows storing duplicate elements and different data types. An array can be empty, or it may have different data type values.

How to create an empty array
In JavaScript, we can create an array in different ways. Let us see different ways to create an array. It is very common to use const instead of let to declare an array variable. If you ar using const it means you do not use that variable name again. */ 

//1. Using Array constructor
// syntax
/*
const arr = Array()
or
let arr = new Array()
console.log(arr) // [] 
*/

//2. Using square brackets([])
//syntax
//This the most recommended way to create an empty list
/*
const arr = []
console.log(arr) //[]
*/

// How to create an array with values
// Array with initial values. We use length property to find the length of an array.

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const $fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs2 = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('$Numbers:', $numbers)
console.log('Number of $numbers:', $numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

/*Outputs : 
$Numbers: [0, 3.14, 9.81, 37, 98.6, 100]
Number of $numbers: 6
Fruits: ['banana', 'orange', 'mango', 'lemon']
Number of fruits: 4
Vegetables: ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
Number of vegetables: 5
Animal products: ['milk', 'meat', 'butter', 'yoghurt']
Number of animal products: 4
Web technologies: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
Number of web technologies: 7
Countries: ['Finland', 'Estonia', 'Denmark', 'Sweden', 'Norway']
Number of countries: 5
*/

//Array can have items of different data types
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] 
console.log(arr) // arr containing different data types  

/*
Creating an array using split
As we have seen in the earlier section, we can split a string at different positions, and we can change to an array. Let us see the examples below.
*/
let js = 'JavaScript'

const charsInJavaScript = js.split('')
console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let js2 = 'JavaScript'
const charsInJavaScript2 = js2.split()
console.log(charsInJavaScript2) // [ 'JavaScript' ]

let js3 = 'JavaScript'
const charsInJavaScript3 = js3.split(',')
console.log(charsInJavaScript3) // [ 'JavaScript' ]


let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]


/*Accessing array items using index
We access each element in an array using their index. An array index starts from 0. The picture below clearly shows the index of each element in the array. */

const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let $lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit)  // lemon

const $numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers

console.log($numbers.length)  // => to know the size of the array, which is 6
console.log($numbers)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log($numbers[0])      //  -> 0
console.log($numbers[5])      //  -> 100

let lastIndex = $numbers.length - 1;
console.log($numbers[lastIndex]) // -> 100


const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs)        // all the array items
console.log(webTechs.length) // => to know the size of the array, which is 7
console.log(webTechs[0])     //  -> HTML
console.log(webTechs[6])     //  -> MongoDB

let lastIndex2 = webTechs.length - 1
console.log(webTechs[lastIndex2]) // -> MongoDB

const $countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
] // List of countries

console.log($countries)      // -> all countries in array
console.log($countries[0])   //  -> Albania
console.log($countries[10])  //  -> Kenya

let lastIndex3 = $countries.length - 1;
console.log($countries[lastIndex3]) //  -> Kenya

const shoppingCart = [
  'Milk',
  'Mango',
  'Tomato',
  'Potato',
  'Avocado',
  'Meat',
  'Eggs',
  'Sugar'
] // List of food products

console.log(shoppingCart) // -> all shoppingCart in array
console.log(shoppingCart[0]) //  -> Milk
console.log(shoppingCart[7]) //  -> Sugar

let lastIndex4 = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex4]) //  -> Sugar

/*Modifying array element
An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.
*/

const numbers3 = [1, 2, 3, 4, 5]
numbers3[0] = 10      // changing 1 at index 0 to 10
numbers3[1] = 20      // changing  2 at index 1 to 20

console.log(numbers3) // [10, 20, 3, 4, 5]

const countries3 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

countries3[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
let lastIndex5 = countries3.length - 1
countries3[lastIndex5] = 'Korea' // Replacing Kenya by Korea

console.log(countries3) //  ["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]


