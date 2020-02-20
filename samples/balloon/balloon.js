const balloon = document.getElementById("balloon");
//all CAPS helps for global variable
let balloonSize = 20;
balloon.style.fontSize = balloonSize + "px"; // `${balloonSize}px`
const MIN_SIZE = 10;
const MAX_SIZE = 200;
const INCREMENT = 4;
const MAX_EXPLOSION_SIZE = 2000;
function handleKeydown(event) {
  //  if arrow up
  if (event.key === "ArrowUp") {
    //  balloon gets bigger

    //  if balloon getes bigger than X
    balloonSize += INCREMENT;
    balloon.style.fontSize = balloonSize + "px";

    if (balloonSize > MAX_SIZE) {
      //  remove event listener
      document.removeEventListener("keydown", handleKeydown);
      //  remove baloon / add in explosion
      balloon.innerText = "💥";
      //  explosion grows incrementally
      const explosion = setInterval(function() {
        balloonSize += 20;
        balloon.style.fontSize = balloon.Size + "px";
        //  if explosion size is Y
        if(balloonSize > MAX_EXPLOSION_SIZE){
         //  clear the interval & stop growing
         clearInterval(explosion);
         balloon.style.opacity = 0;
         //  fade out (opacity 0 until end of transition)
        }
      }, 5);
    }
  }
  //  if "arrow down"
  else if (event.key === "ArrowDown") {
    //  if balloon is z bigger than Z
    if (balloonSize >= MIN_SIZE) {
      //  balloon smaller
      //  change variable
      balloonSize -= INCREMENT;

      balloon.style.fontSize = balloonSize + "px";
    }
  }
}

//  event listener that takes in a keydown event - note: build event listeners at the end of the code
document.addEventListener("keydown", handleKeydown);
