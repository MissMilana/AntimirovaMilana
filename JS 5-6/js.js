// Задание1
// let a = +prompt('начало')
// let b = +prompt('конец')
// let sum = 0

// while(a <= b){
//        sum+=a;
//        a++;
//     }

// alert(sum)

// Задание2
// let a = +prompt('Первое число')
// let b = +prompt('Второе число')

// while (a != 0 & b != 0) {
//     if (a > b) {
//         a = a % b
//     }
//     else {
//         b = b % a
//     }
// }

// alert(a + b)


// Задание3
// let x1 = +prompt('число')
// let result = x1

// while (0 < result) {
//     if (x1 % result === 0) {
//         console.log(result)
//     }
//     result--
// }

// Задание4
// let x = prompt('число');

// alert(x.length);


// Задание5
// let numBer = +prompt('Введите десять чисел')

// let even = 0
// let odd = 0


// while (numBer > 0) {

//     if (numBer % 2 == 0) {
//         even += 1
//     }
//     else {
//         odd -= 1
//         numBer = numBer % 10
//     }
// }


// Задание 6
// do {
//     let numBer1 = +prompt('Введите первое число');
//     let numBer2 = +prompt('Введите второе число');
//     let result = prompt('Выберите знак - \n + \n / \n *');

//     switch (result) {
//         case '+':
//             alert(numBer1 + numBer2);
//             break;
//         case '-':
//             alert(numBer1 - numBer2);
//             break;
//         case '/':
//             alert(numBer1 / numBer2);
//             break;
//         case '*':
//             alert(numBer1 * numBer2);
//         default:
//             break;
//     }

// } while (confirm('Хотите ли вы решить еще один пример?'));

// Задание 7
// let count = prompt('Введите число','')
// let step = +prompt('На сколько сдвинуть', '0')
// arr = count.split('');

// for(let i = 0; i < step; i++) {
//   arr.push(arr.shift())
// }
// alert(arr.join``);


// Задание 8
// let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
// let day = 0


// while (confirm(`${days[day]}. Хотите увидеть следующий день`)) {
//     day = (day + 1) % days.length
// }



// for (i=2; i <= 10; i++) {
//     for (j=2; j <= 10; j++) {
//     alert(`${i} x ${j} = ${i * j}`);
//     }
//     alert('\n');
//     }



// Задание 9

// alert("Загадайте число от 0 до 100.");

// let low = 0;
// let high = 100;

// while (true) {
//     let mid = Math.floor((low + high) / 2);
//     let userInput = prompt(`Ваше число больше ${ mid }, меньше ${ mid } или равно ${ mid } ? (Введите >, <или =)`);

//     if (userInput
//          === '>') {
//         low = mid + 1;
//     } else if (userInput === '<') {
//         high = mid - 1;
//     } else if (
//         userInput === '=') {
//         console.log(`Ваше число - ${ mid }!`);
//         break;
//     } else {
//         alert("Пожалуйста, введите >, < или =.");
//     }
// }