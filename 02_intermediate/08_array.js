// *********** Deep Copy vs Shallow Copy ***********
// let originalArray = [1, 2, 3, 4, 5];

// let shallowCopy = originalArray; // creates a shallow copy (reference copy)
// shallowCopy[0] = 10;
// console.log("Original Array:", originalArray); // originalArray is affected by changes in shallowCopy
// console.log("Shallow Copy:", shallowCopy);

// let originalArray2 = [1, 2, 3, 4, 5];
// let deepCopy = [...originalArray2]; // creates a deep copy using spread operator
// deepCopy[1] = 20;

// console.log("Original Array 2:", originalArray2); // originalArray2 is not affected by changes in deepCopy
// console.log("Deep Copy:", deepCopy);

// ************ Array Methods ************
let arr1 = [1, 2, 3, 4, 5];
let arr2 = new Array(6, 7, 8, 9, 10); //another way to create array using Array constructor
console.log(arr1);
console.log(arr2);

arr1.push(6); // adds element at the end
console.log("After push:", arr1);
arr1.pop(); // removes element from the end
console.log("After pop:", arr1);
arr1.unshift(0); // adds element at the beginning
console.log("After unshift:", arr1);
arr1.shift(); // removes element from the beginning
console.log("After shift:", arr1);

console.log(arr1.join()); // joins all elements of array into a string with default separator (comma)
console.log(arr1.join(" - ")); // joins all elements of array into a string with specified separator
