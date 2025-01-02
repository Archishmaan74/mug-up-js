const score = 100;
console.log(score);

const balance = new Number(1000);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 100.823;
console.log(otherNumber.toPrecision(4));

const lotsOfZeroes = 1000000;
console.log(lotsOfZeroes.toLocaleString("en-IN"));

// ++++++++++++++++++++ Maths ++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(3.7));
console.log(Math.ceil(3.1));
console.log(Math.floor(3.9));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

console.log(Math.random()); // Generates a random number between 0 and 1.
console.log(Math.random() * 10 + 1); // Generates a random number between 1 and 10.

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Generates a random number between 10 and 20.
