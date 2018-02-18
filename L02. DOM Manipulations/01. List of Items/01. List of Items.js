function addItem() {
    let item = document.getElementById('newItemText');
    if (item.value !== ''){
        let itemValue = item.value;
        item.value = '';
        let li = document.createElement('li');
        li.textContent = itemValue;
        document.getElementById('items').appendChild(li);
    }
}