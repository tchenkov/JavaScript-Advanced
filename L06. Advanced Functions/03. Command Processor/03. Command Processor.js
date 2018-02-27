function commandProcessor(arr) {
    let result = '';
    //noinspection JSUnusedGlobalSymbols
    let execute = {
        append: (text) => result += text,
        removeStart: (n) => result = result.substring(Number(n)),
        removeEnd: (n) => result = result.substring(0, result.length - Number(n)),
        print: () => console.log(result)
    };

    for (let el of arr) {
        let [command, argument] = el.split(' ');
        execute[command](argument);
    }
}

// function tests
commandProcessor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);
console.log();
commandProcessor(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']);