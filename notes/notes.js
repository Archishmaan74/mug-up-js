// Primitive

// 7 types of data types in JS: String, Number, Boolean, Undefined, Null, BigInt, Symbol

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false

const bigNumber = 12321312314314n;
console.log(typeof bigNumber); // bigint

// Non Primitive

// 3 types of data types in JS: Object, Array, Function

const heroes = ["Ironman", "Thor", "Hulk"];

let myObj = {
  name: "John",
  age: 32,
};

const helloFunction = function () {
  log("Hello World");
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) vs Heap (Non Primitive)
// Whenever we create a variable, it's stored in the stack. If it's a primitive type, it's stored in the stack. If it's a non-primitive type, it's stored in the heap.

let myGamingName = "skti";

let anotherName = myGamingName;
anotherName = "sakib";

console.log(myGamingName);
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "user2@google.com";

console.log(userOne.email);
console.log(userTwo.email);

// Fibonacci Series
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

let nxt,
  n1 = 0,
  n2 = 1;
for (let i = 0; i < 10; i++) {
  console.log(n1);
  nxt = n1 + n2;
  n1 = n2;
  n2 = nxt;
}

// window is the global object in the browser
// console.log(window);

// window.document is the DOM (Document Object Model) which represents the HTML document loaded in the browser
// console.log(window.document);

// getElementById is a method of the document object which targets the element with the id "title"
// console.log(document.getElementById("title"));

// Differe between textContent, innerTex and innerHTML
// texContent: It returns the text content of the element and its descendants. It does not parse HTML tags, so it returns the text as is.
// innerText: It returns the visible text content of the element and its descendants. It does not include hidden elements and does not parse HTML tags. It returns the text as it is displayed on the page.
// innerHTML: It returns the HTML content of the element, including any HTML tags. It parses the HTML and returns it as a string.

// document.getElementByClassName();
// This method returns a live HTMLCollection of elements with the specified class name.
// It is not recommended to use this method as it is not very flexible and does not return an array.
// Instead, use querySelectorAll() which returns a static NodeList of elements that match the specified selector.
// To convert this getElementsByClassName() to an array, you can use the Array.from() method or the spread operator [...].

// document.querySelectorAll();
// This method returns a static NodeList of elements that match the specified selector.
// It is more flexible and powerful than getElementsByClassName() as it allows you to use any CSS selector to target elements.
// It is recommended to use this method instead of getElementsByClassName() as it is more modern and widely supported.
// To convert this NodeList to an array, you can use the Array.from() method or the spread operator [...].

// document.querySelector();
// This method returns the first element that matches the specified selector.
// It is similar to getElementsByClassName() but it only returns the first matching element instead of a collection of elements.
// It is more flexible and powerful than getElementsByClassName() as it allows you to use any CSS selector to target elements.
// It is recommended to use this method instead of getElementsByClassName() as it is more modern and widely supported.
// To convert this NodeList to an array, you can use the Array.from() method or the spread operator [...].
