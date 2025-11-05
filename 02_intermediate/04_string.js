let fruits = "apple, banana, mango, apple, orange, banana, apple";

let fruitArray = fruits.split(", "); // splits the string into an array
console.log(fruitArray);

console.log(fruitArray[0].localeCompare("banana")); // compares two strings in the current locale, if returns -1(that means fruitArray[0] comes before banana), 0 (both are equal), 1(that means fruitArray[0] comes after banana)

console.log(fruits.charAt(0)); // returns the character at the specified index
console.log(fruits.charCodeAt(0)); // returns the Unicode of the character at the specified index
console.log(fruits.charCodeAt(7)); // returns the Unicode of the character at the specified index
console.log(String.fromCharCode(97, 98, 99)); // returns characters from the specified Unicode values
