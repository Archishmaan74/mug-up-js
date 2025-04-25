// Immediately Invoked Function Expression (IIFE)

// A function that runs as soon as it is defined

// Function below is an named IIFE
(function chain() {
  console.log("DB Connection Established!");
})();

// Function below is an anonymous IIFE with a parameter
((name) => {
  console.log(`Hello ${name}`);
})("World");

// To run two consecutive IIFE, we can give semicolon after the first IIFE
