"use strict";
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};
const saad = new Person("Saad", 1998);
// saad.calcAge();
console.log(saad);
// 1. a new empty object is created
// 2. function is called, this keyword will be set to newly created object this = {}
// 3. this newly created obj {} is linked to prototype
// 4. function automatically returns object {}

const matilda = new Person("Matilda", 1994);
const jack = new Person("Jack", 2000);
console.log(matilda, jack);
console.log(saad instanceof Person);

// Prototypes

console.log(Person.prototype);

Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};

console.log("proto", saad.__proto__);

console.log(Person.prototype === saad.__proto__);
console.log(Person.prototype.isPrototypeOf(saad));
console.log(Person.prototype.isPrototypeOf(Person));
Person.prototype.species = "Homo Sapian";
console.log(saad, jack);
console.log(saad.species, jack.species);

console.log(saad.hasOwnProperty("firstName"));
console.log(saad.hasOwnProperty("species"));
console.log(saad.__proto__);
console.log(Person.prototype);
console.log(saad.__proto__.__proto__);
console.log(Person.prototype.constructor);

const arr = [1, 2, 3, 3, 2, 1];

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
