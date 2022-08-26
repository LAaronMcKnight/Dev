let firstVariable = "Hello World"
// "Change the value of this variable to some number"..
firstVariable = 5

let secondVariable = firstVariable;

secondVariable = "any string"

console.log(firstVariable)

let yourName = "Aaron McKnight"

console.log(`Hello, my name is ${yourName}`)

//Booleans-----------

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin"

console.log(a < b)
console.log(c > d)
console.log(e === 'Kevin')

console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false == false)

  console.log(e === 'Kevin');
  console.log(a < b != c)
  console.log(a + a < d)
  console.log(48 == '48')

  //The Farm ---------

  let animal = "Cow"

    if(animal === "Cow"){
console.log("Mooooooo");
    }else{( console.log("Hey! You're not a cow!") )
}

//Drivers Ed

let age = 44
if(age >= 16){
    console.log("Here are the keys")
}else{console.log("Sorry, you're too young")}

//Loops ------------
// A. The basics

for (let i = 0; i <= 10; i++)
    console.log(i);

// // 

for (let i = 10; i <= 400; i++)
    console.log(i);

// //

for (let i = 12; i <= 4000; i++)
    if(Number.isInteger(i / 3) === true){
        console.log(i)
    }
    

// B. Get even

// 1. "Print out the numbers that are within the range of 1 - 100" --- So, 2-99? or 1-100? Both are a simple change but I will just assume inclusive, which was a descriptor used earlier but not now. So a bit confused.

for (let i = 1; i <= 100; i++)
    if(Number.isInteger(i / 2) === true){
        console.log(`${i} <-- is an even number`)
    }else{
    console.log(i);
    }

// // Give me Five

for (let i = 0; i <= 100; i++){
    if(Number.isInteger(i / 3) === true && Number.isInteger(i / 5) === true){
        console.log(`I found a ${i}. High five!`) & 
        console.log(`I found a ${i}. Three is a crowd`);
    }else if(Number.isInteger(i / 5) === true){
        console.log(`I found a ${i}. High five!`)
    }else if(Number.isInteger(i / 3) === true){
        console.log(`I found a ${i}. Three is a crowd`)
    }
        
}

// //D. Savings account

let bank_account = 0
for (i = 0; i <= 10; i++){
   bank_account += i;
   console.log(bank_account)
}

// // D.2.

let bank_account_two = 0
for (i = 1; i <= 100; i++){
    bank_account_two += (i * 2);
}
console.log('Bank Account: $'+ bank_account_two)

// Arrays and Control flow

const quotes = ["Wow, it's a string!", 'Such string, WOW!', "The industrial revolution and its consequences have been a disaster for human-kind."]

// c.1

const randomThings = [1, 10, "Hello", true]

console.log(randomThings[0]);

//c.2 & 3

randomThings[2] = 'World'

console.log(randomThings)

//d mix it up

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

console.log(ourClass[2])

ourClass[4] = 'Octocat'

ourClass.push('Cloud City')

console.log(ourClass)

//E Mix it up

const myArray = [5, 10, 500, 20]
myArray.push('Aegon', 'Silly String')
myArray.shift();
myArray.unshift('Bob Marley')
myArray.pop()

myArray.reverse()

console.log(myArray)

//F Biggie

let myInt = 30;
if(myInt < 100){
    console.log("Little number")
}else if( myInt > 100){
    console.log('Big number')}

// //G Monkey

if(myInt < 5){
    console.log("Little number")
}else if(myInt > 10) {
    console.log("Big number")
}else{console.log("Monkey")}

// //H

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)

kristynsCloset.splice(6,0, "ray bans")
kristynsCloset.splice(5,1, 'stained knit hat')

console.log(kristynsCloset)

// 4-8


console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][1]}`)

thomsCloset[1].splice(2, 1, "Footie Pajamas")
console.log(thomsCloset)

// Functions - A, B

let theName = "Grimer"
console.log(`Hello there, ${theName}!`);

f = (x)=> {
    console.log(` ${x} is cool`)
}
f("Muk");

//C
const calculateCube = (z)=>{
    return (z * z * z)
}
console.log(calculateCube(4));

// D. isVowel
const Vowels = ["a", "e", "i", "o", "u"]
isVowel = (str) => {
    if(Vowels.indexOf(str) >= 0){
    console.log("This is a vowel.")
    }else{
        console.log("This is not a vowel")
    }
}
isVowel("a")

let newArray = []

const getTwoLengths = (str, str2) => {
    newArray.push(str.length), newArray.push(str2.length)
    console.log(newArray)
}

getTwoLengths("Hank", "Hippopopalous");

// Get multiple lengths // something to do with slicing and splicing. newarr

newNewArray = []
getMultipleLengths() = (arr)=>{
    arr.forEach()
}


console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//

const maxOfThree = (int1, int2, int3)=>{
   return Math.max(int1, int2, int3)
}
console.log(maxOfThree(6, 9, 1));


//

const user = {
    Name: 'John',
    email: 'Doe@gmail.com',
    age: 24,
    purchased: []
}

user.email = 'newEmail@yahoo.com'
user.age++
user.location = 'Cincinnati'
user.purchased.push('carbohydrates')
user.purchased.push('peace of mind')
user.purchased.push('Merino jodhpurs')
console.log(user.purchased[2])

user.friend = {
    name: "Jane",
    age: 26,
    location: 'Cincinnati',
    purchased: [],
}

console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age = 55;
user.friend.purchased.push('The One Ring')
user.friend.purchased.push('A latte')
console.log(user.friend.purchased[1])


console.log(user)

//

for(i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i])
}

for(i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i])
}

//////

const updateUser = () => {
    user.age++, string.toUpperCase(user.name)
}

const oldAndLoud = (person) =>{
    person.age++, string.toUpperCase(person.name)
}

