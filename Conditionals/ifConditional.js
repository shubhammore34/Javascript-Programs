//In JavaScript and other programming languages the key word if is to used check if a condition is true and to execute the block code. To create an if condition, we need if keyword, condition inside a parenthesis and block of code inside a curly bracket({}).

// syntax
if (condition) {
  //this part of code runs for truthy condition
}


//Example:

let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 is a positive number

//As you can see in the condition example above, 3 is greater than 0, so it is a positive number. The condition was true and the block of code was executed. However, if the condition is false, we won't see any results.

let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat.')
}