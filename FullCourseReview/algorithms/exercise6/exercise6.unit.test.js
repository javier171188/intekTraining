'use strict'
const getLongestWord = require('./exercise6');
// https://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array

test('Basic test', () => {
    const letters1 = ['E', 'S', 'R', 'A', 'T', 'I', 'N', 'D', 'A'];
    const letters2 = ['M', 'I', 'N', 'D', 'S', 'E', 'T'];

    let longest1 = getLongestWord(letters1);
    expect(longest1).toEqual('RANDIEST');

    let longest2 = getLongestWord(letters2);
    expect(longest2).toEqual('MINDSET');
})

test('No word found', () => {
    const letters = ['💻', '📷'];
    let longest = getLongestWord(letters);
    expect(longest).toBeUndefined();
})

test('With lowercase', () => {
    const letters1 = ['e', 's', 'r', 'a', 't', 'i', 'n', 'd', 'a'];
    const letters2 = ['M', 'I', 'n', 'D', 's', 'e', 'T'];

    let longest1 = getLongestWord(letters1);
    expect(longest1).toEqual('RANDIEST');

    let longest2 = getLongestWord(letters2);
    expect(longest2).toEqual('MINDSET');

})