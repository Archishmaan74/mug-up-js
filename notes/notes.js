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
// textContent: It returns the text content of the element and its descendants. It does not parse HTML tags, so it returns the text as is.
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

///////////////////////////////////////////////////// API //////////////////////////////////////////////////////

// What is API?
// API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other.
// It defines the methods and data formats that applications can use to request and exchange information.
// APIs are used to enable communication between different software components, such as web applications, mobile applications, and servers.
// They allow developers to access the functionality of other applications or services without having to understand their internal workings.

// HTTP Request methods
// GET: It is used to retrieve data from a server.
// POST: It is used to send data to a server.
// PUT: It is used to update data on a server.
// DELETE: It is used to delete data from a server.
// PATCH: It is used to apply partial modifications to a resource on a server.

// Difference between GET and POST
// GET: It is used to retrieve data from a server.
// It appends the data to the URL as query parameters.
// It is idempotent, meaning that multiple identical requests will have the same effect as a single request.
// It is cached by the browser and can be bookmarked.
// POST: It is used to send data to a server.
// It sends the data in the request body.
// It is not idempotent, meaning that multiple identical requests may have different effects.
// It is not cached by the browser and cannot be bookmarked.

// Difference between PUT and PATCH
// PUT: It is used to update a resource on a server.
// It replaces the entire resource with the new data provided in the request body.
// It is idempotent, meaning that multiple identical requests will have the same effect as a single request.
// PATCH: It is used to apply partial modifications to a resource on a server.
// It only updates the specified fields in the resource with the new data provided in the request body.
// It is not idempotent, meaning that multiple identical requests may have different effects.

// XHR (XMLHttpRequest)
// It is a built-in JavaScript object that allows you to make HTTP requests to a server.
// It is used to send and receive data from a server asynchronously.
// It is a legacy API and has been replaced by the Fetch API.
// It is not recommended to use this API as it is not very flexible and does not support modern features like promises or async/await.
// It is also not very user-friendly and requires a lot of boilerplate code to set up.
// Its methods include open(), send(), setRequestHeader(), getResponseHeader(), and getAllResponseHeaders().
// readyState: It is a property of the XMLHttpRequest object that indicates the current state of the request.
// It can have the following values:
// 0: UNSENT - The request has been created but not yet opened.
// 1: OPENED - The request has been opened but not yet sent.
// 2: HEADERS_RECEIVED - The request has been sent and the headers have been received.
// 3: LOADING - The response is being received.
// 4: DONE - The request has completed and the response is ready.
// status: It is a property of the XMLHttpRequest object that indicates the HTTP status code of the response.
// It can have the following values:
// 200: OK - The request was successful and the response is ready.
// 404: NOT FOUND - The requested resource was not found on the server.
// 500: INTERNAL SERVER ERROR - The server encountered an error while processing the request.

// Promise
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// It is a way to handle asynchronous operations in JavaScript.
// A promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully and the promise has a resulting value.
// 3. Rejected: The operation failed and the promise has a reason for the failure.
// It is a modern and widely supported way to handle asynchronous operations in JavaScript.
// It is more flexible and powerful than the older methods like callbacks or XHR.

// .then(), .catch(), and .finally()
// .then(): It is a method of the promise object that is called when the promise is fulfilled.
// It takes a callback function as an argument that is executed when the promise is fulfilled.
// It can also take a second callback function as an argument that is executed when the promise is rejected.
// It returns a new promise that resolves to the return value of the callback function.
// Not good for complex logics.
// Functional chaining can lead to callback hell.

// .catch(): It is a method of the promise object that is called when the promise is rejected.
// It takes a callback function as an argument that is executed when the promise is rejected.
// It returns a new promise that resolves to the return value of the callback function.
// It is used to handle errors in the promise chain.

// .finally(): It is a method of the promise object that is called when the promise is settled (fulfilled or rejected).
// It takes a callback function as an argument that is executed when the promise is settled.
// It does not take any arguments and does not return a value.
// It is used to perform cleanup actions or to execute code that should run regardless of the promise's outcome.

// async/await
// async/await is a modern way to handle asynchronous operations in JavaScript.
// It is built on top of promises and provides a more readable and concise syntax for handling asynchronous operations.
// It allows you to write asynchronous code that looks and behaves like synchronous code.
// You can use async/await to handle promises in a more readable and concise way.
// try/catch blocks can be used to handle errors in async/await.

// Try/Catch
// It is a way to handle errors in JavaScript.
// It allows you to catch and handle errors that occur in your code.
// It consists of a try block that contains the code that may throw an error and a catch block that contains the code to handle the error.
// It provides cleaner and more readable error handling than using callbacks or promises.
// Better for complex logic and error handling.
// Not compatible with older browsers.

//////////////////////////////                        CLASSES & OOP                     /////////////////////////////////////////////

// instanceof
// It is an operator that checks if an object is an instance of a specific constructor function or class.
// It returns true if the object is an instance of the constructor function or class, and false otherwise.
// It is used to check the type of an object and to determine if it is an instance of a specific class or constructor function.
// It is a useful operator for checking the type of an object and for implementing polymorphism in JavaScript.

// constructor
// It is a special method of a class that is called when an object is created from the class.
// It is used to initialize the properties of the object and to perform any setup required for the object.
// It is a special method that is called automatically when an object is created from the class.

