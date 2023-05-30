const timerElement = document.getElementById("timer")
const titleElement = document.getElementById("title")
const startElement = document.getElementById("start")
const stopElement = document.getElementById("stop")
const resetElement = document.getElementById("reset")





let interval;
let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerElement.innerHTML = formattedTime
}


function playBuzzSound() {
    const buzzSound = document.getElementById('buzzSound');
    buzzSound.currentTime = 0; // Reset the audio to the beginning
    buzzSound.play();
}


const stopBuzzButton = document.getElementById('stopButton');
const buzzSound = document.getElementById('buzzSound');

stopBuzzButton.addEventListener('click', () => {
    buzzSound.pause();
    buzzSound.currentTime = 0; // Reset the audio to the beginning
    stopBuzzButton.style.visibility = "hidden";
    startElement.style.visibility = "visible"
    stopElement.style.visibility = "visible"
    resetElement.style.visibility = "visible"
    titleElement.innerText = "Pomodoro Timer"

    titleElement.style.fontSize = "36px";
});

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer()
        if (timeLeft === 2000) {
            document.body.style.backgroundImage = "url('images/bg-2000.jpg')";
        }
        else if (timeLeft === 1300) {
            document.body.style.backgroundImage = "url('images/bg-1300.jpg')";
        }
        else if (timeLeft === 1000) {
            document.body.style.backgroundImage = "url('images/bg-1000.jpg')";
        }
        else if (timeLeft === 800) {
            document.body.style.backgroundImage = "url('images/bg-800.jpg')";
        }
        else if (timeLeft === 500) {
            document.body.style.backgroundImage = "url('images/bg-500.jpg')";
        }
        else if (timeLeft === 300) {
            document.body.style.backgroundImage = "url('images/bg-300.jpg')";
        }
        else if (timeLeft === 0) {
            playBuzzSound();
            document.body.style.backgroundImage = "url('images/alarm-bg.jpg')";
            clearInterval(interval)
            titleElement.innerText = "Break Time!"
            titleElement.style.fontSize = "50px";
            startElement.style.visibility = "hidden"
            stopElement.style.visibility = "hidden"
            resetElement.style.visibility = "hidden"
            stopBuzzButton.style.visibility = "visible"
            timeLeft = 1500;

            updateTimer()
        }


    }, 1000);
}
function stopTimer() {
    clearInterval(interval)
    buzzSound.stop();


}
function resetTimer() {
    clearInterval(interval)
    timeLeft = 1500;
    updateTimer()
    buzzSound.stop();
}



startElement.addEventListener("click", startTimer)
stopElement.addEventListener("click", stopTimer)
resetElement.addEventListener("click", resetTimer)

