let expect = require('chai').expect;

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

describe('createCalculator tests', function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });

    it('test', function () {
        calc.add(5);
        expect(calc.get()).to.equal(5);
    });
    it('test', function () {
        calc.add(5);
        calc.add('5');
        expect(calc.get()).to.equals(10);
    });
    it('test', function () {
        calc.add('ivan');
        expect(calc.get()).to.be.NaN;
    });
    it('test', function () {
        calc.add(['lo']);
        expect(calc.get()).to.be.NaN;
    });
    it('test', function () {
        calc.add({});
        expect(calc.get()).to.be.NaN;
    });


    it('test', function () {
        calc.subtract(5);
        expect(calc.get()).to.equal(-5);
    });


});