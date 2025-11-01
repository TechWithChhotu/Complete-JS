let num = 42;                   // Number -> range 2 to the power of 53
let str = "JavaScript";         // String
let isLoggedIn = false;         // Boolean 
let notAssigned;                // Undefined
let empty = null;               // Null 
let sym = Symbol("id");         // Symbol- difine for uniqueness
let bigNum = 12345678901234567890n; // BigInt

// The typeof is a operator in JavaScript is used to find the data type of a given value or variable.

console.log(typeof 42);         // "number"
console.log(typeof "Hello");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // ❗ "object" (may be js bug) 
console.log(typeof Symbol());   // "symbol"
console.log(typeof 123n);       // "bigint"
