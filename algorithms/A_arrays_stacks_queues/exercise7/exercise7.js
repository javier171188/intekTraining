'use strict';

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

    for (let r = 0; r < matrix.length; r++) {
        if (rows.includes(r)) {
            matrix[r].fill(0);
        } else {
            for (let c of columns) {
                matrix[r][c] = 0;
            }
        }
    }
    return matrix;
}

module.exports = { makeZeroes };