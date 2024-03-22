

snake()



function snake() {

    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    const zmeikaFon = new Image()
    zmeikaFon.src = 'zmeika.png'

    const foodImg = new Image()
    foodImg.src = 'eda.png'

    let box = 32

    let score = 0

    let food = {
        x: Math.floor(Math.random() * 17) * box,
        y: Math.floor(Math.random() * 15) * box
    }

    let snake = []
    snake[0] = {
        x: 9 * box,
        y: 10 * box
    }

    document.addEventListener('keydown', nazhatie)
    let klav
    function nazhatie(event) {
        if (event.keyCode == 37 && klav != 'right') {
            klav = 'left'
        }
        else if (event.keyCode == 38 && klav != 'down') {
            klav = 'up'
        }
        else if (event.keyCode == 39 && klav != 'left') {
            klav = 'right'
        }
        else if (event.keyCode == 40 && klav != 'up') {
            klav = 'down'
        }
    }



    function drawGame() {
        ctx.drawImage(zmeikaFon, 0, 0)
        ctx.drawImage(foodImg, food.x, food.y)

        for (let i = 0; i < snake.length; i++) {
            ctx.fillStyle = 'green'
            ctx.fillRect(snake[i].x, snake[i].y, box, box)
        }

        ctx.fillStyle = 'white'
        ctx.font = '50px Arial'
        ctx.fillText(score, box * 2.5, box * 1.7)

        let snakeX = snake[0].x
        let snakeY = snake[0].y

        if (snakeX == food.x && snakeY == food.y) {
            score++
            food = {
                x: Math.floor(Math.random() * 17 + 1) * box,
                y: Math.floor(Math.random() * 15 + 3) * box
            }
        }
        else {
            snake.pop()
        }



        if (klav == 'left') snakeX -= box
        if (klav == 'right') snakeX += box
        if (klav == 'up') snakeY -= box
        if (klav == 'down') snakeY += box

        let newCoordinate = {
            x: snakeX,
            y: snakeY
        }

        snake.unshift(newCoordinate)
    }

    let game = setInterval(drawGame, 100)
}
