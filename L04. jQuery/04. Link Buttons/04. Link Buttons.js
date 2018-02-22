function attachEvents() {
    $('a.button').on('click', addClassSelected);

    function addClassSelected() {
        $('a.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}