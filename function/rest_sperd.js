// 🔥 1. Spread Operator (...)

// 👉 Array ya object ko expand (faila) kar deta hai

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);


// 🔥 Spread use cases:
// Array copy
// Object copy
// Merge arrays/objects
// Function arguments expand

// 2. Rest Operator (...) 

// 👉 Multiple values ko collect (jod) karke array bana deta hai

// 🔹 Example (Function)
// function sum(...numbers) {
//   console.log(numbers);
// }

// sum(1, 2, 3, 4); // Output: [1, 2, 3, 4]


function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10


// jab argument kai saree ho to humnai utne hi paramenter bananne pdenge . isse
// bachane ke liye, hum rest ka use karte hai ...

// function ke parameter space main lage to vo rest operator ban jata hai,
// aur usme jitne bhi argument pass karenge vo sab ek array ke form me aa jayenge
    
    // AGR WO ARRYS AND OBJEJT ME MAIN LAGE TO VO SPREAD OPERATOR BAN JATA HAI


//     🔥 Rest Operator use kyu karte hain?
// ✔ 1. Flexible function banane ke liye
// jitne marzi arguments handle kar sakte ho
// ✔ 2. Clean code likhne ke liye
// manual arguments list nahi likhna padta
// ✔ 3. Remaining values collect karne ke liye
// destructuring me leftover values mil jaati hain
// ✔ 4. Dynamic data handle karne ke liye
// APIs / inputs me useful


// One Line Interview Answer

// 👉 Rest operator is used to collect multiple values into a single array, especially
// when number of arguments is unknown.


// 🔥 Spread Operator (...) ke Use Cases

// 👉 Spread operator ka main kaam hota hai
//  data ko expand(faila) karna —
//  array ya object ko tod kar individual elements me convert karna.


// 🔹 1. Array copy banana (without change original)
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// console.log(arr2);
// Output:
// [1, 2, 3]

// 👉 Original array safe rehta hai



// 🔥 Spread Operator kyu use karte hain?
// ✔ 1. Data copy safe tarike se
// ✔ 2. Arrays/objects merge karne ke liye
// ✔ 3. Function arguments pass karne ke liye
// ✔ 4. Immutability maintain karne ke liye (React me important)


// 🚀 Easy Trick

// 👉 Spread = “cheezon ko faila do”

// 🔥 Interview One-liner

// 👉 Spread operator is used
//  to expand arrays or objects 
//  into individual elements,
//     commonly used for copying, merging, and passing data.