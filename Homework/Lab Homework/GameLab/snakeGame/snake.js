import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 4
const snakeBody = [{x: 11, y: 11}]
let newSegments = 0

export function update(){
    addSegments()

    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i+1] = { ...snakeBody[i] }
    }

        snakeBody[0].x += inputDirection.x
        snakeBody[0].y += inputDirection.y
}


export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
        
    })

}

export function expandSnake(amount) {
    newSegments += amount
}

///////// ".some" check if ANY "segments" are the same as argument position. //////////

///// onSnake is a boolean that ignores the head of the snake only if the option is passed (for snake intersection function)

export function onSnake(position, { ignoreHead = false } = {} ) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}


// snake head is the 1st [0] in the snakeBody array, now I can use the head location to see if it overlaps with other segments of snakeBody or is outside the grid //
export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y

}

//////// For loop that runs through the snake and copies the last element in array to end of snake. Change how many times with expansion rate variable. ///////////

function addSegments() {
    for(let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    }

    newSegments = 0
}

