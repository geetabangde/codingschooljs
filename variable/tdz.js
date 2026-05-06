// TDZ kya hota hai?

// 👉 TDZ = wo time period jab variable declare ho chuka hota hai, lekin initialize hone se pehle use access nahi kar sakte

// Simple line me:
// “declare ho gaya, par use karne pe error aayega”

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 10;

// console.log(b);
// var b = 10; // undefined

// console.log(c);
// const c = 10; // ReferenceError: Cannot access 'c' before initialization

// 🔥 Interview One-Liner

// 👉 TDZ is the time between variable declaration and initialization
// where accessing the variable throws a ReferenceError

// 🔥 Quick Summary
// TDZ → only let & const
// access before initialization → ❌ error
// var → no TDZ, gives undefined
// block ke start se TDZ start hota hai
