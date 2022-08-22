let str = "girafarig";
console.log(str);
let strReverse = str.split("").reverse().join("");
if (str === strReverse) {
  console.log("This is a palindrome");
} else {
  console.log("Not a palindrome");
}
