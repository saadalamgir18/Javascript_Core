"use strict";

// scoping practice

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = "Muneeb";
      const str = `oh, and you are a millenial, ${firstName}`; //will access current scop variable
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    console.log(firstName); // will access gloab scop variable
    // add(1, 2); refference error, function are also block scop if in strict mode
  }
  printAge();
  return age;
}
const firstName = "Saad"; // global scop
// calcAge(1991);

// Hoisting practice

// with variable
console.log(me);
// console.log(job); //error --> TDZ
// console.log(year); //error --> TDZ

var me = "saad";
let job = "developer";
const year = 1991;

// functions hoisting
console.log(addDecl(1, 2));
// console.log(addExpr(2, 3));
// console.log(addArrow(5, 8));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};
// if decalred with const --> TDZ
// if declared with var --> error --> var cuase undefind due to doisting --> calling undefind cause error

const addArrow = (a, b) => a + b;

// example --> bug  due to hoisting

if (!numProducts) deleteShopingCart();

var numProducts = 10;

function deleteShopingCart() {
  console.log("delete all products");
}

// rules of this keyword
// console.log(this);

const calAge = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this);
};
// calAge(2020);
const calAgeArrow = (birthyear) => {
  console.log(2037 - birthyear);
  console.log(this);
};
// calAgeArrow(2020);

const jonas = {
  name: "Saad",
  year: 1991,
  calcAge: function () {
    console.log(this);
  },
};
// jonas.calcAge();

var name = "muneeb";

const Saad = {
  name: "Saad",
  year: 1991,
  calcAge: function () {
    console.log(this);
    const self = this;
    const greetdecl = function () {
      console.log(`Hey ${self.name}`);
    };
    greetdecl();
    const greet = () => console.log(`Hey ${this.name}`);
    greet();
  },
  //   greet: () => console.log(`Hey ${this.name}`),
};
// jonas.calcAge();
// jonas.greet();

// Primitives vs Objects

let age = 30;
let oldAge = age;
age = 31;
// console.log(age);
// console.log(oldAge);

const Me = {
  name: "saad",
  age: 30,
};

const friend = Me;
friend.age = 27;
// console.log(Me);
// console.log(friend);

// permitive type
let lastname = "Williams";
let oldLastName = lastname;
lastname = "Davis";
console.log(lastname, oldLastName);

// reference type
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;

marriedJessica.lastName = "Davis";
console.log("befor merrage", jessica);
console.log("after merrage", marriedJessica);

// copy an object
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log("befor merrage", jessica2);
console.log("after merrage", jessicaCopy);
