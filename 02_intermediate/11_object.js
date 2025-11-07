let user = {};
user.id = 123;
user.username = "ckumar@11";
user.isLoggedIn = false;

// console.log(user);

// ************** Nested object *****************
regularUser = {
  email: "cpatel@github.com",
  username: {
    id: 12,
    fullname: {
      firstname: "Chhotu",
      lastname: "Kumar",
    },
  },
};

// console.log(regularUser);

//*************** add two or more object */
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };

let obj3 = { obj1, obj2 };
// console.log(obj3);

obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3);

obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// ***************** Array of object ***************

let anotherUser = [
  { id: 1, email: "ck1@gmail.com" },
  { id: 2, email: "ck2@gmail.com" },
  { id: 3, email: "ck3@gmail.com" },
];

// console.log(anotherUser[1].email);

// console.log(Object.keys(user)); // log only all key of user object
// console.log(Object.values(user)); // log only all value of user objecjt
// console.log(Object.entries(user)); // convert key value pair in an array and object also.
// console.log(user.hasOwnProperty("isLoggedIn")); // check property exist or not in object

const course = {
  coursename: "C++",
  price: "5999",
  courseInstructor: "Chhotu Patel",
};

// object property destructuring
const { courseInstructor } = course;
// console.log(courseInstructor);

const { coursename: nameOfcourse } = course; //also give another name of destructure property
console.log(nameOfcourse);
