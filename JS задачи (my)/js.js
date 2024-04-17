// Задача1
// const myCountry = 'Kazakhstan'
// console.log(myCountry)

// Задача2
// let isStudent

// isStudent = true

// console.log(isStudent)

// isStudent = false
// console.log(isStudent)

// Задача3
// const myNumber1 = 8
// const myNumber2 = 15

// const mult = myNumber1 * myNumber2

// console.log(mult)

// Задача4 #1
// const myName = 'Milana'
// const mySurname = 'Antimirova'
// const myProfession = 'Designer'

// const personInfo = 'My name is ' + myName + ' ' + mySurname + ' and I am ' + myProfession

// console.log(personInfo)

// Задача4 #2
// const personInfo2 = `My name is ${myName} ${mySurname} and I am ${myProfession}`
// console.log(personInfo2)

// Задача5
// SINGLE-LINE COMMENT
// Это однострочный комментарий

//iNLINE COMMENT
// const myName = 'Milana' // это моё имя

// MULTILINE COMMENT
/* ЭТО МНОГОСТРОЧНЫЙ
КОММЕНТАРИЙ ВАРИАНТ №1
*/

// const mySurname = 'Antimirova'

/**
 * Это
 * многострочный
 * комментарий
 */

// Задача6
// const myString = 'abc'
// const myNumber = 18
// const myBoolean = true
// const myNull = null
// let myUndefined
// const myObjeck = {}
// const myArray = []

// console.log(typeof myString)
// console.log(typeof myNumber)
// console.log(typeof myBoolean)
// console.log(typeof myNull)
// console.log(typeof myUndefined)
// console.log(typeof myObject)
// console.log(typeof myArray)

// Задача7
// function printMyName() {
//     const myName = 'Milana'
//     console.log(myName)
// }

// printMyName()

// Задача8
// const hello = function (name) {
//     return 'Привет, ' + name
// }

// console.log(hello('Милана'))
// console.log(hello('Диана'))

// Задача9
// const helloWorld = () => 'Привет, мир!'

// console.log(helloWorld())

// Задача10
// /**
//  * Возращает разницу двух чисел
//  * @param {number} a
//  * @param {number} b
//  * @returns {number} Разница чисел
//  */

// function diff(a, b) {
//     return a - b
// }

// const result = diff(10, 5)
// console.log(result)

//Задача11 №1 
// setTimeout(() => console.log('Привет, мир!'), 5000) 

//Задача11 №2 
// const helloWorld = () => console.log('Привет, мир!') 

// setTimeout(helloWorld, 5000) 

//Задача12 
// const person = { 
//     name: 'Milana', 
//     surname: 'Antimirova', 
//     favoriteNumber: 5 
// } 

// const personInfo = My name is ${person.name} ${person.surname} and my favorite number is ${person.favoriteNumber} 

// console.log(personInfo) 

//Задача13 
// const myFavoriteSport = 'Snowboarding' 

// const stringLength = myFavoriteSport.length 

// console.log(stringLength) 

//Задача14 
// const myFavoriteSeason = 'summer' 

// console.log(myFavoriteSeason instanceof String) 

// console.log(typeof myFavoriteSeason) 

// const seasonToUpperCase = myFavoriteSeason.toUpperCase() 
// console.log(seasonToUpperCase) 

//Задача14/2 
// const myString = new String('Milana') 
// console.log(myString instanceof String) 
// console.log(typeof myString) 
// console.log(myString.toUpperCase()) 

//Задача15 
// const greeting ='Good Morning' 

// const updateGreeting = greeting.replace('Morning','Evening') 

// console.log(updatedGreeting) 

//Задача16 
// const myArray = [true, 15, null] 

// console.log(myArray[0]) 

// console.log(myArray.length) 

//Задача17 
// const myArray = ['abc', null, 25, true] 

// console.log(myArray) 

// myArray[1] = 125 

// console.log(myArray) 

//Задача18 
// const myArray = ['abc', true, undefined, 200] 

// myArray.forEach((element) => {console.log(element)}) 


//Задача19 
// const myNumbers = [4, 15, 107, 80] 

// console.log(myNumbers) 

// myNumbers.push(10) 

// console.log(myNumbers) 

// myNumbers.push(5, 25) 
// console.log(myNumbers) 
// console.log(myNumbers.length) 

//Задача20 
// const currentDate = new Date() 

// const currentDateInMs = currentDate.getTime() 

// console.log(currentDateInMs)

//Задача21 вариант1
// let myVariable1 = 10
// let myVariable2 = '5'

// console.log(parseInt('25'))
// console.log(typeof parseInt('25'))

// myVariable1 = '20'
// myVariable2 = 100

//Задача21 вариант2
// console.log(+'35')
// console.log(typeof +'35')

// myVariable1 = '20'
// myVariable2 = 100


//Задача21 вариант3

// let myVariable1 = 10
// let myVariable2 = '5'
// console.log(parseInt(myVariable1) <= parseInt(myVariable2))

// myVariable1 = '20'
// myVariable2 = 100
// console.log(parseInt(myVariable1) <= parseInt(myVariable2))

//Задача22

const myNumber1 = 10 // 10 = 3 + 3 + 3 + 1
const myNumber2 = 3

console.log(myNumber1 % myNumber2)
console.log(((100 % 23) % 5) % 3)

