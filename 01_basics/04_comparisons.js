// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 === 1);
// console.log(2 !== 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // It's true because null is converted to 0 as comparison operators convert null to a number.

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0); // It's false because undefined can't be converted to a number.

// === is used for strict equality comparison. It doesn't do type conversion.
