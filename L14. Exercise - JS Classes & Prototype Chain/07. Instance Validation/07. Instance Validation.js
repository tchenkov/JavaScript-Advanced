class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.setClientId = clientId;
        this.setEmail = email;
        this.setFirstName = firstName;
        this.setLastName = lastName;
        this.products = [];
    }

    set setClientId(clientId){
        let pattern = /^\d{6}$/;
        if (!pattern.test(clientId)){
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this.clientId = clientId;
    }

    set setEmail(email){
        let pattern = /^[A-za-z][^@]*?@[A-Za-z.]+$/;
        if (!pattern.test(email)){
            throw new TypeError('Invalid e-mail');
        }
        this.email = email;
    }

    set setFirstName(firstName){
        const first = 'First';
        if (!this.validateNameLength(firstName)){
            throw new TypeError(first + this.nameLengthErrorMsg);
        }
        if (!this.validateName(firstName)){
            throw new TypeError(first + this.nameFormatErrorMsg);
        }
        this.firstName = firstName;
    }

    set setLastName(lastName){
        const last = 'Last';
        if (!this.validateNameLength(lastName)){
            throw new TypeError(last + this.nameLengthErrorMsg);
        }
        if (!this.validateName(lastName)){
            throw new TypeError(last + this.nameFormatErrorMsg);
        }
        this.lastName = lastName;
    }

    get nameLengthErrorMsg(){
        return ' name must be between 3 and 20 characters long';
    }

    get nameFormatErrorMsg() {
        return ' name must contain only Latin characters';
    }

    validateNameLength(name){
        return 3 <= name.length && name.length <= 20;
    }

    validateName(name){
        let pattern = /^[A-za-z]+$/;
        return pattern.test(name);
    }
}
