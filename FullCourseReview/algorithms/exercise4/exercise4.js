'use strict'

function mergeArrays(largeArray, smallArray) {
    const largeArraySize = largeArray.length;
    const smallArraySize = smallArray.length;
    const startIndex = largeArraySize - smallArraySize;
    smallArray.forEach((number, i) => {
        largeArray[startIndex + i] = number;
    });
    largeArray.sort();
}

module.exports = mergeArrays;