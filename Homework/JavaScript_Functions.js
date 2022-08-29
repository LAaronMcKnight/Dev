//Ex 1

// const maxOfTwoNumbers = (x, y)=>{
//     if (x >= y) {
//         return x;
//       } else {
//         return y;
//       }
//     }
//     console.log(maxOfTwoNumbers(3, 9));

//Ex 2

// let x = 5
// let y = 12
// let z = 2
// const maxOfThreeNumbers = (x, y, z) => {
//     if(x > y && x > z){
//         return x;
//     }
//     else if(y > x && y > z){
//         return y;
//     }    
//     else{
//         return z;
//     }
// }
// console.log(maxOfThreeNumbers(x, y, z))

//Ex 3 **
// function isCharAVowel(char){
//     let vowel = ["a","e","i","o","u","y"]
//     const found = vowel.find((x) => {
//         return char === x
//     })
//     if(!found){
//         return false
//     }else{ 
//         return true
//     }
// }
// console.log(isCharAVowel("a"))

//Ex 4
// const NumbArray = [5, 12, 3, 10]
// const sumArray = (arr)=>{
//     return arr.reduce((total, current) =>{
//         return total + current;
//     }, 0);

// }
// console.log(sumArray([5, 20, 25]))

//Ex 5

// const productArray = (arr)=>{
//     return arr.reduce((total, current) =>{
//         return total * current;
//     }, 1);

// }
// console.log(productArray([5, 20, 25]))

//Ex 6

// const numArgs = (...arg)=>{
//     return arg.length
// }
// console.log(numArgs(1, 4, 6, 9))

//Ex 7

// const Stringy = "StringOfWords"
// const reverseString = (str) => {
//     return str.split("").reverse().join("");

// }
// console.log(reverseString(Stringy))
// Result ---> sdroWfOgnirtS

//Ex 8 
// const BookArray = ["1984", "Ringworld", "GameOfThrones"]
// const longestStringInArray = (arr)=>{
//     let longestString = "";
//     for(let i=0; i < arr.length; i++){
//         if(arr[i].length > longestString.length)
//         longestString = arr[i];
//     }
//     return longestString.length
// }
// console.log(longestStringInArray(BookArray))

//Ex 9
let filter = 4
const WordArray = ["A", "string", "of", "words", "Avalanche"]

const stringsLongerThan = (arr, filter)=>{
    console.log(arr)
    const Results =[]
    for( i = 0; i < arr.length; i++){
       if(arr[i].length > filter){
        Results.push(arr[i])
       }
    
    }
    return Results
}
console.log(stringsLongerThan(WordArray, filter))