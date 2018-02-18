function extract(elementId) {
    let text = document.getElementById(elementId).textContent;
    let pattern = /\((.+?)\)/g;
    let match;
    let result = [];
    while (match = pattern.exec(text)){
        result.push(match[1]);
    }

    console.log(result.join('; '));
    return result.join('; ');
}