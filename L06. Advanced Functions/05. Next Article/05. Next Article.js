function getArticleGenerator(articlesArr) {
    return function () {
        if (articlesArr.length > 0){
            $('#content').append($('<article>').text(articlesArr.shift()));
        }
    }
}