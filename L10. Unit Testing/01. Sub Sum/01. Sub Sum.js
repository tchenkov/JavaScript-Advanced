function subSum(array, start, end) {
    if (!Array.isArray(array)){
        return NaN;
    }

    start = Math.max(start, 0);
    end = Math.min(array.length - 1, end);

    return array.slice(start, end + 1).map(n => Number(n)).reduce((a, b) => a + b, 0);
}

// function tests

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum('text', 0, 2));