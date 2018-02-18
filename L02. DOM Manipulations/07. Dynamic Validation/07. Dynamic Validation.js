function validate() {
    let emailInputField = document.getElementById('email');

    emailInputField.addEventListener('change', validateEmail);

    function validateEmail() {
        let emial = this.value;
        let validEmailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        validEmailPattern.test(emial) ?
            this.className = '' :
            this.className = 'error';
    }
}