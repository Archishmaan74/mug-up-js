// for of loops
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  console.log(greet);
}

// Maps
// Maps are collections of key-value pairs
// They are similar to objects, but they can have keys of any type (not just strings or symbols)

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

console.log(map);

// Key and value pairs can be utilized by destructuring the map
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// Objects are not iterable, but maps are iterable
const obj = {
  name: "Archishmaan",
  age: 24,
  country: "India",
};

// for (const [key, value] of obj) {  //  // This will throw an error because objects are not iterable
//   console.log(`${key}: ${value}`);
// }
