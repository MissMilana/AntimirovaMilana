// Задание 1
var age = prompt("Введите возраст:");
age = parseInt(age);

if (!isNaN(age)) {
    switch (true) {
        case (age >= 0 && age <= 2):
            alert("Вы еще ребенок");
            break;
        case (age >= 12 && age < 18):
            alert("Вы еще подросток");
            break;
        case (age >= 18 && age < 60):
            alert("Вы уже взрослый");
            break;
        case (age >= 60):
            alert("Вы пенсионер");
            break;
        default:
            alert("Введите корректный возраст");
    }
} else {
    alert("Введите числовое значение для возраста");
}

// Задание 2
var number = prompt("Введите число от 0 до 9:");

if (!isNaN(number) && number >= 0 && number <= 9) {
    switch (parseInt(number)) {
        case 0:
            alert(" 0: )");
            break;
        case 1:
            alert(" 1: !");
            break;
        case 2:
            alert(" 2: @");
            break;
        case 3:
            alert(" 3: #");
            break;
        case 4:
            alert("е 4: $");
            break;
        case 5:
            alert(" 5: %");
            break;
        case 6:
            alert(" 6: ^");
            break;
        case 7:
            alert(" 7: &");
            break;
        case 8:
            alert(" 8: *");
            break;
        case 9:
            alert("е 9: (");
            break;
    }
} else {
    alert("Введите число от 0 до 9");
}

// Задание 3
let ageUser = prompt('Введите трехзначное число')
if (ageUser < 100 || ageUser > 999) {
    alert('Введены правильные данные')
}
else {
    alert('Не корректные данные')
}

// Задание 4
var year = prompt("Введите год:");

if (!isNaN(year)) {
    year = parseInt(year);

    switch (true) {
        case (year % 400 === 0):
        case (year % 4 === 0 && year % 100 !== 0):
            alert("Год " + year + " Данный год является высокосным!");
            break;
        default:
            alert("Год " + year + " Данный год является высокосным! ");
    }
} else {
    alert("Введите корректный год.");
}

// Задание 5
var number = prompt("Введите пятиразрядное число:");

if (!isNaN(number) && number.length === 5) {
    var digits = number.split('');

    switch (true) {
        case (digits[0] === digits[4] && digits[1] === digits[3]):
            alert("Число " + number + " является палиндромом.");
            break;
        default:
            alert("Число " + number + " не является палиндромом.");
    }
} else {
    alert("Введите корректное пятиразрядное число.");
}

// Задание 6
var amountUSD = prompt("Введите количество USD:");
var currencyChoice = prompt("Выберите валюту для конвертации: EUR, UAN или AZN").toUpperCase();

if (!isNaN(amountUSD)) {
    amountUSD = parseFloat(amountUSD);

    var exchangeRate;

    switch (currencyChoice) {
        case "EUR":
            exchangeRate = 489.53;
            break;
        case "UAN":
            exchangeRate = 63.50;
            break;
        case "AZN":
            exchangeRate = 265.07;
            break;
        default:
            alert("Выбрана неподдерживаемая валюта.");
            break;
    }

    if (exchangeRate !== undefined) {
        var convertedAmount = amountUSD * exchangeRate;
        alert("Сумма в " + currencyChoice + ": " + convertedAmount.toFixed(2));
    }
} else {
    alert("Введите корректное количество USD.");
}

// Задание 7
var sum = prompt("Введите сумму покупки:");

if (!isNaN(sum)) {
    sum = parseFloat(sum);

    let discountRate;

    if (sum >= 200 && sum < 300) {
        discountRate = 0.03;
    } else if (sum >= 300 && sum < 500) {
        discountRate = 0.05;
    } else if (purchaseAmount >= 500) {
        discountRate = 0.07;
    } else {
        discountRate = 0;
    }

    let discountedAmount = sum - (sum * discountRate);
    alert("Сумма к оплате со скидкой: " + discountedAmount.toFixed(2));
} else {
    alert("Введите корректную сумму покупки.");
}

// Задание 8
var circumference = prompt("Введите длину окружности:");
var squarePerimeter = prompt("Введите периметр квадрата:");

if (!isNaN(circumference) && !isNaN(squarePerimeter)) {
    circumference = parseFloat(circumference);
    squarePerimeter = parseFloat(squarePerimeter);

    let circleRadius = circumference / (2 * Math.PI);
    let squareSideLength = squarePerimeter / 4;

    if (circleRadius <= squareSideLength) {
        alert("такая окружность поместиться в указанный квадрат.");
    } else {
        alert("такая окружность не может поместиться в указанный квадрат.");
    }
} else {
    alert("Введите корректные значения для длины окружности и периметра квадрата.");
}

// Задание 9

// Задание 10
let day = prompt("Введите день:");
let month = prompt("Введите месяц:");
let year = prompt("Введите год:");

if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);

    let daysInMonth;

    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            daysInMonth = 31;
            break;
        case 4: case 6: case 9: case 11:
            daysInMonth = 30;
            break;
        case 2:
            daysInMonth = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
            break;
        default:
            alert("Введите корректный месяц.");
            break;
    }

    if (day >= 1 && day <= daysInMonth) {
        if (day === daysInMonth) {
            day = 1;
            if (month === 12) {
                month = 1;
                year++;
            } else {
                month++;
            }
        } else {
            day++;
        }

        alert("Следующая дата: " + day + "." + month + "." + year);
    } else {
        alert("Введите корректную дату.");
    }
} else {
    alert("Введите корректные значения для дня, месяца и года.");
}






