import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
let score = 0
const EXPANSION_RATE = 2


export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
        score++
        document.getElementById('scoreNum').innerHTML = score
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')

        let r = (Math.random() * 255);
        let g = (Math.random() * 255);
        let b = (Math.random() * 255);

        let randomColor = `rgb(${r},${g},${b})`; 

        foodElement.style.backgroundColor = randomColor
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}