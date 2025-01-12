/*Loops
In programming languages to carry out repetitive task we use different kinds of loops. The following examples are the commonly used loops in JavaScript and other programming languages. */

/*for Loop
// For loop structure
for(initialization, condition, increment/decrement) {
  // code goes here
}
  */


for(let i = 0; i <= 5; i++) {
    console.log(i) // 0 1 2 3 4 5
  }


for(let i = 0; i <= 5; i++) {
console.log(i) // 0 1 2 3 4 5
}

for(let i = 5; i >= 0; i--) {
    console.log(i) // 5 4 3 2 1 0
}

for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
  }


  const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
  const newArr = []
  for(let i = 0; i < countries.length; i++){
    newArr.push(countries[i].toUpperCase()) // ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
  }
  
  console.log(newArr)


// Adding all elements in the array

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

}

console.log(sum)  // 15


//Creating a new array based on the existing array

const $numbers = [1, 2, 3, 4, 5]
const $newArr = []
let $sum = 0
for(let i = 0; i < $numbers.length; i++){
  $newArr.push($numbers[i] ** 2)

}

console.log($newArr)  // [1, 4, 9, 16, 25]


const countries3 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr2 = []
for(let i = 0; i < countries3.length; i++){
  newArr2.push(countries3[i].toUpperCase())
}

console.log(newArr2)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
  

let countries4 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(countries4.length) //5


//while loop
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5


//do while loop
let m = 0
do {
  console.log(m)
  m++
} while (m <= 5)

// 0 1 2 3 4 5


/* for of loop
We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array. */ 

//syntax
for (const element of arr) {
  // code goes here
}


//Example : 
const numbers4 = [1, 2, 3, 4, 5]

for (const num of numbers4) {
  console.log(num)
}

// 1 2 3 4 5

for (const num of numbers4) {
  console.log(num * num)
}

// 1 4 9 16 25

// adding all the numbers in the array
let sum2 = 0
for (const num of numbers4) {
  sum2 = sum2 + num  
	// can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum2) // 15


//Example 2
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]) // get only the first letter of each element,  H C J R N M
}


const countries5 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr5 = []
for(const country of countries5){
  newArr5.push(country.toUpperCase())
}

console.log(newArr5)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]


//break
//Break is used to interrupt a loop.

for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)  // 0 1 2
}


//continue
// We use the keyword continue to skip a certain iterations.

for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i) // 0 1 2 4 5
}

