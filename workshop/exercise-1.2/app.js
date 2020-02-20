// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click anywhere on the screen.
//
// But this time, let's let the user know how much time they have to actually 'click'.
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// In short,
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click
// - tell the user how much time they have to click.

// Challenge
// Make the countdown live...
const result = document.querySelector(".result");
const timeCount = document.getElementById("time");
let hasClicked = false;
let timeRemaining = getRandomInt(1, 5);

timeCount.innerText = `${timeRemaining}`;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) * min);
}

setTimeout(function() {
  if (!hasClicked) {
    result.innerText = "You lost 😔";
    document.removeEventListener("click", clickMe);
  }
}, timeRemaining * 1000);

function clickMe() {
  hasClicked = true;
  result.innerText = "You Win 🎉";
  document.removeEventListener("click", hasClicked);
}

document.addEventListener("click", clickMe);
