function sortArray(arr, sortMethod) {
    let sorter = {
        asc: ascending,
        desc: descending
    };

    return arr.sort(sorter[sortMethod]);

    function ascending(a, b) {
        return a-b;
    }

    function descending(a, b) {
        return b-a;
    }
}

// function tests
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log();
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));