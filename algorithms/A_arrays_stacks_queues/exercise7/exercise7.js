'use strict';

const A = [
    [2, 4, 6, 8, 9],
    [1, 27, 5, 0, 7],
    [10, 0, 15, 26, 77],
    [12, 24, 45, 36, 10],
    [90, 7, 6, 1, 27]
];

makeZeroes(A);

function makeZeroes(matrix) {
    let columns = [];
    let rows = [];
    for (let j = 0; j < matrix.length; j++) {
        for (let i = 0; i < matrix[0].length; i++) {
            if (matrix[j][i] == 0) {
                if (!(j in rows)) rows.push(j);
                if (!(i in columns)) columns.push(i);
            }
        }
    }
    for (let r of rows) {

    }
}