//pure vs impure functions

// ek yesa fucntion jo hamesha same output dega
// same input ke liye aur koi side effect
// nahi karega usse hum pure function kehte hai

// Pure function: A pure function is a function that
// always produces the same output for the same input and has no side effects
//  (does not modify any external state).


// 👉 Pure Function kya hota hai?

// 👉 Same input → hamesha same output
// 👉 koi side effect nahi hota


// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3)); // 5
// console.log(add(2, 3)); // 5 (same output)

// Impure function: An impure function is a function that
// may produce different outputs for the same input or has side effects
// (modifies external state).


// 👉 Impure Function kya hota hai?

// 👉 Output change ho sakta hai (same input pe bhi)
// 👉 Side effects hote hain (bahar ki value change karna, API call, etc.)

// let count = 0;

// function addCount(num) {
//   count += num;
//   return count;
// }

// console.log(addCount(2)); // 2
// console.log(addCount(2)); // 4 ❌ different output

// 🧠 Easy trick yaad rakhne ke liye:

// 👉 Pure = Predictable + Safe
// 👉 Impure = Unpredictable + Side effects




// yese function jo bahahr ki value ko naa badle wo bhi pure function kehlata hai,
// aur jo bahar ki value ko badle wo impure function kehlata hai.