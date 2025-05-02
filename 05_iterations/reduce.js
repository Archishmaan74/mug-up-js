// .reduce() fuction is used to reduce an array to a single value
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const reduceTest = myNum.reduce((acc, currVal) => {
  console.log(`acc: ${acc}, currVal: ${currVal}`);
  return acc + currVal;
}, 0); // 0 is the initial value of acc
console.log(reduceTest); // 45  // sum of all numbers in the array

const shoppingCart = [
  { item: "Shirt", price: 20 },
  { item: "Pants", price: 30 },
  { item: "Shoes", price: 50 },
  { item: "Hat", price: 15 },
];

const totalPrice = shoppingCart.reduce((acc, currVal) => acc + currVal, 0);
console.log(totalPrice);
