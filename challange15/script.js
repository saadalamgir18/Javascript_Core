"use strict";
const calcAverageHumanAge = function (dogsAges) {
  const avgHumanAge = dogsAges
    .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter((age) => age >= 18)
    .reduce((acc, adultAge, i, arr) => acc + adultAge / arr.length, 0);
  return avgHumanAge;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
