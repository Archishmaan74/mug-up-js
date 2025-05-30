const name = "Archishmaan";
const repoCount = 24;

console.log(name + repoCount + " Value");

console.log(
  `Hello! My name is ${name.toUpperCase()} and my repo count is ${repoCount}.`
);

const gameName = new String("Skti-44");
console.log(gameName[0]);
console.log(gameName.__proto__); // String

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-4, 6);
console.log(anotherString);

// difference between slice and substring is that slice can take negative values
// substring returns the part of the string between the two specified indices, or to the end of the string.
// slice extracts a section of a string and returns it as a new string, without modifying the original string.

const newStringOne = "  Archishmaan  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.archishmaan.com/archishmaan%20upadhyaya";
console.log(url.replace("%20", "-"));
console.log(url.includes("archishmaan"));
console.log(gameName.split("-"));

// split is used to split a string into an array of substrings, and it takes a separator as an argument.
