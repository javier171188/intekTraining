'use strict'

function mergeArrays(largeArray, smallArray) {

    if (smallArray.length < 1) return largeArray;

    const largeArraySize = largeArray.length;
    const smallArraySize = smallArray.length;

    let smallIndex = smallArraySize - 1;
    let largeIndex = largeArraySize - smallArraySize - 1;

    for (let i = largeArraySize - 1; i > - 1; i--) {

        if (largeArray[largeIndex] > smallArray[smallIndex]) {
            [largeArray[i], largeArray[largeIndex]] = [largeArray[largeIndex], largeArray[i]];
            largeIndex -= 1;
        } else {
            [largeArray[i], smallArray[smallIndex]] = [smallArray[smallIndex], largeArray[i]];
            smallIndex -= 1;
        }

        if (smallIndex < 0) break;
    }

    return largeArray;
}

module.exports = mergeArrays;