//clouser
// clousers  ek function jo return kare ek or function ko usse clouser kehte hai or return krne vala  fnction hmesha  use krenga  parent function hmesha use krenga //

// clouser ek function ke andar ek function hota hai,
// aur inner function apne outer function ke variables ko access kar sakta hai,
// chahe outer function execute ho chuka ho ya nahi.


// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const result = outer();

// result(); // 1
// result(); // 2
// result(); // 3

// 👉 Clousers kya hota hai?
// 👉 Ek function ke andar ek function hota hai, aur inner function apne outer function ke variables
// ko access kar sakta hai, chahe outer function execute ho chuka ho ya nahi.

// lexical scope kya hota hai?
// lexical scope ka matlab hai ki ek function apne parent function ke variables ko access kar sakta hai,
// chahe parent function execute ho chuka ho ya nahi.





// lexical scoper => example
function abcd() {
    let a = 10;
    function dfg() {
        let b = 13;
        function ghii(){
            let c = 14;
        }
    }
}


