const myObject = {
  js: "javascript",
  py: "python",
  rb: "ruby",
  go: "go",
  ts: "typescript",
};

// for in loops
// for in loops are used to iterate over the properties of an object

for (const key in myObject) {
  console.log(`${key} shortcut is for  ${myObject[key]}`);
}

// It is not recommended to use for in loops for arrays, as it can lead to unexpected behavior
const programmingLanguages = [
  "javascript",
  "python",
  "ruby",
  "go",
  "typescript",
];

for (const index in programmingLanguages) {
  console.log(`${index} shortcut is for ${programmingLanguages[index]}`);
}

// Maps are not iterable with for in loops, but they can be iterated with for of loops

const myMap = new Map([
  ["js", "javascript"],
  ["py", "python"],
  ["rb", "ruby"],
  ["go", "go"],
  ["ts", "typescript"],
]);

for (const key in myMap) {
  console.log(`${key} shortcut is for ${myMap[key]}`); // This will throw an error because maps are not iterable with for in loops
}
