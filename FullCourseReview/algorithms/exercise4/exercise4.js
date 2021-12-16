'use strict'

function introduceElement(element, array, index) {
    for (let i = array.length - 1; i > index; i--) {
        array[i] = array[i - 1];
    }
    array[index] = element;
}

function mergeArrays(largeArray, smallArray) {
    let smallArraySize = smallArray.length;
    let j = 0;
    for (let i = 0; i < smallArraySize; i++) {
        if (smallArray[i] < largeArray[j]) {
            introduceElement(smallArray[i], largeArray, j);
            j += 1;
        } else {
            while (largeArray[j] <= smallArray[i]) {
                j += 1;
            }
            introduceElement(smallArray[i], largeArray, j);
        }
    }
    return largeArray;
}

module.exports = mergeArrays;