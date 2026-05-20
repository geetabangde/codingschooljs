// JavaScript Object Destructuring

// Object destructuring ka matlab hota hai object ke data ko alag variables me nikalna.

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

let { city, pincode } = user.totalarea.area.address;

console.log(city);
console.log(pincode);

// Deep Object Destructuring Directly
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

let {
  totalarea: {
    area: {
      address: { city, pincode },
    },
  },
} = user;

let { totalarea, area } = user;

console.log(totalarea);
console.log(city);
console.log(pincode);