// 1. Declare four variables without assigning values

//first way
let firstName;
let lastName;
let companyName;
let favoriteColor;
console.log(firstName, lastName, companyName, favoriteColor); //undefined undefined undefined undefined

//second way
var school;
var college;
var nursery;
var highSchool;
console.log(school, college, nursery, highSchool); ////undefined undefined undefined undefined


//third way

/* const speedOfLight;                    
const eulersNumber;                
const freezingPoint;
const collegeTime; */

// Error in third way : --> SyntaxError: Missing initializer in const declaration

// 2. Declare four variables with assigning values

//first way
let food = "Idali";
let grades = "A+";
let price = 49;
let score = 221;
console.log(food, grades, price, score); // Idali A+ 49 221

//second way
var name = "Shubham More";
var age = 22;
var company = "Google";
var position = "Software Engineer";
console.log(name, age, company, position); // Shubham More 22 Google Software Engineer

//third way
const gravity = 9.81;                    // earth gravity  in m/s2
const boilingPoint = 100;                // water boiling point, temperature in oC
const PI = 3.14;                         // geometrical constant
const temperature = 40;                  // temperature in my city in oC
console.log(gravity, boilingPoint, PI, temperature); // 9.81 100 3.14 40

// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
let first_Name = "Shubham";
let last_Name = `More`;
let isMarried = false;
let country = 'India';
let mineAge = 23;
console.log(first_Name, last_Name, isMarried, country, mineAge); //  Shubham More false India 23


// 4. Declare variables to store your first name, last name, marital status, country and age in a single line
let $first_Name = "Shubham",
    $last_Name = `More`,
    $isMarried = false,
    $country = 'India',
    $mineAge = 23;
console.log($first_Name, $last_Name, $isMarried, $country, $mineAge); //  Shubham More false India 23

/* 5. Declare two variables myAge and yourAge and assign them initial values and log to browser console. 

Output:
I am 25 years old.
You are 30 years old.  */

let myAge = 25;
let yourAge = 30;
console.log("I am " + myAge + " years old");
console.log("You are " + yourAge + " years old");










