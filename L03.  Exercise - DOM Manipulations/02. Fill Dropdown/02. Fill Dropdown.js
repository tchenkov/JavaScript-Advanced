function addItem() {
    let item = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;

    if (item !== '' && value !== ''){
        let select = document.getElementById('menu');
        document.getElementById('newItemText').value = '';
        document.getElementById('newItemValue').value = '';

        select.innerHTML += `<option value='${value}'>${item}</option>`;
    }
}