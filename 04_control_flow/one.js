const isUserLoggedIn = true;
const temperature = 41;
const balance = 1000;

if (isUserLoggedIn) {
  console.log("User is logged in");
}

// <, >, <=, >=, ==, ===, !=, !==, &&, ||, !
// == is used to compare values only, while === is used to compare both values and their data types
// == is not recommended to use in JS

if (temperature > 100) {
  const emote = "hot";
  console.log(`Temperature is really ${emote}`);
}

if (balance > 500)
  console.log("Balance is greater than 500"),
    console.log("testing comma operator");
// This is a single line statement, so no need for curly braces
// This is not a good practice, but it works
