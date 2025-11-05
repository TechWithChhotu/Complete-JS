let str1 = "Hello"; // String primitive
str1.lang = "English";
console.log(str1.lang); //undefined (kyonki primitive me property nahi chipakti)
console.log(typeof str1); // string

let str2 = new String("Hello"); // String object
str2.lang = "English";
console.log(str2.lang); // "English"
// kyonki String object me property chipakti hai
console.log(typeof str2); // object

let name = "chhotu patel";
console.log(name.length);
console.log(name.toUpperCase()); // CHHOTU PATEL
console.log(name.toLowerCase()); // chhotu patel
