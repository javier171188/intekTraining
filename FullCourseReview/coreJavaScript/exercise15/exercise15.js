'use strict';

function balanceIndex(array) {
    for (let i in array) {
        let index = parseInt(i);
        let firstArray = array.slice(0, index);
        let secondArray = array.slice(index);
        let firstSum = firstArray.reduce((p, c) => p + c, 0);
        let secondSum = secondArray.reduce((p, c) => p + c, 0);
        if (firstSum === secondSum) {
            return index - 1;
        }
    }
    return -1;
}

module.exports = { balanceIndex };