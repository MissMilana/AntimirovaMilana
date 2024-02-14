function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Введите корректные числа");
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Деление на ноль невозможно");
                return;
            }
            break;
        default:
            alert("Выберите операцию");
            return;
    }

    document.getElementById('result').innerText = result;
}