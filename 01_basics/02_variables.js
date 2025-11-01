// ------------------------ ES5 --------------------------old JavaScript 
var x = 10;
var x = 20;  // allowed (re-declaration)
x = 30;      // allowed (re-assignment)
console.log(x); // 30

developerName = "chhotu patle";


// ------------------------ ES6 -------------------------- introduced in 2015
// Scope: Block-scoped ({ ... })
// Can not be re-decled in the same scope.
// Yes re-assigned allowed.

let score = 2;
// let score = 3; not allowed
score = 3; 

const accountId = 666;
// const accountId = 555; not allowed
// accountId = 555; not allowed

const developerEmail="chhotustudymca@gmail.com";
let developerLocation="Patna";

console.table([x,developerName,score,accountId,developerEmail,developerLocation])