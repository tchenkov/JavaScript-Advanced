function listProcessor(arr) {
    let commands = (function () {
        let result = [];
        function add(string) {
            result.push(string);
        }
        function remove(string) {
            result = result.filter(e => e !== string);
        }
        function print() {
            console.log(result.join(','));
        }

        return {
            add: add,
            remove: remove,
            print: print
        };
    })();

    for (let input of arr) {
        let [command, string] = input.split(' ');
        commands[command](string);
    }
}

// function tests
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
console.log();
listProcessor(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);