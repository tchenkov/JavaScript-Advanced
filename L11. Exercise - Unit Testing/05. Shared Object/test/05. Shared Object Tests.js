let expect = require('chai').expect;
const sharedObject = require('../shared-object');

describe('05. Shared Object',function () {
    let i = 1;
    it('test' + i++, function () {
        expect(sharedObject(3, 1)).to.equals(4);
    });

});