'use strict'

function reverseBlocks(arr, blockSize) {
    if (blockSize < 1) {
        blockSize = 1;
    }
    for (let i = 0; i < arr.length; i += blockSize) {
        let currentBlock = arr.slice(i, i + blockSize);
        currentBlock.reverse();
        for (let j = 0; j < currentBlock.length; j++) {
            arr[i + j] = currentBlock[j]
        }
    }
    return arr
}

export default reverseBlocks;