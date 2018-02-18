function stopwatch() {
    const ONE_SECOND = 1000;

    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');
    let time = document.getElementById('time');

    let minutes = 0;
    let seconds = 0;
    let interval;
    startButton.addEventListener('click', startResetTimer);

    function startResetTimer() {
        resetTimer();
        startButton.disabled = true;
        startButton.removeEventListener('click', startResetTimer);
        stopButton.disabled = false;
        stopButton.addEventListener('click', stopTimer);

        interval = setInterval(
            () => {
                if (seconds < 59) {
                    seconds++;
                } else {
                    minutes++;
                    seconds = 0;
                }
                setTime(minutes, seconds)
            },
            ONE_SECOND
        );
    }

    function stopTimer() {
        clearInterval(interval);

        startButton.disabled = false;
        startButton.addEventListener('click', startResetTimer);
        stopButton.disabled = true;
        stopButton.removeEventListener('click', stopTimer);
    }

    function resetTimer() {
        minutes = 0;
        seconds = 0;
        setTime(minutes, seconds);
    }

    function setTime(min, sec) {
        time.textContent = `${formatTime(min)}:${formatTime(sec)}`
    }

    function formatTime(value) {
        return value < 10 ? '0' + value : value.toString();
    }
}