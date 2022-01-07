'use strict'


function mergeArrays(largeArray, smallArray) {
    const numElements = largeArray.length;
    const largeArrayValues = [...largeArray];
    for (let i = 0; i < numElements; i++) {
        if (largeArrayValues[0] < smallArray[0] || smallArray.length < 1) {
            largeArray[i] = largeArrayValues.shift();
        } else {
            largeArray[i] = smallArray.shift();
        }
    }

    return largeArray;
}

module.exports = mergeArrays;