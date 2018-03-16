function domSearch(selector, isSearchCaseSensitive = false) {
    let content = $('#content');

    content.append(
        $('<div>').addClass('add-controls')
            .append(
                $('<label for="add">').text('Enter text:')
            )
            .append(
                $('<input id="add">')
            )
            .append(
                $('<anchor id="addButton">').addClass('button').text('Add')
                    .on('click' , addNewItem)
            )
    ).append(
        $('<div>').addClass('search-controls')
            .append(
                $('<label for="search">').text('Search:')
            )
            .append(
                $('<input id="search">')
                    .on('input', filterItems)
            )
    ).append(
        $('<div>').addClass('result-controls')
            .append(
                $('<ul>').addClass('items-list')
            )
    );

    function addNewItem() {
        // add new item to li
        let text = $('#add').val();
        let li = $('<li>').addClass('list-item').text(text);
    }

    function filterItems() {
        // filter items in li by input from search field
    }
}