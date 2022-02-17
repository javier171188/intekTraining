'use strict'

function reverseBlocks(arr, blockSize) {
    if (blockSize < 1) {
        blockSize = 1;
    }
    let arraySize = arr.length;
    for (let i = 0; i < arraySize; i += blockSize) {
        let currentSize = Math.min(blockSize, arr.length - i)
        for (let j = 0; j < currentSize / 2; j++) {
            [arr[i + j], arr[i + currentSize - j - 1]] = [arr[i + currentSize - j - 1], arr[i + j]];
        }
    }
    return arr
}

module.exports = reverseBlocks;