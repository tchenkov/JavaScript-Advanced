function focus() {
    let inputFields = document.querySelectorAll('body div div input');

    for (let field of inputFields) {
        field.addEventListener('focus', fieldFocused);
        field.addEventListener('blur', fieldBlurred);
    }

    function fieldFocused() {
        this.parentNode.className .add('focused');
    }

    function fieldBlurred() {
        this.parentNode.classList.remove('focused');
    }
}