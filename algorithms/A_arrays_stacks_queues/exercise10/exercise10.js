'use strict';
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

// const a = [1, 7, 9, 3, 5];
// shuffleArray(a);
// console.log(a);

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

module.exports = { shuffleArray };