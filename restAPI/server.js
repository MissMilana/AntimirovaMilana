const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

let POSITION = [
    { id: 1, name: 'Serik', value: '87074148201', marked: false },
]

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'client')))


app.listen(7000, () => {
    console.log('Сервак запущен')
})