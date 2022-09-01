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
    Enemy.hull = Math.floor((Math.random() * 3 )) + 3
    Enemy.firepower = Math.floor((Math.random() * 2 )) +2
    Enemy.accuracy = Math.floor(((Math.random() * 2  ) +4))/10
    enemyShips.push(Enemy)
    
    createEnemy();

}

const createPlayer = ()=>{
    
}

const createEnemy = ()=>{
    let enemy = document.createElement('div')
    enemy.classList.add('alienShip')
    let es = document.querySelector('.enemySide')
    es.append(enemy)
}

function attack(attacker, target) {
    if (attacker.accuracy > Math.random()){
    target.hull -= attacker.firepower
        if (isNaN(target.hull)){ target.hull = 0 }
    console.log(`Attack landed! -- USS HelloWorld Hull: ${USS_HelloWorld.hull} | Enemy Hull: ${enemyShips[0].hull}`)
    }else{ console.log('Attack missed!')}
    
}


// function battle(p1, p2){
//     turn = 1

//     while (p1.hull > 0 && p2.hull > 0) {
//         if(turn % 2 !== 0){
//             console.log(`Turn ${turn} (Player)`)
//             attack(p1, p2)
//             checkDeath()
//             turn++
//         }
//         else if(turn % 2 === 0){
//             console.log(`Turn ${turn} (Enemy)`)
//             attack(p2, p1)
//             checkDeath()
//             turn++
//         }
//     }
// }

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




function checkDeath() {
    if (USS_HelloWorld.hull <= 0 || isNaN(USS_HelloWorld.hull)){
        console.log('USS HelloWorld has been destroyed..')
    }else if (enemyShips[0].hull <= 0 || isNaN(enemyShips[0].hull)){
        console.log('Enemy ship destroyed!')
        enemyShips.shift()
        let el = document.querySelector('.alienShip')
        el.remove()
    }else{
        return
    }
}


function spawnInvasion(num){
    for(i = 1; i <= num; i++){
        spawnEnemy()
    }
    
}

// function showEnemies() {
//     for (let i = 0; i > enemyShips.length; i++){
//         const newEnemy = document.createElement('div')
//         newEnemy.setAttribute("class", "enemy")
//         document.querySelector('.enemySide').appendChild(newEnemy)
//     }

// }


// this.div = document.createElement('div')
//     this.div.className = "enemy"
//     document.querySelector('.enemyShips').appendChild( this.div )


// function battleFive(){
//     spawnInvasion(5)
//     while (enemyShips.length > 0){
//         battle(USS_HelloWorld, enemyShips[0])
//         if(USS_HelloWorld.hull > 0){
//         // if(confirm('Alien scum defeated! Press OK to continue, cancel to flee')){
//         //     window.location = '/index.html' } //
//         console.log(enemyShips)
//         }
//     }
// }