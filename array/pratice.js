// Q1.crete a array with 3 friuts and print the second a fruit

let fruits = ["apple", "mango", "banana"];
console.log(fruits[1]);

// Q2. Add a fruit at the end of the array and add a fruit at the beginning of the array and remove the last fruit and remove the first fruit and print the array
let fruits = ["apple", "mango", "banana"];
fruits.push("miral");
fruits.unshift("Pinapple");
fruits.shift();
fruits.pop();
console.log(fruits);

//Q3. Insert "red" and 'blue' at index 1 in this array

let arr = ['green','purple']
let newarray = arr.splice(1,0,'red','blue')
console.log(newarray);


// Q4. Create a array with 5 numbers and print the sum of all the numbers in the array

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 

// Q5. Create an array of alphabets and print all the vowels in the array

let arr = ['meena', 'zainab','riya','ashwani','geeta',]
let newarray = arr.sort()
console.log(newarray);


//Q6. use .map() to squre each number

let arr = [2, 4, 8, 12];
let newarray = arr.map(function (val) {
  return val * val;
});
console.log(newarray);


Q7 . use .filter() to filter out all the numbers greater than 10
let arr = [2, 4, 8, 1];
let newarray = arr.filter(function (val) {
  return val <= 10;
});
console.log(newarray);
