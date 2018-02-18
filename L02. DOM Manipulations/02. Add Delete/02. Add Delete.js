function addItem() {
    let item = document.getElementById('newText');
    if (item.value !== '') {
        let itemValue = item.value;
        item.value = '';
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.textContent = '[Delete]';
        link.addEventListener('click', () => li.parentNode.removeChild(li));
        li.innerHTML = itemValue + " ";
        li.appendChild(link);
        document.getElementById('items').appendChild(li);
    }
}