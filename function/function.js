// JavaScript me function ek aisa block hota hai jisme hum
// kuch code likhte hain jo kisi
// specific kaam ko karta hai.
// Function ko hum define karte hain aur phir usko call karte hain
// Function ke do main types hote hain:
// 1. Function Declaration

// Jab hum function keyword ke saath
// directly function banate hain,
//  use Function Declaration kehte hain.

example:
function greet() {
    console.log("Hello, World!");
}

// 2. Function Expression
// Jab hum function ko ek variable ke andar store karte hain,
// use Function Expression kehte hain.
example:
const greet = function() {
    console.log("Hello, World!");
}

// Function ko call karne ke liye hum uska naam likhte hain
// aur parentheses () lagate hain.
example:
greet(); // Output: Hello, World!


// Function me hum parameters bhi le sakte hain
example:
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice"); // Output: Hello, Alice!


// fat arrow function:
// ES6 me hum arrow function bhi use kar sakte hain
// Arrow function ek concise syntax provide karta hai
// aur isme 'this' keyword ka behavior bhi alag hota hai.
example:
const greet = (name) => {
    console.log("Hello, " + name + "!");
}
greet("Bob"); // Output: Hello, Bob!



// normal funcation me this keyword ka reference us object ko hota hai jisme function call hota hai
const person = {
    name: "Charlie",
    email: "charli@gmail.com"
};

// Normal function aur arrow function me kuch differences hote hain:
// 1. Syntax: Arrow function me concise syntax hota hai.
// 2. 'this' keyword: Normal function me 'this' ka reference us
//  object ko hota hai jisme function call hota hai, jabki arrow
//  function me 'this' ka reference us context ko hota hai jisme
// function define hota hai.
// 3. Constructor: Normal function ko constructor ke roop me use
// kiya ja sakta hai, jabki arrow function ko constructor ke roop
//  me use nahi kiya ja sakta.


// 🚀 Final Summary
// Normal function → this depends on how function is called
// Arrow function → this depends on where function is defined


// parameter: function ke andar jo value pass ki jati hai usko parameter kehte hain
example(person); // "person" is the parameter

// argument: jab hum function ko call karte hain aur usme value pass karte hain usko argument kehte hain
example: greet("Alice"); // "Alice" is the argument


default parameters:
//  JavaScript me hum function ke parameters ke liye default values set kar sakte hain.Agar function call karte waqt koi argument pass nahi kiya jata hai, to default value use hoti hai.
example:
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}