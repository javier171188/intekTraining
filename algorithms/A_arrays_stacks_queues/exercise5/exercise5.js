'use strict';

const A = [
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 0]];

console.log(A);

rotateMatrix(A, true);
console.log(A);

rotateMatrix(A, false);
rotateMatrix(A, false);

console.log(A);



function rotateMatrix(matrix, clockwise = true) {

    if (clockwise) {
        matrix = matrix.reverse();
        // for (let i = 0; i < matrix.length; i++) {
        //     for (let j = i; j < matrix[0].length; j++) {
        //         [matrix[matrix.length - 1 - i][matrix[0].length - 1 - j], matrix[i][j]] = [matrix[i][j], matrix[matrix.length - 1 - i][matrix[0].length - 1 - j]]
        //     }
        // }
        // return matrix
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[0].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    if (!clockwise) matrix = matrix.reverse();
    return matrix
}