'use strict'

function reverseBlocks(arr, blockSize) {
    if (blockSize < 1) {
        blockSize = 1;
    }
    let resultingArray = [];
    for (let i = 0; i < arr.length; i += blockSize) {
        let currentBlock = arr.slice(i, i + blockSize);
        resultingArray = resultingArray.concat(currentBlock.reverse());
    }
    return resultingArray;
}

module.exports = reverseBlocks;