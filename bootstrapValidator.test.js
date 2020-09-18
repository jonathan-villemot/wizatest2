const bsv = require('./bootstrapValidator');

describe('boostrapValidator', () => {

    test('mainString is mandatory', () => {
        expect(() => {bsv.validate(undefined, '2')}).toThrow('Missing Main string as 1st argument');
    });

    test('N is mandatory', () => {
        expect(() => {bsv.validate('12312342214', undefined)}).toThrow('Missing Parameter N for substring length as 2nd argument');
    });

    test('accepts only numbers in mainString and N parameters', () => {
        expect(() => {bsv.validate('1231N2342214', '2')}).toThrow('Main string must be a string with only numbers');
    });

    test('accepts only numbers in mainString and N parameters', () => {
        expect(() => {bsv.validate('12312342214', '2N')}).toThrow('N parameter must be a string with only numbers');
    });

    test('accepts only numbers in mainString and N parameters', () => {
        expect(() => {bsv.validate('12312342214', '2')}).not.toThrow();
    });
});
