// truthy and false values in JavaScript
// Truthy => aise value jise JavaScript true ke roop me treat krta hai
// Falsey => aise value jise JavaScript false ke roop me treat krta hai

// falsey values => false, 0, -0, 0n, "", null, undefined, NaN

// Truthy values => true, " ", [], {}, function(){}, 1, -1, 0.1, "false", "0", "null", "undefined", "NaN"

let value1 = 0; // falsey
let value2 = "Hello";
let vlaue3 = value1 == value2;
console.log(vlaue3); // value1 is falsey, so it will take "Default Value"

// (==) =>
// is a comparison operator in JavaScript that checks for equality between two values.
//  It performs type coercion, meaning it converts the values to a common type before making the comparison.
//  For example, if you compare a number and a string, JavaScript will convert the string to a number before comparing them.

// In the given code snippet, value1 is assigned the value 0,
// which is a falsey value.When we compare value1 with
// value2(which is "Hello") using the == operator,
// JavaScript will convert the string "Hello" to a number before making the comparison.
// Since "Hello" cannot be converted to a valid number, it will be treated as NaN (Not a Number).

// (===) =>
// is a strict comparison operator in JavaScript that checks for equality between two values.
// It does not perform type coercion, meaning it does not convert the values to a common type before making the comparison.
// For example, if you compare a number and a string, they will be considered unequal even if they have the same value.
