function colorize() {
    let elementsArr = document.querySelectorAll('table tr');
    for (let i = 1; i < elementsArr.length; i += 2) {
        elementsArr[i].style.backgroundColor = 'teal'
    }
}