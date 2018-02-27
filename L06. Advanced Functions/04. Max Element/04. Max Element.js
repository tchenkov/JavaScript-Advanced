function maxElement(arr) {
    return Math.max.call(undefined, ...arr);
}

// function tests
console.log(maxElement([10, 20, 5]));
console.log();
console.log(maxElement([1, 44, 123, 33]));