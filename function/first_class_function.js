//first class function
// => function jo value ki tarah treat kiya jata hai,
//     use first class function kehte hain.

// function greet() {
//   return "Hello";
// }


// first class function vo hote hai jise hum variable me store kar sakte hai,
// function ke argument ke roop me pass kar sakte hai,
// aur function ke return value ke roop me use kar sakte hai.

// 👉 Functions are treated like normal values (just like numbers, strings, objects).

// That means you can:

// Store them in variables
// Pass them as arguments
// Return them from other functions


// 🔹 1. Function stored in a variable
// const greet = function() {
//   return "Hello";
// };

// console.log(greet()); // Hello

// 👉 Function is assigned to a variable just like a value.


// 🔹 2. Function passed as argument
// function sayHello() {
//   console.log("Hello!");
// }

// function execute(fn) {
//   fn(); // calling function
// }

// execute(sayHello);

// 👉 Here, function is passed like data.


// 🔹 3. Function returned from another function
// function outer() {
//   return function inner() {
//     return "Inside function";
//   };
// }

// const result = outer();
// console.log(result()); // Inside function

// 👉 Function returning another function = very powerful concept.

// 🔑 Why First-Class Functions Matter

// Because of this feature, JavaScript supports:

// Callbacks
// Closures
// Higher-order functions
// Functional programming


// Final simple definition:

// 👉 Jab function ko value ki tarah use kar sakte hain, usse first-class function bolte hain