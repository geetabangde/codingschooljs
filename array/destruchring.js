// Destructuring in JavaScript

// Destructuring ka matlab hota hai:

// 👉 Array ya Object se values ko alag-alag variables me nikalna (extract karna).

// Simple words me:

// data tod kar variables me rakhna


1. Array Destructuring

// Without destructuring:

// let arr = [10,20,30]

// let a = arr[0]
// let b = arr[1]

// console.log(a,b) // 10 20
// With destructuring:

// let arr = [10,20,30]
// let [a,b] = [10,20,30]


// Why Use Destructuring?
// ✅ Code Short Hota Hai
// ✅ Readable Hota Hai
// ✅ Fast Access Milta Hai
// ✅ React me Bahut Use Hota Hai

// Important Types
// Type	Example
// Array Destructuring	[a,b] = arr
// Object Destructuring	{name,age} = obj



let arr = [3,4,6,9,6,7,8,9]
let arr2 = [...arr]

console.log(arr2, arr)

Aapne yaha spread operator (...) ka use karke array copy kiya hai ✅

let arr = [3,4,6,9,6,7,8,9]

let arr2 = [...arr]

console.log(arr2, arr)
Output
[3,4,6,9,6,7,8,9]
[3,4,6,9,6,7,8,9]
Explanation
let arr2 = [...arr]

Yaha:

// ...arr array ki saari values ko spread karta hai
// Fir un values se naya array ban jata hai

// 👉 Matlab arr2 ek new copy hai arr ki.

// Important Point ⭐

// Agar aap direct copy karte:

// let arr2 = arr

// To dono same reference point karte.

// Example:

// arr2.push(100)

// console.log(arr)

// Output:

// [3,4,6,9,6,7,8,9,100]

// ⚠️ Original array bhi change ho jata.

// But Spread Operator Safe Copy Banata Hai ✅
// let arr = [1,2,3]

// let arr2 = [...arr]

// arr2.push(100)

// console.log(arr)
// console.log(arr2)

// Output:

// [1,2,3]
// [1,2,3,100]

// 👉 Original array change nahi hua.

// Real Use Cases
// 1. Array Copy
// let copy = [...arr]
// 2. Array Merge
// let c = [...a,...b]
// 3. React State Update ⭐
// setUsers([...users,newUser])
// Easy Yaad Trick
// ... = spread/faila dena





// let arr1 = [3,4,6,9,6,7,8,9]
// let arr3 = [4,5,6,6,8]
// let arr2 = [...arr3,...arr1]
// let arr4 = arr1.concat(arr3)

// console.log(arr2,arr4)

// spere operator aur concat() dono hi array merge karne ke liye use kiye ja sakte hain.
// Haan ✅
// Array merge karne ke liye dono use kar sakte ho:

// Spread Operator ...
// concat()

