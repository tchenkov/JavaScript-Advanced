let expect = require('chai').expect;
function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe('rgb-to-hex tests', function () {
    it('rgb-to-hex', function () {
        expect(rgbToHexColor(0,0,0)).to.equals('#000000');
    });
    it('rgb-to-hex', function () {
        expect(rgbToHexColor(-11, 1, 1)).to.equals(undefined);
    });
    it('rgb-to-hex', function () {
        expect(rgbToHexColor(1000, 1, 1)).to.equals(undefined);
    });
    it('rgb-to-hex', function () {
        expect(rgbToHexColor(255,255,255)).to.equals('#FFFFFF');
    });
    it('rgb-to-hex', function () {
        expect(rgbToHexColor(11,1, 11.1)).to.equals(undefined);
    });
    // it('rgb-to-hex', function () {
    //     expect(rgbToHexColor([4, 4, 4])).to.equals(undefined);
    // });
    // it('rgb-to-hex', function () {
    //     expect(rgbToHexColor({})).to.equals(undefined);
    // });
    // it('rgb-to-hex', function () {
    //     expect(rgbToHexColor('ivan', 1, 1)).to.equals(undefined);
    // });
    // it('rgb-to-hex', function () {
    //     expect(rgbToHexColor({}, 1, 1)).to.equals(undefined);
    // });

});
