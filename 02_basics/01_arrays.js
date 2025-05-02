// arrays
// Arrays are a collection of items that are stored in a single variable. \
// They can hold multiple values of different data types, including numbers, strings, objects, and even other arrays.
// Arrays are defined using square brackets [] and can be created using the Array constructor or array literal syntax.
// They are mutable, meaning they can be changed after they are created.
// They are also dynamic, meaning they can grow and shrink in size as needed.

const myArr = [1, 2, 3, 4, 5];
const myHeroes = ["Batman", "Superman", "Wonder Women"];

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr[0]); // 1

// Array methods

myArr.push(6); // [1, 2, 3, 4, 5, 6]
console.log(myArr);
myArr.push(7); // [1, 2, 3, 4, 5, 6, 7]
console.log(myArr);
myArr.pop(); // [1, 2, 3, 4, 5, 6]

myArr.unshift(0); // [0, 1, 2, 3, 4, 5, 6]
console.log(myArr);
myArr.shift(); // [1, 2, 3, 4, 5, 6]
console.log(myArr);

console.log(myArr.includes(3)); // true
console.log(myArr.indexOf(3)); // 2

console.log(myArr.join(" - ")); // 1 - 2 - 3 - 4 - 5 - 6, join converts array to string
const newArr = myArr.join(); // "1,2,3,4,5,6"
console.log(newArr);
console.log(typeof newArr); // string

// slice and splice

const myArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const myArr4 = myArr3.slice(2, 5); // [3, 4, 5]
console.log(myArr4);
console.log(myArr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
const myArr5 = myArr3.splice(2, 5); // [3, 4, 5, 6, 7]
console.log(myArr5);
console.log(myArr3); // [1, 2, 8, 9]
