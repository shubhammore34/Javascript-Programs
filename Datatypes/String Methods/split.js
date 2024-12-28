// split(): The split method splits a string at a specified place.
let string = '30 Days Of JavaScript'
console.log(string.split())     // ["30 Days Of JavaScript"]
console.log(string.split(' '))  // ['30', 'Days', 'Of', 'JavaScript']

let firstName = 'Shubham'
console.log(firstName.split())  // ["Shubham"]
console.log(firstName.split(''))  // ['S', 'h', 'u', 'b', 'h', 'a', 'm']

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(',')) // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', '))   //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]