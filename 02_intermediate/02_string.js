let myName = "chhotu patel";

console.log(myName.slice(0, 6)); //arguments: start index (inclusive), end index (exclusive)
console.log(myName.slice(7)); //arguments: start index. returns till end of string
console.log(myName.slice(-5)); //arguments: negative start index. counts from end of string. index -5:string ke end se 5th character se start karega

console.log(myName.substring(0, 6));
console.log(myName.substring(7));
console.log(myName.substring(-5)); // substring me negative index ko 0 maan leta hai

console.log(myName.substr(7, 5)); //arguments: start index, length of extracted part -> 2nd argument given index se kitne characters extract karne hai
console.log(myName.substr(2)); //arguments: start index. returns till end of string
console.log(myName.substr(-3)); //arguments: negative start index. counts from end of string. index -5:string ke end se 5th character se start karega

console.log(myName.indexOf("t"));
console.log(myName.indexOf("t", 5)); // starts searching from index 5
console.log(myName.lastIndexOf("t"));
console.log(myName.lastIndexOf("t", 5)); // starts searching backwards from index 5
