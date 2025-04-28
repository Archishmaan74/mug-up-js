const codingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// const values = codingLanguages.forEach((language) => {
//   console.log(language);
//   return language;
// });
// console.log(values); // undefined, because forEach does not return anything

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myNumbers2 = myNumbers.filter((number) => number > 5);
console.log(myNumbers2); // [6, 7, 8, 9, 10]

const newNums = [];
myNumbers.forEach((number) => {
  if (number > 5) {
    newNums.push(number);
  }
});
console.log(newNums); // [6, 7, 8, 9, 10]

const books = [
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publishedOn: "1925-04-10",
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publishedOn: "1960-07-11",
  },
  {
    title: "1984",
    genre: "Dystopian",
    publishedOn: "1949-06-08",
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publishedOn: "1951-07-16",
  },
  {
    title: "Moby-Dick",
    genre: "Adventure",
    publishedOn: "1851-10-18",
  },
];

const selectedBooks = books.filter((item) => item.genre === "Fiction");
console.log(selectedBooks);
