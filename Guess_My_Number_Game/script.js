"use strict";
let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const setMessage = (message) =>
  (document.querySelector(".message").textContent = message);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when there is no input
  if (!guess) {
    setMessage("No Number!");

    // check if correct guess
  } else if (guess === secret_number) {
    setMessage("Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    console.log(score, highScore);
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }

    // qhwn guess is wrong
  } else if (guess !== secret_number) {
    if (score > 1) {
      setMessage(guess > secret_number ? "Too High" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      setMessage("you loose the age");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = secret_number;
  setMessage("start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
