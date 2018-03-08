let expect = require("chai").expect;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe('Symmetric tests', function () {
    it('test empty array [] true', function () {
        expect(isSymmetric([])).to.equal(true);
    });
    it('test non array string false', function () {
        expect(isSymmetric('str-rts')).to.equal(false);
    });
    it('test non array number 2 false', function () {
        expect(isSymmetric(2)).to.equal(false);
    });
    it('test array [{}, 2, "a", null, "a", 2, {}] true', function () {
        expect(isSymmetric([{}, 2, "a", null, "a", 2, {}])).to.equal(true);
    });
    it('test array [2, "a", null, "a"] false', function () {
        expect(isSymmetric([2, "a", null, "a"])).to.equal(false);
    });
});