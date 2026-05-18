let arr = [1, 2, 35, 45, 7, 8];
arr.push(5);
console.log(arr);
//last me add karega

arr.pop(); //last array se value remove karega

arr.shift();
console.log(arr); //first element remove karega

arr.unshift(100);
console.log(arr); //first me add karega

arr.splice(0, 2);
console.log(arr); //0 se start hoke 2 element remove karega

let newarr = arr.slice(0, 3);

console.log(newarr);    //0 se start hoke 3 element copy karega new array me



// 🔥 MOST IMPORTANT DIFFERENCE
// Method	Original Array Change?
// slice()	❌ No
// splice()	✅ Yes
// Easy Trick
// push/pop       → END
// shift/unshift  → START

// slice()  → Copy
// splice() → Remove/Add