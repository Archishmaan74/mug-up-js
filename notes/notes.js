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

// Difference between function declaration, function expression and arrow function
// Function Declaration: It is a named function that can be called before or after it is defined.
// It is hoisted to the top of the scope, meaning it can be called before it is defined in the code.
// It is defined using the function keyword followed by the function name and parentheses.
// Example: function add(a, b) { return a + b; }

// Function Expression: It is an anonymous function that is assigned to a variable.
// It is not hoisted to the top of the scope, meaning it cannot be called before it is defined in the code.
// It is defined using the function keyword followed by parentheses and can be assigned to a variable or passed as an argument to another function.
// Example: const add = function(a, b) { return a + b; }

// Arrow Function: It is a shorthand syntax for writing function expressions using the arrow (=>) syntax.
// It is not hoisted to the top of the scope, meaning it cannot be called before it is defined in the code.
// It does not have its own this context, meaning it inherits the this context from the surrounding scope.
// It is defined using the arrow (=>) syntax and can be assigned to a variable or passed as an argument to another function.
// Example: const add = (a, b) => a + b;

//////////////////////////////////////////////////////     DOM     ///////////////////////////////////////////////////////////
// window is the global object in the browser
// console.log(window);

// window.document is the DOM (Document Object Model) which represents the HTML document loaded in the browser
// console.log(window.document);

// getElementById is a method of the document object which targets the element with the id "title"
// console.log(document.getElementById("title"));

// Difference between textContent, innerText and innerHTML
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

// createElement vs createTextNode
// createElement: It creates a new HTML element with the specified tag name.
// It can be used to create any type of HTML element, including divs, spans, paragraphs, etc.
// It returns an element node that can be appended to the document or manipulated using JavaScript.
// It is a method of the document object and is widely supported in modern browsers.

// createTextNode: It creates a new text node with the specified text content.
// It can be used to create text nodes that can be appended to the document or manipulated using JavaScript.
// It returns a text node that can be appended to the document or manipulated using JavaScript.
// It is a method of the document object and is widely supported in modern browsers.

// appendChild()
// This method appends a child node to the specified parent node.
// It can be used to add elements, text nodes, or comment nodes to the document.
// It is a method of the parent node and is widely supported in modern browsers.
// It is useful for adding elements to the document or manipulating the document structure.

// setAttribute vs getAttribute vs removeAttribute
// setAttribute: It sets the value of the specified attribute on the specified element.
// getAttribute: It returns the value of the specified attribute on the specified element.
// removeAttribute: It removes the specified attribute from the specified element.

// Capturing mode in event bubbling
// Event bubbling is a way of event propagation in the DOM.
// It occurs when an event is triggered on an element and then propagates up to its parent elements.
// In capturing mode, the event starts from the root of the DOM and propagates down to the target element.
// In bubbling mode, the event starts from the target element and propagates up to the root of the DOM.
// Event bubbling is the default mode of event propagation in the DOM.
// Event capturing is less commonly used but can be useful in certain situations like when you want to handle events at a higher level in the DOM hierarchy.
// Event delegation is a technique that allows you to attach a single event listener to a parent element instead of attaching multiple event listeners to child elements.

// stopPropagation
// This method stops the event from propagating to parent elements.
// It can be used to prevent event bubbling or capturing.
// It is useful for preventing multiple event listeners from being triggered for the same event.

// preventDefault
// This method prevents the default action of the event from occurring.
// It can be used to prevent the default behavior of form submission, link navigation, etc.
// It is useful for preventing the default behavior of an event and allowing you to handle the event in a custom way.

// parentNode vs parentElement
// parentNode: It returns the parent node of the specified element.
// It can be any type of node, including element nodes, text nodes, or comment nodes.
// It is a property of the element node and is widely supported in modern browsers.
// parentElement: It returns the parent element of the specified element.
// It only returns element nodes, not text or comment nodes.
// It is a property of the element node and is widely supported in modern browsers.
// It is useful for getting the parent element of an element or manipulating the document structure.

////////////////////////////////////////////////        EVENT LOOP        /////////////////////////////////////////////////////

// The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations.
// It is a single-threaded model that uses an event queue to handle asynchronous operations.
// The event loop continuously checks the event queue for any pending events and executes them in the order they were added to the queue.
// It allows JavaScript to handle multiple tasks concurrently without blocking the main thread.
// Synchonous code is executed first, followed by asynchronous code.

// Example of event loop
console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 0);
console.log("End");
// Output:
// Start
// End
// Timeout

// In this example, the synchronous code (console.log("Start") and console.log("End")) is executed first.
// Then, the asynchronous code (setTimeout) is executed after the synchronous code has completed.

// JS Engine
// The JS engine is a program that executes JavaScript code.
// It consists of Memory Heap and Call Stack.
// The memory heap is a region of memory used for dynamic memory allocation.
// The call stack is a data structure that stores the execution context of the currently executing function.
// The call stack is used to keep track of function calls and their execution context.
// The call stack follows the Last In First Out (LIFO) principle, meaning the last function called is the first one to be.

// Web APIs
// The web APIs are a set of APIs provided by the browser that allow JavaScript to interact with the browser and the DOM.
// They provide functionality for handling events, making network requests, manipulating the DOM, and more.
// The web APIs are not part of the JavaScript language itself, but they are provided by the browser environment.
// The web APIs are asynchronous and use callbacks, promises, or async/await to handle asynchronous operations.
// The web APIs are executed in the background and do not block the main thread.

// Task Queue
// The task queue is a queue that stores tasks that are ready.
// It is used to handle asynchronous operations and events.
// The task queue is also known as the callback queue or event queue.
// The task queue follows the First In First Out (FIFO) principle, meaning the first task added to the queue is the first one to be.
// The event loop continuously checks the task queue for any pending tasks and executes them in the order they were added to the queue.
// The event loop checks the call stack and the task queue.
// If the call stack is empty, it takes the first task from the task queue and pushes it onto the call stack for execution.
// This process continues until all tasks in the task queue have been executed.
// The event loop allows JavaScript to handle multiple tasks concurrently without blocking the main thread.
// It allows JavaScript to perform non-blocking I/O operations and handle events asynchronously.

// Macro Task Queue vs Micro Task Queue

// The macro task queue is a queue that stores tasks that are ready to be executed.
// It is used to handle asynchronous operations and events.
// The macro task queue is also known as the task queue or callback queue.
// It is used for tasks like setTimeout, setInterval, and I/O operations.
// It has lower priority than the micro task queue.

// The micro task queue is a queue that stores tasks that are ready to be executed
// It is used to handle promises and other micro tasks.
// The micro task queue is also known as the job queue or next tick queue.
// It is used for tasks like promises, mutation observers, and process.nextTick.
// It has higher priority than the macro task queue.
