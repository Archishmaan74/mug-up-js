function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const result = addTwoNumbers(4, 4);
console.log("Result:", result);

///////

function loginMessage(username) {
  if (username) {
    return console.log(`${username} username is present!`);
  }
  return console.log("Please enter username!");
}

console.log(loginMessage("Arch"));

// Object to a function

const user = {
  name: "Archishmaan",
  age: 24,
};

function handleUser(anyUser) {
  return `Hi! My name is ${anyUser.name} and I am ${anyUser.age} years old!`;
}

const userInfo = handleUser(user);
console.log(userInfo);
