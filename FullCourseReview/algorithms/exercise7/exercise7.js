'use strict'

function longestRunOfTwoNumbers(numberString) {
    if (numberString.length < 3) {
        return numberString;
    }
    let strLength = numberString.length;
    let runStart = 0;
    let longestRun = numberString[0];

    for (let i = 1; i < strLength; i++) {
        let substring = numberString.slice(runStart, i + 1)
        let numbers = new Set(substring);
        if (numbers.size < 3 && substring.length > longestRun.length) {
            longestRun = substring;
        } else if (numbers.size > 2) {
            runStart++;
        }
    }
    return longestRun;
}

module.exports = longestRunOfTwoNumbers;