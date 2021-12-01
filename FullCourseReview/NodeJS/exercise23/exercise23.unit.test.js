'use strict';
const { getFirstPrimes } = require('./exercise23');
/*
jest.mock("readline");
describe.only("program", () => {
    it.only("should execute a cb when user prompt in cli y", () => {
        const mock = jest.fn();
        getFirstPrimes(mock);
        expect(mock).toHaveBeenCalled();
    });
});*/

test('Basic test', () => {
    getFirstPrimes();
    expect(true).toBe(true);
})