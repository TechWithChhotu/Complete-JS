// ******************* Number Methods *******************

// 1. toString()
// let num = 123;
// console.log(num.toString()); // "123"
// console.log(typeof num.toString()); // "string"

// // 2. toFixed()
// let num2 = 12.34567;
// console.log(num2.toFixed(2)); // "12.35" (rounds to 2 decimal places)
// console.log(num2.toFixed(0)); // "12" (rounds to nearest integer)

// // 3. toPrecision()
// let num3 = 12.34567;
// console.log(num3.toPrecision(4)); // "12.35" (4 significant digits)
// console.log(num3.toPrecision(2)); // "12" (2 significant digits)

// // 4. parseInt()
// let strNum1 = "123abc";
// console.log(parseInt(strNum1)); // 123
// let strNum2 = "abc123";
// console.log(parseInt(strNum2)); // NaN
// // 5. parseFloat()
// let strNum3 = "12.34abc";
// console.log(parseFloat(strNum3)); // 12.34

// let strNum4 = "abc12.34";

// console.log(parseFloat(strNum4)); // NaN
// // 6. isNaN()
// console.log(isNaN("hello")); // true
// console.log(isNaN(123)); // false
// console.log(isNaN(NaN)); // true
// // 7. isFinite()
// console.log(isFinite(123)); // true
// console.log(isFinite(Infinity)); // false
// console.log(isFinite(NaN)); // false

let anotherNum = Number(123);
console.log(anotherNum);

anotherNum = Number("12345");
console.log(anotherNum);
console.log(typeof anotherNum);
