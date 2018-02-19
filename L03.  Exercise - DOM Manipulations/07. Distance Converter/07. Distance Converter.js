function attachEventsListeners() {
    let convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', convertUnits);

    function convertUnits() {
        let inputSelect = document.getElementById('inputUnits');
        let inputUnits = inputSelect.children[inputSelect.selectedIndex].value;
        let inputValue = Number(document.getElementById('inputDistance').value);

        const km = 1000;
        const cm = 0.01;
        const mm = 0.001;
        const mi = 1609.34;
        const yrd = 0.9144;
        const ft = 0.3048;
        const inch = 0.0254;

        switch (inputUnits) {
            case 'km':
                inputValue *= km;
                break;
            case 'cm':
                inputValue *= cm;
                break;
            case 'mm':
                inputValue *= mm;
                break;
            case 'mi':
                inputValue *= mi;
                break;
            case 'yrd':
                inputValue *= yrd;
                break;
            case 'ft':
                inputValue *= ft;
                break;
            case 'in':
                inputValue *= inch;
                break;
        }

        let outputSelect = document.getElementById('outputUnits');
        let outputUnits = outputSelect.children[outputSelect.selectedIndex].value;
        let output = document.getElementById('outputDistance');
        let outputValue;

        switch (outputUnits) {
            case 'km':
                outputValue = inputValue / km;
                break;
            case 'cm':
                outputValue = inputValue / cm;
                break;
            case 'mm':
                outputValue = inputValue / mm;
                break;
            case 'mi':
                outputValue = inputValue / mi;
                break;
            case 'yrd':
                outputValue = inputValue / yrd;
                break;
            case 'ft':
                outputValue = inputValue / ft;
                break;
            case 'in':
                outputValue = inputValue / inch;
                break;
            default:
                outputValue = inputValue;
        }

        output.value = outputValue;
    }
}