class Hamster {
    constructor(name){
        this.owner = ''
        this.name = name
        this.price = 15
    }
        wheelRun(){
        console.log('squeak squeak')
    }
       eatFood(){
        console.log('nibble nibble')

       }getPrice(){
            return this.price
    }
}

// ----------------------------------------add person


class Person {
    constructor(John){
        this.name = 'John'
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }

    getName(){
        return this.name
    }

    getAge(){
        return this.age
    }

    getWeight(){
        return this.weight
    }

    greet(){
        console.log(`Welcome, ${this.name}!`)
    }

    eat(){
        this.weight++, this.mood++
    }

    exercise(){
        this.weight--
    }

    ageUp(){
        this.age++, this.height++, this.weight++, this.mood--, this.bankAccount + 10
    }
    buyHamster(){
        this.hamsters.push(Hamster)
    }
        
}