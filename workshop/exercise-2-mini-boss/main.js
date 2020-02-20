//constructor operator creates a new object
//FOR TIME FUNCTION
const currentTime = document.querySelector(".time");
const time = new startTime();

//FOR STOPWATCH FUNCTION
const stopWatch = document.querySelector(".stopwatch");
const toggleBtn = document.querySelector(".toggle");
const resetBtn = document.querySelector(".reset");

const watch = new stopWatch({
  //this give customizability when delaying stopwatch
  e: stopWatch,
  delay: 100
});

function start() {
  watch.start();
  toggleBtn.innerText = "Stop";
}

function stop() {
  watch.stop();
  toggleBtn.innerText = "Start";
}
toggleBtn.addEventListener("click", function() {
  //conditional ternary operator
  //is watch.isOs (true)[?] if it is, [stop()] it, if not [:] [start()] it.
  watch.isOn ? stop() : start();
});

resetBtn.addEventListener("click", function() {
  watch.reset();
});


//FOR TIMER FUNCTION
const message = document.querySelector('.timer');
const timer = new timer();