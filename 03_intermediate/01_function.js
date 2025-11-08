function sayHello() {
  console.log("Hello Chhotu");
}

// sayHello();

function addTwoNumber(num1, num2) {
  //   console.log(num1 + num2);
  return num1 + num2;
}

// console.log(addTwoNumber(4, 5));

function loggedInUserMSG(username) {
  if (!username) {
    return console.log("plz enter username");
  }
  return `${username} just login.....`;
}
// console.log(loggedInUserMSG());
// console.log(loggedInUserMSG("@ckumar234"));

// ************** Rest operator ***************
function printCartValues(...values) {
  console.log(values);
}
printCartValues(200, 300, 400, 500, 600);

// *********** Pass array as argument *************

const handleArray = (arr) => {
  //aslo you can define function as like this
  console.log(arr);
};

handleArray([12, 23, 34, 45]);

// *************** pass object as argument ************

function handleObject(obj) {
  console.log(obj);
}
console.log({ name: "Chhotu Patel", age: 5 });
