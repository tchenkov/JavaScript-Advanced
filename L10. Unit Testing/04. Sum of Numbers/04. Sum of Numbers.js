function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

let expect = require("chai").expect;

describe('sum tests', function () {
    it('test empty array []', function () {
        expect(sum([])).to.equal(0);
    });
    it('test array [1.1, 2.2, 3.6]', function () {
        expect(sum([1.1, 2.2, 3.6])).to.equal(6.9);
    });
    it('test array [-2, "a", 33]', function () {
        expect(sum([-2, "a", 33])).to.be.NaN;
    });
    it('test "a"', function () {
        expect(sum("a")).to.be.NaN;
    });

    // not checked by judge
    it('test array [1]', function () {
        expect(sum([1])).to.equals(1);
    });
    it('test array [-2, 0, 33]', function () {
        expect(sum([-2, 0, 33])).to.equal(31);
    });
    it('test array [1, 2]', function () {
        expect(sum([1, 2])).to.equal(3);
    });

});