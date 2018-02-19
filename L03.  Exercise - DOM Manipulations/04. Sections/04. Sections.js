function create(sentences) {
    let contentDiv = document.getElementById('content');

    contentDiv.setAttribute('id', 'content');
    for (let text of sentences) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.style.display = 'none';
        p.textContent = text;
        div.appendChild(p);
        div.addEventListener('click', toggleText);
        contentDiv.appendChild(div);
    }

    function toggleText() {
        let p = this.children[0];
        p.style.display = '';
    }
}