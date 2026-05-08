// if else else-if

// 1. if Statement

// Condition true hui to code chalega.

let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}

// 2. if-else Statement

// Condition true hui to if block chalega, otherwise else block chalega.
let age2 = 16;

if (age2 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

// 3. if-else if-else Statement

// Multiple conditions check karne ke liye use hota hai.
let age3 = 65;

if (age3 < 18) {
  age = 18;
} else if (age3 >= 18 && age3 < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}

