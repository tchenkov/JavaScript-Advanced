function getFibonacci() {
    let prev = 0,
        current = 1;
    return function () {
        let result = current;
        current += prev;
        prev = result;
        return result;
    }
}
let fib = getFibonacci();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());