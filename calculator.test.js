const { Calculator } = require('./calculator');

test('Test string 1127839561 with n=3', () => {
    const calc = new Calculator('1127839561', '3');

    calc.process().forEach(result => {
        expect(result.result).toBe(270);
        expect(result.parsedNumbers.join('')).toBe('956');
    });
});

test('Test string 1127839561 with n=5', () => {
    const calc = new Calculator('1127839561', '5');

    calc.process().forEach(result => {
        expect(result.result).toBe(7560);
        expect(result.parsedNumbers.join('')).toBe('78395');
    });
});
