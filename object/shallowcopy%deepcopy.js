// 🔹 Shallow Copy

// Shallow copy me sirf first level copy hoti hai.
// Nested objects/arrays ka reference same rehta hai ❌

let user1 = {
  name: "riya",
  surname: "sharma",
  address: {
    city: "mumbai",
    pincode: 5767,
  },
};
let user2 = { ...user1 };
user2.address.city = "indore";
console.log(user1.address.city);
console.log(user2.address.city);

// Output
// indore
// indore
// Kyun hua aisa? 🤔

// Kyuki:

// let user2 = { ...user1 }

// sirf shallow copy banata hai.

// Nested object:

// address

// same reference share karta hai.

// Memory Concept
// user1.address ----┐
//                   ├── same object
// user2.address ----┘

// Isliye user2.address.city change karne par user1 bhi change ho gaya.

// Deep copy
// Deep copy me nested objects/arrays ka bhi alag copy ban jata hai ✅

let user1 = {
  name: "Geeta",

  address: {
    city: "Mumbai",
  },
};

let user2 = JSON.parse(JSON.stringify(user1));

user2.address.city = "Indore";

console.log(user1.address.city);
console.log(user2.address.city);

// Output
// Mumbai
// Indore

// ✅ Original object change nahi hua.

// Kaise kaam karta hai?
// Step 1
// JSON.stringify(user1)

// Object ko JSON string me convert karta hai:

// '{"name":"Geeta","address":{"city":"Mumbai"}}'
// Step 2
// JSON.parse()

// Us string ko wapas new object bana deta hai.

// Isliye completely new copy milti hai ✅

// Important Limitation ❌

// Ye method:

// function
// undefined
// Date
// Map
// Set

// properly copy nahi karta.

// Example Problem
// let obj = {
//    date: new Date(),
//    func: function(){}
// };

// let copy = JSON.parse(JSON.stringify(obj));

// console.log(copy);

// Function remove ho jayega ❌

// Best Modern Way ✅
// structuredClone(obj)

// Ye modern aur better deep clone method hai.

// JavaScript structuredClone()

// structuredClone() ka use deep copy banane ke liye hota hai ✅

// Ye nested object aur array ki completely new copy banata hai

// Syntax;
// let copy = structuredClone(originalObject);

// JavaScript structuredClone()

// structuredClone() ka use deep copy banane ke liye hota hai ✅

// Ye nested object aur array ki completely new copy banata hai.

// Syntax
// let copy = structuredClone(originalObject);
// Basic Example
// let user1 = {
//     name: "Geeta",

//     address: {
//         city: "Mumbai"
//     }
// };

// let user2 = structuredClone(user1);

// user2.address.city = "Indore";

// console.log(user1.address.city);
// console.log(user2.address.city);
// Output
// Mumbai
// Indore

// ✅ Original object safe raha.

// Array Example
// let arr1 = [1, 2, [3, 4]];

// let arr2 = structuredClone(arr1);

// arr2[2][0] = 100;

// console.log(arr1);
// console.log(arr2);
// Output
// [1, 2, [3, 4]]

// [1, 2, [100, 4]]
// Mixed Object Example
// let student = {
//     name: "Geeta",

//     skills: ["HTML", "JS"],

//     address: {
//         city: "Mumbai"
//     }
// };

// let copy = structuredClone(student);

// copy.skills[0] = "React";
// copy.address.city = "Indore";

// console.log(student);
// console.log(copy);
// Why Better Than JSON Method? 🚀
// Feature	JSON Method	structuredClone
// Deep Copy	✅	✅
// Date support	❌	✅
// Map/Set support	❌	✅
// Cleaner	❌	✅
// Important

// Ye modern browsers aur latest Node.js me support karta hai ✅

// let newObj = structuredClone(oldObj);

// Bas itna hi use karna hota hai 😊 