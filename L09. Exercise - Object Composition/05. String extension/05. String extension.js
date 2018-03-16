(function () {
    String.prototype.ensureStart = function (str) {
        return !this.toString().startsWith(str) ? str + this.toString() : this.toString();
    };


    //noinspection JSUnusedGlobalSymbols
    String.prototype.ensureEnd = function (str) {
        return !this.endsWith(str) ? this + str : this;
    };

    //noinspection JSUnusedGlobalSymbols
    String.prototype.isEmpty = () => this.length !== 0;

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }

        let result = this.substring(0, n);
        let lastSpace = result.lastIndexOf(' ');
        if (lastSpace === -1) {
            if (n > 3) {
                return result.substring(0, n - 3) + '.'.repeat(3);
            } else {
                return '.'.repeat(n);
            }
        } else {
            if (lastSpace + 2 <= n) {
                return result.substring(0, lastSpace) + '.'.repeat(3);
            } else {
                result.substring(0, lastSpace).truncate(n);
            }
        }
    };

    //noinspection BadExpressionStatementJS,JSPrimitiveTypeWrapperUsage
    String.format = function (string, ...params) {
        let pattern = /{(\d+)}/g;
        let match;
        while (match = pattern.exec(string)){
            let paramIndex = Number(match[1]);
            let replacement = arguments[(paramIndex + 1).toString()];
            string = string.replace(match[0], replacement)
        }

        return string;
    };
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
    'dog');
console.log(str);