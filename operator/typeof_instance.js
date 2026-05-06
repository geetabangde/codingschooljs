// typeof operator examples

console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof function () {}); // function
console.log(typeof 42); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof undefined); // undefined
console.log(typeof Symbol("symbol")); // symbol
console.log(typeof ""); // string
console.log(typeof 0); // number
console.log(typeof NaN); // number
console.log(typeof Infinity); // number

// instanceof operator examples
// instaceof operator ka use karke hum ye check kar sakte hai ki koi object kis class ka instance hai ya nahi.
// instcateof  ka hum primative value ke sath use nhi krte bs reference value ke sath use krte hai.

// syntax

// instanceof ka literal matlab

// 👉 instance of = “iska example / iska member / is se bana hua”

// Simple Hindi me:

// “ye object kis cheez ka bana hua hai?”

// 🔥 Example se samjho
// function Car() {}

// let myCar = new Car();

// 👉 Yaha:

// Car = blueprint (class)
// myCar = ek instance (example)
// 🔹 Ab instanceof use:
// console.log(myCar instanceof Car);

// 👉 Matlab:

// “Kya myCar, Car ka instance hai?”

// ✔ Answer: true

// let data = [1, 2, 3];

// if (Array.isArray(data)) {
//   console.log("Ye array hai");
// } else {
//   console.log("Array nahi hai");
// }

// [] instanceof Array

// 👉 mostly sahi hai ✔
// ❗ but kabhi-kabhi (different iframe/window cases) fail ho sakta hai

// 🔥 Isliye BEST:
// Array.isArray([])

// 👉 100% reliable ✔

// 🔥 Interview Line (yaad kar lo 😈)

// “Array check karne ke liye Array.isArray() is the most reliable method in JavaScript.”

// console.log(Array.isArray({}));
// console.log(Array.isArray(null));

// 🔥 Important Concept:
// Value	Result
// []	true
// {}	false
// null	false
// "text"	false

// console.log([] instanceof Object);

// true

// 🔹 Real Meaning:

// Array ek special type ka object hota hai

// 🔥 Final Concept Clear:
// Check	Result
// [] instanceof Array	true
// [] instanceof Object	true
// {} instanceof Array	false

// console.log(null instanceof Object);

// false

// 🔍 Explanation:
// null instanceof Object

// 👉 instanceof check karta hai:

// “Kya ye object kisi constructor se bana hai?”

// ❗ But:

// null kisi bhi constructor se nahi bana
// ye ek primitive value hai (special empty value)
// 🔥 Isliye:
// null instanceof Object // false
// ⚠️ Confusion kyun hota hai?
// typeof null // "object" 😵

// 👉 Ye JavaScript ka bug hai
// 👉 But instanceof sahi batata hai

// 🔹 Final Rule yaad rakho:
// Value	instanceof Object
// {}	true
// []	true
// null	false

// Explanation:
// NaN == NaN


// 👉 Result: false

// ❗ Kyun?

// 👉 JavaScript me NaN kisi ke equal nahi hota — even khud ke bhi nahi

// “NaN is not equal to anything, including itself”
