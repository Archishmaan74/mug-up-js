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
