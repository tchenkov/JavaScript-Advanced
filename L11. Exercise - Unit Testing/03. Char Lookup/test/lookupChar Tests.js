let expect = require('chai').expect;
const lookupChar = require('../lookupChar');

describe('02. Even Or Odd',function () {
    let i = 1;
    it('test' + i++, function () {
        expect(lookupChar('sa', 1)).to.equals('a');
    });
    it('test' + i++, function () {
        expect(lookupChar('sa', 3)).to.equals('Incorrect index');
    });
    it('test' + i++, function () {
        expect(lookupChar('sa', 3.3)).to.equals(undefined);
    });
    it('test' + i++, function () {
        expect(lookupChar('sa', 'ivan')).to.equals(undefined);
    });
    it('test' + i++, function () {
        expect(lookupChar('sa', [])).to.equals(undefined);
    });
    it('test' + i++, function () {
        expect(lookupChar('sa', {})).to.equals(undefined);
    });
    it('test' + i++, function () {
        expect(lookupChar('sa', -3)).to.equals('Incorrect index');
    });
    it('test' + i++, function () {
        expect(lookupChar(8, 3)).to.equals(undefined);
    });
    it('test' + i++, function () {
        expect(lookupChar([], 3)).to.equals(undefined);
    });
    it('test' + i++, function () {
        expect(lookupChar({}, 3)).to.equals(undefined);
    });
    it('test' + i++, function () {
        expect(lookupChar(null, 3)).to.equals(undefined);
    });
    it('test' + i++, function () {
        expect(lookupChar(undefined, 3)).to.equals(undefined);
    });

});