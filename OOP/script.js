"use strict";
/*
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

// static method
Person.hey = function () {
  console.log("hey there (..)");
};
Person.hey();
// saad.hey(); // this is not accisible to object.
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

// Es6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calAge() {
    console.log(2037 - this.birthYear);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a ful name!`);
  }
  get fullName() {
    return this._fullName;
  }
  // static method
  static hey() {
    console.log(this);
    return "hey there (..)";
  }
}

const umer = new PersonCl("Umer", 2024);
umer.calAge();
console.log(umer.__proto__ === PersonCl.prototype);
console.log("get method in classes", umer.age);

console.log(PersonCl.hey());
// get and set methods
const account = {
  owner: "Umar",
  movements: [100, 1000, 200, -100, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(movement) {
    this.movements.push(movement);
  },
};
console.log(account.latest);
account.latest = 500;
console.log(account.movements);


const PersonProto = {
  calAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
steven.birthYear = 2020;
steven.name = "Steven";
steven.calAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calAge();

*/

// Inheritance Between "Classes":Constructor Functions

const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// linking prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
Student.prototype.constructore = Student;
console.dir(Student.prototype.constructore);
