const _ = require('lodash');
const bootstrapValidator = require('./bootstrapValidator');
const calc = require('./calculator');

const mainString = process.argv[2];
const N = process.argv[3];

bootstrapValidator.validate(mainString, N);

const calculator = new calc.Calculator(mainString, N);
calculator.process();
