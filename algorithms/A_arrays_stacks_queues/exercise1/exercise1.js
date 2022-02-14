'use strict';

function getMaximum(array) {
    let maxNumber = array[0];
    let index = 1;
    let lastIndex = array.length - 1;

    searchMaximum(array);

    function searchMaximum(array) {
        if (array[index] > maxNumber) {
            maxNumber = array[index];
        }

        if (lastIndex <= index) {
            return;
        }
        index += 1;

        searchMaximum(array);
    }
    return maxNumber;
}

module.exports = getMaximum;