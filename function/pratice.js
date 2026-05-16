// Q1. //what is the difference between function declaration and function expression?

// //function declaration

// add(2, 3); //5
// function add(a, b) {
//     return a + b;
// }
 


// //function expression
// //add(2, 3); //error before initialization error because of hoisting
// const add = function(a, b) {
//     return a + b;
// }


// Q2.
// greet(); //Hello
// function greet() {
//     console.log("Hello");
// }


// const multiply = (a, b) => {
//     return a * b;
// };

// multiply(2, 3); //6



// Q3.
//what is the difference between parameters and arguments?

//parameters are the variables that are defined in the
// function declaration or expression. They are used to
// receive the values that are passed to the function when it is called.



function abcd(val) {
    val();
}

abcd(function () {
    console.log("Hello");
})


