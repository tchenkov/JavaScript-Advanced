function objectInheritance(arr) {
    let commands = (function () {
        let result = {};

        function create(inputArr) {
            if (inputArr.length < 2) {
                result[inputArr[0]] = {};
            } else {
                result[inputArr[0]] = Object.create(result[inputArr[2]]);
            }
        }

        function set(inputArr) {
            result[inputArr[0]][inputArr[1]] = inputArr[2];
        }

        function print(obj) {
            obj = obj[0];
            let props = [];
            for (let prop in result[obj]) {
                props.push(`${prop}:${result[obj][prop]}`)
            }

            console.log(props.join(', '));
        }

        return {
            create: create,
            set: set,
            print: print
        }
    })();

    for (let input of arr) {
        let inputArr = input.split(' ');
        let command = inputArr.shift();
        commands[command](inputArr);
    }
}

// function tests
objectInheritance(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);