// forEach loops

// forEach loops are used to iterate over arrays and perform a function on each element of the array.
// They are not recommended for use with objects, as they can lead to unexpected behavior.
// forEach loops are not breakable, so if you want to break out of a loop, you should use a for loop instead.

const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];

coding.forEach(function (val) {
  return console.log(val);
});

coding.forEach((val) => console.log(val)); // Arrow function syntax

function myFunction(val) {
  console.log(val);
}
coding.forEach(myFunction); // Passing a function as an argument

const myCoding = [
  {
    languageName: "JavaScript",
    extension: ".js",
  },
  {
    languageName: "Python",
    extension: ".py",
  },
  {
    languageName: "Java",
    extension: ".java",
  },
  {
    languageName: "C++",
    extension: ".cpp",
  },
  {
    languageName: "Ruby",
    extension: ".rb",
  },
];

myCoding.forEach((value) => {
  console.log(
    `${value.languageName} has a file extension as ${value.extension}`
  );
});
