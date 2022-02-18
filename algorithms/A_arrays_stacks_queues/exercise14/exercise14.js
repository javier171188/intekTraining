'use strict'
//https://www.techiedelight.com/find-all-paths-from-source-to-destination-in-matrix/


function findRoutes(matrix, startRow = 0, startCol = 0, endRow = undefined, endCol = undefined) {
    if (matrix.length < 1 || matrix[0].length < 1) return [];

    if (startRow < 0) startRow = 0;
    if (startCol < 0) startCol = 0;

    if (endCol === undefined || endCol > matrix[0].length - 1) endCol = matrix[0].length - 1;
    if (endRow === undefined || endRow > matrix.length - 1) endRow = matrix.length - 1;

    if (endCol < startCol) endCol = startCol;
    if (endRow < startRow) endRow = startRow;

    const paths = [];
    const path = [];
    explore(startRow, startCol, path)

    function explore(r, c, path) {
        if (c === endCol && r === endRow) {
            path.push({ coordinates: [r, c], value: matrix[r][c] });
            paths.push([...path]);
            path.pop();
            return;
        }

        path.push({ coordinates: [r, c], value: matrix[r][c] });

        if (r < endRow + 1 && c < endCol) {
            explore(r, c + 1, path);
        }
        if (r < endRow && c < endCol + 1) {
            explore(r + 1, c, path);
        }
        path.pop();
    }
    return paths;
}

module.exports = { findRoutes }