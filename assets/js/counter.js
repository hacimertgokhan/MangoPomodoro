console.info("[MangooO] counter.js loaded...");

let showcase = document.getElementById('showcase');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let minute = 0;
let seconds = 0;
let TimerShowCase;
let isCounterEnable = false;
start.addEventListener("click", () => {
    isCounterEnable = true;
})

stop.addEventListener("click", () => {
    isCounterEnable = false;
})

reset.addEventListener("click", () => {
    isCounterEnable = false;
    minute = 0;
    seconds = 0;
    TimerShowCase = "0"+minute + ":" + "0"+seconds;
    showcase.innerText = TimerShowCase;
})

setInterval(() => {
    if(isCounterEnable) {
        seconds++;
        if(seconds >= 60) {
            seconds = 0;
            minute++;
        }
        if(seconds >= 10) {
            if(minute >= 10) {
                TimerShowCase = minute + ":" + seconds;
            } else {
                TimerShowCase = "0"+minute + ":" +seconds;
            }
        } else {
            TimerShowCase =minute + ":" +"0"+seconds;
            if(minute >= 10) {
                TimerShowCase =minute + ":" +"0"+seconds;
            } else {
                TimerShowCase ="0"+minute + ":" +"0"+seconds;
            }
        }
        showcase.innerText = TimerShowCase;

    }
}, 1000)