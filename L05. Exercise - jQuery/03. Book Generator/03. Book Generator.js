function createBook(selector, title, author, isbn) {
    let target = $(selector);
    let div = $('<div>').attr('id', `book${target.children().length + 1}`).css('border', 'medium none');

    let pTitle = createP('title', title);
    let pAuthor = createP('author', author);
    let pIsbn = createP('isbn', isbn);

    let selectButton = createButton('Select', selectAction);
    let deselectButton = createButton('Deselect', deselectAction);

    div.append(pTitle).append(pAuthor).append(pIsbn).append(selectButton).append(deselectButton);
    target.append(div);

    function createP(tagClass, text) {
        return $('<p>').addClass(tagClass).text(text);
    }
    function createButton(text, onClickAction) {
        return $('<button>').text(text).on('click', onClickAction);
    }

    function selectAction() {
        let div = $(this).parent();
        div.css('border', '2px solid blue');
    }

    function deselectAction() {
        let div = $(this).parent();
        div.css('border', 'none');
    }
}