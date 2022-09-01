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

function spawnEnemy() {
    const Enemy = {}
    Enemy.hull = randomHull
    Enemy.firepower = randomFirepower
    Enemy.accuracy = randomAccuracy
    enemyShips.push(Enemy)
    // return Enemy

}

function attack(attacker, target) {
    if (attacker.accuracy > Math.random()){
    target.hull -= attacker.firepower
        if (isNaN(target.hull)){ target.hull = 0 }
    console.log(`Attack landed! -- USS HelloWorld Hull: ${USS_HelloWorld.hull} | Enemy Hull: ${enemyShips[0].hull}`)
    }else{ console.log('Attack missed!')}
    
}


function battle(p1, p2){
    turn = 1

    while (p1.hull > 0 && p2.hull > 0) {
        if(turn % 2 !== 0){
            console.log(`Turn ${turn} (Player)`)
            attack(p1, p2)
            checkDeath()
            turn++
        }
        else if(turn % 2 === 0){
            console.log(`Turn ${turn} (Enemy)`)
            attack(p2, p1)
            checkDeath()
            turn++
        }
    }
}

function battleFive(){
    spawnInvasion(5)
    while (enemyShips.length > 0){
        battle(USS_HelloWorld, enemyShips[0])
        if(USS_HelloWorld.hull > 0){
        // if(confirm('Alien scum defeated! Press OK to continue, cancel to flee')){
        //     window.location = '/index.html' } //
        console.log(enemyShips)
        }
    }
}



function checkDeath() {
    if (USS_HelloWorld.hull <= 0 || isNaN(USS_HelloWorld.hull)){
        console.log('USS HelloWorld has been destroyed..')
    }else if (enemyShips[0].hull <= 0 || isNaN(enemyShips[0].hull)){
        console.log('Enemy ship destroyed!')
        enemyShips.shift()
    }else{
        return
    }
}


function spawnInvasion(num){
    for(i = 1; i <= num; i++){
        spawnEnemy()
    }
    showEnemies()
}

// function showEnemies() {
//     for (let i = 0; i > enemyShips.length; i++){
//         const newEnemy = document.createElement('div')
//         newEnemy.setAttribute("class", "enemy")
//         document.querySelector('.enemySide').appendChild(newEnemy)
//     }

// }



// spawnInvasion(3)
// console.log(USS_HelloWorld)
// console.log(enemyShips)
// battle(USS_HelloWorld, enemyShips[0])
// console.log(enemyShips)
// battle(USS_HelloWorld, enemyShips[0])
// console.log(enemyShips)
// battle(USS_HelloWorld, enemyShips[0])
// console.log(enemyShips)
showEnemies()
// battleFive()