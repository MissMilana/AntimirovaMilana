// Задание 1
let nameUser = prompt('Введите свое имя')

alert('Привет,' + nameUser)


// Задание 2
let age = prompt('Введите дату своего рождения.')
let year = 2024

alert(2024 - age)

// Задание 3
let radius = +prompt('Введите длину стороны квадрата')

alert(radius + radius + radius + radius)

// Задание 4
let circle = +prompt('Введите радиус окружности:')

alert(circle * circle / 3, 14)

// Задание 5
let l = +prompt('Введите расстояние в км между двумя городами')
let time = +prompt('Введите время за которое хотите добраться')

alert(l / time + 'км/ч')

// Задание 6
const dollarS = +prompt('Введите курс доллара')
const euRo = Number(0.92)

alert(dollarS * euRo)

// Задание 7
let ГБ = +prompt('Укажите обьем флешки')

let mb = 516

alert(ГБ * 1024 / mb)

// Задание 8
let money = +prompt('Введите сумму которая у Вас имеется')

const mars = 600

alert(money - mars + '' + 'Ваша сдача')

// Задание 9
let num = +prompt('Введите трехзнаное число');
let reversedNum = 0;

while (num > 0) {
    reversedNum = reversedNum * 10 + num % 10;
    num = Math.floor(num / 10);
}

alert(reversedNum);

// Задание 10
const n = +prompt('Введите целое число')

alert(['Четное', 'Нечетное'][n * n % 2])





