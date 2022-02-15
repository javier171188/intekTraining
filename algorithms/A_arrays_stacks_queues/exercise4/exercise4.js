'use strict';
//https://www.youtube.com/watch?v=pV2kpPD66nE

function getGroups(matrix) {
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    if (matrix.length < 1) {
        return {}
    }
    let [rows, cols] = [matrix.length, matrix[0].length];

    let visited = [];
    let islands = {};
    let numberIslands = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] == 1 && !visited.includes(cols * r + c)) {
                numberIslands += 1;
                exploreIsland(r, c);
            }
        }
    }
    function exploreIsland(r, c) {
        let q = [[r, c]];
        islands[numberIslands] = [[r, c]];
        visited.push(cols * r + c);
        while (q.length > 0) {
            let currentPosition = q.pop();
            for (let direction of DIRECTIONS) {
                let [newR, newC] = [currentPosition[0] + direction[0], currentPosition[1] + direction[1]];
                if (newR >= 0 && newR < rows &&
                    newC >= 0 && newC < cols &&
                    matrix[newR][newC] === 1 &&
                    !visited.includes(cols * newR + newC)) {
                    q.push([newR, newC]);
                    visited.push(cols * newR + newC);
                    islands[numberIslands].push([newR, newC])
                }
            }
        }
    }
    return islands;
}

module.exports = { getGroups };