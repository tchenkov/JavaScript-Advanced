function initializeTable() {
    let initArr = [
        ['Bulgaria', 'Sofia'],
        ['Germany', 'Berlin'],
        ['Russia', 'Moscow']
    ];

    $('#createLink').on('click', create);

    let table = $('#countriesTable');
    initArr.forEach(e => addEntry(e));

    function addEntry([country, capitalCity]) {
        let tr = $('<tr>');
        $(tr).addClass(country);
        tr.append(`<td>${country}</td>`);
        tr.append(`<td>${capitalCity}</td>`);

        let tdLinks = $('<td>');
        let upLink = $('<a href="#" class="up">[Up]</a>');
        $(upLink).on('click', up);
        tdLinks.append(upLink);
        let downLink = $('<a href="#" class="down">[Down]</a>');
        $(downLink).on('click', down);
        tdLinks.append(downLink);
        let deleteLink = $('<a href="#" class="delete">[Delete]</a>');
        $(deleteLink).on('click', deleteEntry);
        tdLinks.append(deleteLink);

        tr.append(tdLinks);
        table.append(tr);
    }

    fixLinks();

    function create() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        $(table).find('tr:last').find('td:last').find('.down').css('display', '');
        addEntry([country, capital]);
        fixLinks();
    }

    function up() {
        let current = $(this).parent().parent();
        $(current).find('td:last').find('.down').css('display', '');
        let prev = $(current).prev();
        $(prev).find('td:last').find('.up').css('display', '');
        $(prev).before(current);
        fixLinks();
    }

    function down() {
        let current = $(this).parent().parent();
        $(current).find('td:last').find('.up').css('display', '');
        let next = $(current).next();
        $(next).find('td:last').find('.down').css('display', '');
        $(next).after(current);
        fixLinks();
    }

    function deleteEntry() {
        let current = $(this).parent().parent();
        current.remove();
        fixLinks();
    }

    function fixLinks() {
        $(table).find('tr:eq(2)').find('td:last').find('.up').css('display', 'none');
        $(table).find('tr:last').find('td:last').find('.down').css('display', 'none');
    }
}