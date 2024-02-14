// Задание1
// function compareNumbers() {
//     let num1 = parseFloat(prompt("Введите первое число:"));
//     let num2 = parseFloat(prompt("Введите второе число:"));

//     if (isNaN(num1) || isNaN(num2)) {
//         return "Ошибка: Пожалуйста, введите числа.";
//     }

//     if (num1 < num2) {
//         return -1;
//     } else if (num1 > num2) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
// let comparisonResult = compareNumbers();
// alert("Результат:", comparisonResult);


// Задание2
// let num = +prompt('число')
// function factorial(x) {
//     if (x === 0) {
//       return 1;
//    }
//     return x * factorial(x-1);

//   }
// alert(factorial(num));


// Задание3
// let num1 = prompt('1')

// let num2 = prompt('2')

// let num3 = prompt('3')

// function chislo(x1) {
//    return x1
// }

// alert(chislo((num1 + num2 + num3)))


// Задание4
// let longUser = +prompt('Введите длину')
// let widthUser = +prompt('Введите ширину')

// function calc() {
//     if (longUser && widthUser) {
//         return longUser * widthUser
//     }
//     else if (widthUser) {
//         return widthUser * widthUser
//     }
//     else if (longUser) {
//         return longUser * longUser
//     }


// }

// alert(calc())



// Задание5
// function isPerfectNumber() {
//     let number = parseInt(prompt("Введите число:"));

//     if (isNaN(number) || number <= 0) {
//         return "Ошибка: Пожалуйста, введите положительное число.";
//     }

//     let sum = 0;
//     for (let i = 1; i < number; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }

//     return sum === number;
// }

// // Пример использования функции:
// let inputNumber = isPerfectNumber();

// if (inputNumber) {
//     alert("Введенное число является совершенным.");
// } else {
//     alert("Введенное число не является совершенным.");
// }


// Задание6
// function isPerfectNumber(number) {
//     let sum = 0;

//     for (let i = 1; i <= number / 2; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }

//     return sum === number && number !== 0;
// }


// function perfectNumbersInRange(min, max) {
//     const perfectNumbers = [];

//     for (let i = min; i <= max; i++) {
//         if (isPerfectNumber(i)) {
//             perfectNumbers.push(i);
//         }
//     }

//     return perfectNumbers;
// }


// const minRange = 1;
// const maxRange = 1000;

// const perfectNumbers = perfectNumbersInRange(minRange, maxRange);
// alert("Совершенные числа в диапазоне от", minRange, "до", maxRange, ":", perfectNumbers);


// Задание7
// let hours = prompt('Введите часы')
// let minuts = prompt('Введите минуты')
// let seconds = prompt('Введите секунды')

// function time(x) {
//     return x
// }
// console.log(time(`Время ${hours}:${minuts}:${seconds}`))




// Задание8
// hours = +prompt('часы');
// minuts = +prompt('минуты');
// seconds = +prompt('секунды');
// function seconds (a,b,c) {
// return (h * 3600) + (m * 60) + s
// }
// alert(seconds(h,m,s))


// Задание9
// let x = +prompt('Введите секунды') 

// function calcTime() {
//     let y = Math.floor(x / 60 / 60)

//     let z = Math.floor(x / 60) - (y * 60)

//     let h = x % 60

//     let result = y + ':' + z + ':' + h;
// }

// result = [
//     y.toString().padStart(2, '0'),
//     z.toString().padStart(2, '0'),
//     h.toString().padStart(2, '0')
// ].join(':');


// Задание10
// function dateToSeconds(hours, minutes, seconds) {
//     return hours * 3600 + minutes * 60 + seconds;
// }


// function timeDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
//     const secondsDiff = dateToSeconds(hours1, minutes1, seconds1) - dateToSeconds(hours2, minutes2, seconds2);

  
//     function formatNumber(num) {
//         return num < 10 ? '0' + num : num;
//     }


//     const hours = Math.floor(secondsDiff / 3600);
//     const minutes = Math.floor((secondsDiff % 3600) / 60);
//     const seconds = secondsDiff % 60;

//     return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
// }


// const result = timeDifference(12, 30, 45, 10, 15, 20);
// alert(result);