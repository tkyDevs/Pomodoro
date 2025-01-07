// VARIABLES
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');
let timer = document.querySelector('.timer');
const alarm = new Audio('alarm.wav');

let minutes = 25;
let seconds = 0;
let power = false;

btnStart.onclick = startTimer;
btnReset.onclick = resetTimer;
btnStop.onclick = stopTimer;


// FUNCTIONS
function getTimeString(min, sec) {
    return String(min).concat(':', String(sec).padStart(2,'0'));
}

function startTimer() {
    power = true;
}

function stopTimer() {
    power = false;
}

function resetTimer() {
    minutes = 25;
    seconds = 0;
    timer.textContent = getTimeString(minutes, seconds);
    power = false;
}

function timerFunc() {
    if (power === true) {
        if (minutes === 0 && seconds === 0) {
            alarm.play();
        }
    
        if (seconds > 0) {
            seconds -= 1;
        } else {
            minutes -= 1;
            seconds = 59;
        }
    
        timer.textContent = getTimeString(minutes, seconds);
    }
}


// TICK THE CLOCK
setInterval(timerFunc, 1000);
