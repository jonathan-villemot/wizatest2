const _ = require('lodash');
const bootstrapValidator = require('./bootstrapValidator');
const { Calculator } = require('./calculator');

const mainString = process.argv[2];
const N = process.argv[3];

bootstrapValidator.validate(mainString, N);

const calculator = new Calculator(mainString, N);
let highestResults = calculator.process();

console.log('starting process');
console.log(' -------------------------');
    
highestResults.forEach(result => {
    console.log(`Result: ${result.result}: Substring: ${result.parsedNumbers.join('')}`)
});

console.log(' -------------------------');
console.log('process ended calculation done');
