// class Cat {
//     constructor (name,heads,tails,color){
//     this.legs = 4
//     this.name = name
//     this.heads = heads
//     this.tails = tails
//     this.color = color
//     }

//     catNickname(Nickname) {
//         this.Nickname = toString(Nickname)
//     }
//     zombieAttack() {
//         this.heads--
//         return 'How many heads does the cat have?: ' + this.heads
//     }
//     Wag() {
//         if(this.tails > 0){
//             return 'Good boy is wagging his tail'
//         }
//         else{
//             return 'no tail'
//         }
//     }
// }

// let Theo = new Cat('Theo', 1, 1, 'Gray')
// let SpaceCat = new Cat('X1Z6SOX', 1, 2, 'Purple')

// console.log(Theo);
// console.log(SpaceCat);
// console.log(Theo.zombieAttack())
// console.log(SpaceCat.Wag())

// ----------------------------------------------------------------
// class Pirate {
//     constructor (shipName,legs,numHats,netWorth){
//     this.arms = 2;
//     this.lawful = false;
//     this.heads = 1;
//     this.diseases = ['Scurvy', 'Ricket', 'Hepatitis', 'Malaria', 'Scabies'];
//     this.shipName = shipName;
//     this.legs = legs;
//     this.numHats = numHats;
//     this.netWorth = netWorth;
//     }
//     squirrelAttack(numOfSquirrels) {
//         this.legs - numOfSquirrels
//     }
//     pirateTaxes(taxes){
//         this.netWorth - taxes
//     }
//     pirateReformed(){
//         this.lawful = true
//     }
// }


// const John = new Pirate('Pink Beard', 1, 1, 500)
// const Derick = new Pirate('Tickle Tongue', 2, 3, 620)
// const Louis = new Pirate('Laughing Lue', 2, 5, 45)
// const Veronica = new Pirate('She of the Sea', 2, 1, 272)
// const Sally = new Pirate('Slashing Sally', 1, 11, 111)
// const Hershel = new Pirate('Hurtcha Hershel', 3, 0, 1408)

// const jollyRoger = [John, Sally, Hershel]
// const blackPearl = [Derick, Louis, Veronica]


//     for (let i = 0; i < jollyRoger.length; i++){
//     console.log(jollyRoger[i].shipName, jollyRoger[i].lawful, jollyRoger[i].netWorth, jollyRoger[i].legs) 
//     }

//     for (let i = 0; i < blackPearl.length; i++){
//         console.log(blackPearl[i].shipName, blackPearl[i].numHats, blackPearl[i].netWorth)
//     }

// console.log(Hershel.pirateReformed())



