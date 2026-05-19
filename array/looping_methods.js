// foreach map filter reduce

// ek sab ek function return karte hain
// forEach() - undefined return karta hai, ye sirf array ke har element pe function ko call karta hai,
// aur kuch return nahi karta

// map() - ek naya array return karta hai, jisme har element
//  function ke return value se replace ho jata hai

// filter() - ek naya array return karta hai, jisme sirf wo
// elements hote hain jinke liye function true return karta hai

// reduce() - ek single value return karta hai, jo ki array
// ke elements ko function ke through reduce karke milta hai

// 🔥 JavaScript Array Methods — Return + Original Array Change
// Method	Kya Return Karta Hai	Original Array Change?
// forEach()	undefined	❌ No
// map()	New Array	❌ No
// filter()	Filtered New Array	❌ No
// reduce()	Single Value	❌ No

// 🔥 Original Array Change Ka Concept
// ❌ Ye methods original array change nahi karti
// forEach()
// map()
// filter()
// reduce()
// slice()
// concat()
// flat()

// ✅ Ye methods original array change karti hain
// push()
// pop()
// shift()
// unshift()
// splice()
// sort()
// reverse()

// forEach me ek fuction pass karna hota hai,
//  jo ki array ke har element pe call hota hai.
//  Ye function 3 arguments leta hai: current element,
//  index, aur original array.forEach me return value
//   ka koi use nahi hota, kyunki ye undefined return karta hai.

// let arr = [11, 12, 13, 14, 15];

// arr.forEach(function (val) {
//   console.log((val += 4));
// });

// map=> map sirf tab use krna hai jab apko ek nya array banana hia pichele data ke basis pe
// map  dkhte hi sath man ek blank array bnani iske andar ka uncton jo jo return krenga usko us array me push krna hai

// let arr = [11, 12, 13, 14, 15];

// let newarray = arr.map(function (val) {
//   return 12;
// });
// console.log(newarray);

// map jo hai vo foreach ke trh hi hai but map ko return krna jaruri hai kyuki map ek naya array return karta hai,
//     jisme har element function ke return value se replace ho jata hai.

// Aapka code chalega, but output thoda unexpected aayega because aap map() use kar rahe ho.

// let arr = [11,69,3,4,25]

// let newarray = arr.map(function(val){
//    if(val>10) return val
// })

// console.log(newarray)
// Output:
// [11, 69, undefined, undefined, 25]
// Kyu?

// map() har element ke liye kuch return karta hai.

// Agar condition true hai → value return hoti hai
// Agar false hai → kuch return nahi hota → undefined
// Step by Step:
// Value	Condition val > 10	Returned
// 11	true	11
// 69	true	69
// 3	false	undefined
// 4	false	undefined
// 25	true	25

// use case
// map() ka use tab hota hai jab aapko array ke har element ko modify/transform karke ek naya array banana ho.
// Important Point

// map():

// Original array change nahi karta
// Hamesha new array return karta hai
// Same length ka array deta hai

// filter jo hai ek naya array return karta hai, jisme sirf wo elements hote hain jinke liye function true return karta hai4

// let arr = [11, 69, 3, 4, 25];

// let newarray = arr.filter(function (val) {
//   if (val > 4) {
//     return true;
//   }
// });
// console.log(newarray);

// Important Difference
// Method	Return
// map()	Same length array
// filter()	Condition based filtered array

// filter() ka use tab hota hai jab aapko array me se sirf kuch specific values condition ke according chahiye hoti hain.

// Important Points

// ✅ New array return karta hai
// ✅ Original array change nahi karta
// ✅ Condition based data deta hai

// reduce ek single value return karta hai, jo ki array ke elements ko function ke through reduce karke milta hai

// reduce() in JavaScript

// reduce() ka use array ko ek single value me convert karne ke liye hota hai.

// Jaise:

// Total sum
// Total price
// Maximum number
// Object count
// Cart total

// let arr = [11, 69, 3, 4, 25];

// let newaaray = arr.reduce(function (acc, val) {
//   return acc + val;
// }, 0);

// console.log(newaaray);

// Easy Yaad Trick
// reduce = sab values ko mila kar ek final result banana

// find
// find() ek method hai jo array me se pehla element return karta hai jo given condition ko satisfy karta hai.
// Agar koi element condition ko satisfy nahi karta, to ye undefined return karta hai.

// find() vs filter()
// Method	Return
// find()	First matching value
// filter()	All matching values

// let arr = [11, 69, 3, 4, 25];

// let newaaray = arr.find(function (val) {
//   return val !== 12;
// });

// console.log(newaaray);



// .join(separator)


// Simple Example
// let arr = ["HTML","CSS","JS"]

// let result = arr.join()

// console.log(result)


