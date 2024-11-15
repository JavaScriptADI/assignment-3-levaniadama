for (let i = 1; i <= 10; i++){
    console.log(i);
    
}
//davaleba 2//
for (let i = 10; i >=1; i--){
    console.log(i)
}
//davaleba 3//
unda datvalos jami daiwyebs ertidan 50amde da saboloo sum iqneba = 1275
//davaleba 4//
jamshi 5 iterations, radgan 2it izrdeba
//davaleba 5//
for (let i = 1; i <= 10; i++) {
    if (i == 7) {
      console.log('breaking out of the loop at ', i);
      break;
    }
    console.log(i);
  }
  console.log('loop has ended.');
//davaleba 6//
for (let i = 1; i <= 10; i++){
    
    if (i == 7){
        console.log("skipping at", i);
        continue;
    }
    console.log(i);
}
console.log("loop has ended.");
//davaleba 7//
let randomNumber = 0;
let min = 1;
let max = 100;

while (randomNumber !==27) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
} 
//davaleba 8//
//davaleba 11//
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
//davaleba 12//
for (let i = 0; i < 100; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
  }
  //davaleba 13//
  let sum = 0;
  for (let i = 2; i <=1000; i +=2){
    sum += i;
  }
  console.log("sum all even numbers is",sum);
  //davaleba 14//
  let sum = 0;
  for (let i = 1; i <=1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
    }
  }
  console.log("sum all numbers is",sum);
  //davaleba 15//
  let sum = 0;
  for (let i = 1; i <= 1000; i++){
    if (i % 15 == 0 ) {
        sum += i;
    }
  }
  console.log ("sum all numbers is",sum);