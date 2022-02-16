'use strict';

function rotateMatrix(matrix, clockwise = true) {
    if (matrix.length < 1 || (matrix[0].length < 1)) return matrix;

    if (clockwise) matrix = matrix.reverse();
    const numbR = matrix.length;
    const numbC = matrix[0].length;


    if (numbR < numbC) {
        for (let t = numbR; t < numbC; t++) {
            matrix.push(new Array(numbC));
        }
    }

    for (let i = 0; i < numbR; i++) {
        for (let j = i; j < Math.max(numbR, numbC); j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    if (numbC < numbR) {
        for (let r = numbC; r < numbR; r++) {
            matrix.pop();
        }
    }
    if (!clockwise) matrix = matrix.reverse();

    if (numbR < numbC) {
        for (let r of matrix) {
            for (let c = numbR; c < numbC; c++) {
                r.pop();
            }
        }
    }

    return matrix
}

module.exports = { rotateMatrix };