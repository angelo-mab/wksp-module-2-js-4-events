
//DISPLAYS CURRENT TIME

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  //adds 0 infront of number < 10
  m = checkTime(m);
  s = checkTime(s);

  currentTime.innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime();
  }, 500);

 //adds a 0
 function checkTime(i) {
  if (i < 10) {
   i = "0" + i;
  }
  return i;
 }
}