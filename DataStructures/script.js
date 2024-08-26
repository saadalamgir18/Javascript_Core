"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const weekdayss = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours1 = {
  [weekdayss[3]]: {
    open: 12,
    close: 22,
  },
  [weekdayss[4]]: {
    open: 11,
    close: 23,
  },
  [weekdayss[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  openingHours1,
  orderDelivery({ startIndex, mainIndex, time, address }) {
    console.log(`Order recieved! ${this.starterMenu[startIndex]} 
      and ${this.mainMenu[mainIndex]} will be deliver to
      ${address} at ${time}`);
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};
// Looping Objects: Object Keys, Values, and Entries
for (const days of Object.keys(openingHours1)) {
  console.log(days);
}
for (const days of Object.values(openingHours1)) {
  console.log(days);
}
for (const days of Object.entries(openingHours1)) {
  console.log(days);
}
for (const [days, { open, close }] of Object.entries(openingHours1)) {
  console.log(days, open, close);
}

/*
// Enhanced Object Literals

// Looping Arrays: The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
for (const item of menu.entries()) console.log(item);
for (const [index, item] of menu.entries()) console.log(index, item);
// Logical Assignment Operators

const rest1 = {
  name: "wasabi",
  numGuests: 0,
};
const rest2 = {
  name: "Hardees",
  owner: "saad",
};
// OR Assignment operator
rest1.numGuests ||= 10; //this will assign 10 while 0 is there
rest2.numGuests ||= 10;
console.log(rest1);
console.log(rest2);

// Nullish coallising Assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);

// Nullish coalising
restaurant.numGuests = 0;
// const guests = restaurant.numGuests ?? 10;

// Short Circuiting (&& and II)

console.log("-----OR-----");
console.log(3 || "Saad");
console.log("" || "Saad");
console.log(0 || "Saad");
console.log(true || "");
console.log(true || 0);
const guests = restaurant.numGuests || 10;
console.log("guests", guests);
console.log("----------AND-------");

console.log(3 && "saad");
console.log(0 && true);
console.log(true && 0);
console.log("hello" && 23 && null && true && 1);

// Rest Pattern and Parameters
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// functions
const add = function (...numbers) {
  console.log(numbers);
};
add(2, 3);
add(2, 3, 6, 7, 9);

// spread opearator
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);
// using spread operator
const newrray = [1, 2, ...arr];
console.log(newrray);
console.log(...newrray);

const newManu = [...restaurant.mainMenu, "Biryani"];
console.log(newManu);

const ingredients = [
  prompt("lets's make pasta! Ingredient 1?"),
  prompt("lets's make pasta! Ingredient 2?"),
  prompt("lets's make pasta! Ingredient 3?"),
];
restaurant.orderPasta(...ingredients);

//spread objects

const newResturant = { ...restaurant, foundedIn: 1998, founder: "Saad" };
console.log(restaurant);
console.log(newResturant);

// destructuring objects

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

// default values
const { manu = [], starterMenu: starters = [] } = restaurant;
console.log(manu, starters);

// mutating variables
// let a = 111;
// let b = 99;
// console.log(a, b);

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

console.log(a, b);

// destructuring nested objects

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

restaurant.orderDelivery({
  time: "22:30",
  address: "xyz",
  mainIndex: 2,
  startIndex: 2,
});

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// if want to switch value

// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// using destructuring

[secondary, main] = [main, secondary];
console.log(main, secondary);

// recieve 2 return values from a function
const [startermanu, mainmanur] = restaurant.order(2, 0);
console.log(startermanu, mainmanur);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;

// nested destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
