// 👉 Hoisting kya hota hai?

// JavaScript me hoisting ka matlab:

// 👉 Variables aur functions upar (top) move ho jate hain memory me before execution

// 🔥 Function Declaration vs Function Expression (Hoisting)
// 🔹 1. Function Declaration (Hoisted ✅)
// sayHello();

// function sayHello() {
//   console.log("Hello");
// }

// 👉 Ye chalega ✅
// kyunki poora function hoist ho jata hai

// 🔹 2. Function Expression (Not Hoisted ❌)
// sayHi();

// const sayHi = function() {
//   console.log("Hi");
// };

// 👉 Ye error dega ❌
// 👉 Cannot access before initialization

// 🧠 Kyu aisa hota hai?
// 👉 Function Declaration
// Poora function memory me chala jata hai
// Isliye pehle call kar sakte ho
// 👉 Function Expression
// Sirf variable hoist hota hai
// Function assign baad me hota hai
// // internally aisa hota hai
// const sayHi; // hoisted (but not initialized)

// sayHi(); // ❌ error
// 🔥 Easy Difference Table
// Feature	Function Declaration	Function Expression
// Hoisting	✅ Full hoisting	❌ Partial
// Call before define	✅ Yes	❌ No
// Syntax	function abc(){}	const abc = function(){}
// 🧠 Easy trick yaad rakho:

// 👉 Declaration = Direct function → Hoisted
// 👉 Expression = Variable me function → Not ready before assignment

// ✅ Final 1-line:

// 👉 Function Declaration hoist hota hai, Function Expression nahi