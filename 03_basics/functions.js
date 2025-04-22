function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const result = addTwoNumbers(4, 4);
console.log("Result:", result);

///////

function loginMessage(username) {
  if (username) {
    return console.log("Username is present!");
  }
  return console.log("Please enter username!");
}

console.log(loginMessage());
