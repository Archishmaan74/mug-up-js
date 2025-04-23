const user = {
  name: "Archishmaan",
  age: 24,

  alertMessage: function () {
    console.log(`Hi! My name is ${this.name} and I am ${this.age} years old!`); // this refers to the current scope or context
  },
};

user.alertMessage(); // Hi! My name is Archishmaan and I am 24 years old!
console.log(this); // Window object in browser or global object in Node.js
// console.log(this === window); // true in browser or false in Node.js

// Arrow Function
const check = () => {
  let a = 10;
  console.log(this.a);
};

check();

const addTwo = (num1, num2) => {
  return num1 + num2;
};

const addThree = (num1, num2, num3) => num1 + num2 + num3;

// when we use {} in arrow function, we need to use return keyword to return the value
// when we use () in arrow function, we don't need to use return keyword to return the value
// If we require an object to be returned, we need to use () in arrow function
const addFour = (num1, num2, num3, num4) => ({ num1, num2, num3, num4 }); // returns an object
