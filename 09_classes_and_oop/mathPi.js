const myMath = {
  PI: "3.24",
};
const descripter = Object.getOwnPropertyDescriptor(myMath, "PI");
console.log(descripter);

console.log(myMath.PI);
Object.defineProperty(myMath, "PI", {
  writable: true,
  configurable: false,
  enumerable: true,
});
myMath.PI = 5;
console.log(myMath.PI);
console.log(descripter);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("Nhi milegi chai!");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

for (let index in chai) {
  if (typeof chai[index] !== "function") {
    console.log(`${index} : ${chai[index]}`);
  }
}
