'use strict';
const { getUserInput } = require('./readline');

jest.mock("readline");
describe.only("program", () => {
    it.only("should execute a cb when user prompt in cli y", () => {
        const value = getUserInput();
        expect(value).toBe(true);
    });
});