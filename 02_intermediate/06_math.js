// console.log(Math.abs(-4)); //abs value is always positive
// console.log(Math.abs(4));

// console.log(Math.round(25.96));
// console.log(Math.round(25.46));

// console.log(Math.ceil(25.01));
// console.log(Math.ceil(25.96));

// console.log(Math.floor(25.96));
// console.log(Math.floor(25.01));

// console.log(Math.min(5, 2, 9, 1, 4));
// console.log(Math.max(5, 2, 9, 1, 4));

// let arrayOfNumbers = [5, 2, 9, 1, 4];
// console.log(Math.min(...arrayOfNumbers));
// console.log(Math.max(...arrayOfNumbers));

console.log(Math.random()); // generates random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 10);

// ************Generate random number between 1 and 10 (both inclusive)********
console.log(Math.floor(Math.random() * 10) + 1); // generates random number between 1 and 10 (both inclusive)

// ************Generate random number between min and max (both inclusive)********
let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // generates random number between min and max (both inclusive)
