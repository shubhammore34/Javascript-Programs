let space = ' ';           // an empty space string
let firstName = 'Shubham';
let lastName = 'More';
let country = 'India';
let city = 'Mumbai';
let language = 'JavaScript';
let hobby = 'Chess';
let quote = "HTML CSS JAVASCRIPT";
let quotWithBackTick = `HTML CSS JAVASCRIPT`;

// String Concatenation
//Connecting two or more strings together is called concatenation.

let fullName = firstName + " " + lastName; // concatenation, merging two string together.
console.log(fullName);

/* We can concatenate strings in different ways.

Concatenating Using Addition Operator

Concatenating using the addition operator is an old way. This way of concatenating is tedious and error-prone. It is good to know how to concatenate this way, but I strongly suggest to use the ES6 template strings (explained later on). */

let personInfo = 'My name is ' + fullName + ' and my hobby is playing ' + hobby; //// ES5 string addition
console.log(personInfo);



/* Long Literal Strings
A string could be a single character or paragraph or a page. If the string length is too big it does not fit in one line. We can use the backslash character (\) at the end of each line to indicate that the string will continue on the line. Example: */

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too.";

console.log(paragraph);


/* Escape Sequences in Strings
In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (") */

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')


/* Template Literals (Template Strings)
To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string. To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign. See the syntax below.

//Syntax
`String literal text`
`String literal text ${expression}`
*/

//Example 1
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
console.log(`The sum of ${a} and ${b} is ${(a + b)}`)

//Example 2
let firstName1 = 'Asabeneh'
let lastName1 = 'Yetayeh'
let country1 = 'Finland'
let city1 = 'Helsinki'
let language1 = 'JavaScript'
let hobby1 = 'Chess'
let age1 = 22
let fullName1 = firstName1 + ' ' + lastName1

let personInfoTwo = `I am ${fullName1}. I am ${age1}. I live in ${country1}.` //ES6 - String interpolation method

let personInfoThree = `I am ${fullName1}. I live in ${city1}, ${country1}. I am a ${hobby1}. I teach ${language1}.`
console.log(personInfoTwo)
console.log(personInfoThree)