// prototype
// It is a built-in property of JavaScript objects that allows you to add properties and methods to an object.
// It is used to implement inheritance in JavaScript.
// It allows you to create a prototype chain, where an object can inherit properties and methods from another object.
// Basically, it is a way in which if desired values are not found in the object, it will look for the values in the prototype, which is the parent object.
// Example:
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// }
// Person.prototype.greet = function () {
//   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };
// const person1 = new Person("John", 30);
// person1.greet(); // Output: Hello, my name is John and I am 30 years old.
// This above example shows how to create a constructor function and add a method to its prototype.
// The prototype property is a built-in property of JavaScript objects that allows you to add properties and methods to an object.

// call
// Normally, when calling a function, the value of this inside the function is the object that the function was accessed on.
// With call(), you can assign an arbitrary value as this when calling an existing function, without first attaching the function to the object as a property.
// This allows you to use methods of one object as generic utility functions.
// Note: This function is almost identical to apply(), except that the function arguments are passed to call() individually as a list, while for apply() they are combined in one object, typically an array — for example, func.call(this, "eat", "bananas") vs. func.apply(this, ["eat", "bananas"]).

// this
// The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run.
// Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

// constructor
// The constructor method is a special method of a class for creating and initializing an object instance of that class.
// There are some additional syntax restrictions:
// A class method called constructor cannot be a getter, setter, async, or generator.
// A class cannot have more than one constructor method.
// If you don't provide your own constructor, then a default constructor will be supplied for you.
// If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided.

// inheritance
// In programming, inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one.
// JavaScript implements inheritance by using objects. Each object has an internal link to another object called its prototype.
// That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
// By definition, null has no prototype and acts as the final link in this prototype chain.
// It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.

// instanceof
// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object.
// The return value is a boolean value.
// Its behavior can be customized with Symbol.hasInstance.

// static
// The static keyword defines a static method or field for a class, or a static initialization block (see the link for more information about this usage).
// Static properties cannot be directly accessed on instances of the class.
// Instead, they're accessed on the class itself.
// Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

// .bind()
// .bind() is a method that locks the value of this inside a function, so that no matter how or where the function is called, it uses the this you told it to.
// Example:
// const module = {
//   x: 42,
//   getX: function () {
//     return this.x;
//   },
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // Expected output: undefined

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());
// // Expected output: 42

// .call() vs .apply() vs .bind()
// .call():
// .call() calls a function immediately with a given this value and arguments passed one by one.
// Example: func.call(thisArg, arg1, arg2)

// .apply():
// .apply is similar to .call, but it takes arguments as an array instead of one by one.
// Example: func.apply(thisArg, [arg1, arg2])

// .bind():
// .bind() doesn't call the function immediately. It returns a new function with a set this value and optional arguments.
// Example: const newFunc = func.bind(thisArg, arg1)

// getOwnPropertyDescriptor()
// The Object.getOwnPropertyDescriptor() static method returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain).
// The object returned is mutable but mutating it has no effect on the original property's configuration.

// defineProperty()
// The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

// getters and setters
// getters
// The get syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.

// setters
// The set syntax binds an object property to a function to be called when there is an attempt to set that property. It can also be used in classes.

// Use Getters and Setters when:
// You want to keep a value private (not let others change it directly)
// You want to validate or modify a value before saving or showing it

// Think of it like a "Gatekeeper"
// getter: Controls what is returned when you read the value.
// setter: Checks or transforms before setting the value.

////////////////////////////////////         MOST IMP         ////////////////////////////////////

// Q. What is hoisting?

// In JavaScript, hoisting is the behavior during the creation phase of the Execution Context, where variable and function declarations are moved to the top of their scope — either the global scope or the function scope.
// When JavaScript code runs, the Global Execution Context (GEC) is created in two phases:

// Creation Phase:
// A memory space is allocated for all variables and functions.
// var variables are hoisted and initialized as undefined.
// let and const are hoisted but not initialized — they’re in the Temporal Dead Zone (TDZ) until their line of declaration is executed.
// Function declarations are hoisted with their full definitions, so they can be invoked before they're written in code.

// Execution Phase:
// The code is executed line by line, with variables being assigned actual values.

// Q. What is a Temporal Dead Zone (TDZ)?

// The Temporal Dead Zone (TDZ) is the period between the start of the scope (when a variable is hoisted) and the moment the variable is initialized.
// During this time, trying to access the variable will result in a ReferenceError.
// This applies to variables declared with let or const.

// Q. What are closures?

// A closure is a feature of JS which states when a function remembers and keeps access to the variables from the scope where it was created (lexical scope), even after the outer function has finished running.
// This means the closure can still use the variables from its outer function, even when called outside of that function.

// useCallback vs useEffect()
// useCallback() helps optimize performance by avoiding unnecessary re-creations of functions, especially when passing callbacks to child components.
// useEffect() is useful for handling side effects in functional components, such as API calls, timers, or DOM manipulations.

// useRef()
// useRef() is a React hook that lets us store a value or get a reference to a DOM element, like an input box.
// It doesn't cause the component to re-render when the value changes.
// It is mainly used to handle things like focusing an input or copying text.
// It's helpful when we want to keep or access something without refreshing the UI

// useId()
// The useId() hook in React generates a unique ID that remains constant across re-renders.
// It's mainly used for accessibility attributes like id, htmlFor, or aria tags to ensure unique associations.
// It's helpful when rendering multiple components that need unique identifiers.
// This hook is available from React 18 onwards.
