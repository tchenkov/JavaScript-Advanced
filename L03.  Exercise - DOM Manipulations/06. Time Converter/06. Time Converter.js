function attachEventsListeners() {
    let buttons = document.querySelectorAll('div input[type="button"]');

    for (let button of buttons) {
        button.addEventListener('click', convertUnits)
    }

    function convertUnits() {
        let time = Number(this.parentNode.children[1].value);
        time = isNaN(time) ? 0 : time;
        let unit = this.parentNode.children[1].id;

        // time to seconds
        //noinspection FallThroughInSwitchStatementJS
        switch (unit){
            case 'days':
                time *= 24;
            case 'hours':
                time *= 60;
            case 'minutes':
                time *= 60;
        }

        document.getElementById('seconds').value = time;
        time /= 60;
        document.getElementById('minutes').value = time;
        time /= 60;
        document.getElementById('hours').value = time;
        time /= 24;
        document.getElementById('days').value = time;
    }
}