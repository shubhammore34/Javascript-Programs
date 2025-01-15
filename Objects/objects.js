/* Object
Everything can be an object and objects do have properties and properties have values, so an object is a key value pair. The order of the key is not reserved, or there is no order. To create an object literal, we use two curly brackets.
*/

// Creating an empty object
// An empty object

const person1 = {}


// Creating an objecting with values
// Now, the person object has firstName, lastName, age, location, skills and isMarried properties. The value of properties or keys could be a string, number, boolean, an object, null, undefined or a function.

// Let us see some examples of object. Each key has a value in the object.

const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle) // {length: 20, width: 20}

const person2 = {
  firstName: 'Shubham',
  lastName: 'More',
  age: 18,
  country: 'India',
  city: 'Bengaluru',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true
}
console.log(person2)


/*Getting values from an object
We can access values of object using two methods:

using . followed by key name if the key-name is a one word
using square bracket and a quote*/
const person = {
  firstName: 'Shubham',
  lastName: 'More',
  age: 25,
  country: 'India',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+91897654321'
}

// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number'])


//Creating object methods
//Now, the person object has getFullName properties. The getFullName is function inside the person object and we call it an object method. The this key word refers to the object itself. We can use the word this to access the values of different properties of the object. We can not use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself. Example of object:

const person4 = {
  firstName: 'Shubham',
  lastName: 'More',
  age: 25,
  country: 'India',
  city: 'Mumbai',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person4.getFullName())
