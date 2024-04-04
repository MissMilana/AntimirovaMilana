class Calculator { - CALC
constructor() {
    this.display = document.querySelector(".display");
}

appendToDisplay(value) {
    this.display.value += value;
}

clearDisplay() {
    this.display.value = "";
}
calculatorResult() {
    try {
        this.display.value = eval(this.display.value);
    } catch (error) {
        this.display.value = 'ошибка'
    }
}
}

const calc = new Calculator()

class Board { - XO
constructor() {
    this.cells = Array(9).fill(null);
    this.render();
}

render() {
    const boardElement = document.getElementById("board");
    const cells = boardElement.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
        cell.textContent = this.cells[index] || "";
        cell.addEventListener("click", () => this.handleMove(index));
    });
}