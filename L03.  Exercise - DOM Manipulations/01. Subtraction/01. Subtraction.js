function subtract() {
    let num1 = Number(document.getElementById('firstNumber').value);
    let num2 = Number(document.getElementById('secondNumber').value);
    //noinspection UnnecessaryLocalVariableJS
    let result = num1 - num2;

    document.getElementById('result').textContent = result.toString();
}