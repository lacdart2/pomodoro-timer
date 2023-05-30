
/*****************************************************  Break */



/* const breakElement = document.getElementById("break"); */
const breakTimerElement = document.querySelector(".break-timer");
const startBreakElement = document.querySelector(".start-break");
const stopBreakElement = document.querySelector(".stop-break");
const resetBreakElement = document.querySelector(".reset-break");


let breakInterval;
let breakTimeLeft = 5;

function updateBreakTimer() {
    let minutes = Math.floor(breakTimeLeft / 60);
    let seconds = breakTimeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    breakTimerElement.innerHTML = formattedTime;
}


function startBreakTimer() {
    breakInterval = setInterval(() => {
        breakTimeLeft--;
        updateBreakTimer();

        if (breakTimeLeft === 0) {
            playBuzzSound();
            document.body.style.backgroundImage = "url('images/alarm-bg.jpg')";
            clearInterval(breakInterval);
            titleElement.innerText = "Break Time's Up!";
            titleElement.style.fontSize = "50px";
            startElement.style.visibility = "hidden";
            stopElement.style.visibility = "hidden";
            resetElement.style.visibility = "hidden";
            stopBuzzButton.style.visibility = "visible";
            /*    breakElement.style.visibility = "hidden"; */
            startBreakElement.style.visibility = "visible";
            stopBreakElement.style.visibility = "visible";
            resetBreakElement.style.visibility = "visible";
            timerElement.innerHTML = timeLeft
            /*  breakTimeLeft = 300; */
            timeLeft = 1500;
            updateBreakTimer();
        }
    }, 1000);
}

function stopBreakTimer() {
    clearInterval(breakInterval);
    buzzSound.stop();
}

function resetBreakTimer() {
    clearInterval(breakInterval);
    breakTimeLeft = 300;
    updateBreakTimer();
    buzzSound.stop();
}

startBreakElement.addEventListener("click", startBreakTimer);
stopBreakElement.addEventListener("click", stopBreakTimer);
resetBreakElement.addEventListener("click", resetBreakTimer);
