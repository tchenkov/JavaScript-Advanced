function validate() {
    const cssDisplay = 'display';
    const cssDisplayBlock = 'block';
    const cssNone = 'none';
    const cssBorderColor = 'border-color';
    const cssRed = 'red';

    let username = $('#username');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let email = $('#email');
    let companyCheckbox = $('#company');
    let companyField = $('#companyInfo');

    let result = $('#valid');

    let submit = $('#submit');

    init();

    // initialisation
    function init() {
        companyCheckbox.on('click', toggleCompanyInfoFields);
        // companyField.css('display', 'none');
        submit.on('click', submitForm);
    }

    // regular fields
    function submitForm(event) {
        event.preventDefault();
        let isUsernameValid = validateUsername();
        // todo
        let isPasswordValid = validatePassword();
        // let isConfirmPasswordValid =
        let isEmailValid = validateEmail();
        //noinspection RedundantConditionalExpressionJS
        let isCompanyNumberValid;
        if (companyCheckbox[0].checked) {
            isCompanyNumberValid = validateCompanyField();
        } else {
            isCompanyNumberValid = true;
        }

        let isFormValid = isUsernameValid && isPasswordValid && isEmailValid && isCompanyNumberValid;
        isFormValid ? result.css(cssDisplay, cssDisplayBlock) : result.css(cssDisplay, cssNone);
    }

    function validateUsername() {
        let pattern = /^[A-Za-z0-9]{3,20}$/g;
        let isValid = pattern.test(username.val());
        isValid ? username.css(cssBorderColor, '') : username.css(cssBorderColor, cssRed);

        return isValid;
    }

    function validatePassword() {
        let isValid = password.val() === confirmPassword.val();

        let pattern = /^\w{5,15}$/g;
        isValid = isValid && pattern.test(password.val());

        if (isValid){
            password.css(cssBorderColor, '');
            confirmPassword.css(cssBorderColor, '');
        } else {
            password.css(cssBorderColor, cssRed);
            confirmPassword.css(cssBorderColor, cssRed);
        }

        return isValid;
    }

    function validateEmail(){
        let pattern = /^[^@]+(@)[^@.]*(\.).*$/;
        let isValid = pattern.test(email.val());
        isValid ? email.css(cssBorderColor, 'none') : email.css(cssBorderColor, cssRed);

        return isValid;
    }

    function toggleCompanyInfoFields(){
        console.log(companyField.css('display'));;
        if (companyField.css('display') === 'none'){
            companyField.css('display', 'block');
        } else {
            companyField.css('display', 'none');
        }
    }

    // company fields
    function validateCompanyField() {
        let companyId = $('#companyNumber');
        let isValid = !isNaN(companyId.val());
        isValid = isValid && 1000 <= Number(companyId.val()) && Number(companyId.val()) <= 9999;
        isValid ? companyId.css(cssBorderColor, '') : companyId.css(cssBorderColor, cssRed);

        return isValid;
    }
}
