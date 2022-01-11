'use strict';
//https://www.geeksforgeeks.org/find-element-array-sum-left-array-equal-sum-right-array/
//Method 4

/*let index = balanceIndex([4, 2, 4, 2]);
console.log(index);
index = balanceIndex([1, 4, 3, 2]);
console.log(index);*/

let index = balanceIndex([1, 1]);
console.log(index);


function balanceIndex(array) {
    let leftSum = array[0];
    let rightSum = array[array.length - 1];
    let leftIndex = 1;
    let rightIndex = array.length - 2;

    while (leftIndex <= rightIndex) {
        console.log(leftSum, rightSum);
        if (leftSum < rightSum) {
            leftSum += array[leftIndex];
            leftIndex += 1;
        }
        if (rightSum < leftSum) {
            rightSum += array[rightIndex];
            rightIndex -= 1;
        }
        console.log(leftSum, rightSum, rightIndex, leftIndex);
        if (rightSum === leftSum) {
            if (rightIndex + 1 === leftIndex) return rightIndex;
            leftIndex += 1;
        }
    }
    return -1
}

module.exports = { balanceIndex };