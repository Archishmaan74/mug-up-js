// Maps are used to iterate over arrays and create a new array with the results of calling a provided function on every element in the calling array.
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. It does not execute the function for empty elements. The map() method returns a new array, and does not change the original array. The map() method is a higher-order function that takes a callback function as an argument and applies it to each element of the array, returning a new array with the results.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const addTen = numbers.map((num) => {
  return num + 10;
});
console.log(addTen);

const arr = [];
numbers.forEach((num) => {
  num += 10;
  arr.push(num);
});
console.log(arr);

const newNumbers = numbers
  .map((num) => num * 10)
  .map((num) => num + 10)
  .filter((num) => num >= 40);
console.log(newNumbers); // [40, 50, 60, 70, 80, 90, 100]
