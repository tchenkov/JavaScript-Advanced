function extractText() {
    let result = $('ul#items li')
        .toArray()
        .map(e => e.textContent)
        .join(', ');
    $('div#result').text(result);
}