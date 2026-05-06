// 1. Primitive Data Types => bane bnaye ate hai or hum 
// isko copy kar skte hai or copy krne  pe real copy mil jaye isko primative datatypes kehte hai

// Number, String, Boolean, Null, Undefined, Symbol, BigInt

// 2. Reference Data Types => bane bnaye ate hai or hum isko copy kar skte hai or copy krne
// pe real copy nhi milti hai jabki refernce mila hai parents ka 

// Object{}, Array[], Function(), Date, RegExp, Map, Set, WeakMap, WeakSet

// 🔥 Difference (Important 🔥)

// | Primitive           | Non-Primitive           |
// | ------------------- | ----------------------- |
// | Value copy hoti hai | Reference copy hoti hai |
// | Immutable           | Mutable                 |
// | Simple              | Complex                 |


let a = 10;
let b = a;
a = a + 2;
console.log(a, b); ///primitives me value copy hoti hai isliye a me change hone pe b me koi change nhi aata hai


let d  = [1,2,3];
let e = d;
d.pop();

console.log(d, e); ///reference me reference copy hoti hai isliye d me change hone pe e me bhi change aata hai kyuki dono same reference ko point kr rhe hai


// Dynamic typing => JavaScript me variable ko declare krte time data type
// specify nhi krna padta hai or
// hum kisi bhi type ka data assign kr skte hai or change kr skte hai


let f = 10;
f = "hello"
f = ""
f = null
f = true
f = 10.2
f = NaN
console.log(typeof f); 





