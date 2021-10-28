'use strict'
const runBatches = require("./exercise1");
jest.setTimeout(7100);
const taskFactorySample = (delay, resolve, val) => {
    return () => {
        return new Promise((res, rej) => setTimeout(resolve ? res : rej, delay, val))
    }
};
const tasks = [
    taskFactorySample(500, true, 1),
    taskFactorySample(1000, true, 2),
    taskFactorySample(5000, false, 'error'),
    taskFactorySample(2000, true, 4),
    taskFactorySample(1000, false, 'error'),
    taskFactorySample(1000, false, 'error')
];

test('Basic test', () => {
    let pool_size = 2;
    return runBatches(tasks, pool_size)
        .then(results => {
            expect(results).toEqual([
                { value: 1 },
                { value: 2 },
                { error: 'error' },
                { value: 4 },
                { error: 'error' },
                { error: 'error' }
            ])
        })
});

test('Larger pool than tasks', () => {
    let pool_size = 200;
    return runBatches(tasks, pool_size)
        .then(results => {
            expect(results).toEqual([
                { value: 1 },
                { value: 2 },
                { error: 'error' },
                { value: 4 },
                { error: 'error' },
                { error: 'error' }
            ])
        })
})

test('Pool of size 0', () => {
    let pool_size = 0;
    return runBatches(tasks, pool_size)
        .then(results => {
            expect(results).toEqual([
                { value: 1 },
                { value: 2 },
                { error: 'error' },
                { value: 4 },
                { error: 'error' },
                { error: 'error' }
            ])
        })
})

test('No tasks', () => {
    let pool_size = 2;
    let tasks = [];
    return runBatches(tasks, pool_size)
        .then(results => {
            expect(results).toEqual([])
        })
})