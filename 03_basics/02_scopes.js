var c = 10; // Global scope variable

if (true) {
  let a = 10; // Block scope variable
  const b = 30; // Block scope variable
  var c = 20; // Function scope variable
}
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
console.log(c); // 20 (accessible outside the block)

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }

// Nested scope

function user() {
  const userName = "Archishmaan";
  function userDetails() {
    const email = "uarchishmaan@yahoo.com";
    console.log(
      `User name is ${userName} and its associated email is ${email}`
    );
  }
  userDetails();
}

user(); // User name is Archishmaan and email is

if (true) {
  const username = "Archishman";
  if (username === "Archishman") {
    const website = "Archishmaan.com";
    console.log(`${username} is working over this ${website}`);
  }
  //   console.log(website); Reference error: website is not defined
}

// ++++++++++++++ HOTS ++++++++++++++

console.log(addOne(8));

function addOne(num) {
  return num + 1;
}

// addTwo(8); // Reference error: addTwo is not defined
// const addTwo = function (num) {
//   return num + 2;
// };

// addTwo(8) results in a reference error because the function is not hoisted. The function expression is not hoisted, so it cannot be called before it is defined.
// The function declaration is hoisted, so it can be called before it is defined. This is because the function declaration is stored in memory before the code is executed, while the function expression is not stored in memory until the code is executed.
