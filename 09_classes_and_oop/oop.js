// Object Literal
const user = {
  username: "Archishmaan74",
  loginCount: 9,
  signedIn: true,
  gotUserDetails: function () {
    // console.log("Received user details!");
    console.log(this); // Current context
    console.log(`Username: ${this.username}`);
  },
};

// console.log(user.username);
// console.log(user.gotUserDetails());

// Constructor function
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("Archishmaan72", 12, true);
const userTwo = new User("Archies", 11, false);
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);
