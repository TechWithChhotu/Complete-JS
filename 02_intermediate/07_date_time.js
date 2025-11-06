// **************Basics of Date and Time**************
let newDate = new Date();
// console.log(newDate); // current date and time
// console.log(newDate.toString());
// console.log(newDate.toDateString()); // current date
// console.log(newDate.toTimeString()); // current time
// console.log(newDate.toISOString()); // date and time in ISO format
// console.log(newDate.toUTCString()); // date and time in UTC format
// console.log(newDate.toLocaleString());

//*************** Create own specified Date ******************/
// let specificDate = new Date("2025-11-06");
// console.log(specificDate.toString());
// let anotherSpecificDate = new Date(2023, 10, 25, 10, 30, 45); // month is 0-indexed (0-11)
// console.log(anotherSpecificDate.toString());

// **************** get methods ****************
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());
console.log(newDate.getDay()); // 0-6 (0: Sunday, 1: Monday, ..., 6: Saturday)
