function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let extraTextDiv = button.parentNode.parentNode.childNodes[3];

    if (button.textContent === 'More') {
        button.textContent = 'Less';
        extraTextDiv.style.display = 'block';
    } else if (button.textContent === 'Less') {
        button.textContent = 'More';
        extraTextDiv.style.display = 'none';
    }
}