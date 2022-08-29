let randomHull = Math.floor((Math.random() * 3 )) + 3
let randomFirepower = Math.floor((Math.random() * 2 )) +2
let randomAccuracy = Math.floor(((Math.random() * 2  ) +4))/10


const USS_HelloWorld = {
    hull: 20,
    firePower: 5,
    accuracy: .7
}



const enemyShips = []

const enemies = {


}

function newEnemy() {
    const Enemy = {}
    Enemy.hull = randomHull
    Enemy.firepower = randomFirepower
    Enemy.accuracy = randomAccuracy
    enemyShips.push(Enemy)
    return Enemy

}

function attack(attacker, target) {
    if (attacker.accuracy > Math.random()){
    target.hull -= attacker.firepower
    console.log(`Attack landed! Enemy Hull remaining: ${target.hull}!`)
    }else{ console.log('Attack missed!')}
    
}


function battle(p1, p2){
    turnNum = 1

    while (p1.hull > 0 && p2.hull > 0) {
        if(turnNum % 2 !== 0){
            console.log(`Turn: ${turnNum}`)
            attack(p1, p2)
            turnNum++
            
        }else if(turnNum % 2 === 0){
            console.log(`Turn: ${turnNum}`)
            attack(p2, p1)
            turnNum++
            
        }
    }
    if(p1.hull <= 0){
        console.log('Player1 has died')
    }else if (p2.hull <= 0){
        console.log('Player2 has died')
    }
}


function spawnInvasion(num){
    for(i = 0; i < num; i++){
        newEnemy()
    }

}


newEnemy()
console.log(USS_HelloWorld)
console.log(enemyShips)
battle(USS_HelloWorld, enemyShips[0])