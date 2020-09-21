const _ = require('lodash');

class Calculator {
    constructor(mainString, N) {
        this.mainString = mainString;
        this.N = N;
        this.subStrings = [];
        this.arrayWithParseAndSplitData = [];
        this.highestResults = [];
    }

    process() {
        this.parseSubstrings();
        this.explodeSubstrings();
        this.calculateResults();
        this.fetchHighestResults();

        return this.highestResults;
    }

    /**
     * Parses the Main string into substrings of N size and stores them into this.substrings
     * for the current class instance.
     */
    parseSubstrings() {
        let iterator = 0;

        while (iterator <= this.mainString.length) {
            let nIterator = 1;
            let substringValid = true;
            let substring = this.mainString[iterator];

            while (nIterator < this.N) {
                if (!this.mainString[iterator + nIterator]) {
                    substringValid = false;
                } else {
                    substring = `${substring}${this.mainString[iterator + nIterator]}`;
                }

                nIterator++;
            }

            if (substringValid) {
                this.subStrings.push(substring);
            }

            iterator++;
        }
    }

    /**
     * Explodes all the substrings found in the main string and transforms them into array of characters.
     */
    explodeSubstrings() {
        let indexInSubstringArray = 0;
        this.subStrings.forEach(substring => {
            this.arrayWithParseAndSplitData.push({parsedNumbers: substring.split(''), indexInSubstringArray});
            indexInSubstringArray += 1;
        });
    }

    /**
     * Calculate the multiplcation result for each substrings.
     */
    calculateResults() {
        this.arrayWithParseAndSplitData.forEach(index => {
            let subResult = 1;
            index.parsedNumbers.forEach(parsedNumber => {
                subResult = subResult * parsedNumber;
            });

            index.result = subResult;
        });
    }

    /**
     * Sorts and set the final array of results with the highest values.
     */
    fetchHighestResults() {
        const sortedResults = _.sortBy(this.arrayWithParseAndSplitData, 'result');

        this.highestResults = [sortedResults[sortedResults.length - 1]];
    }
}

module.exports = {
  Calculator: Calculator
};
