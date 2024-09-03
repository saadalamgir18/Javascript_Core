const juliaData = [3, 5, 2, 12, 7];
const kateData = [3, 5, 2, 12, 7];
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = [...dogsJulia];
  dogsJuliaCopy.splice(0);
  dogsJuliaCopy.splice(-1);
  const dogsAll = dogsJuliaCopy.concat(dogsKate);
  dogsAll.forEach(function (dog, i) {
    console.log(
      `Dog number 1 is an ${dog >= 3 ? "adult" : "puppy"}, and is 5 years old`
    );
  });
};

checkDogs(juliaData);
