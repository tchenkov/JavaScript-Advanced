function countdown(timeInSeconds) {
    timeInSeconds = Number(timeInSeconds);
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    let timer = document.getElementById('time');
    //noinspection JSUnusedLocalSymbols
    let interval = setInterval(
        () => {
            if (seconds > 0){
                seconds--;
            } else {
                minutes--;
                seconds = 59;
            }
            timer.value = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        },
        1000
    );
}