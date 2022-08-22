for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Grade

let Grade = 100;

if (Grade >= 80) {
  console.log("You did a good job");
} else if (Grade >= 70 && Grade < 80) {
  console.log("Keep trying");
} else if (Grade >= 60 && Grade < 70) {
  console.log("ehhhh");
} else if (Grade >= 55 && Grade < 60) {
  console.log("Not too good");
} else {
  console.log(
    "Any grade lower than 55 is a bad grade, but you'll get em next time"
  );
}

//For loop for 10 30 50 70 90 20 40 60 80

for (let i = 10; i <= 100; i += 20) {
  console.log(i);           
    if (i >= 90) {
    for (let i = 20; i <= 100; i += 20) console.log(i);
    }
}

//

for (let i = 1; i <= 100; i++){
    if(i % 3 === 0){
        console.log("fizz")
    }
    if(i % 5 === 0){
        console.log("buzz")
    
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        }
    }
}
