// for loop//

// console.log("for loop");
// syntax of for loop
// for (initialization; condition; increment / decrement) {
//   // code
// }

// example of for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//1 SE 5 TAK PRINT HOGA

for (let i = 5; i >= 1; i--) {
  console.log(i);
}
//5 SE 1 TAK PRINT HOGA

// 1 SE 10 TAK KE EVEN NUMBER PRINT HOGA
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// 1 SE 10 TAK KE ODD NUMBER PRINT HOGA
// for loop use karke 1 se 10 tak ke odd numbers print karo.

for(let i=1; i<=10; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}

// 1 SE 10 TAK KE NUMBER KA SUM KARO
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}

console.log(sum);

for(let i = 1; i<=5; i++){
    let pattern = "";
   for(let j=1; j<=i; j++){
        pattern = pattern + "*"
    }
    console.log(pattern)
}

// *
// **
// ***
// ****
// *****


for(let i = 5; i>=1; i--){
    let pattern = "";
   for(let j=1; j<=i; j++){
        pattern = pattern + "*"
    }
    console.log(pattern)
}

// *****
// ****
// ***
// **
// *

// 1
// 12
// 123
// 1234
// 12345

for (let i=1; i<=5; i++){
    let pattern = ""
 for(let j=1; j<=i; j++){
     pattern = pattern + j
 }
 console.log(pattern)
}

// 1
// 12
// 123
// 1234
// 12345


for (let i=5; i>=1; i--){
    let pattern = ""
 for(let j=1; j<=i; j++){
     pattern = pattern + j
 }
 console.log(pattern)
}



