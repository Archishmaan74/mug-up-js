const marvel_heroes = ["Iron Man", "Thor", "Hulk", "Captain America"];
const dc_heroes = ["Batman", "Superman", "Flash", "Wonder Women"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[4]); // ["Batman", "Superman", "Flash", "Wonder Women"]
console.time("Concat Performance");

const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes);

console.timeEnd("Concat Performance");

// The difference between push and concat is that push modifies the original array, while concat returns a new array.

console.time("Spread Performance");

const allHeroes2 = [...marvel_heroes, ...dc_heroes];
console.log(allHeroes2);

console.timeEnd("Spread Performance");

// The spread operator (...) is a more modern way to concatenate arrays. It is more readable and easier to understand.

const newArray = ["1", "2", "3", ["4", "5", "6"], "7", ["8", "9", ["10"]]];
console.log(newArray.flat(2)); // ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

// The flat method is used to flatten an array. The argument passed to the flat method is the depth of the array. In this case, we want to flatten the array to a depth of 2.
// Infinity can be passed as an argument to flatten the array to any depth.

console.log(Array.isArray("Archishmaan")); // false
console.log(Array.from("Archishmaan")); // ["A", "r", "c", "h", "i", "s", "h", "m", "a", "a", "n"]

console.log(Array.from({ name: "Archishmaan" })); // [] - empty array

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]

// The difference between Array.of and Array.from is that Array.of creates an array from the arguments passed to it, while Array.from creates an array from an array-like object or iterable object.
