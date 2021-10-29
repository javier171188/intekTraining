'use strict'
require('isomorphic-fetch');
const queryRetry = require('./exercise2');

const urlQuery = url => () => fetch(url);

const maxRetry = 3;
const useIncrement = true;
const delay = 1000;



test('Success in the first try.', () => {
    expect.assertions(1);
    return expect(queryRetry(urlQuery('https://www.google.com/'), maxRetry, delay, useIncrement))
        .resolves
        .toBeTruthy();
})

const successOnSecondCall = () => {
    let numberOfCall = 0;
    return () => {
        numberOfCall += 1;
        return new Promise((res, rej) => setTimeout(numberOfCall > 1 ? res : rej, 1000, 'success'))
    }
};

test('Success in the second try.', () => {
    var query = successOnSecondCall();

    return expect(queryRetry(query, maxRetry, delay, useIncrement))
        .resolves
        .toEqual('success');
})


test('Fail.', () => {
    return expect(queryRetry(urlQuery('https://www.gle.com/'), maxRetry, delay, useIncrement))
        .rejects.toEqual({
            Error: 'Query rejected 3 times.',
        });
})

test('Check with increment.', async () => {
    let start = new Date().getTime();
    let totalTime
    try {
        await queryRetry(urlQuery('https://www.gle.com/'), maxRetry, delay, useIncrement);
    } catch (e) {
        totalTime = new Date().getTime() - start;
    }
    expect(totalTime).toBeGreaterThanOrEqual(3000);
    expect(totalTime).toBeLessThan(3500);
    return
})

test('Check without increment.', async () => {
    let start = new Date().getTime();
    let totalTime
    try {
        await queryRetry(urlQuery('https://www.gle.com/'), maxRetry, delay, false);
    } catch (e) {
        totalTime = new Date().getTime() - start;
    }
    expect(totalTime).toBeGreaterThanOrEqual(2000);
    expect(totalTime).toBeLessThan(2500);
    return
})

