function add(a = 0) {
    let sum = a;

    function addToSum(num) {
        sum += num;
        return addToSum;
    }

    addToSum.toString = () => sum;
    return addToSum;
}

// function tests
console.log(add(12).toString());
console.log();
console.log(+add(1)(6)(-3));