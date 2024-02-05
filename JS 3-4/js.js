// let visYear;
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     visYear = true

// }
// else {
//     visYear = false
// }


// let maxDays;
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         maxDays = 31;
//         break;
//     case 4: case 6: case 9: case 11:
//         maxDays = 30;
//         break;
//     case 2:
//         maxDays = visYear ? 29 : 28;
//         break;
//     default:
//         alert("Некорректный месяц");
//         break;
// }


// if (day < 1 || day > maxDays) {
//     alert("Некорректный месяц");
// }
// else {
//     if (day === maxDays) {
//         if (month === 12) {
//             day = 1;
//             month = 1;
//             year++;
//         } else {
//             day = 1;
//             month++;
//         }
//     } else {
//         day++;
//     }
// }

// alert(`Следующая дата: ${day}.${month}.${year} ${visYear} `);








// let x1 = prompt('Введите первое число')
// let x2 = prompt('Введите второе число')
// let x3 = prompt('Введите третье число')


// function result(x1,x2,x3) {

//     let sum = x1 + x2 + x3
//     alert(Number(sum))

// }


// result(x1,x2,x3)


// Задание 10
// let x = +prompt('Введите секунды')

// let y = Math.floor(x / 60 / 60)

// let z = Math.floor(x / 60) - (y * 60)

// let h = x % 60


// let result = y + ':' + z + ':' + h;


// result = [
//     y.toString().padStart(2, '0'),
//     z.toString().padStart(2, '0'),
//     h.toString().padStart(2, '0')
// ].join(':');


// alert(result)


// let x = +prompt("Введите часы")
// let y = +prompt("Введите минуты")
// let z = +prompt("Введите секунды")


// function seconds(x,y,z) {
//     return (x * 3600) + (y * 60) + z
// }

// alert(seconds(x,y,z))


// let num1 = +prompt('Введите первое число')
//     let num2 = +prompt('Введите второе число')

//     function result(a, b) {
//         if (a < b) {
//             alert(-1)
//         }
//         else if (a > b) {
//             alert(1)
//         }
//         else if (a === b) {
//             alert(0)
//         }
//     }

//     result(num1, num2)