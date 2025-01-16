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


// Object Methods
// There are different methods to manipulate an object. Let us see some of the available methods.

// Object.assign: To copy an object without modifying the original object

const person5 = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign(person5)
console.log(copyPerson)

console.log("----------------------------------------------")

// Getting object keys using Object.keys()
// Object.keys: To get the keys or properties of an object as an array

const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']


// Getting object values using Object.values()
// Object.values:To get values of an object as an array

const values = Object.values(copyPerson)
console.log(values)

console.log("----------------------------------------------")

// Getting object keys and values using Object.entries()
// Object.entries:To get the keys and values in an array

const entries = Object.entries(copyPerson)
console.log(entries)


// Checking properties using hasOwnProperty()
// hasOwnProperty: To check if a specific key or property exist in an object

console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))
console.log(copyPerson.hasOwnProperty('firstName'))
console.log(copyPerson.hasOwnProperty('skills'));
