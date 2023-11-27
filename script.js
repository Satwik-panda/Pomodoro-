const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const statusDisplay = document.getElementById('status');

let timer;
let cnt=0
let minutes = 25;
let seconds = 0;
let isRunning = false;

function startTimer() {
    console.log(isRunning)
    if (!isRunning) {
        timer = setInterval(updateTimer, 1000);
        startButton.textContent = 'Pause';
        isRunning = true;
    } 
    else {
        isRunning = false;
        clearInterval(timer);
        startButton.textContent = 'Resume';
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updateTimerDisplay();
    startButton.textContent = 'Start';
    statusDisplay.textContent = 'Work';
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        if(cnt==3 && statusDisplay.textContent === 'Work') {
            minutes = 15; // Long break
            statusDisplay.textContent = 'Long Break';
            cnt=0;
        } 
        else if (statusDisplay.textContent === 'Work') {
            minutes = 5; // Short break
            statusDisplay.textContent = 'Short Break';
            cnt++;
        } else if (statusDisplay.textContent === 'Short Break' || statusDisplay.textContent === 'Long Break' ) {
            minutes = 25; // Work
            statusDisplay.textContent = 'Work';
        }
    }

    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    updateTimerDisplay();
}

function updateTimerDisplay() {
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    console.log(minutes,":",seconds)
    timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}


resetTimer(); // Initialize the timer display

