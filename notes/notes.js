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

// Array.from();
// This method creates a new array from an array-like or iterable object.
// It is useful for converting NodeLists, HTMLCollections, or other iterable objects into arrays.
// It can also take a mapping function as a second argument to transform the elements of the array-like object into a new array.
// It is a modern and widely supported method that is recommended to use instead of older methods like slice() or spread operator [...].

// Array.of();
// This method creates a new array with a variable number of arguments, regardless of the number or type of arguments passed to it.
// It is useful for creating arrays with a specific number of elements or for creating arrays from a list of values.
// It is a modern and widely supported method that is recommended to use instead of older methods like new Array() or Array.from().
// It is also more flexible and powerful than the older methods as it allows you to create arrays with any number of elements and any type of values.

// Difference between Array.from() and Array.of()
// Array.from() creates a new array from an array-like or iterable object, while Array.of() creates a new array with a variable number of arguments.
// Array.from() is useful for converting NodeLists, HTMLCollections, or other iterable objects into arrays, while Array.of() is useful for creating arrays with a specific number of elements or for creating arrays from a list of values.
// Both methods are modern and widely supported and are recommended to use instead of older methods like new Array() or Array.from().
// They are also more flexible and powerful than the older methods as they allow you to create arrays with any number of elements and any type of values.

// firstElementChild vs lastElementChild
// firstElementChild: It returns the first child element of the specified element.
// If there are no child elements, it returns null.
// It only returns element nodes, not text or comment nodes.

// lastElementChild: It returns the last child element of the specified element.
// If there are no child elements, it returns null.
// It only returns element nodes, not text or comment nodes.

// parentElement vs nextElementSibling vs previousElementSibling
// parentElement: It returns the parent element of the specified element.
// nextElementSibling: It returns the next sibling element of the specified element.
// previousElementSibling: It returns the previous sibling element of the specified element.

// NodeList vs HTMLCollection
// NodeList: It is a collection of nodes that can be elements, text nodes, or comment nodes.
// It is a static collection, meaning it does not update automatically when the document changes.
// It can be created using methods like querySelectorAll() or getElementsByTagName().
// It can be converted to an array using Array.from() or the spread operator [...].

// HTMLCollection: It is a collection of HTML elements only.
// It is a live collection, meaning it updates automatically when the document changes.
// It can be created using methods like getElementsByClassName() or getElementsByTagName().
// It can be converted to an array using Array.from() or the spread operator [...].
// It is not recommended to use this method as it is not very flexible and does not return an array.
