function search() {
    $('ul#towns li').css('font-weight', 'normal');
    let target = $('input#searchText');
    let matches = $(`ul#towns li:contains(${target.val()})`);
    matches.css('font-weight', 'bold');
    let matchesCount = matches.length;
    target.val('');
    $('div#result').text(matchesCount);
}