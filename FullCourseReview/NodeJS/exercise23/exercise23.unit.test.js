'use strict';
const { getFirstPrimes } = require('./exercise23');

jest.mock("readline");


test('Basic test', () => {
    getFirstPrimes();
    expect(true).toBe(true);
})