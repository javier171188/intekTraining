'use strict'
const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
const smallArray = [0, 2, 4, 6, 8];
const largeArraySize = largeArray.length;

mergeArrays(largeArray, smallArray);

function mergeArrays(largeArray, smallArray) {
    let smallArraySize = smallArray.length;
    let j = 0;
    for (let i = 0; i < smallArraySize; i++) {
        if (smallArray[i] < largeArray[j]) {
            console.log(smallArray[i]);
        } else {
            while (largeArray[j] <= smallArray[i]) {
                console.log(largeArray[j]);
                j += 1;
            }
            console.log(smallArray[i]);
        }
    }

}



/*
function mergeArrays(largeArray, smallArray) {
    const largeArraySize = largeArray.length;
    const smallArraySize = smallArray.length;
    const startIndex = largeArraySize - smallArraySize;
    smallArray.forEach((number, i) => {
        largeArray[startIndex + i] = number;
    });
    largeArray.sort();
}*/

//module.exports = mergeArrays;