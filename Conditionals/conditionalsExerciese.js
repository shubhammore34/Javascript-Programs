/* Exercises: Level 1
1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive. */

let userInput = prompt("Enter your age : ")
if(userInput>=18) {
    console.log('You are old enough to drive');
}

else {
    console.log(`wait for the ${18 - userInput} years to turn 18.`)  
}

/*  2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me. */

let yourAge = prompt("Enter your age : ");
let myAge = 22;

if(myAge<yourAge) {
    console.log("You are older than me.");
}

else if(myAge==yourAge) {
    console.log("We both are at same age")
}
else {
    console.log("I am older than you")
}

/* 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

1.using if else
2.ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3 */

  //using if else
  let a = prompt("Enter value of a : ");
  let b = prompt("Enter value of b : ");

  if(a>b)
  {
    console.log('a is greater than b')
  }

  else 
  {
    console.log('a is less than b')
  }

  //Using ternary operator
  (a>b)? (console.log('a is greater than b')): (console.log('a is less than b'))

/* 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number. */

let number = prompt("Enter number  : ")
if(number%2==0) {
    console.log("Given number is even")
}

else {
    console.log("Given number is odd")
}

// Exercise level 2
/*
1.Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

let score = prompt("Enter your score  : ")
if(score>=80 && score<=100) {
    console.log('A')
}

else if(score>=70 && score<=89) {
    console.log('B')
}

else if(score>=60 && score<=69) {
    console.log('C')
}

else if(score>=50 && score<=59) {
    console.log('D')
}

else {
    console.log('F')
}

/*2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/


let season2 = prompt("Enter month : ")
let season = season2.toLowerCase()
switch(season) 
{
    case 'january':
    console.log(`The season is Winter`)
    break

    case 'february':
    console.log(`The season is Winter`)
    break

    case 'march':
    console.log(`The season is Spring`)
    break
    
    case 'april':
    console.log(`The season is Spring`)
    break
    
    case 'may':
    console.log(`The season is Spring`)
    break

    case 'june':
    console.log(`The season is Summer`)
    break

    case 'july':
    console.log(`The season is Summer`)
    break

    case 'august':
    console.log(`The season is Summer`)
    break

    case 'september':
    console.log(`The season is Autumn`)
    break

    case 'occtober':
    console.log(`The season is Autumn`)
    break

    case 'novemver':
    console.log(`The season is Autumn`)
    break

    case 'december':
    console.log(`The season is Winter`)
    break
    
}

/*  3.Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.*/

let day = prompt("What is the day today ? ");
let day2 = day.toLowerCase()

switch(day2)
{

    case 'monday':
    console.log(`${day2} is a working day`);
    break;

    case 'tuesday':
    console.log(`${day2} is a working day`);
    break;

    case 'wednesday':
    console.log(`${day2} is a working day`);
    break;

    case 'thursday':
    console.log(`${day2} is a working day`);
    break;

    case 'friday':
    console.log(`${day2} is a working day`);
    break;

    case 'saturday':
    console.log(`${day2} is weekend`);
    break;

    case 'sunday':
    console.log(`${day2} is weekend`);
    break;
}

