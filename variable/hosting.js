// Short One-Liner

// 👉 Hoisting is JavaScript's default behavior
// of moving declarations to the top of their scope

// 🔥 Hoisting Summary
// var → hoisted + initialized with undefined
// let/const → hoisted but in TDZ (error)
// function declaration → fully hoisted
// function expression / arrow → variable hoisting rules follow


// console.log(nm);
// var nm = "John Doe"; // Output: undefined



if (true) {
    var a = 10;
    let b = 20;
}
console.log(a); //10
console.log(b); // ReferenceError


// var ko hum function scoped me use kr skte hai
// let aur const block scoped hote hai, iska matlab ye hai ki ye sirf us block ke andar hi
//  accessible hote hai jaha pe unhe declare kiya gaya hai. Agar hum unhe block ke
// bahar access karne ki koshish karte hai to hume ReferenceError milega.




// why const  allows chnagesing object properties?

const persone = {
    name : "John",
}

persone.name = "sharman"; // allowed
persone = {} // not allowed
console.log(persone); // { name: 'sharman' }



