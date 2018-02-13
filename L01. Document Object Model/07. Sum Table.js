function sum() {
    let elementsArr = document.getElementsByTagName('td');
    let sum = 0;
    for (let i = 1; i < elementsArr.length-1; i+=2) {
        sum+= Number(elementsArr[i].textContent);
    }

    document.getElementById('sum').textContent = sum.toString();
}