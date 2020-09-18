/**
 * Function that validates the app bootstraping state to make sure every parameter needed is valid.
 * Otherwise closes the process.
 *
 * @param mainString string (main string to be parsed and must be only numbers)
 * @param N string (number representing the size of any substring must be only numbers)
 */
function validate(mainString, N) {
    if (!mainString) {
        throw Error('Missing Main string as 1st argument');
    }

    if (!N) {
        throw Error('Missing Parameter N for substring length as 2nd argument');
    }

    let isMainStringOnlyDigit = /^\d+$/.test(mainString);

    if (!isMainStringOnlyDigit) {
        throw Error('Main string must be a string with only numbers');
    }

    let isNOnlyDigit = /^\d+$/.test(N);

    if (!isNOnlyDigit) {
        throw Error('N parameter must be a string with only numbers');
    }
}

// exports below for testing purposes.
const __validate = validate;

module.exports = {
    validate,
    __validate,
};
