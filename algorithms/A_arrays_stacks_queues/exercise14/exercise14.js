'use strict'
//https://www.techiedelight.com/find-all-paths-from-source-to-destination-in-matrix/

const A = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
]

const paths = findRoutes(A);
console.log(paths);


function findRoutes(matrix, startRow = 0, startCol = 0, endCol, endRow) {
    if (matrix.length < 1) return [];

    if (!endCol) endCol = matrix[0].length;
    if (!endRow) endRow = matrix.length;

    const paths = [];
    const numberRows = matrix.length;
    const numberCols = matrix[0].length;

    const path = [];
    explore(startRow, startCol, path)

    function explore(r, c, path) {
        if (c === endCol - 1 && r === endRow - 1) {
            path.push({ coordinates: [r, c], value: matrix[r][c] });
            paths.push([...path]);
            path.pop();
            return;
        }

        path.push({ coordinates: [r, c], value: matrix[r][c] });

        if (r < endRow && c + 1 < endCol) {
            explore(r, c + 1, path);
        }
        if (r + 1 < endRow && c < endCol) {
            explore(r + 1, c, path);
        }
        path.pop();
    }
    return paths;
}
