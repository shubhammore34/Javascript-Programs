/* Date Object
Time is an important thing. We like to know the time a certain activity or event. In JavaScript current time and date is created using JavaScript Date Object. The object we create using Date object provides many methods to work with date and time.The methods we use to get date and time information from a date object values are started with a word get because it provide the information. getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay() */

//Creating a time object
/*Once we create time object. The time object will provide information about time. Let us create a time object*/

const now = new Date()
console.log(now) // Fri Jan 03 2025 17:01:52 GMT+0530 (India Standard Time)


// Getting full year
// Let's extract or get the full year from a time object.

const now11 = new Date()
console.log(now11.getFullYear()) // 2025

// Getting month
// Let's extract or get the month from a time object.

const $now1 = new Date()
console.log($now1.getMonth()) // 0, because the month is January,  month(0-11)

// Getting date
// Let's extract or get the date of the month from a time object.

const now2 = new Date()
console.log(now2.getDate()) // 3, because the day of the month is 3rd,  day(1-31)

// Getting day
// Let's extract or get the day of the week from a time object.

const now3 = new Date()
console.log(now3.getDay()) // 5, because the day is Friday which is the 5th day
//  Sunday is 0, Monday is 1 and Friday is 5
// Getting the weekday as a number (0-6)

// Getting hours
// Let's extract or get the hours from a time object.

const now4 = new Date()
console.log(now4.getHours()) // 17, because the time is 17:12:00

// Getting minutes
// Let's extract or get the minutes from a time object.

const now5 = new Date()
console.log(now5.getMinutes()) // 17, because the time is 17:16:00

// Getting seconds
// Let's extract or get the seconds from a time object.

const now6 = new Date()
console.log(now6.getSeconds()) // 18, because the time is 17:16:18


//Let us format these values to a human readable time format.

const $now = new Date()
const year = $now.getFullYear() // return year
const month = $now.getMonth() + 1 // return month(0 - 11)
const date = $now.getDate() // return date (1 - 31)
const hours = $now.getHours() // return number (0 - 23)
const minutes = $now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 3/1/2025 17:20