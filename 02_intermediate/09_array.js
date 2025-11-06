// ************ Array Methods ************
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

// let na1 = arr1.slice(1, 4); // does not modify original array, returns a new array from start index to end index (exclusive); argument: [inclusive, exclusive]
// console.log(arr1); // original array remains unchanged
// console.log(na1);

// let na2 = arr2.splice(2, 3); // modifies original array, returns removed elements as a new array; arguments: start index, number of elements to remove
// console.log(arr2); // original array is modified
// console.log(na2);

// ************ Array.from() ************
let str = "Chhotu Patel";
let arrFromStr = Array.from(str); // creates an array from a string
console.log(arrFromStr);
console.log(Array.isArray("CHHOTU"));

console.log(arr1.indexOf(2));
console.log(Array.isArray(arr1));
console.log(arr1.includes(3));
console.log(arr1.concat(arr2));
console.log(typeof arr1.concat(arr2));

let newArr = [...arr1, ...arr2]; // spread operator to merge arrays
console.log(newArr);
console.log(typeof newArr);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
