//Date.now returns the number in milliseconds (since Jan 1, 1970 00:00:00 UTC)

//DISPLAYS STOPWATCH
function stopWatch(opts) {
  // this takes in an element [e]
  //if you [let x=  10], it will only be localized within this function and cannot be accessed outside of this field.
  //Variables declared in this field are called _private_ variables
  // however, all [this.] functions can use [x]
  //if you console.log(watch.x) after the function Stopwatch, x will is undefiend

  let time = 0;
  let interval;
  let offset;

  let e = opts.e;
  let delay = opts.delay;

  //public functions
  function update() {
    //console.log(this);
    if (this.isOn) {
      time += delta();
    }
    let formattedTime = timeFormatter(time);
    e.textContent = formattedTime;
    //format [e] as formattedTime
  }

  function delta() {
    //calculates how much time has passed
    let now = Date.now();
    let timePassed = now - offset;

    //this will save the time of now the next time it runs
    offset = now;
    return timePassed;
  }
  function timeFormatter(timeInMilliseconds) {
    //crete date object
    //this time var is different from the time var declared from the top
    //note: passing the object to date gives it access to the many Date methods
    let time = new Date(timeInMilliseconds);
    //meaning, if you declare [time = 5;] here, it will look for the var [time] within its scope.
    //but if you did not declare time, [let time = new Date(timeInMilliseconds);], it will override the [time] var from the higher scope

    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    let milliseconds = time.getMilliseconds().toString();

    //if milliseconds are 1234
    //minutes: 0
    //seconds: 1
    //milliseconds: 234
    //00 : 1 : 234

    if (minutes.length < 2) {
      minutes = "0" + minutes;
    }
    if (seconds.length < 2) {
      seconds = "0" + seconds;
    }
    while (milliseconds.length < 3) {
      milliseconds = "0" + milliseconds;
    }

    //return the format
    return minutes + " : " + seconds + " . " + milliseconds;
  }

  //stopwatch starts at off
  this.isOn = false;

  //public functions
  this.start = function() {
    //we want this function to run _only_ when the stopwatch is _not_ on
    if (!this.isOn) {
      //sets the interval when update function is in use
      interval = setInterval(update.bind(this), delay);

      //this is the time when the stopwatch starts
      offset = Date.now();
      this.isOn = true;
    }
  };
  this.stop = function() {
    //this function _only runs_ when the stopwatch is _on_
    if (this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };
  this.reset = function() {
    if (!this.isOn) {
      time = 0;
      update();
    }
  };
}
