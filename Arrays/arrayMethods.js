/*Methods to manipulate array
There are different methods to manipulate an array. These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift
*/

// Array Constructor
// Array :To create an array.


const $arr = Array() // creates an an empty array
console.log($arr)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]


/*Creating static values with fill
fill: Fill all the array elements with a static value
*/

const arr6 = Array() // creates an an empty array
console.log(arr6)

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]


/*Concatenating array using concat
concat:To concatenate two arrays.
*/

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]

const fruits2 = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
const vegetables2 = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
const fruitsAndVegetables = fruits2.concat(vegetables2)                 // concatenate the two arrays

console.log(fruitsAndVegetables)
["banana", "orange", "mango", "lemon", "Tomato", "Potato", "Cabbage", "Onion", "Carrot"]


// Getting array length
// Length:To know the size of the array

const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length) // -> 5 is the size of the array


// Getting index of an element in arr array
// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.

const numbers2 = [1, 2, 3, 4, 5]

console.log(numbers2.indexOf(5)) // -> 4
console.log(numbers2.indexOf(0)) // -> -1
console.log(numbers2.indexOf(1)) // -> 0
console.log(numbers2.indexOf(6)) // -> -1


/*Check an element if it exist in an array.
Check items in a list  */

// let us check if a banana exist in the array
const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does exist in the array

// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

// let us check if an avocado exist in the array
let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
if(indexOfAvocado === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does not exist in the array


/*Getting last index of an element in array
//lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
*/
const numbers9 = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers9.lastIndexOf(2)) // 7
console.log(numbers9.lastIndexOf(0)) // -1
console.log(numbers9.lastIndexOf(1)) //  6
console.log(numbers9.lastIndexOf(4)) //  3
console.log(numbers9.lastIndexOf(6)) // -1


/*includes:To check if an item exist in an array. If it exist it returns the true else it returns false. */

const numbers6 = [1, 2, 3, 4, 5]

console.log(numbers6.includes(5)) // true
console.log(numbers6.includes(0)) // false
console.log(numbers6.includes(1)) // true
console.log(numbers6.includes(6)) // false

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs.includes('Node'))  // true
console.log(webTechs.includes('C'))     // false


// Checking array
// Array.isArray:To check if the data type is an array

const numbers11 = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers11)) // true

const number = 100
console.log(Array.isArray(number)) // false

/*Converting array to string
toString:Converts array to string */

const numbers12 = [1, 2, 3, 4, 5]
console.log(numbers12.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook


/*Joining array elements
join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items. */

const numbers13 = [1, 2, 3, 4, 5]
console.log(numbers13.join()) // 1,2,3,4,5

const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names2.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names2.join('')) //AsabenehMathiasEliasBrook
console.log(names2.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names2.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names2.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const webTechs4 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs4.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs4.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"



// Slice array elements
// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

  const numbers14 = [1,2,3,4,5]

  console.log(numbers14.slice()) // -> it copies all  item
  console.log(numbers14.slice(0)) // -> it copies all  item
  console.log(numbers14.slice(0, numbers14.length)) // it copies all  item
  console.log(numbers14.slice(1,4)) // -> [2,3,4] // it doesn't include the starting and ending position


//   Splice method in array
// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

  const numbers15 = [1, 2, 3, 4, 5]
  numbers15.splice()
  console.log(numbers15)                // -> remove all items

  const numbers16 = [1, 2, 3, 4, 5]
  numbers16.splice(0,1)
  console.log(numbers16)            // remove the first item

  const numbers17 = [1, 2, 3, 4, 5, 6]
  numbers17.splice(3, 3, 7, 8, 9)
  console.log(numbers17.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items


//   Adding item to an array using push
// Push: adding item in the end. To add item to the end of an existing array we use the push method.

// syntax
const arr  = ['item1', 'item2','item3']
arr.push('new item')
console.log(arr) // ['item1', 'item2','item3','new item']

const numbers20 = [1, 2, 3, 4, 5]
numbers20.push(6)
console.log(numbers20) // -> [1,2,3,4,5,6]

numbers20.pop() // -> remove one item from the end
console.log(numbers20) // -> [1,2,3,4,5]

let fruits3 = ['banana', 'orange', 'mango', 'lemon']
fruits3.push('apple')
console.log(fruits3)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits3.push('lime')
console.log(fruits3)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']


// Removing the end element using pop
// pop: Removing item in the end.

const numbers21 = [1, 2, 3, 4, 5]
numbers.pop() // -> remove one item from the end
console.log(numbers21) // -> [1,2,3,4]


// Removing an element from the beginning
// shift: Removing one array element in the beginning of the array.

const numbers22 = [1, 2, 3, 4, 5]
numbers22.shift() // -> remove one item from the beginning
console.log(numbers22) // -> [2,3,4,5]


// Add an element from the beginning
// unshift: Adding array element in the beginning of the array.

const numbers23 = [1, 2, 3, 4, 5]
numbers23.unshift(0) // -> add one item from the beginning
console.log(numbers23) // -> [0,1,2,3,4,5]

// Reversing array order
// reverse: reverse the order of an array.

const numbers24 = [1, 2, 3, 4, 5]
numbers24.reverse() // -> reverse array order
console.log(numbers24) // [5, 4, 3, 2, 1]

numbers24.reverse()
console.log(numbers24) // [1, 2, 3, 4, 5]


// Sorting elements in array
// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

const webTechs20 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

webTechs20.sort()
console.log(webTechs20) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs20.reverse() // after sorting we can reverse it
console.log(webTechs20) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]


/*Array of arrays
Array can store different data types including an array itself. Let us create an array of  arrays */

const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]