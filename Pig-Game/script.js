"use strict";
// selecting element
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// rolling dice funcationality
btnRoll.addEventListener("click", function () {
  // genrating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //   diplay the dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  //   check for roll == 1 if true switch to next player
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // add dice to the current score
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
