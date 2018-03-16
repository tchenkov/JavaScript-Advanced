function argumentInfo() {
    let counterMap = new Map();

    for (let arg of arguments) {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (!counterMap.has(type)){
            counterMap.set(type, 0);
        }
        counterMap.set(type, counterMap.get(type) + 1);
    }
    counterMap = new Map([...counterMap].sort((a, b) => b[1] - a[1]));
    counterMap.forEach((v, k) => console.log(`${k} = ${v}`))
}

// function tests
argumentInfo('cat', 42, function () { console.log('Hello world!'); });
console.log();
argumentInfo({ name: 'bob'}, 3.333, 9.999);