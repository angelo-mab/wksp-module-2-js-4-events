// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a flag to store whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

const result = document.querySelector(".result");
let hasClicked = false;

function clickMe() {
  hasClicked = true;
  result.innerText = "You Win 🎉";

  document.removeEventListener("click", clickMe);
}

setTimeout(function() {
  if (!hasClicked) {
    result.innerText = "You lost 😔";

    document.removeEventListener("click", clickMe);
  }
}, 1000);

document.addEventListener("click", clickMe);
