// object literals
const mySymbol = Symbol("key1");

const jsUser = {
  name: "Archishmaan",
  age: 24,
  location: "Pune",
  email: "uarchishmaan@yahoo.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
  [mySymbol]: "changedkey2",
};

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser[mySymbol]);
console.log(typeof jsUser[mySymbol]);
console.log(typeof mySymbol);

jsUser.email = "archishmaan@chatgpt.com";
// Object.freeze(jsUser.email);
jsUser.email = "aayushmaan@chatgpt.com";
// Object.freeze(jsUser);  Correct way to freeze
console.log(jsUser.email);

jsUser.greeting = function () {
  console.log("Hey there I'm learning JS!");
};

jsUser.greetingTwo = function () {
  console.log(`Hey there, ${this.name} this side!`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
console.log(jsUser);
