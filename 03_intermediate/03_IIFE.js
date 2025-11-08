// Immediately Invoked Function Expressions(IIFE)
(function addTwoNumber(num1, num2) {
  console.log(num1 + num2);
})(4, 5);

((num1, num2, num3) => console.log(num1 + num2 + num3))(4, 5, 6);

// 1st ():rap the function, 2nd: call the function
