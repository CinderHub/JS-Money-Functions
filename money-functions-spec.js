// Test positive dollars to cents
// Test negative dollars to cents

// Test addition of positive dollars
// Test addition of negative dollars
// Test addition of positive dollars and negative dollars

describe("Output of Dollar Notation", function() {

    it('151 cents is $1.51', function() {
        expect(centToDollar(151)).toBe('$1.51');
    });

    it('1160 cents is $11.60', function() {
        expect(centToDollar(1160)).toBe('$11.60');
    });


    it('1 cent is $0.01', function() {
        expect(centToDollar(1)).toBe('$0.01');
    });

});

describe("Dollar and Cent Conversion", function() {

    var v1d = '$1.50';
    var v1c = 150;

    var v2d = '$-1.50';
    var v2c = -150;


    it('dollarToCent converts ' + v1d + ' to ' + v1c + ' cents', function() {
        expect(dollarToCent(v1d)).toBe(v1c);
    });

    it('dollarToCent converts ' + v2d + ' to ' + v2c + ' cents', function() {
        expect(dollarToCent(v2d)).toBe(v2c);
    });

    it('centToDollar converts ' + v2c + ' cents to ' + v2d + '', function() {
        expect(centToDollar(v2c)).toBe(v2d);
    });


});

describe('Dollar Addition', function() {

    var v1d = '$1.50';
    var v1c = 150;

    var v2d = '$-1.50';
    var v2c = -150;


    it(v1d + ' + ' + v2d + ' = $0.00', function() {
        expect(addDollar(v1d, v2d)).toBe('$0.00');
    });

    it(v1d + ' + ' + v1d + ' = $3.00', function() {
        expect(addDollar(v1d, v1d)).toBe('$3.00');
    });

    it('1.25 + 1.25 + .5 + $3.00 = $6.00', function() {
        expect(addDollar('1.25','1.25','.50','$3.00')).toBe('$6.00');
    });

});

describe('Dollar Subtraction', function() {

    it('3 - 1 - 1 = $1.00', function() {
        expect(subtractDollar('3','1','1')).toBe('$1.00');
    });

});