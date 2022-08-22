let ranNum = Math.random() * 1000;
let userID = ranNum.toFixed(0);



console.log(userID)

// toString would be invaluable in that it could display the result of a mathematical equation to the user. Without the console logs, the end user relies on you converting values to strings to display to them.
userID.toString();


let username = 'Aaron' + userID

console.log(username)

//usecase for integers in creating a username

console.log(`Hello ${username}, welcome to the website!`)