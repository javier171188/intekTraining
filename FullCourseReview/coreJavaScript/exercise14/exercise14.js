'use strict';
//https://www.youtube.com/watch?v=g8bSdXCG-lA
//https://www.youtube.com/watch?v=lsQTYlCiU6c

function maxAreaInHistogram(hist) {
    let maxArea = 0;

    for (let i in hist) {
        let indexI = parseInt(i);
        let minHeight = hist[indexI];
        for (let indexJ = indexI; indexJ < hist.length; indexJ++) {
            minHeight = Math.min(hist[indexJ], minHeight);
            let currentArea = (indexJ - indexI + 1) * minHeight;
            maxArea = Math.max(currentArea, maxArea);
        }
    }
    return maxArea;
}

function greatestArea(matrix) {
    if (matrix.length < 1) {
        return 0;
    }
    let maxArea = 0;
    let histogram = [...matrix[0]].map(p => 0);

    for (let row of matrix) {
        row.forEach((e, i) => {
            if (e === 0) {
                histogram[i] = 0;
            } else {
                histogram[i] += e;
            }
        });
        let currentArea = maxAreaInHistogram(histogram);
        maxArea = Math.max(maxArea, currentArea);
    }
    return maxArea;
}

module.exports = { greatestArea };