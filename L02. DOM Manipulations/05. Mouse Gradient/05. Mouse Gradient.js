function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', addPositionListener);
    gradient.addEventListener('mouseleave', () => {
        document.getElementById('result').textContent = ''
    });

    function addPositionListener(event) {
        let x = Math.floor(
            (
                event.offsetX
                / (event.target.clientWidth - 1)
            ) * 100);
        document.getElementById('result').textContent = x + '%';
    }
}