//1. Declare a function fullName and in that print out your full name.
//1st way
function fullName() {
    console.log('Shubham More')
}
fullName()

//2nd way
function fullName(name) {
    console.log(`${name}`);
    
}
fullName(`Shubham`)

//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function FullName(firstName, lastName) {
    return `${firstName} ${lastName}`
  }
  console.log(FullName('Shubham', 'More'))