function attachEvents() {
    const dataSelectedAttribute = 'data-selected';
    $('li').attr(dataSelectedAttribute, false).on('click', toggleSelected);
    $('#showTownsButton').on('click', showSelectedTowns);

    function toggleSelected() {
        let li = $(this);
        let isSelected = li.attr(dataSelectedAttribute) === 'true';

        if (isSelected){
            li.attr(dataSelectedAttribute, false).css('background-color', '');
        } else {
            li.attr(dataSelectedAttribute, true).css('background-color', '#DDD');
        }
    }

    function showSelectedTowns() {
        let towns = $('li[data-selected=true]').toArray().map(e => e.textContent).join(', ');
        $('#selectedTowns').text(`Selected towns: ${towns}`);
    }
}