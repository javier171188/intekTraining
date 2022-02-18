'use strict'

function searchMatrix(matrix, value) {
    if (value === undefined || matrix.length < 1 || matrix[0].length < 1) return [];
    let currentCol = matrix[0].length - 1;
    let currentRow = 0;
    let foundValues = [];

    while (currentCol >= 0 && currentRow < matrix.length) {
        let currentValue = matrix[currentRow][currentCol];
        if (currentValue === value) {
            foundValues.push([currentRow, currentCol]);
            currentCol -= 1;
            currentRow += 1;
        }
        if (currentValue > value) {
            currentCol -= 1;
        }
        if (currentValue < value) {
            currentRow += 1;
        }
    }
    return foundValues;
}

module.exports = { searchMatrix };