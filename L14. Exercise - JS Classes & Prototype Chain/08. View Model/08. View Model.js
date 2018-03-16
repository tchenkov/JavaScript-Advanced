class Textbox {
    constructor(selector, invalidSymbolsPattern){
        this.selector = selector;
        this._invalidSymbols = invalidSymbolsPattern;
        this.elements = this.selector;
    }

    get value(){
        return $(this._elements[0]).val();
    }

    set value(value){
        $(this.elements).val(value);
    }

    get elements(){
        return this._elements;
    }

    set elements(selector){
        this._elements = $(selector).on('input', (e) => {
            this._elements.val($(e.target).val())
        });
    }

    //noinspection JSUnusedGlobalSymbols
    isValid(){
        return !this._invalidSymbols.test(this.value);
    }
}

//noinspection SpellCheckingInspection
let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
//noinspection SpellCheckingInspection
let inputs = $('.textbox');

inputs.on('input', function () {
    console.log(textbox.value);
});