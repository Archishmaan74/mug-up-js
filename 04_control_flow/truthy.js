const userEmail = "";

if (userEmail) {
  console.log("User email is set.");
} else {
  console.log("User email is not set.");
}

const userDetails = [];

if (userDetails) {
  console.log("User details are set.");
} else {
  console.log("User details are not set.");
}

// Truthy and Falsy values in JS

// Falsy values: 0, "", null, undefined, NaN, false

// Difference between truthy and falsy values are that truthy values are those values which are considered true in a boolean context, while falsy values are those values which are considered false in a boolean context. In JS, all values are truthy except for the following: 0, "", null, undefined, NaN, false.

// Truthy values: "0", "false", [], {}, function() {}, true, 1, -1, Infinity, -Infinity, new Date(), new String(""), new Number(0), new Boolean(false), Symbol(), BigInt(0), etc.

// All of these values are considered truthy in a boolean context, meaning they will evaluate to true when used in a conditional statement or boolean expression. However, it's important to note that the actual value of the variable is not what determines its truthiness or falsiness, but rather its type and how it is used in the context of the code.

// For example, an empty string "" is considered falsy, while a non-empty string "0" is considered truthy, even though both strings are technically strings. Similarly, an empty array [] is considered truthy, while an empty object {} is also considered truthy, even though they are both empty.

// This is because the empty array and empty object are still valid objects in JS, while the empty string is not. In general, any value that is not explicitly falsy is considered truthy in JS.

// This includes all non-zero numbers, non-empty strings, and non-null objects. It's important to keep this in mind when working with conditional statements and boolean expressions in JS, as it can help you avoid unexpected behavior and bugs in your code.

// truthy values:
// "0", "false", [], {}, function() {}, true, 1, -1, Infinity, -Infinity, new Date(), new String(""), new Number(0), new Boolean(false), Symbol(), BigInt(0), etc.

// falsy values:
// 0, "", null, undefined, NaN, false

// Nullish Coalescing Operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand. It is often used to provide default values for variables that may be null or undefined.
let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = undefined ?? 10; // 10
val1 = 0 ?? 10; // 0
val1 = "" ?? 10; // ""
val1 = false ?? 10; // false
val1 = NaN ?? 10; // NaN
val1 = null ?? undefined; // undefined

// Ternary Operator
// condition ? expressionIfTrue : expressionIfFalse
const userLoggedIn = true;
const userName = userLoggedIn ? "Archishmaan" : "Guest";
console.log(userName); // Archishmaan
