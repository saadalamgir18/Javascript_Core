"use strict";
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
dogs.forEach((dog) => {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);
dogs.forEach(
  (dog) =>
    dog.owners.includes("Sarah") &&
    console.log(
      `sarah dog is eating too ${dog.curFood > dog.recFood ? "much" : "little"}`
    )
);

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch, ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);
console.log(dogs.some((dog) => dog.recFood === dog.curFood));
const checkEatingOkey = (dog) => (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log("6: ", dogs.some(checkEatingOkey));
console.log("7: ", dogs.filter(checkEatingOkey));

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
