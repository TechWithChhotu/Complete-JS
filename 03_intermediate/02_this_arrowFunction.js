// ************ This keyword ************
let user = {
  username: "Chhotu Patel",
  city: "Sheikhpura",
  state: "Bihar",
  age: 20,
  welcomeMSG: function () {
    console.log(`Hello ${this.username}, your welcome.`);
    // console.log(`This displaed: `);
    // console.log(this);
  },
};

user.welcomeMSG();
// user.username = "Divya";
// user.welcomeMSG();

// ***************** Arrow Function *******************
// syntax: ()=>{}

let addTwoNumber = (num1, num2) => {
  //   console.log(`This displaed: `);
  //   console.log(this);

  return num1 + num2;
};
console.log(addTwoNumber(3, 6));

// also use as like
let addNumber = (num1, num2) => num1 + num2;
console.log(addNumber(6, 6));

// also use as like
let add = (num1, num2) => num1 + num2;
console.log(add(6, 9));
