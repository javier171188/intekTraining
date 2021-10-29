'use strict'
require('isomorphic-fetch');

const cancellableFetch = require('./exercise3')


test('Check that the fetch works properly without cancel', () => {
    let result = cancellableFetch('https://www.google.com/');
    return expect(result)
        .resolves
        .toBeTruthy();
})

test('Check cancellation', () => {
    let result = cancellableFetch('https://www.google.com/');
    expect(result)
        .rejects
        .toEqual({ reason: 'cancelled' })

    // More code
    let condition = true;
    if (condition) {
        result.cancel();
    }
})



