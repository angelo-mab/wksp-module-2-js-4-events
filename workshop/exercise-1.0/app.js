// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, let them know that they did it!

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

const click = document.querySelector('.click');

function handleClick(e){
 click.innerText = 'You Win';
 document.removeEventListener('click', handleClick);
}
document.addEventListener('click',handleClick);