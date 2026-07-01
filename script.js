let seconds = 0;
let timer = null;

function updateDisplay() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    document.getElementById("display").innerText =
        String(hrs).padStart(2, '0') + ":" +
        String(mins).padStart(2, '0') + ":" +
        String(secs).padStart(2, '0');
}

function start() {
    if (timer === null) {
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    stop();
    seconds = 0;
    updateDisplay();
}