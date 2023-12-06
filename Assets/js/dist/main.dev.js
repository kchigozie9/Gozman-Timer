"use strict";

// TIMER
var timer = setInterval(TimerHandler, 1000);
var sec = 0;
var min = 0;
var hour = 0;

function TimerHandler() {
  sec++;

  if (sec == 60) {
    sec = 0;
    min++;
  }

  if (min == 60) {
    min == 0;
    hour++;
  }

  console.log(hour + ":" + min + ":" + sec);
}