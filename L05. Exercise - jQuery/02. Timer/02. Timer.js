function timer() {
    $('#start-timer').on('click', startContinueTimer);
    $('#stop-timer').on('click', pauseTimer);

    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');

    let time = 0;

    let timerInterval;
    let isTimerRunning = false;

    function startContinueTimer() {
        if (isTimerRunning){
            return;
        }
        timerInterval = setInterval(
            () => {
                time++;
                seconds.text(timeFormat(time % 60));
                minutes.text(timeFormat(
                    Math.floor((time / 60) % 60))
                );
                hours.text(timeFormat(
                    Math.floor((time / (60 * 60)) % 60))
                );
            },
            1000
        );
        isTimerRunning = true;
    }

    function pauseTimer() {
        clearInterval(timerInterval);
        isTimerRunning = false;
    }

    function timeFormat(value) {
        return value < 10 ? '0' + value : value.toString();
    }
}