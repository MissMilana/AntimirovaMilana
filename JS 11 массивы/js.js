// Задание1
// let arrayNumbers = [1, 5, 8, 9, 3, 2, 4, 8, 6, 0];
// function calculatorNumbers() {
//   let minNumbers = Math.min.apply(null,[1, 5, 8, 9, 3, 2, 4, 8, 6, 0]);
//   let maxNumbers = Math.max.apply(null,[1, 5, 8, 9, 3, 2, 4, 8, 6, 0]);
//   alert(`min: ${minNumbers}\n max: ${maxNumbers}`);
// }

// calculatorNumbers();


// Задание2
// let arrayNumbers = [];

// for (i = 0; i < 5; i++) {
//   let inputNumbers = prompt("Введите числа" + (i + 1) + ":");
//   arrayNumbers.push(parseFloat(inputNumbers));
// }
// alert("Массив:", arrayNumbers);
// let resulSumNumbers = 0;
// for (j = 0; j < arrayNumbers.length; j++) {
//   resulSumNumbers += arrayNumbers[j];
// }
// alert("Сумма значений:", resulSumNumbers);

// let calculatorNumbers = resulSumNumbers / arrayNumbers.length;

// alert("Среднее значение", calculatorNumbers);


// Задание3
// let arrayNumberOne = [3, 3, 4, 5, 6, 7, 1];
// let arrayNumberTwo = [4, 3, 6, 1, 9, 2, 0];

// for (i = 0; i < arrayNumberOne.length   ; i++) {
//     if (arrayNumberOne[i] === arrayNumberTwo[i]) {
//         alert('Значение равны,', "равны", arrayNumberOne[i])
//     }
//     else {
//         alert("Значения на позиции", i, "различаются:");
//         alert("  В первом массиве:", arrayNumberOne[i]);
//         alert("  Во втором массиве:", arrayNumberTwo[i]);
//     }
// }


// Задание4
// let arrayNumber = [2, 43, 4, 55, 6, 7, 8, 1, 32, 50];
// let arrayNumberEven = [];

// for (i = 0; i < arrayNumber.length; i++) {
//     if (arrayNumber[i] % 2 == 0 ) {
//         arrayNumberEven.push(arrayNumber[i])
//     }
// }
// alert("Массив четных чисел:", arrayNumberEven);