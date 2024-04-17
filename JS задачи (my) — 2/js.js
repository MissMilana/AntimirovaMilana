//Задача 23 
// console.log(3  (true && null)  false) // <-- 3 
 
/**Шаг1 
 * (true && null) 
 * null 
 */ 
 
/** Шаг2 
 * 3  null  false 
 * 3 
 */ 
 
//Задача 24 
// let a = 10 
 
// a = a + 1 
// // a+=1 
// console.log(a) //11 
 
// a = a*2 
// // a*=2 
// console.log(a) //22 
 
// a = a - 5 
// // a-=5 
// console.log(a) //17 
 
// a = a / 2 
// // a/=2 
// console.log(a) //8.5 
 
//Задача 25 
// 15 
 
// const myObject = { 
//     x: 10, 
//     y: true, 
// } 
 
// myObject.z = 'abc' 
 
// delete myObject.x 
 
// let newVariable 
 
// newVariable = 30 + 5 
 
// console.log(newVariable) 
 
// if (newVariable > 10) { 
//     console.log(`${newVariable} больше 10`) 
// } 
 
//Задача 26 
// function fn() { 
//     console.log('Привет из функции fn') 
 
// return function (a) { 
//     console.log(a) 
// } 
// } 
// fn()(true) 
 
//Задача 27 
// let arr = [1, 2] 
// arr.push(3) 
 
// console.log(arr) 
 
// arr = [1,2,3,4] 
// // либо можно так --> arr.push(3) (Если оставить в первой строке "const") 
 
// console.log(arr) 
 
//Задача 28 
// let myFavoriteAnimal1 = 'Monkey' 
// //можно и const оставить 
 
// console.log(myFavoriteAnimal1) 
 
// let myFavoriteAnimal2 = 'Cat' 
// //можно и const оставить 
// console.log(myFavoriteAnimal2) 
 
//Задача 29 
// 'use strict' 
 
// function myFunction() { 
//     const a = 2 
//     return a  
// } 
 
// myFunction() 
 
// console.log(a) 
 
//Задача 30 
// setTimeout(function () { 
//     console.log('Привет из функции myFn') 
// }, 2000) 
 
//Задача 31 
// let i = 1 
 
// const messageIntervalId = setInterval(() => { 
//     console.log('Сообщение' + i) 
//     i = i+1 
// }, 2000) 
 
// setTimeout(() => clearInterval(messageIntervalId), 10000) 
 
//Задача 32 
// const myArray = [true, null] 
 
// myArray.unshift('Привет') 
// console.log (myArray.unshift (100)) 
 
// console.log(myArray) 
 
//Задача 33 
// const myArray = [1, 2] 
 
// myArray[10] = 'abc' 
 
// console.log(myArray) 
 
// console.log(myArray.length) 
 
//Задача 34 
// const cars = [ 
//     { 
//         carBrand:'BMW', 
//         price: 12000, 
//         isAvailableForSale: true, 
//     }, 
//     { 
//         carBrand: 'Honda', 
//         price: 10000, 
//         isAvailableForSale: false, 
//     }, 
//     { 
//         carBrand: 'Toyota', 
//         price: 8000, 
//         isAvailableForSale: true, 
//     }, 
// ] 
 
// const newCar = { 
//     carBrand: 'Tesla', 
//     price: 20000, 
//     isAvailableForSale: false, 
// } 
 
// cars.push(newCar) 
 
// console.log (cars) 
// console.log (cars[1].carBrand) 
 
//Задача 35 
// const myObject = { 
//     key1: true, 
//     key5: 10, 
//     key3: 'abc', 
//     key4: null, 
//     key10: NaN, 
// } 
 
// const ObjectKeys = Object.keys(myObject) 
// ObjectKeys.forEach((key) => { 
//     if (key === 'key1' || key === 'key3') { 
//         console.log(myObject[key]) 
//     } 
// }) 
 
//Задача 36 
// const MIN = 1000 
// const MAX = 9999 
 
// const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351] 
// // const myNumbers = [1, 3, 5, 7, 9, 10] 
 
// const randomNumber = (min, max) => { 
//     return Math.floor(Math.random() * (max - min + 1) + min) 
// } 
// // console.log(randomNumber(MIN, MAX)) = можно и так 
 
// const addRandomNumberToArray = (arr, min, max) => { 
//     let newRandomNumber 
//     const updatedArr = [...arr] 
 
 
//     do { 
//         newRandomNumber = randomNumber(min, max) 
//         // console.log(newRandomNumber) 
//     } while (updatedArr.includes(newRandomNumber)) 
 
//     updatedArr.push(newRandomNumber)  
 
//     return updatedArr  
// } 
 
// const updatedArray = addRandomNumberToArray(myNumbers, MIN, MAX) 
 
// console.log('UPDATED ARRAY', updatedArray) 
// console.log('ORIGINAL ARRAY', myNumbers) 
 
// console.log(myNumbers.includes(2355)) 
 
//Задача 37 
// const myObject = { 
//     name: 'Milke', 
//     age: 30, 
//     city: 'London', 
// } 
 
// Object.prototype.country = 'England' 
 
// for (let key in myObject) { 
//     if (myObject.hasOwnProperty(key)) { 
//
console.log(myObject[key]) 
//     } 
 
// } 
 
// // console.log(myObject.country) 
 
//Задача 38 #1 
// function isArrayEmpty(inputArray) { 
//     if (inputArray.length > 0) { 
//         return 'Массив не пустой' 
//     }  
     
//         return 'Массив пустой' 
     
// } 
 
// console.log(isArrayEmpty([1, 3])) 
// console.log(isArrayEmpty([])) 
 
//Задача 38 #2 
// function isArrayEmpty(inputArray) { 
//            return inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой' 
//     } 
     
//     console.log(isArrayEmpty([1, 3])) 
//     console.log(isArrayEmpty([])) 
 
//Задача 38 #3 Явный возврат результата 
//  const isArrayEmpty = (inputArray) => { 
//     return inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой' 
// } 
 
// console.log(isArrayEmpty([1, 3])) 
// console.log(isArrayEmpty([])) 
 
//Задача 38 #3 Неявный возврат результата 
// const isArrayEmpty = (inputArray) =>  
//     inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой' 
 
 
// console.log(isArrayEmpty([1, 3])) 
// console.log(isArrayEmpty([])) 
 
// Задача 39 
// const myCities = ['London', 'New York', 'Singapore'] 
 
// const cityInfo = ({index, city}) =>  
// ${city} is at the index ${index} in the myCities array  
 
// myCities.forEach((city, index) => console.log(cityInfo ({index, city}))) 
 
// Задача 40 #1 
// const postsJSON = [ 
//     '{"postId":1355,"commentsQuantity":5}', 
//     '{"postId":5131,"commentsQuantity":13}', 
//     '{"postId":6134,"commentsQuantity":2}', 
//     '{"postId":2351,"commentsQuantity":8}', 
// ] 
 
// const postJS = postsJSON.map((post) => JSON.parse(post)) 
 
// // console.log(postsJSON) 
// console.log(postJS) 
 
// console.log(postsJS[1].postId) 
 
// console.log(postsJS[postsJS.length - 1].commentsQuantity)

