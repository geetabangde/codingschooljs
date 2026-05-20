let user = {
  id: 1,
  name: "John",
  age: 30,
  isAdmin: true,
  courses: ["html", "css", "js"],
  wife: null,
};
console.log(typeof user.wife); // null is an object
// Phir object kyu aaya?

// Ye JavaScript ka ek old bug / historical behavior hai.

// Object ke andar Array (Nested Data Structure)
let user = {
  name: "gaata",
  age: 45,
  address: ["city", "mumbai"],
  pincode: 4335,
};
console.log(user.address[1]);
console.log(user);

// Important Points
// Value	typeof Output
// "hello"	"string"
// 123	"number"
// true	"boolean"
// undefined	"undefined"
// null	"object" ❌
//nested object
let company = {
  name: "Tech",

  employee: {
    personal: {
      address: {
        city: "Mumbai",
      },
    },
  },
};

console.log(company.employee.personal.address.city);

// Deep Object Structure
// user
//  └── totalarea
//       └── area
//            └── address
//                 ├── city
//                 └── pincode
let user = {
  name: "geeta",

  totalarea: {
    area: {
      address: {
        city: "mumbai",
        pincode: 343,
      },
    },
  },

  location: "23.24",
};

console.log(user.totalarea.area.address.city);