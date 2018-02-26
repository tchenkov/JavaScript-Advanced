function increment(selector) {
    let target = $(selector);
    target.append(
        $('<textarea>').addClass('counter').attr('value', '0').prop('disabled', true).text(0)
    ).append(
        $('<button>').addClass('btn').prop('id', 'incrementBtn').text('Increment')
    ).append(
        $('<button>').addClass('btn').prop('id', 'addBtn').text('Add')
    ).append(
        $('<ul>').addClass('results')
    );

    $('#incrementBtn').on('click', incrementAction);
    $('#addBtn').on('click', addResultToUl);

    function incrementAction() {
        let textarea = $('textarea.counter');
        let value = Number(textarea.val());
        value++;
        textarea.val(value).text(value);
    }

    function addResultToUl() {
        let textarea = $('textarea.counter');
        $('ul.results').append(
            $('<li>').text(textarea.val())
        );
    }
}