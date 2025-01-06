let score = "33";
let score1 = null;
let score2 = "33abascsa";
let score3 = "undefined";
let score4 = "true";
let value1 = {
  name: "Archishmaan",
};

console.log(typeof value1); // object

console.log(typeof score);

let valueInNumber = Number(score); // type conversion
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 33

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1); // number
console.log(valueInNumber1); // 0

let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2); // NaN

let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3); // number
console.log(valueInNumber3); // NaN

let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4); // number
console.log(valueInNumber4); // 1

// "33" => 33
// "33abc" => NaN
// true = 1; false = 0

let isLoggedIn = true;

let valueIsBoolean = Boolean(isLoggedIn);
console.log(typeof valueIsBoolean); // boolean
console.log(valueIsBoolean); // true

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
