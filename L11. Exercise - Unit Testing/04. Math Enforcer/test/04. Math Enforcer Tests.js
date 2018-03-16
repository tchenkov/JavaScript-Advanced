let expect = require('chai').expect;
const mathEnforcer = require('../mathEnforcer');

describe('02. Even Or Odd',function () {
    let i = 1;
    it('test' + i++, function () {
        expect(mathEnforcer.sum(3, 1)).to.equals(4);
    });
    it('test' + i++, function () {
        expect(mathEnforcer.sum(3, -1)).to.equals(2);
    });
    it('test' + i++, function () {
        expect(mathEnforcer.sum(1.1, 2.2)).to.closeTo(3.3,0.01);
    });
    it('test' + i++, function () {
        expect(mathEnforcer.sum('ivan', 2.2)).to.equals(undefined);
    });
    it('test' + i++, function () {
        expect(mathEnforcer.sum(-12.2, 'evlogi')).to.equals(undefined);
    });

    it('test' + i++, function () {
        expect(mathEnforcer.addFive(7)).to.equals(12);
    });
    it('test' + i++, function () {
        expect(mathEnforcer.addFive(7.1)).to.closeTo(12.1, 0.01);
    });
    it('test' + i++, function () {
        expect(mathEnforcer.addFive(-7)).to.equals(-2);
    });
    it('test' + i++, function () {
        expect(mathEnforcer.addFive('stavri')).to.equals(undefined);
    });

    it('test' + i++, function () {
        expect(mathEnforcer.subtractTen(7)).to.equals(-3);
    });
    it('test' + i++, function () {
        expect(mathEnforcer.subtractTen(7.1)).to.closeTo(-2.9, 0.01);
    });
    it('test' + i++, function () {
        expect(mathEnforcer.subtractTen(-7)).to.equals(-17);
    });
    it('test' + i++, function () {
        expect(mathEnforcer.subtractTen('stavri')).to.equals(undefined);
    });

});