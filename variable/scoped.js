// 1. Block Scope

// 👉 { } ke andar jo variable banta hai, wo sirf us block ke andar hi use hota hai

// {
//     let name = 'geeta';
//     console.log(name);
// }
// console.log(name);

// variable.js me humne dekha ki
// var se banaya hua variable window ke andar add hota hai,
// aur aap usko firse declare kr sakte ho without any error.
//  Lekin let se banaya hua variable block scope me hota hai,
// aur aap usko firse declare nahi kar sakte ho, warna error aayega.
// let a = 10;
// function test() {
//     let a = 20;
//     console.log(a);
// }
// test();
// console.log(a);

// var, let, const se ek-ek variable banao aur value print karo

// var age = 25;
// console.log(age);

// let isboolean = true;
// console.log(isboolean);

// const name = 'geeta';
// console.log(name);

// Ek variable let se banao, uski value change karo
// 👉 kya output aayega?

//  First code
// let b = 10;
// function myFunction() {
//      b = 20;
//     console.log(b);
// }
// myFunction();

// Conclusion
// First code → global value change
// Second code → local variable create (shadowing)
// Second code me humne let se variable banaya hai, isliye wo block scope me hai, aur uska naam bhi same hai, isliye wo global variable ko shadow kar raha hai. Isliye second code me local variable create ho raha hai, aur global variable change nahi ho raha hai.
// let c = 10;
// function myFunction() {
//      let c = 20;
//     console.log(c);
// }
// myFunction();
// console.log(c);

// scoped chain

// 👉 Function ke andar koi a declare nahi hua
// 👉 Isliye JavaScript global scope me a dhundta hai

// ✔️ Global a = 10 mil gaya
// 👉 Output: 10

// 💡 Rule

// 👉 Agar function ke andar variable nahi milta
// ➡️ JavaScript bahar (outer scope) me search karta hai
// ➡️ Isko kehte hain scope chain

// let e = 10;
// function myFunction() {
//     console.log(e);
// }
// myFunction();

// var a = 10;

// function test() {
//   console.log(a);
//   var a = 20;
// }

// but javascript me hoisting hota hai, isliye var a = 20; ko function ke top pe le jata hai,
// aur uski value undefined hoti hai.
// Isliye output undefined aayega, na ki 10.

// 💡 Trick yaad rakhna

// 👉 var hoist hota hai → value nahi
// 👉 isliye undefined milta hai

// const obj = { name: "Geeta" };

obj.name = "Riya"; // riya print hoga, kyunki humne obj ke andar ki value change ki hai, na ki obj ka reference change kiya hai

console.log(obj.name);

// 👉 const ka matlab hai:

// variable ka reference change nahi hoga
// but object ke andar ki values change ho sakti hain
// 💡 Simple Samjho

// 👉 const = box fixed hai
// 👉 but box ke andar ka samaan change ho sakta hai

// console.log(a);
// var a = 10;

// function a() {}

// console.log(a);

// ✅ Correct Answer
// function a() {}
// 10

// 🧠 Step-by-step Reason
// 🔥 Hoisting ka game

// JavaScript internally isko aise treat karta hai:

// function a() {}   // function hoisted FIRST (priority high)
// var a;            // var hoisted (but ignored because function already hai)

// console.log(a);   // 👉 function a() {}
// a = 10;
// console.log(a);   // 👉 10
// 💡 Important Rule

// 👉 Function declaration > var hoisting

// Function pehle aata hai
// var usko override nahi karta (jab tak assign na ho)
