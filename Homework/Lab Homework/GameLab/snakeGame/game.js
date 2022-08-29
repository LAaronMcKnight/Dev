import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js'

import { update as updateFood, draw as drawFood } from './food.js'

import {outsideGrid} from './grid.js'

//// "module js" import and export functions from files related to a game object

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')


////// Game loop, snake speed controls render rate, each render update() draw() /////////////

function main(currentTime) {
    if(gameOver) {
        if (confirm('You died. Press ok to restart.')){
        window.location = '/snakeGame/index.html'
        }
        return
    }


    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
console.log('render')
    lastRenderTime = currentTime

    update()
    draw()
}

/////// above code is the game loop, tells the window when to render the snake in seconds and to do the main update and draw functions, below code calls the game loop function //// 

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

////// gameBoard innerHTML being blank "clears" each slot after the snake moves
function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
    
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) ||snakeIntersection()
}

