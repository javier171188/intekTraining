'use strict';
//https://www.geeksforgeeks.org/find-element-array-sum-left-array-equal-sum-right-array/
//Method 4

function balanceIndex(array) {
    let leftSum = 0;
    let rightSum = 0;
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex <= rightIndex) {
        if (leftSum < rightSum) {
            leftSum += array[leftIndex];
            leftIndex += 1;
        }
        if (rightSum < leftSum) {
            rightSum += array[rightIndex];
            rightIndex -= 1;
        }

        if (rightSum === leftSum) {
            if (rightIndex + 1 === leftIndex) return rightIndex;
            leftSum += array[leftIndex];
            leftIndex += 1;
        }
    }
    return -1
}

module.exports = { balanceIndex };