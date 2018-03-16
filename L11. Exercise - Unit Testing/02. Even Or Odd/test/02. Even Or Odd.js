let expect = require('chai').expect;
const isOddOrEven = require('../isOdd');

describe('02. Even Or Odd',function () {
    it('test1', function () {
        expect(isOddOrEven('sa')).to.equals('even');
    });
    it('test2', function () {
        expect(isOddOrEven('')).to.equals('even');
    });
    it('test3', function () {
        expect(isOddOrEven('a')).to.equals('odd');
    });
    it('test4', function () {
        expect(isOddOrEven(3)).to.equals(undefined);
    });
    it('test5', function () {
        expect(isOddOrEven([])).to.equals(undefined);
    });
    it('test6', function () {
        expect(isOddOrEven({})).to.equals(undefined);
    });
    it('test7', function () {
        expect(isOddOrEven(null)).to.equals(undefined);
    });
    it('test8', function () {
        expect(isOddOrEven(undefined)).to.equals(undefined);
    });

});