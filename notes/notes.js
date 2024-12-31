// Primitive

// 7 types of data types in JS: String, Number, Boolean, Undefined, Null, BigInt, Symbol

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false

const bigNumber = 12321312314314n;
console.log(typeof bigNumber); // bigint

// Non Primitive

// 3 types of data types in JS: Object, Array, Function

const heroes = ["Ironman", "Thor", "Hulk"];

let myObj = {
  name: "John",
  age: 32,
};

const helloFunction = function () {
  log("Hello World");
};
