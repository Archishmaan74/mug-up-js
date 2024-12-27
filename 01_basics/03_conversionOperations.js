let score = "33";
let score1 = null;
let score2 = "33abascsa";
let score3 = "undefined";
let score4 = "true";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

// "33" => 33
// "33abc" => NaN
// true = 1; false = 0

let isLoggedIn = true;

let valueIsBoolean = Boolean(isLoggedIn);
console.log(typeof valueIsBoolean);
console.log(valueIsBoolean);

// **********************Operations**********************

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2 ** 3); // 2^3 = 8

let srtr1 = "Hello";
let str2 = " Archishmaan!";
let str3 = srtr1 + str2;
console.log(str3);

console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(+true);
console.log(+""); // checks operator precedence // NOT A GOOD PRACTICE
