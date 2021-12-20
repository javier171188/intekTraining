'use strict';
//https://www.geeksforgeeks.org/find-element-array-sum-left-array-equal-sum-right-array/
//Method 4

function balanceIndex(array) {
    let leftSum = 0;
    let rightSum = 0;

    let i, j;
    for (i = 0, j = array.length - 1; i < j; i++, j--) {
        leftSum += array[i];
        rightSum += array[j];

        while (leftSum < rightSum && i < j) {
            i += 1;
            leftSum += array[i];
        }

        while (rightSum < leftSum && i < j) {
            j -= 1;
            rightSum += array[j]
        }
    }
    if (leftSum === rightSum && i - 1 === j) {
        return j
    }
    return -1
}

module.exports = { balanceIndex };