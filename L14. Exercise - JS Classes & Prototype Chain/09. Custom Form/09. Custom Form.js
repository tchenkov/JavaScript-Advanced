//noinspection SpellCheckingInspection
let result = (function () {

    class Textbox {
        constructor(selector, invalidSymbolsPattern) {
            this.selector = selector;
            this._invalidSymbols = invalidSymbolsPattern;
            this.elements = this.selector;
        }

        get value() {
            return $(this._elements[0]).val();
        }

        set value(value) {
            $(this.elements).val(value);
        }

        get elements() {
            return this._elements;
        }

        set elements(selector) {
            this._elements = $(selector).on('input', (e) => {
                this._elements.val($(e.target).val())
            });
        }

        //noinspection JSUnusedGlobalSymbols
        isValid() {
            return !this._invalidSymbols.test(this.value);
        }
    }

    class Form {
        constructor() {
            this.textboxes = arguments;
            this.element = ['div', 'form'];
        }

        //noinspection SpellCheckingInspection
        set textboxes(textboxes){
            for (let textBox of textboxes) {
                if (textBox.constructor.name !== Textbox.name){
                    //noinspection SpellCheckingInspection
                    throw new Error('not a Textbox');
                }
            }

            this._textboxes = textboxes;
        }

        //noinspection SpellCheckingInspection,JSUnusedGlobalSymbols
        get textboxes(){
            return this._textboxes;
        }

        set element([tag, tagClass]){
            this._element = $(`<${tag}>`).addClass(tagClass);
            //noinspection SpellCheckingInspection
            for (let textbox of this.textboxes) {
                $(this._element).append(textbox.elements);
            }
        }

        get element(){
            return this._element;
        }

        attach(selector){
            $(selector).append(this.element);
        }

        submit(){
            let areAllTextBoxesValid = true;
            for (let textBox of this.textboxes) {
                if (textBox.isValid()){
                    $(textBox.elements).css('border', '2px solid green');
                } else {
                    $(textBox.elements).css('border', '2px solid red');
                    areAllTextBoxesValid = false;
                }
            }

            return areAllTextBoxesValid;
        }
    }


    //noinspection SpellCheckingInspection
    return {
        Textbox: Textbox,
        Form: Form
    }
}());

//noinspection SpellCheckingInspection
let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username", /[^a-zA-Z0-9]/);
let password = new Textbox("#password", /[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username, password);
form.attach("#root");
form.submit();
