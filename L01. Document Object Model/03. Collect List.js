function extractText() {
    let itemsArray = document.querySelectorAll('#items li');
    let result = [];
    for (let element of itemsArray) {
        result.push(element.textContent);
    }
    document.getElementById('result').textContent = result.join('\n');
}