let arr = [1, 2, 35, 45, 7, 8];
arr.reverse();
console.log(arr);
//ye copy nahi banata, original array ko hi reverse kar deta hai
// original array ko hi change krta hai

//.sort((a, b) => {})

// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr);

// // sort() ka main logic hai 👉 compare karna aur order me arrange karna.
// // 🔥 Important Rule
// // Result	Action
// // Negative	a pehle
// // Positive	b pehle
// // 0	Same

// Ascending Order Logic
// arr.sort((a,b) => a-b) // agar a-b negative hua to a pehle aayega, agar positive hua to b pehle aayega, agar 0 hua to dono same hain

// Descending Order Logic
// arr.sort((a,b) => b-a) // agar b-a negative hua to b pehle aayega, agar positive hua to a pehle aayega, agar 0 hua to dono same hain


//concat() method is used to merge two or more arrays.
// It does not change the existing arrays, but instead returns a new array.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let mergedArr = arr1.concat(arr2);
// console.log(mergedArr); // Output: [1, 2, 3, 4, 5, 6]


//flat() method is used to flatten a nested array.
// It does not change the existing array, but instead returns a new array.
// let nestedArr = [1, 2, [3, 4], [5, 6]];
// let flatArr = nestedArr.flat();
// console.log(flatArr); // Output: [1, 2, 3, 4, 5, 6]

