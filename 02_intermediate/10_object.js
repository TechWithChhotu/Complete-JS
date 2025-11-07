// define object in many ways: 1.singleton   2.constructor 3.object literals

// object literals
let user = {
  name: "Chhotu Patel",
  email: "chhotustudymca@gmail.com",
  mob: "8930563298",
  age: 24,
  courses: ["html", "css", "js"],
};

console.log(user);
console.log(user.email);
console.log(user.age);

user.age = 22;
user.mob = "8682659319";

console.log(user);

Object.freeze(user); // after this, cannot change object value
user.email = "chhotupatel@google.com"; //changes cannot be appear
user.age = 23;

console.log(user);

// *********** How to define and user symbol object ************
let sym = Symbol("@mySymbol");

let myObj = {
  name: "Ravi raj",
  age: 22,
  email: "raviraj@gmail.com",
  //user symbol in object
  [sym]: "This is symbol value",
  // you can also define key & value as like
  "Father`s name": "R kumar",
};

console.log(myObj);

// how to access object symbol value
console.log(myObj[sym]);
console.log(myObj["Father`s name"]); //only a way to access father`s name, but also access normal key as like this
console.log(myObj["email"]);
