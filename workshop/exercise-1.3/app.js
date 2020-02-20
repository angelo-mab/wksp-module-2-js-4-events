// Exercise 2.3
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH! (This is the last time.)
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click the screen.

// It would be a good idea to create a new function that will manage the whole game.
const result = document.querySelector(".result");
const timeCount = document.getElementById("timer");

let hasClicked = false;
let timeRemaining = getRandomInt(1, 5);

timeCount.innerText = `${timeRemaining}`;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) * min);
}

setTimeout(function() {
  if (!hasClicked) result.innerText = "You lost 😔";
  document.removeEventListener("click", hasClicked);
});

function hasClicked() {
  hasClicked = true;
  result.innerText = "You win! 🎉";
  document.removeEventListener("click", hasClicked);
}

document.addEventListener("click", hasClicked);
