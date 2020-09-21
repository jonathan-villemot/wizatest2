let _ = require('lodash');
let bootstrapValidator = require('./bootstrapValidator');
let { Calculator } = require('./calculator');

let mainString = process.argv[2];
let N = process.argv[3];

bootstrapValidator.validate(mainString, N);

let calculator = new Calculator(mainString, N);
let highestResults = calculator.process();

console.log('starting process');
console.log(' -------------------------');
    
highestResults.forEach(result => {
    console.log(`Result: ${result.result}: Substring: ${result.parsedNumbers.join('')}`)
});

console.log(' -------------------------');
console.log('process ended calculation done');
